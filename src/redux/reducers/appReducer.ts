import { appReducerState, song } from "../types";

const initialState: appReducerState = {
    selectedSong: {
        key: "string",
        name: "string",
        artist: "string",
        album: "string",
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