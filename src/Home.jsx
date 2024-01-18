import Button from "./components/Button";
import { useNavigate } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function Home() {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col">
      <div className="mt-12 p-10">
      <h1 className="text-4xl font-bold text-black mb-8">Welcome to Meme Generator!</h1>
      <p className="text-xl text-black mt-4 mb-4">
        - Click on "Generate random meme" to start creating memes with random images, 
      </p>
      <span className="text-xl text-black mt-4">or</span>
      <p className="text-xl text-black mt-4">
        - "Generate meme from your own picture" to upload your own image and start creating!
      </p>
      <p className="text-xl text-slate-gray mt-4">
        You can add a text anywhere on the picture by clicking on the desired location. Once clicked, a text box will appear for you to input your text.
      </p>
      </div>
      <div>
        <Button onClickFunction={() => navigate("/random")}>
          Generate random meme
          <FaArrowAltCircleRight />
        </Button>
        <Button onClickFunction={() => navigate("/own-picture")}>
          Generate meme from your own picture
          <FaArrowAltCircleRight />
        </Button>
      </div>
    </section>
  );
};