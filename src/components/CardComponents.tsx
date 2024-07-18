import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 300, m:2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="/images/leonardo-profile.jpeg"
          alt="leonardo-matos-photo-profile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Hi, everyone!
          </Typography>
          <Typography variant="body1" color="text.secondary">
          
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="success">
          CV_Download <ArrowDownwardIcon/>
        </Button>
      </CardActions>
    </Card>
  );
}
