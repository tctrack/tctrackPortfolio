import React from 'react';
import CommonBanner from '../CommonBanner/CommonBanner';
import About from '../Home/About';
import Service from '../Home/Service/Service';
import Counter from '../Home/Counter/Counter';
import Resume from '../Home/Resume/Resume';
import Team from '../Home/Team/Team';

function AboutPage() {
  return (
    <>
      <CommonBanner title="About"/>
      <About/>
      <Service/>
      <Counter/>
      <Resume/>
      <Team/>
      <div className='pageBottom-margin'></div>
    </>
  )
}

export default AboutPage
