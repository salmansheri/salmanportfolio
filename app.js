const hamburgerbtn = document.getElementById("hamburger"); 
const nav_list = document.getElementById("nav-list"); 


function toggleButton() {
    nav_list.classList.toggle("show"); 
}

hamburgerbtn.addEventListener("click", toggleButton); 