const deleteBtn = document.querySelector(".del_btn");
const modifyBtn = document.querySelector(".mod_btn");
const addBtn = document.querySelector(".add_btn");

const cardFrontImage = document.querySelector(".Introduce-Card-Img");
const defaultImageUrl = "./img/default.png";
const frontName = document.querySelector(".Tmoney-fontsize-200");

const cardBackName = document.querySelector(".Tmoney-fontsize-150");
const cardBackText = document.querySelector(".KOTRA-fontsize-100");

deleteBtn.addEventListener("click", () => {
  cardBackText.textContent = "";
  cardBackName.textContent = "";
  cardFrontImage.src = defaultImageUrl;
  frontName.textContent = "";

  deleteBtn.style.display = "none";
  modifyBtn.style.display = "none";
  addBtn.style.display = "inline-block";
});

addBtn.addEventListener("click", () => {
  const newName = prompt("새 이름을 입력하세요:");
  const newDescription = prompt("새 설명을 입력하세요:");

  if (newName && newDescription) {
    cardBackName.textContent = newName;
    frontName.textContent = newName;
    cardBackText.innerHTML = newDescription;

    addBtn.style.display = "none";
    deleteBtn.style.display = "inline-block"; // 수정: display 속성을 inline-block으로 설정합니다.
    modifyBtn.style.display = "inline-block"; // 수정: display 속성을 inline-block으로 설정합니다.
  }
});

modifyBtn.addEventListener("click", () => {
  const newImageUrl = prompt("새 이미지 URL을 입력하세요:");
  const newName = prompt("새 이름을 입력하세요:");
  const newDescription = prompt("새 설명을 입력하세요:");

  if (newImageUrl) {
    cardFrontImage.src = newImageUrl;
  }
  if (newName) {
    cardBackName.textContent = newName;
  }
  if (newDescription) {
    cardBackText.innerHTML = newDescription;
  }
});
