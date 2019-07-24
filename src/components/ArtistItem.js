import './ArtistItem.css'

import React from 'react'

const ArtistItem = ({ artist, rank }) => {

    const {
        name,
        images,
        genres
    } = artist

    const helperProfilePicture = () => {
        const img = images[images.length - 1]

        if (img) {
            return (
                <img 
                    className='thumbnail' 
                    src={img.url} 
                    alt='profile picture' 
                />
            )
        }else{
            return (
                <img
                    className='thumbnail'
                />
            )
        }
    }
    
    return (
        <div className='artist-item'>
            <span className='rank'>{rank}</span>
            {helperProfilePicture()}
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