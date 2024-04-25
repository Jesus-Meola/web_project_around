const editButton = document.querySelector(".profile__edit-button");
const miPopup = document.querySelector(".popup");
const closeButton = document.querySelector(".popup__button-closed");
const nameInput = document.querySelector(".popup__name");
const jobInput = document.querySelector(".popup__description");
const saveButton = document.querySelector(".popup__button-create");
// const profileName = document.querySelector(".profile__name");
const profileText = document.querySelector(".profile__text");
const profileProfession = document.querySelector(".profile__profession");

editButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
saveButton.addEventListener("click", saveChanges);

function openPopup() {
  miPopup.classList.add("popup_open");
}

function closePopup() {
  miPopup.classList.remove("popup_open");
}

function saveChanges() {
  const newName = nameInput.value;
  const newProfession = jobInput.value;

  profileText.textContent = newName;
  profileProfession.textContent = newProfession;

  closePopup();
}
