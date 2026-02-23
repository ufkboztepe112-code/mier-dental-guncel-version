const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');

// Clean dist dir if it exists
if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir);

// Simple recursive copy function
function copySync(src, dest) {
    if (!fs.existsSync(src)) return;
    const stats = fs.statSync(src);
    if (stats.isDirectory()) {
        if (!fs.existsSync(dest)) fs.mkdirSync(dest);
        fs.readdirSync(src).forEach(file => {
            copySync(path.join(src, file), path.join(dest, file));
        });
    } else {
        fs.copyFileSync(src, dest);
    }
}

// Copy ALL relevant files and directories
const files = fs.readdirSync(__dirname);
const ignoreList = [
    'node_modules', '.git', '.github', 'dist',
    'package.json', 'package-lock.json', 'build_static.js',
    '.gitignore', 'vite.config.js'
];

files.forEach(file => {
    if (ignoreList.includes(file)) return;
    // skip build helper js files if you want, but won't hurt
    if (file.endsWith('.js') && file !== 'script.js' && file !== 'multilang.js') return;

    copySync(path.join(__dirname, file), path.join(distDir, file));
});

console.log('✅ Static build complete. Files safely copied to /dist for Vercel.');
