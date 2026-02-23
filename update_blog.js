const fs = require('fs');

const file = 'c:/Users/ufkbo/Mier-Dental-Güncel Web/mier-dental-guncel-version/blog.html';
let content = fs.readFileSync(file, 'utf8');

// Replace the icon divs with background gradient with exact img tags
content = content.replace(
    /<div class="blog-card-image" style="background: linear-gradient\(135deg, #E8EDF3, #D5DEED\);"><i\s*class="ph-fill ph-tooth" style="font-size: 3rem; color: #253B5B;"><\/i><\/div>/g,
    `<div class="blog-card-image">
                        <img src="images/blog/blog_implant.png" alt="İmplant Tedavisi" style="width:100%; height:100%; object-fit:cover;">
                    </div>`
);

content = content.replace(
    /<div class="blog-card-image" style="background: linear-gradient\(135deg, #F7F0E3, #EDE3CC\);"><i\s*class="ph-fill ph-sparkle" style="font-size: 3rem; color: #C9A96E;"><\/i><\/div>/g,
    `<div class="blog-card-image">
                        <img src="images/blog/blog_whitening.png" alt="Diş Beyazlatma" style="width:100%; height:100%; object-fit:cover;">
                    </div>`
);

content = content.replace(
    /<div class="blog-card-image" style="background: linear-gradient\(135deg, #E8EDF3, #CFD8E3\);"><i\s*class="ph-fill ph-baby" style="font-size: 3rem; color: #3A5A80;"><\/i><\/div>/g,
    `<div class="blog-card-image">
                        <img src="images/blog/blog_pediatric.png" alt="Çocuk Diş Bakımı" style="width:100%; height:100%; object-fit:cover;">
                    </div>`
);

content = content.replace(
    /<div class="blog-card-image" style="background: linear-gradient\(135deg, #EBF0F5, #D2DCE9\);"><i\s*class="ph-fill ph-smiley" style="font-size: 3rem; color: #253B5B;"><\/i><\/div>/g,
    `<div class="blog-card-image">
                        <img src="images/blog/blog_ortho.png" alt="Ortodonti Tedavisi" style="width:100%; height:100%; object-fit:cover;">
                    </div>`
);

content = content.replace(
    /<div class="blog-card-image" style="background: linear-gradient\(135deg, #FDF8F0, #F0E4CC\);"><i\s*class="ph-fill ph-first-aid-kit" style="font-size: 3rem; color: #C9A96E;"><\/i><\/div>/g,
    `<div class="blog-card-image">
                        <img src="images/blog/blog_rootcanal.png" alt="Kanal Tedavisi" style="width:100%; height:100%; object-fit:cover;">
                    </div>`
);

content = content.replace(
    /<div class="blog-card-image" style="background: linear-gradient\(135deg, #E8EDF3, #D1DAE8\);"><i\s*class="ph-fill ph-heart" style="font-size: 3rem; color: #253B5B;"><\/i><\/div>/g,
    `<div class="blog-card-image">
                        <img src="images/blog/blog_brushing.png" alt="Doğru Diş Fırçalama" style="width:100%; height:100%; object-fit:cover;">
                    </div>`
);

fs.writeFileSync(file, content, 'utf8');
console.log('Blog HTML updated.');
