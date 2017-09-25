import { Map, List, fromJS } from 'immutable'



const initialState = fromJS({
    servicesError: false,
    servicesLoading: false,
    servicesSuccess: []
});

export function services(state = initialState, action) {
    switch (action.type) {
        case 'SERVICES_ERROR':
            return state.set("servicesError", action.hasErrored);
        case 'SERVICES_LOADING':
            return state.set("servicesLoading", action.isLoading);
        case 'SERVICES_SUCCESS':
            return state.set("servicesSuccess", fromJS(action.services));
        default:
            return state;
    }
}
