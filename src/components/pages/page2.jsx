import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Page2() {
  const navigate = useNavigate();
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger the fade in effect after a short delay
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 100);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <div className="App" style={{ alignItems: "center" }}>
      <div
        className="gradient-overlay"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '60%',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))',
          zIndex: 0,
        }}
      />
      <div
        className="gradient-overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '50%',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0))',
          zIndex: 0,
          
        }}
      />
      <div
        className="bg-image"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(bg1.png)',
          backgroundSize: 'cover',
          zIndex: -1,
        }}
      />
      <div
        style={{
          p: 4,
          position: 'relative',
          left: 0,
          width: '100%',
          display: 'flex',
          marginTop: '20px',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: fadeIn ? 1 : 0, // Apply fade in effect
          transition: 'opacity 1s ease-in-out', // CSS transition
        }}
      >
        <img src="step0.png" style={{ width: "70%", margin: 0, padding: 0, display: 'block' }} />
      </div>
      <Box
        component="section"
        sx={{
          p: 4,
          marginLeft: '10px',
          marginRight: '10px',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '90%',
          opacity: fadeIn ? 1 : 0, // Apply fade in effect
          transition: 'opacity 1s ease-in-out', // CSS transition
        }}
      >
        <Stack spacing={1} direction="column" alignItems="center" justifyContent="space-between">
          <div style={{ height: '100px' }}>
            <Typography variant="p" component="p" sx={{ color: 'white', margin: '20px' }}>
              The image has severe
              <span style={{ color: '#D5C38C', fontWeight: 'bold' }}> Qi Jia</span> (cracking and curling of paint) issues. You need to fix this painting first to understand what it's actually depicting.
            </Typography>
          </div>
          <Button
            variant="contained"
            sx={{
              '&:hover': {
                backgroundColor: '#C3BBA1',
              },
              backdropFilter: 'blur(8px)',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            }}
            onClick={() => navigate('/dust-removal')}
          >
            <div style={{ color: 'white', margin: '0' }}>CONTINUE</div>
          </Button>
        </Stack>
      </Box>
    </div>
  );
}

export default Page2;
