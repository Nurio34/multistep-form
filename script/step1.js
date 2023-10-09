
const step1 = document.querySelector(".step1")

const nameInp = document.querySelector("#nameInp")
const emailInp = document.querySelector("#emailInp")
const phoneInp = document.querySelector("#phoneInp")
const inputEls = step1.querySelectorAll(".group input")

const invalidMsgEls = step1.querySelectorAll(".invalidMsg")

const pass1Btn = document.querySelector(".pass1")

let fullname, email, phone

const notificationEl = step1.querySelector(".notification")



    pass1Btn.addEventListener("click",(e)=>{

        e.preventDefault()

        notificationEl.ariaLive = "polite"
        let message,nameMsg,emailMsg,phoneMsg

        fullname = nameInp.value.trim()
        email = emailInp.value.trim()
        phone = phoneInp.value.trim()

        const nameRegexp = /^[A-Za-z]+(\s[A-Za-z]+){0,2}$/
        const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const phoneRegexp = /^\+(\d{1,3}(\s\d{1,3}){0,3}|\d{10,15})$/


        if(!fullname) {
            adjustClass(nameInp,"invalid")
            adjustMsg(nameInp,"invalidMsg visible","This field is required")
            nameMsg = "You forgot to write your name. "

        }else if(!nameRegexp.test(fullname)) {
            adjustClass(nameInp,"invalid")
            adjustMsg(nameInp,"invalidMsg visible","Please fill in correct form")
            nameMsg = "Your name doesn't match the format. "

        }else {
            adjustClass(nameInp,"")
            adjustMsg(nameInp,"invalidMsg")
            nameMsg = ""
        }



        if(!email) {
            adjustClass(emailInp,"invalid")
            adjustMsg(emailInp,"invalidMsg visible","This field is required")
            emailMsg = "You forgot to write your email. "

        }else if(!emailRegexp.test(email)) {
            adjustClass(emailInp,"invalid")
            adjustMsg(emailInp,"invalidMsg visible","Please fill in correct form")
            emailMsg = "Your email doesn't match the format. "

        } else {
            adjustClass(emailInp,"")
            adjustMsg(emailInp,"invalidMsg")
            emailMsg = ""
        }



        if(!phone) {
            adjustClass(phoneInp,"invalid")
            adjustMsg(phoneInp,"invalidMsg visible","This field is required")
            phoneMsg= "You forgot to write your phone number."

        }else if(!phoneRegexp.test(phone)) {
            adjustClass(phoneInp,"invalid")
            adjustMsg(phoneInp,"invalidMsg visible","Please fill in correct form")
            phoneMsg= "Your phone number doesn't match the format. "

        } else {
            adjustClass(phoneInp,"")
            adjustMsg(phoneInp,"invalidMsg")
            phoneMsg = ""
        }

        message = nameMsg + emailMsg + phoneMsg
        notificationEl.innerText = message

        if([...inputEls].every(el => !el.classList.contains("invalid"))) {
            step1.classList.add("hidden")
            step2.classList.remove("hidden")

            indicators[0].classList.remove("active")
            indicators[1].classList.add("active")
                console.log({fullname,email,phone});
        }
    })

    

                
function adjustClass(el,name) {
    el.className = name
}

function adjustMsg(el,name,msg) {
    el.nextElementSibling.className = name
    el.nextElementSibling.innerText = msg
}