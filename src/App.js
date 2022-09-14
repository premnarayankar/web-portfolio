import React, { lazy, Suspense, useRef } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Navbar = lazy(() => import("./components/Navbar"));
const Homepage = lazy(() => import("./components/Homepage"));
const SingleProject = lazy(() => import("./components/SingleProject"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div
            style={{
              width: "100vw",
              height: "100vh",
              display: "grid",
              placeItems: "center",
            }}
          >
            <h1 style={{ fontSize: "5vw" }}>L😛 😝 😜 🤪AD❕NG</h1>
          </div>
        }
      >
        <Navbar refList={{ homeRef, aboutRef, projectRef, contactRef }} />
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                refList={{ homeRef, aboutRef, projectRef, contactRef }}
              />
            }
          />
          <Route path="projects/:projectId" element={<SingleProject />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
