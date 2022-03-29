const sitioWeb = {
    nombre: 'Google',

    link: {
      enlace: 'www.google.com'
    },

    redesSociales: {
      youtube: {
        enlace: 'youtube.com/google',
        nombre: 'Google'
      }
    }

  }
  
  //console.log(sitioWeb.redesSociales.youtube.enlace)
  const enlaceYoutube = sitioWeb.redesSociales.youtube.enlace; //imprimir el enlace
  // console.log(enlaceYoutube);
  
  // Destructuring (Desmenuzar)
  //const { enlace, nombre } = sitioWeb.redesSociales.youtube;
  //console.log(enlace);
 // console.log(nombre);
  
 const { nombre, link, redesSociales } = sitioWeb;
 const { youtube } = redesSociales;
 // const { enlace, nombre } = youtube;
  
console.log(nombre);
console.log(link.enlace);