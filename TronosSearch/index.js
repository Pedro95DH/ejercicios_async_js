const select = document.getElementById("character-list");
const img = document.querySelector(".character-image");

async function mostrarPersonajes() {
  try {
    const response = await fetch("https://thronesapi.com/api/v2/Characters");
    const characters = await response.json();

    // Ponemos una opción por defecto para que selecciones un personaje y no aparezca el nombre de un personaje sin foto al cargar la página.

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "--Selecciona un personaje--";
    select.appendChild(defaultOption);

    // Ahora añadimos cada personaje al menú option:

    characters.forEach((char) => {
      const option = document.createElement("option");
      option.value = char.imageUrl;
      option.textContent = char.fullName;
      select.appendChild(option);
    });
  } catch (error) {
    console.error("Error!!", error);
  }
}

//Aquí creo un evento para que el personaje cambie al cambiar la selección.

select.addEventListener("change", () => {
  const imageUrl = select.value;
  if (imageUrl) {
    img.src = imageUrl;
    img.style.display = "relative";
  } else {
    img.style.display = "none";
  }
});

mostrarPersonajes();
