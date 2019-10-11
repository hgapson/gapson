export default (state = [], action)=>{

    switch(action.type){

        case 'FETCH_CONTACT':

            return action.payload;

        default:

            return state;

    }

}