import React from 'react';



const Header = () => {
  // const mobileMenu = () => {
  //   const navBtn = document.getElementById('navButton');
  //   const navIcon = document.getElementById('navIcon');

  //   navBtn.onclick( function (){
  //     navIcon.toggleAttribute.classList.remove("fa-bars");
  //     navIcon.toggleAttribute.classList.add("fa-xmark");
  //   })
  // }

  
    return(
        <header className="sticky-top">
            <nav className="container navbar navbar-expand-lg navbar-light" id="navBar">
            <a className="navbar-brand" href="#HeroSection">Glade<span>Fundation</span></a>
            <button   className="navbar-toggler justify-content-center" id="navButton" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"           aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i id="navIcon" className="fa-solid fa-bars"></i>
            </button>

            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#HeroSection">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#About">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Impact">Need Help?</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#GetInvloved">Get Involved</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Resources">Be Safe</a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <button data-toggle="modal" data-target="#donate" className="btn btn-primary justify-content-end" type="submit">Donate Now</button>
            </form>
            </div>
          </nav>
        </header>
    )
}

export default Header;