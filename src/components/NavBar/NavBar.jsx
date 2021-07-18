import './NavBar.scss';
import { Search, Notifications } from '@material-ui/icons';

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
          <Search />
          <span>KID</span>
          <Notifications />
        </div>
      </div>
    </div>
  );
}

export default NavBar
