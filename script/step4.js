const step4 = document.querySelector(".step4")

const confirm1 = step4.querySelector(".confirm1")
const planEl = confirm1.querySelector("p")
const priceEl = confirm1.querySelector(".price")

const confirm2 = step4.querySelector(".confirm2")

const confirm3 = step4.querySelector(".confirm3")
const time = step4.querySelector(".time")
const totalPriceEl = confirm3.querySelector(".price")
    
const changeBtn = step4.querySelector(".changeBtn")

const confirmBtn = step4.querySelector(".confirm")



    document.addEventListener("input",e=>{
        const lastPrice = totalPrice + totalPlanPrice

        if(timeplan === "Monthly") {
            timeplanSc = "mo"
            time.innerHTML = "Total (per month)"

        }
        else {
            timeplanSc = "year"
            time.innerHTML = "Total (per year)"
        }

        planEl.innerText = `${plan} (${timeplan})`
        priceEl.innerText = `$${totalPlanPrice}/${timeplanSc}`

        

        totalPriceEl.innerHTML = `+$${lastPrice}/${timeplanSc}`

        
        confirm2.innerHTML = services.map(item=> {
            return `
                <div class="wrap">
                    <div class="title">
                    <p>${item.service}</p>
                    </div>
                    <div class="price">+$${item.itemPrice}/${timeplanSc}</div>
                </div>
            `
        }).join("")


        //todo:     ŞU KODLARA GÜZEL Bİ YER BUL
        // message = `Total amount is $${lastPrice}`
        // notificationEl = message
    })

    changeBtn.addEventListener("click", e=> {

        e.preventDefault()

        steps[3].classList.add("hidden")
        steps[1].classList.remove("hidden")

        indicators[3].classList.remove("active")
        indicators[1].classList.add("active")
    })

    confirmBtn.addEventListener("click", e=> {

        e.preventDefault()

        step4.classList.add("hidden")
        step5.classList.remove("hidden")

        // indicators[2].classList.remove("active")
        // indicators[3].classList.add("active")
    })


    
