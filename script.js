/* =========================================================
   SUSHIL ZANWAR PORTFOLIO
   Main JavaScript
   Pure JavaScript - no libraries required
   ========================================================= */


/* =========================================================
   1. MOBILE NAVIGATION
   ========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");


/*
    When the mobile menu button is clicked,
    open or close the navigation menu.
*/

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("open");

    });

}


/* =========================================================
   2. CLOSE MOBILE MENU AFTER CLICKING A LINK
   ========================================================= */

const navigationLinks = document.querySelectorAll(".nav-links a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("open");

    });

});


/* =========================================================
   3. SCROLL REVEAL ANIMATION
   ========================================================= */


/*
    Add the "reveal" class to important sections
    automatically.
*/

const revealElements = document.querySelectorAll(
    ".about-column, .expertise-card, .experience-item, .credential-item, .leadership-card, .quick-id, .contact-form-area"
);


revealElements.forEach(function (element) {

    element.classList.add("reveal");

});


/*
    IntersectionObserver detects when an element
    becomes visible on the screen.
*/

const revealObserver = new IntersectionObserver(
    function (entries, observer) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


/*
    Start observing each element.
*/

revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


/* =========================================================
   4. CONTACT FORM
   ========================================================= */

const contactForm = document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        /*
            Stop the browser from refreshing the page.
        */

        event.preventDefault();


        /*
            Collect form information.
        */

        const firstName =
            document.getElementById("firstName").value.trim();

        const lastName =
            document.getElementById("lastName").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const subject =
            document.getElementById("subject").value.trim();

        const message =
            document.getElementById("message").value.trim();


        /*
            Create the email content.
        */

        const emailBody =
            "Name: " +
            firstName +
            " " +
            lastName +
            "\n\n" +

            "Email: " +
            email +
            "\n\n" +

            "Message:\n" +
            message;


        /*
            Open the user's email application.
        */

        const mailtoLink =
            "mailto:sushil.zanwar@gmail.com" +
            "?subject=" +
            encodeURIComponent(subject) +
            "&body=" +
            encodeURIComponent(emailBody);


        window.location.href = mailtoLink;

    });

}


/* =========================================================
   5. CURRENT YEAR IN FOOTER
   ========================================================= */

const currentYear =
    document.getElementById("currentYear");


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================================================
   6. HEADER BACKGROUND ON SCROLL
   ========================================================= */

const header =
    document.querySelector(".site-header");


window.addEventListener("scroll", function () {

    if (!header) {
        return;
    }


    if (window.scrollY > 60) {

        header.style.background =
            "rgba(10, 24, 39, 0.97)";

    } else {

        header.style.background =
            "rgba(10, 24, 39, 0.88)";

    }

});