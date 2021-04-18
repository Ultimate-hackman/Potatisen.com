import { useState, useEffect } from "react";

function useData(url: string): any[] {
  const [item, setItem] = useState([]);
  useEffect(() => {
    async function apiFetch() {
      const response = await (await fetch(url)).json();
      setItem(response);
    }
    apiFetch();
  }, []);

  return item;
}

export default useData;
