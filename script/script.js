
const indicators = document.querySelectorAll(".indicator .wrapper .no")


const step3 = document.querySelector(".step3")
const pickCheck = step3.querySelectorAll("input[name='pickCheck']")

let service;
let totalPickPrice = 0
let arr = [], newArr =[];
const pass3Btn = document.querySelector(".pass3")

const step4 = document.querySelector(".step4")






    //todo:     STEP2 STARTS HERE ////////////////
    
    //todo:     STEP2 ENDS HERE ///////////////////




    pickCheck.forEach(btn=> btn.addEventListener("click",e=>{
        const checkBtn = e.target
        const isChecked = checkBtn.checked
        pickPrice = Number(checkBtn.parentElement.querySelector(".price").textContent.slice(2,3).split("/")[0])
        service = checkBtn.parentElement.querySelector("h3").innerText

            if(isChecked) {
                e.target.parentElement.classList.add("checked")
                totalPickPrice += pickPrice
                if(!arr.includes(service)) {
                    arr.push(service)
                }
            } else {
                e.target.parentElement.classList.remove("checked")
                totalPickPrice -= pickPrice
                arr.filter(item=> {
                    if(item != service && !newArr.includes(item)) {
                        newArr.push(item)
                    }
                })
            }

        
    }))

    pass3Btn.addEventListener("click",e=> {
        e.preventDefault()
        
        if(totalPickPrice>0) {
            step3.classList.add("hidden")
            step4.classList.remove("hidden")

            indicators[2].classList.remove("active")
            indicators[3].classList.add("active")
        }
    })

const confirm1 = step4.querySelector(".confirm1")
const planEl = confirm1.querySelector("p")
    // planEl.innerText = `Arcade (${plan})`
const priceEl = confirm1.querySelector(".price")
    // priceEl.innerText = `$${price}/mo`


