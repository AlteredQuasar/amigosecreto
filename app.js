    let amigos = [];

    //asignar texto a un elemento
    function asignarTextoElemento(elemento, texto){
        let elementoHTML = document.getElementById(elemento);
        elementoHTML.innerHTML = texto;
        return;
}
    //agregar un amigo a nuestra lista
   function agregarAmigo(){
        let nombreAmigo = document.getElementById('cajaTexto').value.trim(); 
         //value trim para que no hayan espacios entre los nombres
        if (nombreAmigo === '') {
            //si la caja esta vacia, mandar una alerta
            asignarTextoElemento('resultado', 'Ingresa un nombre valido.') ;
            resultado.style.color = 'red'; 
    }
    else if (amigos.includes(nombreAmigo)) {
        asignarTextoElemento('resultado', 'Ese nombre ya fue ingresado.') ;
        document.getElementById('cajaTexto').value = '';
        //limpiar la caja en caso de haber ingresado un nombre repetido
        resultado.style.color = 'orange'; 
        //si repiten un nombre, aparece un texto y cambia de color a naranja
    }
    else { 
        amigos.push(nombreAmigo);
        //mandar nombre de amigos a la lista 'amigos'
        mostrarAmigos();
        
         //mostrar nuestra nueva lista actualizada
        document.getElementById('cajaTexto').value = '';
        //limpiar la caja cuando se haya completado el push
        limpiarTextoResultado();
        //limpiar texto de alerta en caso de haber ingresado un nombre invalido.
    }
 } 
    function mostrarAmigos (){
    //funcion para mostrar los amigos que se van a sortear
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    //para que se limpie la lista
    amigos.forEach((amigo) => {
        let li = document.createElement('li');
        li.textContent = "👤" + amigo
        lista.appendChild(li);
        //por cada amigo en la lista, se crea una lista en el HTML con cada nombre que se ingreso en el input.
    })

}
    function sortearAmigo (){
        let numeroAleatorio = Math.floor(Math.random() * amigos.length);
         let amigoSorteado = amigos[numeroAleatorio]; 
        //sortea los amigos creando un numero aleatorio dependiendo el numero de nombres de la lista y luego pone el resultado.
        if (amigos.length === 0) {
            asignarTextoElemento('resultado', 'No hay ningun nombre en tu lista.') 
            resultado.style.color = 'red'; 
            //cambia a color rojo el mensaje
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