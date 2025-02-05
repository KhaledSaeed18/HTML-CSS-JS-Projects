const kits = ["crash", "kick", "snare", "tom"];
const divEl = document.querySelector(".container");

kits.forEach(kit => {
    const btnEl = document.createElement("button");
    btnEl.classList.add("btn");
    btnEl.innerText = kit;
    btnEl.style.backgroundImage = "url(images/" + kit + ".png)";
    divEl.appendChild(btnEl);

    const audioEl = document.createElement("audio");
    audioEl.src = "sounds/" + kit + ".mp3";
    divEl.appendChild(audioEl);

    btnEl.addEventListener("click", () => {
        audioEl.play();
    })

    window.addEventListener("keydown", (e) => {
        if (e.key === kit.slice(0, 1)) {
            audioEl.play();
            btnEl.style.color = "pink";
            btnEl.style.transform = "scale(.9)";
            setTimeout(() => {
                btnEl.style.color = "black";
                btnEl.style.transform = "scale(1)";
            }, 300)
        }
    })
});
