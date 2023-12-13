import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Viewdata = () => {
  return (
    <div>
      <Typography variant='h2'>Sigin In</Typography><br /><br />
      <TextField variant='outlined' label="Username"/><br /><br />
      <TextField variant='outlined' label="password" type='password'/><br /><br />
      <TextField variant='outlined'  type='date'/><br /><br />
      <TextField variant='outlined' label="Address"/><br /><br />
      <Button variant='contained'>Submit</Button>

      
    </div>
  )
}

export default Viewdata