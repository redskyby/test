var controls = document.querySelectorAll('.controls');
for(var i=0; i<controls.length; i++){
    controls[i].style.display = 'inline-block';
}

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
    goToSlide(currentSlide+1);
}

function previousSlide(){
    goToSlide(currentSlide-1);
}

function goToSlide(n){
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
}


var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideshow(){
    pauseButton.innerHTML = '&#9658;'; // play character
    playing = false;
    clearInterval(slideInterval);
}

function playSlideshow(){
    pauseButton.innerHTML = '&#10074;&#10074;'; // pause character
    playing = true;
    slideInterval = setInterval(nextSlide,2000);
}

pauseButton.onclick = function(){
    if(playing){ pauseSlideshow(); }
    else{ playSlideshow(); }
};

var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function(){
    pauseSlideshow();
    nextSlide();
};
previous.onclick = function(){
    pauseSlideshow();
    previousSlide();
};



//Google map
    function initMap()  {
            var element = document.getElementById('map');
            var options={
                zoom: 5,
                center:{lat:53.90, lng :27.56}
            };
            
            var myMap = new google.maps.Map(element,options)
            
            var marker = new google.maps.Marker({
                position:{lat:53.83644331, lng :27.57820829},
                map : myMap
            });
            
//            var InfoWindow = new google.maps.InfoWindow({
//                content: '<h1>Hey there!</h1>'
//            });
//            
//            InfoWindow.open(myMap, marker);
//            
//            marker.addListener('click', function(){
//                InfoWindow.open(myMap, marker);
//            });
            
            addMarker({lat:53.83644331, lng :27.57820829});
            addMarker({lat:59.9343 , lng :30.3351})
            
            function addMarker(coordinates){
                var marker = new google.maps.Marker({
                position:coordinates,
                map : myMap
            });
                
            }
        
            
            
            
            
            
        };