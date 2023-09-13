import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ServicesPage from './components/ServicesPage';
import TestimonialsPage from './components/TestimonialsPage';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import MenuPage from './components/MenuPage';
import ShopPage from './components/ShopPage';
import FindUsPage from './components/FindUsPage';
import productList, { Product } from './assets/productData';

import './styles/global.scss';
//maintain shopping cart state here through useContext...
//2 parts to useContext,, provider and consumer
// root level you can maintain the state with the provider... and then at any level you can access this state through the consumer....

const App: React.FC = () => {
  function unk() {
    return;
  }
  return (
    <div id='page'>
      <BrowserRouter>
        <div className='outer-container'>
          <div className='middle-container'>
            <div className=' inner-container'>
              <div className = 'inner-inner-container'>
                <NavBar />
                <Routes>
                  <Route path='/' element={<HomePage />} />
                  <Route path='/about' element={<AboutPage />} />
                  <Route path='/findus' element={<FindUsPage />} />
                  {/* <Route path="/menu" element={<MenuPage />} /> */}
                  <Route path='/contact' element={<ContactPage />} />
                  <Route path='/services' element={<ServicesPage />} />
                  <Route path='/testimonials' element={<TestimonialsPage />} />
                  <Route
                    path='/shop'
                    element={
                      <ShopPage
                        products={productList}
                        itemCount={0}
                        onAddItem={unk}
                        toggleMini={true}
                      />
                    }
                  />
                </Routes>
                            </div>
                          </div>
                        </div>
              </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
