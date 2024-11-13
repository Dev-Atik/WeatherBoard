import { useEffect, useState } from "react";

const useLocalStorage = (storageKye, defaultValue) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(storageKye)) ?? defaultValue
  );

  useEffect(() => {
    localStorage.setItem(storageKye, JSON.stringify(value));
  }, [storageKye, value]);

  return [value, setValue];
};

export default useLocalStorage;
