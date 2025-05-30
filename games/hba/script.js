// Prevent local use of CodeX VIP
let url = location.href;
if (url.includes('file')) {
  location.href = '/ban.html?';
} else if (!url.includes('dev=true')) {
  location.replace('/ban.html?reason=<h1>CodeX VIP is down for security concerns. <hr> For now use normal <a href="/index.html">CodeX</a>.</h1><script>localStorage.clear();</script>');
}
// CodeX VIP is temporarily dev only

// Function to open games in a new tab with CodeX Game title
function openGame(gameUrl) {
    // Open the game URL directly in a new tab
    window.open(gameUrl, '_blank', 'top=0left=0width=500height=500');
}

// Add the music search functionality
function searchMusic(query) {
    // If no query is provided, get it from the input field
    if (!query) {
        query = document.getElementById('music-search-input').value.trim();
        
        // If input is empty, show alert and return
        if (!query) {
            alert('Please enter a search term');
            return;
        }
    }
    
    // Properly encode the search query
    const encodedQuery = encodeURIComponent(query);
    const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodedQuery}`;
    
    // Open YouTube search in a new tab
    window.open(youtubeSearchUrl, '_blank');
}

// Initialize event listeners when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    
    // Check authentication first
    const protectedPages = ['home.html', 'games.html', 'music.html', 'about.html', 'system.html', 'settings.html'];
    const currentPath = window.location.pathname;
    
    // Check if current page is a protected page
    if (protectedPages.some(page => currentPath.endsWith(page) || currentPath.includes(page.replace('.html', '')))) {
        if (!verifyAuth()) {
            return;
        }
        // Refresh auth timestamp on activity
        sessionStorage.setItem('authTimestamp', Date.now().toString());
    }
    
    // Apply saved settings to all pages
    applySavedSettings();
    
    // Add animation class to body
    document.body.classList.add('loaded');
    
    // Handle password input
    const passwordInput = document.getElementById('password');
    if (passwordInput) {
        console.log('Password input found');
        passwordInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkPassword();
            }
        });
        
        // Auto-focus the password input
        passwordInput.focus();
    }
    
    // Handle music search functionality
    const musicSearchButton = document.getElementById('music-search-button');
    const musicSearchInput = document.getElementById('music-search-input');
    
    if (musicSearchButton && musicSearchInput) {
        console.log('Music search elements found');
        
        // Add click event to search button
        musicSearchButton.addEventListener('click', function() {
            console.log('Search button clicked');
            searchMusic();
        });
        
        // Add enter key event to search input
        musicSearchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                console.log('Enter key pressed in search input');
                searchMusic();
            }
        });
    }
    
    // Add page transition effect for all internal links
    const internalLinks = document.querySelectorAll('a[href^="home"], a[href^="games"], a[href^="music"], a[href^="about"], a[href^="system"], a[href^="settings"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const transition = document.querySelector('.page-transition');
            
            // Verify authentication before navigation
            if (!verifyAuth()) {
                return;
            }
            
            transition.classList.add('active');
            
            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });
    
    // Add scroll animation for elements
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.content, .game-card, .about-image, .about-content, .music-search-box, .popular-searches, .category');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    };
    
    // Run animation check on scroll
    window.addEventListener('scroll', animateOnScroll);
    // Run once on page load
    animateOnScroll();
    
    // Add parallax effect to hero section if it exists
    const hero = document.querySelector('.hero-bg');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            hero.style.transform = `translateY(${scrollPosition * 0.4}px)`;
        });
    }
    
    // Add hover effect to game cards
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.7), 0 0 15px rgba(255, 0, 34, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
    
    // Add hover effect to music categories
    const categories = document.querySelectorAll('.category');
    if (categories.length > 0) {
        categories.forEach(category => {
            category.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.7), 0 0 15px rgba(255, 0, 34, 0.2)';
            });
            
            category.addEventListener('mouseleave', function() {
                this.style.transform = '';
                this.style.boxShadow = '';
            });
        });
    }
    
    // Add hover effect to tags
    const tags = document.querySelectorAll('.tag');
    if (tags.length > 0) {
        tags.forEach(tag => {
            tag.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
                this.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.3)';
                this.style.background = 'rgba(255, 0, 34, 0.2)';
            });
            
            tag.addEventListener('mouseleave', function() {
                this.style.transform = '';
                this.style.boxShadow = '';
                this.style.background = '';
            });
            
            // Add click event to tags for music search
            tag.addEventListener('click', function() {
                const tagText = this.textContent.trim();
                console.log('Tag clicked:', tagText);
                searchMusic(tagText);
            });
        });
    }
    
    // Initialize any music tag search functionality
    const musicTags = document.querySelectorAll('.music-tag');
    if (musicTags.length > 0) {
        console.log('Music tags found:', musicTags.length);
        musicTags.forEach(tag => {
            tag.addEventListener('click', function() {
                const tagText = this.textContent.trim();
                console.log('Music tag clicked:', tagText);
                searchMusic(tagText);
            });
        });
    }
});

// Function to apply saved settings
function applySavedSettings() {
    const savedSettings = localStorage.getItem('codexSettings');
    
    if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        
        // Set page title
        document.title = settings.tabTitle || 'CodeX';
        
        // Set favicon
        const currentFavicon = settings.currentFavicon || 'logo.svg';
        const faviconLinks = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]');
        
        if (faviconLinks.length > 0) {
            faviconLinks.forEach(link => {
                link.href = currentFavicon;
            });
        } else {
            const link = document.createElement('link');
            link.rel = 'icon';
            link.href = currentFavicon;
            document.head.appendChild(link);
        }
    }
}

// Add this to a new file called games.js or to your existing script.js file

document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the games page
    const gameSearch = document.getElementById('game-search');
    if (!gameSearch) return;
    
    const clearSearchBtn = document.getElementById('clear-search');
    const gameCards = document.querySelectorAll('.game-card'); // Assuming your games are in elements with class 'game-card'
    const noResultsMessage = document.createElement('div');
    
    // Create and add the "no results" message element
    noResultsMessage.className = 'no-results';
    noResultsMessage.innerHTML = '<i class="fas fa-search"></i> No games found. Try a different search term.';
    gameSearch.parentElement.parentElement.after(noResultsMessage);
    
    // Search functionality
    function performSearch() {
        const searchTerm = gameSearch.value.toLowerCase().trim();
        let resultsFound = false;
        
        // Show/hide clear button
        clearSearchBtn.style.display = searchTerm ? 'block' : 'none';
        
        // Reset animation classes
        gameCards.forEach(card => {
            card.classList.remove('search-visible');
        });
        
        // Filter games
        gameCards.forEach((card, index) => {
            // Get game title (assuming it's in an h3 element)
            const gameTitle = card.querySelector('h3')?.textContent.toLowerCase() || '';
            // Get game description (assuming it's in a p element)
            const gameDescription = card.querySelector('p')?.textContent.toLowerCase() || '';
            
            if (searchTerm === '' || gameTitle.includes(searchTerm) || gameDescription.includes(searchTerm)) {
                card.style.display = 'block';
                // Add animation with delay based on index
                setTimeout(() => {
                    card.classList.add('search-visible');
                }, index * 50);
                resultsFound = true;
            } else {
                card.style.display = 'none';
            }
        });
        
        // Show/hide no results message
        noResultsMessage.style.display = resultsFound || !searchTerm ? 'none' : 'block';
    }
    
    // Event listeners
    gameSearch.addEventListener('input', performSearch);
    
    clearSearchBtn.addEventListener('click', function() {
        gameSearch.value = '';
        performSearch();
        gameSearch.focus();
    });
    
    // Initialize search on page load
    performSearch();
});
