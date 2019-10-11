
import jsonContact from '../apis/jsonContact';

export const fetchContacts = () => async (dispatch) =>{

        const response = await jsonContact.get('/contacts');

        dispatch({type: 'FETCH_CONTACT', payload: response.data});

};