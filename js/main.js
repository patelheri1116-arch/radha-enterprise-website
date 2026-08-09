// ============================================================
//  RADHA ENTERPRISE — MAIN JAVASCRIPT
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ── PRELOADER ─────────────────────────────────────────────
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => preloader.classList.add('hide'), 800);
    });
  }

  // ── NAVBAR SCROLL ─────────────────────────────────────────
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // ── HAMBURGER / MOBILE NAV DRAWER ────────────────────────────
  const hamburger      = document.getElementById('hamburger');
  const mobileNav      = document.getElementById('mobileNav');
  const mobileOverlay  = document.getElementById('mobileNavOverlay');
  const mobileNavClose = document.getElementById('mobileNavClose');

  function openMobileNav() {
    if (!mobileNav) return;
    mobileNav.classList.add('open');
    if (mobileOverlay) {
      mobileOverlay.style.display = 'block';
      requestAnimationFrame(() => mobileOverlay.classList.add('visible'));
    }
    if (hamburger) hamburger.classList.add('is-open');
    document.body.classList.add('nav-open');
  }

  function closeMobileNav() {
    if (!mobileNav) return;
    mobileNav.classList.remove('open');
    if (mobileOverlay) {
      mobileOverlay.classList.remove('visible');
      setTimeout(() => { mobileOverlay.style.display = 'none'; }, 300);
    }
    if (hamburger) hamburger.classList.remove('is-open');
    document.body.classList.remove('nav-open');
  }

  hamburger?.addEventListener('click', () => {
    mobileNav?.classList.contains('open') ? closeMobileNav() : openMobileNav();
  });

  mobileNavClose?.addEventListener('click', closeMobileNav);
  mobileOverlay?.addEventListener('click', closeMobileNav);

  // Close on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav?.classList.contains('open')) closeMobileNav();
  });

  // Close on nav link click (navigating to a page)
  document.querySelectorAll('.mobile-nav-links a').forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  // ── ACTIVE NAV LINK ───────────────────────────────────────
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ── SCROLL DOWN HINT ──────────────────────────────────────
  const scrollHint = document.getElementById('scrollDownHint');
  if (scrollHint) {
    // Click to scroll to first section below the page hero
    scrollHint.addEventListener('click', () => {
      const pageHero = document.querySelector('.page-hero');
      if (pageHero) {
        const nextEl = pageHero.nextElementSibling;
        if (nextEl) {
          nextEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });

    // Auto-hide the hint once user scrolls past the page hero
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        scrollHint.style.opacity = entry.isIntersecting ? '1' : '0';
        scrollHint.style.pointerEvents = entry.isIntersecting ? 'auto' : 'none';
      });
    }, { threshold: 0.1 });

    const pageHero = document.querySelector('.page-hero');
    if (pageHero) observer.observe(pageHero);
  }

  // ── HERO PARTICLES ────────────────────────────────────────
  const particleContainer = document.getElementById('particles');
  if (particleContainer) {
    for (let i = 0; i < 30; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.cssText = `
        left: ${Math.random() * 100}%;
        animation-duration: ${Math.random() * 15 + 8}s;
        animation-delay: ${Math.random() * 8}s;
        width: ${Math.random() * 3 + 1}px;
        height: ${Math.random() * 3 + 1}px;
        opacity: ${Math.random() * 0.6 + 0.2};
      `;
      particleContainer.appendChild(p);
    }
  }

  // ── SCROLL ANIMATIONS ─────────────────────────────────────
  const animEls = document.querySelectorAll('.animate-on-scroll');
  if (animEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('animated'), i * 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    animEls.forEach(el => observer.observe(el));
  }

  // ── COUNTER ANIMATION ─────────────────────────────────────
  function animateCounter(el, target, duration = 2000) {
    let start = 0;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    };
    requestAnimationFrame(step);
  }

  const counterEls = document.querySelectorAll('[data-counter]');
  if (counterEls.length) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target, parseInt(entry.target.dataset.counter));
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counterEls.forEach(el => counterObserver.observe(el));
  }

  // ── PRODUCT TABS (products.html) ──────────────────────────
  const tabBtns = document.querySelectorAll('.tab-btn');
  const prodCategories = document.querySelectorAll('.product-category');
  if (tabBtns.length) {
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        prodCategories.forEach(c => c.classList.remove('show'));
        btn.classList.add('active');
        const target = document.getElementById(btn.dataset.target);
        if (target) target.classList.add('show');
      });
    });
  }

  // ── ABOUT PAGE ORDER NOW CONTACTS ───────────────────────
  const orderNowBtn = document.getElementById('orderNowBtn');
  const orderContacts = document.getElementById('orderContacts');
  if (orderNowBtn && orderContacts) {
    orderNowBtn.addEventListener('click', () => {
      if (orderContacts.style.display === 'flex') return;
      orderContacts.style.display = 'flex';
    });
  }

  // ── CHEMISTRY FILTER ─────────────────────
  const chemFilter = document.getElementById('gradeFilter');
  const gradeCards = document.querySelectorAll('.grade-card');
  if (chemFilter) {
    chemFilter.addEventListener('change', () => {
      const val = chemFilter.value;
      gradeCards.forEach(card => {
        card.style.display = (val === 'all' || card.dataset.type === val) ? '' : 'none';
      });
    });
  }

  // ── WEIGHT CALCULATOR (calculator.html) ───────────────────
  const shapeBtns = document.querySelectorAll('.shape-btn');
  const calcForm  = document.getElementById('calcForm');

  let selectedShape = 'roundbar';

  // Shape-specific field groups
  const fieldGroups = {
    roundbar: ['field-dia', 'field-length'],
    flatbar:  ['field-width', 'field-thickness', 'field-length'],
    pipe:     ['field-od', 'field-wt', 'field-length'],
    sheet:    ['field-width', 'field-height', 'field-thickness'],
  };

  function showFields(shape) {
    document.querySelectorAll('.calc-field-group').forEach(g => g.style.display = 'none');
    (fieldGroups[shape] || []).forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = '';
    });
  }

  if (shapeBtns.length) {
    shapeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        shapeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedShape = btn.dataset.shape;
        showFields(selectedShape);
        document.getElementById('resultOutput')?.classList.remove('show');
        document.getElementById('resultEmpty')?.style.removeProperty('display');
      });
    });
    // Show default
    showFields(selectedShape);
  }

  // Steel densities (g/cm³ = tonnes/m³)
  const densities = {
    'SS 304':    7.93,
    'SS 304L':   7.93,
    'SS 316':    8.00,
    'SS 316L':   8.00,
    'SS 410':    7.70,
    'SS 420':    7.70,
    'SS 431':    7.75,
    'MS / EN1A': 7.85,
  };

  function getVal(id) {
    const el = document.getElementById(id);
    return el ? parseFloat(el.value) || 0 : 0;
  }

  function calcWeight() {
    const grade   = document.getElementById('gradeSelect')?.value || 'SS 304';
    const qty     = getVal('qtyInput') || 1;
    const density = densities[grade] || 7.85; // g/cm³

    let volumeMm3 = 0; // volume in mm³

    switch (selectedShape) {
      case 'roundbar': {
        const d = getVal('diaInput');
        const L = getVal('lenInput');
        volumeMm3 = (Math.PI / 4) * d * d * L;
        break;
      }
      case 'flatbar': {
        const w  = getVal('widthInput');
        const th = getVal('thickInput');
        const L  = getVal('lenInput');
        volumeMm3 = w * th * L;
        break;
      }
      case 'pipe': {
        const od = getVal('odInput');
        const wt = getVal('wtInput');
        const L  = getVal('lenInput');
        const id = od - 2 * wt;
        volumeMm3 = (Math.PI / 4) * (od * od - id * id) * L;
        break;
      }
      case 'sheet': {
        const w  = getVal('sheetWidth');
        const h  = getVal('sheetHeight');
        const th = getVal('sheetThick');
        volumeMm3 = w * h * th;
        break;
      }
    }

    // Convert mm³ → cm³ (÷1000), then × density (g/cm³) → grams, then ÷1000 → kg
    const weightKgPer = (volumeMm3 / 1000) * density / 1000;
    const totalKg     = weightKgPer * qty;
    const totalTonnes = totalKg / 1000;

    return { weightKgPer, totalKg, totalTonnes, grade, qty, density };
  }

  document.getElementById('calcBtn')?.addEventListener('click', () => {
    const r = calcWeight();
    if (r.totalKg <= 0) {
      alert('Please enter valid dimensions.');
      return;
    }

    document.getElementById('resultEmpty').style.display = 'none';
    const out = document.getElementById('resultOutput');
    out.classList.add('show');

    document.getElementById('resBigVal').textContent  = r.totalKg.toFixed(2);
    document.getElementById('resPerPc').textContent   = r.weightKgPer.toFixed(3) + ' kg';
    document.getElementById('resTonnes').textContent  = r.totalTonnes.toFixed(4) + ' T';
    document.getElementById('resQty').textContent     = r.qty + ' pc(s)';
    document.getElementById('resDensity').textContent = r.density + ' g/cm³';
  });

  document.getElementById('resetBtn')?.addEventListener('click', () => {
    document.querySelectorAll('.calc-input').forEach(i => i.value = '');
    document.getElementById('resultOutput')?.classList.remove('show');
    document.getElementById('resultEmpty')?.style.removeProperty('display');
  });

  // ── CONTACT FORM — INDUSTRY-STANDARD VALIDATION ─────────────
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  let currentEnquiryData = null;

  // --- Validation helpers ---
  function stripToDigits(val) {
    return val.replace(/\D/g, '');
  }

  function isValidPhone(val) {
    const digits = stripToDigits(val);
    return digits.length === 10 && /^[6-9]/.test(digits);
  }

  function isValidEmail(val) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(val);
  }

  function isValidName(val) {
    return val.trim().length >= 2 && /^[A-Za-z\s.''-]+$/.test(val.trim());
  }

  // --- Field state setters ---
  function setFieldInvalid(input, errorEl) {
    if (!input) return;
    input.classList.add('invalid');
    input.classList.remove('valid');
    if (errorEl) errorEl.classList.add('show');
  }

  function setFieldValid(input, errorEl) {
    if (!input) return;
    input.classList.remove('invalid');
    input.classList.add('valid');
    if (errorEl) errorEl.classList.remove('show');
  }

  function clearFieldState(input, errorEl) {
    if (!input) return;
    input.classList.remove('invalid', 'valid');
    if (errorEl) errorEl.classList.remove('show');
  }

  if (contactForm) {
    const nameInput  = document.getElementById('contactName');
    const phoneInput = document.getElementById('contactPhone');
    const emailInput = document.getElementById('contactEmail');

    const nameError  = document.getElementById('nameError');
    const phoneError = document.getElementById('phoneError');
    const emailError = document.getElementById('emailError');
    const specError  = document.getElementById('specError');

    // --- Phone: allow only digits while typing ---
    phoneInput?.addEventListener('input', () => {
      const cursorPos = phoneInput.selectionStart;
      const before = phoneInput.value;
      phoneInput.value = stripToDigits(before).slice(0, 10);
      // Adjust cursor if characters were stripped
      const diff = before.length - phoneInput.value.length;
      phoneInput.setSelectionRange(cursorPos - diff, cursorPos - diff);
    });

    // --- Real-time blur validation ---
    nameInput?.addEventListener('blur', () => {
      const val = nameInput.value.trim();
      if (val.length === 0) clearFieldState(nameInput, nameError);
      else if (isValidName(val)) setFieldValid(nameInput, nameError);
      else setFieldInvalid(nameInput, nameError);
    });

    phoneInput?.addEventListener('blur', () => {
      const val = phoneInput.value.trim();
      if (val.length === 0) clearFieldState(phoneInput, phoneError);
      else if (isValidPhone(val)) setFieldValid(phoneInput, phoneError);
      else setFieldInvalid(phoneInput, phoneError);
    });

    emailInput?.addEventListener('blur', () => {
      const val = emailInput.value.trim();
      if (val.length === 0) clearFieldState(emailInput, emailError);
      else if (isValidEmail(val)) setFieldValid(emailInput, emailError);
      else setFieldInvalid(emailInput, emailError);
    });

    // --- Clear errors on focus (let user retype) ---
    [nameInput, phoneInput, emailInput].forEach(inp => {
      inp?.addEventListener('focus', () => {
        inp.classList.remove('invalid');
        const errorEl = document.getElementById(inp.id.replace('contact', '').toLowerCase() + 'Error');
        if (errorEl) errorEl.classList.remove('show');
      });
    });

    // Clear spec error when any spec field is typed into
    document.querySelectorAll('.spec-input').forEach(inp => {
      inp.addEventListener('input', () => {
        if (specError) specError.classList.remove('show');
        document.querySelectorAll('.spec-input').forEach(s => s.classList.remove('invalid'));
      });
    });

    // --- Submit handler: full validation ---
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let firstBadField = null;

      // 1. Name validation (required, letters/spaces only, min 2 chars)
      const nameVal = nameInput?.value.trim() || '';
      if (!nameVal || !isValidName(nameVal)) {
        setFieldInvalid(nameInput, nameError);
        if (!firstBadField) firstBadField = nameInput;
      } else {
        setFieldValid(nameInput, nameError);
      }

      // 2. Phone validation (required, exactly 10 digits, starts with 6-9)
      const phoneVal = phoneInput?.value.trim() || '';
      if (!phoneVal || !isValidPhone(phoneVal)) {
        setFieldInvalid(phoneInput, phoneError);
        if (!firstBadField) firstBadField = phoneInput;
      } else {
        setFieldValid(phoneInput, phoneError);
      }

      // 3. Email validation (optional — but if filled, must be valid)
      const emailVal = emailInput?.value.trim() || '';
      if (emailVal && !isValidEmail(emailVal)) {
        setFieldInvalid(emailInput, emailError);
        if (!firstBadField) firstBadField = emailInput;
      } else if (emailVal) {
        setFieldValid(emailInput, emailError);
      } else {
        clearFieldState(emailInput, emailError);
      }

      // 4. At least one spec field must be filled
      const specFields = ['specGrade', 'specDiameter', 'specSizes', 'specQuantity', 'specDelivery'];
      const hasAnySpec = specFields.some(id => {
        const el = document.getElementById(id);
        return el && el.value.trim().length > 0;
      });

      if (!hasAnySpec) {
        if (specError) specError.classList.add('show');
        document.querySelectorAll('.spec-input').forEach(s => s.classList.add('invalid'));
        if (!firstBadField) firstBadField = document.getElementById('specGrade');
      } else {
        if (specError) specError.classList.remove('show');
        document.querySelectorAll('.spec-input').forEach(s => s.classList.remove('invalid'));
      }

      // If any field failed, scroll to first error and stop
      if (firstBadField) {
        firstBadField.focus();
        firstBadField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }

      // --- All valid: build enquiry data ---
      const company  = document.getElementById('contactCompany')?.value.trim() || '';
      const grade    = document.getElementById('specGrade')?.value.trim() || '';
      const diameter = document.getElementById('specDiameter')?.value.trim() || '';
      const sizes    = document.getElementById('specSizes')?.value.trim() || '';
      const quantity = document.getElementById('specQuantity')?.value.trim() || '';
      const delivery = document.getElementById('specDelivery')?.value.trim() || '';
      const notes    = document.getElementById('specMessage')?.value.trim() || '';

      currentEnquiryData = {
        name: nameVal,
        phone: stripToDigits(phoneVal),
        email: emailVal,
        company,
        grade,
        diameter,
        sizes,
        quantity,
        delivery,
        notes
      };

      // Hide form, show WhatsApp contact picker
      contactForm.style.display = 'none';
      if (formSuccess) {
        formSuccess.style.display = 'block';
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }

  // --- WhatsApp message builder ---
  function sendToWhatsApp(targetPhone) {
    if (!currentEnquiryData) return;
    const d = currentEnquiryData;

    let msg = `*NEW ENQUIRY — RADHA ENTERPRISE*\n\n`;
    msg += `👤 *Name:* ${d.name}\n`;
    msg += `📞 *Phone:* ${d.phone}\n`;
    if (d.email) msg += `📧 *Email:* ${d.email}\n`;
    if (d.company) msg += `🏢 *Company:* ${d.company}\n`;
    msg += `\n📋 *SPECIFICATIONS:*\n`;
    if (d.grade) msg += `• *Grade:* ${d.grade}\n`;
    if (d.diameter) msg += `• *Diameter:* ${d.diameter}\n`;
    if (d.sizes) msg += `• *Sizes:* ${d.sizes}\n`;
    if (d.quantity) msg += `• *Quantity:* ${d.quantity}\n`;
    if (d.delivery) msg += `• *Delivery Place:* ${d.delivery}\n`;
    if (d.notes) {
      msg += `\n📝 *Additional Notes:* ${d.notes}\n`;
    }

    const waUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
  }

  document.getElementById('waBtnSamir')?.addEventListener('click', () => {
    sendToWhatsApp('919426930018');
  });

  document.getElementById('waBtnRiju')?.addEventListener('click', () => {
    sendToWhatsApp('919664824488');
  });

  // ── SPECIFICATION BUTTONS & INPUTS TAB LOGIC ──────────────
  const specBtns = document.querySelectorAll('.spec-btn');
  specBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      specBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const targetId = btn.dataset.specTarget;
      const targetInput = document.getElementById(targetId);
      if (targetInput) {
        targetInput.focus();
      }
    });
  });

  const specInputs = document.querySelectorAll('.spec-input');
  specInputs.forEach(input => {
    input.addEventListener('focus', () => {
      const id = input.id;
      specBtns.forEach(b => {
        if (b.dataset.specTarget === id) b.classList.add('active');
        else b.classList.remove('active');
      });
    });
  });

  // ── POPULATE DYNAMIC DATA ─────────────────────────────────
  if (typeof SITE_DATA !== 'undefined') {

    // WhatsApp button + quick-contact options
    const waBtn = document.getElementById('whatsappBtn');
    if (waBtn) {
      // set a default href (kept for fallback)
      waBtn.href = `https://wa.me/${SITE_DATA.company.whatsapp}?text=Hello%20Radha%20Enterprise%2C%20I%20am%20interested%20in%20your%20products.`;

      // build quick-contact options (Samir and Riju)
      const waOptions = document.createElement('div');
      waOptions.className = 'whatsapp-options hidden';
      // build default WhatsApp options
      let waHtml = `
        <a class="whatsapp-option" href="https://wa.me/919426930018" target="_blank" rel="noopener noreferrer"><i class="fab fa-whatsapp"></i> Samir Bhai : 9426930018</a>
        <a class="whatsapp-option" href="https://wa.me/919664824488" target="_blank" rel="noopener noreferrer"><i class="fab fa-whatsapp"></i> Riju Bhai : 9664824488</a>
      `;

      // Keep the floating WhatsApp options limited to chat links only

      waOptions.innerHTML = waHtml;
      document.body.appendChild(waOptions);

      // Toggle options on main button click (prevent default navigation)
      waBtn.addEventListener('click', (ev) => {
        ev.preventDefault();
        waOptions.classList.toggle('hidden');
      });

      // Close options when clicking outside
      document.addEventListener('click', (ev) => {
        if (!waBtn.contains(ev.target) && !waOptions.contains(ev.target)) {
          if (!waOptions.classList.contains('hidden')) waOptions.classList.add('hidden');
        }
      });

      // When an option is clicked, allow the link to open then hide options
      waOptions.addEventListener('click', (ev) => {
        const a = ev.target.closest('a');
        if (a) {
          // let the link open (target _blank) and hide options
          setTimeout(() => waOptions.classList.add('hidden'), 200);
        }
      });

        // Close options when window is resized (reposition on next open)
        window.addEventListener('resize', () => {
          if (!waOptions.classList.contains('hidden')) waOptions.classList.add('hidden');
        });
    }

    // Company name placeholders
    document.querySelectorAll('[data-company-name]').forEach(el => {
      el.textContent = SITE_DATA.company.name;
    });
    document.querySelectorAll('[data-company-tagline]').forEach(el => {
      el.textContent = SITE_DATA.company.tagline;
    });
    document.querySelectorAll('[data-company-address]').forEach(el => {
      el.textContent = SITE_DATA.company.address;
    });
    document.querySelectorAll('[data-company-email]').forEach(el => {
      el.textContent = SITE_DATA.company.email;
      if (el.tagName === 'A') el.href = 'mailto:' + SITE_DATA.company.email;
    });
  }

  // ── CONTACT PAGE: show WhatsApp chat options (Samir + Riju) when contact card link is tapped
  const contactWaLink = document.getElementById('contactWhatsApp');
  if (contactWaLink) {
    const contactWaOptions = document.createElement('div');
    contactWaOptions.className = 'contact-wa-options hidden';
    contactWaOptions.innerHTML = `
      <a class="contact-wa-option" href="https://wa.me/919426930018" target="_blank" rel="noopener noreferrer"><i class="fab fa-whatsapp"></i> Samir Bhai : 9426930018</a>
      <a class="contact-wa-option" href="https://wa.me/919664824488" target="_blank" rel="noopener noreferrer"><i class="fab fa-whatsapp"></i> Riju Bhai : 9664824488</a>
    `;
    document.body.appendChild(contactWaOptions);

    contactWaLink.addEventListener('click', (ev) => {
      ev.preventDefault();
      const rect = contactWaLink.getBoundingClientRect();
      contactWaOptions.style.position = 'fixed';
      // place the options below the link, adjusting for viewport
      const top = rect.bottom + 8;
      contactWaOptions.style.top = top + 'px';
      contactWaOptions.style.left = rect.left + 'px';
      contactWaOptions.classList.toggle('hidden');
    });

    document.addEventListener('click', (ev) => {
      if (!contactWaLink.contains(ev.target) && !contactWaOptions.contains(ev.target)) {
        if (!contactWaOptions.classList.contains('hidden')) contactWaOptions.classList.add('hidden');
      }
    });

    window.addEventListener('resize', () => { if (!contactWaOptions.classList.contains('hidden')) contactWaOptions.classList.add('hidden'); });
    window.addEventListener('scroll', () => { if (!contactWaOptions.classList.contains('hidden')) contactWaOptions.classList.add('hidden'); });
  }

  // ── QUICK CALL OPTIONS (for CTA "Call Now") ─────────────────
  const callBtn = document.getElementById('callBtn');
  if (callBtn) {
    const callOptions = document.createElement('div');
    callOptions.className = 'call-options hidden';
    callOptions.innerHTML = `
      <a class="call-option" href="tel:+919426930018"><i class="fas fa-phone"></i> Samir Bhai : 9426930018</a>
      <a class="call-option" href="tel:+919664824488"><i class="fas fa-phone"></i> Riju Bhai : 9664824488</a>
    `;
    document.body.appendChild(callOptions);

    callBtn.addEventListener('click', (ev) => {
      ev.preventDefault();
      // position the options above the button
      const rect = callBtn.getBoundingClientRect();
      callOptions.style.position = 'fixed';
      // align right edge of options with button's right edge
      callOptions.style.left = rect.left + 'px';
      // place above the button (with a small gap)
      const approxHeight = callOptions.offsetHeight || 90;
      callOptions.style.top = (rect.top - approxHeight - 8) + 'px';
      callOptions.classList.toggle('hidden');
    });

    // Hide when clicking outside
    document.addEventListener('click', (ev) => {
      if (!callBtn.contains(ev.target) && !callOptions.contains(ev.target)) {
        if (!callOptions.classList.contains('hidden')) callOptions.classList.add('hidden');
      }
    });

    // Hide on scroll/resize to avoid misposition
    window.addEventListener('resize', () => {
      if (!callOptions.classList.contains('hidden')) callOptions.classList.add('hidden');
    });
    window.addEventListener('scroll', () => {
      if (!callOptions.classList.contains('hidden')) callOptions.classList.add('hidden');
    });
  }

});
