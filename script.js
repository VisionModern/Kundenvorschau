document.addEventListener("DOMContentLoaded", function () {

  document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("nav-menu").classList.toggle("active");
  });

  const headers = document.querySelectorAll('.accordion-header');
  headers.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const isActive = header.classList.contains('active');

      document.querySelectorAll('.accordion-content').forEach(c => {
        c.style.maxHeight = null;
      });
      document.querySelectorAll('.accordion-header').forEach(h => {
        h.classList.remove('active');
      });

      if (!isActive) {
        header.classList.add('active');
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });

  function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
  }

  function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i=0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }

  if (!getCookie("cookies_accepted")) {
    document.getElementById("cookie-banner").style.display = "block";
  }

  document.getElementById("accept-cookies").addEventListener("click", function () {
    setCookie("cookies_accepted", "true", 365);
    document.getElementById("cookie-banner").style.display = "none";
  
  });
  console.log("Cookie bei Seitenaufruf:", getCookie("cookies_accepted"));

if (!getCookie("cookies_accepted")) {
  document.getElementById("cookie-banner").style.display = "block";
} else {
  document.getElementById("cookie-banner").style.display = "none";
}

});
