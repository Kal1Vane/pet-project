import { UserTheme } from '../../const';
import { State } from '../../types/state';

export const getData = (state: State) : string => state.data;

export const getUserTheme = (state: State) : UserTheme => state.userTheme;
