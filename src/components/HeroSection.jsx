import React from 'react';




const HeroSection = () => {
    return(
        <section className="heroSection">
            <div className="container ">
            <div className="row d-flex align-items-center content">
                <div className="col-md-6 right-side">
                    <h1>At Glade Foundation</h1>
                    <p>we're committed to helping those affected by COVID-19. Join us in our mission to provide relief and assistance to those in need.</p>
                    <button>Donate Now</button>
                </div>
                <div className="col-md-6 left-side">
                    <img className="img-fluid" src="./img/FAC.png" alt="img" />
                </div>
            </div>
            </div>
        </section>
    )
}

export default HeroSection;