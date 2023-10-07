// Header-up

$(function () {

    $(".swinger-container").swinger();

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
        bodyClose.style.overflowY = "auto"
    })

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

    //     MODALS

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
        overlay.classList.add("d-none");
        modals.classList.add("d-none")
        bodyClose.style.overflowY = "auto"
    })


    //Cards-bottom

    let cardDetailBtn = document.querySelectorAll(".card-info .card-img a")

let basket = []
// if (localStorage.getItem("basket") != null) {
//   basket = JSON.parse(localStorage.getItem("basket"))
// } else {
//   document.querySelector(".basket-icon .posution").classList.add("d-none")
// }




//Card-detail
  cardDetailBtn.forEach(detailBtn => {
    detailBtn.addEventListener("click", function () {
      let cardName = this.parentNode.parentNode.parentNode.children[4].children[2].innerText
      let cardImg = this.children[0].getAttribute("src")
      // let existProduct = basket.find(m => m.name == cardName);

   
    //   if (existProduct != undefined) {
    //     existProduct.count++;
    //     basket.push({
    //       name:cardName,
    //       image:cardImg,
    //     })
    // } else {

    //   basket.push({
    //     name:cardName,
    //     image:cardImg,
    //     count:1
    //   })
    // }

    
   
    basket.push({
      name:cardName,
      image:cardImg,
      count:1
    })
  
      
      localStorage.setItem("basket", JSON.stringify(basket));
      
    })
  });


    //set details
    let card = document.querySelector(".boxs-detail");
    let details = [];
    // details = JSON.parse(localStorage.getItem("basket"))


    if (localStorage.getItem("basket") != null) {
        details = JSON.parse(localStorage.getItem("basket"))
        for (const detail of details) {
       
        card.children[0].children[0].nextElementSibling.children[0].children[0].innerText = detail.name;
        card.children[0].children[0].children[0].children[0].setAttribute("src", detail.image)
    }
      } else {
        document.querySelector(".basket-icon .posution").classList.add("d-none")
      }



   `` 



// CARD




function basketCount() {
  let basketCount = 0;
  for (const item of details) {
      basketCount += item.count;
  }
  return basketCount;
}

document.querySelector(".basket-icon .posution").innerText=basketCount();


if (details.length == 0) {
  document.querySelector(".basket-icon .posution").classList.add("d-none");
}

let addToCard = document.querySelector(".text-all .add .add-btn a")

addToCard.addEventListener("click",function(e){
  e.preventDefault();
  let name= this.parentNode.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText
for (const item of basket) {
    if(item.name===name){
        console.log("salam");
    }
}
})








});



