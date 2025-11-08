function loadComponent(path, element) {
  fetch(path)
    .then((response) => response.text())
    .then((html) => {
      document.querySelector(element).outerHTML = html;

      // Initialize navigation if we just loaded it
      if (element === "header.site-header") {
        initNavigation();
      }
    });
}

function initNavigation() {
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      nav.classList.toggle("show");
      // ✅ Prevent page scrolling while menu is open
      document.body.classList.toggle(
        "no-scroll",
        nav.classList.contains("show")
      );
    });

    // Optional: Close menu when clicking outside
    document.addEventListener("click", function (event) {
      if (!navToggle.contains(event.target) && !nav.contains(event.target)) {
        nav.classList.remove("show");
        document.body.classList.remove("no-scroll");
      }
    });
  }
}
