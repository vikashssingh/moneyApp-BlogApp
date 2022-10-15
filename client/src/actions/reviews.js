import * as api from '../api';

export const getReviews = () => async (dispatch) => {
    try {
        const { data } = await api.fetchReviews();
        dispatch({type: 'FETCH_ALL_R' , payload: data});
        
    } catch (error) {
        console.log(error);
    }
}

export const createReview = (review) => async (dispatch) => {
    try {
        const { data } = await api.createReview(review);
        dispatch({type: 'CREATE_R' , payload: data});
        
    } catch (error) {
        console.log(error);
    }
}
