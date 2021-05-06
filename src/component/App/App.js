import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useState, useCallback } from "react";
import update from "immutability-helper";
import Gallery from "../Gallery";

const App = () => {
  const [pictures, setPictures] = useState([
    { id: 1, src: `https://picsum.photos/180/180?random=1`, alt: "card_1" },
    { id: 2, src: `https://picsum.photos/180/180?random=2`, alt: "card_2" },
    { id: 3, src: `https://picsum.photos/180/180?random=3`, alt: "card_3" },
    { id: 4, src: `https://picsum.photos/180/180?random=4`, alt: "card_4" },
    { id: 5, src: `https://picsum.photos/180/180?random=5`, alt: "card_5" },
  ]);

  const movePicture = useCallback(
    (dragIndex, hoverIndex) => {
      const dragPicture = pictures[dragIndex];
      setPictures(
        update(pictures, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragPicture],
          ],
        })
      );
    },
    [pictures]
  );

  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Gallery data={pictures} handleMove={movePicture} />
      </DndProvider>
    </div>
  );
};

export default App;
