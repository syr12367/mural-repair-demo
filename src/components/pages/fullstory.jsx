import React, { useState, useRef ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';




import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography'; // 导入 Typography 组件
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



function Fullstory() {
  const navigate = useNavigate();
  
   



    return (
      <div className="App" style={{alignItems:"center"}}>
        <p>还在开发中</p>
        <img src="programming.png">

        </img>

      </div>
    );
  }


export default Fullstory;