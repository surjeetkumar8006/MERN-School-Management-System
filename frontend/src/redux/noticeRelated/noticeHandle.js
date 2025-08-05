import axios from 'axios';
import {
    getRequest,
    getSuccess,
    getFailed,
    getError
} from './noticeSlice';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getAllNotices = (id, address) => async (dispatch) => {
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
        // Better error message extraction
        dispatch(getError(error.response?.data?.message || error.message || "Network Error"));
    }
};
