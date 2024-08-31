const textareaEl = document.getElementById('area');
const totalCounterEl = document.getElementById('total-counter');
const remainingEl = document.getElementById('remaining-counter');
const resetEl = document.getElementById('reset');

textareaEl.addEventListener('keydown', () => {
    updateCounter();
});

resetEl.addEventListener('click', () => {
    textareaEl.value = '';
    updateCounter();
});

updateCounter();

function updateCounter() {
    totalCounterEl.innerText = textareaEl.value.length;
    remainingEl.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}