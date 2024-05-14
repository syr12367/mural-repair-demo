
import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';




import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography'; // 导入 Typography 组件
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



function NewPage() {
  const navigate = useNavigate();

    return (
      <div className="App" style={{alignItems:"center"}}>
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
          }}
        >
          <Stack spacing={2} direction="column" alignItems="center" justifyContent="space-between">
            <div style={{height:'100px'}}>
            <Typography variant="h4" component="p" sx={{color:'white',margin:'20px'}}>Act Five
          </Typography>
              </div>
          
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#D5C38C',
                    '&:hover': {
                      backgroundColor: '#C3BBA1',
                    }
                  }}
                >
                  <div style={{color:'black',margin:'0',fontWeight: 'bold' }} onClick={() => navigate('/page-2')}>start to travel!</div>
                </Button>
              
          </Stack>
        </Box>
      
      </div>
    );
  }


export default NewPage;