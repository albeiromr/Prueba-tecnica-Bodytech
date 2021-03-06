// song interfaces

export interface song {
  key: string;
  name: string;
  artist: string;
  album: string;
  cover: string;
}

export interface appReducerState {
  selectedSong: song;
  songResults: song[];
}

//action interfaces 
export interface selectSongActionInterface {
  type: string;
  payload: song;
}

export interface getAllSongsActionInterface {
  type: string;
  payload: song[];
}
