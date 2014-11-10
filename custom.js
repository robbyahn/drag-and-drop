$(document).ready(function(){

	$('.draggable').each(function(index, div) {
		var scope = $(this).attr('data-scope');
		$(div).draggable({	   
			stop: function() {
				//$('.droppable').droppable('option', 'disabled', false);
				$('.droppable').droppable();
			},			
			helper: 'clone'
		});
	});

	$('.droppable').droppable({          
		drop: function(event, ui) {        
			var x = $(this).find('.draggable');			
			
			/* if(!$(this).attr('id')==='bank'){
				if(!x.length){
					$(this).append(ui.draggable);            
				}else{
					
				}   
			}else{ 
				$('#bank').append($('.ui-draggable', this));				
				$(this).append(ui.draggable);				   
			} */
			
			$(this).append(ui.draggable);	
			
		}
	});

});