import Featured from '../../components/Featured/Featured';
import NavBar from '../../components/NavBar/NavBar';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <Featured type="series" />
    </div>
  );
}

export default Home;
