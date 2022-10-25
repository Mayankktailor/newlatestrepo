import React from 'react';
import AboutComportant from '../../components/AboutComportant';
import { client } from "../../lib/client";

 const About = ({ aboutobj }) => {
  return (
      <div>
      {aboutobj?.map((about) => (
      // <Product key={product._id} product={product} />
            <AboutComportant  aboutobj={about}/>
      ))}
      </div>
  )
}

export const getServerSideProps = async () => {

      const query = '*[_type == "about"]';
      const aboutobj = await client.fetch(query);

      return {
        props: { aboutobj },
      };
    };

export default About;