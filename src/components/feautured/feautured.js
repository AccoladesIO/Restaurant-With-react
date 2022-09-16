import React from 'react'
// import './feauturedStyle.js'
import techCrunch from '../../image/techcrunch.png'
import businessInsider from '../../image/business-insider.png'
import forbes from '../../image/forbes.png'
import usaToday from '../../image/usa-today.png'
import newYorkTimes from '../../image/the-new-york-times.png'
const Feautured = () => {
  return (
    <section class="section-featured">
        <div class="container">
            <h2 class="heading-featured-in">As featured in</h2>
            <div class="logos">
                <img src={techCrunch} alt="" />
                <img src={businessInsider} alt="" />
                <img src={forbes} alt="" />
                <img src={usaToday} alt="" />
                <img src={newYorkTimes} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Feautured