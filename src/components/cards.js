import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ bgcolor: 'antiquewhite', maxWidth: "100%" }}>
      <CardActionArea> 
        <CardMedia
          component="img"
          height="60%"
          width="60%"
          image="./images/DPOTU.jpg"
          alt="DPOTU"
        />
        <CardContent sx={{ maxWidth: "100%" }}>
        <Typography sx={{ fontSize:"95%" }}>
          <b>Departamento:</b>
          <br />
          XXXXXXXXX
          </Typography>
          <Typography sx={{ fontSize:"95%" }}>
          <b>Fecha:</b>
          <br />
          XXXXXXXXX
          </Typography>
          <Typography sx={{ fontSize:"95%" }} variant="body1" color="text.secondary">
            Tema:
            <br />
            XXXXXXXXX
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}