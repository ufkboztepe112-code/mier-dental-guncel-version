const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/ufkbo/Mier-Dental-Güncel Web/mier-dental-guncel-version';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Remove Ana Sayfa from nav menu ONLY
    content = content.replace(/<li>\s*<a href="index\.html" class="nav-link[^"]*">\s*Ana Sayfa\s*<\/a>\s*<\/li>\s*/g, '');

    // Remove Hizmetlerimiz sub-item
    content = content.replace(/<li>\s*<a href="hizmetler\.html"[^>]*>\s*Hizmetlerimiz\s*<\/a>\s*<\/li>\s*/g, '');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
});
