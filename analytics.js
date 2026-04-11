(function () {
  function analyticsEvent(name, params) {
    if (typeof gtag === 'function') gtag('event', name, params);
  }

  function lettersLocale() {
    var dl = window.dataLayer;
    if (dl && typeof dl.some === 'function') {
      var hit = dl.filter(function (row) {
        return row && typeof row.letters_locale === 'string';
      }).pop();
      if (hit) return hit.letters_locale;
    }
    var lang = document.documentElement.getAttribute('lang') || 'en';
    if (lang.indexOf('es') === 0) return 'es';
    return (lang.slice(0, 2) || 'en').toLowerCase();
  }

  function pageType() {
    return document.querySelector('.article-post') ? 'article' : 'page';
  }

  function isLettersAppUrl(href) {
    return /testflight\.apple\.com|apps\.apple\.com/i.test(href || '');
  }

  document.addEventListener(
    'click',
    function (e) {
      var t = e.target;
      if (!t || typeof t.closest !== 'function') return;
      var a = t.closest('a');
      if (!a || !a.href || !isLettersAppUrl(a.href)) return;
      if (!a.matches('.article-topbar__cta, .beta-cta__btn')) return;

      analyticsEvent('download_click', {
        link_url: a.href,
        locale: lettersLocale(),
        page_type: pageType(),
        cta_location: a.matches('.article-topbar__cta') ? 'topbar' : 'inline',
      });
    },
    true
  );
})();
