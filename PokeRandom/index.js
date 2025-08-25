const img = document.querySelector(".random-image");

// Genero un número aleatorio del 1 al 151 para "randomizar" el pokemon que aparece al recargar la página
const randomId = Math.floor(Math.random() * 151) + 1;

async function cargarPokemon() {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomId}`
    );
    const data = await response.json();

    // La imagen que mejor se ve es "official-artwork", así que elijo esa para representar a los pókemon.
    const imageUrl = data.sprites.other["official-artwork"].front_default;

    img.src = imageUrl;
    img.alt = data.name;
    img.style.display = "block";
  } catch (error) {
    console.error("Error cargando Pokémon:", error);
  }
}

// Llamamos a la función asíncrona para cargar el pokemon al inicio de la página.
cargarPokemon();
