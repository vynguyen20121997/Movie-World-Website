import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Compoment/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
