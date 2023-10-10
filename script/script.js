


let service
let itemPrice = 0
let totalPrice = 0
let services = [];
let newArr


const indicators = document.querySelectorAll(".indicator .wrapper .no")
const steps = document.querySelectorAll("div.step")
const goBackBtns = document.querySelectorAll(".back")

const notificationEl = document.querySelector(".notification")
let message
//todo:     GO BACK BUTTONS ////////////////

    goBackBtns.forEach(btn => btn.addEventListener("click",e=>{
        e.preventDefault()

        indicators.forEach((indicator,index)=>{
            
            if(indicator.classList.contains("active")) {
                steps[index].classList.add("hidden")
                steps[index - 1].classList.remove("hidden")

                indicator.classList.remove("active")
                indicators[index-1].classList.add("active")

            }
        })
    }))

//todo:     ///////////////////

