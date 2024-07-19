import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import ButtonDownload from './ButtonDownload'


export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth:300}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="/images/leonardo-profile.jpeg"
          alt="leonardo-matos-photo-profile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          </Typography>
          <Typography variant="body1" color="text.secondary">
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <ButtonDownload/>
      </CardActions>
    </Card>
  );
}
