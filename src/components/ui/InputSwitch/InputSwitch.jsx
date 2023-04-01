const InputSwitch = props => {
  return (
    <label htmlFor='switcher' className='flex items-center cursor-pointer'>
      <div className='relative'>
        <input type='checkbox' id='switcher' className='sr-only' onChange={props.onChange} />
        <div className='block bg-[#001C3D14] w-[37px] h-[22px] rounded-full'></div>
        <div className='dot absolute left-[1px] top-[1px] bg-white w-5 h-5 rounded-full transition'>
          <style>
            {`#switcher:checked ~ .dot {
              transform: translateX(70%);
              background-color: #60D09B;
            }`}
          </style>
        </div>
      </div>
      <div className='ml-3 text-gray-700 font-medium'>{props.label}</div>
    </label>
  )
}

export default InputSwitch
