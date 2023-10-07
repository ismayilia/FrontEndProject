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
    modals.classList.add("d-none")
    bodyClose.style.overflowY = "auto"
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
    wishlistIcon.addEventListener("click", function () {
      this.parentNode.nextElementSibling.style.display = "none";

    })
  });



  let cards = document.querySelectorAll(".card-info");

  cards.forEach(card => {
    card.addEventListener("mouseover", function (e) {
      this.children[1].classList.add("transforms");


    })

    card.addEventListener("mouseout", function () {
      this.children[1].classList.remove("transforms");


    })
  });

  //MODALS

  let modals = document.querySelector(".boxs")
  let openModalsIcon = document.querySelectorAll(".card-info .card-icon i:nth-child(2)")
  let iconCloseModal = document.querySelector(".boxs .close")

  openModalsIcon.forEach(modalsIcon => {
    modalsIcon.addEventListener("click", function () {
      modals.classList.remove("d-none");
      overlay.classList.remove("d-none")
      let cardImage = this.parentNode.previousElementSibling.children[0].children[0].children[0].getAttribute("src")
      modals.children[0].children[0].children[0].children[0].setAttribute("src", cardImage)
      let cardName = this.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.children[2].innerText
      modals.children[0].children[0].nextElementSibling.children[0].children[0].innerText = cardName
      bodyClose.style.overflowY = "hidden"
    })


  });

  iconCloseModal.addEventListener("click", function () {
    bodyClose.style.overflowY = "auto"
    overlay.classList.add("d-none");
    modals.classList.add("d-none")
  })



  $('#topbtn').click(function () {
    $('html').animate({
      scrollTop: 0
    }, 100)

  })



  //Card-detail

  let basket = []
  let cardDetailBtn = document.querySelectorAll(".card-all .card-info .card-img a")
  cardDetailBtn.forEach(detailBtn => {
    detailBtn.addEventListener("click", function () {
      let cardName = this.parentNode.parentNode.parentNode.children[4].children[2].innerText
      let cardImg = this.children[0].getAttribute("src")



      basket.push({
        name: cardName,
        image: cardImg,
        count: 1
      })


      localStorage.setItem("basket", JSON.stringify(basket));

    })
  });




  // Add to Basket



  let addToBasket = []

  let cardDetailIcons = document.querySelectorAll(".card-info .card-icon .fa-bag-shopping")
  

  if (localStorage.getItem("addToBasket") != null) {
    addToBasket = JSON.parse(localStorage.getItem("addToBasket"))
  } else {
    document.querySelector(".basket-icon .posution").classList.add("d-none")
  }

  if (addToBasket.length == 0) {
    document.querySelector(".basket-icon .posution").classList.add("d-none");
  }


  function basketCount() {
    let basketCount = 0;
    for (const item of addToBasket) {
        basketCount += item.count;
    }
    return basketCount;
}


document.querySelector(".basket-icon .posution").innerText = basketCount();

  cardDetailIcons.forEach(detailIcon => {
    detailIcon.addEventListener("click", function (e) {
      e.preventDefault();
      let productName = this.parentNode.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.children[2].innerText
      let productPrice = parseFloat(this.parentNode.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.children[3].innerText.substring(1)) 
      let productImg = this.parentNode.parentNode.previousElementSibling.children[0].children[0].children[0].getAttribute("src")
      

      let existProduct = addToBasket.find(m => m.name == productName);

        if (existProduct != undefined) {
            existProduct.count++;
        } else {

          addToBasket.push({
            image: productImg,
            name: productName,
            price: productPrice,
            count:1
    
          })
        }
      
      

        localStorage.setItem("addToBasket", JSON.stringify(addToBasket));
    
        document.querySelector(".basket-icon .posution").innerText = basketCount();
        document.querySelector(".basket-icon .posution").classList.remove("d-none");
    })
  });




  // Add to Wishlist



  let addToWishlist = []

  let wishlistDetailIcons = document.querySelectorAll(".card-info .card-icon .fa-heart")
  

  if (localStorage.getItem("addToWishlist") != null) {
    addToWishlist = JSON.parse(localStorage.getItem("addToWishlist"))
  } 
  else {
    document.querySelector(".heart-icon .posution").classList.add("d-none")
  }

  if (addToWishlist.length == 0) {
    document.querySelector(".heart-icon .posution").classList.add("d-none");
  }


  function wishlistCount() {
    let wishlistCount = 0;
    for (const item of addToWishlist) {
      wishlistCount += item.count;
    }
    return wishlistCount;
}


document.querySelector(".heart-icon .posution").innerText = wishlistCount();

wishlistDetailIcons.forEach(detailIcon => {
    detailIcon.addEventListener("click", function () {
      let productName = this.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.children[2].innerText
      let productPrice = parseFloat(this.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.children[3].innerText.substring(1)) 
      let productImg = this.parentNode.previousElementSibling.children[0].children[0].children[0].getAttribute("src")
      

      let existProduct = addToWishlist.find(m => m.name == productName);

        if (existProduct != undefined) {
            existProduct.count++;
        } else {

          addToWishlist.push({
            image: productImg,
            name: productName,
            price: productPrice,
            count:1
    
          })
        }
      
      

        localStorage.setItem("addToWishlist", JSON.stringify(addToWishlist));
    
        document.querySelector(".heart-icon .posution").innerText = wishlistCount();
        document.querySelector(".heart-icon .posution").classList.remove("d-none");
    })
  });

});



