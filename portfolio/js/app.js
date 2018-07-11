var square = document.getElementById('square')
        
        window.onscroll = function(){
            var height = window.pageXOffset  || document.documentElement.scrollTop;
            var screenHeight = window.innerHeight;
            if(height < screenHeight){
                square.style.display = "none";
            } else{
                square.style.display = "block";
            };
}