const editButton = document.querySelector(".profile__edit-button");
const miPopup = document.querySelector(".popup");
const closeButton = document.querySelector(".popup__button-closed");
const nameInput = document.querySelector(".popup__name");
const jobInput = document.querySelector(".popup__description");
const saveButton = document.querySelector(".popup__button-create");
const profileText = document.querySelector(".profile__text");
const profileProfession = document.querySelector(".profile__profession");
const template = document.querySelector(".template-card");
const cardZone = document.querySelector(".elements");
const buttonAddCard = document.querySelector(".profile__add-button");
const cardPopup = document.querySelector(".popup__card");
const formCardPopup = document.querySelector(".popup__card-form");
const buttonCloseAddCard = document.querySelector(".popup__card_button-closed");
const buttonCreateCard = document.querySelector(".popup__card_button-create");

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

editButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
saveButton.addEventListener("click", saveChanges);
buttonAddCard.addEventListener("click", openCardPopup);
buttonCloseAddCard.addEventListener("click", closeCardPopup);

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

function openCardPopup() {
  cardPopup.classList.add("popup_card-open");
}

function closeCardPopup() {
  cardPopup.classList.remove("popup_card-open");
}

function cardAdd(name, link) {
  const card = template
    .cloneNode(true)
    .content.querySelector(".elements__card");
  const cardImage = card.querySelector(".elements__image");
  const buttonDeleteCard = card.querySelector(".elements__image-trash");
  const cardTitle = card.querySelector(".elements__title");
  const buttonLike = card.querySelector(".elements__image-like");
  buttonDeleteCard.addEventListener("click", function () {
    card.remove();
  });
  buttonLike.addEventListener("click", function () {
    buttonLike.classList.toggle("elements__image-like_active");
  });

  cardImage.src = link;
  cardTitle.textContent = name;
  cardImage.alt = name;
  cardZone.append(card);
}

initialCards.forEach(function (element) {
  cardAdd(element.name, element.link);
});

formCardPopup.addEventListener("submit", function (evt) {
  evt.preventDefault();
  cardAdd();
});
