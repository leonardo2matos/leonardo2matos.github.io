import React, { useState } from 'react';
import { Button, CircularProgress, Box } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const ButtonDownload: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    setLoading(true);

    // Simulação de atraso para o download (2 segundos)
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = '/path/to/your/file.txt'; // Substitua pelo caminho do seu arquivo
      link.download = 'file.txt'; // Nome do arquivo a ser baixado
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setLoading(false);
    }, 2000);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={handleDownload}
        disabled={loading}
        sx={{
          fontSize: '1rem',
          fontWeight: 700,
          letterSpacing: '0.1em',
          background: 'linear-gradient(135deg, rgba(0,0,255,1), rgba(255,0,0,1))',
          color: 'white',
          borderRadius: '50%', // Define o botão como circular
          width: '64px', // Ajuste o tamanho conforme necessário
          height: '64px', // Ajuste o tamanho conforme necessário
          minWidth: '0', // Remove a largura mínima padrão do botão
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          filter: 'blur(0.5px)',
          '&:hover': {
            background: 'linear-gradient(135deg, rgba(0,0,255,0.8), rgba(255,0,0,0.8))',
            filter: 'blur(0)',
            transition: 'filter 0.3s',
          },
        }}
      >
        {!loading && <DownloadIcon />}
        {loading && (
          <CircularProgress
            size={45} // Ajuste o tamanho do indicador de progresso conforme necessário
            sx={{
              color: 'white',
              position: 'absolute',
            }}
          />
        )}
      </Button>
    </Box>
  );
};

export default ButtonDownload;
