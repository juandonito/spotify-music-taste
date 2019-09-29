import './Top.css'

import React from 'react'
import { connect } from 'react-redux'

import { TrackItem } from './Items'
import TimeRangeNav from './TimeRangeNav'
import { doFetchTopHits, doUpdateTimeRange } from '../actions/hitsAction'

class TopHits extends React.Component {

    componentDidMount() {
        const { fetchTopHits } = this.props
        fetchTopHits()
    }

    render() {

        const {
            topHits,
            currentTimeRange,
            updateHitsTimeRange,
            fetching
        } = this.props

        const list = topHits.map((track, key) => <TrackItem key={key} rank={key + 1} track={track} />)

        return (
            <div className='top hits'>
                <div className='header'></div>
                <div className='list'>
                    <TimeRangeNav
                        handleTimeRangeChange={updateHitsTimeRange}
                        currentTimeRange={currentTimeRange}
                    />
                    {fetching ? null : list}
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        topHits : state.hitsState.topHits,
        currentTimeRange : state.hitsState.timeRange,
        fetching: state.hitsState.fetching
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTopHits : () => dispatch(doFetchTopHits()),
        updateHitsTimeRange: (timeRange) => dispatch(doUpdateTimeRange(timeRange))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopHits)