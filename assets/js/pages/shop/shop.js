// Header-up

$(function () {


    // Header-up

    let followers = document.querySelector(".header-top .followers")
    let socials = document.querySelector(".header-top .followers .socials")

    followers.addEventListener("click", function () {
        socials.classList.toggle("d-none")
    })



    let openCases = document.querySelectorAll('.open-case')


    for (let elem of openCases) {

        elem.addEventListener("mouseover", function () {
            this.children[1].classList.remove("d-none")

        })

        elem.addEventListener("mouseout", function () {
            this.children[1].classList.add("d-none")

        })

    }

    //Header-down Bsket-Icon
    let iconsBasket = document.querySelector(".basket-icon")
    let boxBasket = document.querySelector(".basket-icon .basket-box")

    iconsBasket.addEventListener("mouseover", function () {
        boxBasket.classList.remove("d-none")
    })

    iconsBasket.addEventListener("mouseout", function () {
        boxBasket.classList.add("d-none")
    })



    //Side-bar


    let sideBar = document.querySelector(".icon-logo .transit")

    let iconBasket = document.querySelector(".icon-logo .fa-bars")

    let iconClose = document.querySelector(".side-bar .icon-close")

    let overlay = document.querySelector(".icon-logo .overlay")



    iconBasket.addEventListener("click", function () {
        sideBar.classList.remove("transit")
        overlay.classList.remove("d-none")

    })

    iconClose.addEventListener("click", function () {
        sideBar.classList.add("transit")
        overlay.classList.add("d-none")
    })

    overlay.addEventListener("click", function () {
        sideBar.classList.add("transit")
        overlay.classList.add("d-none")
    })

    //Search

    let iconSearch = document.querySelector(".icons .search-icon .search")
    let searchPage = document.querySelector(".search-page")
    let iconClosePage = document.querySelector(".icons .search-icon .search-close")
    let bodyClose = document.querySelector("body")

    iconSearch.addEventListener("click", function () {
        searchPage.classList.remove("d-none")
        iconSearch.classList.add("d-none")
        iconClosePage.classList.remove("d-none")
        bodyClose.style.overflowY = "hidden"
    })

    iconClosePage.addEventListener("click", function () {
        searchPage.classList.add("d-none")
        iconSearch.classList.remove("d-none")
        iconClosePage.classList.add("d-none")
        bodyClose.style.overflowY = "auto"
    })

    let contentCloseIcon = document.querySelector(".content i")



    contentCloseIcon.addEventListener("click", function () {

        searchPage.classList.add("d-none")
        iconClosePage.classList.add("d-none")
        iconSearch.classList.remove("d-none")
        bodyClose.style.overflowY = "auto"
    })



    $(".swinger-container").swinger();


    //Wishlist-icon change

    let wishlistIcons = document.querySelectorAll(".card-icon .fa-heart");

    wishlistIcons.forEach(wishlistIcon => {
        wishlistIcon.addEventListener("click", function () {
            this.parentNode.nextElementSibling.style.display = "block";

            this.parentNode.nextElementSibling.addEventListener("click", function () {
                this.style.display = "none"
            })
        })
    });

    //Wishlist-Icon-Mousover

    let cards = document.querySelectorAll(".card-info");

    cards.forEach(card => {
        card.addEventListener("mouseover", function (e) {
            this.children[1].classList.add("transforms");


        })

        card.addEventListener("mouseout", function () {
            this.children[1].classList.remove("transforms");


        })
    });

    // Box Open-Man-Woman
    let boxGender = document.querySelectorAll(".category i");
    boxGender.forEach(gender => {
        gender.addEventListener("click", function () {
            this.parentNode.nextElementSibling.classList.toggle("d-none")
        })
    });




    // $(function() {
    // 	$( "#slider-range" ).slider({
    // 	  range: true,
    // 	  min: 130,
    // 	  max: 500,
    // 	  values: [ 130, 250 ],
    // 	  slide: function( event, ui ) {
    // 		$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    // 	  }
    // 	});
    // 	$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
    // 	  " - $" + $( "#slider-range" ).slider( "values", 1 ) );
    // });
    // function getVals() {
    //     // Get slider values
    //     let parent = this.parentNode;
    //     let slides = parent.getElementsByTagName("input");
    //     let slide1 = parseFloat(slides[0].value);
    //     let slide2 = parseFloat(slides[1].value);
    //     // Neither slider will clip the other, so make sure we determine which is larger
    //     if (slide1 > slide2) { let tmp = slide2; slide2 = slide1; slide1 = tmp; }

    //     let displayElement = parent.getElementsByClassName("rangeValues")[0];
    //     displayElement.innerHTML = "$" + slide1 + " - $" + slide2;
    // }

    
    (function() {

        var parent = document.querySelector(".range-slider");
        if(!parent) return;
      
        var
          rangeS = parent.querySelectorAll("input[type=range]"),
          numberS = parent.querySelectorAll("input[type=number]");
      
        rangeS.forEach(function(el) {
          el.oninput = function() {
            var slide1 = parseFloat(rangeS[0].value),
                  slide2 = parseFloat(rangeS[1].value);
      
            if (slide1 > slide2) {
                      [slide1, slide2] = [slide2, slide1];
              // var tmp = slide2;
              // slide2 = slide1;
              // slide1 = tmp;
            }
      
            numberS[0].value = slide1;
            numberS[1].value = slide2;
          }
        });
      
        numberS.forEach(function(el) {
          el.oninput = function() {
                  var number1 = parseFloat(numberS[0].value),
                          number2 = parseFloat(numberS[1].value);
                  
            if (number1 > number2) {
              var tmp = number1;
              numberS[0].value = number2;
              numberS[1].value = tmp;
            }
      
            rangeS[0].value = number1;
            rangeS[1].value = number2;
      
          }
        });
      
      })();


});