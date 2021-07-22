import './NavBar.scss';
import { Search, Notifications, ArrowDropDown } from '@material-ui/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {

  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => window.onscroll = null;
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix-logo" />
          <Link to="/" className="link">
            <span>Homepage</span>
          </Link>
          <Link to="/series" className="link">
            <span>Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span>Movies</span>
          </Link>
          <span>New & Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>DVD</span>
          <Notifications className="icon" />
          <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb=2&w=500" alt="profile-pic" />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}