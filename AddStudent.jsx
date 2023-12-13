import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const AddStudent = () => {
    const [names,setNames]=useState()
    const [data,setData]=useState([])

    const  inputhandler=(e)=>{//to take the typed value
        setNames(e.target.value)
    }

    const  addhandler= ()=>{
       setData((data=>[...data,names]))
       setNames('')//empty the string
    }

  return (
    <div>
        <Typography variant='h2'>Add Student!</Typography><br /><br />
        <TextField variant="filled" label="enter the Student Name" onChange={inputhandler}></TextField><br /><br />
        <Button variant='contained' onClick={addhandler} >Add</Button>

        
        <ul>
            {data.map((value,index)=>{
                return(
                    <li>{value}</li>
                )
            })}
            </ul>
            

    </div>
  )
}

export default AddStudent