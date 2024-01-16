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
    const x = (event.clientX);
    const y = (event.clientY + window.scrollY);
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
      <div className="flex justify-center w-[700px]">
        <img src={memes[index].url}
          onClick={handleImageClick}
          className="object-contain border w-ull h-full aspect-{4/3}"/>
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
                sm:text-4xl
                text-lg
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
    </div>
  )
}

export default RandomMeme