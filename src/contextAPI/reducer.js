export const initialState = {
    user: {},
    token: "",//"BQBR7zCM0Z3nNLbCDQpGyvv_WMBLrQuCrMnWg5zFisZYduNEW-SmcjrAr2Kw3S_lHaUlY0o1xDmdejyyX57NjOvtsprq-A5lI29SjH6Wxgo57wf34erHZy7hJVZFahsz2gzBEqFoLynaaneLTPojCH1DQQm5IPwN6rnUsoe4Sf93IGezzYSXhoLZiaB-ubyWKyEOTrE3264tmUJCZ7KW",
    playList: [],
    item: null,
    playing: false
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
        default: return state;
    }

}

export default reducer;