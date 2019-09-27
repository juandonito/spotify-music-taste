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
                    alt='profile' 
                />
            )
        }else{
            return (
                <div
                    className='thumbnail'
                    alt='profile not available'
                />
            )
        }
    }
    
    return (
        <div className='item'>
            <span className='rank'>{rank}</span>
            {helperProfilePicture()}
            <span className='details'>
                <span className='info-primary'>
                    {name}
                </span>
                <span className='info-secondary'>
                    {genres.slice(0, 3).join(', ')}
                </span>
            </span>
        </div>
    )
}

export default ArtistItem