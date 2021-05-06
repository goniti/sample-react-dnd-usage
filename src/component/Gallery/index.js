import { Picture } from "../Picture";
import "./gallery.css";

const Gallery = (pictures) => {
  return (
    <div className="gallery__wrapper">
      {pictures.pictures.map((picture) => (
        <Picture
          key={picture.id}
          id={picture.id}
          imgSrc={picture.src}
          imgAlt={picture.alt}
        />
      ))}
    </div>
  );
};

export default Gallery;
