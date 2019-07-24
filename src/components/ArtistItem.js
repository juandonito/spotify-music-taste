import './ArtistItem.css'

import React from 'react'

const ArtistItem = ({ artist, rank }) => {

    const {
        name,
        images,
        genres
    } = artist
    
    return (
        <div className='artist-item'>
            <span className='rank'>{rank}</span>
            <span className='thumbnail' />
            <span className='details'>
                <span className='artist-name'>
                    {name}
                </span>
                <span className='artist-genre'>
                    {genres.slice(0, 3).join(', ')}
                </span>
            </span>
        </div>
    )
}

export default ArtistItem