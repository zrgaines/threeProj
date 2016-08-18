$( document ).ready(function() {
  $('.proj').find('canvas').addClass('disNone');
    //Fade down of the header text
    
    $('#headerText').addClass('animated fadeInDown');
    $('#subHeading').addClass('animated fadeInDown');
    $('#headerSmall').addClass('animated fadeInDown');

    //On hover, show title + author
    $('.proj').hover(
      function(){
        
        //removing fade out, making elements display
        $(this).find('h2').removeClass('animated fadeOutLeft');
        $(this).find('h3').removeClass('animated fadeOutLeft');
        $(this).find('h2').removeClass('disNone');
        $(this).find('h3').removeClass('disNone');

        //adds fade in
        $(this).find('h2').addClass('animated fadeInLeft');
        $(this).find('h3').addClass('animated fadeInLeft');

        //off hover
      }, function() {
        $(this).find('h2').removeClass('animated fadeInLeft');
        $(this).find('h3').removeClass('animated fadeInLeft');

        $(this).find('h2').addClass('animated fadeOutLeft');
        $(this).find('h3').addClass('animated fadeOutLeft');
      }
    )

    //These functions will show/hide each project on click
    $('#projDiv1').on('click', function() {
      if($('#proj1').find('canvas').hasClass('disNone')) {
        $('.fa-play-circle').addClass('disNone');
        $('#proj1').find('canvas').removeClass('disNone');
      }
        else {
          $('.fa-play-circle').removeClass('disNone');
          $('#proj1').find('canvas').addClass('disNone');
        }
    })

        $('#projDiv2').on('click', function() {
          if($('#proj2').find('canvas').hasClass('disNone')) {
            $('.fa-play-circle').addClass('disNone');
            $('#proj2').find('canvas').removeClass('disNone');
        }
        else {
          $('.fa-play-circle').removeClass('disNone');
          $('#proj2').find('canvas').addClass('disNone');
        }
    })

        $('#projDiv3').on('click', function() {
          if($('#proj3').find('canvas').hasClass('disNone')) {
            $('.fa-play-circle').addClass('disNone');
            $('#proj3').find('canvas').removeClass('disNone');
        } 
        else {
          $('.fa-play-circle').removeClass('disNone');
          $('#proj3').find('canvas').addClass('disNone');
        }
    })
});