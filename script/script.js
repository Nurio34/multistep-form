
const indicators = document.querySelectorAll(".indicator .wrapper .no")
const steps = document.querySelectorAll("div.step")



const step4 = document.querySelector(".step4")

const goBackBtns = document.querySelectorAll(".back")





//todo:     GO BACK BUTTONS ////////////////

    goBackBtns.forEach(btn => btn.addEventListener("click",e=>{
        e.preventDefault()
        console.log(btn);

        indicators.forEach((indicator,index)=>{
            console.log(indicator);
            if(indicator.classList.contains("active")) {
                steps[index].classList.add("hidden")
                steps[index - 1].classList.remove("hidden")

                indicator.classList.remove("active")
                indicators[index-1].classList.add("active")

            }
        })
    }))
    // step2.classList.add("hidden")
    // step3.classList.remove("hidden")

    // indicators[1].classList.remove("active")
    // indicators[2].classList.add("active")

//todo:     ///////////////////






const confirm1 = step4.querySelector(".confirm1")
const planEl = confirm1.querySelector("p")
    // planEl.innerText = `Arcade (${plan})`
const priceEl = confirm1.querySelector(".price")
    // priceEl.innerText = `$${price}/mo`


