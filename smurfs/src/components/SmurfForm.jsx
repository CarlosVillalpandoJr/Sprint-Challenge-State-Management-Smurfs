import React, { useState } from 'react';


const SmurfForm = props => {
    const [smurf, setSmurf] = useState({ name: '', age: '', height: ''})

    const handleChanges = event => {
        setSmurf({ ...smurf, [event.target.name]: event.target.value })
    }

    return (
        <div>
            <form>
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
            </form>
        </div>
    )
}

export default SmurfForm;