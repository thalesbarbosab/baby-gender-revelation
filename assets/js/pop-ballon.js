
function startDrumRollEvent(){
    audio_drum_roll.play();
    setTimeout(() => {
        img_drum_roll.style.display = 'none';
        gif_drum_roll.style.display = 'block';
    }, 500);
}

function stopDrumRollEvent(){
    audio_drum_roll.pause();
    gif_drum_roll.style.display = 'none';
    img_drum_roll.style.display = 'block';  
}

function popBallon(){
	btn_pop_ballon.setAttribute('disabled',"disabled");
    setTimeout(() =>{
        needle.style.left = "60vw";
    }, 500);
    setTimeout(() =>{
        needle.style.left = "55vw";
    }, 800);
    setTimeout(() =>{
        needle.style.left = "50vw";
    }, 1200);
    setTimeout(() =>{
        needle.style.left = "45vw";
    }, 1500);
    setTimeout(() =>{
        needle.style.left = "40vw";
    }, 1800);
    setTimeout(() =>{
        needle.style.left = "35vw";
    }, 2100);
    setTimeout(() =>{
        needle.style.left = "30vw";
    }, 2400);
    setTimeout(() =>{
        needle.style.left = "25vw";
    }, 2700);
    setTimeout(() => {
        stopDrumRollEvent();
        audio.play();
        mainSvg.style.visibility = "hidden";
        secondSvg.style.visibility = "visible";
    }, 2800);

    setTimeout(() => {
        thirdSvg.style.visibility = "visible";
    },3100);
    setTimeout(() =>{
        showStep3();
    }, 3400);
}
