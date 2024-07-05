import * as React from 'react';
import Box from '@mui/system/Box';

export default function BoxSystemProps() {
  return (
    <Box
      height={200}
      width={200}
      my={50}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      ml={4}
      sx={{ border: '2px solid grey'}}
    >
      This Box uses MUI System props for quick customization.
    </Box>
  );
}
