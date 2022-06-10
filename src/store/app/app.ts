import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, UserTheme } from '../../const';
import { AppProcess } from '../../types/state';


const initialState : AppProcess = {
  data: '',
  userTheme: UserTheme.Light,
};


export const appProcess = createSlice({
  name: NameSpace.app,
  initialState,
  reducers: {
    changeData : (state,action) => {
      state.data = action.payload;
    },
    changeUserTheme : (state,action) => {
      state.userTheme = action.payload;
    },
  },
});

export const {changeData,changeUserTheme} = appProcess.actions;
