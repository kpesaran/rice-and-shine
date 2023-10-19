import { useEffect, useRef, useState } from 'react';
import './nav.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 

function Nav() {
  const [open, setOpen] = useState<boolean>(false);
  const mobileMenu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mobileMenu.current) {
      mobileMenu.current.style.display = open ? 'flex' : 'none';
    }
  }, [mobileMenu, open]);

  return (
    <>
      <nav className='desktop-nav'>
             {/* <BrowserRouter>
              <Routes>
                <Route path="/" element ={<Home/>}> 
                </Route>
                <Route path="/about" element ={<About/>}> 
                </Route>
              </Routes>
            </BrowserRouter > */}
            <BrowserRouter>
         <Routes>
         <Route path="/" element ={<Home/>}> <button>home</button></Route>
        <button>about</button>
        <button>find us</button>
        <button>services</button>
        <button>contact us</button>
        </Routes>
            </BrowserRouter >
      </nav>
      <nav className='mobile-nav'>
        <button onClick={() => setOpen(!open)}>
          <span className='material-symbols-outlined btn'>
            {open ? 'close' : 'menu'}
          </span>
        </button>
        <div ref={mobileMenu} className='menu'>
          <button>home</button>
          <button>about</button>
          <button>find us</button>
          <button>services</button>
          <button>contact us</button>
        </div>
      </nav>
    </>
  );
}

export default Nav;
