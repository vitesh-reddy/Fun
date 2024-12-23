import React from 'react'
import fun from "../assets/fun.mp4"

const Video = () => {
  return (
    <div className='flex items-center justify-center bg-[rgb(0_8_28)] h-full w-full my-100'>
      <video src={fun} autoPlay={true}></video>
    </div>
  )
}

export default Video