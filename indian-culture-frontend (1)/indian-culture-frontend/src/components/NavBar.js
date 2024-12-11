// import React from 'react';
// import { Link } from 'react-router-dom';
// import './NavBar.css';

// const NavBar = () => {
//     return (
//         <nav className="navbar">
//             <div className="navbar-logo">
//                 <Link to="/">
//                     <i className="fas fa-landmark"></i> Indian Culture
//                 </Link>
//             </div>
//             <ul className="navbar-links">
//                 <li>
//                     <Link to="/">
//                         <i className="fas fa-home"></i> Home
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/attractions">
//                         <i className="fas fa-map-marked-alt"></i> Attractions
//                     </Link>
//                 </li>
//                 <li className="dropdown">
//                     <span className="dropdown-title">
//                         <i className="fas fa-calendar-alt"></i> Events & Festivals
//                     </span>
//                     <ul className="dropdown-menu">
//                         <li>
//                             <Link to="/calendar">
//                                 <i className="fas fa-calendar"></i> Holidays Calendar
//                             </Link>
//                         </li>
//                         <li>
//                             <Link to="/festivals">
//                                 <i className="fas fa-umbrella-beach"></i> Festivals
//                             </Link>
//                         </li>
//                         <li>
//                             <Link to="/events">
//                                 <i className="fas fa-microphone"></i> Events
//                             </Link>
//                         </li>
//                     </ul>
//                 </li>
//                 <li>
//                     <Link to="/blog">
//                         <i className="fas fa-blog"></i> Blogs
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/contact">
//                         <i className="fas fa-envelope"></i> Contact Us
//                     </Link>
//                 </li>
//             </ul>
//             <div className="btn read-more-btn">
//                 <a href="/login">
//                     <i className="fas fa-sign-in-alt"></i> Login
//                 </a>
//             </div>
//         </nav>
//     );
// };

// export default NavBar;























import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the user is logged in (this could be from localStorage, sessionStorage, or context)
        const token = localStorage.getItem('authToken'); // Example: check if there's a token stored
        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const handleLogout = () => {
        // Clear authentication token or session
        localStorage.removeItem('authToken'); // Example: removing the token from localStorage
        setIsLoggedIn(false); // Update the state
        navigate('/login'); // Redirect to the login page
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <i className="fas fa-landmark"></i> Indian Culture
                </Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/">
                        <i className="fas fa-home"></i> Home
                    </Link>
                </li>
                <li>
                    <Link to="/attractions">
                        <i className="fas fa-map-marked-alt"></i> Attractions
                    </Link>
                </li>
                <li className="dropdown">
                    <span className="dropdown-title">
                        <i className="fas fa-calendar-alt"></i> Events & Festivals
                    </span>
                    <ul className="dropdown-menu">
                        <li>
                            <Link to="/calendar">
                                <i className="fas fa-calendar"></i> Holidays Calendar
                            </Link>
                        </li>
                        <li>
                            <Link to="/festivals">
                                <i className="fas fa-umbrella-beach"></i> Festivals
                            </Link>
                        </li>
                        <li>
                            <Link to="/events">
                                <i className="fas fa-microphone"></i> Events
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/blog">
                        <i className="fas fa-blog"></i> Blogs
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        <i className="fas fa-envelope"></i> Contact Us
                    </Link>
                </li>
            </ul>
            <div className="btn read-more-btn">
                {!isLoggedIn ? (
                    <Link to="/login">
                        <i className="fas fa-sign-in-alt"></i> Login
                    </Link>
                ) : (
                    <button onClick={handleLogout}>
                        <i className="fas fa-sign-out-alt"></i> Logout
                    </button>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
