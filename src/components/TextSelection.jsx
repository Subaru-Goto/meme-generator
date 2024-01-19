import { useId } from "react";

const TextSelection = ({ setColor, setFontSize }) => {
  const id = useId();
  
  const handleChange = (event, type) => {
    const value = event.target.value;
    if(type === "color") {
      setColor(value);
    } ;
    if (type === "size") {
      setFontSize(value)
    };
  };

  return (
    <div>
      <label htmlFor={id + "-color"}> Color </label>
      <select
        id={id + "-color"}
        name="color"
        onChange={(event) => handleChange(event, "color")}>
        <option value="black">Black</option>
        <option value="white">White</option>
      </select>
      <label htmlFor={id + "-size"}> Size </label>
      <select 
        id={id + "-size"}
        name="size"
        onChange={(event) => handleChange(event, "size")}>
        <option value="base">1</option>
        <option value="xl">2</option>
        <option value="3xl">3</option>
        <option value="5xl">4</option>
      </select>
    </div>
  );
};

export default TextSelection;