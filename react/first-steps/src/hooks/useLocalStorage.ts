import { useEffect, useState } from "react";

export function useLocalStorage<S>(key: string, initialValue: S): [S, (newValue: S) => void] {
  const [storageItem, setStorageItem] = useState(initialValue);

  const saveItem = (newValue: S) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setStorageItem(newValue);
  }

  useEffect(() => {
    const data = localStorage.getItem(key);
    if (!data) {
      localStorage.setItem(key, JSON.stringify(initialValue))
      setStorageItem(initialValue)
    } else {
      setStorageItem(JSON.parse(data));
    }
  }, [])

  return [
    storageItem,
    saveItem,
  ]
}