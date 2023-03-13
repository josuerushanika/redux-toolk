import {cartIcon} from '../icons'
import { useSelector } from 'react-redux'

import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <div className='nav-center'>
        <h3>redux toolkit</h3>
        <div className='nav-container'>
            <cartIcon />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
