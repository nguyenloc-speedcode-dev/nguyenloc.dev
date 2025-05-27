"use client";

import { useState } from "react";

function useLocalStorage<T>(key: string, initialValue?: T) {
  const isLocalStorageAvailable =
    typeof window !== "undefined" && window.localStorage;

  const storedValue = isLocalStorageAvailable
    ? localStorage.getItem(key)
    : null;

  const initial: T | undefined = storedValue
    ? JSON.parse(storedValue)
    : initialValue;

  const [value, setValue] = useState<T | undefined>(initial);

  const setStoredValue = (newValue: T) => {
    setValue(newValue);
    if (isLocalStorageAvailable) {
      localStorage.setItem(key, JSON.stringify(newValue));
    }
  };

  return [value, setStoredValue] as const; // trả về tuple readonly
}

export default useLocalStorage;
