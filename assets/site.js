// lsync — сайт: язык (RU/EN), кнопка скачивания под систему посетителя, вкладки установки, обратная связь, версии.
(function () {
  'use strict';
  var REPO = 'timsvensonliveru-debug/lsync';
  var GH = 'https://github.com/' + REPO;
  var DL = GH + '/releases/latest/download/';
  var FILES = {
    windows: 'lampa-sync-windows.exe',
    macos: 'lampa-sync-macos.zip',
    linux: 'lampa-sync-linux.zip',
    nas: 'lampa-sync-qnap-umbrel-docker.zip'
  };

  var I18N = {
    ru: {
      'title.index': 'lsync — свой сервер синхронизации для Lampa',
      'title.versions': 'Версии — lsync',
      'nav.features': 'Возможности', 'nav.install': 'Установка', 'nav.how': 'Как это работает',
      'nav.security': 'Безопасность', 'nav.versions': 'Версии', 'fb': 'Обратная связь', 'menu': 'Меню',
      'hero.lead': 'Свой сервер синхронизации для Lampa',
      'hero.sub': 'Избранное, таймкоды, настройки и плагины — одинаковые на телевизоре, телефоне и в браузере. ' +
        'Данные хранятся у вас дома, а не на чужом сервере.',
      'dl.for': 'Скачать для {os}', 'dl.other': 'Другие платформы:',
      'dl.pick': 'Сервер ставится на компьютер или NAS — выберите платформу:',
      'dl.note': 'Ссылки всегда ведут на последнюю версию. Прошлые — на странице <a href="versions.html">«Версии»</a>.',
      'badge.beta': '<b>●</b> Бета-тест', 'badge.lang': 'Русский · English',
      'f.title': 'Возможности', 'f.sub': 'Всё, что Lampa хранит на устройстве, — общее для вашей семьи.',
      'f.fav.t': 'Избранное', 'f.fav.d': 'Закладки, «Нравится», «Позже» и свои категории — на всех устройствах.',
      'f.time.t': 'Таймкоды', 'f.time.d': 'Начали фильм на телевизоре — досмотрите на телефоне с того же места.',
      'f.set.t': 'Настройки', 'f.set.d': 'Интерфейс, парсер, TorrServer — по группам. Что синхронизировать, решаете вы.',
      'f.plug.t': 'Плагины', 'f.plug.d': 'Один список на всю семью, у каждого профиля — свой набор включённых.',
      'f.prof.t': 'Профили', 'f.prof.d': 'Профиль для каждого в семье. Детский — с простым меню и выходом по PIN-коду.',
      'f.bk.t': 'Резервные копии', 'f.bk.d': 'Настройки устройств и вся база — в ваш Telegram.',
      'f.rc.t': 'Пульт', 'f.rc.d': 'Работает с пультом телевизора, мышью и касанием.',
      'f.net.t': 'Дома и в дороге', 'f.net.d': 'В домашней сети и через интернет: постоянный адрес через Tailscale, без проброса портов.',
      'i.title': 'Установка', 'i.sub': 'Сервер ставится один раз — на компьютер, NAS или мини-сервер, который обычно включён.',
      'i.win.1': 'Скачайте <a href="' + DL + FILES.windows + '">lampa-sync-windows.exe</a>.',
      'i.win.2': 'Запустите его и следуйте мастеру. Если сервер уже стоит, мастер найдёт его и обновит.',
      'i.mac.1': 'Скачайте <a href="' + DL + FILES.macos + '">lampa-sync-macos.zip</a> и распакуйте в <code>~/lampa-sync</code>.',
      'i.lin.1': 'Скачайте <a href="' + DL + FILES.linux + '">lampa-sync-linux.zip</a> и распакуйте в <code>~/lampa-sync</code>.',
      'i.unix.2': 'В терминале: <code>cd ~/lampa-sync && sh install.sh</code>. Подробности — в <code>УСТАНОВКА.md</code> внутри архива.',
      'i.nas.1': 'Скачайте <a href="' + DL + FILES.nas + '">lampa-sync-qnap-umbrel-docker.zip</a>.',
      'i.nas.2': 'QNAP — через Container Station; Umbrel и Linux — <code>docker compose up -d</code>. ' +
        'Инструкция — <code>ИНСТРУКЦИЯ.md</code> внутри архива, образ <code>ghcr.io/' + REPO.split('/')[0] + '/lampa-sync</code>.',
      'i.after': '<b>Дальше в Lampa:</b> «Настройки → Расширения → Добавить плагин» и адрес, который показывает ваш сервер. ' +
        'Новое устройство подтверждается в веб-админке сервера, кнопкой в Telegram или сразу — по ссылке-приглашению.',
      'i.update': 'Сервер обновляется сам, по ночам, и ставит только версии, подписанные автором.',
      'h.title': 'Как это работает', 'h.sub': 'Lampa на ваших устройствах разговаривает с вашим же сервером — больше ни с кем.',
      'h.dev.t': 'Телевизор · телефон · браузер', 'h.dev.d': 'Lampa и маленький плагин-загрузчик lsync',
      'h.srv.t': 'Ваш домашний сервер', 'h.srv.d': 'Избранное, таймкоды, настройки, плагины. Веб-админка и Telegram-бот',
      'h.l1': '<b>Загрузчик</b> — маленький плагин для Lampa: входит на ваш сервер и получает от него основную часть, подписанную автором.',
      'h.l2': '<b>Сервер</b> — ваш. Без него Lampa работает как обычно, а изменения дойдут, когда сервер снова будет доступен.',
      'h.l3': '<b>Telegram</b> — по желанию: бот подтверждает вход новых устройств и раз в сутки присылает копию базы в вашу группу.',
      's.title': 'Безопасность',
      's.l1': 'Данные хранятся только на вашем сервере. Сторонних серверов нет.',
      's.l2': 'Код, который получает Lampa, и каждое обновление сервера подписаны автором и проверяются перед запуском — подменить их не получится.',
      's.l3': 'Вход в Telegram (резервные копии, настройка бота) — только на время операции.',
      's.l4': 'Веб-админка открывается только на самом сервере или из вашей домашней сети.',
      'foot.note': 'lsync — независимый проект, не связан с авторами Lampa и CUB.',
      'fbd.title': 'Обратная связь',
      'fbd.sub': 'Обращения принимаются на GitHub (нужен аккаунт). Укажите платформу, версию (видна в веб-админке) и что произошло.',
      'fbd.bug.t': '🐞 Сообщить об ошибке', 'fbd.bug.d': 'Что-то не работает или работает не так',
      'fbd.idea.t': '💡 Предложить идею', 'fbd.idea.d': 'Чего не хватает и как это должно работать',
      'fbd.all.t': '📋 Все обращения', 'fbd.all.d': 'Посмотреть, что уже известно, и добавить своё',
      'fbd.bug.title': 'Ошибка: ', 'fbd.idea.title': 'Идея: ',
      'fbd.bug.body': '**Платформа сервера** (Windows / macOS / Linux / NAS):\n**Версия** (видна в веб-админке):\n' +
        '**Устройство с Lampa** (ТВ / телефон / браузер):\n\n**Что произошло:**\n\n**Что ожидали:**\n',
      'fbd.idea.body': '**Чего не хватает:**\n\n**Как это должно работать:**\n',
      'v.title': 'Версии',
      'v.sub': 'Все выпуски lsync. Сервер обновляется сам — скачивать вручную нужно только для новой установки.',
      'v.loading': 'Загружаю список версий…',
      'v.error': 'Не удалось загрузить список. Он есть и на <a href="' + GH + '/releases">GitHub</a>.',
      'v.latest': 'последняя', 'v.nofiles': 'Файлов нет',
      'v.win': 'Windows', 'v.unix': 'macOS · Linux', 'v.nas': 'QNAP · Umbrel · Docker'
    },
    en: {
      'title.index': 'lsync — your own sync server for Lampa',
      'title.versions': 'Releases — lsync',
      'nav.features': 'Features', 'nav.install': 'Install', 'nav.how': 'How it works',
      'nav.security': 'Security', 'nav.versions': 'Releases', 'fb': 'Feedback', 'menu': 'Menu',
      'hero.lead': 'Your own sync server for Lampa',
      'hero.sub': 'Favorites, watch progress, settings and plugins stay the same on your TV, phone and browser. ' +
        'Your data lives at home, not on someone else\'s server.',
      'dl.for': 'Download for {os}', 'dl.other': 'Other platforms:',
      'dl.pick': 'The server runs on a computer or a NAS — choose your platform:',
      'dl.note': 'Links always point to the latest version. Older ones are on the <a href="versions.html">Releases</a> page.',
      'badge.beta': '<b>●</b> Beta', 'badge.lang': 'English · Русский',
      'f.title': 'Features', 'f.sub': 'Everything Lampa keeps on a device is shared across your family.',
      'f.fav.t': 'Favorites', 'f.fav.d': 'Bookmarks, Likes, Watch later and your own categories — on every device.',
      'f.time.t': 'Watch progress', 'f.time.d': 'Start a movie on the TV and finish it on your phone right where you stopped.',
      'f.set.t': 'Settings', 'f.set.d': 'Interface, parser, TorrServer — in groups. You decide what syncs.',
      'f.plug.t': 'Plugins', 'f.plug.d': 'One list for the whole family; each profile has its own set turned on.',
      'f.prof.t': 'Profiles', 'f.prof.d': 'A profile for everyone. The kids\' profile has a simpler menu and a PIN to leave it.',
      'f.bk.t': 'Backups', 'f.bk.d': 'Device settings and the whole database go to your Telegram.',
      'f.rc.t': 'Remote control', 'f.rc.d': 'Works with a TV remote, a mouse and touch.',
      'f.net.t': 'At home and away', 'f.net.d': 'On your home network and over the internet: a permanent Tailscale address, no port forwarding.',
      'i.title': 'Install', 'i.sub': 'You install the server once — on a computer, NAS or mini server that is usually on.',
      'i.win.1': 'Download <a href="' + DL + FILES.windows + '">lampa-sync-windows.exe</a>.',
      'i.win.2': 'Run it and follow the wizard. If a server is already installed, the wizard finds and updates it.',
      'i.mac.1': 'Download <a href="' + DL + FILES.macos + '">lampa-sync-macos.zip</a> and unzip it to <code>~/lampa-sync</code>.',
      'i.lin.1': 'Download <a href="' + DL + FILES.linux + '">lampa-sync-linux.zip</a> and unzip it to <code>~/lampa-sync</code>.',
      'i.unix.2': 'In a terminal: <code>cd ~/lampa-sync && sh install.sh</code>. Details are in <code>INSTALL-macOS-Linux.md</code> inside the archive.',
      'i.nas.1': 'Download <a href="' + DL + FILES.nas + '">lampa-sync-qnap-umbrel-docker.zip</a>.',
      'i.nas.2': 'QNAP — via Container Station; Umbrel and Linux — <code>docker compose up -d</code>. ' +
        'Instructions are in <code>INSTRUCTIONS.md</code> inside the archive; image <code>ghcr.io/' + REPO.split('/')[0] + '/lampa-sync</code>.',
      'i.after': '<b>Then in Lampa:</b> Settings → Extensions → Add plugin, and enter the address your server shows. ' +
        'Approve a new device in the server\'s web admin, with a button in Telegram, or instantly with an invite link.',
      'i.update': 'The server updates itself at night and installs only versions signed by the author.',
      'h.title': 'How it works', 'h.sub': 'Lampa on your devices talks to your own server — and nobody else.',
      'h.dev.t': 'TV · phone · browser', 'h.dev.d': 'Lampa and the small lsync loader plugin',
      'h.srv.t': 'Your home server', 'h.srv.d': 'Favorites, watch progress, settings, plugins. Web admin and Telegram bot',
      'h.l1': '<b>Loader</b> — a small Lampa plugin: it signs in to your server and gets the main part from it, signed by the author.',
      'h.l2': '<b>Server</b> — yours. Without it Lampa works as usual, and changes arrive once the server is reachable again.',
      'h.l3': '<b>Telegram</b> — optional: the bot approves new devices and sends a daily database backup to your group.',
      's.title': 'Security',
      's.l1': 'Your data is stored only on your server. No third-party servers.',
      's.l2': 'The code Lampa receives and every server update are signed by the author and checked before they run — they can\'t be swapped.',
      's.l3': 'Telegram sign-in (backups, bot setup) lasts only as long as the operation.',
      's.l4': 'The web admin opens only on the server itself or from your home network.',
      'foot.note': 'lsync is an independent project, not affiliated with the authors of Lampa or CUB.',
      'fbd.title': 'Feedback',
      'fbd.sub': 'Feedback goes to GitHub (an account is required). Include your platform, the version (shown in the web admin) and what happened.',
      'fbd.bug.t': '🐞 Report a bug', 'fbd.bug.d': 'Something doesn\'t work, or works the wrong way',
      'fbd.idea.t': '💡 Suggest an idea', 'fbd.idea.d': 'What\'s missing and how it should work',
      'fbd.all.t': '📋 All issues', 'fbd.all.d': 'See what is already known and add yours',
      'fbd.bug.title': 'Bug: ', 'fbd.idea.title': 'Idea: ',
      'fbd.bug.body': '**Server platform** (Windows / macOS / Linux / NAS):\n**Version** (shown in the web admin):\n' +
        '**Lampa device** (TV / phone / browser):\n\n**What happened:**\n\n**What you expected:**\n',
      'fbd.idea.body': '**What\'s missing:**\n\n**How it should work:**\n',
      'v.title': 'Releases',
      'v.sub': 'Every lsync release. The server updates itself — manual downloads are only needed for a new install.',
      'v.loading': 'Loading releases…',
      'v.error': 'Couldn\'t load the list. It is also on <a href="' + GH + '/releases">GitHub</a>.',
      'v.latest': 'latest', 'v.nofiles': 'No files',
      'v.win': 'Windows', 'v.unix': 'macOS · Linux', 'v.nas': 'QNAP · Umbrel · Docker'
    }
  };
  var OS_NAMES = { windows: 'Windows', macos: 'macOS', linux: 'Linux', nas: 'QNAP · Umbrel · Docker' };

  // ─── язык ───────────────────────────────────────────────────────────────
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) {} return null; }
  function pickLang() {
    var m = /[?&]lang=(ru|en)\b/.exec(location.search);
    if (m) return m[1];
    var saved = store('lsync_lang');
    if (saved === 'ru' || saved === 'en') return saved;
    var nav = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
    return /^(ru|uk|be|kk|uz|ky|az|hy|ka|tg)\b/i.test(nav) ? 'ru' : 'en';
  }
  var lang = pickLang();
  function t(key) { return (I18N[lang] && I18N[lang][key]) || I18N.ru[key] || key; }

  function applyLang() {
    document.documentElement.lang = lang;
    var page = document.body.getAttribute('data-page');
    if (page) document.title = t('title.' + page);
    var i, els = document.querySelectorAll('[data-i18n]');
    for (i = 0; i < els.length; i++) els[i].textContent = t(els[i].getAttribute('data-i18n'));
    els = document.querySelectorAll('[data-i18n-html]');
    for (i = 0; i < els.length; i++) els[i].innerHTML = t(els[i].getAttribute('data-i18n-html'));
    els = document.querySelectorAll('[data-i18n-label]');
    for (i = 0; i < els.length; i++) els[i].setAttribute('aria-label', t(els[i].getAttribute('data-i18n-label')));
    var btns = document.querySelectorAll('.lang button');
    for (i = 0; i < btns.length; i++) btns[i].classList.toggle('on', btns[i].getAttribute('data-lang') === lang);
    renderDownload();
    renderFeedbackLinks();
    if (page === 'versions') renderReleases();
  }

  // ─── скачивание: главная кнопка под систему посетителя ──────────────────
  function detectOs() {
    var ua = navigator.userAgent || '';
    if (/Android|iPhone|iPad|iPod|Tizen|Web0S|webOS|SmartTV|CrKey/i.test(ua)) return null;  // сервер туда не ставится
    if (/Windows/i.test(ua)) return 'windows';
    if (/Macintosh|Mac OS X/i.test(ua)) return 'macos';
    if (/Linux|X11/i.test(ua)) return 'linux';
    return null;
  }
  var latest = null;  // { tag, date }

  function renderDownload() {
    var box = document.getElementById('dl');
    if (!box) return;
    var os = detectOs();
    var html = '';
    var others = ['windows', 'macos', 'linux', 'nas'];
    if (os) {
      html += '<a class="dl-main" href="' + DL + FILES[os] + '">' + ICON.download +
        '<span>' + t('dl.for').replace('{os}', OS_NAMES[os]) + (latest ? ' <small>' + latest.tag + '</small>' : '') + '</span></a>';
      others.splice(others.indexOf(os), 1);
      html += '<div class="dl-other">' + t('dl.other');
    } else {
      html += '<div class="dl-other">' + t('dl.pick') + '<br>';
    }
    for (var i = 0; i < others.length; i++) html += ' <a href="' + DL + FILES[others[i]] + '">' + OS_NAMES[others[i]] + '</a>';
    html += '</div><div class="dl-note">' + t('dl.note') + '</div>';
    box.innerHTML = html;
  }

  function loadLatest() {
    if (!document.getElementById('dl')) return;
    fetchJson('https://api.github.com/repos/' + REPO + '/releases/latest', function (r) {
      latest = { tag: r.tag_name, date: r.published_at };
      renderDownload();
    });
  }

  // ─── обратная связь ─────────────────────────────────────────────────────
  function issueUrl(kind) {
    return GH + '/issues/new?labels=' + (kind === 'bug' ? 'bug' : 'enhancement') +
      '&title=' + encodeURIComponent(t('fbd.' + kind + '.title')) + '&body=' + encodeURIComponent(t('fbd.' + kind + '.body'));
  }
  function renderFeedbackLinks() {
    var bug = document.getElementById('fb-bug');
    if (bug) bug.href = issueUrl('bug');
    var idea = document.getElementById('fb-idea');
    if (idea) idea.href = issueUrl('idea');
    var all = document.getElementById('fb-all');
    if (all) all.href = GH + '/issues';
  }
  function openFeedback(e) {
    if (e) e.preventDefault();
    var d = document.getElementById('feedback');
    if (d && d.showModal) d.showModal();
    else location.href = GH + '/issues';
  }

  // ─── версии ─────────────────────────────────────────────────────────────
  var releases = null;
  var releasesFailed = false;

  function fileLabel(name) {
    if (/\.exe$/i.test(name)) return t('v.win');
    if (/docker|qnap|umbrel/i.test(name)) return t('v.nas');
    if (/macos/i.test(name)) return 'macOS';
    if (/linux/i.test(name)) return 'Linux';
    return t('v.unix');
  }
  function fileRank(name) {
    if (/\.exe$/i.test(name)) return 0;
    if (/docker|qnap|umbrel/i.test(name)) return 2;
    return 1;
  }
  function fmtDate(iso) {
    try { return new Date(iso).toLocaleDateString(lang === 'ru' ? 'ru-RU' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' }); }
    catch (e) { return iso.slice(0, 10); }
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function renderReleases() {
    var box = document.getElementById('releases');
    if (!box) return;
    if (releasesFailed) { box.innerHTML = '<p class="muted">' + t('v.error') + '</p>'; return; }
    if (!releases) { box.innerHTML = '<p class="muted">' + t('v.loading') + '</p>'; return; }
    var html = '';
    for (var i = 0; i < releases.length; i++) {
      var r = releases[i];
      if (r.draft) continue;
      var ver = String(r.tag_name).replace(/^v/, '');
      // в выпуске два набора одних и тех же сборок: «всегда последняя» и с номером версии — показываем с номером
      var files = [];
      for (var j = 0; j < r.assets.length; j++) if (r.assets[j].name.indexOf(ver) >= 0) files.push(r.assets[j]);
      if (!files.length) files = r.assets;
      files = files.slice().sort(function (a, b) { return fileRank(a.name) - fileRank(b.name); });  // Windows первой
      html += '<div class="rel"><div class="rel-head"><h3>' + esc(r.tag_name) + '</h3>' +
        '<span class="rel-date">' + esc(fmtDate(r.published_at)) + '</span>' +
        (i === 0 ? '<span class="tag-latest">' + t('v.latest') + '</span>' : '') + '</div><div class="rel-files">';
      if (!files.length) html += '<span class="muted">' + t('v.nofiles') + '</span>';
      for (j = 0; j < files.length; j++) {
        html += '<a class="btn" href="' + esc(files[j].browser_download_url) + '">' + ICON.download +
          esc(fileLabel(files[j].name)) + '</a>';
      }
      html += '</div></div>';
    }
    box.innerHTML = html;
  }
  function loadReleases() {
    if (!document.getElementById('releases')) return;
    fetchJson('https://api.github.com/repos/' + REPO + '/releases?per_page=100', function (list) {
      releases = list;
      renderReleases();
    }, function () {
      releasesFailed = true;
      renderReleases();
    });
  }

  // ─── мелочи ─────────────────────────────────────────────────────────────
  var ICON = {
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" ' +
      'stroke-linejoin="round"><path d="M12 4v11M7 10l5 5 5-5M5 20h14"/></svg>'
  };
  function fetchJson(url, ok, fail) {
    var x = new XMLHttpRequest();
    x.open('GET', url);
    x.setRequestHeader('Accept', 'application/vnd.github+json');
    x.onload = function () {
      if (x.status !== 200) return fail && fail();
      try { ok(JSON.parse(x.responseText)); } catch (e) { if (fail) fail(); }
    };
    x.onerror = function () { if (fail) fail(); };
    x.send();
  }

  function setupTabs() {
    var tabs = document.querySelectorAll('.tab');
    function show(id) {
      for (var i = 0; i < tabs.length; i++) {
        var on = tabs[i].getAttribute('data-tab') === id;
        tabs[i].classList.toggle('on', on);
        tabs[i].setAttribute('aria-selected', on ? 'true' : 'false');
        document.getElementById('pane-' + tabs[i].getAttribute('data-tab')).classList.toggle('on', on);
      }
    }
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener('click', function () { show(this.getAttribute('data-tab')); });
    }
    if (tabs.length) show(detectOs() || 'windows');
  }

  function setup() {
    var i, btns = document.querySelectorAll('.lang button');
    for (i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function () {
        lang = this.getAttribute('data-lang');
        store('lsync_lang', lang);
        applyLang();
      });
    }
    var fb = document.querySelectorAll('[data-feedback]');
    for (i = 0; i < fb.length; i++) fb[i].addEventListener('click', openFeedback);
    var close = document.querySelector('.dialog-close');
    if (close) close.addEventListener('click', function () { document.getElementById('feedback').close(); });
    var menu = document.querySelector('.menu-btn');
    var nav = document.querySelector('.nav');
    if (menu && nav) {
      menu.addEventListener('click', function () { nav.classList.toggle('open'); });
      nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') nav.classList.remove('open'); });
    }
    setupTabs();
    applyLang();
    loadLatest();
    loadReleases();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', setup);
  else setup();
})();
