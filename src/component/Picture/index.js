import "./picture.css";

export const Picture = ({ imgSrc, imgAlt }) => {
  return (
    <div className={"picture"}>
      <img src={imgSrc} alt={imgAlt} />
    </div>
  );
};
