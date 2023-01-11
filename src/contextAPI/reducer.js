export const initialState = {
    user: {},
    //token: "BQBR7zCM0Z3nNLbCDQpGyvv_WMBLrQuCrMnWg5zFisZYduNEW-SmcjrAr2Kw3S_lHaUlY0o1xDmdejyyX57NjOvtsprq-A5lI29SjH6Wxgo57wf34erHZy7hJVZFahsz2gzBEqFoLynaaneLTPojCH1DQQm5IPwN6rnUsoe4Sf93IGezzYSXhoLZiaB-ubyWKyEOTrE3264tmUJCZ7KW",
    playLists: [],
    item: null,
    playing: false,
    songs: [],
    selectedTrack: ""
}

 const reducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            }
        case "SET_PLAYLISTS":
            return{
                ...state,
                playLists: action.playLists
            }
        case "SET_OLDSONGS":
                return{
                    ...state,
                    songs: action.songs
                }
         case "SET_SELECTEDTRACK":
                return{
                        ...state,
                        selectedTrack: action.selectedTrack
                    }
                
            
        default: return state;
    }

}

export default reducer;