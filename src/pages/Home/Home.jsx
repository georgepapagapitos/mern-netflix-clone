import { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.scss';

import Featured from '../../components/Featured/Featured';
import List from '../../components/List/List';
import NavBar from '../../components/NavBar/NavBar';

export default function Home({ type }) {

  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomList = async () => {
      try {
        const response = await axios.get(`/api/lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
          headers: {
            token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZjg0YWIwOTM0YTY0NzY2YzhkMWE3MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyNjk3NzA3NywiZXhwIjoxNjI3NDA5MDc3fQ.273IUK9b-83xXAp9QzFfqojswFYziHTh3wlOU1ZA4g8`
          }
        });
        setLists(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getRandomList();
  }, [type, genre]);

  return (
    <div className="home">
      <NavBar />
      <Featured type={type} />
      {lists.map((list) => (
        <List key={list._id} list={list} />
      ))}
    </div>
  );
}
