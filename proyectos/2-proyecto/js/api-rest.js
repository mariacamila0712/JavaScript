// Crear las referencias
const rowCards = document.querySelector('#rowCard');

const parametro = window.location.search;
//console.log(parametro)// ?id=1
const urlParams = new URLSearchParams(parametro);
const ID = urlParams.get('id');
console.log(ID);

const getCharacterById = async (ID) => {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${ID}`);
    const data = await response.json();
    return data;
  }catch (error) {
    throw error;
  }
};

//Funcion punto de arranque
const init = async() => {
  const character = await getCharacterById(ID);
  console.log(character);
  createCardCharacter(character);
}

init(); // llamada al función que inicia la app

/* Fin de las Peticiones */
    
const createCardCharacter = (character) => {
  // destructuring de character
  const { name, image, gender, species, status } = character; 

  const cardBootstrap = document.createElement('div');
  const cardImage = document.createElement('div');
  const imgCard = document.createElement('img');
  const cardBody = document.createElement('div');
  const titleCharacter = document.createElement('h5');
  const textGender = document.createElement('p');
  const textSpecies = document.createElement('p');
  const textStatus = document.createElement('p');

  // textos a los elementos
  const nameCharacter = document.createTextNode(`Nombre: ${name}`);
  const nameGender = document.createTextNode(`Genero: ${gender}`);
  const nameSpecies = document.createTextNode(`Especie: ${species}`);
  const nameStatus = document.createTextNode(`Estado: ${status}`);


  // Añadir las clases css de bootstrap
  cardBootstrap.classList.add('card', 'mt-4', 'col-sm-12', 'col-md-3');
  cardImage.classList.add('card-img-top', 'mt-2');
  imgCard.classList.add('card-img-top', 'mt-12', );
  cardBody.classList.add('card-body');
  titleCharacter.classList.add('text-center');
  textGender.classList.add('card-title', 'text-center');
  textSpecies.classList.add('card-title', 'text-center');
  textStatus.classList.add('card-title', 'text-center');

  // Añadir los textos
  titleCharacter.appendChild(nameCharacter);
  textGender.appendChild(nameGender);
  textSpecies.appendChild(nameSpecies);
  textStatus.appendChild(nameStatus);
  imgCard.src= image;

  // TERMINAR CON EL RENDERIZADO
  cardBootstrap.append(cardImage, cardBody);
  cardBody.append(titleCharacter, textGender, textSpecies, textStatus);
  rowCards.append(cardBootstrap);
  cardImage.append(imgCard)
}