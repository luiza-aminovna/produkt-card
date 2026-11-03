export class Form {
  constructor(id) {
    this.form = document.getElementById(id);
  }
  isFormValid() {
    // валидность
    return this.form.checkValidity();
  }
  getFormData() {
    // получение данных
    const formData = new FormData(this.form);
    const formValues = Object.fromEntries(formData);
    return formValues;
  }
  reset() {
    this.form.reset(); // сбрасывает значения к начальному состоянию
  }
}
