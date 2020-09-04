for(i = 0; i < 16; i++){
    for(j = 0; j < 16; j++){
        $("#gameBox").append("<div class=sketch></div>")
    }   
}

$("#resetBtn").click(function(){
    resetGame();
});

$(".sketch").hover(function(){
    $(this).addClass("darken");
});

function resetGame(){
    $(".sketch").removeClass("darken");
}