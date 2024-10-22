import { useState,  useEffect } from "react";

export function About() {
  let [about, setAbout] = useState<string>('Loading...');
  const [color, setColor] = useState<string>();

function handleColorChange(){
  const nextColor = color === 'red' ? 'green' : 'red';
  setColor(nextColor);
}


  useEffect(() => { 
    setAbout('Hello World!');  
  }, []);
 
  return (
    <>
      <p>{about}</p>
      <button onClick={handleColorChange}>Change Color</button>
      <p>The current color is: {color}</p>
    </>
  );
}
