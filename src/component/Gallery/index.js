import { Picture } from "../Picture";
import "./gallery.css";

const Gallery = (data, handleMove) => {
  return (
    <div className="gallery__wrapper">
      {data.data.map((card, index) => (
        <Picture
          key={card.id}
          index={index}
          id={card.id}
          imgSrc={card.src}
          alt={card.alt}
          movePicture={handleMove}
        />
      ))}
    </div>
  );
};

export default Gallery;
