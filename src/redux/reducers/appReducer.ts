import { appReducerState} from "../types";
import { SELECT_SONG, GET_ALL_SONGS} from "../types strings/typesStrings";

const initialState: appReducerState = {
    selectedSong: {
        key: "",
        name: "",
        artist: "",
        album: "",
        cover: ""
    },
    songResults: []
}

interface action {
    type: string;
    payload: any;
}

const appReducer = (state: appReducerState = initialState, action: action): appReducerState => {
    switch (action.type) {
      case SELECT_SONG:
        return {
          ...state,
          selectedSong: action.payload,
        }
      case GET_ALL_SONGS:
        return {
          ...state,
          songResults: action.payload,
        }
      default:
        return state;
    }
}

export default appReducer;