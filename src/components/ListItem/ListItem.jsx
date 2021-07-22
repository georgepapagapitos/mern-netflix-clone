import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined, Add } from "@material-ui/icons";
import "./ListItem.scss";

export default function ListItem({ item, index }) {

  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await axios.get(`/api/movies/${item}`, {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZjg0YWIwOTM0YTY0NzY2YzhkMWE3MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyNjk2NDEzNCwiZXhwIjoxNjI3Mzk2MTM0fQ.3k9KQ4pdMwfzyauQEXA3yvnzWIvhL4mm7S_IqL6kvMs"
          }
        });
        setMovie(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getMovie();
  }, [item])

  return (
    <Link to={{ pathname: "/watch", movie: movie }}>
      <div
        className="list-item"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie.img} alt="movie-cover" />
        {isHovered && (
          <>
            <video src={movie.trailer} alt="trailer" autoPlay={true} loop />
            <div className="item-info">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownAltOutlined className="icon" />
              </div>
              <div className="item-info-top">
                <span>{movie.title}</span>
                <span className="mpa-rating">{movie.mpaRating}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">
                {movie.desc}
              </div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}