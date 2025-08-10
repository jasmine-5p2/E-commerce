import React, { useState } from 'react';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { FaHome, FaStore, FaMobileAlt, FaTshirt, FaTags, FaUser } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Navigation = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <nav>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-3 navPart1'>
            <div className="catWrapper">
              <Button className='allCartTab align-items-center' onClick={toggleSidebar}>
                <span className="icon1 mr-2"><IoIosMenu /></span>
                <span className="text">All Categories</span>
                <span className="icon2 ml-2"><FaAngleDown /></span>
              </Button>
              <div className={`sidebarNav ${showSidebar ? 'open' : ''}`}>
                <ul>
                  <li>
                    <Link to="/mens"><Button>Men fashion<MdOutlineArrowDropDown className='ml-auto'/></Button></Link>
                    <div className='submenu'>
                      <Link to="/mens/clothing"><Button>Clothing</Button></Link>
                      <Link to="/mens/footwear"><Button>Footwear</Button></Link>
                      <Link to="/mens/accessories"><Button>Accessories</Button></Link>
                    </div>
                  </li>
                  <li><Link to="/"><Button>Women fashion<MdOutlineArrowDropDown className='ml-auto' /></Button></Link>
                    <div className='submenu'>
                      <Link to="/womens/clothing"><Button>Clothing</Button></Link>
                      <Link to="/womens/footwear"><Button>Footwear</Button></Link>
                      <Link to="/womens/accessories"><Button>Accessories</Button></Link>
                    </div>
                  </li>
                  <li><Link to="/watches"><Button>Watches</Button></Link>
                    <div className='submenu'>
                      <Link to="/watches/analog"><Button>Analog</Button></Link>
                      <Link to="/watches/digital"><Button>Digital</Button></Link>
                      <Link to="/watches/smart"><Button>Smart Watches</Button></Link>
                    </div>
                  </li>
                  <li><Link to="/footwear"><Button>Footwear</Button></Link>
                    <div className='submenu'>
                      <Link to="/footwear/sports"><Button>Sports</Button></Link>
                      <Link to="/footwear/casual"><Button>Casual</Button></Link>
                      <Link to="/footwear/formal"><Button>Formal</Button></Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='col-sm-9 navPart2'>
            <ul className='list list-inline'>
              <li className="list-inline-items nav-item">
                <Link to="/"><FaHome className="nav-icon" /> <Button>Home</Button></Link>
              </li>

              <li className="list-inline-items nav-item">
                <Link to="/mens"><FaStore className="nav-icon" /> <Button>Men’s</Button></Link>
                <div className='submenu'>
                  <Link to="/mens/clothing"><Button>Clothing</Button></Link>
                  <Link to="/mens/footwear"><Button>Footwear</Button></Link>
                  <Link to="/mens/accessories"><Button>Accessories</Button></Link>
                </div>
              </li>

              <li className="list-inline-items nav-item">
                <Link to="/womens"><FaMobileAlt className="nav-icon" /> <Button>Women's</Button></Link>
                <div className='submenu'>
                  <Link to="/womens/clothing"><Button>Clothing</Button></Link>
                  <Link to="/womens/footwear"><Button>Footwear</Button></Link>
                  <Link to="/womens/accessories"><Button>Accessories</Button></Link>
                </div>
              </li>

              <li className="list-inline-items nav-item">
                <Link to="/watches"><FaTshirt className="nav-icon" /> <Button>Watches</Button></Link>
                <div className='submenu'>
                  <Link to="/watches/analog"><Button>Analog</Button></Link>
                  <Link to="/watches/digital"><Button>Digital</Button></Link>
                  <Link to="/watches/smart"><Button>Smart Watches</Button></Link>
                </div>
              </li>

              <li className="list-inline-items nav-item">
                <Link to="/footwear"><FaTags className="nav-icon" /> <Button>Footwear</Button></Link>
                <div className='submenu'>
                  <Link to="/footwear/sports"><Button>Sports</Button></Link>
                  <Link to="/footwear/casual"><Button>Casual</Button></Link>
                  <Link to="/footwear/formal"><Button>Formal</Button></Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
