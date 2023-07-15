import React from 'react'
import './Home.css'
import Searchbar from '../searchbar/Searchbar'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'

export default function Home() {
  return (
    <>
      <Container fluid className='maincont'>
        <img
          className='mainbg'
          src='assets/images.jfif' />
        <div className='text text-center text-align-center'>
          Click on the
          <br />
          <span><Link className=' pe-2 ps-2 serach-icon' to='/searchbar'><BsSearch /></Link></span>
          <br />
          and enter the name of the city to view the weather conditions
        </div>
      </Container>
    </>

  )
}
