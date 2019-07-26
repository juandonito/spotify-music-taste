import './Top.css'

import React from 'react'
import { connect } from 'react-redux'
import { doFetchRecentTracks } from '../actions/recentTracksAction';

import { TrackItem } from './Items'

class TopRecent extends React.Component {

    componentDidMount() {

        const { fetchRecentTracks } = this.props;
        fetchRecentTracks()

    }

    render() {

        const { recentTracks } = this.props

        const list = recentTracks.map((track, key) => <TrackItem key={key} rank={key + 1} track={track.track} />)

        return (
            <div className='top hits'>
                <div className='header'></div>
                <div className='list'>
                    {list}
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        recentTracks: state.recentTracksState.recentTracks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchRecentTracks: () => dispatch(doFetchRecentTracks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopRecent)