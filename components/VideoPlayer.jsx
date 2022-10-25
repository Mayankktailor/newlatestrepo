import React from 'react';
import ReactPlayer from 'react-player';


export const VideoPlayer = () => {
  return (
      <div className='text-center player'>
        <ReactPlayer url='https://www.youtube-nocookie.com/embed/-TBhFgnpgLk?autoplay=1&amp;showinfo=0&amp;rel=0' 
        width='100%'
         />
     </div>
  )
}
