const formEl = document.querySelector(".login-form")
const submitChecker = (event) => {
  event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    let userObject = {};
    if (email.value === "" || password.value ==="") {
        alert(`Усі полямають бути заповнені`)
    }
    userObject.email = email.value
    userObject.password = password.value
    console.log(userObject)
    event.currentTarget.reset();
}
formEl.addEventListener("submit", submitChecker);
