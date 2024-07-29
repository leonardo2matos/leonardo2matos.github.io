import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';
import ButtonDownload from './ButtonDownload'


export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth:400}} >        
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image="/images/leonardo-profile.jpeg"
          alt="leonardo-matos-photo-profile"
        />

      </CardActionArea>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mb: 3,
          mt: 3,
        }}
      >
      
      <ButtonDownload
       
      />
      </CardActions>
    </Card>
  );
}
