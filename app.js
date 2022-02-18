const mobileNavToggle = document.getElementById("mobile-nav-toggle");
const navMenu = document.getElementById("nav-menu");

mobileNavToggle.addEventListener("click", () => {
    const visibility = navMenu.getAttribute("data-visible")
    
    if(visibility === "false") {
        mobileNavToggle.innerHTML = `
            <i class="fa-solid fa-xmark"></i>
        `;
       navMenu.setAttribute("data-visible", true)
    } else if(visibility === "true") {
        mobileNavToggle.innerHTML = `
            <i class="fa-solid fa-bars"></i>
        `;
        navMenu.setAttribute("data-visible", false)
    }
})