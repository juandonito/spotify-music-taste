import './TopArtists.css'

import React from 'react'
import { connect } from 'react-redux'

import ArtistItem from './ArtistItem'
import { doFetchTopArtists } from '../actions/artistsAction';

class TopArtists extends React.Component{

    componentDidMount() {
        const { fetchTopArtists } = this.props;
        fetchTopArtists()
    }
    
    render() {

        return (
            <div className='top-artists'>
                <div className='header'></div>
                <div className='list'>
                    <ArtistItem />
                </div>
            </div>
        )
    }

}

const mapstateToProps = (state) => {
    return {
        topArtists: state.artistsState.topArtists
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTopArtists : () => dispatch(doFetchTopArtists())
    }
}

export default connect(mapstateToProps, mapDispatchToProps)(TopArtists)