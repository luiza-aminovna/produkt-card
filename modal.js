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
    this.isOpen = true;
  }
  close() {
    this.modal.classList.remove("modal--open");
    this.isOpen = false;
  }
  isModalOpen() {
    return this.isOpen;
  }
}
