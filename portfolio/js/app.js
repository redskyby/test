var square = document.getElementById('square')
        
        window.onscroll = function(){
            var height = window.pageXOffset  || document.documentElement.scrollTop;
            var screenHeight = window.innerHeight;
            if(height < screenHeight){
                square.style.display = "none";
            } else{
                square.style.display = "block";
            };
};

var hambyrger = document.getElementById("hambyrger"); 
 
hambyrger.addEventListener("click", menu, false ) ;

 function menu() {
    var nav = document.getElementById("mobile-nav"); 
    nav.classList.toggle("mobile-menu");
 }