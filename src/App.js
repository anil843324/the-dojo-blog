import Home from "./Home";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Create from "./Create";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </>
  );
}

export default App;
