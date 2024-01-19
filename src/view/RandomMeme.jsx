import { useLoaderData } from "react-router-dom"
import { fetchMeme } from "../api"
import { useState, useRef } from "react";
import Button from "../components/Button";
import InputText from "../components/InputText";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { saveImage } from "../utils/domToPNG";

export function loader () {
  return fetchMeme();
};

const RandomMeme = () => {
  const [index, setIndex] = useState(0);
  const [textCoordinates, setTextCoordinates] = useState([]);
  const [isActive, setIsActive] = useState();
  const memes = useLoaderData();
  const memeRef = useRef(null);

  const handleImageClick = (event) => {
    // Get a position of element attached
    const rect = event.target.getBoundingClientRect();
    const x = (event.clientX - rect.left);
    const y = (event.clientY - rect.top);
    setTextCoordinates(prev => [...prev, { x, y }]);
    setIsActive(true);
  };

  const handleClick = (count) => {
    if (setIndex && count !== null) {
      setIndex(prevIndex => prevIndex + count);
      setTextCoordinates([]);}
    };

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center">
        {index !== 0
         ?<Button onClickFunction={() => handleClick(-1)}>
            <FaArrowAltCircleLeft />
            Back
          </Button>
         :null}
          <Button onClickFunction={() => handleClick(1)}>
            Next
            <FaArrowAltCircleRight />
          </Button>
      </div>
      <div 
        className="flex relative justify-center h-[500px] aspect-[4/3]"
        ref={memeRef}
      >
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
        <Button onClickFunction={() => saveImage(memeRef.current)}>Save Meme</Button>
      </div>
    </div>
  );
};

export default RandomMeme