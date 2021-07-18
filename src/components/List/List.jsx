import { useRef } from "react";
import "./List.scss";
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import ListItem from "../ListItem/ListItem";

export default function List() {

  const listRef = useRef();

  const handleClick = (direction) => {
    if (direction === "left") {
      listRef.current.style.transform = `translateX(230px)`;
    }
  }

  return (
    <div className="list">
      <span className="list-title">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined className="slider-arrow left" onClick={() => handleClick("left")} />
        <div className="container" ref={listRef}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <ArrowForwardIosOutlined className="slider-arrow right" onClick={() => handleClick("right")} />
      </div>
    </div>
  );
}