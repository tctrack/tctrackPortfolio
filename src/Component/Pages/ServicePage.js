import React from 'react'
import CommonBanner from '../CommonBanner/CommonBanner';
import Service from '../Home/Service/Service';
import Counter from '../Home/Counter/Counter';


function ServicePage() {
  return (
    <>
      <CommonBanner title="Service"/>
      <Service/>
      <Counter/>
      <div className='pageBottom-margin'></div>
    </>
  )
}

export default ServicePage
