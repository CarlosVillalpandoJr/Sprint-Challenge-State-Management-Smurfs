import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../actions/actions';


const SmurfForm = props => {
    // console.log('Smurf Form', props.addSmurf)
    const [smurf, setSmurf] = useState({ name: '', age: '', height: ''})

    const handleChanges = event => {
        setSmurf({ ...smurf, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        console.log('handleSubmit SMURF', smurf)
        event.preventDefault()
        props.addSmurf(smurf)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Add New Smurf!</label>
                <br/>
                <input 
                placeholder='Name'
                id='name'
                name='name'
                value={smurf.name}
                onChange={handleChanges}
                />
                <input 
                placeholder='Age'
                id='age'
                name='age'
                value={smurf.age}
                onChange={handleChanges}
                />
                <input 
                placeholder='Height'
                id='height'
                name='height'
                value={smurf.height}
                onChange={handleChanges}
                />
                <button type='submit'>Submit Smurf</button>
            </form>
        </div>
    )
}


export default connect(state => {
    return {
    smurfData: state.smurfData,
    isFetching: state.isFetching,
    error: state.error
    }
}, {addSmurf})(SmurfForm)
