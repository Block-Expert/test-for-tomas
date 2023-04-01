const ButtonTransparent = props => {
  return (
    <button type='button' className='font-bold cursor-pointer' onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default ButtonTransparent
