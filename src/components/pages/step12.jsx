import React, { useState, useRef ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';




import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography'; // 导入 Typography 组件
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



function Step1() {
  const navigate = useNavigate();
  



  // 设置透明度状态
  const [opacity, setOpacity] = useState(1);
  const [showText, setShowText] = useState(0);

  // 在组件加载完成后执行动画
  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity((prevOpacity) => prevOpacity - 0.1);
    }, 100);
  
    console.log('Opacity:', opacity); // Log the opacity value
  
    if (opacity <= 0) {
      console.log('Show text!');
      setShowText(1);
      clearInterval(interval);
    }
  
    return () => clearInterval(interval);
  }, [opacity]);

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
            opacity: opacity
          }}
        />
        <div
          className="bg-image2"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url(bg2.png)',
            backgroundSize: 'cover',
            zIndex: -2,
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
            
          }}
        >
            <img src="step1title.png" style={{height:'50px',float:'left',marginLeft:'10%',padding:0,display: 'block',opacity:showText,transition:'0.4s ease-in-out'}}></img>
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
          }}
        >
          <Stack spacing={1} direction="column" alignItems="center" justifyContent="space-between" style={{opacity:showText,transition:'0.4s ease-in-out'}}>
            <div style={{height:'100px'}}>
            <Typography variant="p" component="p" sx={{color:'white',margin:'20px',opacity:showText,transition:'0.4s ease-in-out'}}>
            Congratulations on completing the dust removal. Click "continue" to proceed to the next step.
          </Typography>
          
              </div>
          
              <Button
                  variant="contained"
                  sx={{

                    
                    '&:hover': {
                      backgroundColor: '#C3BBA1',
                    },
                    backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <div style={{color:'white',margin:'0' }} onClick={() => navigate('/step21')}>CONTINUE</div>
                </Button>
                
              
          </Stack>
        </Box>
      
      </div>
    );
  }


export default Step1;