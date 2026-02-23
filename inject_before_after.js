const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/ufkbo/Mier-Dental-Güncel Web/mier-dental-guncel-version';

// 1. ADD CSS
const cssFile = path.join(dir, 'style.css');
const cssToAdd = `
/* ===== BEFORE/AFTER SLIDER ===== */
.before-after-section {
    padding: 80px 0;
    background: var(--white);
    position: relative;
}

.ba-slider-container {
    max-width: 900px;
    margin: 0 auto;
    position: relative;
    border-radius: var(--radius-xl);
    overflow: hidden;
    box-shadow: var(--shadow-xl);
    aspect-ratio: 16/9;
}

@media (max-width: 768px) {
    .ba-slider-container {
        aspect-ratio: 4/3;
    }
}

.ba-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    user-select: none;
    -webkit-user-drag: none;
}

.ba-before {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    overflow: hidden;
    z-index: 2;
}

/* Better responsive approach for slider images */
.ba-img-cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.ba-slider {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
}

.ba-slider input[type="range"] {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    opacity: 0;
    cursor: ew-resize;
}

.ba-line {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 4px;
    background: var(--white);
    transform: translateX(-50%);
    pointer-events: none;
    z-index: 4;
}

.ba-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 44px;
    height: 44px;
    background: var(--white);
    border: 3px solid var(--accent);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--accent);
    font-size: 1.2rem;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    z-index: 5;
    pointer-events: none;
}

.ba-label {
    position: absolute;
    top: 20px;
    padding: 6px 16px;
    background: rgba(14, 23, 38, 0.7);
    color: var(--white);
    font-weight: 700;
    font-size: 0.9rem;
    border-radius: var(--radius-sm);
    backdrop-filter: blur(4px);
    z-index: 10;
    pointer-events: none;
}
.ba-label.before { left: 20px; }
.ba-label.after { right: 20px; }
`;

let cssContent = fs.readFileSync(cssFile, 'utf8');
if (!cssContent.includes('BEFORE/AFTER SLIDER')) {
    fs.appendFileSync(cssFile, cssToAdd);
    console.log('Added CSS for Before/After Slider');
}
