import "./App.css";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Animate from "../src/utils/Animate";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Animate>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            {/* <Route path="/*" element={<Notfound />} /> */}
          </Routes>
        </BrowserRouter>
      </Animate>
    </>
  );
};

export default App;
