import React from 'react';




const About = () => {
    return(
        <div className="About" id="About">
            <div className="container">
                <div className="row headline">
                    <div className="col-md-6 left-side">
                        <p data-aos="fade-up">About Us</p>
                        <h1 data-aos="fade-up">Supporting Communities<span> Affected by COVID-19 </span></h1>
                    </div>
                    <div className="col-md-6">
                    </div>
                </div>
                <div className="row d-flex align-items-center">
                    <div className="col-md-6 left-side pt-3">
                        <img data-aos="zoom-in-up" className="img-fluid" src="./img/about.jpg" alt="about" />
                    </div>
                    <div className="col-md-6 pt-3 right-side">
                        <h1 data-aos="fade-left">Our Mission</h1>
                        <p data-aos="fade-left" data-aos-delay="300">At the Glade Foundation, our mission is to support and empower individuals and communities affected by the COVID-19 pandemic. We believe that everyone deserves access to essential resources, including food, shelter, medical supplies, and other critical support. Through our programs and services, we aim to provide hope, dignity, and a path forward to those who are struggling in these challenging times.</p>
                        <h1 data-aos="fade-left">Our Vision</h1>
                        <p data-aos="fade-left" data-aos-delay="300">Our vision is a world where everyone has access to the resources they need to thrive, regardless of their circumstances. We believe in the power of community, collaboration, and compassion to make a positive impact on the lives of others. By working together, we can overcome the challenges of COVID-19 and create a better, more resilient future for all.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;