/* ========================================
   MIER DENTAL - INTERACTIVE SCRIPTS
   Multi-page safe — all selectors are guarded.
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ===== NAVBAR =====
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Force scrolled state on subpages (anything but index)
    const isHomepage = window.location.pathname === '/' ||
        window.location.pathname.endsWith('index.html') ||
        window.location.pathname.endsWith('/');

    function handleScroll() {
        if (window.scrollY > 50 || !isHomepage) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navToggle) navToggle.classList.remove('active');
            if (navMenu) navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Mobile dropdown toggle
    const navDropdowns = document.querySelectorAll('.nav-dropdown');
    navDropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector('.nav-link-dropdown');
        if (dropdownLink) {
            dropdownLink.addEventListener('click', (e) => {
                // Only on mobile (when nav-toggle is visible)
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdown.classList.toggle('open');
                }
            });
        }
    });

    // Active link on scroll (homepage only)
    if (isHomepage) {
        const sections = document.querySelectorAll('section[id]');

        function setActiveLink() {
            const scrollY = window.scrollY + 150;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('data-section') === sectionId) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }

        window.addEventListener('scroll', setActiveLink);
    }

    // ===== BACK TO TOP =====
    const backToTop = document.getElementById('backToTop');

    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ===== STAT COUNTER ANIMATION =====
    const statNumbers = document.querySelectorAll('.stat-number');
    let statsAnimated = false;

    function animateStats() {
        if (statsAnimated || statNumbers.length === 0) return;

        const statsSection = statNumbers[0].closest('section, .hero-section, .hero-card');
        if (!statsSection) return;

        const sectionTop = statsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.85) {
            statsAnimated = true;

            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target')) || 0;
                const suffix = stat.getAttribute('data-suffix') || '';
                const duration = 2000;
                const startTime = performance.now();

                function updateNumber(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    const current = Math.floor(eased * target);

                    stat.textContent = current.toLocaleString('tr-TR') + suffix;

                    if (progress < 1) {
                        requestAnimationFrame(updateNumber);
                    } else {
                        stat.textContent = target.toLocaleString('tr-TR') + suffix;
                    }
                }

                requestAnimationFrame(updateNumber);
            });
        }
    }

    window.addEventListener('scroll', animateStats);
    animateStats();

    // ===== SCROLL ANIMATIONS (AOS-like) =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-aos-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('aos-animate');
                }, parseInt(delay));
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
    });

    // ===== FAQ ACCORDION =====
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Close all
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                    const otherQuestion = otherItem.querySelector('.faq-question');
                    if (otherQuestion) otherQuestion.setAttribute('aria-expanded', 'false');
                });

                // Toggle current
                if (!isActive) {
                    item.classList.add('active');
                    question.setAttribute('aria-expanded', 'true');
                }
            });
        }
    });

    // ===== APPOINTMENT FORM =====
    const form = document.getElementById('appointmentForm');
    const successMessage = document.getElementById('successMessage');

    if (form) {
        const messageTextarea = form.querySelector('#message');
        const charCount = document.getElementById('charCount');
        const dateInput = form.querySelector('#appointmentDate');
        const timeSlotSelect = form.querySelector('#timeSlot');

        // Set date constraints
        function setDateConstraints() {
            if (!dateInput) return;
            const today = new Date();
            const maxDate = new Date();
            maxDate.setMonth(maxDate.getMonth() + 3);

            // Skip to next weekday if today is Sunday
            while (today.getDay() === 0) {
                today.setDate(today.getDate() + 1);
            }

            dateInput.min = formatDate(today);
            dateInput.max = formatDate(maxDate);
        }

        function formatDate(date) {
            return date.toISOString().split('T')[0];
        }

        setDateConstraints();

        // Character counter
        if (messageTextarea && charCount) {
            messageTextarea.addEventListener('input', () => {
                charCount.textContent = messageTextarea.value.length;
            });
        }

        // Date change - update time slots for Saturday
        if (dateInput && timeSlotSelect) {
            dateInput.addEventListener('change', () => {
                const selectedDate = new Date(dateInput.value);
                const dayOfWeek = selectedDate.getDay();

                // Disable Sunday
                if (dayOfWeek === 0) {
                    dateInput.value = '';
                    showError('dateError', 'Pazar günleri kliniğimiz kapalıdır.');
                    markInvalid('appointmentDate');
                    return;
                }

                clearError('dateError');
                markValid('appointmentDate');

                // Saturday - limited hours
                const options = timeSlotSelect.querySelectorAll('option');
                if (dayOfWeek === 6) {
                    options.forEach(opt => {
                        if (opt.value === '12:00-15:00' || opt.value === '15:00-19:00') {
                            opt.disabled = true;
                        }
                    });
                    if (timeSlotSelect.value === '12:00-15:00' || timeSlotSelect.value === '15:00-19:00') {
                        timeSlotSelect.value = '';
                    }
                } else {
                    options.forEach(opt => {
                        opt.disabled = false;
                    });
                }
            });
        }

        // Rate limiting
        let lastSubmitTime = 0;
        const RATE_LIMIT_MS = 30000;

        // Form submission
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Honeypot check
            const honeypot = document.getElementById('honeypot');
            if (honeypot && honeypot.value) return;

            // Rate limit check
            const now = Date.now();
            if (now - lastSubmitTime < RATE_LIMIT_MS) {
                alert('Lütfen tekrar denemeden önce biraz bekleyin.');
                return;
            }

            if (validateForm()) {
                const submitBtn = document.getElementById('submitBtn');
                const btnLoader = document.getElementById('btnLoader');

                if (submitBtn) submitBtn.classList.add('loading');

                // Simulate API call
                setTimeout(() => {
                    if (submitBtn) submitBtn.classList.remove('loading');
                    form.style.display = 'none';
                    if (successMessage) successMessage.style.display = 'block';
                    lastSubmitTime = Date.now();
                }, 1500);
            }
        });

        // New appointment button
        const newAppointmentBtn = document.getElementById('newAppointmentBtn');
        if (newAppointmentBtn) {
            newAppointmentBtn.addEventListener('click', () => {
                form.reset();
                if (charCount) charCount.textContent = '0';
                setDateConstraints();
                clearAllErrors();
                form.style.display = 'block';
                if (successMessage) successMessage.style.display = 'none';
            });
        }

        // ===== VALIDATION =====
        function validateForm() {
            let isValid = true;
            clearAllErrors();

            // Full name
            const fullName = form.querySelector('#fullName');
            if (fullName) {
                const name = fullName.value.trim();
                if (!name) {
                    showError('fullNameError', 'Ad Soyad gereklidir.');
                    markInvalid('fullName');
                    isValid = false;
                } else if (name.length < 3) {
                    showError('fullNameError', 'En az 3 karakter girmelisiniz.');
                    markInvalid('fullName');
                    isValid = false;
                } else if (!/^[a-zA-ZçğıöşüÇĞİÖŞÜ\s]+$/.test(name)) {
                    showError('fullNameError', 'Sadece harf ve boşluk kullanın.');
                    markInvalid('fullName');
                    isValid = false;
                } else {
                    markValid('fullName');
                }
            }

            // Phone
            const phone = form.querySelector('#phone');
            if (phone) {
                const phoneVal = phone.value.trim();
                if (!phoneVal) {
                    showError('phoneError', 'Telefon numarası gereklidir.');
                    markInvalid('phone');
                    isValid = false;
                } else if (!/^(\+90|0)?[0-9\s\-()]{10,15}$/.test(phoneVal)) {
                    showError('phoneError', 'Geçerli bir telefon numarası girin.');
                    markInvalid('phone');
                    isValid = false;
                } else {
                    markValid('phone');
                }
            }

            // Email (optional)
            const email = form.querySelector('#email');
            if (email && email.value.trim()) {
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
                    showError('emailError', 'Geçerli bir e-posta adresi girin.');
                    markInvalid('email');
                    isValid = false;
                } else {
                    markValid('email');
                }
            }

            // Treatment
            const treatment = form.querySelector('#treatment');
            if (treatment && !treatment.value) {
                showError('treatmentError', 'Tedavi türü seçiniz.');
                markInvalid('treatment');
                isValid = false;
            } else if (treatment) {
                markValid('treatment');
            }

            // Date
            if (dateInput && !dateInput.value) {
                showError('dateError', 'Randevu tarihi seçiniz.');
                markInvalid('appointmentDate');
                isValid = false;
            } else if (dateInput) {
                markValid('appointmentDate');
            }

            // Time slot
            if (timeSlotSelect && !timeSlotSelect.value) {
                showError('timeSlotError', 'Saat aralığı seçiniz.');
                markInvalid('timeSlot');
                isValid = false;
            } else if (timeSlotSelect) {
                markValid('timeSlot');
            }

            // KVKK
            const kvkk = form.querySelector('#kvkkConsent');
            if (kvkk && !kvkk.checked) {
                showError('kvkkError', 'KVKK onayı gereklidir.');
                isValid = false;
            }

            return isValid;
        }

        function showError(elementId, message) {
            const el = document.getElementById(elementId);
            if (el) el.textContent = message;
        }

        function clearError(elementId) {
            const el = document.getElementById(elementId);
            if (el) el.textContent = '';
        }

        function clearAllErrors() {
            document.querySelectorAll('.error-message').forEach(msg => msg.textContent = '');
            document.querySelectorAll('.error').forEach(input => input.classList.remove('error'));
            document.querySelectorAll('.valid').forEach(input => input.classList.remove('valid'));
        }

        function markInvalid(inputId) {
            const input = document.getElementById(inputId);
            if (input) {
                input.classList.remove('valid');
                input.classList.add('error');
            }
        }

        function markValid(inputId) {
            const input = document.getElementById(inputId);
            if (input) {
                input.classList.remove('error');
                input.classList.add('valid');
            }
        }
    }

    // ===== GALLERY FILTERS =====
    const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (galleryFilterBtns.length > 0) {
        galleryFilterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active state
                galleryFilterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                galleryItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.classList.remove('hidden');
                        item.style.display = '';
                    } else {
                        item.classList.add('hidden');
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // ===== TREATMENT TABS =====
    const treatmentTabs = document.querySelectorAll('.treatment-tab');
    const treatmentContents = document.querySelectorAll('.treatment-content');

    if (treatmentTabs.length > 0) {
        treatmentTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Update active tab
                treatmentTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                // Show corresponding content
                const targetTab = tab.getAttribute('data-tab');
                treatmentContents.forEach(content => {
                    content.classList.remove('active');
                });

                const targetContent = document.getElementById('tab-' + targetTab);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });

        // Check for ?tab= parameter in URL on load
        const urlParams = new URLSearchParams(window.location.search);
        const tabParam = urlParams.get('tab');

        if (tabParam) {
            const targetTab = Array.from(treatmentTabs).find(t => t.getAttribute('data-tab') === tabParam);
            if (targetTab) {
                targetTab.click();
                setTimeout(() => {
                    const tabsContainer = document.querySelector('.treatment-tabs');
                    if (tabsContainer) {
                        const yOffset = -120; // Offset for fixed navbar
                        const y = tabsContainer.getBoundingClientRect().top + window.scrollY + yOffset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                }, 100);
            }
        }
    }

    // ===== CONTACT FORM =====
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = contactForm.querySelector('#contactName');
            const email = contactForm.querySelector('#contactEmail');
            const subject = contactForm.querySelector('#contactSubject');
            const message = contactForm.querySelector('#contactMessage');

            // Basic validation
            if (!name.value.trim() || !email.value.trim() || !subject.value.trim() || !message.value.trim()) {
                alert('Lütfen tüm alanları doldurun.');
                return;
            }

            // Simulate submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            if (submitBtn) {
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<i class="ph ph-check"></i> Mesaj Gönderildi!';
                submitBtn.disabled = true;
                submitBtn.style.background = 'var(--success)';
                submitBtn.style.borderColor = 'var(--success)';

                setTimeout(() => {
                    contactForm.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                    submitBtn.style.borderColor = '';
                }, 3000);
            }
        });
    }

    // ===== COOKIE BANNER =====
    const cookieBanner = document.getElementById('cookieBanner');
    const cookieAccept = document.getElementById('cookieAccept');
    const cookieReject = document.getElementById('cookieReject');

    if (cookieBanner && !localStorage.getItem('mierDentalCookie')) {
        setTimeout(() => {
            cookieBanner.classList.add('visible');
        }, 2000);
    }

    if (cookieAccept) {
        cookieAccept.addEventListener('click', () => {
            localStorage.setItem('mierDentalCookie', 'accepted');
            cookieBanner.classList.remove('visible');
        });
    }

    if (cookieReject) {
        cookieReject.addEventListener('click', () => {
            localStorage.setItem('mierDentalCookie', 'rejected');
            cookieBanner.classList.remove('visible');
        });
    }

    // ===== SMOOTH SCROLL FOR ALL ANCHOR LINKS =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

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
                if (imgNode) {
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

// ===== CUSTOM MULTILANGUAGE =====
document.addEventListener('DOMContentLoaded', () => {
    const langOptions = document.querySelectorAll('.lang-option');
    // Using querySelectorAll to find the active language toggles safely
    const currentLangTexts = document.querySelectorAll('.currentLang');

    // Function to trigger Google Translate dropdown
    function changeLanguage(langCode) {
        const selectBox = document.querySelector('.goog-te-combo');
        if (selectBox) {
            selectBox.value = langCode;
            // The google translate dropdown requires valid DOM events to trigger change
            selectBox.dispatchEvent(new Event('change'));
        }
    }

    // Set active based on cookie if available
    const match = document.cookie.match(/googtrans=\/tr\/([a-z]{2})/);
    if (match && match[1]) {
        currentLangTexts.forEach(el => {
            el.innerHTML = '<i class="ph ph-globe"></i> ' + match[1].toUpperCase() + ' <i class="ph ph-caret-down"></i>';
        });
    }

    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = option.getAttribute('data-lang');

            currentLangTexts.forEach(el => {
                el.innerHTML = '<i class="ph ph-globe"></i> ' + lang.toUpperCase() + ' <i class="ph ph-caret-down"></i>';
            });

            // Check if google API is injected yet
            const selectBox = document.querySelector('.goog-te-combo');
            if (selectBox) {
                changeLanguage(lang);
            } else {
                // if clicked very fast, retry after 500ms
                setTimeout(() => { changeLanguage(lang); }, 500);
            }

            // Close mobile menu if open
            const navMenu = document.getElementById('navMenu');
            const navToggle = document.getElementById('navToggle');
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                if (navToggle) navToggle.classList.remove('active');
            }
        });
    });
});

// Duplicate FAQ block removed
