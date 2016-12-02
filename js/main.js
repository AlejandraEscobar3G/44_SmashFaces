$(document).ready(function(){
  var selector, i, alumna, nombre, input_name, j;
  var contador,
    intentos;
  var selection = $('#selector');
  
     
    
    selection.change(function(e){

      e.preventDefault();
      e.stopPropagation();
      // sedes
        
      // Fin sedes

      selector = selection[0].value;
      if(selector == 'Mexico'){
          console.log('bien');
          proceso(mexico);
      } else if(selector == 'Arequipa'){
        console.log('Estas en Arequipa');
      } else {
        console.log('Escoge una sede');
        return;
      }
    });

    //function
    function proceso(pais){
      contador = 0;
      intentos = 0;
      var small = document.getElementById("puntaje");
          small.innerHTML = " " + contador;
      j = cambiarDatos(pais);
      $('#nombre').focus();
      console.log(pais.length);
      //console.log(j);
      //Comparando nombre, haciendo match
      $('#Comprobar').off('click');
      $('#Comprobar').click(function(){
        nombre = $('#nombre');
        input_name = nombre[0].value;
        if(input_name == alumna.name){
          //Creando parrafo para agregar texto
          pais.splice(j , 1);
          console.log(pais.length);
          console.log(pais)
          $('#texto').append('<p>' + "CORRECTO" + '</p>');
          contador += 5;
          //console.log(contador);
          //Creando small para agregarle el puntaje
                small.innerHTML = " " + contador;
          //Validando que queden fotos
          if(pais.length == 0){
              alert("FIN DEL JUEGO");
              return;
          } else{
            j = cambiarDatos(pais);
            ocultarTexto();
          }  
        } else{
          //Creando parrafo para agregar texto
          $('#texto').append('<p>' + "INCORRECTO" + '</p>');
          intentos++;
          if(intentos === 5){
            contador--;
            intentos = 0;
          }
          //console.log(contador);
          //Creando small para agregarle puntaje
                small.innerHTML = " " + contador;
          j = cambiarDatos(pais);
          ocultarTexto();
        }
        nombre[0].value = "";
        $('#nombre').focus();
      });
    }

    function cambiarDatos(pais){
      i = randomInteger(0, pais.length-1);
      alumna = pais[i];
      //Agregando src a img
      var img = $('#imagen').attr({
        src: alumna.src,
        class : 'img-responsive'
      });
      $('#contenedor').append(img);
      return i;
    }

    function ocultarTexto(){
      $('#texto > p').fadeOut(3000);
    }

    function randomInteger(low, high){
      return low + Math.floor(Math.random()*(high-low));
    }

});