$(document).ready(function(){


  var speedTrans = 0;// fade speed of transition
  //Hide all slides
  $('.proj-img').hide();
  $('.proj-title').hide();
  $('.proj-item').hide();
  //Show first slide
  $('.active').show();

	// Next event
  $('#next').on('click', nextSlide);
  // Previous event
  $('#previous').on('click', previousSlide);


  //Function: Next slide
  function nextSlide(){
    $('.active').removeClass('active').addClass('oldActive');
    
    if($('.oldActive').is(':last-child')){
      $('.proj-img').first().addClass('active');
      $('.proj-title').first().addClass('active');
      $('.proj-item').first().addClass('active');
    }else{
      $('.oldActive').next().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    $('.proj-img').fadeOut(speedTrans);
    $('.proj-title').fadeOut(speedTrans);
    $('.proj-item').fadeOut(speedTrans);
    $('.active').fadeIn(speedTrans);
  }

  //Function: Previous slide
  function previousSlide(){
    $('.active').removeClass('active').addClass('oldActive');
    
    if($('.oldActive').is(':first-child')){
      $('.proj-img').last().addClass('active');
      $('.proj-title').last().addClass('active');
      $('.proj-item').last().addClass('active');
    }else{
      $('.oldActive').prev().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    $('.proj-img').fadeOut(speedTrans);
    $('.proj-title').fadeOut(speedTrans);
    $('.proj-item').fadeOut(speedTrans);
    $('.active').fadeIn(speedTrans);
  }
});