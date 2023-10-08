
const indicators = document.querySelectorAll(".indicator .wrapper .no")

const pass1Btn = document.querySelector(".pass1")
const step1 = document.querySelector(".step1")
const nameInp = document.querySelector("#nameInp")
const emailInp = document.querySelector("#emailInp")
const phoneInp = document.querySelector("#phoneInp")
let fullname, email, phone

const step2 = document.querySelector(".step2")
const pass2Btn = document.querySelector(".pass2")
const planRadios = document.querySelectorAll(".step2 label.group")
console.log(planRadios);
let plan, price

const step3 = document.querySelector(".step3")
const pickCheck = step3.querySelectorAll("input[name='pickCheck']")

let service;
let totalPickPrice = 0
let arr = [], newArr =[];
const pass3Btn = document.querySelector(".pass3")

const step4 = document.querySelector(".step4")



    pass1Btn.addEventListener("click",(e)=>{
        e.preventDefault()
        fullname = nameInp.value
        email = emailInp.value
        phone = phoneInp.value

        if(fullname && email && phone) {
            step1.classList.add("hidden")
            step2.classList.remove("hidden")
    
            indicators[0].classList.remove("active")
            indicators[1].classList.add("active")
        }
        
    })

    planRadios.forEach(btn=> btn.addEventListener("click",(e)=> {
        const radioBtn = e.target

        const wrapperEls = step2.querySelectorAll(".group")
        wrapperEls.forEach(el=>el.classList.remove("selected"))

        radioBtn.parentElement.classList.add("selected")
        console.log(radioBtn);
        plan = `monthly`

        price = radioBtn.parentElement.querySelector(".price").textContent.slice(1,3).split("/")[0]

    }))

    // same func for a11y
    planRadios.forEach(btn=> btn.addEventListener("keydown",(e)=> {
        if(e.key === " " || e.key === "Enter") {

            const radioBtn = e.target.querySelector("input")                
                console.log(radioBtn);
            const wrapperEls = step2.querySelectorAll(".group")
            wrapperEls.forEach(el=>el.classList.remove("selected"))
    
            radioBtn.parentElement.classList.add("selected")
    
            plan = `monthly`
    
            price = radioBtn.parentElement.querySelector(".price").textContent.slice(1,3).split("/")[0]
            
        }
    }))
    // 

    pass2Btn.addEventListener("click",(e)=> {
        e.preventDefault()

        if(plan && price) {
        step2.classList.add("hidden")
        step3.classList.remove("hidden")

        indicators[1].classList.remove("active")
        indicators[2].classList.add("active")
        }
    })

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
    planEl.innerText = `Arcade (${plan})`
const priceEl = confirm1.querySelector(".price")
    priceEl.innerText = `$${price}/mo`


