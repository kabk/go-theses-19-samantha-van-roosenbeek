$(document).ready(function() {

// document.onclick = function()
// {
//   window.print();
// }

  //if ('matchMedia' in window) {

  //console.log( window.matchMedia('print') );
      // window.matchMedia('print').addListener(function (media) {
      // //do before-printing stuff
      // console.log( 'printing' );
      // });
  // } else {
  //     window.onbeforeprint = function () {
  //     //do before-printing stuff
  //     console.log( 'test' );
  //     }
  // }




  $('sup').click(function() {
    $('.references').toggle("slide");
    // document.getElementById("ref1").onclick = function() {
    //  window.location.href = "fn4";
    // }
    // Alternative animation for example
    // slideToggle("fast");
  });
   $('.references').click(function() {
    $('.references').hide("slide");
  });

  
  $('.images').draggable();
  $('.imageSource').draggable();
  $('.images').each(function(i,el){

      var tLeft = Math.floor(Math.random()*1000),
          tTop  = Math.floor(Math.random()*5000);

      $(el).css({position:'absolute', left: tLeft, top: tTop});

  });


  var prv_y = $( window ).scrollTop( );

  var headers = $( '.header' );
  headers.each( function( index ) {
      var header = $( this );

      var anchor = $( '<span>' );
      anchor.insertBefore( header );

      header.data( 'anchor', anchor );
  } );

  function updateTitles( event ) {
    var cur_y = $( this ).scrollTop( );

    headers.each( function( index  ) {
      var cur_header = $( this );
      var cur_anchor = cur_header.data( 'anchor' );

      var prv_header = $( '.header' ).eq( index - 1 );
      var prv_anchor = prv_header.data( 'anchor' );


      var cur_top = cur_y - cur_anchor.offset( ).top;
      if ( cur_top < 0 ) cur_top = 0;


      cur_header.css( 'transform', 'translate(0,' + cur_top + 'px) translateZ(0)' )
                .data( { 'top': cur_top,
                         'bottom': cur_top + cur_header.height( ) } );


      var prv_top = prv_header.data( 'top' );
      var prv_btm = prv_header.data( 'bottom' );

      if ( index > 0 ) {
          if ( prv_btm - ( cur_top + cur_anchor.offset( ).top ) > 0 ) {
            prv_header.css( 'opacity', 0 );
          } else {
            prv_header.css( 'opacity', 1 );
          }
      }
    } );

    prv_y = cur_y;
  }

  $( window ).scroll( updateTitles )
             .trigger( 'scroll' );

  /*
  $(window).scroll( function( ) {
    var sticky = $('.header'),
        scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });

  window.onscroll = function() {myFunction()};

  var header = document.getElementById("title");
  var sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
  */




  // $(window).scroll(function() {
  // if ($(this).scrollTop() > 1){  
  //     $('#title').addClass("sticky");
  //   }
  //   else{
  //     $('#title').removeClass("sticky");
  //   }
  // });


  // function sticky_relocate() {
  // var window_top = $(window).scrollTop();
  // var div_top = $('#sticky-anchor').offset().top;
  // if (window_top > div_top) {
  //     $('#title').addClass('stick');
  // } 
  // else {
  //     $('#title').removeClass('stick');
  // }
  // }

  // $(function () {
  //     $(window).scroll(function(){
  //       sticky_relocate();
  //       if($(window).scrollTop() > $('#part1').offset().top 
  //          && $(window).scrollTop() < $('#part1').offset().top + $('#part1').outerHeight(true)
  //       ){
  //          $('#title h1').text('introduction');
  //       }else if($(window).scrollTop() > $('#part2').offset().top 
  //          && $(window).scrollTop() < $('#part2').offset().top + $('#part2').outerHeight(true)
  //       ){
  //          $('#title h1').text('part I – Form Mechanics');
  //       }else if($(window).scrollTop() > $('#part3').offset().top 
  //          && $(window).scrollTop() < $('#part3').offset().top + $('#part3').outerHeight(true)
  //       ){
  //          $('#title h1').text('part II – Qi Medicine');
  //       }else if($(window).scrollTop() > $('#part4').offset().top 
  //          && $(window).scrollTop() < $('#part4').offset().top + $('#part4').outerHeight(true)
  //       ){
  //          $('#title h1').text('part III – Cultivated Harmony');
  //       }else{
  //       	$('#title h1').text('The Strike of a Ferocious Tigress');
  //       }
  //     });
  // });

});