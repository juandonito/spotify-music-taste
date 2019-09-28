import React from 'react'

const TrackItem = ({ track, rank }) => {

    const {
        name,
        artists,
        album,
        uri
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
                <div
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
        <a href={uri}>
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
        </a>
    )
}

export default TrackItem