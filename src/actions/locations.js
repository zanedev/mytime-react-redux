import 'whatwg-fetch'
import locationsData from '../data/locations';

export function locationsError(bool) {
    return {
        type: 'LOCATIONS_ERROR',
        hasErrored: bool
    };
}

export function locationsLoading(bool) {
    return {
        type: 'LOCATIONS_LOADING',
        isLoading: bool
    };
}

export function locationsSuccess(locations) {
    return {
        type: 'LOCATIONS_SUCCESS',
        locations
    };
}

export function locationsFetchData() {
    return (dispatch) => {
        dispatch(locationsLoading(true));
        dispatch(locationsLoading(false));
        dispatch(locationsSuccess(locationsData));


        // const url = 'http://www.mytime.com/api/v2/companies/40426/locations.json'
        // fetch(url)
        //     .then((response) => {
        //         if (!response.ok) {
        //             throw Error(response.statusText);
        //         }
        //
        //         dispatch(locationsLoading(false));
        //
        //         return response;
        //     })
        //     .then((response) => response.json())
        //     .then((items) => dispatch(locationsSuccess(items)))
        //     .catch(() => dispatch(locationsError(true)));
    };
}
