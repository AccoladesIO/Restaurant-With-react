import React from "react";
import { Grid, GridWrap, Wrap } from "./mainStyles";
import { CreditCard } from "./mainStyles";

const Main = () => {
  return (
    <GridWrap>
      <Grid>
        <Wrap>
          <CreditCard />
          <h2>Pay Online</h2>
        </Wrap>
        <Wrap>
          <h2>Pay With Cash</h2>
        </Wrap>
        <Wrap className="cell" />
        <Wrap></Wrap>
        <Wrap></Wrap>
      </Grid>
    </GridWrap>
  );
};

export default Main;
