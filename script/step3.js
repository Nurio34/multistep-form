
const step3 = document.querySelector(".step3")

const pickChecks = step3.querySelectorAll("input[type='checkbox']")



const pass3Btn = document.querySelector(".pass3")



//todo: checks with CLİCK ///////////
    pickChecks.forEach(btn=> btn.addEventListener("click",e=>{
        
        const checkBtn = btn
        const isChecked = checkBtn.checked

        itemPrice = Number(checkBtn.parentElement.querySelector(".price").textContent.slice(2,3).split("/")[0])
        service = checkBtn.parentElement.querySelector("h3").innerText

            if(isChecked) {

                checkBtn.parentElement.classList.add("selected")
                totalPrice += itemPrice

                if(!services.includes(service)) {
                    services.push({service,itemPrice})

                }

            } else {

                checkBtn.parentElement.classList.remove("selected")
                totalPrice -= itemPrice

                newArr = []
                services.filter(item=> {
                    if(item.service !== service) {
                        newArr.push(item)
                    }
                })
                services = newArr
            }   

            console.log(services);
    }))

//todo: //////////////////////////////

//? /////////////////////////////////////////////////////////////////////////////////////////////////////////


//? /////////////////////////////////////////////////////////////////////////////////////////////////////////
//todo://todo: with pressing TAB, afrer focusing the FIRST CHECK BUTTON, other BUTTONS can be ACCESIBLE with ARROW KEYS

    pickChecks.forEach(checkBtn => checkBtn.addEventListener("focus",e=> {

        const labels = step3.querySelectorAll("label")
            labels.forEach(label=>label.classList.remove("focus"))
            
        const label = checkBtn.parentElement
            label.classList.add(`focus`)

        const lastBtn = pickChecks[labels.length - 1]
        const firstBtn = pickChecks[0]


            checkBtn.addEventListener("keydown",e=>{

                if(e.key === "ArrowDown" || e.key === "ArrowRight") {
                    
                    checkBtn.setAttribute("tabindex","-1")
                    
                    if(checkBtn !== lastBtn) {
                        const nextBtn = checkBtn.parentElement.nextElementSibling.querySelector("input")

                            nextBtn.setAttribute("tabindex","0")
                            nextBtn.focus()

                    }else {
                        firstBtn.setAttribute("tabindex","0")
                        firstBtn.focus()
                    }
                }

                if(e.key === "ArrowUp" || e.key === "ArrowLeft") {
                    
                    checkBtn.setAttribute("tabindex","-1")
                    
                    if(checkBtn !== firstBtn) {
                        const previousBtn = checkBtn.parentElement.previousElementSibling.querySelector("input")

                            previousBtn.setAttribute("tabindex","0")
                            previousBtn.focus()

                    }else {
                        lastBtn.setAttribute("tabindex","0")
                        lastBtn.focus()
                    }
                }
            })
    }))

    pickChecks.forEach(checkBtn => checkBtn.addEventListener("blur",e=> {
        const label = checkBtn.parentElement
        label.classList.remove("focus")
    }))






pass3Btn.addEventListener("click",e=> {
    e.preventDefault()

        step3.classList.add("hidden")
        step4.classList.remove("hidden")

        indicators[2].classList.remove("active")
        indicators[3].classList.add("active")
            console.log({services,totalPrice});

})