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
    bodyClose.style.overflowY = "auto";
  })



  // Card-sliders

  $('div[data-slick]').slick();

  $(".swinger-container").swinger();

  $('#card-sliders .card-all').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  // Card-sliders-down

  $('#card-sliders-down .card-all').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  //Wishlist-Icon-Change

  let wishlistIcons = document.querySelectorAll(".card-icon .fa-heart");
  
  wishlistIcons.forEach(wishlistIcon => {
    wishlistIcon.addEventListener("click", function(){
      this.parentNode.nextElementSibling.style.display= "block";

      this.parentNode.nextElementSibling.addEventListener("click",function(){
        this.style.display="none"
      })
    })
  });


  
  let cards = document.querySelectorAll(".card-info");
  
  cards.forEach(card => {
    card.addEventListener("mouseover", function(e){
      this.children[1].classList.add("transforms");

      
    })

    card.addEventListener("mouseout", function(){
      this.children[1].classList.remove("transforms");

      
    })
  });    
});



