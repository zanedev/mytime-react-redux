import { Map, List, fromJS } from 'immutable'



const initialState = fromJS({
    locationsError: false,
    locationsLoading: false,
    locationsSuccess: []
});

export function locations(state = initialState, action) {
    switch (action.type) {
        case 'LOCATIONS_ERROR':
            return state.set("locationsError", action.hasErrored);
        case 'LOCATIONS_LOADING':
            return state.set("locationsLoading", action.isLoading);
        case 'LOCATIONS_SUCCESS':
            return state.set("locationsSuccess", fromJS(action.locations));
        default:
            return state;
    }
}
