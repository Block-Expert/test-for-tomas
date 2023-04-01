import { useState } from 'react'

import Button from 'components/ui/Button/Button.jsx'
import ButtonTransparent from 'components/ui/ButtonTransparent/ButtonTransparent.jsx'
import InputCheckbox from 'components/ui/InputCheckbox/InputCheckbox.jsx'
import InputSearch from 'components/ui/InputSearch/InputSearch.jsx'
import InputSwitch from 'components/ui/InputSwitch/InputSwitch.jsx'

import { countries as data } from './data/data.js'

function App() {
  const [elect, setElect] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [showSelectedOnly, setShowSelectedOnly] = useState(false)

  const handleClearAll = () => {
    setElect([])
    setSearchInput('')
    setShowSelectedOnly(false)
    const checkboxes = document.querySelectorAll('input[type="checkbox"]')
    checkboxes.forEach(checkbox => {
      checkbox.checked = false
    })
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
        className='w-[494px] p-5 rounded-[14px] bg-white border-solid border-[1px] border-[#E1E3E6]'
        style={{ boxShadow: '9px 32px 35px rgba(0, 0, 0, 0.0464653)' }}
      >
        <div className="relative w-full after:content-[''] after:block after:w-full after:h-[1px] after:bg-[#ECECEC]">
          <InputSearch value={searchInput} onChange={handleSearchInputChange} />
        </div>
        <div className='flex items-center justify-between py-6'>
          <InputSwitch onChange={handleShowSelectedChange} label={'Show selected only'} />
          <ButtonTransparent onClick={handleClearAll}>Clear all</ButtonTransparent>
        </div>
        <ul className='w-100 max-h-[247px] mb-3 overflow-y-scroll overflow-x-visible flex flex-col gap-5'>
          {data
            .filter(country => !showSelectedOnly || elect.includes(country))
            .filter(country => country.toLowerCase().includes(searchInput.toLowerCase()))
            .map(country => (
              <li className='flex items-center' key={country.replace(/\s/g, '').toString()}>
                <InputCheckbox
                  id={country.replace(/\s/g, '')}
                  label={country}
                  disabled={country.toLowerCase().includes('andorra') ? true : false}
                  onChange={event => {
                    if (event.target.checked) {
                      setElect([...elect, country])
                    } else {
                      setElect(elect.filter(selectedCountry => selectedCountry !== country))
                    }
                  }}
                  checked={elect.includes(country) || country.toLowerCase().includes('andorra')}
                />
              </li>
            ))}
        </ul>
        <div className="w-full before:content-[''] before:block before:w-full before:h-[1px] before:mb-5 before:bg-[#ECECEC]">
          <Button type='button' className='ml-auto'>
            Save
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App
