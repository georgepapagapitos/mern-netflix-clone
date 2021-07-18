import './NavBar.scss';
import { Search, Notifications, ArrowDropDown } from '@material-ui/icons';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix-logo" />
          <span>Homepage</span>
          <span>Series</span>
          <span>New & Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb=2&w=500" alt="profile-pic" />
          <ArrowDropDown className="icon" />
        </div>
      </div>
    </div>
  );
}

export default NavBar
