import axios from 'axios';
import {
    getRequest,
    getSuccess,
    getFailed,
    getError
} from './noticeSlice';

// Agar aap centralized environment file se import kar rahe ho to wo bhi kar sakte hain:
import BASE_URL from '../../envirment';

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
        // Axios error mein server se aaya hua message ya default message
        dispatch(getError(error.response?.data?.message || error.message || "Network Error"));
    }
};
