function getRandonColor() {
  const letter = "0123456789ABCDEF"; // hexadecimal
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random() * 16)];
  }

  return color;
}

const colorCode = document.getElementById("color-code");
const generateColorBtn = document.getElementById("generatos-button");

//select for copy color code
const copyColorBtn = document.getElementById("copy-button");

copyColorBtn.addEventListener("click", () => {
  navigator.clipboard
    .writeText(colorCode.innerText) //copy color code to clipboard
    .then(() => {
      alert("Color code copied to clipboard");
    })
    .catch(() => {
      alert("No se pudo copiar el color. Intenta de nuevo.");
    });
});

// add history color
const historyColor = document.getElementById("color-list");

function addToHistory(color) {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
        <span>${color}</span>
        <button class="delete-button">Eliminar</button>
    `;

  // Botón para eliminar un color
  listItem.querySelector(".delete-button").addEventListener("click", () => {
    listItem.remove();
  });

  historyColor.appendChild(listItem);
}

//modify generateColorBtn event listener

generateColorBtn.addEventListener("click", () => {
  const randomColor = getRandonColor();
  document.body.style.backgroundColor = randomColor;
  colorCode.innerText = randomColor;

  addToHistory(randomColor);
});

// theme mode dark/light
// Obtener el botón y el cuerpo del documento
const themeButton = document.getElementById("theme-button");
const body = document.body;

// Escuchar el clic en el botón de modo oscuro
themeButton.addEventListener("click", () => {
  // Alternar la clase 'dark-mode' en el cuerpo
  body.classList.toggle("dark-mode");
});
