import { Box, Heading, Img} from '@chakra-ui/react';
import React from 'react'
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.png';


const Home = () => {
  return (
    <Box>
        <MyCarousel/>
    </Box>
  );
}
const MyCarousel =()=>(
    <Carousel 
    autoPlay 
    infiniteLoop 
    interval={1000} 
    showStatus={false} 
    showThumbs={false} 
    showArrows={false}
    >
        <Box w={'full'} h={'100vh'}>
            <Img src={img1}/>
            <Heading bgColor={"blackAlpha.600"} color={"white"}>Watch the Future</Heading>
        </Box>
    </Carousel>
);

export default Home;