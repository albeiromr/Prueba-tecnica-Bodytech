import { appReducerState, song } from "../types";

const initialState: appReducerState = {
    selectedSong: {
        key: "",
        name: "",
        artist: "",
        album: "",
        cover: ""
    },
    songResults: [],
    error: false
}

interface action {
    type: string;
    payload: song | song[] | boolean
}

const appReducer = (state: appReducerState = initialState, action: action): appReducerState => {
    switch (action.type) {
        default:
            return state;
    }
}

export default appReducer;