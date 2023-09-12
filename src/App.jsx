import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CountryDetailsPage from "./pages/CountryDetailsPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>LAB | React WikiCountries</h1>
      <div className="container pt-5">
        <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/:alpha3Code" element={<CountryDetailsPage /> }/>
        </Routes>
        
      </div>
    </div>
  );
}

export default App;
