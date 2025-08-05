import axios from 'axios';
import {
    getRequest,
    getSuccess,
    getFailed,
    getError,
    postDone,
    doneSuccess
} from './teacherSlice';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const handleError = (dispatch, error) => {
    const message =
        error.response?.data?.message ||
        error.message ||
        "Network Error";
    dispatch(getError(message));
};

export const getAllTeachers = (id) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.get(`${BASE_URL}/Teachers/${id}`);
        if (result.data.message) {
            dispatch(getFailed(result.data.message));
        } else {
            dispatch(getSuccess(result.data));
        }
    } catch (error) {
        handleError(dispatch, error);
    }
};

export const getTeacherDetails = (id) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.get(`${BASE_URL}/Teacher/${id}`);
        if (result.data) {
            dispatch(doneSuccess(result.data));
        }
    } catch (error) {
        handleError(dispatch, error);
    }
};

export const updateTeachSubject = (teacherId, teachSubject) => async (dispatch) => {
    dispatch(getRequest());

    try {
        await axios.put(
            `${BASE_URL}/TeacherSubject`,
            { teacherId, teachSubject },
            {
                headers: { 'Content-Type': 'application/json' },
            }
        );
        dispatch(postDone());
    } catch (error) {
        handleError(dispatch, error);
    }
};
