const firstName = document.getElementById("Firstname")
const lastName = document.getElementById("Lastname")
const password = document.getElementById("Password")
const email = document.getElementById("Email")
const form = document.querySelector(".registration_form")

function error(input, message) {
   const inputField = input.parentElement
   inputField.classList.remove("success")
   inputField.classList.add("error")

   error_message = inputField.querySelector("small")
   error_message.innerHTML = `<em>${message}</em>`
}

function success(input) {
   const inputField = input.parentElement
   inputField.classList.remove("error")
   inputField.classList.add("success")

   error_message = inputField.querySelector("small")
   error_message.textContent = " "
}

function checkEmail(input) {
   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if (input.value.trim() === "") {
      error(input, `${input.id} cannot be empty`)
      return
   }
   if (re.test(input.value.trim())) {
      return success(input);
   }
   else {
      error(input, 'looks like this is not an email');
   }
}

function checkRequired(inputArray) {
   let isRequired = false
   inputArray.forEach((input) => {
      if (input.value.trim() === "") {
         error(input, `${input.id} cannot be empty`)
         isRequired = true
      } else {
         success(input)
      }
   })
   return isRequired;
}

form.addEventListener("submit", (e) => {
   e.preventDefault()
   let is_valid = checkRequired([firstName, lastName, password])
   let is_email_valid = checkEmail(email)
   if (is_valid && is_email_valid) {

   }
})