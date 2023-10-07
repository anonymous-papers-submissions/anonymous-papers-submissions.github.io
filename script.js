document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("a[data-scroll]");

    for (const link of links) {
        link.addEventListener("click", clickHandler);
    }

    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;
        const navHeight = document.querySelector('nav').offsetHeight;

        scroll({
            top: offsetTop - navHeight, // subtract the nav height here
            behavior: "smooth"
        });
    }
});
