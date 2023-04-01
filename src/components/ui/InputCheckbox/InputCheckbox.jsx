const InputCheckbox = props => {
  return (
    <div>
      <input
        type='checkbox'
        name={props.id}
        id={props.id}
        onChange={props.onChange}
        disabled={props.disabled}
        checked={props.checked}
        className={`bg-[#ECECEC] hover:bg-gray-300 cursor-pointer w-[22px] h-[22px] rounded-lg focus:outline-0 focus:ring-0 ${
          props.disabled && props.checked ? 'grayscale opacity-30' : ''
        }`}
      />
      <label htmlFor={props.id} className='ml-3'>
        {props.label}
      </label>
    </div>
  )
}

export default InputCheckbox
