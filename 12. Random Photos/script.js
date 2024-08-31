const imgContaineEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");
btnEl.addEventListener('click', () => {
    addNewImages();

});

function addNewImages() {
    for (let index = 0; index < 2; index++) {
        const newImgEl = document.createElement("img");
        let rand = Math.floor(Math.random() * 2000);
        newImgEl.classList.add("animate__animated");
        newImgEl.classList.add("animate__tada");
        newImgEl.src = `https://picsum.photos/300/300?random=${rand}`;
        imgContaineEl.appendChild(newImgEl);
    }
}


