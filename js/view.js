function renderView ({IncrementClickBtn, DecrementClickBtn, ResetClickBtn}) {
    const counterContainer = document.querySelector(".js-counter");
    const incrementBtn = document.querySelector(".js-increment");
    const decrementBtn = document.querySelector(".js-decrement");
    const resetBtn = document.querySelector(".js-reset");

    incrementBtn.addEventListener("click", IncrementClickBtn);
    decrementBtn.addEventListener("click", DecrementClickBtn);
    resetBtn.addEventListener("click", ResetClickBtn);

    return {
        render(counter) {
            counterContainer.innerHTML = counter;
        }
    }
}