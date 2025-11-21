import { StrictMode } from 'react';
import ReactDom from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './index.css'
import HomePage from './landing_page/home/HomePage';
import About from './landing_page/about/About';
import PricingPage from './landing_page/pricing/PricingPage';
import Universe from './landing_page/products/Universe';
import Signup from './landing_page/signup/Signup';
import SupportPage from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from "./landing_page/NotFound";


const root=ReactDom.createRoot(document.getElementById("root"));
root.render(
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path="/" element={<HomePage/>}></Route>
  <Route path="signup" element={<Signup/>}></Route>
  <Route path="about" element={<About/>}></Route>
  <Route path="pricing" element={<PricingPage/>}></Route>
  <Route path="support" element={<SupportPage/>}></Route>
  <Route path="products" element={<Universe/>}></Route>
  <Route path="*" element={<NotFound/>}></Route>
  </Routes>
  <Footer/>
</BrowserRouter>
);
