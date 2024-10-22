import { useState,  useEffect } from "react";

export function About() {
  let [about, setAbout] = useState('Loading...');
  
  useEffect(() => {
    setAbout('Hello World!');
  }, []);
 
  return (
    <>
      <p>{about}</p>
    </>
  );
}
