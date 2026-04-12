const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const closeBtn = document.querySelector(".close-menu"); 

if (hamburger) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.add("active");
        document.body.classList.add("no-scroll"); 
    });
}

if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        navLinks.classList.remove("active");
        document.body.classList.remove("no-scroll"); 
    });
}

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function(e) {
        const parent = this.parentElement;

        if (parent.classList.contains("dropdown-parent")) {
            e.preventDefault(); 
            
            const isOpen = parent.classList.contains("open");

            document.querySelectorAll(".dropdown-parent").forEach(otherParent => {
                otherParent.classList.remove("open");
            });


            if (!isOpen) {
                parent.classList.add("open");
            }
        } else {
            navLinks.classList.remove("active");
            document.body.classList.remove("no-scroll");
        }
    });
});