
    //variable lista de amigos
    let amigos = [];
    //permite ingresar los nombres del input con la tecla enter
    document.getElementById('cajaTexto').addEventListener('keydown', function(event){
  if(event.key === 'Enter'){
    agregarAmigo();
  }
});

    //asignar texto a un elemento
    function asignarTextoElemento(elemento, texto){
        let elementoHTML = document.getElementById(elemento);
        elementoHTML.innerHTML = texto;
        return;
}
    //agregar un amigo a nuestra lista
   function agregarAmigo(){
    //value trim para que no hayan espacios entre los nombres
        let nombreAmigo = document.getElementById('cajaTexto').value.trim(); 
        //si la caja esta vacia, mandar una alerta
        if (nombreAmigo === '') {
            asignarTextoElemento('resultado', 'Ingresa un nombre valido.') ;
            resultado.style.color = 'red'; 
    }
    
      
    //limpiar la caja en caso de haber ingresado un nombre repetido
    else if (amigos.includes(nombreAmigo)) {
        asignarTextoElemento('resultado', 'Ese nombre ya fue ingresado.') ;
        document.getElementById('cajaTexto').value = '';
        //si repiten un nombre, aparece un texto y cambia de color a naranja
        resultado.style.color = 'orange'; 
    }
    else { //mandar nombre de amigos a la lista 'amigos'
        amigos.push(nombreAmigo);
        //mostrar nuestra nueva lista actualizada
        mostrarAmigos();
         //limpiar la caja cuando se haya completado el push
        document.getElementById('cajaTexto').value = '';
       //limpiar texto de alerta en caso de haber ingresado un nombre invalido.
        limpiarTextoResultado();
    }
    
 } //funcion para mostrar los amigos que se van a sortear
    function mostrarAmigos (){
    
    let lista = document.getElementById('listaAmigos');
    //para que se limpie la lista
    lista.innerHTML = '';
    //por cada amigo en la lista, se crea una lista en el HTML con cada nombre que se ingreso en el input.
    amigos.forEach((amigo) => {
        let li = document.createElement('li');
        li.textContent = "👤" + amigo
        lista.appendChild(li);
    })

} //sortea los amigos creando un numero aleatorio dependiendo el numero de nombres de la lista y luego pone el resultado.
    function sortearAmigo (){
        let numeroAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[numeroAleatorio]; 
            if (amigos.length === 0) {
                asignarTextoElemento('resultado', 'No hay ningun nombre en tu lista.') 
                //cambia a color rojo el mensaje
                resultado.style.color = 'red'; 
        }
        else if (amigos < 2) {
          asignarTextoElemento('resultado', 'Ingrese por lo menos 2 participantes.');
          }
            else {
                document.getElementById('resultado').textContent = "El amigo sorteado es: " + amigoSorteado;
                resultado.style.color = 'limegreen'; 
        }
}

    //funcion para limpiar el mensaje de alerta en caso de ingresar algun nombre invalido.
    function limpiarTextoResultado () {
        document.getElementById('resultado').textContent = "";
    }
    
