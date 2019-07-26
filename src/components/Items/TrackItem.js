import React from 'react'

const TrackItem = ({ track, rank }) => {

    const {
        name,
        artists,
        album
    } = track

    const helperPicture = () => {
        const img = album.images[album.images.length - 1]

        if (img) {
            return (
                <img 
                    className='thumbnail' 
                    src={img.url} 
                    alt='album' 
                />
            )
        }else{
            return (
                <img
                    className='thumbnail'
                    alt='album'
                />
            )
        }
    }

    const artistsHelper = () => {
        const artistsNameList = artists.map(artist => artist.name)
        return artistsNameList.join(', ')
    }

    return (
        <div className='item'>
            <span className='rank'>{rank}</span>
            {helperPicture()}
            <span className='details'>
                <span className='info-primary'>
                    {name}
                </span>
                <span className='info-secondary'>
                    {artistsHelper()}
                </span>
            </span>
        </div>
    )
}

export default TrackItem