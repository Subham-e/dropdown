var features =   document.querySelector(".features div");
var company =   document.querySelector(".company div");

document.querySelector(".features button").addEventListener("click", function(){
   features.classList.toggle("show");
   company.classList.remove("show");
});

 document.querySelector(".company button").addEventListener("click", function(){
  company.classList.toggle("show");
  features.classList.remove("show");
});

document.querySelector(".togglebtn").addEventListener("click",function(){

    if( document.querySelector(".menu").getAttribute("src") == "images/icon-menu.svg"){
     document.querySelector(".menu").src = "images/icon-close-menu.svg";
     document.querySelector(".navsection").style.display = "flex";
    document.querySelector(".blur-effect").style.display = "flex";
   }else if( document.querySelector(".menu").getAttribute("src") == "images/icon-close-menu.svg"){
   document.querySelector(".menu").src = "images/icon-menu.svg";
   document.querySelector(".navsection").style.display = "none";
   document.querySelector(".blur-effect").style.display = "none";

   }
});
