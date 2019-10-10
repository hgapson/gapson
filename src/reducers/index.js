import {combineReducers} from 'redux';

const songReducer=()=>{
    return[
        {title: 'no scrubs', duration:'4:05'},
        {title: 'macarena', duration:'2:05'},
        {title: 'slowly', duration:'5:05'},
        {title: 'hope in front of me', duration:'4:05'},
    ];
};

const selectingSongReducer=(selectedSong=null, action)=>{
    if(action.type==='SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}

combineReducers({
    songs: songReducer,
    selectedSong: selectingSongReducer
});

export default combineReducers;
