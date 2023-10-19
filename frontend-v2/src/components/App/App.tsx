import Home from '../Home/Home';
import About from '../About/AboutPage'
import Nav from './Nav';
import './app.scss';
import insta_logo from '/images/Instagram_Glyph_Black.png';
import contact_logo from '/images/contact-icon.png';
import { BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className='b-blue b-6'>
      <div className='b-yellow b-6'>
        <div className='b-pink b-6'>
          <div className='b-blue b-6'>
            <header className='header'>
              <div className='main'>
                <hgroup className='title'>
                  <h1>Rice & Shine</h1>
                  <p>a paella stand & catering service</p>
                </hgroup>

                <Nav />
              </div>

              <hr className='b-blue b-3' />
              <hr className='b-yellow b-3' />
              <hr className='b-pink b-3' />
            </header>
            {/* <BrowserRouter>
              <Routes>
                <Route path="/" element ={<Home/>}> 
                </Route>
                <Route path="/about" element ={<About/>}> 
                </Route>
              </Routes>
            </BrowserRouter > */}
            <Home />
            <hr className='b-blue b-3' />
            <hr className='b-yellow b-3' />
            <hr className='b-pink b-3' />

            <footer className='footer'>
              <div className='brand'>
                <h6>Rice & Shine</h6>
                <p>A Paella Stand in Boulder, Co</p>
              </div>
              <a href='http://instagram.com'>
                <img src={insta_logo} />
              </a>
              <a href='/contact'>
                <img src={contact_logo}></img>
              </a>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
