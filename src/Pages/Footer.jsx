import React from 'react';
import FooterBox from '../Components/Footer_Box';
import Divider from '@mui/material/Divider';

function Footer() {
  return (
    <div className='Footer'>
      <FooterBox title="About">This is a footer.</FooterBox>
      <Divider orientation="vertical" variant="middle" style={{ backgroundColor: 'black' }} flexItem />
      <FooterBox title="Contact">Email:</FooterBox>
      <Divider orientation="vertical" variant="middle" style={{ backgroundColor: 'black' }} flexItem />
      <FooterBox title="Example">import map</FooterBox>
    </div>
  )
}

export default Footer;
