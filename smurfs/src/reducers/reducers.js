import { FETCH_SMURFS_LOADING, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE } from '../actions/actions'

const initialState = {
        smurfData: [],
        error: null,
        isFetching: false
    }


function reducer(state = initialState, action) {
    console.log('Reducer Firing', action)
    switch(action.type) {
        case FETCH_SMURFS_LOADING:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                smurfData: action.payload,
                isFetching: false,
                error: null
            }
        case FETCH_SMURFS_FAILURE:
            return {
                ...state,
                smurfData: [],
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default reducer;