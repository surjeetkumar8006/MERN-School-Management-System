import axios from 'axios';
import {
    getRequest,
    getSuccess,
    getFailed,
    getError
} from './complainSlice';

import BASE_URL from '../../envirment';  // extension optional

export const getAllComplains = (id, address) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const url = `${BASE_URL}/${address}List/${id}`;
        const result = await axios.get(url);

        if (result.data.message) {
            dispatch(getFailed(result.data.message));
        } else {
            dispatch(getSuccess(result.data));
        }
    } catch (error) {
        dispatch(getError(error.message || "Network Error"));
    }
};
