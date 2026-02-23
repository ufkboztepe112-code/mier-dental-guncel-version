const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/ufkbo/Mier-Dental-Güncel Web/mier-dental-guncel-version';

// 1. UPDATE CSS
const cssFile = path.join(dir, 'style.css');
const cssToAdd = `
/* ===== MASONRY GALLERY ===== */
.gallery-section { padding: 80px 0; }
.gallery-filters { display: flex; justify-content: center; gap: 15px; margin-bottom: 40px; flex-wrap: wrap; }
.gallery-filter-btn { padding: 10px 24px; border: none; background: #E8EDF3; color: var(--primary); border-radius: 50px; cursor: pointer; font-weight: 500; font-family: 'Inter', sans-serif; transition: all 0.3s ease; }
.gallery-filter-btn:hover, .gallery-filter-btn.active { background: var(--primary); color: #FFF; }

.gallery-grid { column-count: 3; column-gap: 24px; padding-bottom: 40px; }
@media (max-width: 992px) { .gallery-grid { column-count: 2; } }
@media (max-width: 576px) { .gallery-grid { column-count: 1; } }

.gallery-item {
    break-inside: avoid;
    margin-bottom: 24px;
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.gallery-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.15);
}
.gallery-item img {
    width: 100%;
    display: block;
    border-radius: 16px;
    transition: transform 0.5s ease;
}
.gallery-item:hover img {
    transform: scale(1.05);
}
.gallery-item .overlay-zoom {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(37,59,91,0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    backdrop-filter: blur(3px);
    color: #FFF;
    font-size: 2.5rem;
}
.gallery-item:hover .overlay-zoom {
    opacity: 1;
}

/* Lightbox */
.lightbox {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(14,23,38,0.95);
    z-index: 99999;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
}
.lightbox.active {
    opacity: 1;
    visibility: visible;
}
.lightbox-img-wrapper {
    position: relative;
}
.lightbox img {
    max-width: 90vw;
    max-height: 90vh;
    border-radius: 12px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.5);
    transform: scale(0.9);
    transition: transform 0.3s ease;
    object-fit: contain;
}
.lightbox.active img {
    transform: scale(1);
}
.lightbox-close {
    position: absolute;
    top: 30px;
    right: 40px;
    background: none;
    border: none;
    color: #FFF;
    font-size: 2.5rem;
    cursor: pointer;
    transition: color 0.3s;
    z-index: 10;
}
.lightbox-close:hover { color: var(--accent); }
.lightbox-prev, .lightbox-next { display: none !important; /* using simple masonry lightbox for now */ }
`;

let styleContent = fs.readFileSync(cssFile, 'utf8');
if (!styleContent.includes('MASONRY GALLERY')) {
    fs.appendFileSync(cssFile, cssToAdd);
}

// 2. UPDATE JS
const jsFile = path.join(dir, 'script.js');
const jsToAdd = `
document.addEventListener('DOMContentLoaded', () => {
    // MASONRY LIGHTBOX
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    
    if (lightbox && galleryItems.length > 0) {
        // Clear previous lightbox content safely
        const contentDiv = document.getElementById('lightboxContent');
        if (contentDiv) contentDiv.innerHTML = '';
        
        let lightboxImg = document.createElement('img');
        if (contentDiv) {
            contentDiv.appendChild(lightboxImg);
        } else {
            lightbox.appendChild(lightboxImg);
        }

        const closeBtn = document.getElementById('lightboxClose');

        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const imgNode = item.querySelector('img');
                if(imgNode) {
                    lightboxImg.src = imgNode.src;
                    lightbox.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            });
        }

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox || e.target.id === 'lightboxContent') {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Gallery Filter handling for Masonry
        const filterBtns = document.querySelectorAll('.gallery-filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filterValue = btn.getAttribute('data-filter');
                galleryItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'inline-block'; // Required for CSS column breaking natively
                        item.style.width = '100%';
                        setTimeout(() => item.style.opacity = '1', 50);
                    } else {
                        item.style.display = 'none';
                        item.style.opacity = '0';
                    }
                });
            });
        });
    }
});
`;

let jsContent = fs.readFileSync(jsFile, 'utf8');
if (!jsContent.includes('MASONRY LIGHTBOX')) {
    fs.appendFileSync(jsFile, jsToAdd);
}

// 3. UPDATE HTML
const htmlFile = path.join(dir, 'galeri.html');
let htmlContent = fs.readFileSync(htmlFile, 'utf8');

// Replace everything inside <div class="gallery-grid" id="galleryGrid"> ... </div>
// with real images from Unsplash optimized as Dental placeholders 
// of varied masonry heights.
const newGalleryGrid = `
            <div class="gallery-grid" id="galleryGrid">
                <!-- Klinik -->
                <div class="gallery-item" data-category="klinik" data-aos="fade-up">
                    <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&h=800&q=80" alt="Klinik Ortamı">
                    <div class="overlay-zoom"><i class="ph ph-magnifying-glass-plus"></i></div>
                </div>
                <div class="gallery-item" data-category="klinik" data-aos="fade-up" data-aos-delay="50">
                    <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&h=400&q=80" alt="Bekleme Salonu">
                    <div class="overlay-zoom"><i class="ph ph-magnifying-glass-plus"></i></div>
                </div>
                <div class="gallery-item" data-category="klinik" data-aos="fade-up" data-aos-delay="100">
                    <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&h=700&q=80" alt="Sterilizasyon Ünitesi">
                    <div class="overlay-zoom"><i class="ph ph-magnifying-glass-plus"></i></div>
                </div>
                
                <!-- Tedavi -->
                <div class="gallery-item" data-category="tedavi" data-aos="fade-up">
                    <img src="https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=600&h=500&q=80" alt="Estetik Diş">
                    <div class="overlay-zoom"><i class="ph ph-magnifying-glass-plus"></i></div>
                </div>
                <div class="gallery-item" data-category="tedavi" data-aos="fade-up" data-aos-delay="50">
                    <img src="https://images.unsplash.com/photo-1598256989467-31fa05c8dce7?auto=format&fit=crop&w=600&h=900&q=80" alt="Gülüş Tasarımı">
                    <div class="overlay-zoom"><i class="ph ph-magnifying-glass-plus"></i></div>
                </div>
                <div class="gallery-item" data-category="tedavi" data-aos="fade-up" data-aos-delay="100">
                    <img src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600&h=600&q=80" alt="Tedavi Sonrası">
                    <div class="overlay-zoom"><i class="ph ph-magnifying-glass-plus"></i></div>
                </div>

                <!-- Ekip -->
                <div class="gallery-item" data-category="ekip" data-aos="fade-up">
                    <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&h=750&q=80" alt="Uzman Doktorumuz">
                    <div class="overlay-zoom"><i class="ph ph-magnifying-glass-plus"></i></div>
                </div>
                <div class="gallery-item" data-category="ekip" data-aos="fade-up" data-aos-delay="50">
                    <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&h=450&q=80" alt="Ekip Çalışması">
                    <div class="overlay-zoom"><i class="ph ph-magnifying-glass-plus"></i></div>
                </div>
                <div class="gallery-item" data-category="ekip" data-aos="fade-up" data-aos-delay="100">
                    <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&h=550&q=80" alt="Hekimlerimiz">
                    <div class="overlay-zoom"><i class="ph ph-magnifying-glass-plus"></i></div>
                </div>
            </div>
`;

// we need to completely replace the old gallery-grid.
const regex = /<div class="gallery-grid" id="galleryGrid">[\s\S]*?<!-- Lightbox -->/g;
if (regex.test(htmlContent)) {
    htmlContent = htmlContent.replace(regex, newGalleryGrid + '\n            <!-- Lightbox -->');
    fs.writeFileSync(htmlFile, htmlContent);
    console.log('Added Masonry Gallery mapping to HTML');
} else {
    console.log('Could not find gallery-grid regex to replace.');
}

