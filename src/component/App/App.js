import React, { FC, useState } from "react";
import Gallery from "../Gallery";
import { ReactSortable } from "react-sortablejs";
import './App.css'

const App: FC = (props) => {
  const [state, setState] = useState([
    { id: 1, src: `https://picsum.photos/180/180?random=1`, alt: "card_1" },
    { id: 2, src: `https://picsum.photos/180/180?random=2`, alt: "card_2" },
    { id: 3, src: `https://picsum.photos/180/180?random=3`, alt: "card_3" },
    { id: 4, src: `https://picsum.photos/180/180?random=4`, alt: "card_4" },
    { id: 5, src: `https://picsum.photos/180/180?random=5`, alt: "card_5" },
  ]);

  return (
      <ReactSortable animation={400} delay={5} list={state} setList={setState}>
        {state.map((item) => (
            <img key={item.id} src={item.src} alt={item.alt}/>
        ))}
      </ReactSortable>
  );
};

export default App;
