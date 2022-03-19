//https://bigfrontend.dev/problem/implement-basic-debounce

function debounce(func, delay) {
    let timeout;
    clearTimeout(timeout);
    return function() {
        let context = this;
        let args = arguments;
        timeout = setTimeout(() => {
            func.call(context, ...args);
        }, delay);
    }
}

