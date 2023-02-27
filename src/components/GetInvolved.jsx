import React from 'react';




const GetInvolved = () => {
    return(
        <section className="GetInvolved">
            <div className="container ">
            <div className="row headline d-flex align-items-center">
                <div className="col-md-6 left-side">
                    <p>Get Involved</p>
                    <h1>We Believe We Can <span> Safe <br /> More lives With You </span></h1>
                </div>
                <div className="col-md-6 right-side pt-3">
                    <p>So far, We have been able to provide trusted donation services  for people world wide to support numerous people and organisation</p>
                </div>
            </div>
            <div className="row involvments">
                <div className="col-md-4 involvementBox">
                    <div className="iconBox">
                    <svg height="24" viewBox="0 0 24 24" width="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.726 13.02 14 16H9v-1h4.065a.5.5 0 0 0 .416-.777l-.888-1.332A1.995 1.995 0 0 0 10.93 12H3a1 1 0 0 0-1 1v6a2 2 0 0 0 2 2h9.639a3 3 0 0 0 2.258-1.024L22 13l-1.452-.484a2.998 2.998 0 0 0-2.822.504zm1.532-5.63c.451-.465.73-1.108.73-1.818s-.279-1.353-.73-1.818A2.447 2.447 0 0 0 17.494 3S16.25 2.997 15 4.286C13.75 2.997 12.506 3 12.506 3a2.45 2.45 0 0 0-1.764.753c-.451.466-.73 1.108-.73 1.818s.279 1.354.73 1.818L15 12l4.258-4.61z"/></svg>
                    </div>
                    <h3>Start Donating</h3>
                    <p>Your donation can make a difference in the lives of those affected by COVID-19. With your help, we can provide critical support to those in need, including healthcare workers, families struggling to make ends meet, and communities facing the impacts of this pandemic.</p>
                </div>
                <div className="col-md-4 involvementBox">
                    <div className="iconBox">
                        <i className="fa-solid fa-circle-dollar-to-slot"></i>
                    </div>
                    <h3>Easy Fundraise</h3>
                    <p>Looking for an easy way to support those affected by COVID-19? Consider starting a fundraiser! With our easy-to-use platform, you can create a personalized fundraising page in minutes and share it with your friends, family, and social media networks. </p>
                </div>
                <div className="col-md-4 involvementBox">
                    <div className="iconBox">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hearts" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.931.481c1.627-1.671 5.692 1.254 0 5.015-5.692-3.76-1.626-6.686 0-5.015Zm6.84 1.794c1.084-1.114 3.795.836 0 3.343-3.795-2.507-1.084-4.457 0-3.343ZM7.84 7.642c2.71-2.786 9.486 2.09 0 8.358-9.487-6.268-2.71-11.144 0-8.358Z"/>
                        </svg>
                    </div>
                    <h3>Become a Volunteer</h3>
                    <p>Want to make a difference in the fight against COVID-19? Become a volunteer today! Whether you have skills in healthcare, fundraising, or simply a desire to help, there are many ways you can get involved. By volunteering with us, you can make a direct impact on the lives of those affected by COVID-19, while also gaining valuable experience and making new connections.</p>
                </div>
            </div>
            <div className="row involvmentButton">
                <div className="col-md-12">
                    <button><i className="fa-solid fa-heart"></i>Donate Now</button>
                </div>
            </div>
            </div>
        </section>
    )
}

export default GetInvolved;