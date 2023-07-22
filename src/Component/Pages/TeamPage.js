import React from 'react'
import CommonBanner from '../CommonBanner/CommonBanner';
import Team from '../Home/Team/Team';

function TeamPage() {
    return (
        <>
            <CommonBanner title="Team" />
            <Team/>
            <div className='pageBottom-margin'></div>
        </>
    )
}

export default TeamPage
