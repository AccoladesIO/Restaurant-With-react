import React from "react";
import { HeroStyled, TextContent, Btn, Circle } from "./heroStyle";

const Hero = () => {
  return (
    <>
      <HeroStyled>
        <TextContent>
          <h1>Food Ordered By You, Delivered to You</h1>
          <Btn>Order Now</Btn>
        </TextContent>
        <Circle>
          <p>&dArr;</p>
        </Circle>
      </HeroStyled>
    </>
  );
};

export default Hero;
