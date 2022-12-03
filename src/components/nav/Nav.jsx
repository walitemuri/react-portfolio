import React from 'react'
import './nav.css'
import {MdHomeFilled} from 'react-icons/md'
import {FaUserTie} from 'react-icons/fa'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {FaHandshake} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

const Nav = () => {
  return (
    <nav>
      <a href="#"><MdHomeFilled/></a>
      <a href="#about"><FaUserTie/></a>
      <a href="#portfolio"><AiOutlineFundProjectionScreen/></a>
      <a href="#services"><FaHandshake/></a>
      <a href="#contact"><MdEmail/></a>
    </nav>
  )
}

export default Nav