import './Featured.scss';
import { InfoOutlined, PlayArrow } from '@material-ui/icons';

const genres = [{ name: "Adventure" }, { name: "Comedy" }, { name: "Crime" }, { name: "Fantasy" }, { name: "Historical" }, { name: "Horror" }, { name: "Romance" }, { name: "Sci-Fi" }, { name: "Thriller" }, { name: "Western" }, { name: "Animation" }, { name: "Drama" }, { name: "Documentary" }];

export default function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            {genres.map(genre => (
              <option key={genre.name} value={genre.name.toLowerCase()}>{genre.name}</option>
            ))}
          </select>
        </div>
      )}
      <img src="https://cracklord.com/content/images/size/w2000/2017/09/neo-bullets1.png" alt="featured-movie" />
      <div className="info">
        <img
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt="info"
        />
        <span className="desc">Minim minim do aliquip eiusmod. Et eu pariatur veniam excepteur incididunt ex anim reprehenderit. Excepteur laboris adipisicing ut sint duis consectetur cillum reprehenderit reprehenderit ea incididunt.</span>
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