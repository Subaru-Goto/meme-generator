const Button = ({ children, onClickFunction}) => {
  return (
    <button 
    className="
    bg-blue-500 items-center px-7 py-4
    border text-lg leading-none rounded-full
    text-white flex gap-4 m-5"
    onClick={onClickFunction}>
        { children }
    </button>
  )
}

export default Button