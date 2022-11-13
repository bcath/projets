const navSlide =() =>{
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks=document.querySelectorAll(".nav-links li")
    

    
    burger.addEventListener("click", ()=>{
        //toggle Nav
        nav.classList.toggle("nav-active");
    

        //animate links
        navLinks.forEach((link, index) =>{
        if(link.style.animation){
            link.style.animation='';
        }else {
            link.style.animation=`navLinkfade 0.5s ease forwards ${index /5 +0.4  }s`;
        }
    });
    });
}


function reveal() {
    const revealAnim = document.querySelectorAll(".reveal")
  
    for (var i = 0; i < revealAnim.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = revealAnim[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        revealAnim[i].classList.add("active");
      } else {
        revealAnim[i].classList.remove("active");
      }
    }
  }
  
 

navSlide();
window.addEventListener("scroll", reveal);