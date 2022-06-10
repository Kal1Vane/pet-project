import { UserTheme } from '../const';
import { store } from '../store';

export type State = ReturnType<typeof store.getState>;

export type AppProcess = {
  data: string,
  userTheme: UserTheme
};
