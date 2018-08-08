// This function makes the halo glow and play heavenly music apon click

$('#halo-click').on('click',function(){
    $('#halo-click').addClass('halo-glowing');
    var audio = new Audio('sound/angel.mp3');
	audio.play();
});