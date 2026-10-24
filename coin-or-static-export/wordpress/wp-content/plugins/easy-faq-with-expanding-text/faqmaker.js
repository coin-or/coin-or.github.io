jQuery(document).ready(function($) {
		$('.bg_faq_content_section').each( function(){
		
		foldup = $(this).data('foldup');
		
		
		
		$(this).find(' :header:not(h6)').each(function(){ // select all the heading in .bg_faq_content_section other than h6
			if ( !$(this).hasClass('bg_faq_closed')) {
                        $(this).addClass('bg_faq_closed'); 					//make these heading "closed"
			$(this).attr('data-foldupq', foldup);
			$(this).nextUntil(':header').css({'display':'none'}); 	//hide everything up until the next heading
			var textsize = $(this).css('font-size'); 				//get the font size in order to more accurately position the visual cue
			var halftextsize = parseInt(textsize)/2;
			var backgroundpos = Math.round(halftextsize)-10;
			var padding = $(this).css('padding-top'); 				//get the padding in order to help us position the visual cue
			var padding = parseInt(padding);
			var backgroundpos = Math.round(halftextsize)-10+padding;
			$(this).css({'background-position-y': backgroundpos}); //position the visual cue
			
		$(this).click(function(){
				foldup = $(this).attr('data-foldupq');
																		//whenever one of these headings is clicked,
			if($(this).hasClass('bg_faq_opened')) {	
				
			//check to see if it's opened. If so,...
				$(this).nextUntil(':header').slideUp();			//slide up the content beneath it and mark this heading "closed"
				$(this).removeClass('bg_faq_opened').addClass('bg_faq_closed');
				}
		else {															//if it isn't opened,
		if(foldup=='yes') {												//check to see we are supposed to fold up other content so only one answer shows at a time.
//		console.log('foldup = yes');
				
				$(this).parents('.bg_faq_content_section').eq(0).find('.bg_faq_opened').not(this).each(function(){					//if so...
				$(this).nextUntil(':header').slideUp();			//foldup other content and mark the headings as closed
				$(this).removeClass('bg_faq_opened').addClass('bg_faq_closed');
			})
		}
		$(this).nextUntil(':header').slideDown();					//then roll out the content and mark the heading as opened
		$(this).removeClass('bg_faq_closed').addClass('bg_faq_opened');
		}
		
		
		})			
                }
		});
		

	});
	});