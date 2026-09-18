/* =========================================================
   SUSHIL ZANWAR PORTFOLIO
   COMPLETE JAVASCRIPT
   Plain JavaScript - No Framework
   ========================================================= */


/* =========================================================
   1. WAIT FOR THE PAGE TO LOAD
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       2. MOBILE NAVIGATION
       ===================================================== */

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.querySelector(".nav-links");


    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", function () {

            const isOpen =
                navLinks.classList.toggle("open");

            menuBtn.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });


        /* ---------------------------------------------
           Close mobile menu after clicking a link
           --------------------------------------------- */

        const navigationItems =
            navLinks.querySelectorAll("a");


        navigationItems.forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("open");

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* =====================================================
       3. CURRENT YEAR IN FOOTER
       ===================================================== */

    const currentYear =
        document.getElementById("currentYear");


    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       4. SCROLL REVEAL ANIMATION
       ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".offering-card, " +
            ".experience-item, " +
            ".credential-item, " +
            ".leadership-card, " +
            ".sector-card, " +
            ".value-card, " +
            ".collaboration-panel, " +
            ".domain-card"
        );


    revealElements.forEach(function (element) {

        element.classList.add("reveal");

    });


    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                function (entries, observer) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(function (element) {

            revealObserver.observe(element);

        });

    } else {

        /* ---------------------------------------------
           Fallback for older browsers
           --------------------------------------------- */

        revealElements.forEach(function (element) {

            element.classList.add("visible");

        });

    }


    /* =====================================================
       5. SMOOTH NAVIGATION
       ===================================================== */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    internalLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                link.getAttribute("href");


            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(targetId);


            if (!target) {
                return;
            }


            event.preventDefault();


            const header =
                document.querySelector(
                    ".site-header"
                );


            const headerHeight =
                header
                    ? header.offsetHeight
                    : 0;


            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight;


            window.scrollTo({

                top: targetPosition,

                behavior: "smooth"

            });

        });

    });


    /* =====================================================
       6. HEADER BACKGROUND ON SCROLL
       ===================================================== */

    const header =
        document.querySelector(".site-header");


    function updateHeader() {

        if (!header) {
            return;
        }


        if (window.scrollY > 40) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    }


    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );


    updateHeader();


    /* =====================================================
       7. ACTIVE NAVIGATION LINK
       ===================================================== */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );


    const navAnchors =
        document.querySelectorAll(
            '.nav-links a[href^="#"]'
        );


    if (
        sections.length &&
        navAnchors.length &&
        "IntersectionObserver" in window
    ) {

        const sectionObserver =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                const currentId =
                                    "#" +
                                    entry.target.id;


                                navAnchors.forEach(
                                    function (anchor) {

                                        anchor.classList.toggle(
                                            "active",
                                            anchor.getAttribute(
                                                "href"
                                            ) === currentId
                                        );

                                    }
                                );

                            }

                        }
                    );

                },
                {
                    rootMargin:
                        "-35% 0px -55% 0px"
                }
            );


        sections.forEach(function (section) {

            sectionObserver.observe(section);

        });

    }


    /* =====================================================
       8. PROFILE IMAGE FALLBACK
       ===================================================== */

    const profileImage =
        document.querySelector(
            ".profile-photo"
        );


    if (profileImage) {

        profileImage.addEventListener(
            "error",
            function () {

                /*
                 * If the image is missing, hide the broken
                 * image rather than showing a broken icon.
                 */

                profileImage.style.display =
                    "none";

            }
        );

    }


    /* =====================================================
       9. EXTERNAL LINKS
       ===================================================== */

    const externalLinks =
        document.querySelectorAll(
            'a[target="_blank"]'
        );


    externalLinks.forEach(function (link) {

        /*
         * Make external links safer when opened
         * in a new browser tab.
         */

        const currentRel =
            link.getAttribute("rel") || "";


        if (
            !currentRel.includes(
                "noopener"
            )
        ) {

            link.setAttribute(
                "rel",
                (currentRel + " noopener noreferrer").trim()
            );

        }

    });


    /* =====================================================
       10. ESCAPE KEY
       Close the mobile menu when the user presses Escape.
       ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                navLinks &&
                menuBtn
            ) {

                navLinks.classList.remove(
                    "open"
                );

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );


    /* =====================================================
       11. PREVENT JUMP FOR EMPTY LINKS
       ===================================================== */

    const emptyLinks =
        document.querySelectorAll(
            'a[href="#"]'
        );


    emptyLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

            }
        );

    });


    /* =====================================================
       12. PAGE READY
       ===================================================== */

    document.body.classList.add(
        "page-loaded"
    );


});