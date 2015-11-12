$(document).ready(function() {
	// Este código corre despues de que `document` fue cargado(loaded) 
	// completamente. 
	// Esto garantiza que si amarramos(bind) una función a un elemento 
	// de HTML este exista ya en la página.

	$('form').on("submit", function(evento){

		//first stage: for preventing any default, stop HTML and don't do 'redirect to'
	  evento.preventDefault();
    //it gets a url from 'form'
    var url = $('#face').attr('action');
	  // "/rolls" 

	  //to do a Post, it gets a url (url)

	  $.post(url,function(response_data){
    
      //it generates a random number (1..6)
	  	var num = Math.floor((Math.random() * 6) + 1);
      
      //it replaces all content from 'div' with id="die"
      value_1 = "/"
      value_2 = num
      value_3 = ".png"
      value_src = '"'+value_1 + value_2 + value_3+'"'

      dado_response = '<img src='+value_src+'title="'+num+'" alt="the roll">'

      $('#die').html(dado_response);
	  });

	});
  	
});
