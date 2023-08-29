import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../'
import '../styles/findUsPage.scss'; // Import the new styling file
import findusImg from '/Users/keyan/Desktop/coding/personal_projects/rice-and-shine/my-catering-website/src/assets/images/home_page_image.png'


const FindUsPage: React.FC = () => {
    return (
     <div className = 'page-container'>
        <img className = 'top-img' src= {findusImg} ></img>
             <section id="find-us">
           <div className ='findus-image'></div>
               <h3>Find Us...</h3>
                         <div id = 'display-info'>
                             <h2>Boulder Farmer Market</h2>
                             <h4>8:30am-2pm on Saturdays</h4>
                             <h4>4pm-8pm on Wednesdays</h4>
                         </div>
             </section>
     </div>
  );
};

export default FindUsPage;

