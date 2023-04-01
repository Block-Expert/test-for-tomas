const InputSearch = props => {
  return (
    <input
      type='search'
      id='search'
      className='placeholder-[#393939] caret-[#393939] text-[#393939] tracking-tighter outline-0 mt-2 w-full py-2 px-1'
      placeholder='Search'
      value={props.value}
      onChange={props.onChange}
    />
  )
}

export default InputSearch
