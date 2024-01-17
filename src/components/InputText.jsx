import { FaTrash } from 'react-icons/fa';

const InputText = ({ isActive, setIsActive,
   setTextCoordinates, textCoordinates }) => {

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
    </>
  )
}

export default InputText