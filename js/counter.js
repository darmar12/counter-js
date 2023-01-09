function createCounter (initialCounter) {
    return {
        counter: initialCounter,
        increment: function () {
            this.counter++;
        },
        decrement: function () {
            this.counter--;
        },
        reset: function () {
            this.counter = initialCounter;
        },
        get: function () {
            return this.counter;
        }
    }
}