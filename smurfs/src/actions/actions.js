// Action Types 
export const FETCH_SMURFS_LOADING = 'FETCH_SMURFS_LOADING'
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS'
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE'
// Action Creators 
export const smurfsLoading = () => ({
    type: FETCH_SMURFS_LOADING
})

export const smurfsLoadSuccess = (data) => ({
    type: FETCH_SMURFS_SUCCESS,
    payload: data
})
export const smurfsLoadFailure = (error) => ({
    type: FETCH_SMURFS_FAILURE,
    payload: error
})

export function fetchSmurfs() {
    
    return function(dispatch) {
        
        dispatch(smurfsLoading());

        return fetch(`http://localhost:3333/smurfs`)
            .then(response => response.json())
            .then(response => dispatch(smurfsLoadSuccess(response)))
            .catch(error => dispatch(smurfsLoadFailure(error)))
    }
}

