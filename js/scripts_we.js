//Llamando al acordeon
$(document).ready(function(){
    $("#acordeon").accordion();

    

      $( "#acordeon" ).accordion({
        active: 0
      });

      $( "#acordeon" ).accordion({
        animate: 400
      });

    var animate = $( "#acordeon" ).accordion( "option", "animate" );
    
    animate.accordion = 400;
    // Setter
    $( "#acordeon" ).accordion( "option", "animate", 400 );


    $( "#acordeon" ).accordion({
        heightStyle: "conent"
      });


    $( "#acordeon" ).accordion({
        classes: {
          "ui-accordion": "highlight"
        }
      });

var themeClass = $( "#acordeon" ).accordion( "option", "classes.ui-accordion" );
 
// Setter
$( "#acordeon" ).accordion( "option", "classes.ui-accordion", "highlight" );

$( "#acordeon" ).accordion({
    collapsible: true
  });

//AutoComplete
$( function() {
  var etiquetasAutocompletado = [
    "Prestamos",
    "Certificados Financieros",
    "Preguntas Frecuentes",
    "Ahorros",
    "Finanzas",
    "Articulos",
    "Seguros",
    "Prestamos Hipotecarios",
    "Prestamos personales",
    "Prestamos Empresariales",
    "Negocios",
    "Juventud",
    "Salud",
    "Salud Bucal",
    "Empresas",
    "Acerca de nosotros"
    
  ];
  $( "#search" ).autocomplete({
    source: etiquetasAutocompletado
  });
} );

//Selectable
$( function() {
  $( ".selectable" ).selectable();
} );
     


});
