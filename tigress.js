$(document).ready(function() {

$('img').on('click', function() {
    $(this).toggleClass('clicked');
});





function sticky_relocate() {
var window_top = $(window).scrollTop();
var div_top = $('#sticky-anchor').offset().top;
if (window_top > div_top) {
    $('#indicator').addClass('stick');
} 
else {
    $('#indicator').removeClass('stick');
}
}

$(function () {
    $(window).scroll(function(){
      sticky_relocate();
      if($(window).scrollTop() > $('#part1').offset().top 
         && $(window).scrollTop() < $('#part1').offset().top + $('#part1').outerHeight(true)
      ){
         $('#indicator h3').text('introduction');
      }else if($(window).scrollTop() > $('#part2').offset().top 
         && $(window).scrollTop() < $('#part2').offset().top + $('#part2').outerHeight(true)
      ){
         $('#indicator h3').text('part 1');
      }else if($(window).scrollTop() > $('#part3').offset().top 
         && $(window).scrollTop() < $('#part3').offset().top + $('#part3').outerHeight(true)
      ){
         $('#indicator h3').text('part 2');
      }else if($(window).scrollTop() > $('#part4').offset().top 
         && $(window).scrollTop() < $('#part4').offset().top + $('#part4').outerHeight(true)
      ){
         $('#indicator h3').text('part 3');
      }else{
      	$('#indicator h3').text('introduction');
      }
    });
});

});