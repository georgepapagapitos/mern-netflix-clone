import Featured from '../../components/Featured/Featured';
import List from '../../components/List/List';
import NavBar from '../../components/NavBar/NavBar';
import './Home.scss';

export default function Home({ type }) {
  return (
    <div className="home">
      <NavBar />
      <Featured type={type} />
      <List />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
}
