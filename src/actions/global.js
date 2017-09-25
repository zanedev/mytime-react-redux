import 'whatwg-fetch'
import { push } from 'connected-react-router'

export function returnToHome() {
    return (dispatch) => {
        dispatch(push('/'));
    };
}
