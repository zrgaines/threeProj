$( document ).ready(function() {
  
    $('#headerText').addClass('animated fadeInDown');
    $('#subHeading').addClass('animated fadeInDown');
    $('#headerSmall').addClass('animated fadeInDown');
    //On hover, show title + author
    $('.proj').hover(
      function(){
        
        $(this).find('h2').removeClass('animated fadeOutLeft');
        $(this).find('h3').removeClass('animated fadeOutLeft');
        $(this).find('h2').removeClass('disNone');
        $(this).find('h3').removeClass('disNone');

        $(this).find('h2').addClass('animated fadeInLeft');
        $(this).find('h3').addClass('animated fadeInLeft');

      }, function() {
        $(this).find('h2').removeClass('animated fadeInLeft');
        $(this).find('h3').removeClass('animated fadeInLeft');

        $(this).find('h2').addClass('animated fadeOutLeft');
        $(this).find('h3').addClass('animated fadeOutLeft');
      }
    )

    $('#projDiv1').on('click', function() {
      if($('#proj1').hasClass('disNone')) {
        $('#proj1').removeClass('disNone');
      }
        else {
          $('#proj1').addClass('disNone');
        }
    })

        $('#projDiv2').on('click', function() {
          if($('#proj2').hasClass('disNone')) {
            $('#proj2').removeClass('disNone');
        }
        else {
          $('#proj2').addClass('disNone');
        }
    })

        $('#projDiv3').on('click', function() {
          if($('#proj3').hasClass('disNone')) {
            $('#proj3').removeClass('disNone');
        } 
        else {
          $('#proj3').addClass('disNone');
        }
    })
});