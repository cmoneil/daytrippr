import React from "react";
import Icon from"./icons/poweredby.png"

const Footer = () => (
  <footer className="footer">
    <div className="container-fluid" style={{backgroundColor: "#fff", paddingBottom: 3}}>
      <p className="text-center" style={{paddingTop: 3, marginBottom: 1}}><a href="mailto:conor@theconoroneil.com?Subject=Daytrippr%20link">Created by Conor O&apos;Neil</a></p>
      <p className="text-center" style= {{marginBottom: 1}}><a href="https://darksky.net/poweredby/"><img alt="Dark Sky" style={{height: "3rem"}}src={Icon}/></a><a href="https://developers.google.com/places/web-service/search" alt="Google Places"> Google Places</a>,<a href="https://www.yelp.com/developers"> Yelp</a>, <a href="https://platform.seatgeek.com/>">SeatGeek</a> & Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> </p>
      </div>
  </footer>

)
export default Footer;
