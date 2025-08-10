import { Link } from 'react-router-dom';
import Logo from '../../asserts/images/logo.png';

import CountryDropdown from '../CountryDropdown';
import Navigation from './Navigation';

import Button from '@mui/material/Button';
import { FaUser, FaShoppingCart } from "react-icons/fa";
import SearchBox from './SearchBox';
import { MyContext } from '../../App';
import { useContext, useState, useRef, useEffect } from 'react';

const Header = () => {
    const cartCount = 5; // Example static count; make this dynamic based on your logic
    const context = useContext(MyContext);

    const [showUserDropdown, setShowUserDropdown] = useState(false);
    const userDropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
                setShowUserDropdown(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="container">
                <div className="headerWrapper">
                    {/* Top strip message */}
                    <div className="top-strip bg-purple">
                        <div className="container">
                            <p className="mb-0 mt-0 text-center">Welcome! Experience Shopping Like Never Before!</p>
                        </div>
                    </div>

                    {/* Main Header */}
                    <header className="header">
                        <div className="container">
                            <div className="row">
                                {/* Logo Section */}
                                <div className="logoWrapper d-flex align-items-center col-sm-2">
                                    <Link to="/">
                                        <img src={Logo} alt="Company Logo" />
                                    </Link>
                                </div>

                                {/* Middle Section: Dropdown + Search */}
                                <div className="col-sm-8 d-flex align-items-center part2">
                                    {context.countryList.length !== 0 && <CountryDropdown />}
                                    <SearchBox />
                                </div>

                                {/* User and Cart Icons */}
                                <div className="col-sm-2 d-flex align-items-center justify-content-end">
                                    <div className="part3 d-flex align-items-center" ref={userDropdownRef}>
                                        <Button onClick={() => setShowUserDropdown(v => !v)} style={{ position: "relative" }}>
                                            <FaUser />
                                        </Button>
                                        {showUserDropdown && (
                                            <div className="user-dropdown-menu">
                                                <Link to="/user/login" style={{ textDecoration: "none" }}>
                                                    <button type="button" className="user-dropdown-btn">Login</button>
                                                </Link>
                                                <Link to="/user/register" style={{ textDecoration: "none" }}>
                                                    <button type="button" className="user-dropdown-btn">Register</button>
                                                </Link>
                                                <Link to="/user/profile" style={{ textDecoration: "none" }}>
                                                    <button type="button" className="user-dropdown-btn">Profile</button>
                                                </Link>
                                            </div>
                                        )}
                                        <Button className="cartBtn ml-3">
                                            <FaShoppingCart />
                                            {cartCount > 0 && (
                                                <span className="cart-count">{cartCount}</span>
                                            )}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* Navigation Links */}
                    <Navigation />
                </div>
            </div>
        </>
    );
};

export default Header;
