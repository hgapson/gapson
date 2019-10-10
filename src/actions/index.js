// action creator

const selectSong=(song)=>{
    //return an action
    return{
        type:'SONG_SELECTED',
        payload: song
    };
};

export default selectSong;