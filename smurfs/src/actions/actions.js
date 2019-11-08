import axios from 'axios'

// Action Types 
export const FETCH_SMURFS_LOADING = 'FETCH_SMURFS_LOADING'
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS'
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE'

export const CREATE_SMURF_START = 'CREATE_SMURF_START'
export const CREATE_SMURF_SUCCESS = 'CREATE_SMURF_SUCCESS'
export const CREATE_SMURF_FAILURE = 'CREATE_SMURF_FAILURE'




export const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURFS_LOADING })
    axios
        .get(`http://localhost:3333/smurfs`)
        .then(response => dispatch({ type: FETCH_SMURFS_SUCCESS, payload: response.data}))
        .catch(error => dispatch({ type: FETCH_SMURFS_FAILURE, payload: error}))
}

export const addSmurf = smurf => dispatch => {
    console.log(smurf)
    dispatch({ type: CREATE_SMURF_START });
    axios
        .post(`http://localhost:3333/smurfs`, smurf)
        .then(response => {
            console.log('Add Smurf: ', smurf)
            dispatch({type: CREATE_SMURF_SUCCESS, payload: response.data })
            })
        .catch(error => dispatch({ type: CREATE_SMURF_FAILURE, payload: error}))
}

















// Action Creators 
// export const smurfsLoading = () => ({
//     type: FETCH_SMURFS_LOADING
// })


// export const smurfsLoadSuccess = (data) => ({
//     type: FETCH_SMURFS_SUCCESS,
//     payload: data
// })


// export const smurfsLoadFailure = (error) => ({
//     type: FETCH_SMURFS_FAILURE,
//     payload: error
// })

// export const smurfsCreate = () => ({
//     type: CREATE_SMURF_START
// })

// export const smurfsCreateSuccess = (data) => ({
//     type: CREATE_SMURF_SUCCESS,
//     payload: data
// })

// export const smurfsCreateFailure = (error) => ({
//     type: CREATE_SMURF_FAILURE,
//     payload: error
// })





