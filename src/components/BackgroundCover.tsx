import Image from 'next/image';
import { Box } from '@mui/material';

export default function BackgroundCover() {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',  //{ xs: '200px', sm: '300px', md: '400px', lg: '500px' },
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