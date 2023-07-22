import React from 'react'
import CommonBanner from '../CommonBanner/CommonBanner';
import Project from '../Home/Projects/Project';

function PortfolioPage() {
    return (
        <>
            <CommonBanner title="Portfolio" />
            <Project/>
            <div className='pageBottom-margin'></div>
        </>
    )
}

export default PortfolioPage
