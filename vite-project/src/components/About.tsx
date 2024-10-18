import { useState } from "react";

export function About() {

  let [about, setAbout] = useState('Loading');
  setAbout('Test');
  return (
    <>
      <p>{about}</p>
    </>
  );
}
