const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/ufkbo/Mier-Dental-Güncel Web/mier-dental-guncel-version';

// 1. Template matching the layout of the site
const templateHtml = `<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{TITLE}} | Mier Dental Clinic</title>
    <meta name="description" content="{{DESC}}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/@phosphor-icons/web@2.0.3"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav class="navbar" id="navbar">
        <div class="container nav-container">
            <a href="index.html" class="nav-logo">
                <svg width="200" height="44" viewBox="0 0 200 44" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(2, 4)">
                        <path d="M18 2c-3.5 0-6 1-7.5 2.5C9 6 8 8.5 8 11.5c0 1.8.4 3.3.9 5 .6 2 1.2 4 1.2 6.2 0 3.2-.8 5.8-1.6 8.3-.8 2.8-1.2 5-.8 7 .4 1.6 1.6 2.5 2.8 2.5s2-.8 2.8-2.5c.8-2 1.6-4.5 1.6-7.4h4.2c0 2.9.8 5.4 1.6 7.4.8 1.7 1.6 2.5 2.8 2.5s2.4-.9 2.8-2.5c.4-2 0-4.2-.8-7-.8-2.5-1.6-5.1-1.6-8.3 0-2.2.6-4.2 1.2-6.2.5-1.7.9-3.2.9-5 0-3-1-5.5-2.5-7C24 3 21.5 2 18 2z" fill="#C9A96E" opacity="0.9" />
                    </g>
                    <text x="46" y="22" font-family="'Poppins', sans-serif" font-size="18" font-weight="800" fill="#253B5B" letter-spacing="1">MIER</text>
                    <text x="46" y="38" font-family="'Poppins', sans-serif" font-size="11" font-weight="500" fill="#253B5B" letter-spacing="3" opacity="0.7">DENTAL CLINIC</text>
                </svg>
            </a>
            <ul class="nav-menu" id="navMenu">
                <li class="nav-dropdown">
                    <a href="index.html#hakkimizda" class="nav-link nav-link-dropdown">Hakkımızda <i class="ph ph-caret-down"></i></a>
                    <ul class="dropdown-menu">
                        <li><a href="misyonumuz.html">Misyonumuz</a></li>
                        <li><a href="vizyonumuz.html">Vizyonumuz</a></li>
                        <li><a href="degerlerimiz.html">Değerlerimiz</a></li>
                        <li><a href="neden-mier.html">Neden MİER?</a></li>
                    </ul>
                </li>
                <li><a href="tedavilerimiz.html" class="nav-link">Tedavilerimiz</a></li>
                <li><a href="galeri.html" class="nav-link">Galeri</a></li>
                <li><a href="blog.html" class="nav-link">Blog</a></li>
                <li><a href="sss.html" class="nav-link">SSS</a></li>
                <li><a href="iletisim.html" class="nav-link">İletişim</a></li>
                <li><a href="randevu.html" class="nav-link nav-cta">Randevu Al</a></li>
            </ul>
            <button class="nav-toggle" id="navToggle" aria-label="Menüyü aç/kapat"><span></span><span></span><span></span></button>
        </div>
    </nav>

    <section class="page-banner">
        <div class="container">
            <div class="page-banner-content">
                <span class="section-tag">Yasal Bildirimler</span>
                <h1 class="page-banner-title">{{TITLE}}</h1>
                <div class="breadcrumb">
                    <a href="index.html">Ana Sayfa</a>
                    <i class="ph ph-caret-right"></i>
                    <span>{{TITLE}}</span>
                </div>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container">
             <div class="about-card" style="text-align: left; margin-bottom: 30px; line-height: 1.8;">
                {{CONTENT}}
             </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <a href="index.html" class="footer-logo"><i class="ph ph-tooth"></i><span>Mier <strong>Dental Clinic</strong></span></a>
                    <p>Profesyonel diş hekimliğinin kurumsal adresi.</p>
                </div>
                <div class="footer-links">
                    <h4>Hızlı Erişim</h4>
                    <ul>
                        <li><a href="index.html">Ana Sayfa</a></li>
                        <li><a href="tedavilerimiz.html">Tedavilerimiz</a></li>
                        <li><a href="galeri.html">Galeri</a></li>
                        <li><a href="iletisim.html">İletişim</a></li>
                    </ul>
                </div>
                <div class="footer-contact">
                    <h4>İletişim</h4>
                    <ul>
                        <li><i class="ph ph-map-pin"></i> İsmetpaşa Mah. Kenar Cad. Gün Işığı Sit. J1 Blok No:4CG, Bayrampaşa/İstanbul</li>
                        <li><i class="ph ph-phone"></i> +90 (___) ___ __ __</li>
                        <li><i class="ph ph-envelope"></i> info@mierdental.com</li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 Mier Dental Clinic. Tüm hakları saklıdır.</p>
                <div class="footer-bottom-links">
                    <a href="kvkk.html">KVKK Politikası</a>
                    <a href="cerez-politikasi.html">Çerez Politikası</a>
                    <a href="gizlilik.html">Gizlilik Sözleşmesi</a>
                </div>
            </div>
        </div>
    </footer>
    <script src="script.js"></script>
</body>
</html>`;

// 2. Content for KVKK
const kvkkContent = `
<h2 style="color: var(--primary); margin-bottom: 20px;">Kişisel Verilerin Korunması ve İşlenmesi Hakkında Aydınlatma Metni</h2>
<p>Kişisel verilerinizin güvenliği hususuna verdiğimiz önem doğrultusunda bünyemizde barındırdığımız her türlü kişisel veri, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK")'na uygun olarak işlenmekte, saklanmakta ve aktarılmaktadır. Veri Sorumlusu sıfatıyla Mier Dental Clinic ("Klinik") olarak, kişisel verilerinizi kanunda öngörülen sınırlar bağlamında işlemekteyiz.</p>

<h3 style="margin-top:20px; color: var(--secondary);">1. Kişisel Verilerin Toplanması, İşlenmesi ve İşleme Amaçları</h3>
<p>Kişisel verileriniz, Kliniğimiz tarafından sağlanan sağlık hizmetlerinden faydalanabilmeniz amacıyla sözlü, yazılı veya elektronik ortamda toplanmaktadır. Toplanan verileriniz; kimlik bilgileriniz, iletişim bilgileriniz, sağlık verileriniz (tetkik, teşhis, tedavi bilgileri, reçete, röntgen v.b.) ve finansal verileriniz olabilir.</p>
<p>Bu veriler, tıbbi teşhis ve tedavi hizmetlerinin mevzuata uygun olarak yürütülmesi, randevu planlamasının yapılması, hasta dosyalarının oluşturulması, sağlık hizmetlerinin finansmanının planlanması ve yasal otoritelerce öngörülen bilgi saklama ve raporlama yükümlülüklerinin yerine getirilmesi amaçlarıyla işlenmektedir.</p>

<h3 style="margin-top:20px; color: var(--secondary);">2. Kişisel Verilerin Aktarılması</h3>
<p>Kişisel verileriniz, 3359 sayılı Sağlık Hizmetleri Temel Kanunu, 663 sayılı KHK, Özel Hastaneler Yönetmeliği gibi ilgili mevzuat hükümleri çerçevesinde ve yukarıda açıklanan amaçlarla; Sağlık Bakanlığı ve bağlı alt birimlerine, Sosyal Güvenlik Kurumuna, özel sigorta şirketlerine, yetkili adli/idari kurumlara ve ilgili yasalar çerçevesinde bilgi talep etmeye yetkili mercilere aktarılabilecektir.</p>

<h3 style="margin-top:20px; color: var(--secondary);">3. Kişisel Veri Sahibinin KVKK Kapsamındaki Hakları</h3>
<p>KVKK'nın 11. maddesi gereği ilgili kişiler; kişisel veri işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme, yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmiş olması hâlinde düzeltilmesini isteme haklarına sahiptir. Bu kapsamdaki taleplerinizi destek@mierdental.com adresi üzerinden İlgili Kişi Başvuru Formu vasıtasıyla bize ulaştırabilirsiniz.</p>
`;

// 3. Content for Çerez Politikası
const cerezContent = `
<h2 style="color: var(--primary); margin-bottom: 20px;">Çerez (Cookie) Aydınlatma Metni</h2>
<p>Mier Dental Clinic olarak, web sitemizden en verimli şekilde faydalanabilmeniz ve kullanıcı deneyiminizi geliştirebilmek için çerez (cookie) kullanmaktayız. Çerez kullanılmasını tercih etmezseniz tarayıcınızın ayarlarından veya aşağıdaki çerez yönetim panelinden çerezleri silebilir ya da engelleyebilirsiniz; ancak bunun sitemizin bazı işlevlerini etkileyebileceğini hatırlatmak isteriz.</p>

<h3 style="margin-top:20px; color: var(--secondary);">Çerez Nedir ve Neden Kullanılmaktadır?</h3>
<p>Çerezler, ziyaret ettiğiniz internet siteleri tarafından tarayıcılar aracılığıyla bilgisayarınıza ya da mobil cihazınıza kaydedilen küçük metin dosyalarıdır.</p>
<p>Web sitemizde çerez kullanılmasının başlıca amaçları şunlardır:</p>
<ul style="list-style-type: disc; margin-left: 20px; margin-bottom: 15px;">
    <li>İnternet sitesinin işlevselliğini ve performansını artırmak yoluyla sizlere sunulan hizmetleri geliştirmek,</li>
    <li>İnternet sitesini iyileştirmek ve site üzerinden yeni özellikler sunmak, özellikleri kişiselleştirmek,</li>
    <li>İnternet sitesinin, Mier Dental Clinic'in ve sizin hukuki ve ticari güvenliğinin teminini sağlamak.</li>
</ul>

<h3 style="margin-top:20px; color: var(--secondary);">Web Sitemizde Kullanılan Çerez Türleri</h3>
<p><strong>Zorunlu Çerezler:</strong> Web sitesinin doğru bir şekilde çalışabilmesi için zorunlu olan çerezlerdir. Güvenlik, ağ yönetimi ve erişilebilirliği sağlamak amaçlarıyla birinci taraf çerezler kullanılmaktadır.</p>
<p><strong>Performans ve Analitik Çerezleri:</strong> Ziyaretçilerin web sitesini nasıl kullandıklarını (hangi sayfaların daha çok ziyaret edildiği, hata mesajı alınıp alınmadığı vb.) analiz ederek web sitesinin performansını iyileştirmek için kullanılır.</p>

<h3 style="margin-top:20px; color: var(--secondary);">Çerez Tercihlerini Nasıl Yönetebilirsiniz?</h3>
<p>Google Chrome, Mozilla Firefox, Safari, Edge ve diğer tüm popüler web tarayıcılarında ayarlar kısmına girerek çerezleri kolayca devre dışı bırakabilir veya geçmişteli çerezleri temizleyebilirsiniz. Tarayıcınızın 'Yardım' menüsünden bu ayarlara ait güncel yönlendirmeleri bulabilirsiniz.</p>
`;

// 4. Content for Gizlilik Sözleşmesi
const gizlilikContent = `
<h2 style="color: var(--primary); margin-bottom: 20px;">Gizlilik ve İnternet Sitesi Kullanım Sözleşmesi</h2>
<p>Mier Dental Clinic olarak, web sitemizi ziyaret eden, bilgi veya randevu talebi formlarını dolduran kullanıcılarımızın siber güvenliğini sağlamak en temel önceliklerimizden biridir. Bu gizlilik sözleşmesi, kişisel ve teknik verilerinizin nasıl güvende tutulduğunu açıklamaktadır.</p>

<h3 style="margin-top:20px; color: var(--secondary);">Bilgi Güvenliği</h3>
<p>Web sitemiz üzerinden (iletişim veya randevu panellerinden) girilen her türlü kişisel (Ad, Soyad, Telefon Numarası, TC Kimlik Numarası vb.) ve medikal veriler 256-bit SSL güvenlik sertifikasyonlarıyla şifrelenerek korunmaktadır. Kliniğimiz, kullanıcıların paylaştığı bilgileri üçüncü şahıs veya kurumlarla ticari vb. başka hiçbir amaçla SATMAZ veya PAYLAŞMAZ.</p>

<h3 style="margin-top:20px; color: var(--secondary);">Üçüncü Taraf Bağlantıları</h3>
<p>Web sitemizden harici bir internet adresine yönlendirme sağlandığı durumlarda (örneğin sosyal medya hesaplarımız), Mier Dental Clinic diğer sitelerin güvenlik ilkeleri ve gizlilik politikaları konusunda sorumlu tutulamaz. Ziyaretçilerimizin diğer siteleri kullanırken ilgili sitelerin gizlilik metinlerini okumaları önerilmektedir.</p>

<h3 style="margin-top:20px; color: var(--secondary);">Sorumluluk Reddi</h3>
<p>Bu web sitesinde yer alan tedavi hizmetlerine ilişkin tüm bilgiler tamamen ziyaretçiyi/hastayı bilgilendirme odaklıdır. Sitede bulunan makaleler ve içerikler asla bir hekim muayenesi yerine geçemez. Sitemizde yer alan bilgilerin doğrudan uygulanması sonucunda doğabilecek sağlık sorunlarından Mier Dental Clinic sorumlu tutulamaz. Tıbbi teşhis ve tedavi ancak bir diş hekimi tarafından fiziksel klinik şartlarında yapılacak muayene ile belirlenmelidir.</p>

<p style="margin-top:20px;">Sitemizi kullanmaya devam etmeniz, işbu sözleşmenin detaylarını okuduğunuz ve kabul ettiğiniz anlamına gelmektedir.</p>
`;

fs.writeFileSync(path.join(dir, 'kvkk.html'), templateHtml.replace(/{{TITLE}}/g, 'KVKK Politikası').replace('{{DESC}}', 'Kişisel verilerinizin korunması ve işlenmesi hakkında aydınlatma metnimiz.').replace('{{CONTENT}}', kvkkContent), 'utf8');

fs.writeFileSync(path.join(dir, 'cerez-politikasi.html'), templateHtml.replace(/{{TITLE}}/g, 'Çerez Politikası').replace('{{DESC}}', 'Web sitemiz çerez kullanım prensipleri ve tercihleri.').replace('{{CONTENT}}', cerezContent), 'utf8');

fs.writeFileSync(path.join(dir, 'gizlilik.html'), templateHtml.replace(/{{TITLE}}/g, 'Gizlilik Sözleşmesi').replace('{{DESC}}', 'Verilerinizin çevrimiçi ortamda nasıl korunduğu hakkında gizlilik ve kullanım bildirimimiz.').replace('{{CONTENT}}', gizlilikContent), 'utf8');

console.log('Created the 3 policy files.');

// Now replace links in ALL existing HTML files.
const htmlFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html') && f !== 'kvkk.html' && f !== 'cerez-politikasi.html' && f !== 'gizlilik.html');

htmlFiles.forEach(file => {
    let htmlContent = fs.readFileSync(path.join(dir, file), 'utf8');
    let changed = false;

    // Fix Footer Bottom Links regex!
    // Often it looks like:
    // <div class="footer-bottom-links">
    //     <a href="#">KVKK</a>
    //     <a href="#">Çerez Politikası</a>
    //     <a href="#">Gizlilik</a>
    // </div>
    // or flat:
    // <div class="footer-bottom-links"><a href="#">KVKK</a><a href="#">Çerez Politikası</a><a href="#">Gizlilik</a></div>

    const regexLinks = /<div class="footer-bottom-links">[\s\S]*?<\/div>/;
    const newLinks = `<div class="footer-bottom-links">
                    <a href="kvkk.html">KVKK Politikası</a>
                    <a href="cerez-politikasi.html">Çerez Politikası</a>
                    <a href="gizlilik.html">Gizlilik Sözleşmesi</a>
                </div>`;

    if (regexLinks.test(htmlContent)) {
        htmlContent = htmlContent.replace(regexLinks, newLinks);
        changed = true;
    }

    // Replace the cookie banner text
    // <p><i class="ph ph-cookie"></i> Bu web sitesi çerezler kullanmaktadır. <a href="#">Çerez politikamız</a></p>
    const regexBanner = /<a href="#">Çerez politikamız<\/a>/g;
    if (regexBanner.test(htmlContent)) {
        htmlContent = htmlContent.replace(regexBanner, '<a href="cerez-politikasi.html">Çerez politikamız</a>');
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(path.join(dir, file), htmlContent, 'utf8');
        console.log(`Updated footer links in ${file}`);
    }
});
