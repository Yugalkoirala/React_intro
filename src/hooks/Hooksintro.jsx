import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const HooksIntro = () => {
  // const [count,setCount] = useState(21);

  // const[name,setName] = useState("Yugal");

  // const[isOpen,setIsOpen] = useState(true);

  // const[person,setPerson] = useState({name : "A", age : 22});

  const[students,setStudents] = useState([
    {
      name:"Yugal",
      age:22,
    },
    {
      name:"Suyog",
      age:21,
    }
  ])

  // console.log(isOpen);

  return (
    <Box
      sx ={{
        // background:"gray",
        padding:"3rem",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"

        }}
    >
      {/* <Button
        variant="contained"
        onClick={()=>{
          setCount(count+1);
          setName("Yugal Koirala");
          }}
      >change Name
      </Button>

      <Typography variant='h3'>{count}</Typography>

      <Typography variant='h3'>{name}</Typography> */}

      {/* adding button*/}

      {/* <Button
        variant='outlined'
        onClick={()=>
        setIsOpen(!isOpen)}
        >Switch
      </Button>

      <Typography variant='h3'>{isOpen ? "On" : "Off"}</Typography>

      {/* adding switch */}

      {/* <Switch
        {...label}
        checked={isOpen}
          onChange={()=>{
            setIsOpen(!isOpen);
        }}
      /> */}

      {/* <Typography variant='h3'>{`Hi, my name is ${person.name} and my age is ${person.age}`}</Typography>

      <Button
        variant='contained'
        onClick={()=>
        setPerson({ name:"B",age:25})
        }>
        Change me
      </Button> */}

{students.map((item, index) => (
        <Typography variant='h3' key={index}>
          {`My name is ${item.name} and age is ${item.age}`}
        </Typography>
      ))}

      <Button
        variant="outlined"
        onClick={() => {
          setStudents([...students, { name: "Pradip", age: 20 }]);
        }}
      >
        Change Data
      </Button>
    </Box>
  );
};

export default HooksIntro;
