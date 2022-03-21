//https://bigfrontend.dev/problem/implement-basic-debounce

function debounce(func, delay) {
    let timeout;
    return function(...args) {
        let context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.call(context, ...args);
        }, delay);
    }
}

//React implementation as hook
//https://bigfrontend.dev/react/useDebounce

function useDebounce(val, delay) {
    const [debouncedVal, setDebouncedVal] = useState(val);

    useEffect(() => {
        let timeout = setTimeout(() => {
            setDebouncedVal(val);
        });

        return () => {
            clearTimeout(timeout);
        }
    }, [val, delay]);

    return debouncedVal;
}
