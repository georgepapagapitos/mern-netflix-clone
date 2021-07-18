import NavBar from '../../components/NavBar/NavBar';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <img width="100%" src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb=2&w=500" alt="profile-pic" />
    </div>
  );
}

export default Home;
