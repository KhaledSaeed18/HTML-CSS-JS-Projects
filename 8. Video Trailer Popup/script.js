const btnEL = document.querySelector('.btn');
const closeEl = document.querySelector('.close');
const trailerContainerEl = document.querySelector('.trailer-container');
const videoEl = document.querySelector('video');

btnEL.addEventListener('click', () => {
    trailerContainerEl.classList.remove('active');
});

closeEl.addEventListener('click', () => {
    trailerContainerEl.classList.add('active');
    videoEl.pause();
    videoEl.currentTime = 0;
});

function names(){
    var names = ['dd','fuhvuh'];
    for(var i=0;i<names.length;i++){
        console.log();
    }
}