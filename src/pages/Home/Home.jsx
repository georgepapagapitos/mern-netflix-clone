import Featured from '../../components/Featured/Featured';
import List from '../../components/List/List';
import NavBar from '../../components/NavBar/NavBar';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <Featured type="series" />
      <List />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
}

export default Home;
