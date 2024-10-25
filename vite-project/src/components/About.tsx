import { useState, useEffect } from "react";

export function About() {
  const [about, setAbout] = useState<string>('Loading...');
  const [color, setColor] = useState<string>();

  function handleColorChange() {
    const nextColor = color === 'red' ? 'green' : 'red';
    setColor(nextColor);
  }

  useEffect(() => { 
    // Simulate fetching data with a Promise
    const fetchAbout = new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve('Hello World!');
      }, 2000); // 2-second delay
    });

    // Use the Promise to update `about` once resolved
    fetchAbout.then((data) => {
      setAbout(data);
    });
  }, []);

  return (
    <>
      <p>{about}</p>
      <button onClick={handleColorChange}>Change Color</button>
      <p>The current color is: {color}</p>
    </>
  );
}
