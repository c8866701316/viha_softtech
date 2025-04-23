/**
 * Template Name: FlexStart - v1.7.0
 * Template URL: https://bootstrapmade.com/flexstart-bootstrap-startup-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

// Remove animation from mobile
(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach((e) => e.addEventListener(type, listener));
    } else {
      select(el, all).addEventListener(type, listener);
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    // let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select("#header");
    let offset = header.offsetHeight;

    if (!header.classList.contains("header-scrolled")) {
      offset -= 10;
    }

    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: "smooth",
    });
  };

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select("#header");
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 0) {
        selectHeader.classList.add("header-scrolled");
      } else {
        selectHeader.classList.remove("header-scrolled");
      }
    };
    window.addEventListener("load", headerScrolled);
    onscroll(document, headerScrolled);
  }

  /**
   * Back to top button
   */
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }


  /**
   * Mobile nav toggle
   */
  on("click", ".mobile-nav-toggle", function (e) {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  /**
   * Mobile nav dropdowns activate
   */
  on(
    "click",
    ".navbar .dropdown div",
    function (e) {
      if (select("#navbar").classList.value.includes("navbar-mobile")) {
        if (!this.classList.value.includes("lastChild")) {
          e.preventDefault();
          this.nextElementSibling.classList.toggle("dropdown-active");
        }
      }
    },
    true
  );

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on(
    "click",
    ".scrollto",
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();

        let navbar = select("#navbar");
        if (navbar.classList.contains("navbar-mobile")) {
          navbar.classList.remove("navbar-mobile");
          let navbarToggle = select(".mobile-nav-toggle");
          navbarToggle.classList.toggle("bi-list");
          navbarToggle.classList.toggle("bi-x");
        }
        scrollto(this.hash);
      }
    },
    true
  );

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener("load", () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });

  /**
   * Clients Slider
   */
  new Swiper(".clients-slider", {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80,
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120,
      },
    },
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener("load", () => {
    let portfolioContainer = select(".portfolio-container");
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: ".portfolio-item",
        layoutMode: "fitRows",
      });

      let portfolioFilters = select("#portfolio-flters li", true);

      on(
        "click",
        "#portfolio-flters li",
        function (e) {
          e.preventDefault();
          portfolioFilters.forEach(function (el) {
            el.classList.remove("filter-active");
          });
          this.classList.add("filter-active");

          portfolioIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });
          aos_init();
        },
        true
      );
    }
  });

  /**
   * Initiate portfolio lightbox
   */
  const portfolioLightbox = GLightbox({
    selector: ".portfokio-lightbox",
  });

  /**
   * Portfolio details slider
   */
  new Swiper(".portfolio-details-slider", {
    speed: 400,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  /**
   * Testimonials slider
   */
  new Swiper(".testimonials-slider", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40,
      },

      1024: {
        slidesPerView: 3,
      },
    },
  });

  /**
   * Animation on scroll
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
      disable: 'mobile'
    });
  }
  window.addEventListener("load", () => {
    aos_init();
  });
})();

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

const sSection = document.getElementsByTagName("section");

function scroll_dDown() {
  document
    .getElementById("scroll-down")
    .scrollIntoView({ block: "start", behavior: "auto", inline: "nearest" });
  window.location.sSection = sSection.length;
}

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.getElementById("year").innerHTML = new Date().getFullYear()

$(function () {
  $('*').tooltip({ track: true });
  $('*[title]').tooltip('disable');
});

// Function to dynamically add JSON-LD script to the page
function addJSONLDScript() {

  // const pageUrl = window.location.href;
  // const pageName = document.title;

  // Define the JSON-LD data
  const jsonData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "mainEntity": {
          "@type": "Organization",
          "name": "AlgoScript Software Pvt. Ltd.",
          "url": "https://algoscript.clustersofttech.com",
          "logo": "https://www.algoscript.in/assets/img/viha_softtech.png",
          "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91 95123 96168",
              "contactType": "Customer Service",
              "email": "info@aloscript.in",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi"]
          },
          "address": {
              "@type": "PostalAddress",
              "streetAddress": "A-607 Diamond world Mini bazar",
              "addressLocality": "surat",
              "addressCountry": "IN"
          }
      }
  };

  // Create a <script> element
  const scriptTag = document.createElement('script');
  scriptTag.type = 'application/ld+json';
  
  // Set the script's content to the JSON-LD data
  scriptTag.textContent = JSON.stringify(jsonData, null, 2);

  // Append the script to the <head> section
  document.head.appendChild(scriptTag);
}

// Call the function to add the JSON-LD script
addJSONLDScript();
