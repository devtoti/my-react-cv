import { StrictMode } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";

import App from "./App";
import Education from "./routes/Education";
import Languages from "./routes/Languages";
import Projects from "./routes/Projects";
import Project from "./routes/project";
import Technologies from "./routes/Technologies";
import Contact from "./routes/Contact";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="education" element={<Education />} />
          <Route path="languages" element={<Languages />} />
          <Route path="technologies" element={<Technologies />} />
          <Route path="projects" element={<Projects />}>
            {/* <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select a project</p>
                </main>
              }
            /> */}
            <Route path=":id" element={<Project />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "2rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
