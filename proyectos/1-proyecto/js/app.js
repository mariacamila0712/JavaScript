import Api from './api.js';
import * as UI from './interfaz-grafica.js';

UI.formularioBuscar.addEventListener('submit', buscarCancion);

function buscarCancion(event) {
  event.preventDefault();
  const artista = document.querySelector('#artista').value;
  const cancion = document.querySelector('#cancion').value;

  // Una validación de los campos del formulario
  if( artista === '' || cancion === '') {
    console.log('Error.. ambos campos son requeridos');
    UI.divMensaje.textContent = 'Error.. campos requeridos!!';
    UI.divMensaje.classList.add('error');

    setTimeout(() => {
      UI.divMensaje.textContent = '';
      UI.divMensaje.classList.remove('error');
    }, 3000)
    return; // termina la ejecución
  }
  console.log('EL USUARIO INGRESO LOS CAMPOS');
  const busqueda = new Api(artista, cancion);
  const resultadoApi = busqueda.consultarApi();
  const informacion = busqueda.mostrarInformacion();

  // Renderizado
  // resultadoApi es la letra de la canción
  // información es el nombre de la canción y el nombre del artista
  renderizado(resultadoApi, informacion);
}

const renderizado = async (resultado, info) => {
  // resultado.then(r=>console.log(r)).catch(e => console.log(e));
  const resultadoLetra = await resultado;
  console.log(resultadoLetra);
  if(resultadoLetra.lyrics) {
    const { lyrics }  = resultadoLetra;
    console.log(lyrics);
    UI.divResultado.textContent = lyrics;
    UI.headingResultado.textContent = info;
  } else {
    // no existe la cancion seleccionada
    UI.divMensaje.textContent = 'La canción no existe, prueba con otra busqueda';
    UI.divMensaje.classList.add('error');

    setTimeout(() =>  {
      UI.divMensaje.textContent = '';
      UI.divMensaje.classList.remove('error')
    })
  }
}