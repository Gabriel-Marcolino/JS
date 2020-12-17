$(document).ready(function(){
  $(".player__item").draggable({
   containment:".field__box",
   cursor: "grabbing"
  })
});

$(".player__item").on('mouseover', function(){
   
          $(this).find(".player__item--card").css("display", "flex");
  
       
});

$(".player__item").on('mouseout', function(){
  
          $(this).find(".player__item--card").css("display", "none");
  
   
});

