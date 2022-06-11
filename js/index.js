console.log ("Your index.js file is loaded correctly!");

$("a").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "pink");
  });