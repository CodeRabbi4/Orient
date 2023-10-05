let navLink  = document.querySelectorAll(".nav-link");

navLink.forEach((tab)=>{
    tab.addEventListener("click",()=>{
        navLink.forEach((remove)=>{
            remove.classList.remove("active")
        })
        tab.classList.add("active")
    })
});