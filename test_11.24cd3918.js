var listStar=document.querySelector(".list__wrap_star"),link=document.querySelector(".form__link_geometry"),wrapTest=document.querySelector(".wrapper__test"),wrapResult=document.querySelector(".wrapper__result_test"),onStarClick=function(e){var t=e.target;if(t.classList.contains("item_figurine")){var i=document.querySelector(".is-active");i&&i.classList.remove("is-active"),t.classList.add("is-active")}},onClickLink=function(){wrapTest.classList.add("visually-hidden"),wrapResult.classList.remove("visually-hidden"),setTimeout((function(){document.querySelector(".wrapper__result").classList.remove("visually-hidden"),wrapResult.classList.add("visually-hidden")}),5e3)};listStar.addEventListener("click",onStarClick),link.addEventListener("click",onClickLink);
//# sourceMappingURL=test_11.24cd3918.js.map