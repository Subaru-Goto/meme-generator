import { useState, useId, useRef } from "react";
import InputText from "../components/InputText";
import { FaTrash } from 'react-icons/fa';

const OwnPicture = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [textCoordinates, setTextCoordinates] = useState([]);
  const [isActive, setIsActive] = useState();
  const [isPictureUploaded, setIsPictureUploaded] = useState(false);
  const inputId = useId();
  const inputRef = useRef();

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
    <div className="
    flex justify-center flex-col
    w-[1280px] h-[500px] aspect-[4/3]">
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
        textCoordinates={textCoordinates} />

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
      </div>

    </div>
  )
}

export default OwnPicture