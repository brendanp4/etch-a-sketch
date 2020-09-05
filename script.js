//Build initial 16x16 grid area

for(i = 0; i < 256; i++){
    $("#gameBox").append("<div class=sketch></div>")
}   

//Attach event listener to reset button

$("#resetBtn").click(function(){
    resetGame();
});

//Changes grid size upon user request

$("#changeGrid").click(function(){
    let area = $("#gridArea").val();
    //Removes existing grid cells and builds new grid
    $(".sketch").remove();
    for(i = 0; i < (area * area); i++){
        $("#gameBox").append("<div class=sketch></div>")
    }
    $(".sketch").hover(function(){
        let color = $("#color").val();
    if(color == "greyscale"){
        $(this).addClass("darken");
    }
    else if(color == "rainbow"){
        $(this).removeClass("darken");
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        $(this).css({"background-color": "rgb(" + r + ", " + g + ", " + b + ")"})
    }
    });

    //Adjusts css grid to new game grid
    document.querySelector("#gameBox").style.gridTemplateColumns = `repeat(${area}, 1fr)`;;
    console.log(area);
});

//Shades grid cells

$(".sketch").hover(function(){
    let color = $("#color").val();
    if(color == "greyscale"){
        $(this).addClass("darken");
    }
    else if(color == "rainbow"){
        $(this).removeClass("darken");
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        $(this).css({"background-color": "rgb(" + r + ", " + g + ", " + b + ")"})
    }
});

//Reset button function

function resetGame(){
    $(".sketch").removeClass("darken");
    $(".sketch").css({"background-color": ""})
    console.log("Reset");
}