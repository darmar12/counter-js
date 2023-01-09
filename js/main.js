const initialCounter = 0;

const counter = createCounter(initialCounter);
const view = renderView({
    IncrementClickBtn: IncrementClickBtn, 
    DecrementClickBtn: DecrementClickBtn, 
    ResetClickBtn: ResetClickBtn
});

view.render(counter.get());

function IncrementClickBtn() {
    counter.increment();
    view.render(counter.get());
}

function DecrementClickBtn() {
    counter.decrement();
    view.render(counter.get());
}

function ResetClickBtn() {
    counter.reset();
    view.render(counter.get());
}