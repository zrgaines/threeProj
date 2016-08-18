$( document ).ready(function() {
  
    $('#headerText').addClass('animated fadeInDown');
    $('#subHeading').addClass('animated fadeInDown');
    $('#headerSmall').addClass('animated fadeInDown');
    //On hover, show title + author
    $('.projDiv').hover(
      function(){
        
        $(this).parent().find('h2').removeClass('animated fadeOutLeft');
        $(this).parent().find('h3').removeClass('animated fadeOutLeft');
        $(this).parent().find('h2').removeClass('disNone');
        $(this).parent().find('h3').removeClass('disNone');

        $(this).parent().find('h2').addClass('animated fadeInLeft');
        $(this).parent().find('h3').addClass('animated fadeInLeft');

      }, function() {
        $(this).parent().find('h2').removeClass('animated fadeInLeft');
        $(this).parent().find('h3').removeClass('animated fadeInLeft');

        $(this).parent().find('h2').addClass('animated fadeOutLeft');
        $(this).parent().find('h3').addClass('animated fadeOutLeft');
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
});