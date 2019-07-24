import './ArtistItem.css'

import React from 'react'

const ArtistItem = () => {
    
    return (
        <div className='artist-item'>
            <span className='rank'>1</span>
            <span className='thumbnail' />
            <span className='details'>
                <span className='artist-name'>
                    Nekfeu
                </span>
                <span className='artist-genre'>
                    rap,hip-hop, genius
                </span>
            </span>
        </div>
    )
}

export default ArtistItem