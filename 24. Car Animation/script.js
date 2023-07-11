var audio = document.createElement('audio');

audio.setAttribute('src', 'sound.mp3');

audio.loop = true;
audio.play()

setTimeout(()=>{
	audio.play()
},2000)