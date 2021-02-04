import React, { useState, useEffect } from "react";
import firebase from "./firebase";

export default function useDownloadUrl(path) {
  const [url, setUrl] = useState();
  const storage = firebase.storage();

  useEffect(() => {
    storage.ref(path).getDownloadURL().then(setUrl);
  }, [path]);

  return url;
}
