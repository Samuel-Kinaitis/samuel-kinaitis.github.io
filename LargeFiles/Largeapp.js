// Loading Screen Logic
window.onload = function () {
  // Hide the loading screen
  document.querySelector('.loading-screen').style.display = 'none';

  // Show the content
  document.querySelector('.content').style.display = 'block';
};



//URL tracking
var URLupdateCooldown = true;
var LocationURL = "Home";
//Theme
var DocumentThemeDark = true;
//Animation mobile menu
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
menu.addEventListener('click', function() {
  toggleMenubar();
});

//Doucment locations -- Default Home
var CurrentDocumentLocation = document.getElementById("HomeLink");
CurrentDocumentLocation.className = "navbar__links__active"
var LastDocumentLocation = document.getElementById("HomeLink");

  //Sub Document locations for sub menus -- Defualt Null (Can't have a sub location if no sub location to be had?)
  var SubCurrentDocumentLocation = "nulled"; //Kind of silly but fixes the state of location being nothing
  var SubLastDocumentLocation = null;
//

function toggleMenubar(){
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
  document.querySelector('#mode-menu').classList.toggle('menu-open');
}
//Update Copy right to current year.
document.getElementById("website__copyright").innerHTML = "Copyright &copy; 2023-" + new Date().getFullYear() +". All rights reserved";
//Theme mode
//Theme icon mode clicked
const modeMenu = document.getElementById("mode-menu");
modeMenu.addEventListener('click', function(){
  modeMenu.disabled = true;
  //Updates Theme to Other Theme
  DocumentThemeDark = !DocumentThemeDark;
  UpdateTheme();

  setTimeout(() => {
    modeMenu.disabled = false;
  }, 500);
});
//Test to update theme when user change
window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', event => {
   if (event.matches){
    DocumentThemeDark = false;
   } else{
    DocumentThemeDark = true;
   }
  UpdateTheme();
});
//Adds users theme
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches){
  DocumentThemeDark = false;
  UpdateTheme();
} else{
  DocumentThemeDark = true;
  UpdateTheme();
}
//Update theme to current user theme
function UpdateTheme(){
  //document.querySelector(':root').style.setProperty('root object', 'color object');

  if(DocumentThemeDark){//This is Dark Mode -- default
    document.getElementById("mode-menu-tip").innerText = "Toggle Light Mode"
    document.querySelector(':root').style.setProperty('--background', '#131313');
    document.querySelector(':root').style.setProperty('--background2', '#141414');
    document.querySelector(':root').style.setProperty('--background3', '#262626');
    document.querySelector(':root').style.setProperty('--white', 'white');
    document.querySelector(':root').style.setProperty('--gray', '#bfbfbf');
    document.querySelector(':root').style.setProperty('--gray2', '#fafafa');
    document.querySelector(':root').style.setProperty('--link', '#f77062');
    document.querySelector(':root').style.setProperty('--activeLink', '#378eff');
    document.querySelector(':root').style.setProperty('--rotateDeg', '0deg');
    document.querySelector(':root').style.setProperty('--rotatePos', '0%');
  } else{//This is Light Mode
    document.getElementById("mode-menu-tip").innerText = "Toggle Dark Mode"
    document.querySelector(':root').style.setProperty('--background', 'white');
    document.querySelector(':root').style.setProperty('--background2', '#fafafa');
    document.querySelector(':root').style.setProperty('--background3', '#ebebeb');
    document.querySelector(':root').style.setProperty('--white', 'black');
    document.querySelector(':root').style.setProperty('--gray', '#404040');
    document.querySelector(':root').style.setProperty('--gray2', '#f2f2f2');
    document.querySelector(':root').style.setProperty('--link', '#f34c4c');
    document.querySelector(':root').style.setProperty('--activeLink', '#1f70db');
    document.querySelector(':root').style.setProperty('--rotateDeg', '180deg');
    document.querySelector(':root').style.setProperty('--rotatePos', '-100%');
  }
}

//funky bounding box logic of elements and locations relative to the screen (All locations must be true)
function elementIsVisibleInViewport (el) {
  var rect = el.getBoundingClientRect();

  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
  );
}



document.addEventListener("scroll", (event) => {

  UpdateMenuBar();
  

});

UpdateMenuBar();

document.getElementById("Portfolio__SubMenu").addEventListener('click', function(){
  document.querySelector('#navPortfolioMenu').classList.toggle('active');
});

function UpdateMenuBar(){
  //Close menu if opened while scrolling
  if(menu.classList == ("navbar__toggle is-active")){
    toggleMenubar();
  }
  document.querySelector('#navPortfolioMenu').classList.remove('active');

  //highlight current area in nav menu
  if(elementIsVisibleInViewport(document.getElementById("Hometag"))){//Home
    CurrentDocumentLocation = document.getElementById("HomeLink");
    updateURLbarToLocation("Home");
  } else if(elementIsVisibleInViewport(document.getElementById("About"))){//About
    CurrentDocumentLocation = document.getElementById("AboutLink");
    updateURLbarToLocation("About");
  } else if(elementIsVisibleInViewport(document.getElementById("footer"))){//Networks
    CurrentDocumentLocation = document.getElementById("NetworkLink");
    updateURLbarToLocation("Networks");
  } else if(elementIsVisibleInViewport(document.getElementById("Contact"))){//Contact
    CurrentDocumentLocation = document.getElementById("ContactLink");
    updateURLbarToLocation("Contact");
  } else if(elementIsVisibleInViewport(document.getElementById("Portfolio"))){//Portoflio
    CurrentDocumentLocation = document.getElementById("PortfolioLink");
    updateURLbarToLocation("Portfolio");
    SubCurrentDocumentLocation = "nulled";
  } else if(elementIsVisibleInViewport(document.getElementById("Portfolio-ClassyCloset"))){//Portoflio CC
    CurrentDocumentLocation = document.getElementById("PortfolioLink");
    SubCurrentDocumentLocation = document.getElementById("CCPortfolioLink");
    updateURLbarToLocation("Portfolio-ClassyCloset");
  } else if(elementIsVisibleInViewport(document.getElementById("about--end"))){//About
    CurrentDocumentLocation = document.getElementById("AboutLink");
    updateURLbarToLocation("About");
  } else if(elementIsVisibleInViewport(document.getElementById("Portfolio-MusicStore"))){//Portoflio Music Store
    CurrentDocumentLocation = document.getElementById("PortfolioLink");
    SubCurrentDocumentLocation = document.getElementById("MusicStorePortfolioLink");
    updateURLbarToLocation("Portfolio-MusicStore");
  } else if(elementIsVisibleInViewport(document.getElementById("Portfolio-WeatherPortal"))){//Portoflio Weather Portal
    CurrentDocumentLocation = document.getElementById("PortfolioLink");
    SubCurrentDocumentLocation = document.getElementById("WeatherPortalPortfolioLink");
    updateURLbarToLocation("Portfolio-WeatherPortal");
  } else if(elementIsVisibleInViewport(document.getElementById("Portfolio-MAID"))){//Portoflio MAID
    CurrentDocumentLocation = document.getElementById("PortfolioLink");
    SubCurrentDocumentLocation = document.getElementById("MAIDPortfolioLink");
    updateURLbarToLocation("Portfolio-MAID");
  } else if(elementIsVisibleInViewport(document.getElementById("Portfolio-ERD"))){//Portoflio ERD
    CurrentDocumentLocation = document.getElementById("PortfolioLink");
    SubCurrentDocumentLocation = document.getElementById("ERDPortfolioLink");
    updateURLbarToLocation("Portfolio-ERD");
  } else if(elementIsVisibleInViewport(document.getElementById("Portfolio-ERD--end"))){//Portoflio ERD end
    CurrentDocumentLocation = document.getElementById("PortfolioLink");
    SubCurrentDocumentLocation = document.getElementById("ERDPortfolioLink");
    updateURLbarToLocation("Portfolio-ERD");
  } else if(elementIsVisibleInViewport(document.getElementById("Portfolio-MAID--end"))){//Portoflio MAID end
    CurrentDocumentLocation = document.getElementById("PortfolioLink");
    SubCurrentDocumentLocation = document.getElementById("MAIDPortfolioLink");
    updateURLbarToLocation("Portfolio-MAID");
  } else if(elementIsVisibleInViewport(document.getElementById("Portfolio-WeatherPortal--end"))){//Portoflio Weather Portal end
    CurrentDocumentLocation = document.getElementById("PortfolioLink");
    SubCurrentDocumentLocation = document.getElementById("WeatherPortalPortfolioLink");
    updateURLbarToLocation("Portfolio-WeatherPortal");
  } else if(elementIsVisibleInViewport(document.getElementById("Portfolio-MusicStore--end"))){//Portoflio Music Store end
    CurrentDocumentLocation = document.getElementById("PortfolioLink");
    SubCurrentDocumentLocation = document.getElementById("MusicStorePortfolioLink");
    updateURLbarToLocation("Portfolio-MusicStore");
  } else if(elementIsVisibleInViewport(document.getElementById("Portfolio-ClassyCloset--end"))){//Portoflio CC end
    CurrentDocumentLocation = document.getElementById("PortfolioLink");
    SubCurrentDocumentLocation = document.getElementById("CCPortfolioLink");
    updateURLbarToLocation("Portfolio-ClassyCloset");
  } else if(elementIsVisibleInViewport(document.getElementById("Networks"))){//Networks
    CurrentDocumentLocation = document.getElementById("NetworkLink");
    updateURLbarToLocation("Networks");
  } else if(elementIsVisibleInViewport(document.getElementById("portfolio--end"))){//Portoflio
    CurrentDocumentLocation = document.getElementById("PortfolioLink");
    updateURLbarToLocation("Portfolio");
    SubCurrentDocumentLocation = "nulled";
  }

  //Change highlighted area if different area
  if (CurrentDocumentLocation != LastDocumentLocation){
    LastDocumentLocation.className = "navbar__links"
    CurrentDocumentLocation.className = "navbar__links__active"
    LastDocumentLocation = CurrentDocumentLocation;

    

    if(SubCurrentDocumentLocation != SubLastDocumentLocation && SubCurrentDocumentLocation != null){
      if(SubLastDocumentLocation != null){
        SubLastDocumentLocation.className = "navbar__links"
      }
      SubCurrentDocumentLocation.className = "navbar__links__active"
      SubLastDocumentLocation = SubCurrentDocumentLocation;
    }
    if(CurrentDocumentLocation == document.getElementById("PortfolioLink")){
      document.querySelector('#navPortfolioMenu').classList.add('Submenu-active');
    } else if(SubLastDocumentLocation != null){
      SubCurrentDocumentLocation.className = "navbar__links"
      document.querySelector('#navPortfolioMenu').classList.remove('Submenu-active');
      SubLastDocumentLocation = null;
    }
  }
  if(SubCurrentDocumentLocation != SubLastDocumentLocation && SubLastDocumentLocation != null){
    SubLastDocumentLocation.className = "navbar__links"
    SubCurrentDocumentLocation.className = "navbar__links__active"
    SubLastDocumentLocation = SubCurrentDocumentLocation;
  }
}

//Update ands Save the URL when scrolling - Prevents (Issue 1038223: history.pushState abuse hangs Chrome)
function updateURLbarToLocation(Location){
  if(!URLupdateCooldown){
    LocationURL = Location
    URLupdateCooldown = true;
    window.history.pushState("", "", "#"+LocationURL);
    setTimeout(() => {
      window.history.pushState("", "", "#"+LocationURL);
      URLupdateCooldown = false;
    }, 500);
  } else{
    LocationURL = Location
  }
}


function playvideo(trigger){
  ERDVideoBtn
  Changed = (trigger.slice(0,-3)) + ("Text");

  
  document.getElementById(trigger).disabled = true;
  
  //Dealing with youtube blocking my uploads for copyright, current fix for no videos
  document.getElementById(Changed).innerText = "Unavailable";


  setTimeout(() => {
    document.getElementById(trigger).disabled = false;
    document.getElementById(Changed).innerText = "Video Demo";
  }, 2000);
}



URLupdateCooldown = false;


//SlideShow Stuff
let autoSlideInterval;

function initializeSlider(sliderId) {
    const slider = document.getElementById(sliderId);
    const slides = slider.querySelectorAll('.slide');
    const dotsContainer = slider.querySelector('.dots-container');
    
    // Create a dot for each slide
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.setAttribute('data-index', i);
        dot.onclick = function () {
            showSlide(sliderId, i);
        };
        dotsContainer.appendChild(dot);
    }

    // Clone the first slide and append it to the end for seamless loop
    // const cloneFirstSlide = slides[0].cloneNode(true);
    // slider.querySelector('.slider').appendChild(cloneFirstSlide);
}

function updateDots(sliderId) {
    const slider = document.getElementById(sliderId);
    const currentIndex = parseInt(slider.getAttribute('data-currentIndex')) || 0;
    const dots = slider.querySelectorAll('.dot');

    // Remove the 'active' class from all dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });

    // Add the 'active' class to the current dot
    dots[currentIndex].classList.add('active');
}

function showSlide(sliderId, index) {
    const slider = document.getElementById(sliderId);
    const slides = slider.querySelectorAll('.slide');
    const slideWidth = slides[0].clientWidth;
    const newPosition = -index * slideWidth;
    slider.querySelector('.slider').style.transform = `translateX(${newPosition}px)`;
    slider.setAttribute('data-currentIndex', index);
    updateDots(sliderId);
}

function nextSlide(sliderId) {
    const slider = document.getElementById(sliderId);
    const totalSlides = slider.querySelectorAll('.slide').length;
    let currentIndex = parseInt(slider.getAttribute('data-currentIndex')) || 0;
    
    currentIndex = (currentIndex + 1) % totalSlides;

    if (currentIndex === 0) {
        slider.querySelector('.slider').style.transition = 'none';
        slider.querySelector('.slider').style.transform = 'translateX(0)';
        setTimeout(() => {
            slider.querySelector('.slider').style.transition = 'transform 0.5s ease-in-out';
        }, 0);
    }

    slider.setAttribute('data-currentIndex', currentIndex);
    showSlide(sliderId, currentIndex);
}

function prevSlide(sliderId) {
    const slider = document.getElementById(sliderId);
    const totalSlides = slider.querySelectorAll('.slide').length;
    let currentIndex = parseInt(slider.getAttribute('data-currentIndex')) || 0;
    
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;

    if (currentIndex === totalSlides - 1) {
        slider.querySelector('.slider').style.transition = 'none';
        slider.querySelector('.slider').style.transform = `translateX(${-currentIndex * 100}%)`;
        setTimeout(() => {
            slider.querySelector('.slider').style.transition = 'transform 0.5s ease-in-out';
        }, 0);
    }

    slider.setAttribute('data-currentIndex', currentIndex);
    showSlide(sliderId, currentIndex);
}

document.querySelectorAll('.slider-container').forEach((slider) => {
    initializeSlider(slider.id);
      setInterval(() => {
        nextSlide(slider.id);
    }, 5000);
});


//Form Logic
var formButton = document.getElementById("formSubmitButton")
// Intercept form submission
document.getElementById("myForm").addEventListener("submit", function(event) {
  //LockForm button
  formButton.disabled = true;
  // Prevent the default form submission
  event.preventDefault();
  
  // Submit the form data asynchronously
  var formData = new FormData(this);
  var xhr = new XMLHttpRequest();
  xhr.open("POST", this.action);
  xhr.send(formData);
  
  // Reset the form fields
  var form = document.getElementById("myForm");
  form.reset();

  //Show Submit messsage
  document.getElementById("FormSumbitMessage").style.display = 'block';

  //Remove message and enable button
  setTimeout(function() {
    document.getElementById("FormSumbitMessage").style.display = 'none';
    button.disabled = false;
  }, 12000);
      });