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

iconSearch.addEventListener("click",function(){
    searchPage.classList.remove("d-none")
    iconSearch.classList.add("d-none")
    iconClosePage.classList.remove("d-none")
})

iconClosePage.addEventListener("click",function(){
    searchPage.classList.add("d-none")
    iconSearch.classList.remove("d-none")
    iconClosePage.classList.add("d-none")
})

let contentCloseIcon = document.querySelector(".content i")

contentCloseIcon.addEventListener("click", function(){
    searchPage.classList.add("d-none")
    iconClosePage.classList.add("d-none")
    iconSearch.classList.remove("d-none")
})



});



