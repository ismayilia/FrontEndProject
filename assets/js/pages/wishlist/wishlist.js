// Header-up

$(function () {


    // Header-up

     let followers = document.querySelector(".header-top .followers")
     let socials = document.querySelector(".header-top .followers .socials")

    followers.addEventListener("click", function(){
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
    let iconsBasket= document.querySelector(".basket-icon")
    let boxBasket= document.querySelector(".basket-icon .basket-box")

    iconsBasket.addEventListener("mouseover", function(){
        boxBasket.classList.remove("d-none")
    })

    iconsBasket.addEventListener("mouseout", function(){
        boxBasket.classList.add("d-none")
    })
    


    //Side-bar


    let sideBar = document.querySelector(".icon-logo .transit")

    let iconBasket = document.querySelector(".icon-logo .fa-bars")
    
    let iconClose = document.querySelector(".side-bar .icon-close")
    
    let overlay = document.querySelector(".icon-logo .overlay")
    
    
    
    iconBasket.addEventListener("click",function(){
        sideBar.classList.remove("transit")
        overlay.classList.remove("d-none")
        
    })
    
    iconClose.addEventListener("click",function(){
        sideBar.classList.add("transit")
        overlay.classList.add("d-none")
    })
    
    overlay.addEventListener("click",function(){
        sideBar.classList.add("transit")
        overlay.classList.add("d-none")
    })

//Search

let iconSearch =document.querySelector(".icons .search-icon .search")
let searchPage = document.querySelector(".search-page")
let iconClosePage = document.querySelector(".icons .search-icon .search-close")
let bodyClose = document.querySelector("body")

iconSearch.addEventListener("click",function(){
    searchPage.classList.remove("d-none")
    iconSearch.classList.add("d-none")
    iconClosePage.classList.remove("d-none")
    bodyClose.style.overflowY = "hidden"
})

iconClosePage.addEventListener("click",function(){
    searchPage.classList.add("d-none")
    iconSearch.classList.remove("d-none")
    iconClosePage.classList.add("d-none")
    bodyClose.style.overflowY = "auto"
})

let contentCloseIcon = document.querySelector(".content i")



contentCloseIcon.addEventListener("click", function(){
    
    searchPage.classList.add("d-none")
    iconClosePage.classList.add("d-none")
    iconSearch.classList.remove("d-none")
    bodyClose.style.overflowY = "auto"
})



// Set product datas to wishlist
let basket = [];

if (localStorage.getItem("addToWishlist") != null) {
  basket = JSON.parse(localStorage.getItem("addToWishlist"));
  document.querySelector("#empty-cart").classList.add("d-none");
} else {
  document
    .querySelector(".heart-icon .posution")
    .classList.add("d-none");
  document.querySelector("#cart .table").classList.add("d-none");
  document.querySelector("#empty-cart").classList.remove("d-none");
}

if (basket.length == 0) {
  document.querySelector("#cart .table").classList.add("d-none");
  document.querySelector("#empty-cart").classList.remove("d-none");
  document
    .querySelector(".heart-icon .posution")
    .classList.add("d-none");
  document.querySelector("main .all-price").classList.add("d-none");
}

function basketCount() {
  let basketCount = 0;
  for (const item of basket) {
    basketCount += item.count;
  }
  return basketCount;
}

document.querySelector(".heart-icon .posution").innerText =
  basketCount();

showBasketDatas(basket);

function showBasketDatas(products) {
  let tableBody = document.querySelector(".table tbody");
  for (const item of products) {
    tableBody.innerHTML += `<tr">
        <td><img src="${item.image}" alt=""></td>
        <td>${item.name}</td>
     <td>
        <i data-id="${item.name}" class="fa-solid fa-minus" ></i>
        <span>${item.count} </span>
        <i data-id="${item.name}" class="fa-solid fa-plus "></i>
     </td>
        <td>${item.price} $</td>
        <td>${Math.round(item.price * item.count)} $</td>
        <td>
            <button data-id="${
              item.name
            }" class="btn btn-danger delete-btn">Delete</button>
        </td>
        </tr>`;
  }
  totalPrice();
}

function totalPrice() {
  let total = 0;

  for (const item of basket) {
    total += Math.round(item.price * item.count);
    document.querySelector("main .total-price").innerHTML = total + " $";
  }
}

deleteBasketItem();

function deleteBasketItem() {
  let deleteBtns = document.querySelectorAll(".table button");
  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      let productName = this.getAttribute("data-id");

      let existProduct = basket.find((m) => m.name == productName);

      basket = basket.filter((m) => m.name != existProduct.name);

      localStorage.setItem("addToWishlist", JSON.stringify(basket));

      document.querySelector(".heart-icon .posution").innerText =
        basketCount();
      this.parentNode.parentNode.remove();

      if (basket.length == 0) {
        document.querySelector("#cart .table").classList.add("d-none");
        document.querySelector("#empty-cart").classList.remove("d-none");
        document
          .querySelector(".heart-icon .posution")
          .classList.add("d-none");
        document.querySelector(".all-price").classList.add("d-none");
        document
          .querySelector(".all-price .total-price")
          .classList.add("d-none");
      }
      totalPrice();
    });
  });
}

let iconMinus = document.querySelectorAll(".fa-minus");

let iconPlus = document.querySelectorAll(".fa-plus");

iconPlus.forEach((plus) => {
  plus.addEventListener("click", function () {
    let productName = this.getAttribute("data-id");

    let existProduct = basket.find((m) => m.name == productName);

    existProduct.count++;

    localStorage.setItem("addToWishlist", JSON.stringify(basket));
    this.previousElementSibling.innerText = existProduct.count;
    document.querySelector(".heart-icon .posution").innerText =
      basketCount();
    this.parentNode.nextElementSibling.nextElementSibling.innerText =
      Math.round(existProduct.price * existProduct.count) + " $";
    totalPrice();
  });
});

iconMinus.forEach((plus) => {
  plus.addEventListener("click", function () {
    let productName = this.getAttribute("data-id");
    let existProduct = basket.find((m) => m.name == productName);
    if (existProduct.count > 1) {
      existProduct.count--;

      localStorage.setItem("addToWishlist", JSON.stringify(basket));
      this.nextElementSibling.innerText = existProduct.count;
      document.querySelector(".heart-icon .posution").innerText =
        basketCount();
      this.parentNode.nextElementSibling.nextElementSibling.innerText =
        Math.round(existProduct.price * existProduct.count) + " $";
      totalPrice();
}
});
});

});



