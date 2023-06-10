import { createSlice } from '@reduxjs/toolkit';
import { ISwCharacter } from './interfaces';

interface ISWState {
  swList: ISwCharacter[];
  favoritesIds: number[];
}

const swState: ISWState = {
  swList: [],
  favoritesIds: [],
};

export const swSlice = createSlice({
  name: 'swList',
  initialState: swState,
  reducers: {
    setSwList: (state, action) => {
      state.swList = action.payload;
    },
    setFavoritesIds: (state, action) => {
      state.favoritesIds = action.payload;
    },
  },
});

export const { setSwList, setFavoritesIds } = swSlice.actions;

export default swSlice.reducer;
