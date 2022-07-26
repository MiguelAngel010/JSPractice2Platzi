const suscriptionObj = {
  Free: 'Puedes ingresar a  los cursos gratuitos',
  Basic: 'Puedes ingresar a toso los cursos por un mes',
  Expert: 'Puedes ingresar a todos los cursos durante un año',
  Expertduo: 'Puedes ingresar tu y una persona mas a todos los cursos durante un año'
}

function selectSus(suscription){
  if(suscriptionObj[suscription]){
    console.log (suscriptionObj[suscription]);
    return;
  }else{
    console.warn('No se ha encontrado la suscripcion');
  }
}