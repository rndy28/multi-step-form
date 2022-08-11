import "normalize.css";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "App";
import type {} from "styled-components/cssprop";

const root = createRoot(document.getElementById("root") as HTMLElement);

//! react strict mode causing useeffect run twice resulting in appending input onmount happened twice
//! component thats affected by this: WorkExperience.tsx, Education.tsx, Skills.tsx
//! only happen when strict mode is enabled
// google search: https://www.google.com/search?q=why+react+strict+mode+causing+useeffect+run+twice&oq=why+react+strict+mode+causing+useeffect+run+twice&aqs=chrome..69i57.12756j0j4&sourceid=chrome&ie=UTF-8

root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <App />
);
