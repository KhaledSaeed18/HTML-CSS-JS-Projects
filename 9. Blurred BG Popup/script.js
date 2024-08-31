const btnEl = document.querySelector('.btn');
const containerEl = document.querySelector('.container');
const popupContainerEl = document.querySelector('.popup-container');
const closeEl = document.querySelector('.close');

btnEl.addEventListener('click', () => {
    containerEl.classList.add('active');
    popupContainerEl.classList.remove('active');
});

closeEl.addEventListener('click', () => {
    popupContainerEl.classList.add('active');
    containerEl.classList.remove('active');
});
