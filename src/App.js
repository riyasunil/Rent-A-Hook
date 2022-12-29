import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop';

import RoutesURL from './RoutesURL';
import {Routes, Route } from "react-router-dom";
import Footer from './components/Footer';



function App() {
  return (
   
   <div>
    
    <Header />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/shop" element={<Shop />} />
    </Routes>
    <Footer />
    
    
    
   </div>
  );
}

export default App;
