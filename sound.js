

function playSound()
{
    var audio = new Audio("./sounds/all_i_want.mp3");
    audio.play();
}

$("Button").on("click",function(){

    playSound();
});