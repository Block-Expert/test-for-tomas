const Button = props => {
  return (
    <button
      type={props.type}
      id={props.id}
      onClick={props.onClick}
      className={`bg-[#60D09B] hover:bg-[#52b285] transition-colors text-white leading-5 py-2 px-[25px] rounded-[50px] flex items-center justify-center ${
        props.className ? props.className : ''
      }`}
    >
      {props.children}
    </button>
  )
}

export default Button
