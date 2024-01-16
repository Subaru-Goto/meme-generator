import { useState, useId } from "react";

const OwnPicture = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const inputId = useId();

  const handleImageUpload = (event) => {
    const imageData = event.target.files[0];
    setUploadedImage(URL.createObjectURL(imageData));
  };

  return (
    <div>
      {uploadedImage && <img src={uploadedImage} alt="picture from user"/>}
      <div className="
      flex flex-col justify-center
       items-center p-3">
        <label
         htmlFor={inputId}
         className="p-3">
          Upload your own picture to create a meme
        </label>
        <input
        id={inputId}
        type="file" 
        accept="image/*"
        onChange={handleImageUpload}/>
       </div>
    </div>
  )
}

export default OwnPicture