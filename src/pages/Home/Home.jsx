import Featured from '../../components/Featured/Featured';
import List from '../../components/List/List';
import NavBar from '../../components/NavBar/NavBar';
import './Home.scss';

export default function Home() {
  return (
    <div className="home">
      <NavBar />
      <Featured type="movie" />
      <List />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
}
