import React from 'react';



const Resources = () => {
    return(
      <div className="Resources" id="Resources">
      <div className="container">
        <div className="row headline">
          <div className="col-md-6 left-side">
              <p data-aos="fade-up" data-aos-delay="300">Looking Out for you</p>
              <h1 data-aos="fade-up" data-aos-delay="600">How To Protect Yourself</h1>
            </div>
          <div className="col-md-6">
          </div>
        </div>
          <div className="row d-flex align-items-center">
            <div  data-aos="zoom-in-up" className="col-md-6 left-side resourcesImg">
            </div>
            <div className="col-md-6 right-side pt-3">
                <div  data-aos="fade-right" data-aos-delay="100" className="content">
                  <h3><i className="fa-solid fa-syringe"></i>Get vaccinated:</h3>
                  <p>COVID-19 vaccines have been shown to be highly effective in preventing severe illness, hospitalization, and death. Get vaccinated as soon as possible if you are eligible.</p>
                </div>
                <div  data-aos="fade-right" data-aos-delay="400" className="content">
                  <h3><i className="fa-solid fa-mask-face"></i>Wear a mask:</h3>
                  <p>Wearing a mask can help reduce the spread of COVID-19. Wear a mask when you are in public, especially in indoor spaces where it may be difficult to maintain social distancing.</p>
                </div>
                <div  data-aos="fade-right" data-aos-delay="600" className="content">
                  <h3><i className="fa-solid fa-hands-bubbles"></i>Wash your hands frequently:</h3>
                  <p>Wash your hands with soap and water for at least 20 seconds, or use hand sanitizer when soap and water are not available.</p>
                </div>
                <div  data-aos="fade-right" data-aos-delay="900" className="content">
                  <h3><i className="fa-solid fa-house"></i>Stay home if you are feeling unwell:</h3>
                  <p>If you have symptoms of COVID-19 or have been in close contact with someone who has tested positive for COVID-19, stay home and get tested.</p>
                </div>
                <div  data-aos="fade-right" data-aos-delay="1200" className="content">
                  <h3><i className="fa-solid fa-box-tissue"></i>Practice good respiratory hygiene:</h3>
                  <p>Cover your mouth and nose with a tissue or your elbow when you cough or sneeze.</p>
                </div>
            </div>
          </div>
      </div>
  </div>
    )
}

export default Resources;