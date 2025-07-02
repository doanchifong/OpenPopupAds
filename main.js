(function() {
  var maxOpens = 3;
  var key = 'popup_open_count';

  function openPopunder() {
    try {
      var count = parseInt(sessionStorage.getItem(key)) || 0;
      if (count >= maxOpens) return;

      var a = document.createElement("a");
      a.href = "https://bitcoincasinoslot.ru.com/";
      a.target = "popunder";
      a.rel = "noopener noreferrer";
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      window.focus();

      sessionStorage.setItem(key, count + 1);
    } catch (e) {
      console.warn('Popup blocked or sessionStorage not available', e);
    }
  }

  document.addEventListener("click", openPopunder);
})();
