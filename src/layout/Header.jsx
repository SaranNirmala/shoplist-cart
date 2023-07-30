import React, { useState } from "react";

const Header = ({ wishCount }) => {
    const [showNav, setShownav] = useState(false);

    return (
        <nav className="navbar navbar-expand-md navber-light bg-light">
            <div className="container px-4 px-md-5">
                <a href='#!' className='navbar-brand'><span className='text-span'>Start Bootstrap</span></a>
                <button className='navbar-toggler collapsed' type='button' data-bs-toggle='collapse' data-bs-target="#main-nav" aria-expanded="false" aria-controls='main-nav' aria-label='Toggle-navigation' onClick={(e) => {
                    e.preventDefault();
                    console.log('Submit');
                    setShownav(!showNav)
                }} >
                    <span className="navbar-toggler-icon" ></span>
                </button>
                {/* navbar links */}
                <div className={showNav ? "navbar-collapse collapse show" : "navbar-collapse collapse"} id='main-nav'>
                    <ul className="navbar-nav me-auto mb-2 mb-md-0 ms-md-4">
                        <li className="nav-item"><a className="nav-link" href="#!">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                        <li className="nav-item dropdown"><a className="nav-link" href="#!">Shop<i className="fa-solid fa-caret-down fa-0.5px"></i></a></li>
                    </ul>
                    {/* <form className='d-flex'> */}
                    <button className='btn btn-outline-dark' type='submit' >
                        <i className="fa-solid fa-cart-shopping"></i> Cart <span className="badge bg-dark text-white ms-1 rounded-pills">{wishCount}</span>
                    </button>

                    {/* </form> */}
                </div>
            </div>
        </nav>
    );
}
export default Header;