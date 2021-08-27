import { song, selectSongActionInterface, getAllSongsActionInterface, setErrorActionInterface } from "../types";
import { SELECT_SONG, GET_ALL_SONGS} from "../types strings/typesStrings";

export const selectSongAction = (song: song): selectSongActionInterface => {
    return {
        type: SELECT_SONG,
        payload: song,
    }
}

export const getAllSongsAction = (songsArray: song[]): getAllSongsActionInterface => {
    return {
        type: GET_ALL_SONGS,
        payload: songsArray
    }
}


