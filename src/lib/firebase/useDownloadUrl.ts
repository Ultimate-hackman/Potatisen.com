import { useState, useEffect } from "react";
import { storage } from "./firebase";

export default function useDownloadUrl(path: string): string {
  const [url, setUrl] = useState();

  useEffect(() => {
    storage.ref(path).getDownloadURL().then(setUrl);
  }, [path]);

  return url;
}
