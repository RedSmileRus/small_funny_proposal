document.getElementById("no").addEventListener("mouseover", moveButton);
document.getElementById("no").addEventListener("click", moveButton);

function moveButton() {
  const button = document.getElementById("no");
  const offsetX = Math.floor(Math.random() * 200) - 100;
  const offsetY = Math.floor(Math.random() * 200) - 100;
  button.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
}

// Обработчик нажатия на кнопку "Да"
document.getElementById("yes").addEventListener("click", function() {
  // Переход на новую страницу
  window.location.href = "success.html"; // Эта страница должна быть создана
});