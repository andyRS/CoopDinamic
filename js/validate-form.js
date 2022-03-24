// creamos la funcion
function validarFormulario(){
    // removemos el div con la clase alert
    $('.alert').remove();


    // declarion de variables
   
    var nombre=$('#nombre').val(),
        correo=$('#correo').val(),
        cedula=$('#cedula').val(),
        telefono=$('#telefono').val(),
        asunto=$('#asunto').val(),
        mensaje=$('#mensaje').val();

    // validamos el campo nombre
    if(nombre=="" || nombre==null){

        cambiarColor("nombre");
        // mostramos le mensaje de alerta
        mostraAlerta("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if(!expresion.test(nombre)){
            // mostrara el mesaje que debe ingresar un nombre válido
            cambiarColor("nombre");
            mostraAlerta("No se permiten carateres especiales o numeros");
            return false;
        }
    }

   
    //validamos la cedula
     if(cedula=="" || cedula==null || cedula.length == 0  || isNaN(cedula)){
        cambiarColor("cedula");
        // mostramos le mensaje de alerta
        mostraAlerta("Campo obligatorio");
        return false;
    }else{
        var expresion= /^\d{11}$/;
        if(!expresion.test(cedula)){
            // mostrara el mesaje que debe ingresar una cedula válida
            cambiarColor("cedula");
            mostraAlerta("Ingrese una cedula valida ");
            return false;
        }
    }
   
   
    // validamos el correo
    if(correo=="" || correo==null){

        cambiarColor("correo");
        // mostramos le mensaje de alerta
        mostraAlerta("Campo obligatorio");
        return false;
    }else{
        var expresion= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if(!expresion.test(correo)){
            // mostrara el mesaje que debe ingresar un correo válido
            cambiarColor("correo");
            mostraAlerta("Por favor ingrese un correo válido");
            return false;
        }
    }

      //validamos el telefono
      if(telefono=="" || telefono==null || telefono.length == 0){
        cambiarColor("telefono");
        // mostramos le mensaje de alerta
        mostraAlerta("Campo obligatorio");
        return false;
    }else{
        var expresion= /^\d{3}\d{3}\d{4}$/;
        if(!expresion.test(telefono)){
            // mostrara el mesaje que debe ingresar una cedula válida
            cambiarColor("telefono");
            mostraAlerta("Por favor ingrese un numero de telefono valido");
            return false;
        }
    }
   

    // validamos el asunto
    if(asunto=="" || asunto==null){

        cambiarColor("asunto");
        // mostramos le mensaje de alerta
        mostraAlerta("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[,\\.\\a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]*$/;
        if(!expresion.test(asunto)){
            // mostrara el mesaje que debe ingresar un asunto válido
            cambiarColor("asunto");
            mostraAlerta("No se permiten caracteres especiales");
            return false;
        }
    }

     // validamos el mensaje
     if(mensaje=="" || mensaje==null){

        cambiarColor("mensaje");
        // mostramos le mensaje de alerta
        mostraAlerta("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[,\\.\\a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]*$/;
        if(!expresion.test(mensaje)){
            // mostrara el mesaje que debe ingresar un mensaje válido
            cambiarColor("mensaje");
            mostraAlerta("No se permiten caracteres especiales");
            return false;
        }
    }

    $('form').submit();
    return true;
    
} 

$('input').focus(function(){
    $('.alert').remove();
    colorDefault('nombre');
    colorDefault('cedula');
    colorDefault('correo');
    colorDefault('asunto');
    colorDefault('telefono')
});

$('textarea').focus(function(){
    $('.alert').remove();
    colorDefault('mensaje');
});

// creamos un funcion de color por defecto a los bordes de los inputs
function colorDefault(dato){
    $('#' + dato).css({
        border: "1px solid #999"
    });
}

// creamos una funcio para cambiar de color a su bordes de los input
function cambiarColor(dato){
    $('#' + dato).css({
        border: "1px solid #dd5144"
    });
}

// funcion para mostrar la alerta

function mostraAlerta(texto){
    $('#nombre').before('<div class="alert">Error: '+ texto +'</div>');
}

// funcion para limpiar los campos

function limpiarFormulario() {
    document.getElementById("formulario").reset();
  }