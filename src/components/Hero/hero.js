import React from "react";
import { HeroStyled, TextContent, Btn, Circle } from "./heroStyle";


const Hero = () => {
  return (
    <>
      <HeroStyled>
        
        <TextContent>
          <h1>FOODBOARD</h1>
          <h2>Food Ordered By You, Delivered to You</h2>
          <Btn>Order Now</Btn>
          <Btn>Learn More</Btn>
        </TextContent>
        <Circle>
          <p>&dArr;</p>
        </Circle>
      </HeroStyled>
    </>
  );
};

export default Hero;
