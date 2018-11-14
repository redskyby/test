var closedBaner = document.getElementById('closeBaner');

closedBaner.addEventListener("click" , function(){
     var topBanner = document.getElementById('topBanner');
    topBanner.classList.add("closed")
}, false);

//form event
var input = document.getElementById('input');

input.addEventListener("focus",formINfocus );
input.addEventListener("blur", formNOTfocus);

function formINfocus(){
  document.getElementById('header_button').classList.add('animation_button');
};


function formNOTfocus(){
   document.getElementById('header_button').classList.remove('animation_button');
};

//search RegExp
var input = document.getElementById('input');
var bab_number = document.querySelector(".header_form_search_error");
var pattern =  /^[a-z0-9-А-Яа-я]+$/i;
var value;

input.addEventListener("input", search_error );

function search_error(value) {
   var  newValye = this.value;
  if(pattern.test(newValye)){
        bab_number.style.display= "none"
  }else{
    bab_number.style.display= "block"
  }
};



//TABS/
var tabsLink = document.querySelectorAll('.tab');

var tabLI = document.querySelectorAll('.nav-tabs li');
var tabsElement = document.querySelectorAll('.tab-pane');
var i;

tabsElement[0].classList.add('tab-open');

var showTabs = function(e) {
  e.preventDefault();
  var targetElement = document.querySelectorAll(this.getAttribute('href'));
  for (i = 0; i < targetElement.length; i++) {
    if (targetElement[i].classList.contains('tab-open')) {
      return false;
    } else {targetElement[i].classList.add('tab-open');
           }
  }
   


  targetElement = document.querySelectorAll(".tab-pane.tab-open:not("+ this.getAttribute('href')+")");
  for (i = 0; i < targetElement.length; i++) {
      targetElement[i].classList.remove('tab-open');
  }

};

for (i = 0; i < tabsLink.length; i++) {
  tabsLink[i].addEventListener('click', showTabs);
}
 function oil(e){
    console.log('1')
}
for (i = 0; i < tabsLink.length; i++) {
  tabLI[i].addEventListener('click' , oil);
}


//Slider  
var slides = document.querySelectorAll('.sliderFabe');

var currentSlide = 0;
var slideInterval = setInterval(nextSlide,3000);

document.getElementById('prew').addEventListener('click',previousSlide, false );
document.getElementById('next').addEventListener('click',nextSlide,false);
    
function nextSlide(){
	goToSlide(currentSlide+1);
}

function previousSlide(){
	goToSlide(currentSlide-1);
}

function goToSlide(n){
	slides[currentSlide].className = 'sliderFabe';
	currentSlide = (slides.length+n)%slides.length;
	slides[currentSlide].className = 'sliderFabe Showing';
}