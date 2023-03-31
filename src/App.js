import { useState } from 'react'

import { countries as data } from './data/data.js'

function App() {
  const [choosen, setChoosen] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [showSelectedOnly, setShowSelectedOnly] = useState(false)

  const handleCheckboxChange = event => {
    const selectedCountry = event.target.id
    if (event.target.checked) {
      setChoosen([...choosen, selectedCountry])
    } else {
      setChoosen(choosen.filter(country => country !== selectedCountry))
    }
  }

  const handleClearAll = () => {
    setChoosen([])
    setSearchInput('')
    setShowSelectedOnly(false)

    const checkboxes = document.querySelectorAll('input[type="checkbox"]')
    checkboxes.forEach(checkbox => (checkbox.checked = false))
  }

  const handleSearchInputChange = event => {
    setSearchInput(event.target.value)
  }

  const handleShowSelectedChange = event => {
    setShowSelectedOnly(event.target.checked)
  }

  return (
    <div className='App w-screen h-screen flex items-center justify-center' style={{ background: '#F5F5F5' }}>
      <div
        className='w-[494px] h-[446px] p-5 rounded-[14px] bg-white border-solid border-[1px] border-[#E1E3E6]'
        style={{ boxShadow: '9px 32px 35px rgba(0, 0, 0, 0.0464653)' }}
      >
        <div className="relative w-full after:content-[''] after:block after:w-full after:h-[1px] after:bg-[#ECECEC]">
          <input
            type='text'
            id='simple-search'
            className='text-gray-900 outline-0 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 p-2.5 dark:placeholder-gray-400 dark:text-black dark:focus:bg-transparent dark:focus:border-none'
            placeholder='Search'
            value={searchInput}
            onChange={handleSearchInputChange}
          />
        </div>
        <div className='flex items-center justify-between py-6'>
          <label className='relative inline-flex items-center mr-5 cursor-pointer'>
            <input id='toggle' type='checkbox' value='' className='sr-only peer' onChange={handleShowSelectedChange} />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            <span className='ml-[10px] text-sm text-gray-900 dark:text-gray-800 font-bold'>Show selected only</span>
          </label>
          <button type='button' className='font-bold cursor-pointer' onClick={handleClearAll}>
            Clear all
          </button>
        </div>
        <ul className="w-100 max-h-[247px] mb-[14px] overflow-y-scroll flex flex-col gap-5 after:content-[''] after:block after:w-full after:h-[1px] after:bg-[#ECECEC]">
          {data
            .filter(country => country.toLowerCase().includes(searchInput.toLowerCase()))
            .filter(country => !showSelectedOnly || choosen.includes(country))
            .map((country, index) => (
              <li className='flex items-center' key={index.toString()}>
                <input
                  id={country}
                  type={'checkbox'}
                  value=''
                  checked={choosen.includes(country)}
                  className='w-6 h-6 rounded-t-full'
                  onChange={handleCheckboxChange}
                />
                <label htmlFor={country} className='ml-2 text-sm font-medium text-gray-900 dark:text-black'>
                  {country}
                </label>
              </li>
            ))}
        </ul>
        <div className="w-full before:content-[''] before:block before:w-full before:h-[1px] before:bg-[#ECECEC]">
          <button
            type='button'
            className='ml-auto mt-[20px] bg-[#60D09B] text-white leading-5 py-2 px-[25px] rounded-[50px] flex items-center justify-center'
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
