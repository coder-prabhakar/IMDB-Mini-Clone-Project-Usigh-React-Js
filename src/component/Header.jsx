import React from 'react'

function Header() {
  return (
    <div className='Header'>
      <p className="webName">IMDb</p>
      <div className='SearchBar'>
        <input type="text" />
        <i class="uil uil-search"></i>
      </div>
    </div>
  )
}

export default Header