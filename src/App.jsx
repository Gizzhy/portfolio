import "./App.css";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/*" element={<Notfound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
