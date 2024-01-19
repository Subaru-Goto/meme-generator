import { FaTrash } from "react-icons/fa";
import { useState } from "react";

const InputText = ({ isActive, setIsActive,
   setTextCoordinates, textCoordinates }) => {
    const [texts, setTexts] = useState([]);

  const handleDelete = (event, indexToDelete) => {
    event.stopPropagation();

    setTextCoordinates(prevState => prevState.filter(
      (_, index) => index !== indexToDelete)
      );
    setTexts(prevTexts => prevTexts.filter(
      (_, index) => index !== indexToDelete)
      );
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.target.blur();
    };
  };

  const handleChange = (event, index) => {
    const newValues = [...texts];
    newValues[index] = event.target.value;
    setTexts(newValues);
  };

  return (
    <>
      {textCoordinates.map((coord, index) => (
        <div 
          key={index}
          style={{
            position: 'absolute',
            left: `${coord.x}px`,
            top: `${coord.y}px`}}
          className="flex"
        >
          {/* Distinguish between mouseDown and click event, and prevent onMouseDown event to happen */}
          <div onMouseDown={(event) => event.preventDefault()}>
            {isActive && <FaTrash onClick={(event) => handleDelete(event, index)} />}
          </div>
          { isActive ?         
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
              value={texts[index]}
              onChange={(event) => handleChange(event, index)}
              onKeyDown={handleKeyDown}
              onBlur={() => setIsActive(false)}
              onClick={() => setIsActive(true)}
            />
            : <span>{texts[index]}</span>
          }
        </div>
      ))}
    </>
  );
};

export default InputText