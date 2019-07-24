import './TopArtists.css'

import React from 'react'

import ArtistItem from './ArtistItem'

const TopArtists = () => {

    return (
        <div className='top-artists'>
            <div className='header'></div>
            <div className='list'>
                <ArtistItem />
            </div>
        </div>
    )

}

export default TopArtists