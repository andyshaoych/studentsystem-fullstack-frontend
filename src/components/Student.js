// Basic TextField

//import * as React from 'react';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function Student() {
  const paperStyle = {padding: '50px 20px', width:600,margin:"20px auto"}
  const[name,setName]=useState('')
  const[address,setAddress]=useState('')
  const[students,getStudents]=useState([])

  const handleNameChange = (e) => { setName(e.target.value); }
  const handleAddressChange = (e) => { setAddress(e.target.value); }

  const handleClick = (e) => {
    e.preventDefault() 
    const student = {name, address};
    console.log(student);

    fetch("http://localhost:8080/student/addStudent", {
      method:"POST",
      headers: {"Content-Type":"application/json"},
      body:JSON.stringify(student)
      }
    ).then(()=>{
      console.log("New Student added.")
    })
  }

  useEffect(()=>{
  fetch("http://127.0.0.1:8080/student/getAll")
    .then(res=>res.json())
    .then((result)=>{
      getStudents(result);
      }
    )
    },[])

  return (
    <Container>
    <Paper elevation = {3} style={paperStyle}>
    <h1 style={{colur:"blue"}}> <u>Add Student</u> </h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Student Name" variant="standard" fullWidth
      value={name}
      onChange={handleNameChange}
      />
      <TextField id="standard-basic" label="Student Address" variant="standard" fullWidth
      value={address}
      onChange={handleAddressChange}
      />
      
      <Button variant="contained" color="secondary" onClick={handleClick}>SUBMIT</Button>

      <div id="student" >
        <span > {name} </span>
        <span > {address} </span>
      </div>
      
    </Box>
    </Paper>
    <h1>Students</h1>
    
    <Paper elevation={3} style={paperStyle}>
      {students.map(student=>(
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={student.id}>
          Id:{student.id}<br/>
          Name:{student.name}<br/>
          Address:{student.address}
        </Paper>
      ))}

    </Paper>

    </Container>
  );
}


// Validation
