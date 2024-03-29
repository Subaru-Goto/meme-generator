import { useState, useId, useRef } from "react";
import InputText from "../components/InputText";
import { FaTrash } from "react-icons/fa";
import Button from "../components/Button"
import { saveImage } from "../utils/domToPNG";
import TextSelection from "../components/TextSelection";

const OwnPicture = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [textCoordinates, setTextCoordinates] = useState([]);
  const [isActive, setIsActive] = useState();
  const [isPictureUploaded, setIsPictureUploaded] = useState(false);
  const [color, setColor] = useState("black");
  const [fontSize, setFontSize] = useState("1")

  const inputId = useId();
  const inputRef = useRef(null);
  const memeRef = useRef(null);

  const handleImageUpload = (event) => {
    const imageData = event.target.files[0];
    setUploadedImage(URL.createObjectURL(imageData));
    setIsPictureUploaded(true);
  };

  const handleImageClick = (event) => {
    const x = (event.clientX);
    const y = (event.clientY + window.scrollY);
    setTextCoordinates(prev => [...prev, { x, y }]);
    setIsActive(true);
  };

  const handleDeleteClick = () => {
    setUploadedImage(null);
    setIsPictureUploaded(false);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <div className="justify-center flex-col">  
    {isPictureUploaded && 
      <div className="flex justify-center">
        <div className="my-0 mx-auto mt-3 border inline-block">
          <TextSelection
          setColor={setColor}
          setFontSize={setFontSize}
          />
        </div>
      </div>}
      <div className="my-0 mx-auto h-[500px] aspect-[4/3]" ref={memeRef}>
        {uploadedImage &&
          <img
            src={uploadedImage}
            alt="picture from user"
            className="
              object-contain w-full h-full
              aspect-auto mt-5"
            onClick={handleImageClick}
          />}

        <InputText
          isActive={isActive}
          setIsActive={setIsActive}
          setTextCoordinates={setTextCoordinates}
          textCoordinates={textCoordinates}
          color={color}
          fontSize={fontSize} />
      </div>

      <div className="
        flex flex-col justify-center
        items-center p-3">
        <label
          htmlFor={inputId}
          className="p-3">
          Upload your own picture to create a meme
        </label>
        
        <div className="flex items-center">
          <input
            id={inputId}
            type="file"
            ref={inputRef}
            accept="image/*"
            className={`mr-[-10px] ${isPictureUploaded? "text-slate-gray" :"text-red-700"}`}
            onChange={handleImageUpload} />
          {isPictureUploaded && 
          <FaTrash
           className="ml-[-10px]"
           onClick={handleDeleteClick} /> }
        </div>

        {isPictureUploaded && 
          <Button onClickFunction={() => saveImage(memeRef.current)}>
            Save Meme
          </Button>
        }
        
      </div>
    </div>
  );
};

export default OwnPicture