import React from "react";
import { client } from "../lib/client";
import { HeroBanner } from "../components/HeroBanner";
import { Product } from "../components/Product";
// import Slider from "react-slick";
import { Imagewithtext } from "../components/Imagewithtext";
// import { VideoPlayer } from "../components/VideoPlayer";
// import { Accordian } from "../components/Accordian";

// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

const Home = ({ products, bannerData, iwisec }) => (
  <div>
     <HeroBanner heroBanner={bannerData.length && bannerData[1]} />
     <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>speaker There are many variations passages</p>
    </div>
     <div className="product">
       {/* <Slider {...settings}> */}
      {products?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
      {/* </Slider> */}
    </div>

    <div>
      {iwisec?.map((iwtsection) => (
        <Imagewithtext key={iwtsection.id} iwisec={iwtsection}/>    
      ))}
    </div>
      {/* <VideoPlayer /> */}
    <div className="">
      {/* <Accordian /> */}
    </div>

  </div>
);

var settings = {
  dots: false,
  arrows:true,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  
  const iwtQuery = '*[_type == "imagewithtext"]';
  const iwisec = await  client.fetch(iwtQuery);

  return {
    props: { products, bannerData, iwisec },
  };
};

export default Home;
