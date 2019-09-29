import './Top.css'

import React from 'react'
import { connect } from 'react-redux'

import { ArtistItem } from './Items'
import TimeRangeNav from './TimeRangeNav'
import { doFetchTopArtists, doUpdateTimeRange } from '../actions/artistsAction';

class TopArtists extends React.Component{

    componentDidMount() {
        const { fetchTopArtists } = this.props;
        fetchTopArtists()
    }
    
    render() {

        const {
            topArtists,
            currentTimeRange,
            updateArtistsTimeRange,
            fetching
        } = this.props

        const list = topArtists.map((artist, key) => <ArtistItem key={key} artist={artist} rank={key+1} />)

        return (
            <div className='top artists'>
                <div className='header'></div>
                <div className='list'>
                    <TimeRangeNav 
                        handleTimeRangeChange={updateArtistsTimeRange}
                        currentTimeRange={currentTimeRange}
                    />
                    {fetching ? null : list}
                </div>
            </div>
        )
    }

}

const mapstateToProps = (state) => {
    return {
        topArtists: state.artistsState.topArtists,
        currentTimeRange: state.artistsState.timeRange,
        fetching: state.artistsState.fetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTopArtists : () => dispatch(doFetchTopArtists()),
        updateArtistsTimeRange: (timeRange) => dispatch(doUpdateTimeRange(timeRange))
    }
}

export default connect(mapstateToProps, mapDispatchToProps)(TopArtists)