import React from 'react'
import Home from '..//home/Home'
import Searchbar from '../searchbar/Searchbar'
import { Container, Navbar, NavbarBrand } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'

export default function Header() {
  return (
    <>
      <Navbar  className='fixed-top z-index-999 bg-white mb-5' style={{boxShadow :'10px 5px 10px rgb(1, 1, 1, .09)'}}>
        <Container>
          <NavbarBrand >
            <h2 className='text-secondary'>
              WEATHER APP
            </h2>
          </NavbarBrand>
          <ul className='d-flex list-unstyled fs-3'>
            <li ><Link className='pe-3 text-decoration-none text-primary border-end border-light border-2' to='/'>Home</Link></li>
            <li><Link className='ps-3 text-decoration-none text-primary border-start border-light border-2' to='/searchbar'><BsSearch/></Link></li>
          </ul>
        </Container>
      </Navbar>
    </>
  )
}
