$(document).ready(function() { 
	$('#form').submit(function(e) {
		e.preventDefault();
		$.ajax({
	    type: $('#form').attr('method'),
	    url: $('#form').attr('action'),
	    data: {'contact':{'name': $('#name').val(),'email': $('#email').val(),'company': $('#company').val(), 'message': $('#message').val()}},
	    success: function(data, textStatus, jqXHR){
	      console.log('success ' + JSON.stringify(data));
	      $('#servermessage').text(data.message);
	    },
	    dataType: 'json'
	  }); 
	  return false; 
	});
});