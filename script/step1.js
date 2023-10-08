
const step1 = document.querySelector(".step1")

const nameInp = document.querySelector("#nameInp")
const emailInp = document.querySelector("#emailInp")
const phoneInp = document.querySelector("#phoneInp")
const inputEls = step1.querySelectorAll(".group input")

const invalidMsgEls = step1.querySelectorAll(".invalidMsg")

const pass1Btn = document.querySelector(".pass1")

let fullname, email, phone



    pass1Btn.addEventListener("click",(e)=>{

        e.preventDefault()

        fullname = nameInp.value.trim()
        email = emailInp.value.trim()
        phone = phoneInp.value.trim()

        const nameRegexp = /^[A-Za-z]+(\s[A-Za-z]+){0,2}$/
        const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const phoneRegexp = /^\+(\d{1,3}(\s\d{1,3}){0,3}|\d{10,15})$/


        if(!fullname) {
            adjustClass(nameInp,"invalid")
            adjustMsg(nameInp,"invalidMsg visible","This field is required")

        }else if(!nameRegexp.test(fullname)) {
            adjustClass(nameInp,"invalid")
            adjustMsg(nameInp,"invalidMsg visible","Please fill in correct form")

        }else {
                adjustClass(nameInp,"")
                adjustMsg(nameInp,"invalidMsg")
        }



        if(!email) {
            adjustClass(emailInp,"invalid")
            adjustMsg(emailInp,"invalidMsg visible","This field is required")

        }else if(!emailRegexp.test(email)) {
            adjustClass(emailInp,"invalid")
            adjustMsg(emailInp,"invalidMsg visible","Please fill in correct form")

        } else {
            adjustClass(emailInp,"")
            adjustMsg(emailInp,"invalidMsg")
        }



        if(!phone) {
            adjustClass(phoneInp,"invalid")
            adjustMsg(phoneInp,"invalidMsg visible","This field is required")

        }else if(!phoneRegexp.test(phone)) {
            adjustClass(phoneInp,"invalid")
            adjustMsg(phoneInp,"invalidMsg visible","Please fill in correct form")

        } else {
            adjustClass(phoneInp,"")
            adjustMsg(phoneInp,"invalidMsg")
        }

        if([...inputEls].every(el => !el.classList.contains("invalid"))) {
            step1.classList.add("hidden")
            step2.classList.remove("hidden")

            indicators[0].classList.remove("active")
            indicators[1].classList.add("active")
        }

    })

    

                
function adjustClass(el,name) {
    el.className = name
}

function adjustMsg(el,name,msg) {
    el.nextElementSibling.className = name
    el.nextElementSibling.innerText = msg
}