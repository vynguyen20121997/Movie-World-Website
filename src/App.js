import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Compoment/Navbar/Navbar";
import HomePage from "./Compoment/HomePage";
import Footer from "./Compoment/Footer/Footer";
import { AnotherCarousel } from "./Compoment/Body/Test/AnotherCarousel";
import MovieDetailPage from "./Compoment/MovieDetailPage";
import LoginPage from "./Compoment/LoginPage";
import SignupPage from "./Compoment/SignupPage";

function App() {
  return (
    <div className="App" style={{backgroundColor:"black", 
    width: '100%',
    minHeight:' 100vh'}}>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/e" element={<AnotherCarousel/>} />
          {/* <Route path="/t" element={<MainCarusel/>} /> */}
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignupPage/>} />

          <Route path="/movies/:movieId" element={<MovieDetailPage/>} />

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
