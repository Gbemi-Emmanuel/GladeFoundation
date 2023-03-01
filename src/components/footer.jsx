import React from 'react';




const Footer = () => {
    return(
        <div className="footer">
             <div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Contact</h3>
                        <ul>
                            <li>Vitoria Island, Lagos</li>
                            <li>Nigeria</li>
                            <br />
                            <li>Email: info@gladefoundation.com</li>
                            <li>Phone: +234 505 440 5000</li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item useful-links">
                        <h3>Usefull links</h3>
                        <ul>
                            <li><a href="#HeroSection"><i className="fa-solid fa-angle-right"></i>Home</a></li>
                            <li><a href="#About"><i className="fa-solid fa-angle-right"></i>About</a></li>
                            <li><a href="#Impact"><i className="fa-solid fa-angle-right"></i>Need Help?</a></li>
                            <li><a href="#GetInvloved"><i className="fa-solid fa-angle-right"></i>Get Involved</a></li>
                            <li><a href="#Resources"><i className="fa-solid fa-angle-right"></i>Be Safe</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3>Glade Fundation</h3>
                        <p>we're committed to helping those affected by COVID-19. Join us in our mission to provide relief and assistance to those in need.</p>
                    </div>
                    <div className="col item social"><a href="#HeroSection"><i className="fa-brands fa-facebook-f"></i></a><a href="#HeroSection"><i className="fa-brands fa-twitter"></i></a><a href="#HeroSection"><i className="fa-brands fa-whatsapp"></i></a><a href="#HeroSection"><i className="fa-brands fa-square-instagram"></i></a></div>
                </div>
                <p className="copyright">Glade Fundation © 2023</p>
            </div>
        </footer>
    </div>
        </div>
    )
}

export default Footer;