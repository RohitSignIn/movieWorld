function useDebounce(callback, delay=500){
    let timerId;
    return (...args) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            callback(...args);
        }, delay)
    }
}

export default useDebounce;