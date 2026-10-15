const form = document.querySelector(".footer__form"); // 4
console.log(form);

const emailInput = document.querySelector(".footer__input");
console.log(emailInput);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailObj = {
    email: emailInput.value,
  };
  console.log(emailObj);
});

const modal = document.querySelector(".modal"); // 5
const registerButton = document.querySelector(".registration-button");
const modalOverlay = document.querySelector(".modal__overlay");
const registerForm = document.querySelector(".registration-form");
const closeBtn = document.querySelector(".modal__close");

function closeModal() {
  // чтобы не писать много строк для закрытия модалки, создаем функцию, и просто ее вставляем
  modal.classList.remove("modal--open");
}

function openModal() {
  // функция для закрытия
  modal.classList.add("modal--open");
}

closeBtn.addEventListener("click", closeModal); // вызываем функцию

modalOverlay.addEventListener("click", closeModal);

console.log(registerButton);

registerButton.addEventListener("click", () => {
  modal.classList.add("modal--open");
  modalOverlay.classList.add("modal--open");
});

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(registerForm);
  const formValues = Object.fromEntries(formData);
  if (!registerForm.checkValidity()) {
    console.log("форма невалидна");
    alert("Форма невалидна, заполните корректно");
    registerForm.reportValidity();
    return;
  }

  if (formValues.password !== formValues.repeatPassword) {
    alert("Пароли не совпадают");
  }
  delete formValues.password;
  delete formValues.repeatPassword;
  console.log(formValues);

  closeModal(); // закрывается окно после заполнения автоматически
});

// delete formValues.password - пароль невидимый !!!!
