import './Featured.scss';
import axios from 'axios';
import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import { useEffect, useState } from 'react';

const genres = [{ name: "Adventure" }, { name: "Comedy" }, { name: "Crime" }, { name: "Fantasy" }, { name: "Historical" }, { name: "Horror" }, { name: "Romance" }, { name: "Sci-Fi" }, { name: "Thriller" }, { name: "Western" }, { name: "Animation" }, { name: "Drama" }, { name: "Documentary" }];

export default function Featured({ type }) {

  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const response = await axios.get(`/api/movies/random?type=${type}`, {
          headers: {
            token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZjg0YWIwOTM0YTY0NzY2YzhkMWE3MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyNjk3NzA3NywiZXhwIjoxNjI3NDA5MDc3fQ.273IUK9b-83xXAp9QzFfqojswFYziHTh3wlOU1ZA4g8`
          }
        });
        setContent(response.data[0]);
      } catch (err) {
        console.log(err);
      }
    }
    getRandomContent();
  }, [type]);

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            {genres.map(genre => (
              <option key={genre.name} value={genre.name.toLowerCase()}>{genre.name}</option>
            ))}
          </select>
        </div>
      )}
      <img src={content.img} alt="featured-movie" />
      <div className="info">
        <img
          src={content.imgTitle}
          alt="info"
        />
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more-info">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}