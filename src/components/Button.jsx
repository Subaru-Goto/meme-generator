import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Button = ({ children, path, setIndex,
   count, type, setTextCoordinates}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (path) {
      navigate(path);
    }
    if (setIndex && count !== null) {
      setIndex(prevState => prevState + count);
      setTextCoordinates([]);
    }
  };

  return (
    <button 
    className="
    bg-blue-500 items-center px-7 py-4
    border text-lg leading-none rounded-full
    text-white flex gap-4 m-5"
    onClick={handleClick}>
      {type === "back" && <FaArrowAltCircleLeft />}
        { children }
      {type === "next" && <FaArrowAltCircleRight />}
    </button>
  )
}

export default Button