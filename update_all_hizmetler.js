const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/ufkbo/Mier-Dental-Güncel Web/mier-dental-guncel-version';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

let updatedCount = 0;

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    // 1. Hero Buttons (in index.html primarily, but search globally just in case)
    if (content.includes('href="hizmetler.html" class="btn btn-outline btn-lg"')) {
        content = content.replace(/href="hizmetler\.html" class="btn btn-outline btn-lg"/g, 'href="tedavilerimiz.html" class="btn btn-outline btn-lg"');
        content = content.replace(/Hizmetlerimiz\s*<\/a>\s*<\/div>\s*<div class="hero-trust">/g, 'Tedavilerimiz\n                    </a>\n                </div>\n                <div class="hero-trust">');
        changed = true;
    }

    // 2. All Services button in index.html
    if (content.includes('href="hizmetler.html" class="btn btn-outline"')) {
        content = content.replace(/<a href="hizmetler\.html" class="btn btn-outline">Tüm Hizmetleri Görüntüle /g, '<a href="tedavilerimiz.html" class="btn btn-outline">Tüm Tedavileri Görüntüle ');
        changed = true;
    }

    // 3. Footer Links replacement
    // The ul structure looks like:
    /*
        <div class="footer-links">
            <h4>Hızlı Linkler</h4>
            <ul>
                <li><a href="index.html">Ana Sayfa</a></li>
                <li><a href="index.html#hakkimizda">Hakkımızda</a></li>
                <li><a href="hizmetler.html">Hizmetler</a></li>
                <li><a href="galeri.html">Galeri</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="sss.html">SSS</a></li>
            </ul>
        </div>
        <div class="footer-links">
            <h4>Hizmetlerimiz</h4>
            <ul>
                <li><a href="hizmetler.html">Dolgu Tedavisi</a></li>
                <li><a href="hizmetler.html">Tartar Temizliği</a></li>
                <li><a href="hizmetler.html">İmplant Tedavisi</a></li>
                <li><a href="tedavilerimiz.html">Tedavilerimiz</a></li>
            </ul>
        </div>
    */

    // First let's fix the Hızlı linkler (Hizmetler -> Tedavilerimiz)
    const hzRegex = /<li><a href="hizmetler\.html">Hizmetler<\/a><\/li>/g;
    if (hzRegex.test(content)) {
        content = content.replace(hzRegex, '<li><a href="tedavilerimiz.html">Tedavilerimiz</a></li>');
        changed = true;
    }

    // Second, replace the "Hizmetlerimiz" footer links
    const footerServicesBlock = /<h4>Hizmetlerimiz<\/h4>\s*<ul>\s*<li><a href="hizmetler\.html">Dolgu Tedavisi<\/a><\/li>\s*<li><a href="hizmetler\.html">Tartar Temizliği<\/a><\/li>\s*<li><a href="hizmetler\.html">İmplant Tedavisi<\/a><\/li>\s*<li><a href="tedavilerimiz\.html">Tedavilerimiz<\/a><\/li>\s*<\/ul>/g;

    const newFooterServicesBlock = `<h4>Tedavilerimiz</h4>
                        <ul>
                            <li><a href="tedavilerimiz.html?tab=implant">İmplant Tedavisi</a></li>
                            <li><a href="tedavilerimiz.html?tab=dolgu">Dolgu Tedavisi</a></li>
                            <li><a href="tedavilerimiz.html?tab=tartar">Tartar Temizliği</a></li>
                            <li><a href="tedavilerimiz.html?tab=ortodonti">Ortodonti</a></li>
                            <li><a href="tedavilerimiz.html?tab=estetik">Gülüş Tasarımı</a></li>
                        </ul>`;

    if (footerServicesBlock.test(content)) {
        content = content.replace(footerServicesBlock, newFooterServicesBlock);
        changed = true;
    }

    // Replace any leftover random "Hizmetler" link references inside the codebase
    content = content.replace(/<a href="hizmetler\.html"/g, '<a href="tedavilerimiz.html"');

    if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated everything down to footer in ${file}`);
        updatedCount++;
    }
});

console.log(`Finished updating ${updatedCount} files.`);
