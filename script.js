const emailInput = document.getElementById("email");
const submitBtn = document.getElementById("Btn");
const errorElement = document.querySelector(".error");
const backBtn = document.getElementById("dis-Btn");
const form = document.querySelector("form");
const span = document.getElementById("emailSpan");
const info = document.getElementById("success-info");
const main = document.querySelector(".main");
const success = document.querySelector(".main-success");

main.classList.remove("hide");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
});

function emailValid(email) {
  const req =
    /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;
  return req.test(String(email).toLowerCase());
}

function validateEmail() {
  const emailValue = emailInput.value; // Get the value of the email input field

  if (emailValue === "") {
    errorElement.innerText = "Email cannot be empty";
  } else if (!emailValid(emailValue)) {
    errorElement.innerText = "Enter a valid email";
  } else {
    errorElement.innerText = "";
    // window.location = "success.html";
    // span.textContent = emailValue.value;
    main.classList.add("hide");
    success.classList.remove("hide");
    span.textContent = emailInput.value;
    form.reset();

  }
}

function back() {
  main.classList.remove("hide");
  success.classList.add("hide");
}
// backBtn.addEventListener("click", (c) => {
//   window.location = "main.html";
// });
