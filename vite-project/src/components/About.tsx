import { useState } from "react";

export function About() {

  let [about, setAbout] = useState('');
  setAbout('Test');
  return (
    <>
      <p>{about}</p>
    </>
  );
}
