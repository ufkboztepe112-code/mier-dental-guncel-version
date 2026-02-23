const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/ufkbo/Mier-Dental-Güncel Web/mier-dental-guncel-version';

// 1. ADD CSS
const cssFile = path.join(dir, 'style.css');
const cssToAdd = `
/* ===== FAQ ACCORDION ===== */
.faq-section {
    padding: 80px 0;
    background-color: var(--bg-light);
}

.faq-container {
    max-width: 800px;
    margin: 0 auto;
}

.faq-item {
    background: #FFF;
    border-radius: 12px;
    margin-bottom: 20px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    transition: all 0.3s ease;
}

.faq-item:hover {
    box-shadow: 0 10px 25px rgba(37, 59, 91, 0.1);
}

.faq-question {
    width: 100%;
    text-align: left;
    padding: 24px 30px;
    background: none;
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--primary);
    font-family: 'Poppins', sans-serif;
    transition: all 0.3s ease;
}

.faq-question:hover {
    color: var(--accent);
}

.faq-question i {
    font-size: 1.2rem;
    color: var(--accent);
    transition: transform 0.4s ease;
}

.faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s cubic-bezier(0.1, 1, 0.2, 1);
    background: #FFF;
}

.faq-answer p {
    padding: 0 30px 24px 30px;
    color: var(--gray-700);
    line-height: 1.7;
    margin: 0;
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.4s ease;
}

/* Active State */
.faq-item.active .faq-question {
    color: var(--accent);
}

.faq-item.active .faq-question i {
    transform: rotate(180deg);
}

.faq-item.active .faq-answer {
    max-height: 500px; /* arbitrary large value */
}

.faq-item.active .faq-answer p {
    opacity: 1;
    transform: translateY(0);
}
`;

let cssContent = fs.readFileSync(cssFile, 'utf8');
if (!cssContent.includes('FAQ ACCORDION')) {
    fs.appendFileSync(cssFile, cssToAdd);
    console.log('Added CSS for FAQ Accordion');
}

// 2. ADD JS
const jsFile = path.join(dir, 'script.js');
const jsToAdd = `
// ===== FAQ ACCORDION LOGIC =====
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other items (optional: remove this loop if you want multiple open at once)
            faqItems.forEach(faq => {
                faq.classList.remove('active');
                faq.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });
            
            // Toggle the clicked one
            if (!isActive) {
                item.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });
});
`;

let jsContent = fs.readFileSync(jsFile, 'utf8');
if (!jsContent.includes('FAQ ACCORDION LOGIC')) {
    fs.appendFileSync(jsFile, jsToAdd);
    console.log('Added JS logic for FAQ Accordion');
}
