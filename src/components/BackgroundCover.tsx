import Image from 'next/image';
import { Box } from '@mui/material';

export default function BackgroundCover() {
  return (
    <Box
      sx={{
        width: '100vw',
        height: { xs: '250px', sm: '500px', md: '800px', lg: '1000px' },   //'100vh' 
        position: 'absolute',
        overflow: 'hidden',
        bottom: 0,
        zIndex: -1,
        
      

      }}
    >
      <Image
        src="/images/whitediamonts.jpg"
        alt="whitediamonts" 
        layout="fill"
        objectFit="cover"
        priority
        

      />
      
    </Box>
  );
}