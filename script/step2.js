
const step2 = document.querySelector(".step2")

const labels = step2.querySelectorAll("label")
const planRadios = step2.querySelectorAll("label.group input")
let plan
let currentItem

const selectRadios = step2.querySelectorAll(".select-group input")
const toggleBtn = step2.querySelector(".toggle")
const toggleWrapper = step2.querySelector(".select-group .wrapper")
let timeplan
let price = 0 


const pass2Btn = document.querySelector(".pass2")



//todo: CHECKİNG RADIO BUTTON WİTH CLICK or SPACE/ENTER ////

    planRadios.forEach(radioBtn=> radioBtn.addEventListener("click",(e)=> {

            labels.forEach(el=>el.classList.remove("selected"))
            currentItem = radioBtn.parentElement
            currentItem.classList.add("selected")
        
        plan = currentItem.querySelector(".plan").innerText
    }))

//todo: ////////////////////////////////////////////////////////

//? /////////////////////////////////////////////////////////////////////////////////////////////////////////


//? /////////////////////////////////////////////////////////////////////////////////////////////////////////

//todo: with pressing TAB, afrer focusing the FIRST RADIO BUTTON, other BUTTONS can be ACCESIBLE with ARROW KEYS

    planRadios.forEach(radioBtn => radioBtn.addEventListener("focus",e=> {

            labels.forEach(label => {
                label.classList.remove("selected")
            })

            radioBtn.parentElement.classList.add("selected")

        const lastBtn = planRadios[planRadios.length - 1]
        const firstBtn = planRadios[0]

        
            radioBtn.addEventListener("keydown",e=> {
                
                if(e.key === "ArrowDown" || e.key === "ArrowRight") {

                        radioBtn.setAttribute("tabindex","-1")

                        if(radioBtn !== lastBtn) {
                            const nextBtn = radioBtn.parentElement.nextElementSibling.querySelector(`input`)

                                nextBtn.setAttribute("tabindex","0")
                                nextBtn.focus()

                        }else {
                            firstBtn.focus()
                            firstBtn.setAttribute("tabindex","0")
                        }
                }

                if(e.key === "ArrowUp" || e.key === "ArrowLeft") {

                    radioBtn.setAttribute("tabindex","-1")

                    if(radioBtn !== firstBtn) {
                        const previousBtn = radioBtn.parentElement.previousElementSibling.querySelector("input")

                            previousBtn.setAttribute("tabindex","0")
                            previousBtn.focus()

                    }else {
                        lastBtn.focus()
                        lastBtn.setAttribute("tabindex","0")
                    }
                }
            })
    }))

//todo: ////////////////////////////////////////////////////////




//todo: checking MONTHLY or YEARLY PLAN RADIOS with CLICK //

    selectRadios.forEach(radioBtn=>radioBtn.addEventListener("click",e=>{

        console.log(radioBtn);
        if(radioBtn.id === "monthRadio") {
            toggleBtn.classList.remove("yearly")
            step2.querySelectorAll(".free").forEach(el => el.classList.remove("visible"))
            price = +currentItem.querySelector(".price").textContent.slice(1,3).split("/")[0]


        }else {
            toggleBtn.classList.add("yearly")
            step2.querySelectorAll(".free").forEach(el => el.classList.add("visible"))
            price = +currentItem.querySelector(".price").textContent.slice(1,3).split("/")[0] * 10

        }
    
    }))

//todo: ////////////////////////////////////////////////////////

//? /////////////////////////////////////////////////////////////////////////////////////////////////////////


//? /////////////////////////////////////////////////////////////////////////////////////////////////////////

//todo: cheching PLAN RADIOS with TOGGLE BUTTON

    toggleWrapper.addEventListener("click",e=>{
        
        let input

        if(toggleBtn.classList.contains("yearly")) {
                toggleBtn.classList.remove("yearly")
                step2.querySelectorAll(".free").forEach(el => el.classList.remove("visible"))

            input = toggleBtn.parentNode.previousElementSibling
                input.checked= true
                timeplan = input.previousElementSibling.innerText
                price = +currentItem.querySelector(".price").textContent.slice(1,3).split("/")[0]

        }else {
                toggleBtn.classList.add("yearly")
                step2.querySelectorAll(".free").forEach(el => el.classList.add("visible"))

            input = toggleBtn.parentNode.nextElementSibling.nextElementSibling
                input.checked = true
                timeplan = input.previousElementSibling.innerText
                price = +currentItem.querySelector(".price").textContent.slice(1,3).split("/")[0] * 10
        }

        //! NEW SKILSS UNLOCKED

        const event = new Event("input", { bubbles: true });
        input.dispatchEvent(event);
        
        //! //////////////////
    })

//todo: //////////////////////////////////////////////////////

//? /////////////////////////////////////////////////////////////////////////////////////////////////////////


//? /////////////////////////////////////////////////////////////////////////////////////////////////////////

//todo: with pressing TAB, afrer focusing the FIRST RADIO BUTTON, other BUTTONS can be ACCESIBLE with ARROW KEYS

    selectRadios.forEach(radioBtn => radioBtn.addEventListener("focus",e=> {
            
        timeplan = radioBtn.previousElementSibling.innerText

            if(radioBtn.id === "monthRadio") {
                toggleBtn.classList.remove("yearly")
                step2.querySelectorAll(".free").forEach(el => el.classList.remove("visible"))

            }else {
                toggleBtn.classList.add("yearly")
                step2.querySelectorAll(".free").forEach(el => el.classList.add("visible"))

            }

        const firstBtn = selectRadios[0]
        const lastBtn = selectRadios[1]

            radioBtn.addEventListener("keydown",e=> {
                        
                if(e.key === "ArrowDown" || e.key === "ArrowRight") {
                    
                    radioBtn.setAttribute("tabindex","-1")

                        if(radioBtn !== lastBtn) {
                            lastBtn.setAttribute("tabindex","0")
                            lastBtn.focus()

                        }else {
                            firstBtn.focus()
                            firstBtn.setAttribute("tabindex","0")
                        }
                }

                if(e.key === "ArrowUp" || e.key === "ArrowLeft") {
                    
                    radioBtn.setAttribute("tabindex","-1")
                        if(radioBtn !== firstBtn) {
                            firstBtn.setAttribute("tabindex","0")
                            firstBtn.focus()

                        }else {
                            lastBtn.focus()
                            lastBtn.setAttribute("tabindex","0")
                        }
                }
            })
    }))

//todo: ////////////////////////////////////////////////////////

    pass2Btn.addEventListener("click",e=> {
        e.preventDefault()
        let planMsg, annualPlanMsg
        
        if(!price) {
            planMsg = "You forgot to chose a plan"
            annualPlanMsg = ""
        }
        else if(!timeplan) {
            planMsg = ""
            annualPlanMsg = "You forgot to chose an annual plan"
        }
        
        if(price && timeplan) {
            planMsg = ""
            annualPlanMsg = ""

            step2.classList.add("hidden")
            step3.classList.remove("hidden")

            indicators[1].classList.remove("active")
            indicators[2].classList.add("active")
            
                console.log({plan,price,timeplan});
        } 
        message = planMsg + annualPlanMsg
        notificationEl.innerHTML = message
    })
