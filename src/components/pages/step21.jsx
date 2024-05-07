import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';




import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography'; // 导入 Typography 组件
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



function Step21() {
    const navigate = useNavigate();
    const [fadeIn, setFadeIn] = useState(false);


    useEffect(() => {
        // Trigger the fade in effect after a short delay
        const timer = setTimeout(() => {
            setFadeIn(true);
        }, 100);

        return () => clearTimeout(timer); // Cleanup the timer on unmount
    }, []);

    const [knife2Image, setKnife2Image] = useState('knife21.png');
    const [showKnife23, setShowKnife23] = useState(false); // State to track visibility of knife23

    const [knife3Image, setKnife3Image] = useState('knife31.png');
    const [knife1Image, setKnife1Image] = useState('knife11.png');
    const [text, setText] = useState('In this step, you need to first inject the adhesive into the interior of the mural for bonding, then cover it with moisture-proof paper, and begin reattaching the Qi Jia part of the mural. Do you know which knife below is needed for reattachment?');

    // Function to handle hover over knife1 image
    const handleKnife1Hover = () => {
        setKnife1Image('knife12.png');

    };

    // Function to handle hover out from knife1 image
    const handleKnife1HoverOut = () => {
        setKnife1Image('knife11.png');
    };

    // Function to handle click on knife1 image
    const handleKnife1Click = () => {
        // Toggle between two images
        setKnife1Image((prevImage) => {
            if (prevImage === 'knife12.png') {
                setText('The answer is wrong. Try again!');
                return 'knife13.png';
            } else {
                setText('In this step, you need to first inject the adhesive into the interior of the mural for bonding, then cover it with moisture-proof paper, and begin reattaching the Qi Jia part of the mural. Do you know which knife below is needed for reattachment?');
                return 'knife11.png';
            }
        });
    };

    // Function to handle hover over knife1 image
    const handleKnife3Hover = () => {
        setKnife3Image('knife32.png');

    };

    // Function to handle hover out from knife1 image
    const handleKnife3HoverOut = () => {
        setKnife3Image('knife31.png');
    };

    // Function to handle click on knife1 image
    const handleKnife3Click = () => {
        // Toggle between two images
        setKnife3Image((prevImage) => {
            if (prevImage === 'knife32.png') {
                setText('The answer is wrong. Try again!');
                return 'knife33.png';
            } else {
                setText('In this step, you need to first inject the adhesive into the interior of the mural for bonding, then cover it with moisture-proof paper, and begin reattaching the Qi Jia part of the mural. Do you know which knife below is needed for reattachment?');
                return 'knife31.png';
            }
        });
    };


    // Function to handle hover over knife1 image
    const handleKnife2Hover = () => {
        setKnife2Image('knife22.png');

    };

    // Function to handle hover out from knife1 image
    const handleKnife2HoverOut = () => {
        setKnife2Image('knife21.png');
    };

    // Function to handle click on knife1 image
    const handleKnife2Click = () => {
        // Toggle between two images
        setKnife2Image((prevImage) => {
            if (prevImage === 'knife22.png') {
                const newText = (
                    <div>
                      You got it right! The correct answer is a{' '}
                      <span style={{ color: '#D5C38C', fontWeight: 'bold' }}>specially made wooden spatula</span>. 
                      This material causes minimal damage to the mural, and its unique shape is conducive to completing 
                      the repair task.
                    </div>
                  );
                  setText(newText);
                setShowKnife23(true);
                return 'knife23.png';
            } else {
                setShowKnife23(false);
                setText('In this step, you need to first inject the adhesive into the interior of the mural for bonding, then cover it with moisture-proof paper, and begin reattaching the Qi Jia part of the mural. Do you know which knife below is needed for reattachment?');
                return 'knife21.png';
            }
        });
    };


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
                    backgroundImage: 'url(bg2.png)',
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
                    marginTop: '20px',
                    alignItems: 'center', justifyContent: 'center', // 水平和垂直方向上都居中
                }}
            >
                <img src="step2.png" style={{ width: "70%", margin: 0, padding: 0, display: 'block' }}></img>
            </div>
            <div style={{
                p: 4,
                position: 'relative',
                left: 0,
                width: '100%',
                display: 'flex',
                marginTop: '20px',
                opacity: fadeIn ? 1 : 0, // Apply fade in effect
                transition: 'opacity 1s ease-in-out', // CSS transition

            }}
            >
                <img src="step2title.png" style={{ height: '50px', float: 'left', marginLeft: '10%', padding: 0, display: 'block' }}></img>
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
                    <div style={{ height: '100px', overflowY: 'scroll'  }}>
                        <Typography variant="p" component="p" sx={{ color: 'white', margin: '20px', marginBottom: '0px' }}>
                            {text}
                        </Typography>

                    </div>

                    <div style={{ display: 'flex',width:"70%"}}>
                        <img
                            src={knife1Image}
                            style={{ width: '33%',cursor:'pointer' }}
                            onMouseEnter={handleKnife1Hover}
                            onMouseLeave={handleKnife1HoverOut}
                            onClick={handleKnife1Click}
                            
                            
                        ></img>
                        <img
                            src={knife2Image}
                            style={{ width: '33%',cursor:'pointer' }}
                            onMouseEnter={handleKnife2Hover}
                            onMouseLeave={handleKnife2HoverOut}
                            onClick={handleKnife2Click}
                        />
                       <img
                            src={knife3Image}
                            style={{ width: '33%',cursor:'pointer' }}
                            onMouseEnter={handleKnife3Hover}
                            onMouseLeave={handleKnife3HoverOut}
                            onClick={handleKnife3Click}
                        />

                    </div>
                    <Button
                        variant="contained"
                        sx={{


                            '&:hover': {
                                backgroundColor: '#C3BBA1',
                            },
                            backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            opacity: showKnife23 ? 1 : 0, // Set opacity based on showKnife23 state
                            transition: 'opacity 1s ease-in-out',
                        }}
                    >
                        <div style={{ color: 'white', margin: '0' }} onClick={() => navigate('/step22')}>CONTINUE</div>
                    </Button>



                </Stack>
            </Box>

        </div>
    );
}


export default Step21;