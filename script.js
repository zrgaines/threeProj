$( document ).ready(function() {
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
      if($('#proj1').hasClass('disNone')) {
        $('#ic1').addClass('disNone');
        $('#proj1').removeClass('disNone');
      }
        else {
          $('#ic1').removeClass('disNone');
          $('#proj1').addClass('disNone');
        }
    })

        $('#projDiv2').on('click', function() {
          if($('#proj2').hasClass('disNone')) {
            $('#ic2').addClass('disNone');
            $('#proj2').removeClass('disNone');
        }
        else {
          $('#ic2').removeClass('disNone');
          $('#proj2').addClass('disNone');
        }
    })

        $('#projDiv3').on('click', function() {
          if($('#proj3').hasClass('disNone')) {
            $('#ic3').addClass('disNone');
            $('#proj3').removeClass('disNone');
        } 
        else {
          $('#ic3').removeClass('disNone');
          $('#proj3').addClass('disNone');
        }
    })
});