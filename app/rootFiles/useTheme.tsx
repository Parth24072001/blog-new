import { useEffect } from "react";

export function useTheme() {
  useEffect(() => {
    const storedItem = localStorage.getItem("Mode");
    if (storedItem) {
      document.body.classList.add(storedItem);
    } else {
      document.body.classList.add("default-mode");
    }
  }, []);
}
