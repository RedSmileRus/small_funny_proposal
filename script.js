document.getElementById("no").addEventListener("mouseover", moveButton);
document.getElementById("no").addEventListener("click", moveButton);

function moveButton() {
  const button = document.getElementById("no");
  const container = document.querySelector(".container");
  
  // Генерируем случайные смещения
  const offsetX = Math.floor(Math.random() * 200) - 100;
  const offsetY = Math.floor(Math.random() * 200) - 100;

  // Устанавливаем новое положение
  button.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
}
