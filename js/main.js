//auto collapse navbar on mobile
$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

//masonry gallery
$(".grid").imagesLoaded(function() {
    $(".grid").masonry({
      itemSelector: ".grid-item"
    });
  });
  
  // curosr 
  new emojiCursor({emoji: ["💖", "🦋", "🌈", "🌻"]});