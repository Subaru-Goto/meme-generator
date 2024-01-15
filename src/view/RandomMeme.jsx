import { useLoaderData } from "react-router-dom"
import { fetchMeme } from "../api"
import { useState } from "react";
import { FaTrash } from 'react-icons/fa';
import Button from "../components/Button";

export function loader () {
  return fetchMeme();
};

const RandomMeme = () => {
  const [index, setIndex] = useState(0);
  const [textCoordinates, setTextCoordinates] = useState([]);
  const [isActive, setIsActive] = useState();
  const memes = useLoaderData();

  const handleImageClick = (event) => {
    const imgRect = event.target.getBoundingClientRect();
    const x = event.clientX - imgRect.left + 300;
    const y = event.clientY - imgRect.top + 180;
    setTextCoordinates(prev => [...prev, { x, y }]);
    setIsActive(true);
  };

  const handleDelete = (event, indexToDelete) => {
    event.preventDefault();
    event.stopPropagation();
    setTextCoordinates(prevState => prevState.filter(
      (_, index) => index !== indexToDelete)
      );
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.target.blur();
    };
  };

  return (
    <>
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
      <div className="flex justify-center">
        <img src={memes[index].url}
          with={memes[index].with}
          height={memes[index].height}
          onClick={handleImageClick}
          className="object-contain border"/>
        {textCoordinates.map((coord, index) => (
          <div 
            key={index}
            style={{
              position: 'absolute',
              left: `${coord.x}px`,
              top: `${coord.y}px`}}
            className="flex"
          >
            <div onMouseDown={(event) => event.preventDefault()}>
              {isActive && <FaTrash onClick={(event) => handleDelete(event, index)} />}
            </div>
            <input 
              type="text"
              className={`
                text-4xl
                bg-transparent
                w-auto
                break-words
                whitespace-nowrap
                ${isActive && "border"}`}
              onKeyDown={handleKeyDown}
              onBlur={() => setIsActive(false)}
              onClick={() => setIsActive(true)}
            />
          </div>
          
        ))}
      </div>
      <div className="flex justify-center">
        <Button>Save Meme</Button>
      </div>
    </>
  )
}

export default RandomMeme