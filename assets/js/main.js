(function () {
  'use strict';

  var BIRTHDAY = new Date('2026-07-28T00:00:00+07:00');

  var daysEl = document.getElementById('days');
  var hoursEl = document.getElementById('hours');
  var minutesEl = document.getElementById('minutes');
  var secondsEl = document.getElementById('seconds');
  var countdownEl = document.getElementById('countdown');
  var birthdayMessageEl = document.getElementById('birthday-message');
  var countdownLabel = document.getElementById('countdown-label');
  var heroBadge = document.getElementById('hero-badge');
  var heroCta = document.getElementById('hero-cta');

  function getNow() {
    return new Date();
  }

  function getDiff(now) {
    var diff = BIRTHDAY.getTime() - now.getTime();
    return diff > 0 ? diff : 0;
  }

  function isBirthdayReached() {
    return getNow().getTime() >= BIRTHDAY.getTime();
  }

  function updateCountdown() {
    var now = getNow();
    var diff = getDiff(now);

    if (diff <= 0) {
      setBirthdayMode();
      return;
    }

    var totalSeconds = Math.floor(diff / 1000);
    var days = Math.floor(totalSeconds / 86400);
    var hours = Math.floor((totalSeconds % 86400) / 3600);
    var minutes = Math.floor((totalSeconds % 3600) / 60);
    var seconds = totalSeconds % 60;

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  function setBirthdayMode() {
    if (heroBadge) heroBadge.textContent = 'Now Celebrating';
    if (heroCta) heroCta.textContent = 'Buka Hadiahmu';
    if (countdownLabel) countdownLabel.textContent = 'Happy 20th Birthday, Hikmah!';
  }

  function initCountdown() {
    if (isBirthdayReached()) {
      setBirthdayMode();
      return;
    }
    updateCountdown();
    var interval = setInterval(function () {
      if (isBirthdayReached()) {
        clearInterval(interval);
        setBirthdayMode();
      } else {
        updateCountdown();
      }
    }, 1000);
  }

  function initScrollReveal() {
    var sections = document.querySelectorAll('.section-reveal');
    if (!sections.length) return;

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      sections.forEach(function (el) { observer.observe(el); });
    } else {
      sections.forEach(function (el) { el.classList.add('visible'); });
    }
  }

  function initGalleryScroll() {
    var containers = document.querySelectorAll('.gallery-scroll');
    containers.forEach(function (container) {
      var leftBtn = container.parentElement.querySelector('.scroll-left');
      var rightBtn = container.parentElement.querySelector('.scroll-right');
      var scrollEl = container.querySelector('.gallery-inner');
      if (!scrollEl) return;
      if (leftBtn) {
        leftBtn.addEventListener('click', function () {
          scrollEl.scrollBy({ left: -280, behavior: 'smooth' });
        });
      }
      if (rightBtn) {
        rightBtn.addEventListener('click', function () {
          scrollEl.scrollBy({ left: 280, behavior: 'smooth' });
        });
      }
    });
  }

  function initGalleryTouch() {
    var cards = document.querySelectorAll('.photo-card');
    cards.forEach(function (card) {
      card.addEventListener('touchstart', function () {
        card.classList.toggle('touch-show');
      });
    });
  }

  function initHeroScrollButtons() {
    var startBtn = document.getElementById('btn-start');
    var messageBtn = document.getElementById('btn-message');
    var backBtn = document.getElementById('btn-back');

    if (startBtn) {
      startBtn.addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('moments')?.scrollIntoView({ behavior: 'smooth' });
      });
    }
    if (messageBtn) {
      messageBtn.addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('message')?.scrollIntoView({ behavior: 'smooth' });
      });
    }
    if (backBtn) {
      backBtn.addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }

  function initNavScroll() {
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var target = link.getAttribute('href');
        if (target) {
          document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  function initNavBackground() {
    var nav = document.getElementById('navbar');
    if (!nav) return;
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            nav.classList.remove('nav-solid');
          } else {
            nav.classList.add('nav-solid');
          }
        });
      },
      { threshold: 0 }
    );
    var hero = document.getElementById('hero');
    if (hero) observer.observe(hero);
  }

  function initBirthdayButtons() {
    var reactionMap = {
      'btn-thanks': [
        'Aku juga sayang kamu! &#x1F970;',
        'Makasih udah jadi Hikmah-ku &#x1F490;',
        'Selamat ulang tahun, cintaku! &#x1F497;',
      ],
      'btn-react-happy': [
        'Aku senang kamu bahagia! &#x1F60A;',
        'Senyummu adalah hadiah terbaik &#x1F496;',
        'Hari ini spesial karena kamu! &#x2728;',
      ],
      'btn-react-love': [
        'Love you more! &#x1F48B;',
        'Kamu adalah segalanya &#x1F490;',
        'Selamanya untuk kamu &#x1F497;',
      ],
    };

    function createHearts() {
      var emojis = ['&#x1F497;', '&#x1F490;', '&#x1F48B;', '&#x2728;', '&#x1F496;'];
      for (var i = 0; i < 12; i++) {
        (function (i) {
          setTimeout(function () {
            var heart = document.createElement('div');
            heart.className = 'heart-float';
            heart.innerHTML = emojis[i % emojis.length];
            heart.style.left = (10 + Math.random() * 80) + '%';
            heart.style.top = (30 + Math.random() * 40) + '%';
            heart.style.fontSize = (1 + Math.random() * 2) + 'rem';
            heart.style.animationDuration = (1.2 + Math.random() * 0.8) + 's';
            document.body.appendChild(heart);
            setTimeout(function () { heart.remove(); }, 2500);
          }, i * 80);
        })(i);
      }
    }

    function showReaction(buttonId) {
      var container = document.getElementById('birthday-reaction');
      if (!container) return;

      var messages = reactionMap[buttonId];
      if (!messages) return;

      var msg = messages[Math.floor(Math.random() * messages.length)];
      container.innerHTML = '<p class="text-primary font-script text-xl md:text-2xl reaction-pop">' + msg + '</p>';

      createHearts();
    }

    var btnThanks = document.getElementById('btn-thanks');
    var btnHappy = document.getElementById('btn-react-happy');
    var btnLove = document.getElementById('btn-react-love');

    if (btnThanks) {
      btnThanks.addEventListener('click', function () { showReaction('btn-thanks'); });
    }
    if (btnHappy) {
      btnHappy.addEventListener('click', function () { showReaction('btn-react-happy'); });
    }
    if (btnLove) {
      btnLove.addEventListener('click', function () { showReaction('btn-react-love'); });
    }

    var btnYes = document.getElementById('btn-yes');
    var funReaction = document.getElementById('fun-reaction');

    if (btnYes) {
      btnYes.addEventListener('click', function () {
        if (funReaction) {
          var msgs = [
            'Aku juga sayang kamu!! &#x1F970; &#x1F490;',
            'Selalu dan selamanya &#x2764;&#xFE0F;',
            'Kamu segalanya buat aku &#x1F497;',
            'My love, my life, my everything &#x1F48B;',
          ];
          funReaction.innerHTML = '<p class="text-primary font-script text-xl md:text-2xl reaction-pop">' + msgs[Math.floor(Math.random() * msgs.length)] + '</p>';
          createHearts();
        }
      });
    }

    var btnRun = document.getElementById('btn-run');
    if (btnRun) {
      var runCount = 0;

      function moveButton(e) {
        e.preventDefault();
        runCount++;

        var parent = btnRun.parentElement;
        var parentRect = parent.getBoundingClientRect();

        var btnW = btnRun.offsetWidth || 80;
        var btnH = btnRun.offsetHeight || 48;

        var pad = 10;
        var maxX = parentRect.width - btnW - pad * 2;
        var maxY = parentRect.height - btnH - pad * 2;

        var randX = pad + Math.random() * Math.max(maxX, 20);
        var randY = pad + Math.random() * Math.max(maxY, 20);

        btnRun.style.position = 'absolute';
        btnRun.style.left = randX + 'px';
        btnRun.style.top = randY + 'px';
        btnRun.style.zIndex = '10';

        if (runCount > 3) {
          btnRun.style.transition = 'all 0.08s ease';
        }

        if (funReaction) {
          var taunts = [
            'Hihihi nggak bisa! &#x1F609;',
            'Coba lagi dong! &#x1F61D;',
            'Kamu nggak akan bisa! &#x1F60E;',
            'Kejar dulu! &#x1F3C3;',
            'Hayooo semangat! &#x1F4AA;',
          ];
          funReaction.innerHTML = '<p class="text-primary font-script text-lg reaction-pop">' + taunts[Math.floor(Math.random() * taunts.length)] + '</p>';
        }
      }

      btnRun.addEventListener('mouseenter', moveButton);
      btnRun.addEventListener('touchstart', moveButton, { passive: false });
      btnRun.addEventListener('click', function (e) { e.preventDefault(); moveButton(e); });
    }
  }

  function handleBrokenImages() {
    var imgs = document.querySelectorAll('.photo-card img, .hero-img');
    imgs.forEach(function (img) {
      img.addEventListener('error', function () {
        this.src = 'assets/images/placeholder.webp';
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initCountdown();
    initScrollReveal();
    initGalleryScroll();
    initGalleryTouch();
    initHeroScrollButtons();
    initNavScroll();
    initNavBackground();
    initBirthdayButtons();
    handleBrokenImages();
  });
})();
