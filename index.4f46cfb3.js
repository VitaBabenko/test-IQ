var openBtnMenu=document.querySelector(".nav__menu_btn"),closeBtnMenu=document.querySelector(".mob__menu_close-btn"),menu=document.querySelector(".mob__menu"),itemHome=document.querySelector(".home"),itemAbout=document.querySelector(".about"),heroSection=document.querySelector(".section__hero"),wrapOverlay=document.querySelector(".overlay__wrap"),toggleMenu=function(){menu.classList.toggle("mob__menu_is-hidden")},onItemHome=function(){menu.classList.add("mob__menu_is-hidden"),wrapOverlay.classList.add("visually-hidden"),heroSection.classList.remove("visually-hidden")},onItemAbout=function(){menu.classList.add("mob__menu_is-hidden"),wrapOverlay.classList.remove("visually-hidden"),heroSection.classList.add("visually-hidden")};openBtnMenu.addEventListener("click",toggleMenu),closeBtnMenu.addEventListener("click",toggleMenu),itemHome.addEventListener("click",onItemHome),itemAbout.addEventListener("click",onItemAbout);
//# sourceMappingURL=index.4f46cfb3.js.map