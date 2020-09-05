for(i = 0; i < 256; i++){
    $("#gameBox").append("<div class=sketch></div>")
}   

$("#resetBtn").click(function(){
    resetGame();
});

$("#changeGrid").click(function(){
    let area = $("#gridArea").val();
    $(".sketch").remove();
    for(i = 0; i < (area * area); i++){
        $("#gameBox").append("<div class=sketch></div>")
    }
    $(".sketch").hover(function(){
        $(this).addClass("darken");
    });
    // $("#gameBox").css({"grid-template-columns": "repeat (" + area + ", auto)", "grid-template-rows": "repeat (" + area + ", auto)" });
    document.querySelector("#gameBox").style.gridTemplateColumns = `repeat(${area}, 1fr)`;;
    console.log(area);
});

$(".sketch").hover(function(){
    let color = $("#color").val();
    if(color == "greyscale"){
        $(this).addClass("darken");
    }
    else if(color == "rainbow"){
        $(this).addClass("darken");
        randomColor();
    }
});

function resetGame(){
    $(".sketch").removeClass("darken");
    console.log("Reset");
}

function randomColor(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    $(".darken").css({"background": "rgb(" + r + ", " + g + ", " + b + ")"})
}
