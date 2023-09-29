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















})