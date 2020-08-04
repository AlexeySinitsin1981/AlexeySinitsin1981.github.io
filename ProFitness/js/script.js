
$(document).ready(function(){
  $('.reviews__inner').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 2,
		prevArrow: '<button type="button" class="slick-prev"><img src="..//icons//prev.svg" alt="" /></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="..//icons//next2.svg" alt="" /></button>',
		responsive: [
			{
				breakpoint: 768,
			    settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2,
			        infinite: true,
			        dots: true,
			        arrows: false
			      }
			},
      {
        breakpoint: 576,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrows: false
            }
      }

		]
	});

  //modal

  	$('[data-modal=sign-up]').on('click', function(){
  		$('.overlay, #sign-up').fadeIn('slow');
  	});
  		$('.modal__close').on('click', function(){
  			$('.overlay, #sign-up, #thanks, #details').fadeOut('slow');
  	});
  		$('[data-modal=details]').on('click', function(){
  			$('.overlay, #details').fadeIn('slow');
  	});


  	$('form').submit(function(e){
  		e.preventDefault();
  		$.ajax({
  			type: "POST",
  			url: "../mailer/smart.php",
  			data: $(this).serialize()
  		}).done(function(){
  			$(this).find("input").val("");
  			$('#sign-up, #details').fadeOut();
  			$('.overlay, #thanks').fadeIn();
  			$('form').trigger('reset');
  		});
  		return false;
  	});
});