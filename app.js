window.onload=function(){document.querySelector(".loading-screen").style.display="none",document.querySelector(".content").style.display="block"};var URLupdateCooldown=!0,LocationURL="Home",DocumentThemeDark=!0;const menu=document.querySelector("#mobile-menu"),menuLinks=document.querySelector(".navbar__menu");menu.addEventListener("click",function(){toggleMenubar()});var CurrentDocumentLocation=document.getElementById("HomeLink");CurrentDocumentLocation.className="navbar__links__active";var LastDocumentLocation=document.getElementById("HomeLink"),SubCurrentDocumentLocation="nulled",SubLastDocumentLocation=null;function toggleMenubar(){menu.classList.toggle("is-active"),menuLinks.classList.toggle("active"),document.querySelector("#mode-menu").classList.toggle("menu-open")}document.getElementById("website__copyright").innerHTML="Copyright &copy; 2023-"+new Date().getFullYear()+". All rights reserved";const modeMenu=document.getElementById("mode-menu");function UpdateTheme(){DocumentThemeDark?(document.getElementById("mode-menu-tip").innerText="Toggle Light Mode",document.querySelector(":root").style.setProperty("--background","#131313"),document.querySelector(":root").style.setProperty("--background2","#141414"),document.querySelector(":root").style.setProperty("--background3","#262626"),document.querySelector(":root").style.setProperty("--white","white"),document.querySelector(":root").style.setProperty("--gray","#bfbfbf"),document.querySelector(":root").style.setProperty("--gray2","#fafafa"),document.querySelector(":root").style.setProperty("--link","#f77062"),document.querySelector(":root").style.setProperty("--activeLink","#378eff"),document.querySelector(":root").style.setProperty("--rotateDeg","0deg"),document.querySelector(":root").style.setProperty("--rotatePos","0%")):(document.getElementById("mode-menu-tip").innerText="Toggle Dark Mode",document.querySelector(":root").style.setProperty("--background","white"),document.querySelector(":root").style.setProperty("--background2","#fafafa"),document.querySelector(":root").style.setProperty("--background3","#ebebeb"),document.querySelector(":root").style.setProperty("--white","black"),document.querySelector(":root").style.setProperty("--gray","#404040"),document.querySelector(":root").style.setProperty("--gray2","#f2f2f2"),document.querySelector(":root").style.setProperty("--link","#f34c4c"),document.querySelector(":root").style.setProperty("--activeLink","#1f70db"),document.querySelector(":root").style.setProperty("--rotateDeg","180deg"),document.querySelector(":root").style.setProperty("--rotatePos","-100%"))}function elementIsVisibleInViewport(e){var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function UpdateMenuBar(){"navbar__toggle is-active"==menu.classList&&toggleMenubar(),document.querySelector("#navPortfolioMenu").classList.remove("active"),elementIsVisibleInViewport(document.getElementById("Hometag"))?(CurrentDocumentLocation=document.getElementById("HomeLink"),updateURLbarToLocation("Home")):elementIsVisibleInViewport(document.getElementById("About"))?(CurrentDocumentLocation=document.getElementById("AboutLink"),updateURLbarToLocation("About")):elementIsVisibleInViewport(document.getElementById("footer"))?(CurrentDocumentLocation=document.getElementById("NetworkLink"),updateURLbarToLocation("Networks")):elementIsVisibleInViewport(document.getElementById("Contact"))?(CurrentDocumentLocation=document.getElementById("ContactLink"),updateURLbarToLocation("Contact")):elementIsVisibleInViewport(document.getElementById("Portfolio"))?(CurrentDocumentLocation=document.getElementById("PortfolioLink"),updateURLbarToLocation("Portfolio"),SubCurrentDocumentLocation="nulled"):elementIsVisibleInViewport(document.getElementById("Portfolio-ClassyCloset"))?(CurrentDocumentLocation=document.getElementById("PortfolioLink"),SubCurrentDocumentLocation=document.getElementById("CCPortfolioLink"),updateURLbarToLocation("Portfolio-ClassyCloset")):elementIsVisibleInViewport(document.getElementById("about--end"))?(CurrentDocumentLocation=document.getElementById("AboutLink"),updateURLbarToLocation("About")):elementIsVisibleInViewport(document.getElementById("Portfolio-MusicStore"))?(CurrentDocumentLocation=document.getElementById("PortfolioLink"),SubCurrentDocumentLocation=document.getElementById("MusicStorePortfolioLink"),updateURLbarToLocation("Portfolio-MusicStore")):elementIsVisibleInViewport(document.getElementById("Portfolio-WeatherPortal"))?(CurrentDocumentLocation=document.getElementById("PortfolioLink"),SubCurrentDocumentLocation=document.getElementById("WeatherPortalPortfolioLink"),updateURLbarToLocation("Portfolio-WeatherPortal")):elementIsVisibleInViewport(document.getElementById("Portfolio-MAID"))?(CurrentDocumentLocation=document.getElementById("PortfolioLink"),SubCurrentDocumentLocation=document.getElementById("MAIDPortfolioLink"),updateURLbarToLocation("Portfolio-MAID")):elementIsVisibleInViewport(document.getElementById("Portfolio-ERD"))?(CurrentDocumentLocation=document.getElementById("PortfolioLink"),SubCurrentDocumentLocation=document.getElementById("ERDPortfolioLink"),updateURLbarToLocation("Portfolio-ERD")):elementIsVisibleInViewport(document.getElementById("Portfolio-ERD--end"))?(CurrentDocumentLocation=document.getElementById("PortfolioLink"),SubCurrentDocumentLocation=document.getElementById("ERDPortfolioLink"),updateURLbarToLocation("Portfolio-ERD")):elementIsVisibleInViewport(document.getElementById("Portfolio-MAID--end"))?(CurrentDocumentLocation=document.getElementById("PortfolioLink"),SubCurrentDocumentLocation=document.getElementById("MAIDPortfolioLink"),updateURLbarToLocation("Portfolio-MAID")):elementIsVisibleInViewport(document.getElementById("Portfolio-WeatherPortal--end"))?(CurrentDocumentLocation=document.getElementById("PortfolioLink"),SubCurrentDocumentLocation=document.getElementById("WeatherPortalPortfolioLink"),updateURLbarToLocation("Portfolio-WeatherPortal")):elementIsVisibleInViewport(document.getElementById("Portfolio-MusicStore--end"))?(CurrentDocumentLocation=document.getElementById("PortfolioLink"),SubCurrentDocumentLocation=document.getElementById("MusicStorePortfolioLink"),updateURLbarToLocation("Portfolio-MusicStore")):elementIsVisibleInViewport(document.getElementById("Portfolio-ClassyCloset--end"))?(CurrentDocumentLocation=document.getElementById("PortfolioLink"),SubCurrentDocumentLocation=document.getElementById("CCPortfolioLink"),updateURLbarToLocation("Portfolio-ClassyCloset")):elementIsVisibleInViewport(document.getElementById("Networks"))?(CurrentDocumentLocation=document.getElementById("NetworkLink"),updateURLbarToLocation("Networks")):elementIsVisibleInViewport(document.getElementById("portfolio--end"))&&(CurrentDocumentLocation=document.getElementById("PortfolioLink"),updateURLbarToLocation("Portfolio"),SubCurrentDocumentLocation="nulled"),CurrentDocumentLocation!=LastDocumentLocation&&(LastDocumentLocation.className="navbar__links",CurrentDocumentLocation.className="navbar__links__active",LastDocumentLocation=CurrentDocumentLocation,SubCurrentDocumentLocation!=SubLastDocumentLocation&&null!=SubCurrentDocumentLocation&&(null!=SubLastDocumentLocation&&(SubLastDocumentLocation.className="navbar__links"),SubCurrentDocumentLocation.className="navbar__links__active",SubLastDocumentLocation=SubCurrentDocumentLocation),CurrentDocumentLocation==document.getElementById("PortfolioLink")?document.querySelector("#navPortfolioMenu").classList.add("Submenu-active"):null!=SubLastDocumentLocation&&(SubCurrentDocumentLocation.className="navbar__links",document.querySelector("#navPortfolioMenu").classList.remove("Submenu-active"),SubLastDocumentLocation=null)),SubCurrentDocumentLocation!=SubLastDocumentLocation&&null!=SubLastDocumentLocation&&(SubLastDocumentLocation.className="navbar__links",SubCurrentDocumentLocation.className="navbar__links__active",SubLastDocumentLocation=SubCurrentDocumentLocation)}function updateURLbarToLocation(e){URLupdateCooldown?LocationURL=e:(LocationURL=e,URLupdateCooldown=!0,window.history.pushState("","","#"+LocationURL),setTimeout(()=>{window.history.pushState("","","#"+LocationURL),URLupdateCooldown=!1},500))}function playvideo(e){ERDVideoBtn,Changed=e.slice(0,-3)+"Text",document.getElementById(e).disabled=!0,document.getElementById(Changed).innerText="Unavailable",setTimeout(()=>{document.getElementById(e).disabled=!1,document.getElementById(Changed).innerText="Video Demo"},2e3)}modeMenu.addEventListener("click",function(){modeMenu.disabled=!0,DocumentThemeDark=!DocumentThemeDark,UpdateTheme(),setTimeout(()=>{modeMenu.disabled=!1},500)}),window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",e=>{DocumentThemeDark=!e.matches,UpdateTheme()}),window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?(DocumentThemeDark=!1,UpdateTheme()):(DocumentThemeDark=!0,UpdateTheme()),document.addEventListener("scroll",e=>{UpdateMenuBar()}),UpdateMenuBar(),document.getElementById("Portfolio__SubMenu").addEventListener("click",function(){document.querySelector("#navPortfolioMenu").classList.toggle("active")}),URLupdateCooldown=!1;let autoSlideInterval;function initializeSlider(e){let t=document.getElementById(e),o=t.querySelectorAll(".slide"),n=t.querySelector(".dots-container");for(let r=0;r<o.length;r++){let i=document.createElement("div");i.classList.add("dot"),i.setAttribute("data-index",r),i.onclick=function(){showSlide(e,r)},n.appendChild(i)}}function updateDots(e){let t=document.getElementById(e),o=parseInt(t.getAttribute("data-currentIndex"))||0,n=t.querySelectorAll(".dot");n.forEach(e=>{e.classList.remove("active")}),n[o].classList.add("active")}function showSlide(e,t){let o=document.getElementById(e),n=o.querySelectorAll(".slide"),r=n[0].clientWidth;o.querySelector(".slider").style.transform=`translateX(${-t*r}px)`,o.setAttribute("data-currentIndex",t),updateDots(e)}function nextSlide(e){let t=document.getElementById(e),o=t.querySelectorAll(".slide").length,n=parseInt(t.getAttribute("data-currentIndex"))||0;0==(n=(n+1)%o)&&(t.querySelector(".slider").style.transition="none",t.querySelector(".slider").style.transform="translateX(0)",setTimeout(()=>{t.querySelector(".slider").style.transition="transform 0.5s ease-in-out"},0)),t.setAttribute("data-currentIndex",n),showSlide(e,n)}function prevSlide(e){let t=document.getElementById(e),o=t.querySelectorAll(".slide").length,n=parseInt(t.getAttribute("data-currentIndex"))||0;(n=(n-1+o)%o)==o-1&&(t.querySelector(".slider").style.transition="none",t.querySelector(".slider").style.transform=`translateX(${-(100*n)}%)`,setTimeout(()=>{t.querySelector(".slider").style.transition="transform 0.5s ease-in-out"},0)),t.setAttribute("data-currentIndex",n),showSlide(e,n)}document.querySelectorAll(".slider-container").forEach(e=>{initializeSlider(e.id),setInterval(()=>{nextSlide(e.id)},5e3)});