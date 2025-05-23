// Password protection
function checkPassword() {
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    // Set the password here
    const correctPassword = "w45uny54o9yn34598tvn354rt3trp237g14-32t450[p912tn98p234r093wenretv9834tn9p83w54wp985rtyrnep98tn30q594ren5y9wt4nr04ny39bt4m0tgn4589p3tngp98e4ttfcnp98y5etf9835nh9845w9t8twe9crty9843mt9834mt9834y54n958nt5489t4n398tn9358tn98e5ynvt9843nt93tn934tvn9p843ntv9834tnv0439t34tv3vt34n59234nt9843yo9834w9tny34etygn9o38retro9wetw498tn";
    
    if (password === correctPassword) {
        // Store one-time password completion in localStorage permanently
        localStorage.setItem('oneTimePasswordComplete', 'true');
        
        // Set authentication in session storage with timestamp
        sessionStorage.setItem('authenticated', 'true');
        sessionStorage.setItem('authTimestamp', Date.now().toString());
        
        // Show page transition
        const transition = document.querySelector('.page-transition');
        transition.classList.add('active');
        
        // Redirect to home page on correct password after transition
        setTimeout(() => {
            window.location.href = "home.html";
        }, 500);
    } else {
        // Show error message on incorrect password
        errorMessage.textContent = "Incorrect password. Please try again.";
        // Add shake animation to input
        const passwordInput = document.getElementById('password');
        passwordInput.classList.add('shake');
        
        // Remove shake class after animation completes
        setTimeout(() => {
            passwordInput.classList.remove('shake');
        }, 500);
        
        // Clear the error message after 3 seconds
        setTimeout(() => {
            errorMessage.textContent = "";
        }, 3000);
    }
}

// Function to verify authentication
function verifyAuth() {
    const oneTimePasswordComplete = localStorage.getItem('oneTimePasswordComplete');
    const authenticated = sessionStorage.getItem('authenticated');
    const authTimestamp = sessionStorage.getItem('authTimestamp');
    const currentTime = Date.now();
    
    // If one-time password is complete, always allow access
    if (oneTimePasswordComplete === 'true') {
        // Ensure session storage is set
        sessionStorage.setItem('authenticated', 'true');
        sessionStorage.setItem('authTimestamp', Date.now().toString());
        return true;
    }
    
    // Clear session storage only
    sessionStorage.removeItem('authenticated');
    sessionStorage.removeItem('authTimestamp');
    window.location.replace("index.html");
    return false;
}

// Function to open games in a new tab with CodeX Game title
function openGame(gameUrl) {
    // Open the game URL directly in a new tab
    window.open(gameUrl, '_blank');
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
    
    // Check if one-time password is complete and redirect from index page
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        if (localStorage.getItem('oneTimePasswordComplete') === 'true') {
            window.location.replace('home.html');
            return;
        }
    }
    
    // Check authentication for protected pages
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
});

// Function to open games in a new tab with CodeX Game title
function openGame(gameUrl) {
    // Open the game URL directly in a new tab
    window.open(gameUrl, '_blank');
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

// Function to create a bookmarklet
function createBookmarklet(name, code) {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = code;
    link.textContent = name;
    link.style.display = 'none';
    
    // Add to document, click it to create bookmark dialog, then remove
    document.body.appendChild(link);
    
    // Alert the user with instructions
    alert('To add this bookmarklet:\n\n1. Right-click the "Add Bookmark" button\n2. Select "Add to bookmarks" or "Bookmark this link"\n3. Save the bookmark to your bookmarks bar\n\nAlternatively, drag the button directly to your bookmarks bar.');
    
    // Remove the temporary link
    document.body.removeChild(link);
}

// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('game-search');
    const clearButton = document.getElementById('clear-search');
    const bookmarklets = document.querySelectorAll('.game-card');
    const noResults = document.querySelector('.no-results');
    
    // Function to filter bookmarklets
    function filterBookmarklets() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        let resultsFound = false;
        
        bookmarklets.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                card.style.display = 'flex';
                resultsFound = true;
            } else {
                card.style.display = 'none';
            }
        });
        
        // Show/hide no results message
        noResults.style.display = resultsFound ? 'none' : 'block';
        
        // Show/hide clear button
        clearButton.style.display = searchTerm ? 'block' : 'none';
    }
    
    // Event listeners
    searchInput.addEventListener('input', filterBookmarklets);
    
    clearButton.addEventListener('click', function() {
        searchInput.value = '';
        filterBookmarklets();
        searchInput.focus();
    });
});

// Function to copy bookmarklet code and show instructions
function copyBookmarkletCode(name, code) {
    // Copy the code to clipboard
    navigator.clipboard.writeText(code).then(() => {
        // Show instructions in an alert
        alert(`Bookmarklet code copied to clipboard!\n\nTo create the "${name}" bookmarklet:\n\n1. Right-click on your bookmarks bar\n2. Select "Add page" or "Add bookmark"\n3. For the name, enter: ${name}\n4. For the URL/location, paste the copied code\n5. Click Save`);
    }).catch(err => {
        console.error('Failed to copy: ', err);
        alert('Failed to copy code. Please try again or manually select and copy the code.');
    });
}

// Apply website settings
function applyWebsiteSettings() {
    const savedSettingsJSON = localStorage.getItem('websiteSettings');
    if (savedSettingsJSON) {
        try {
            const savedSettings = JSON.parse(savedSettingsJSON);
            if (savedSettings.title) document.title = savedSettings.title;
            if (savedSettings.favicon) {
                let faviconLink = document.querySelector('link[rel="icon"]');
                if (!faviconLink) {
                    faviconLink = document.createElement('link');
                    faviconLink.rel = 'icon';
                    document.head.appendChild(faviconLink);
                }
                faviconLink.href = savedSettings.favicon;
            }
            if (savedSettings.theme) document.body.className = savedSettings.theme;
        } catch (error) {
            console.error('Error applying website settings:', error);
        }
    }
}
applyWebsiteSettings();
window.addEventListener('storage', function(e) {
    if (e.key === 'settingsUpdated' || e.key === 'websiteSettings') {
        applyWebsiteSettings();
    }
});

 // Function to copy bookmarklet code that's disguised as a comment
function copyHiddenBookmarklet(name, commentedCode) {
    // Extract the actual code from between the comment markers
    const actualCode = commentedCode.replace(/^\/\*/, '').replace(/\*\/$/, '').trim();
    
    // Copy the actual code to clipboard
    navigator.clipboard.writeText(actualCode).then(() => {
        // Show instructions in an alert
        alert(`Bookmark code copied to clipboard!\n\nTo create the "${name}" bookmark:\n\n1. Right-click on your bookmarks bar\n2. Select "Add page" or "Add bookmark"\n3. For the name, enter: ${name}\n4. For the URL field, paste the copied text\n5. Click Save`);
    }).catch(err => {
        // Fallback for browsers that don't support clipboard API
        const textArea = document.createElement('textarea');
        textArea.value = actualCode;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            const successful = document.execCommand('copy');
            if (successful) {
                alert(`Bookmark code copied to clipboard!\n\nTo create the "${name}" bookmark:\n\n1. Right-click on your bookmarks bar\n2. Select "Add page" or "Add bookmark"\n3. For the name, enter: ${name}\n4. For the URL field, paste the copied text\n5. Click Save`);
            } else {
                alert('Failed to copy. Please try again or manually copy this code:\n\n' + actualCode);
            }
        } catch (err) {
            alert('Failed to copy. Please try again or manually copy this code:\n\n' + actualCode);
        }
        
        document.body.removeChild(textArea);
    });
}

// Settings functionality
function saveSettings() {
    // Get values from form
    const tabTitle = document.getElementById('tab-title').value;
    const selectedFavicon = document.querySelector('input[name="favicon"]:checked').value;
    
    // Create settings object
    const settings = {
        tabTitle: tabTitle,
        currentFavicon: selectedFavicon
    };
    
    // Save to localStorage
    localStorage.setItem('codexSettings', JSON.stringify(settings));
    
    // Show success message
    const successMessage = document.getElementById('settings-success');
    successMessage.textContent = "Settings saved successfully!";
    
    // Apply settings immediately
    applySavedSettings();
    
    // Clear success message after 3 seconds
    setTimeout(() => {
        successMessage.textContent = "";
    }, 3000);
}

// Reset settings to default
function resetSettings() {
    // Default settings
    const defaultSettings = {
        tabTitle: 'CodeX',
        currentFavicon: 'logo.svg'
    };
    
    // Save default settings
    localStorage.setItem('codexSettings', JSON.stringify(defaultSettings));
    
    // Update form with default values
    document.getElementById('tab-title').value = defaultSettings.tabTitle;
    document.querySelector(`input[value="${defaultSettings.currentFavicon}"]`).checked = true;
    
    // Apply settings
    applySavedSettings();
    
    // Show success message
    const successMessage = document.getElementById('settings-success');
    successMessage.textContent = "Settings reset to default!";
    
    // Clear success message after 3 seconds
    setTimeout(() => {
        successMessage.textContent = "";
    }, 3000);
}

// Load saved settings into the form
function loadSavedSettingsIntoForm() {
    const savedSettings = localStorage.getItem('codexSettings');
    
    if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        
        // Set form values
        document.getElementById('tab-title').value = settings.tabTitle || 'CodeX';
        
        // Set favicon radio button
        const faviconInput = document.querySelector(`input[value="${settings.currentFavicon}"]`);
        if (faviconInput) {
            faviconInput.checked = true;
        } else {
            // Default to logo.svg if saved favicon not found in options
            document.querySelector('input[value="logo.svg"]').checked = true;
        }
    }
}

// Initialize settings page
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the settings page
    const settingsForm = document.getElementById('settings-form');
    if (settingsForm) {
        // Load saved settings into form
        loadSavedSettingsIntoForm();
        
        // Add event listeners for save and reset buttons
        document.getElementById('save-settings').addEventListener('click', function(e) {
            e.preventDefault();
            saveSettings();
        });
        
        document.getElementById('reset-settings').addEventListener('click', function(e) {
            e.preventDefault();
            resetSettings();
        });
        
        // Preview functionality for tab title
        document.getElementById('tab-title').addEventListener('input', function() {
            document.getElementById('title-preview').textContent = this.value || 'CodeX';
        });
        
        // Preview functionality for favicon
        const faviconInputs = document.querySelectorAll('input[name="favicon"]');
        faviconInputs.forEach(input => {
            input.addEventListener('change', function() {
                document.getElementById('favicon-preview').src = this.value;
            });
        });
    }
});

// Add this to your settings.js file
document.addEventListener('DOMContentLoaded', function() {
    // Force favicon images to be consistent size
    const faviconImages = document.querySelectorAll('.favicon-option label img, #favicon-preview');
    
    faviconImages.forEach(img => {
        img.onload = function() {
            // For preview favicon
            if (img.id === 'favicon-preview') {
                img.style.width = '16px';
                img.style.height = '16px';
            } 
            // For option favicons
            else {
                img.style.width = '32px';
                img.style.height = '32px';
            }
            img.style.objectFit = 'contain';
        };
        
        // Apply styles immediately for already loaded images
        if (img.complete) {
            if (img.id === 'favicon-preview') {
                img.style.width = '16px';
                img.style.height = '16px';
            } else {
                img.style.width = '32px';
                img.style.height = '32px';
            }
            img.style.objectFit = 'contain';
        }
    });
});


// Add this to your settings.js file
document.addEventListener('DOMContentLoaded', function() {
    // Force favicon images to be consistent size
    const faviconImages = document.querySelectorAll('.favicon-option label img, #favicon-preview');
    
    faviconImages.forEach(img => {
        img.onload = function() {
            img.style.width = '32px';
            img.style.height = '32px';
            img.style.objectFit = 'contain';
        };
        
        // Apply styles immediately for already loaded images
        if (img.complete) {
            img.style.width = '32px';
            img.style.height = '32px';
            img.style.objectFit = 'contain';
        }
    });
});
