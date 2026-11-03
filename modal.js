export class Modal {
  constructor(id) {
    this.modal = document.getElementById(id);
    this.isOpen = false;

    const closeBtn = this.modal.querySelector(".modal__close");

    closeBtn.addEventListener("click", () => {
      this.close();
    });
  }
  open() {
    this.modal.classList.add("modal--open");
  }
  close() {
    this.modal.classList.remove("modal--open");
  }
  isModalOpen() {
    return this.isOpen;
  }
}
