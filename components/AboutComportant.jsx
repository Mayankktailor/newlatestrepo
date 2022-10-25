import React from 'react'

 const AboutComportant = ({ aboutobj }) => {
  return (
    <div className='products-heading'>
       <h2 className=''>{aboutobj.Title}</h2>
        <p>{aboutobj.desc}</p>
    </div>
  )
}
export default AboutComportant;