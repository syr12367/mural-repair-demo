import logo from './logo.svg';
import './App.css';

import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

import NewPage from './components/pages/page1'; // 导入 NewPage 组件
import Page2 from './components/pages/page2';
import Step1 from './components/pages/step1';
import Step12 from './components/pages/step12';
import Step21 from './components/pages/step21';
import Step22 from './components/pages/step22';
import Step31 from './components/pages/step31';
import Step4 from './components/pages/step4';

import Fullstory from './components/pages/fullstory';


import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography'; // 导入 Typography 组件
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function App() {
  return (
    <Router>
      <div className="App" >
        <Routes>
          <Route path="/" element={<NewPage />} />
          <Route path="/page-2" element={<Page2 />} />
          <Route path="/dust-removal" element={<Step1 />} />
          <Route path="/dust-removal2" element={<Step12 />} />
          <Route path="/step21" element={<Step21 />} />
          <Route path="/step22" element={<Step22 />} />
          <Route path="/step31" element={<Step31 />} />
          <Route path="/step4" element={<Step4 />} />
          <Route path="/fullstory" element={<Fullstory />} />







          {/* <Route path="/timer" element={<TimerPage />} />
          <Route path="/welcome-back" element={<WelcomeBack />} /> */}
        </Routes>
      </div>
    </Router>
  );

}


export default App;
