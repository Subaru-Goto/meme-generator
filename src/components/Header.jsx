import {NavLink, Link} from "react-router-dom";

const Header = () => {

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }

  return (
    <header 
    className="w-full p-8 text-3xl bg-blue-500">
      <Link
       to="/"
       className="cursor-pointer text-white"
       >Meme Generator</Link>
    </header>
  )
}

export default Header