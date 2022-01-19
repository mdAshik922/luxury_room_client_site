import React from 'react';
import { Link } from 'react-router-dom';
import map from './img/map-pin-2-fill.png'
import facebook from './img/Vector.png'
import instagram from './img/Vector-1.png'
import linkedin from './img/Vector-2.png'
import youtube from './img/Vector-3.png'
const Footer = () => {
    return (
        <section style={{backgroundColor: "black", color: "whitesmoke"}}>
            <div >
  <div className="row">
    <div style={{marginTop: "15px"}} className="col-sm">
    <img width="10%" src={map} alt="map"/> H#000(oth Floor), Road #00.
     New DOHS, Mohakhali, Dhaka, Bangladesh
    </div>
    <div style={{marginTop: "5px"}} className="col-sm">
      <h3>Company</h3>
    <Link to="#" style={{ textDecoration: 'none', color:"whitesmoke" }}>About</Link>
    <br/>
    <Link to="#" style={{ textDecoration: 'none', color:"whitesmoke" }}>Project</Link>
    <br/>
    <Link to="#" style={{ textDecoration: 'none', color:"whitesmoke" }}>Our Team</Link>
    <br/>
    <Link to="#" style={{ textDecoration: 'none', color:"whitesmoke" }}>Terms Conditions</Link>
    <br/>
    <Link to="#" style={{ textDecoration: 'none', color:"whitesmoke" }}>Submit Listing</Link>
    
    </div>
    <div style={{marginTop: "5px"}} className="col-sm">
  <h3>Quick Links</h3>
  <Link to="#" style={{ textDecoration: 'none', color:"whitesmoke" }}>Quick Links</Link>
  <br/>
  <Link to="#" style={{ textDecoration: 'none', color:"whitesmoke" }}>Rentals</Link>
  <br/>
  <Link to="#" style={{ textDecoration: 'none', color:"whitesmoke" }}>Sales</Link>
  <br/>
  <Link to="#" style={{ textDecoration: 'none', color:"whitesmoke" }}>Contact</Link>
  <br/>
  <Link to="#" style={{ textDecoration: 'none', color:"whitesmoke" }}>Our Blog</Link>
  <br/>
    </div>
    <div style={{marginTop: "5px"}} className="col-sm">
  <h3>About us</h3>
  <p>Bookyourluxuryhotelsuite.com is website with a mission to educate the public in 
    relation to luxury hotel suites. Luxury accommodations are our passions.</p>
  <Link to="https://www.facebook.com/"><img width="10%" style={{marginRight: "5px"}} src={facebook} alt="facebook"/></Link>
  <Link to="https://www.instagram.com/"><img width="10%" style={{marginRight: "5px"}}  src={instagram} alt="instagram"/></Link>
  <Link to="https://www.linkedin.com/"><img width="10%"  style={{marginLeft: "5px"}} src={linkedin} alt="linkedin"/></Link>
  <Link to="https://www.youtube.com/"><img width="10%" style={{marginLeft: "5px"}} src={youtube} alt="youtube"/></Link>
    </div>
  </div>

<div style={{marginTop: "15px"}}>
<p >Luxury-Living&copy;Copy right 2021</p>
</div>
</div>
        </section>
    );
};

export default Footer;