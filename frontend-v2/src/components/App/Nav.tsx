import { useEffect, useRef, useState } from 'react';
import './nav.scss';

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
        <button>home</button>
        <button>about</button>
        <button>find us</button>
        <button>services</button>
        <button>contact us</button>
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
