import 'whatwg-fetch'
import servicesData from '../data/services';
import { push } from 'connected-react-router'

export function servicesError(bool) {
    return {
        type: 'SERVICES_ERROR',
        hasErrored: bool
    };
}

export function servicesLoading(bool) {
    return {
        type: 'SERVICES_LOADING',
        isLoading: bool
    };
}

export function servicesSuccess(services) {
    return {
        type: 'SERVICES_SUCCESS',
        services
    };
}

export function servicesFetchData() {
    return (dispatch) => {
        dispatch(servicesLoading(true));
        dispatch(servicesLoading(false));
        dispatch(servicesSuccess(servicesData));
        dispatch(push('/services'));

        // const url = 'http://www.mytime.com/api/v2/companies/40426/services.json?location_id=39016&include_variations=1'
        // fetch(url)
        //     .then((response) => {
        //         if (!response.ok) {
        //             throw Error(response.statusText);
        //         }
        //
        //         dispatch(servicesLoading(false));
        //
        //         return response;
        //     })
        //     .then((response) => response.json())
        //     .then((items) => dispatch(servicesSuccess(items)))
        //     .catch(() => dispatch(servicesError(true)));
    };
}
