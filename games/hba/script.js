const zdbbyrch = Math.floor(Math.random() * 999999);
function checkPassword() {
    const _0x8bc8af = document.getElementById("password").value;
    const _0x48371a = document.getElementById("error-message");
    if (_0x8bc8af === zdbbyrch) {
        localStorage.setItem("oneTimePasswordComplete", "true");
        sessionStorage.setItem("authenticated", 'true');
        sessionStorage.setItem('authTimestamp', Date.now().toString());
        const _0x5dd738 = document.querySelector(".page-transition");
        _0x5dd738.classList.add("active");
        setTimeout(() => {
            window.location.href = "home.html";
        }, 0x1f4);
    } else {
        _0x48371a.textContent = "Incorrect password. Please try again.";
        const _0x4ee364 = document.getElementById("password");
        _0x4ee364.classList.add("shake");
        setTimeout(() => {
            _0x4ee364.classList.remove('shake');
        }, 0x1f4);
        setTimeout(() => {
            _0x48371a.textContent = '';
        }, 0xbb8);
    }
}
function verifyAuth() {
    const _0x36acc8 = localStorage.getItem("oneTimePasswordComplete");
    if (_0x36acc8 === "true") {
        sessionStorage.setItem('authenticated', 'true');
        sessionStorage.setItem('authTimestamp', Date.now().toString());
        return true;
    }
    sessionStorage.removeItem("authenticated");
    sessionStorage.removeItem('authTimestamp');
    window.location.replace("index.html");
    return false;
}
function openGame(_0xb4a72a) {
    window.open(_0xb4a72a, "_blank");
}
function searchMusic(_0x2f521d) {
    if (!_0x2f521d) {
        _0x2f521d = document.getElementById("music-search-input").value.trim();
        if (!_0x2f521d) {
            alert("Please enter a search term");
            return;
        }
    }
    const _0x110b86 = encodeURIComponent(_0x2f521d);
    const _0x1035b1 = "https://www.youtube.com/results?search_query=" + _0x110b86;
    window.open(_0x1035b1, "_blank");
}
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded");
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        if (localStorage.getItem("oneTimePasswordComplete") === 'true') {
            window.location.replace("home.html");
            return;
        }
    }
    const _0x46ca4e = ['home.html', "games.html", "music.html", "about.html", "system.html", 'settings.html'];
    const _0x27c334 = window.location.pathname;
    if (_0x46ca4e.some(_0x2cebc1 => _0x27c334.endsWith(_0x2cebc1) || _0x27c334.includes(_0x2cebc1.replace(".html", '')))) {
        if (!verifyAuth()) {
            return;
        }
        sessionStorage.setItem("authTimestamp", Date.now().toString());
    }
    applySavedSettings();
    document.body.classList.add("loaded");
    const _0x4a5328 = document.getElementById("password");
    if (_0x4a5328) {
        console.log("Password input found");
        _0x4a5328.addEventListener("keypress", function (_0x1cb0f0) {
            if (_0x1cb0f0.key === "Enter") {
                checkPassword();
            }
        });
        _0x4a5328.focus();
    }
});
function openGame(_0x3be3af) {
    window.open(_0x3be3af, "_blank");
}
function searchMusic(_0x4aff78) {
    if (!_0x4aff78) {
        _0x4aff78 = document.getElementById('music-search-input').value.trim();
        if (!_0x4aff78) {
            alert("Please enter a search term");
            return;
        }
    }
    const _0xc0fe0c = encodeURIComponent(_0x4aff78);
    const _0x50e759 = "https://www.youtube.com/results?search_query=" + _0xc0fe0c;
    window.open(_0x50e759, "_blank");
}
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded");
    const _0x299d6a = ["home.html", "games.html", "music.html", "about.html", 'system.html', "settings.html"];
    const _0x3c4076 = window.location.pathname;
    if (_0x299d6a.some(_0x8bac57 => _0x3c4076.endsWith(_0x8bac57) || _0x3c4076.includes(_0x8bac57.replace('.html', '')))) {
        if (!verifyAuth()) {
            return;
        }
        sessionStorage.setItem("authTimestamp", Date.now().toString());
    }
    applySavedSettings();
    document.body.classList.add('loaded');
    const _0x31b172 = document.getElementById('password');
    if (_0x31b172) {
        console.log("Password input found");
        _0x31b172.addEventListener('keypress', function (_0x4252b0) {
            if (_0x4252b0.key === "Enter") {
                checkPassword();
            }
        });
        _0x31b172.focus();
    }
    const _0x5b1d3f = document.getElementById("music-search-button");
    const _0x3ee9dc = document.getElementById('music-search-input');
    if (_0x5b1d3f && _0x3ee9dc) {
        console.log("Music search elements found");
        _0x5b1d3f.addEventListener("click", function () {
            console.log("Search button clicked");
            searchMusic();
        });
        _0x3ee9dc.addEventListener("keypress", function (_0x17b5cf) {
            if (_0x17b5cf.key === "Enter") {
                console.log("Enter key pressed in search input");
                searchMusic();
            }
        });
    }
    const _0x4b7362 = document.querySelectorAll("a[href^=\"home\"], a[href^=\"games\"], a[href^=\"music\"],
a[href ^=\"about\"], a[href^=\"system\"], a[href^=\"settings\"]");
    _0x4b7362.forEach(_0x21b805 => {
        _0x21b805.addEventListener("click", function (_0x9572d2) {
            _0x9572d2.preventDefault();
            const _0xb9219f = this.getAttribute("href");
            const _0x4593b8 = document.querySelector('.page-transition');
            if (!verifyAuth()) {
                return;
            }
            _0x4593b8.classList.add("active");
            setTimeout(() => {
                window.location.href = _0xb9219f;
            }, 0x1f4);
        });
    });
    const _0x4f15c9 = function () {
        const _0x5b4d5e = document.querySelectorAll(".content, .game-card, .about-image, .about-content, .music-search-box,
            .popular - searches, .category");
_0x5b4d5e.forEach(_0x63b896 => {
                const _0x1c4b89 = _0x63b896.getBoundingClientRect().top;
                const _0x5ad5c6 = window.innerHeight;
                if (_0x1c4b89 < _0x5ad5c6 - 0x64) { _0x63b896.classList.add("visible"); }
            });
    }; window.addEventListener("scroll",
        _0x4f15c9); _0x4f15c9(); const _0x312315 = document.querySelector(".hero-bg"); if (_0x312315) {
            window.addEventListener('scroll', function () {
                const _0x43b5e5 = window.scrollY;
                _0x312315.style.transform = "translateY(" + _0x43b5e5 * 0.4 + 'px)';
            });
        } const
            _0x545376 = document.querySelectorAll(".game-card"); _0x545376.forEach(_0x2d11bb => {
                _0x2d11bb.addEventListener("mouseenter", function () {
                    this.style.transform = 'translateY(-10px)';
                    this.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.7), 0 0 15px rgba(255, 0, 34, 0.3)";
                });
                _0x2d11bb.addEventListener("mouseleave", function () {
                    this.style.transform = '';
                    this.style.boxShadow = '';
                });
            });
    const _0x4331b2 = document.querySelectorAll(".category");
    if (_0x4331b2.length > 0x0) {
        _0x4331b2.forEach(_0x1daed2 => {
            _0x1daed2.addEventListener('mouseenter', function () {
                this.style.transform = "translateY(-5px)";
                this.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.7), 0 0 15px rgba(255, 0, 34, 0.2)";
            });
            _0x1daed2.addEventListener('mouseleave', function () {
                this.style.transform = '';
                this.style.boxShadow = '';
            });
        });
    }
    const _0x5dd99a = document.querySelectorAll('.tag');
    if (_0x5dd99a.length > 0x0) {
        _0x5dd99a.forEach(_0x479324 => {
            _0x479324.addEventListener("mouseenter", function () {
                this.style.transform = "translateY(-2px)";
                this.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.3)";
                this.style.background = "rgba(255, 0, 34, 0.2)";
            });
            _0x479324.addEventListener("mouseleave", function () {
                this.style.transform = '';
                this.style.boxShadow = '';
                this.style.background = '';
            });
            _0x479324.addEventListener('click', function () {
                const _0x18f317 = this.textContent.trim();
                console.log("Tag clicked:", _0x18f317);
                searchMusic(_0x18f317);
            });
        });
    }
    const _0x592c17 = document.querySelectorAll(".music-tag");
    if (_0x592c17.length > 0x0) {
        console.log("Music tags found:", _0x592c17.length);
        _0x592c17.forEach(_0x178c26 => {
            _0x178c26.addEventListener("click", function () {
                const _0xfbfdf5 = this.textContent.trim();
                console.log("Music tag clicked:", _0xfbfdf5);
                searchMusic(_0xfbfdf5);
            });
        });
    }
});
function applySavedSettings() {
    const _0x347272 = localStorage.getItem("codexSettings");
    if (_0x347272) {
        const _0x495d64 = JSON.parse(_0x347272);
        document.title = _0x495d64.tabTitle || "CodeX";
        const _0x45f5d3 = _0x495d64.currentFavicon || "logo.svg";
        const _0x4b4aed = document.querySelectorAll("link[rel=\"icon\"], link[rel=\"shortcut icon\"]");
        if (_0x4b4aed.length > 0x0) {
            _0x4b4aed.forEach(_0x415250 => {
                _0x415250.href = _0x45f5d3;
            });
        } else {
            const _0x5f4249 = document.createElement("link");
            _0x5f4249.rel = "icon";
            _0x5f4249.href = _0x45f5d3;
            document.head.appendChild(_0x5f4249);
        }
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const _0x5620bf = document.getElementById("game-search");
    if (!_0x5620bf) {
        return;
    }
    const _0x15ce6c = document.getElementById("clear-search");
    const _0x22720e = document.querySelectorAll(".game-card");
    const _0x1c1c2f = document.createElement("div");
    _0x1c1c2f.className = 'no-results';
    _0x1c1c2f.innerHTML = "<i class=\"fas fa-search\"></i> No games found. Try a different search term.";
    _0x5620bf.parentElement.parentElement.after(_0x1c1c2f);
    function _0x4c75dd() {
        const _0x2beae1 = _0x5620bf.value.toLowerCase().trim();
        let _0x2423b3 = false;
        _0x15ce6c.style.display = _0x2beae1 ? "block" : "none";
        _0x22720e.forEach(_0x2789d0 => {
            _0x2789d0.classList.remove('search-visible');
        });
        _0x22720e.forEach((_0x424d1c, _0x18c05e) => {
            const _0x32c114 = _0x424d1c.querySelector('h3')?.["textContent"]["toLowerCase"]() || '';
            const _0x2ab4b3 = _0x424d1c.querySelector('p')?.["textContent"]["toLowerCase"]() || '';
            if (_0x2beae1 === '' || _0x32c114.includes(_0x2beae1) || _0x2ab4b3.includes(_0x2beae1)) {
                _0x424d1c.style.display = "block";
                setTimeout(() => {
                    _0x424d1c.classList.add('search-visible');
                }, _0x18c05e * 0x32);
                _0x2423b3 = true;
            } else {
                _0x424d1c.style.display = "none";
            }
        });
        _0x1c1c2f.style.display = _0x2423b3 || !_0x2beae1 ? "none" : "block";
    }
    _0x5620bf.addEventListener("input", _0x4c75dd);
    _0x15ce6c.addEventListener('click', function () {
        _0x5620bf.value = '';
        _0x4c75dd();
        _0x5620bf.focus();
    });
    _0x4c75dd();
});
function createBookmarklet(_0x1089df, _0x570a23) {
    const _0xff6d89 = document.createElement('a');
    _0xff6d89.href = _0x570a23;
    _0xff6d89.textContent = _0x1089df;
    _0xff6d89.style.display = "none";
    document.body.appendChild(_0xff6d89);
    alert("To add this bookmarklet:\n\n1. Right-click the \"Add Bookmark\" button\n2. Select \"Add to bookmarks\" or
        \"Bookmark this link\"\n3. Save the bookmark to your bookmarks bar\n\nAlternatively, drag the button directly to
	your bookmarks bar.");
	document.body.removeChild(_0xff6d89);
}
document.addEventListener('DOMContentLoaded', function () {
    const _0xdeb08c = document.getElementById('game-search');
    const _0x4519b1 = document.getElementById('clear-search');
    const _0x23481a = document.querySelectorAll(".game-card");
    const _0x8d499b = document.querySelector(".no-results");
    function _0x486b0e() {
        const _0x2e03dc = _0xdeb08c.value.toLowerCase().trim();
        let _0x554460 = false;
        _0x23481a.forEach(_0x3416c1 => {
            const _0x1c0a4f = _0x3416c1.querySelector('h3').textContent.toLowerCase();
            if (_0x1c0a4f.includes(_0x2e03dc)) {
                _0x3416c1.style.display = "flex";
                _0x554460 = true;
            } else {
                _0x3416c1.style.display = 'none';
            }
        });
        _0x8d499b.style.display = _0x554460 ? "none" : 'block';
        _0x4519b1.style.display = _0x2e03dc ? "block" : "none";
    }
    _0xdeb08c.addEventListener('input', _0x486b0e);
    _0x4519b1.addEventListener("click", function () {
        _0xdeb08c.value = '';
        _0x486b0e();
        _0xdeb08c.focus();
    });
});
function copyBookmarkletCode(_0x3f46a6, _0x4423b1) {
    navigator.clipboard.writeText(_0x4423b1).then(() => {
        alert(`Bookmarklet code copied to clipboard!\n\nTo create the ${_0x3f46a6} bookmarklet:\n\n1. Right-click
	on your bookmarks bar\n2.Select "Add page" or "Add bookmark"\n3. For the name, enter: ${0x3f46a6} For
	the URL / location, paste the copied code\n5.Click Save`);
	})["catch"](_0x18379f => {
            console.error("Failed to copy: ", _0x18379f);
            alert("Failed to copy code. Please try again or manually select and copy the code.");
        });
}
function applyWebsiteSettings() {
    const _0x2037f0 = localStorage.getItem("websiteSettings");
    if (_0x2037f0) {
        try {
            const _0x1eaf9b = JSON.parse(_0x2037f0);
            if (_0x1eaf9b.title) {
                document.title = _0x1eaf9b.title;
            }
            if (_0x1eaf9b.favicon) {
                let _0x131b95 = document.querySelector("link[rel=\"icon\"]");
                if (!_0x131b95) {
                    _0x131b95 = document.createElement("link");
                    _0x131b95.rel = "icon";
                    document.head.appendChild(_0x131b95);
                }
                _0x131b95.href = _0x1eaf9b.favicon;
            }
            if (_0x1eaf9b.theme) {
                document.body.className = _0x1eaf9b.theme;
            }
        } catch (_0x304fe7) {
            console.error("Error applying website settings:", _0x304fe7);
        }
    }
}
applyWebsiteSettings();
window.addEventListener('storage', function (_0x5a96fd) {
    if (_0x5a96fd.key === "settingsUpdated" || _0x5a96fd.key === "websiteSettings") {
        applyWebsiteSettings();
    }
});
function copyHiddenBookmarklet(_0x1bf42d, _0x47d1cf) {
    const _0xcd48b8 = _0x47d1cf.replace(/^\/\*/, '').replace(/\*\/$/, '').trim();
    navigator.clipboard.writeText(_0xcd48b8).then(() => {
        alert("Bookmark code copied to clipboard!\n\nTo create the \"" + _0x1bf42d + "\" bookmark:\n\n1. Right-click on your
	bookmarks bar\n2.Select \"Add page\" or \"Add bookmark\"\n3. For the name, enter: " + _0x1bf42d + "\n4. For the URL
	field, paste the copied text\n5.Click Save");
	})["catch"](_0x2a462c => {
            const _0xae0490 = document.createElement("textarea");
            _0xae0490.value = _0xcd48b8;
            _0xae0490.style.position = 'fixed';
            _0xae0490.style.left = "-999999px";
            _0xae0490.style.top = '-999999px';
            document.body.appendChild(_0xae0490);
            _0xae0490.focus();
            _0xae0490.select();
            try {
                const _0x4d8353 = document.execCommand('copy');
                if (_0x4d8353) {
                    alert("Bookmark code copied to clipboard!\n\nTo create the \"" + _0x1bf42d + "\" bookmark:\n\n1. Right-click on your
	bookmarks bar\n2.Select \"Add page\" or \"Add bookmark\"\n3. For the name, enter: " + _0x1bf42d + "\n4. For the URL
	field, paste the copied text\n5.Click Save");
	} else {
                    alert("Failed to copy. Please try again or manually copy this code:\n\n" + _0xcd48b8);
                }
            } catch (_0x3e1fe3) {
                alert("Failed to copy. Please try again or manually copy this code:\n\n" + _0xcd48b8);
            }
            document.body.removeChild(_0xae0490);
        });
}
function saveSettings() {
    const _0x50fac9 = document.getElementById("tab-title").value;
    const _0x4209a0 = document.querySelector("input[name=\"favicon\"]:checked").value;
    const _0x26c541 = {
        'tabTitle': _0x50fac9,
        'currentFavicon': _0x4209a0
    };
    localStorage.setItem("codexSettings", JSON.stringify(_0x26c541));
    const _0x4f5fbe = document.getElementById("settings-success");
    _0x4f5fbe.textContent = "Settings saved successfully!";
    applySavedSettings();
    setTimeout(() => {
        _0x4f5fbe.textContent = '';
    }, 0xbb8);
}
function resetSettings() {
    const _0x1f13c3 = {
        'tabTitle': "CodeX",
        'currentFavicon': 'logo.svg'
    };
    localStorage.setItem('codexSettings', JSON.stringify(_0x1f13c3));
    document.getElementById("tab-title").value = "CodeX";
    document.querySelector("input[value=\"logo.svg\"]").checked = true;
    applySavedSettings();
    const _0x2aa18c = document.getElementById('settings-success');
    _0x2aa18c.textContent = "Settings reset to default!";
    setTimeout(() => {
        _0x2aa18c.textContent = '';
    }, 0xbb8);
}
function loadSavedSettingsIntoForm() {
    const _0x2d11d5 = localStorage.getItem("codexSettings");
    if (_0x2d11d5) {
        const _0x36ce35 = JSON.parse(_0x2d11d5);
        document.getElementById("tab-title").value = _0x36ce35.tabTitle || "CodeX";
        const _0x3eb2a7 = document.querySelector("input[value=\"" + _0x36ce35.currentFavicon + "\"]");
        if (_0x3eb2a7) {
            _0x3eb2a7.checked = true;
        } else {
            document.querySelector("input[value=\"logo.svg\"]").checked = true;
        }
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const _0x492679 = document.getElementById("settings-form");
    if (_0x492679) {
        loadSavedSettingsIntoForm();
        document.getElementById("save-settings").addEventListener('click', function (_0x5eb2d0) {
            _0x5eb2d0.preventDefault();
            saveSettings();
        });
        document.getElementById('reset-settings').addEventListener("click", function (_0xdcf699) {
            _0xdcf699.preventDefault();
            resetSettings();
        });
        document.getElementById("tab-title").addEventListener("input", function () {
            document.getElementById("title-preview").textContent = this.value || "CodeX";
        });
        const _0x5af8c7 = document.querySelectorAll("input[name=\"favicon\"]");
        _0x5af8c7.forEach(_0x7ef4c3 => {
            _0x7ef4c3.addEventListener("change", function () {
                document.getElementById("favicon-preview").src = this.value;
            });
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const _0x592652 = document.querySelectorAll(".favicon-option label img, #favicon-preview");
    _0x592652.forEach(_0x3846db => {
        _0x3846db.onload = function () {
            if (_0x3846db.id === "favicon-preview") {
                _0x3846db.style.width = "16px";
                _0x3846db.style.height = "16px";
            } else {
                _0x3846db.style.width = "32px";
                _0x3846db.style.height = "32px";
            }
            _0x3846db.style.objectFit = "contain";
        };
        if (_0x3846db.complete) {
            if (_0x3846db.id === "favicon-preview") {
                _0x3846db.style.width = "16px";
                _0x3846db.style.height = "16px";
            } else {
                _0x3846db.style.width = '32px';
                _0x3846db.style.height = '32px';
            }
            _0x3846db.style.objectFit = "contain";
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const _0x125b42 = document.querySelectorAll(".favicon-option label img, #favicon-preview");
    _0x125b42.forEach(_0x158b16 => {
        _0x158b16.onload = function () {
            _0x158b16.style.width = "32px";
            _0x158b16.style.height = "32px";
            _0x158b16.style.objectFit = 'contain';
        };
        if (_0x158b16.complete) {
            _0x158b16.style.width = "32px";
            _0x158b16.style.height = "32px";
            _0x158b16.style.objectFit = "contain";
        }
    });
});
