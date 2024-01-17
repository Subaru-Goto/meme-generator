import { useLoaderData } from "react-router-dom"
import { fetchMeme } from "../api"
import { useState } from "react";
import Button from "../components/Button";
import InputText from "../components/InputText";

export function loader () {
  return fetchMeme();
};

const RandomMeme = () => {
  const [index, setIndex] = useState(0);
  const [textCoordinates, setTextCoordinates] = useState([]);
  const [isActive, setIsActive] = useState();
  const memes = useLoaderData();


  const handleImageClick = (event) => {
    const x = (event.clientX);
    const y = (event.clientY + window.scrollY);
    setTextCoordinates(prev => [...prev, { x, y }]);
    setIsActive(true);

  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center">
        {index !== 0
         ?<Button setIndex={setIndex} count={-1} type={"back"}
          setTextCoordinates={setTextCoordinates}>
            Back
          </Button>
         :null}
          <Button setIndex={setIndex} count={1} type={"next"}
           setTextCoordinates={setTextCoordinates}>
            Next
          </Button>
      </div>
      <div className="flex justify-center w-[1280px] h-[500px] aspect-[4/3]">
        <img src={memes[index].url}
          onClick={handleImageClick}
          className="object-contain w-full h-full aspect-auto cursor-pointer"/>

        <InputText 
          isActive={isActive}
          setIsActive={setIsActive}
          setTextCoordinates={setTextCoordinates}
          textCoordinates={textCoordinates} />

      </div>

      <div className="flex justify-center">
        <Button>Save Meme</Button>
      </div>
    </div>
  )
}

export default RandomMeme