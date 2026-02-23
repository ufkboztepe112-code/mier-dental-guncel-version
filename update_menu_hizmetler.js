const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/ufkbo/Mier-Dental-Güncel Web/mier-dental-guncel-version';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

let updatedCount = 0;

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // General regex to capture the entire <li class="nav-dropdown"> block containing "hizmetler.html"
    const regex = /<li class="nav-dropdown">\s*<a href="hizmetler\.html"[\s\S]*?<\/ul>\s*<\/li>/;

    if (regex.test(content)) {
        content = content.replace(regex, '<li><a href="tedavilerimiz.html" class="nav-link">Tedavilerimiz</a></li>');
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${file}`);
        updatedCount++;
    }
});

console.log(`Finished updating ${updatedCount} files.`);
