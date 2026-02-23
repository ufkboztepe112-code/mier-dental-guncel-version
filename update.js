const fs = require('fs');

const file = 'c:/Users/ufkbo/Mier-Dental-Güncel Web/mier-dental-guncel-version/tedavilerimiz.html';
let html = fs.readFileSync(file, 'utf8');

const tabs = [
    {
        id: 'tab-implant',
        icon: 'ph-wrench',
        title: 'İmplant Tedavisi',
        tagline: 'Eksik dişlerinize kalıcı, doğal ve güçlü çözüm',
        image: 'images/services/implant_tedavisi.png',
        content: `
                        <h3><i class="ph ph-info"></i> Tedavi Hakkında Kapsamlı Bilgi</h3>
                        <p>Diş implantı, eksik dişlerin yerine çene kemiğine yerleştirilen, doku dostu titanyum vidalardır. Kemikle biyolojik olarak kaynaştıktan (osseointegrasyon) sonra üzerine porselen veya zirkonyum kron takılarak hem estetik hem de fonksiyonel olarak doğal diş görünümü sağlanır. Titanyum, insan vücudu ile en uyumlu materyallerden biri olduğu için vücut tarafından reddedilme riski yok denecek kadar azdır.</p>
                        <p>İmplant tedavisi yalnızca estetik bir çözüm değil, aynı zamanda sistemik sağlığınızı ve yaşam kalitenizi doğrudan etkileyen tıbbi bir gerekliliktir. Geleneksel köprü ve hareketli protez gibi alternatif çözümlere göre kıyaslanamayacak kadar kalıcı ve konforlu bir seçenektir. Geleneksel köprülerde boşluğun yanındaki sağlam dişlerin kesilmesi gerekirken, implant tedavisinde komşu dişlere kesinlikle dokunulmaz ve zarar verilmez.</p>
                        <p>Diş kaybı, estetik kaygıların ötesinde çene kemiğinde erimeye (rezorbsiyon) yol açar. İmplant, tıpkı doğal bir diş kökü gibi çene kemiğine baskı uygulayarak kemik erimesini durduran tek tedavi yöntemidir. Çiğneme fonksiyonunun tam olarak geri kazanılması, sindirim sistemi sorunlarının önüne geçerken, aynı zamanda konuşmadaki bozuklukları da düzelterek hastanın özgüvenini ciddi anlamda artırır.</p>
                        <p>Çeşitli kemik yetersizliklerinde (sinüs sarkması, kemik incelmesi vb.) ileri cerrahi teknikler olan Sinüs Lifting (sinüs tabanı yükseltme) ve kemik tozu (greft) uygulamaları ile implant yapımı için gerekli zemin başarıyla hazırlanabilmektedir. Böylece, yıllar önce dişini kaybetmiş hastalar bile güvenle implant tedavisi görebilmektedir.</p>
        `,
        steps: `
                            <div class="treatment-step">
                                <span class="step-number">1</span>
                                <div>
                                    <strong>Detaylı Muayene & 3D Planlama</strong>
                                    <p>Gelişmiş 3D tomografi (CBCT) çekimi ile çene kemiğinin genişliği, yüksekliği ve kalitesi milimetrik olarak değerlendirilir. Sinir yolları ve sinüs boşlukları tespit edilerek dijital ortamda sıfır hata ile implantın konumu belirlenir.</p>
                                </div>
                            </div>
                            <div class="treatment-step">
                                <span class="step-number">2</span>
                                <div>
                                    <strong>İmplantın Çene Kemiğine Yerleştirilmesi (Cerrahi Aşama)</strong>
                                    <p>Klinik ortamında, yüksek sterilizasyon standartları altında lokal anestezi ile ağrısız bir şekilde titanyum vida çene kemiğine yerleştirilir. İşlem genellikle tek diş için sadece 15-30 dakika kadar sürer.</p>
                                </div>
                            </div>
                            <div class="treatment-step">
                                <span class="step-number">3</span>
                                <div>
                                    <strong>Osseointegrasyon (İyileşme ve Kaynaşma) Süreci</strong>
                                    <p>İmplantın kemikle tamamen bütünleşmesi için üst çenede ortalama 3-4 ay, alt çenede ise 2-3 ay beklenir. Bu süre zarfında hastanın dişsiz kalmaması için geçici e-max veya akrilik kronlar/protezler kullanılabilir.</p>
                                </div>
                            </div>
                            <div class="treatment-step">
                                <span class="step-number">4</span>
                                <div>
                                    <strong>Ölçü ve Üst Yapı (Kron) Takılması</strong>
                                    <p>İyileşme tamamlandığında, dijital içi tarayıcılarla hassas ölçüler alınır. Laboratuvar ortamında hastanın yüz tipine, ten rengine ve diğer dişlerine mükemmel uyum sağlayan porselen veya zirkonyum kronlar üretilerek implantın üzerine sabitlenir.</p>
                                </div>
                            </div>
        `,
        advantages: `
                            <li><i class="ph-fill ph-check-circle"></i> Doğal dişten ayırt edilemeyen mükemmel kozmetik görünüm ve hissiyat</li>
                            <li><i class="ph-fill ph-check-circle"></i> Çevre dişlerin kesilmesine gerek kalmadan koruyucu tedavi</li>
                            <li><i class="ph-fill ph-check-circle"></i> Yaşam boyu süren konfor ve 25+ yıllık uzun ömür</li>
                            <li><i class="ph-fill ph-check-circle"></i> Çene kemiğindeki erime durdurulur ve yüzün çökük ve yaşlı görünmesi engellenir</li>
                            <li><i class="ph-fill ph-check-circle"></i> Ne yerseniz yiyin, korkmadan ısırma ve çiğneme özgürlüğü</li>
                            <li><i class="ph-fill ph-check-circle"></i> Hareketli protezlerde yaşanan vuruk, ağrı ve tutamama sorunlarına son</li>
                            <li><i class="ph-fill ph-check-circle"></i> Uluslararası sertifikalı malzemelerle 10 Yıl Kliniğimizin Garantisi</li>
        `
    },
    {
        id: 'tab-dolgu',
        icon: 'ph-tooth',
        title: 'Estetik Dolgu Tedavisi',
        tagline: 'Modern, dayanıklı ve bembeyaz dolgular ile dişlerinizi koruyoruz',
        image: 'images/services/dolgu_tedavisi.png',
        content: `
                        <h3><i class="ph ph-info"></i> Tedavi Hakkında Kapsamlı Bilgi</h3>
                        <p>Dolgu tedavisi, diş çürükleri, kırıklar veya aşınmalar nedeniyle madde kaybına uğramış dişlerin eski anatomik formuna, fonksiyonuna ve estetiğine geri kavuşturulması işlemidir. Modern diş hekimliğinde siyah renkli, cıva içeren ve sağlık tartışmalarına yol açan amalgam dolgular tamamen terk edilmiş, yerini diş rengiyle birebir aynı olan biyouyumlu nanoteknolojik kompozit dolgular ve tam seramik porselen (inley/onley) dolgular almıştır.</p>
                        <p>Kompozit dolgular, dişin sert dokusuna mikromekanik ve kimyasal bağlarla çok güçlü bir şekilde yapışır. Bu sayede, amalgam dolgularda olduğu gibi dolgunun dişte tutunabilmesi için dişte gereksiz fazladan oyuk açmaya gerek kalmaz (minimal invaziv yaklaşım). Başarılı bir dolgu tedavisi, dişin içindeki canlı dokuya (pulpa) çürüğün ilerlemesini durdurur ve acılı bir kanal tedavisine veya diş çekimine giden yolu baştan kapatır.</p>
                        <p>Ayrıca günümüzde estetik (kompozit) dolgular sadece çürük tedavisinde değil; ön dişlerdeki aralıkların kapatılmasında (diastema kapama), hafif çapraşıklıkların düzeltilmesinde, dişteki renk ve şekil anormalliklerinin giderilmesinde de sıklıkla tek seanslık çok pratik bir estetik restorasyon yönetemi (bonding) olarak kullanılmaktadır. İleri teknoloji led ışık cihazlarıyla sertleştirilen bu dolgular, hasta koltuktan kalktığı an yemek yemesi için hazırdır.</p>
                        <p>Klinik olarak daha büyük madde kayıplarında ise klasik kompozit dolgu yerine, ağız içinden dijital ölçü alınıp üç boyutlu yazıcı ve kazıyıcılarda (CAD/CAM) çok kısa sürede hazırlanan ve diş boşluğuna mükemmel oturan Porselen İnley/Onley dolgular tavsiye edilmektedir. Bu restorasyonlar hem çok daha estetik hem de dişi dışarıdan gelecek kırılmalara karşı adeta bir zırh gibi korumaktadır.</p>
        `,
        steps: `
                            <div class="treatment-step"><span class="step-number">1</span>
                                <div><strong>Lokal Anestezi ve Çürük Temizliği</strong>
                                    <p>İşlem tamamen ağrısız olacak şekilde bölgesel lokal anestezi yapılır. Dişin hastalıklı, yumuşamış ve renklenmiş çürük dokusu özel aletlerle dişe en ufak zarar vermeyecek hassasiyette tamamen temizlenir ve sağlıklı bir zemin elde edilir.</p>
                                </div>
                            </div>
                            <div class="treatment-step"><span class="step-number">2</span>
                                <div><strong>Diş Yüzeyinin Hazırlanması (Asitleme ve Bonding)</strong>
                                    <p>Dolgunun dişe güçlü yapışması için mine dokusu pürüzlendirilir (asitleme) ve özel yapıştırıcı bağlayıcı ajanlar (bonding) diş yüzeyine sürülerek özel ultraviyole/led ışınlarıyla dişe hapsedilir.</p>
                                </div>
                            </div>
                            <div class="treatment-step"><span class="step-number">3</span>
                                <div><strong>Dolgunun Yerleştirilmesi ve Şekillendirilmesi</strong>
                                    <p>Diş renginize birebir uygun tespiti yapılan kompozit reçine, küçük tabakalar halinde dişin içine yerleştirilir ve form verilir. Her bir tabaka özel ışıkla tek tek sertleştirilir. Böylece dişin tüm doğal girinti ve çıkıntıları anatomiye uygun oluşturulur.</p>
                                </div>
                            </div>
                            <div class="treatment-step"><span class="step-number">4</span>
                                <div><strong>Cilalama ve Uyum (Polisaj) Kontrolü</strong>
                                    <p>Yüksekte kalan noktalar çiğneme kağıtlarıyla kontrol edilerek ideal temas (oklüzyon) seviyesine ayarlanır. Son olarak diş yüzeyi pürüzsüz ve doğal diş minesi kadar parlak olacak şekilde mikroskobik disklerle parlatılır (polisaj).</p>
                                </div>
                            </div>
        `,
        advantages: `
                            <li><i class="ph-fill ph-check-circle"></i> Doğal dişinizden hiçbir şekilde ayırt edilemeyen, gülüşünüzle bütünleşen mükemmel estetik</li>
                            <li><i class="ph-fill ph-check-circle"></i> Güçlü kimyasal yapışma (Adeziv teknoloji) sayesinde düşme riski minimum olan restorasyonlar</li>
                            <li><i class="ph-fill ph-check-circle"></i> Tek bir randevuda, ağrısız sızısız 30-45 dakikada hızlıca tamamlanabilme</li>
                            <li><i class="ph-fill ph-check-circle"></i> Düzenli diş fırçalama ve ağız bakımı ile 10-15 yıla varan güvenilir uzun ömür</li>
                            <li><i class="ph-fill ph-check-circle"></i> İlerleyen dönemde kanal tedavisine veya diş kaybına engel olan kesin koruyucu yaklaşım</li>
        `
    },
    {
        id: 'tab-tartar',
        icon: 'ph-sparkle',
        title: 'Tartar Temizliği ve Diş Eti Bakımı',
        tagline: 'Sağlıklı diş etleri, sağlıklı bir bedenin başlangıcıdır',
        image: 'images/services/tartar_temizligi.png',
        content: `
                        <h3><i class="ph ph-info"></i> Tedavi Hakkında Kapsamlı Bilgi</h3>
                        <p>Ağız içinde yemek artıkları, tükürükteki mineraller ve bakterilerin zamanla birleşmesiyle diş yüzeyinde önce ince ve renksiz bir bakteri plağı, sonrasında ise tükürükten çöken kalsiyum ve fosfat iyonlarının katılaşmasıyla sert, fırçalamayla asla çıkmayan diş taşı (tartar) oluşur. Diş taşları yapısı gereği pürüzlü olduğu için daha çok bakteri ve gıda artığını üstüne çeker. Bu kısır döngü, eninde sonunda kaçınılmaz bir şekilde diş eti hastalıklarına neden olur.</p>
                        <p>Diş taşı temizliği (Detertraj), bu sertleşmiş zararlı yapıların profesyonel havalı ve su soğutmalı ultrasonik el aletleri kullanılarak mineye kesinlikle zarar vermeden diş yüzeyinden uzaklaştırılması sanatıdır. Halk arasında "diş taşı temizliği diş minesini çizer" şeklinde dolaşan şehir efsanesi tamamen yanlıştır. Aslında temizlenmeyen diş taşı, diş eti çekilmelerine ve dişin destek kemik dokusunun (alveol kemiği) eriyerek tamamen sağlıklı dişlerin bile sallanıp düşmesine yol açar.</p>
                        <p>Araştırmalar, diş eti iltihabının ve orada üreyen zararlı bakterilerin sadece ağız bölgesini değil, kan dolaşımına katılarak kalp damar hastalıklarını, diyabet (şeker) hastalığını tetiklediğini ve hatta hamilelerde erken doğum ya da düşük riskini artırdığını bilimsel olarak kanıtlamıştır. Bu sebeple rutin bir diş taşı temizliği aslında basit bir temizlik değil, kritik bir genel sağlık koruma işlemidir.</p>
                        <p>Temizlik sonrasında uygulanan polisaj (cişataş cilası ve parlatma) işlemi ile diş üzerinde çay, kahve, ve sigara gibi ajanların bıraktığı dışsal sarı-kahverengi renklenmeler tamamen temizlenir, dişin orijinal beyazlığı ve ışıltısı ortaya çıkarılır. Kliniğimizde 6 ayda veya ideal olarak yılda 1 kez tüm hastalarımıza düzenli olarak bakım seansları önerilmektedir.</p>
        `,
        steps: `
                            <div class="treatment-step"><span class="step-number">1</span>
                                <div><strong>Detaylı Muayene ve Diş Eti Ölçümleri</strong>
                                    <p>Diş eti hastalıkları uzmanımız, periodontal sond denilen özel bir milimetrik ölçüm aletiyle diş etlerinizdeki cebin derinliğini, kanama seviyesini ve çekilme miktarlarını inceler.</p>
                                </div>
                            </div>
                            <div class="treatment-step"><span class="step-number">2</span>
                                <div><strong>Ultrasonik Periyodontal Temizlik (Detertraj)</strong>
                                    <p>Yüksek frekansta titreşen kavitron isimli teknolojik el aletleri ve ince uçlarla minenin üzerine yapışmış sert kalkülüsler (tartarlar) parçalanarak yıkanıp uzaklaştırılır. İşlem genel itibariyle tamamen ağrısızdır.</p>
                                </div>
                            </div>
                            <div class="treatment-step"><span class="step-number">3</span>
                                <div><strong>Kök Yüzeyi Düzleştirme (Eğer İleri Diş Eti Hastalığı Varsa)</strong>
                                    <p>İltihap, diş etinin altına ve kök yüzeylerine ilerlemişse (periodontitis), lokal anestezi altında küret adı verilen aletlerle kök yüzeyindeki iltihaplı, bakterili ve bozuk dokular temizlenerek sağaltılır (Subgingival küretaj).</p>
                                </div>
                            </div>
                            <div class="treatment-step"><span class="step-number">4</span>
                                <div><strong>Polisaj ve Flor-Cila Terapisi</strong>
                                    <p>Çay, kahve lekelerinin yok edilmesi için özel cila patları veya daha ileri teknoloji hava-su-toz sprey püskürten (Air-Flow) cihazı ile diş tamamen parlatılır. Yeniden tartar tutunması geciktirilmiş olur.</p>
                                </div>
                            </div>
        `,
        advantages: `
                            <li><i class="ph-fill ph-check-circle"></i> Fırçalarken veya kendiliğinden oluşan kanamalı iltihaplı diş etlerinin tamamen iyileşmesi</li>
                            <li><i class="ph-fill ph-check-circle"></i> Toplumda çok sık yaşanan ve kişinin sosyal hayatını kötü etkileyen ağız kokusunun (Halitozis) kesin çözümü</li>
                            <li><i class="ph-fill ph-check-circle"></i> Lekelerden kurtulup dişlerin daha temiz, aydınlık ve orijinal renginde parlamasının sağlanması</li>
                            <li><i class="ph-fill ph-check-circle"></i> Çürüksüz, sağlıklı dişlerin ilerleyen yaşlarda sallanarak kendi kendine dökülmesinin önlenmesi</li>
                            <li><i class="ph-fill ph-check-circle"></i> Kan dolaşımına giden bakteriler yok edildiği için vücudun bağışıklık ve genel kalp-damar sağlığının korunması</li>
        `
    },
    {
        id: 'tab-ortodonti',
        icon: 'ph-smiley',
        title: 'Ortodonti ve Şeffaf Plak Tedavisi',
        tagline: 'Görünmez çözümler, mükemmel simetride dizilmiş dişler',
        image: 'images/services/ortodonti.png',
        content: `
                        <h3><i class="ph-info"></i> Tedavi Hakkında Kapsamlı Bilgi</h3>
                        <p>Ortodonti; dişlerin çene kemikleri üzerindeki dizilim bozukluklarını (çapraşıklık), ayrık dişleri, alt ve üst çenelerin birbiriyle olan kapanış dengesizliklerini ve yüz estetiğini ideal haline getirmeyi hedefleyen çok özel bir diş hekimliği uzmanlık dalıdır. Düzgün sıralanmış dişler, sadece kusursuz ve çekici bir gülüş sağlamakla kalmaz, aynı zamanda dişlerin çok daha kolay ve düzgün fırçalanmasını mümkün kılarak ömür boyu çürüklerden ve diş eti hastalıklarından korunmanızı garantiler. Kapanış bozuklukları düzeltildiğinde çene eklem ağrıları, baş ağrısı ve çiğneme zorlukları da ortadan kalkar.</p>
                        <p>Geçmiş yıllarda "diş teli takmak" çocukluk yıllarında katlanılması gereken ve ağır metal görüntüsüyle sosyal hayatta utanma hissi yaratan meşakkatli bir süreçken; günümüz modern ortodontisinde estetikte sınır tanımayan muazzam teknolojiler mevcuttur. Tel takma fikrine sıcak bakmayan hastalar için uzay çağı teknolojisi olarak anılan <strong>Şeffaf Plak (Invisalign) Tedavisi</strong> en devrimsel yeniliklerden biridir. Günlük hayatta tamamen görünmez olan ve istenildiği zaman (yemek yerken veya özel bir davette) çıkarılabilen bu şeffaf plaklar sayesinde tedavi süreci yüksek yaşam konforuyla devam eder.</p>
                        <p>Klasik tedavilerde dahi estetik beklentiler için diş rengiyle birebir aynı olan Seramik / Porselen Braketler kullanılarak dışarıdan belli olmayan tedavi imkanı sunulmaktadır. İleri kapanış bozukluklarında ve geleneksel tel takılmasının elzem olduğu yetişkin ve ergenlerde metal braketler halen hızlı ve kesin sonuç veren çok saygın bir tedavi yöntemidir.</p>
                        <p>Sanılanın aksine, ortodonti yalnızca çocuklara ve büyüme çağındaki ergenlere uygulanan bir tedavi değildir. Çevre kemik dokusu sağlıklı olan herkese, 50-60'lı yaşlarda bile başarıyla ve mükemmel sonuçlarla güvenle ortodonti ve şeffaf plak uygulaması yapılabilmektedir.</p>
        `,
        steps: `
                            <div class="treatment-step"><span class="step-number">1</span>
                                <div><strong>Analiz, Panoramik Sefalometrik Çekimler ve Fotoğraflama (Kayıt)</strong>
                                    <p>Ortodonti uzmanımız (Ortodontist) hastanın tüm ağız dışı, yüz simetrisi, profil ve ağız içi detaylı asimetri fotoğraflarını çeker. Özel ortodontik röntgenlerle kemiklerin birbirine göre açıları dijital olarak programda analiz edilir.</p>
                                </div>
                            </div>
                            <div class="treatment-step"><span class="step-number">2</span>
                                <div><strong>Dijital Ağız Tarama (iTero vs) ve Tedavi Simülasyonu</strong>
                                    <p>Mide bulantısı yaratan eski hamur tipi ölçüler yerine optik kameralı tarayıcılarla saniyeler içinde ağzınızın 3 Boyutlu kopyası alınır. Yapay zeka ile dişlerin aylar sonra tamamen düzeldiği zaman nasıl görüneceği en baştan ekranda hastaya video olarak izletilir.</p>
                                </div>
                            </div>
                            <div class="treatment-step"><span class="step-number">3</span>
                                <div><strong>Aktif Tedavi ve Plak/Braket Uygulaması</strong>
                                    <p>Şeffaf plak terchi edildiyse, özel seri halinde üretilmiş Amerika'dan gelen aligner (plak) setleri hastaya teslim edilir. Hasta bunları haftalık takarak kullanır. Braket sisteminde ise dişlerin üzerine ufak tutucular bir seanslık bir randevuda acısız şekilde yapıştırılır.</p>
                                </div>
                            </div>
                            <div class="treatment-step"><span class="step-number">4</span>
                                <div><strong>Aylık Kontroller ve Pekiştirme (Retansiyon) Süreci</strong>
                                    <p>Vakanın durumuna göre 6 ay ile 2 yıl arasında süren tedavi sırasında aylık yönlendirici ufak müdahaleler yapılır. İstenen estetik düz dizilime ulaşıldığında, tellerin çıkmasının ardından ömür boyu yamulmayı önlemek için dişi arkasından koruyucu gizli teller (retainer) eklenir.</p>
                                </div>
                            </div>
        `,
        advantages: `
                            <li><i class="ph-fill ph-check-circle"></i> Düzenli dişler, yüzdeki kas yapısını destekler ve profil simetrisini (çene orantısını) olağanüstü güzelleştirir</li>
                            <li><i class="ph-fill ph-check-circle"></i> Kendi doğal dişlerinizi ufak bir kesim işlemi dahi yapmadan, en biyolojik yöntemle ömür boyu koruyarak estetik çözüm</li>
                            <li><i class="ph-fill ph-check-circle"></i> Çapraşıkken fırçanın ulaşamadığı derin oyuklar düzeldiği an, çürük oluşum hızı hayat boyu en aza iner</li>
                            <li><i class="ph-fill ph-check-circle"></i> Şeffaf Plak tedavisi sayesinde sosyal yaşantı etkilenmez; sınırsız yeme özgürlüğü ve kolay çıkarıp takma konforu</li>
                            <li><i class="ph-fill ph-check-circle"></i> Sindirim sisteminin temeli olan düzgün öğütme dengesi yerine gelir, eklem kilitlenmelerinin veya çene tıkırdamalarının önüne geçilir</li>
        `
    },
    {
        id: 'tab-estetik',
        icon: 'ph-diamond',
        title: 'Estetik Diş Hekimliği (Gülüş Tasarımı)',
        tagline: 'Kusursuz, aydınlık, altın oranlara sahip Hollywood Gülüşü',
        image: 'images/services/gulus_tasarimi.png',
        content: `
                        <h3><i class="ph-info"></i> Tedavi Hakkında Kapsamlı Bilgi</h3>
                        <p>Estetik diş hekimliği (Kozmetik Diş Hekimliği), bir bireyin dişlerini, dudak ve yüz proporsiyonunu matematik ve sanatın estetik kurallarına göre değerlendirerek kusursuz bir uyum yakalamayı amaçlayan ileri düzey uygulamalar bütünüdür. <strong>Gülüş Tasarımı (Smile Design)</strong>, kişiye özgü çekilen detaylı fotoğraf ve videolar ışığında özel yazılımlarda sadece size has bir diş hatları belirlenmesi; daha sert, daha dişi veya neşe veren daha enerjik diş formlarının kişinin karakteriyle uyuşmasının hedeflenmesi sürecidir.</p>
                        <p>Bu yolda kullanılan en popüler ve etkili tedavi yöntemi <strong>Porselen Laminat Veneer (Yaprak Porselen)</strong> uygulamasıdır. Diş gıcırdatması kırığı, aşınma, renkleşme, ufak çapraşıklıklar, ön dişler arasındaki aralıklar (diastema) gibi sorunlarda; dişin sadece ön yüzeyinden yarım milimetreden daha az (kontakt lens kalınlığında) hafif bir pürüzlendirme yapılarak ya da bazen dişe hiç dokunulmadan (Prepless Veneer), mükemmel pürüzsüzlükte ince porselenler şeffaf diş yapışkanlarıyla minenin ön yüzeyine çok sıkı şekilde tutturulur.</p>
                        <p>Aynı şekilde doğal dişi andıran yüksek ışık geçirgenliği ve doku uyumu sayesinde metal desteksiz, ışıl ışıl duran, diş eti altında morarma yapmayan <strong>Zirkonyum Tam Kaplamalar</strong> (Zirconia Crowns) veya <strong>E-max / Empress Tam Seramik Kronlar</strong> ile estetik sınırları zorlayan yapaylıktan tamamen uzak çok doğal diş restorasyonlarına sahip olabilirsiniz.</p>
                        <p>Kendi diş şeklinden ve anatomisinden oldukça memnun olan ancak dişlerinin tonunu birkaç seviye parlak, beyaz ve taze göstermek isteyen hastalarımıza hızlı sonuç veren <strong>Klinik Tipi Ofis Diş Beyazlatma (Bleaching)</strong> işlemini önermekteyiz. Dişlere uygulanan özel beyazlatma ajanı (Hidrojen veya Karbamid Peroksit içerikli jeller) ileri lazer/led ışık kaynaklarıyla aktive edilir ve sadece 1 saatlik tek seansın sonunda kahve, çay, yaşlılık gibi pigment lekelenmelerini oksijen ile çözündürerek anında 3-4 tona kadar kesin beyazlama garantisi sunar.</p>
        `,
        steps: `
                            <div class="treatment-step"><span class="step-number">1</span>
                                <div><strong>Estetik Beklenti Analizi ve Dijital Mock-up (Prova) Deneyimi</strong>
                                    <p>İşleme hiç başlanmadan, dişleriniz kesilmeden önce özel reçinelerle tasarlanan yeni diş görünümünüz ağzınıza geçici olarak uygulanır (Mock-up). Gecenin sonuna benzeyen sürprizlerden kurtularak bitmiş halinin nasıl göründüğünü klinikte aynaya bakarak veya video çekerek siz onaylarsınız.</p>
                                </div>
                            </div>
                            <div class="treatment-step"><span class="step-number">2</span>
                                <div><strong>Minimal İnvaziv Diş Hazırlığı ve İleri Teknoloji Kamera Ölçüsü</strong>
                                    <p>Lokal anestezi asistanlığında oldukça konforlu bir şekilde dişte planlanan en minimal aşındırma (yaklaşık 0.3-0.5 mm) gerçekleştirilir. Bulantıya sebep olan yoğun hamur ağız ölçüleri tamamen terk edilip, diş yüzeyi dijital scanner ile en ince detayına kadar bilgisayara aktarılır.</p>
                                </div>
                            </div>
                            <div class="treatment-step"><span class="step-number">3</span>
                                <div><strong>Gelişmiş CAD/CAM veya Laboratuvarda Lamine Üretimi</strong>
                                    <p>Uygulamanın onaylanan mock-up tasarımına sadık kalınarak e-max veya premium zirkonyum bloklar dişinizin birebir ölçülerinde mikronluk hassasiyetle kazınır. Porselen sanatçısı seramist teknisyenlerimiz, boyama ve efektlerle gerçek diş karakterizasyonunu (doğal çizgileri, saydamlık alanlarını) ekleyerek işlev katar.</p>
                                </div>
                            </div>
                            <div class="treatment-step"><span class="step-number">4</span>
                                <div><strong>Kusursuz Simantasyon (Yapıştırma) ve Son Dokunuş</strong>
                                    <p>Lamine yapraklar diş üzerine estetik reçine yapıştırıcı test patlarıyla provaya getirilir. Renk ve uyum kesinleştirdiğinde kalıcı rezin simanlarla (güçlü UV ışık yapıştırıcılarıyla) sızıntı olmayacak şekilde dişe mühürlenir. Aynı gün yemek yiyerek mükemmel Hollywood gülüşünüzle ayrılırsınız.</p>
                                </div>
                            </div>
        `,
        advantages: `
                            <li><i class="ph-fill ph-check-circle"></i> Çok kısa sürede (2 veya 3 randevu, ortalama 4-7 gün) radikal ve mucizevi değişim garantisi</li>
                            <li><i class="ph-fill ph-check-circle"></i> Sararmaz, kirlenmez. Laminaların yüzeyi çok iyi cilalanmış özel cam-seramik olduğu için çay veya sigara lekesi asla tutunmaz</li>
                            <li><i class="ph-fill ph-check-circle"></i> Kendini toplumdan gizleme (elle ağzı kapatma, gülümsemekten kaçınma) gibi sosyal kaygıların tamamen yok edilip tavan yapan bir özgüven duygusu</li>
                            <li><i class="ph-fill ph-check-circle"></i> Sadece ön dişler üzerinde değil, dudak ve yüz desteği sağlandığı için anti-aging (gençleştirici) dolgun simetrik profil algısının yükselmesi</li>
        `
    },
    {
        id: 'tab-kanal',
        icon: 'ph-first-aid-kit',
        title: 'Kanal Tedavisi (Endodonti)',
        tagline: 'Geceleri uykudan uyandıran ağrıya son, orijinal dişinizi sonuna kadar koruyoruz',
        image: 'images/services/kanal_tedavisi.png',
        content: `
                        <h3><i class="ph-info"></i> Tedavi Hakkında Kapsamlı Bilgi</h3>
                        <p>Kanal tedavisi ya da tıbbi adıyla Endodontik Tedavi; dişin en iç katmanında sert minenin altında korunan ve dişe hayat veren damar-sinir paketinin (pulpa dokusunun); derin çürükler, şiddetli darbeler (travma), veya tekrarlayan zorlu dental işlemler neticesinde iltihaplanıp geri döndürülemez bir şekilde hasar görmesi halinde yapılan bir organkoruma mikroskobik cerrahisidir. Şişmiş bir yüz, sıcak-soğuk uzun süren kalıcı sitem, yemek yerken baskıda ortaya çıkan keskin şiddetli sızı, zonklayarak geceleri uykudan uyandıran çekilmez bir diş ağrısı genellikle pulpadaki iltihabın açık habercisidir.</p>
                        <p>Teknolojinin yetersiz olduğu eski dönemlerde siniri ölmüş bu dişleri maalesef direk olarak çekmek tek çözümken, modern diş mikroskopları ve döner enstrümanlı kanal eğeleriyle (rotarary instruments) gerçekleştirilen yüksek başarılı tedavilerle o sorunlu dişi ağızda onlarca yıl sapasağlam daha tutabilmek mümkündür. <strong>"Kendi doğal dişiniz, her zaman üretilecek tüm yapay implant ve kaplamalardan daha değerlidir."</strong> prensibimiz gereği dişi çekmek yerine en ileri yöntemlerle kök kanallarını son teknoloji cihazlarla tedavi etmeyi tercih ediyoruz.</p>
                        <p>Halk arasında dilden dile dolaşan "Kanal tedavisi çok ağrılı ve eziyetli bir süreçtir" algısı, modern güçlü (bölgesel kök bloğu vs) anestezi yaklaşımlarıyla tamamen tarihe gömülmüştür. Uzman ellerde (Endodontist) doğru şekilde ve tamamen uyuşturularak yapılan bir kanal tedavisi, standart basit bir dolgu işleminden ne bir eksik ne bir fazla konforla hasta hiç bir hassasiyet hissetmeden tek veya iki seansta başarıyla tamamlanmaktadır.</p>
        `,
        steps: `
                            <div class="treatment-step"><span class="step-number">1</span>
                                <div><strong>Dijital Radyografi (RVG) Teşhisi ve Total Bölgesel Uyuşturma</strong>
                                    <p>Hangi dişin sorunlu olduğu çeşitli termal, elektrikli testler ve düşük radyasyonlu özel diş kökü röntgenleriyle tespit edilir. Sonrasında dişin bağırıp çağıran sinir tellerindeki uyarı iletimi lokal anesteziyle anında tamamen bloke edilir. İşlem sonuna kadar "sıfır ağrı" sağlanır.</p>
                                </div>
                            </div>
                            <div class="treatment-step"><span class="step-number">2</span>
                                <div><strong>İltihaplı Damar ve Sinir (Pulpa) Dokusunun Ekskavasyonu</strong>
                                    <p>Dişin çürük bölgesi uzaklaştırılarak ufak bir geçiş aralığı oluşturulur. İğne hassasiyetindeki ince ve esnek Nikel-Titanyum alaşımı cihaz eğeleriyle dişin dibine kadar inilerek ölmekte olan bakterili sinir artıkları oradan sıyrılarak dişe zarar vermeden boşaltılır.</p>
                                </div>
                            </div>
                            <div class="treatment-step"><span class="step-number">3</span>
                                <div><strong>Kanal Sisteminin Antibakteriyel Solüsyonlarla Genişletilmesi ve Yıkanması</strong>
                                    <p>Ana kökün sadece düz bir yol olmadığı, yanal çokça mikro çatalları olduğu bilindiğinden, özel klorheksidin bazlı antiseptik güçlü yıkama solüsyonları (hipoiklorit) ile diş kökü defalarca dezenfekte edilir. Tüm zararlı irin ve akıntı bölgeden kalıntısı kalmayacak şekilde yıkanarak sıfırlanır.</p>
                                </div>
                            </div>
                            <div class="treatment-step"><span class="step-number">4</span>
                                <div><strong>Biyouyumlu Maddelerle Kök Ucuna Kadar Üç Boyutlu Sızdırmaz Dolum</strong>
                                    <p>İçi yuvadan arındırılan terleremiz bu kök kanallarının boşluğu tekrardan mikropların işgal edememesi için (gutta percha adlı reçine özlü) kalıcı, elastik ve vücut dostu özel doğal tıbbi materyallerle sıkıştırılarak hermetik (hava/sıvı almaz) şekilde tepeden tırnağa tamamen kapatılır. Ardından üst yapısına onley veya kompozit dolgusu yapılır.</p>
                                </div>
                            </div>
        `,
        advantages: `
                            <li><i class="ph-fill ph-check-circle"></i> Çekilecek seviyedeki dişinizi kaybedip implant tedavisi için aylar boyu süren işlemler veya büyük kemik cerrahileri yaşamaktan kesin kurtuluş</li>
                            <li><i class="ph-fill ph-check-circle"></i> Baş gösteren ve tüm çene bölgesini saran akut (şişlik, iltihap, acı) enfeksiyonun dakikalar içinde tamamen ortadan kaldırılması ve rahatlama hissi</li>
                            <li><i class="ph-fill ph-check-circle"></i> Dişler çekildiğinde yer değiştirebilecek komşu dişlerin oluşturacağı ciddi çene eklem problemlerinin önüne geçme ve çene hizasını koruma</li>
                            <li><i class="ph-fill ph-check-circle"></i> Üzerine yapılan gelişmiş porselen restorasyonlarla dişte hiçbir renk değişikliği olmadan estetikten taviz verilmemesi</li>
        `
    }
];

// Generate Full Treatment Grid Html for Each
const buildTreatmentBox = (tab) => {
    return `
            <!-- ${tab.title} -->
            <div class="treatment-content ${tab.id === 'tab-implant' ? 'active' : ''}" id="${tab.id}">
                <div class="treatment-hero" style="flex-direction: column; align-items: stretch;">
                    <div style="width: 100%; height: 350px; overflow: hidden; border-radius: var(--radius-lg); margin-bottom: 24px;">
                        <img src="${tab.image}" alt="${tab.title} - Mier Dental Clinic" style="width: 100%; height: 100%; object-fit: cover; object-position: center;">
                    </div>
                    <div style="display: flex; align-items: center; gap: 20px;">
                        <div class="treatment-hero-icon"><i class="ph-fill ${tab.icon}"></i></div>
                        <div>
                            <h2>${tab.title}</h2>
                            <p class="treatment-tagline">${tab.tagline}</p>
                        </div>
                    </div>
                </div>
                <div class="treatment-grid">
                    <div class="treatment-detail-card" style="grid-column: 1 / -1; padding: 40px;">
                        ${tab.content}
                    </div>
                    <div class="treatment-detail-card">
                        <h3><i class="ph ph-list-numbers"></i> Tedavi Süreci</h3>
                        <div class="treatment-steps">
                            ${tab.steps}
                        </div>
                    </div>
                    <div class="treatment-detail-card">
                        <h3><i class="ph ph-check-square"></i> Avantajlar ve Faydaları</h3>
                        <ul class="treatment-advantages">
                            ${tab.advantages}
                        </ul>
                        
                        <h3 style="margin-top: 30px;"><i class="ph ph-currency-circle-dollar"></i> Tedavi Fiyatlandırması</h3>
                        <div class="price-range">
                            <p>TDB (Türk Dişhekimleri Birliği) fiyat tarifesi baz alınarak, vakanın kompleks durumuna ve kullanılan güncel malzemeye göre kişiye özel planlama yapılır.</p>
                            <div class="price-box">
                                <span class="price-label">Başlangıç Fiyatı</span>
                                <span class="price-value">Klinik Muayene Sonrası</span>
                            </div>
                            <p class="price-note"><i class="ph ph-info"></i> Kliniğimizde ödeme kolaylıkları ve vade farksız taksit seçeneklerimiz mevcuttur.</p>
                        </div>
                    </div>
                </div>
                <div style="text-align: center; margin-top: 40px;">
                    <a href="randevu.html" class="btn btn-primary btn-lg"><i class="ph ph-calendar-plus"></i> ${tab.title.split(' ')[0]} Güşüşünüz İçin Randevu Alın</a>
                </div>
            </div>
    `;
};

const allHtml = tabs.map(tab => buildTreatmentBox(tab)).join('');

// the region we want to replace starts after <!-- İmplant -->  and ends right before </section> before the CTA
const regex = /<!-- İmplant -->[\s\S]*?(?=<\/div>\s*<\/section>\s*<!-- ===== CTA ===== -->)/;

const newHTML = html.replace(regex, allHtml + "\n        </div>\n");

fs.writeFileSync(file, newHTML, 'utf8');
console.log('Update Complete.');
