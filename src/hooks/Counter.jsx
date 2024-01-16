import React,{useState} from 'react'
import { Box,Button, Typography } from '@mui/material';
import { FaPlus } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

const Counter = () => {
    const[count,setCount] = useState(0);
  return (
        <Box
            sx ={{
                height:"95vh",
                display:"grid",
                placeItems:"center",
                margin:"auto",
                background:"gray",
            }}
        >
            <Button variant="contained"
            sx={{ padding : "10px", color:"black" }}
            onClick={()=>{
                const newCount=count+1;
                setCount(newCount);
            }}
            >
                <FaPlus size={30}/>
            </Button>
            <Typography variant='h3'>{count} </Typography>
            <Button
                sx={{ padding : "10px",color:"black"}}
                variant="contained"
                onClick={()=>{
                    let newCount=count-1;

                    if(newCount<=0){
                        newCount=0;
                    }
                    setCount(newCount)

                }}
            >
                <FaMinusCircle size={30} />
            </Button>
        </Box>
  );
};

export default Counter;