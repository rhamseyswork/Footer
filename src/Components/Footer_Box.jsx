import React from 'react'

const Footer_Box = (props) => {
  return (
    <div className='FooterBox'>
    <div className='Footer_Box_Title'>{props.title}</div>
    <div className='Footer_Box_Text'>{props.children}</div>
    </div>
  )
}

export default Footer_Box