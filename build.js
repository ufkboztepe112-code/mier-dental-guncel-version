const fs = require('fs');
const path = require('path');

const srcDir = __dirname;
const destDir = path.join(__dirname, 'dist_vercel');

if (fs.existsSync(destDir)) {
    fs.rmSync(destDir, { recursive: true, force: true });
}
fs.mkdirSync(destDir);

function copyDir(src, dest) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest);
    const files = fs.readdirSync(src);
    for (const file of files) {
        if (['node_modules', '.git', 'dist_vercel', '.vercel'].includes(file)) continue;
        const srcPath = path.join(src, file);
        const destPath = path.join(dest, file);
        if (fs.lstatSync(srcPath).isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

try {
    copyDir(srcDir, destDir);
    console.log("✅ Başarıyla Vercel için statik derleme oluşturuldu (dist_vercel).");
} catch (e) {
    console.error("Build hatası:", e);
    process.exit(1);
}
