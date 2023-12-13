import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <AppBar>
        <Toolbar>
            <Button variant='contained' sx={{ backgroundColor: '#FF5733', color: 'white'}}> 
                <Link to={'/'}  style={{ textDecoration: 'none', color: 'inherit'}}>Home</Link>
            </Button> &nbsp;&nbsp;&nbsp;

            <Button s variant='contained' color='error'>
                <Link to={'/Addstudent'}  style={{ textDecoration: 'none', color: 'inherit'}}>AddStudent</Link>
            </Button>&nbsp;&nbsp;&nbsp;

            <Button variant='contained' color='error'>
                <Link to={'/Viewdata'}  style={{ textDecoration: 'none', color: 'inherit'}}>Viewdata</Link>
            </Button>&nbsp;&nbsp;&nbsp;
        </Toolbar>
       </AppBar>
    </div>
  )
}

export default Navbar