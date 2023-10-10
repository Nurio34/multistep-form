const step4 = document.querySelector(".step4")

const confirm1 = step4.querySelector(".confirm1")
const planEl = confirm1.querySelector("p")
const priceEl = confirm1.querySelector(".price")

const confirm2 = step4.querySelector(".confirm2")

const confirm3 = step4.querySelector(".confirm3")
const time = step4.querySelector(".time")
const totalPriceEl = confirm3.querySelector(".price")
    





document.addEventListener("input",e=>{
    const lastPrice = totalPrice + price

    if(timeplan === "Monthly") {
        timeplanSc = "mo"
        time.innerHTML = "Total (per month)"

    }
    else {
        timeplanSc = "year"
        time.innerHTML = "Total (per year)"
    }

    planEl.innerText = `${plan} (${timeplan})`
    priceEl.innerText = `$${price}/${timeplanSc}`

    

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

    console.log(e.target);
})
    
