import React from 'react';
import { connect } from 'react-redux'
import { fetchSmurfs } from '../actions/actions'

import SmurfForm from './SmurfForm';


const SmurfList = props => {
    // console.log('SmurfList Props: ', props)
    return (
        <div>
            <h2>Smurf Village</h2>
            <SmurfForm />
            <button onClick={() => props.fetchSmurfs()}>Smurf Village</button>
            {props.smurfData.map(smurf => {
                return (
                    <div className='smurf-card' key={smurf.id}>
                        <h4>{smurf.name}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default connect(state => {
    return {
        smurfData: state.smurfData,
        isFetching: state.isFetching,
        error: state.error
    }
}, {fetchSmurfs})(SmurfList)