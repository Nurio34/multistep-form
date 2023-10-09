
const step2 = document.querySelector(".step2")

const planRadios = step2.querySelectorAll("label.group")
let plan, price

const selectRadios = step2.querySelectorAll(".select-group label")
const toggleBtn = step2.querySelector(".toggle")
const toggleWrapper = step2.querySelector(".select-group .wrapper")
let timeplan

const pass2Btn = document.querySelector(".pass2")



//todo: CHECKİNG RADIO BUTTON WİTH CLICK or SPACE/ENTER ////

    planRadios.forEach(btn=> btn.addEventListener("click",(e)=> {
        const radioBtn = e.target

            planRadios.forEach(el=>el.classList.remove("selected"))
            radioBtn.parentElement.classList.add("selected")
        
        plan = radioBtn.parentElement.querySelector(".plan").innerText
            console.log(radioBtn);
        price = radioBtn.parentElement.querySelector(".price").textContent.slice(1,3).split("/")[0]

    }))

//todo: ////////////////////////////////////////////////////////

//? /////////////////////////////////////////////////////////////////////////////////////////////////////////


//? /////////////////////////////////////////////////////////////////////////////////////////////////////////

//todo: with pressing TAB, afrer focusing the FIRST RADIO BUTTON, other BUTTONS can be ACCESIBLE with ARROW KEYS

    planRadios.forEach(radioBtn => radioBtn.addEventListener("focus",e=> {

        const currentBtn = e.target
        price = currentBtn.querySelector(".price").textContent.slice(1,3).split("/")[0]

            currentBtn.querySelector("input").checked = true

                planRadios.forEach(radioBtn => {
                    radioBtn.classList.remove("selected")
                    radioBtn.ariaChecked = "false"
                })
            currentBtn.classList.add("selected")
            currentBtn.ariaChecked = true

        const nextBtn = currentBtn.nextElementSibling
        const lastBtn = planRadios[planRadios.length - 1]

        const previousBtn = currentBtn.previousElementSibling
        const firstBtn = planRadios[0]
        
            currentBtn.addEventListener("keydown",e=> {
                
                if(e.key === "ArrowDown" || e.key === "ArrowRight") {

                        currentBtn.setAttribute("tabindex","-1")

                        if(currentBtn !== lastBtn) {
                            nextBtn.setAttribute("tabindex","0")
                            nextBtn.focus()
                            nextBtn.querySelector("input").checked = true

                        }else {
                            firstBtn.focus()
                            firstBtn.setAttribute("tabindex","0")
                        }
                }

                if(e.key === "ArrowUp" || e.key === "ArrowLeft") {

                    currentBtn.setAttribute("tabindex","-1")

                    if(currentBtn !== firstBtn) {
                        previousBtn.setAttribute("tabindex","0")
                        previousBtn.focus()
                        previousBtn.querySelector("input").checked = true

                    }else {
                        lastBtn.focus()
                        lastBtn.setAttribute("tabindex","0")
                    }
                }
            })
    }))

//todo: ////////////////////////////////////////////////////////




//todo: checking PLAN RADIOS with CLICK //

    selectRadios.forEach(radioBtn=>radioBtn.addEventListener("click",e=>{

        const radioBtn = e.target
        const input = radioBtn.nextElementSibling

        if(radioBtn.htmlFor === "monthRadio") {
            toggleBtn.classList.remove("yearly")
            step2.querySelectorAll(".free").forEach(el => el.classList.remove("visible"))

        }else {
            toggleBtn.classList.add("yearly")
            step2.querySelectorAll(".free").forEach(el => el.classList.add("visible"))

        }
        timeplan = radioBtn.innerText
    
    }))

//todo: ////////////////////////////////////////////////////////

//? /////////////////////////////////////////////////////////////////////////////////////////////////////////


//? /////////////////////////////////////////////////////////////////////////////////////////////////////////

//todo: cheching PLAN RADIOS with TOGGLE BUTTON

    toggleWrapper.addEventListener("click",e=>{
        
        if(toggleBtn.classList.contains("yearly")) {
                toggleBtn.classList.remove("yearly")
                step2.querySelectorAll(".free").forEach(el => el.classList.remove("visible"))

            const input = toggleBtn.parentNode.previousElementSibling
                input.checked= true
                timeplan = input.previousElementSibling.innerText

        }else {
                toggleBtn.classList.add("yearly")
                step2.querySelectorAll(".free").forEach(el => el.classList.add("visible"))

            const input = toggleBtn.parentNode.nextElementSibling.nextElementSibling
                input.checked = true
                timeplan = input.previousElementSibling.innerText
        }
    })

//todo: //////////////////////////////////////////////////////

//? /////////////////////////////////////////////////////////////////////////////////////////////////////////


//? /////////////////////////////////////////////////////////////////////////////////////////////////////////

//todo: with pressing TAB, afrer focusing the FIRST RADIO BUTTON, other BUTTONS can be ACCESIBLE with ARROW KEYS

    selectRadios.forEach(radioBtn => radioBtn.addEventListener("focus",e=> {
            
        const currentBtn = e.target
        timeplan = currentBtn.innerText

            currentBtn.nextElementSibling.checked = true // input radio checked

            selectRadios.forEach(radioBtn => {
                radioBtn.ariaChecked = "false"
            })
            currentBtn.ariaChecked = true

            if(currentBtn.htmlFor === "monthRadio") {
                toggleBtn.classList.remove("yearly")
                step2.querySelectorAll(".free").forEach(el => el.classList.remove("visible"))

            }else {
                toggleBtn.classList.add("yearly")
                step2.querySelectorAll(".free").forEach(el => el.classList.add("visible"))

            }

        const firstBtn = selectRadios[0]
        const lastBtn = selectRadios[1]

            currentBtn.addEventListener("keydown",e=> {
                        
                if(e.key === "ArrowDown" || e.key === "ArrowRight") {
                    
                    currentBtn.setAttribute("tabindex","-1")

                        if(currentBtn !== lastBtn) {
                            lastBtn.setAttribute("tabindex","0")
                            lastBtn.focus()
                            lastBtn.nextElementSibling.checked = true

                        }else {
                            firstBtn.focus()
                            firstBtn.setAttribute("tabindex","0")
                        }
                }

                if(e.key === "ArrowUp" || e.key === "ArrowLeft") {
                    
                    currentBtn.setAttribute("tabindex","-1")
                        if(currentBtn !== firstBtn) {
                            firstBtn.setAttribute("tabindex","0")
                            firstBtn.focus()
                            firstBtn.nextElementSibling.checked = true

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

        if(price && timeplan) {
            step2.classList.add("hidden")
            step3.classList.remove("hidden")

            indicators[1].classList.remove("active")
            indicators[2].classList.add("active")
                console.log({plan,price,timeplan});
        } 
    })
