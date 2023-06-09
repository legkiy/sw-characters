import { createSlice } from '@reduxjs/toolkit';

export interface ISwCharacter {
  id: number;
  name: string;
  height: number;
  mass: number;
  gender: string;
  homeworld: string;
  wiki: string;
  image: string;
  born: number;
  bornLocation: string;
  died: number;
  diedLocation: string;
  species: string;
  hairColor: string;
  eyeColor: string;
  skinColor: string;
  cybernetics: string;
  affiliations: string[];
  masters: string[];
  apprentices: string[];
  formerAffiliations: [];
}

export interface ISWState {
  swList: ISwCharacter[];
}

const swState: ISWState = {
  swList: [],
};

export const swSlice = createSlice({
  name: 'swList',
  initialState: swState,
  reducers: {
    setSwList: (state, action) => {
      state.swList = action.payload;
    },
  },
});

export const { setSwList } = swSlice.actions;

export default swSlice.reducer;
