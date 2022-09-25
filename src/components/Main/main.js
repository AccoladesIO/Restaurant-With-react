import React from "react";
import { Grid, GridWrap, Wrap } from "./mainStyles";
import { CreditCard, Wallet } from "./mainStyles";
import bubbleImg from '../../image/bubble.png'

const Main = () => {
  return (
    <GridWrap>
      <h2>Order Food</h2>
      <div className="lines">
        <div className="line"></div>
      </div>
      <h3>Choose from variety of payments method</h3>
      <Grid>
        <Wrap>
          <CreditCard />
          <h2>Pay Online</h2>
          <h3>And wait for delivery.</h3>
        </Wrap>
        <Wrap>
          <Wallet />
          <h2>Pay With Cash</h2>
          <h3>When food is delivered to you.</h3>
        </Wrap>

        <Wrap className="cell" >
        <div class="bubble-wrapper">
            <img src={bubbleImg} alt="" />
          </div>
         </Wrap> 
        <Wrap></Wrap>
        <Wrap></Wrap>
      </Grid>
    </GridWrap>
  );
};

export default Main;
