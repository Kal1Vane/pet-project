import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, UserTheme } from '../../const';
import { AppProcess } from '../../types/state';


const initialState : AppProcess = {
  userTheme: UserTheme.Main,
};


export const appProcess = createSlice({
  name: NameSpace.app,
  initialState,
  reducers: {
    changeUserTheme : (state,action) => {
      state.userTheme = action.payload;
    },
  },
});

export const {changeUserTheme} = appProcess.actions;
