const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/ufkbo/Mier-Dental-Güncel Web/mier-dental-guncel-version';
const cssFile = path.join(dir, 'style.css');

// 1. Add CSS rules
const cssToAdd = `
/* ===== WHATSAPP FLOAT ===== */
.whatsapp-float {
    position: fixed;
    width: 60px;
    height: 60px;
    bottom: 24px;
    left: 24px;
    background-color: #25D366;
    color: #FFF;
    border-radius: 50px;
    text-align: center;
    font-size: 34px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    animation: pulse-whatsapp 2s infinite;
}

.whatsapp-float:hover {
    background-color: #128C7E;
    color: #FFF;
    transform: scale(1.1);
}

@keyframes pulse-whatsapp {
    0% {
        box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
    }
    70% {
        box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
    }
}
`;

let styleContent = fs.readFileSync(cssFile, 'utf8');
if (!styleContent.includes('.whatsapp-float')) {
    fs.appendFileSync(cssFile, cssToAdd, 'utf8');
    console.log('Added CSS for WhatsApp float');
}

// 2. Add HTML to all files
const htmlFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const htmlToAdd = `
    <!-- WhatsApp Float -->
    <a href="https://wa.me/905555555555?text=Merhaba,%20randevu%20almak%20istiyorum." class="whatsapp-float" target="_blank" aria-label="WhatsApp ile İletişime Geçin">
        <i class="ph ph-whatsapp-logo"></i>
    </a>
`;

let updatedHtmlCount = 0;

htmlFiles.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    if (!content.includes('whatsapp-float')) {
        content = content.replace(/<\/body>/g, htmlToAdd + '\n</body>');
        fs.writeFileSync(path.join(dir, file), content, 'utf8');
        console.log('Added WhatsApp to ' + file);
        updatedHtmlCount++;
    }
});

console.log('Finished adding WhatsApp to ' + updatedHtmlCount + ' HTML files.');
