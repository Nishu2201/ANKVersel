
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Components/HomePage/Home/Home';
import Footer from './Components/Footer/Footer/Footer';
import { About } from './Components/About/About/About';
import { Whyus } from './Components/WhyUs/Whyus/Whyus';
import Product from './Components/Products/Product/Product';
import { Contact } from './Components/Contact/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/whyus' element={<Whyus/>}/>
      <Route path='/products' element={<Product/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
