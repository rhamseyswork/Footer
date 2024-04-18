import React from 'react';
import FooterBox from '../Components/Footer_Box';


function Footer() {
  return (
    <div className='Footer'>
      <FooterBox title="About">This is a footer.</FooterBox>
      <FooterBox title="Contact">Email:</FooterBox>
      <FooterBox title="Example">import map</FooterBox>
    </div>
  )
}

export default Footer