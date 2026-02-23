const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/ufkbo/Mier-Dental-Güncel Web/mier-dental-guncel-version';

// 1. ADD CSS
const cssFile = path.join(dir, 'style.css');
const cssToAdd = `
/* ===== GOOGLE TRANSLATE OVERRIDES ===== */
.goog-te-banner-frame.skiptranslate { display: none !important; }
body { top: 0px !important; }
#goog-gt-tt { display: none !important; box-shadow: none !important; }
.goog-text-highlight { background-color: transparent !important; box-shadow: none !important; }

/* Multilang Dropdown specific tweaks */
.lang-dropdown .dropdown-menu {
    min-width: 150px;
    padding: 10px 0;
}
.lang-dropdown .dropdown-menu li a {
    display: flex;
    align-items: center;
    gap: 10px;
}
.lang-dropdown .ph-globe {
    font-size: 1.2rem;
    color: var(--primary);
}
`;
let cssContent = fs.readFileSync(cssFile, 'utf8');
if (!cssContent.includes('GOOGLE TRANSLATE OVERRIDES')) {
    fs.appendFileSync(cssFile, cssToAdd);
    console.log('Added CSS overrides');
}

// 2. Add translation logic to script.js
const jsFile = path.join(dir, 'script.js');
const jsToAdd = `
// ===== CUSTOM MULTILANGUAGE =====
document.addEventListener('DOMContentLoaded', () => {
    const langOptions = document.querySelectorAll('.lang-option');
    // Using querySelectorAll to find the active language toggles safely
    const currentLangTexts = document.querySelectorAll('.currentLang');

    // Function to trigger Google Translate dropdown
    function changeLanguage(langCode) {
        const selectBox = document.querySelector('.goog-te-combo');
        if (selectBox) {
            selectBox.value = langCode;
            // The google translate dropdown requires valid DOM events to trigger change
            selectBox.dispatchEvent(new Event('change'));
        }
    }

    // Set active based on cookie if available
    const match = document.cookie.match(/googtrans=\\/tr\\/([a-z]{2})/);
    if (match && match[1]) {
        currentLangTexts.forEach(el => {
            el.innerHTML = '<i class="ph ph-globe"></i> ' + match[1].toUpperCase() + ' <i class="ph ph-caret-down"></i>';
        });
    }

    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = option.getAttribute('data-lang');
            
            currentLangTexts.forEach(el => {
                el.innerHTML = '<i class="ph ph-globe"></i> ' + lang.toUpperCase() + ' <i class="ph ph-caret-down"></i>';
            });
            
            // Check if google API is injected yet
            const selectBox = document.querySelector('.goog-te-combo');
            if (selectBox) {
                changeLanguage(lang);
            } else {
                // if clicked very fast, retry after 500ms
                setTimeout(() => { changeLanguage(lang); }, 500);
            }
            
            // Close mobile menu if open
            const navMenu = document.getElementById('navMenu');
            const navToggle = document.getElementById('navToggle');
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                if (navToggle) navToggle.classList.remove('active');
            }
        });
    });
});
`;
let jsContent = fs.readFileSync(jsFile, 'utf8');
if (!jsContent.includes('CUSTOM MULTILANGUAGE')) {
    fs.appendFileSync(jsFile, jsToAdd);
    console.log('Added JS logic');
}

// 3. UPDATE HTML FILES
const htmlFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const langDropdownHtml = `
                <li class="nav-dropdown lang-dropdown">
                    <a href="#" class="nav-link currentLang"><i class="ph ph-globe"></i> TR <i class="ph ph-caret-down"></i></a>
                    <ul class="dropdown-menu">
                        <li><a href="#" class="lang-option" data-lang="tr">🇹🇷 Türkçe</a></li>
                        <li><a href="#" class="lang-option" data-lang="en">🇬🇧 English</a></li>
                        <li><a href="#" class="lang-option" data-lang="de">🇩🇪 Deutsch</a></li>
                        <li><a href="#" class="lang-option" data-lang="ar">🇸🇦 العربية</a></li>
                        <li><a href="#" class="lang-option" data-lang="ru">🇷🇺 Русский</a></li>
                        <li><a href="#" class="lang-option" data-lang="fr">🇫🇷 Français</a></li>
                    </ul>
                </li>
                <li><a href="randevu.html"`;

const googleScriptHtml = `
    <!-- Google Translate Script -->
    <div id="google_translate_element" style="display:none;"></div>
    <script type="text/javascript">
        function googleTranslateElementInit() {
            new google.translate.TranslateElement({
                pageLanguage: 'tr',
                includedLanguages: 'tr,en,de,ar,ru,fr',
                autoDisplay: false
            }, 'google_translate_element');
        }
    </script>
    <script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
</body>`;

htmlFiles.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    let changed = false;

    if (!content.includes('lang-dropdown')) {
        content = content.replace(/<li><a href="randevu\.html"/, langDropdownHtml);
        changed = true;
    }

    if (!content.includes('google_translate_element')) {
        content = content.replace(/<\/body>/, googleScriptHtml);
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(path.join(dir, file), content, 'utf8');
        console.log('Added MultiLang to ' + file);
    }
});
