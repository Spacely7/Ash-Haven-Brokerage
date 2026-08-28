/* =====================================================================
   ASH HAVEN INSURANCE BROKERAGE SERVICES LTD.
   Shared site script — loaded on every page.
   ===================================================================== */

document.addEventListener("DOMContentLoaded", function () {

  /* -------------------------------------------------------------
     1. Sticky navigation — add a shadow/compact state on scroll
     ----------------------------------------------------------- */
  var mainNav = document.querySelector(".main-nav");
  function handleNavScroll() {
    if (!mainNav) return;
    if (window.scrollY > 24) {
      mainNav.classList.add("is-scrolled");
    } else {
      mainNav.classList.remove("is-scrolled");
    }
  }
  handleNavScroll();
  window.addEventListener("scroll", handleNavScroll, { passive: true });

  /* Close the mobile menu automatically after a link is tapped */
  var navLinks = document.querySelectorAll(".main-nav .nav-link");
  var navCollapseEl = document.getElementById("mainNavCollapse");
  if (navCollapseEl && window.bootstrap) {
    var bsCollapse = new bootstrap.Collapse(navCollapseEl, { toggle: false });
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        if (navCollapseEl.classList.contains("show")) {
          bsCollapse.hide();
        }
      });
    });
  }

  /* -------------------------------------------------------------
     2. Scroll-reveal animation (respects reduced-motion via CSS)
     ----------------------------------------------------------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* -------------------------------------------------------------
     3. Scroll-to-top button
     ----------------------------------------------------------- */
  var scrollTopBtn = document.querySelector(".scroll-top-btn");
  if (scrollTopBtn) {
    window.addEventListener(
      "scroll",
      function () {
        if (window.scrollY > 480) {
          scrollTopBtn.classList.add("is-visible");
        } else {
          scrollTopBtn.classList.remove("is-visible");
        }
      },
      { passive: true }
    );
    scrollTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* -------------------------------------------------------------
     4. Auto-fill the current year in the footer
     ----------------------------------------------------------- */
  var yearEls = document.querySelectorAll("[data-current-year]");
  yearEls.forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* -------------------------------------------------------------
     5. Contact form validation (client-side only — no backend
        is wired up yet; replace the submit handler below with a
        real endpoint or form service when the site goes live).
     ----------------------------------------------------------- */
  var contactForm = document.getElementById("contactForm");
  if (contactForm) {
    var feedbackBox = document.getElementById("formFeedback");

    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      event.stopPropagation();

      if (!contactForm.checkValidity()) {
        contactForm.classList.add("was-validated");
        return;
      }

      // ---- Placeholder "success" behaviour -----------------------
      // No server is connected yet. When ready to receive messages,
      // replace this block with a fetch() call to your form endpoint
      // (e.g. a serverless function, or a service such as Formspree).
      contactForm.classList.remove("was-validated");
      contactForm.reset();

      if (feedbackBox) {
        feedbackBox.classList.remove("d-none");
        feedbackBox.focus();
      }

      window.setTimeout(function () {
        if (feedbackBox) feedbackBox.classList.add("d-none");
      }, 8000);
    });

    // Clear the Bootstrap validation state once a field becomes valid
    contactForm.querySelectorAll(".form-control").forEach(function (field) {
      field.addEventListener("input", function () {
        if (field.checkValidity()) {
          field.classList.remove("is-invalid");
        }
      });
    });
  }

});
