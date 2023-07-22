import React from 'react'
import Counter from '../Home/Counter/Counter';
import Resume from '../Home/Resume/Resume';
import CommonBanner from '../CommonBanner/CommonBanner';

function ResumePage() {
  return (
    <>
      <CommonBanner title="Resume"/>
      <Resume/>
      <Counter/>
      <div className='pageBottom-margin'></div>
    </>
  )
}

export default ResumePage
