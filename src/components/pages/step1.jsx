import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';




import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography'; // 导入 Typography 组件
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



function Step1() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const circleRef = useRef(null);

  const [isLongPressed, setIsLongPressed] = useState(false);

  let pressTimer;

  const startPressTimer = () => {
    pressTimer = setTimeout(() => {
      setIsLongPressed(true);
    }, 1000); // 设置长按时间，单位为毫秒
  };

  const handleMouseDown = () => {
    setIsPressed(true);
    startPressTimer();
  };

  const handleMouseUp = () => {
    setIsPressed(false);
    clearTimeout(pressTimer);
    if (isLongPressed) {
      // 执行长按事件的处理逻辑
      console.log('Long press detected!');
    }
    setIsLongPressed(false);
  };

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger the fade in effect after a short delay
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 100);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);


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
  /* backgroundColor:'red', */
            
            position: 'relative',
            
            left: 0,
            width: '100%',
            display: 'flex',
            marginTop:'20px',
            alignItems:'center',justifyContent: 'center', // 水平和垂直方向上都居中
          }}
        >
            <img src="step1.png" style={{width:"70%",margin:0,padding:0,display: 'block'}}></img>
        </div>
        <div style={{
            p: 4,
            position: 'relative',
            left: 0,
            width: '100%',
            display: 'flex',
            marginTop:'20px',
            opacity: fadeIn ? 1 : 0, // Apply fade in effect
          transition: 'opacity 1s ease-in-out', // CSS transition
            
          }}
        >
            <img src="step1title.png" style={{height:'50px',float:'left',marginLeft:'10%',padding:0,display: 'block'}}></img>
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
            <div style={{height:'100px'}}>
            <Typography variant="p" component="p" sx={{color:'white',margin:'20px'}}>
            During this step, you need to clean the Qi Jia and surface dust off the mural to prevent contamination during restoration. 
            
                <span style={{ color: '#D5C38C', fontWeight: 'bold' }}> Press the brush on the bottom </span>
                 to start dust removal.
          </Typography>
          
              </div>
          
                <div
                  
                  style={{
                    width:'70px',
                    transition: 'transform 0.3s',
                    transform: isHovered ? 'scale(1.2)' : 'scale(1)',
                    cursor: isHovered ? 'pointer' : ''
                  }} 
                  onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate('/dust-removal2')}
                >
                  <img src="brush.png" style={{width:'100%'}}></img>
                  
                </div> 
                
              
          </Stack>
        </Box>
      
      </div>
    );
  }


export default Step1;