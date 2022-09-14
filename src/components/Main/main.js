import React from 'react'
import { Grid, GridWrap, Wrap } from './mainStyles'

const Main = () => {
  return (
    <GridWrap>
        <Grid>
        <Wrap/>
        <Wrap/>
        <Wrap className='cell'/>
        <Wrap/>
        <Wrap/>
    </Grid>
    </GridWrap>
  )
}


export default Main