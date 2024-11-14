import { useRef } from "react";

const useDebounce = (callback, delay) => {
  let timeoutId = useRef();

  const debounceCallback = (...arg) => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    timeoutId.current = setTimeout(() => {
      callback(...arg);
    }, delay);
  };
  return debounceCallback;
};

export default useDebounce;
