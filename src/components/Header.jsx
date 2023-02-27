import React from 'react';



const Header = () => {
    return(
        <header>
            <nav className="container navbar navbar-expand-lg navbar-light" id="navBar">
            <a className="navbar-brand" href="#"><span>Glade</span><span>Fundation</span></a>
            <button className="navbar-toggler justify-content-center" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"           aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fa-solid fa-bars"></i>
            </button>

            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"           aria-haspopup="true" aria-expanded="false">
                    Dropdown
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
              </ul>
            </div>
            <form className="form-inline my-2 my-lg-0">
                <button className="btn btn-primary " type="submit">Donate Now</button>
            </form>
          </nav>
        </header>
    )
}

export default Header;