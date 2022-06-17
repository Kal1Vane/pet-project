import { UserTheme } from '../../const';
import { State } from '../../types/state';

export const getUserTheme = (state: State) : UserTheme => state.userTheme;
