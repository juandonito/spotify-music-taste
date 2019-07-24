import './TopArtists.css'

import React from 'react'

const TopArtists = () => {

    return (
        <div className='top-artists'>
            <div className='header'></div>
            <div className='list'>
                <div className='artist-entry'>
                    <span className='rank'>1</span>
                    <span className='thumbnail'/>
                    <span className='details'>
                        <span className='artist-name'>
                            Nekfeu
                        </span>
                        <span className='artist-genre'>
                            rap,hip-hop, genius
                        </span> 
                    </span>
                </div>
            </div>
        </div>
    )

}

export default TopArtists