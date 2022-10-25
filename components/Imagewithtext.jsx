import React from 'react';
import Link from "next/link";

import { urlFor } from "../lib/client";

export const Imagewithtext = ({ iwisec }) => {
  return (
    <div className="imgwithtext">
        <div className='Image'>
            <img src={urlFor(iwisec.image)} alt='Banner'/>
        </div>
        <div className='text'>
            <h2>{iwisec.Title}</h2>
            <p>{iwisec.desc}</p>
            <Link href={iwisec.href}>
                {iwisec.buttontxt}
            </Link>
        </div>
    </div>
  )
}