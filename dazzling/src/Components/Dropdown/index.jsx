import React from 'react'
import "./dropdown.scss"
import { Link } from 'react-router-dom'

const Dropdown = () => {
  return (
    <ul className='subMenu'>
        <li>
            <Link>Page Markup and Formmating</Link>
        </li>
        <li>
            <Link>Contact Form</Link>
        </li>
        <li>
            <Link>Page Image Alignment (Full-witdh)</Link>
        </li>
        <li>
            <Link>Clearing Floats</Link>
        </li>

    </ul>
  )
}

export default Dropdown