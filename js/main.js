$(document).ready(function(){
	var selector, i, alumna, nombre, input_name;
	var contador = 0,
		intentos = 0;
	var selection = $('#selector');
	var mexico = [{
              src: "img/flor.jpg",
              name: "Flor"
            },{
              src: "img/ale.jpg",
              name: "Alejandra"
            },{
              src: "img/moni.jpg",
              name: "Monica"
            },{
              src: "img/pao.jpg",
              name: "Ana Paola"
            },{
              src: "img/san.jpg",
              name: "Sandra"
            },
            {
              src: "img/hass.jpg",
              name: "Hassel"
            },
            {
              src: "img/duran.jpg",
              name: "Alejandra Duran"
            },
            {
              src: "img/jackie.jpg",
              name: "Jackie"
            },
            {
              src: "img/nat.jpg",
              name: "Natasha"
            },
            {
              src: "img/shan.jpg",
              name: "Shantal"
            },
            {
              src: "img/vale.jpg",
              name: "Valeria"
            },
            ];
    
    selection.change(function(){
    	selector = selection[0].value;
    	if(selector == 'Mexico'){
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
    	cambiarDatos(pais);
    	//Comparando nombre, haciendo match
    	$('#Comprobar').click(function(){
    		nombre = $('#nombre');
    		input_name = nombre[0].value;
    		if(input_name == alumna.name){
    			//Creando parrafo para agregar texto
    			$('#texto').append('<p>' + "CORRECTO" + '</p>');
    			contador += 5;
    			//console.log(contador);
    			//Creando small para agregarle el puntaje
    			$('#puntaje').append('<small>' + contador + '</small>');
    			cambiarDatos(pais);
    			ocultarTexto();
    			ocultarPuntaje();
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
    			$('#puntaje').append('<small>' + contador + '</small>');
    			cambiarDatos(pais);
    			ocultarTexto();
    			ocultarPuntaje();
    		}
    		nombre[0].value = "";
    	});
    }

    function cambiarDatos(pais){
    	i = randomInteger(0,11);
    	alumna = pais[i];
    	//Agregando src a img
    	var img = $('#imagen').attr({
    		src: alumna.src,
    		class : 'img-responsive'
    	});
    	$('#contenedor').append(img);
    }

    function ocultarTexto(){
    	$('#texto > p').fadeOut(3000);
    }

    function ocultarPuntaje(){
    	$('#puntaje > small').fadeOut(5000);
    }

    function randomInteger(low, high){
    	return low + Math.floor(Math.random()*(high-low));
    }

});