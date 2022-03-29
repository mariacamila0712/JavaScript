//Personajes https://rickandmortyapi.com/api/character

//fetch = consultas a un servidor

const URL = 'https://rickandmortyapi.com/api/character'; // END POINT

//fetch trabaja con promesas

fetch(URL).then(resp => {
    return resp.json();
}).then( data => {
    console.log(data);
}).catch(err => console.error(err));
