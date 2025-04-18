document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("nav-menu").classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
    const headers = document.querySelectorAll('.accordion-header');
  
    headers.forEach(header => {
      header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const isActive = header.classList.contains('active');
  
        // Collapse all
        document.querySelectorAll('.accordion-content').forEach(c => {
          c.style.maxHeight = null;
        });
        document.querySelectorAll('.accordion-header').forEach(h => {
          h.classList.remove('active');
        });
  
        // Expand current
        if (!isActive) {
          header.classList.add('active');
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    });
  });