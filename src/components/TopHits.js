import './TopHits.css'

import React from 'react'

import { connect } from 'react-redux'
import { doFetchTopHits } from '../actions/hitsAction'

class TopHits extends React.Component {

    componentDidMount() {
        const { fetchTopHits } = this.props

        fetchTopHits()
    }

    render() {

        console.log(this.props.topHits)

        return (
            <div className='top-hits'>
                <div className='header'></div>
                <div className='list'>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        topHits : state.hitsState.topHits
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTopHits : () => dispatch(doFetchTopHits())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopHits)