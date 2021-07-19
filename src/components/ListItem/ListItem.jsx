import { PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined, Add } from "@material-ui/icons";
import { useState } from "react";
import "./ListItem.scss";

export default function ListItem({ index }) {

  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  return (
    <div
      className="list-item"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee" alt="movie-cover" />
      {isHovered && (
        <>
          <video src={trailer} alt="trailer" autoPlay={true} loop />
          <div className="item-info">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="item-info-top">
              <span>1h 32m</span>
              <span className="mpa-rating">R</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Consectetur cillum nostrud nostrud adipisicing qui Lorem nostrud.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}