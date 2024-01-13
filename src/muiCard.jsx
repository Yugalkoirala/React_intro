import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { petData } from '../petData';
import { Box } from '@mui/material';

const MuiCard = () => {
  console.log(petData);

  return (
    <Box sx={{display:"flex",gap:"2rem",justifyContent:"center",alignItems:"center"}}>
      {petData.map((item, index) => {
        return (
          <Card sx={{width: "30%",minHeight:"500px" }} key={index}>
            <CardMedia
              sx={{ height: 140, objectFit:"cover" }}
              image={item.image}
              title={item.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
}

export default MuiCard;
