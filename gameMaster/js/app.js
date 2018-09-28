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

