import React from 'react'
import royaltyFreeLicense from '../../assets/documents/royalty-free-license.png'
import royaltyFreeLicensePDF from '../../assets/documents/mongamonga_-Royalty-Free-License.pdf'

function LoopLicense() {
    return (
        <div className='container'>
            <h2 className='section-header license-header'>mongamonga_ Royalty Free License:</h2>
            <p className='license-text'>Click <a className='license-download' href={royaltyFreeLicensePDF} download>here</a> to download the full license</p>
            
            <img
                src={royaltyFreeLicense}
                alt="A screen shot of my royalty free loop license"
                key={royaltyFreeLicense}
            />

            <p className='license-text warning'>You are agreeing to these rules for ANY thing you post using my loops. I am the copyright owner and I will punish violating these rules.</p>
        </div>
    )
}

export default LoopLicense