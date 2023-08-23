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


function elementIsVisibleInViewport (el) {
  var rect = el.getBoundingClientRect();

  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
  );
}

var CurrentDocumentLocation = document.getElementById("HomeLink");
CurrentDocumentLocation.className = "navbar__links__active"
var LastDocumentLocation = document.getElementById("HomeLink");

var SubCurrentDocumentLocation = document.getElementById("HomeLink");

var SubLastDocumentLocation = document.getElementById("HomeLink");

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
  } else if(elementIsVisibleInViewport(document.getElementById("Portfolio-ClassyCloset"))){//Portoflio CC
    CurrentDocumentLocation = document.getElementById("PortfolioLink");
    SubCurrentDocumentLocation = document.getElementById("CCPortfolioLink");
    updateURLbarToLocation("Portfolio-ClassyCloset");
  } else if(elementIsVisibleInViewport(document.getElementById("Portfolio"))){//Portoflio
    CurrentDocumentLocation = document.getElementById("PortfolioLink");
    updateURLbarToLocation("Portfolio");
  } else if(elementIsVisibleInViewport(document.getElementById("about--end"))){//About
    CurrentDocumentLocation = document.getElementById("AboutLink");
    updateURLbarToLocation("About");
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