

const initialState = [
    {
        name: 'Brainey',
        age: 200,
        height: '5cm',
        id: 0
    }
]

function reducer(state = initialState, action) {
    console.log('Reducer Firing', action)
    switch(action.type) {
        default:
            return state;
    }
}

export default reducer;