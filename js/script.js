
var btn_action = document.getElementById('btn_action');

function click_boton(e) {
    var audio = document.getElementById('audio');
    
    audio.play()
}


btn_action.addEventListener('click', click_boton)

