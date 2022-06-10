export const USER_NAME = 'User';

export enum UserTheme {
  Light = 'LIGHT',
  Night = 'NIGHT',
  Psyhodelick = 'PSYHODELICK',
}

export enum NameSpace {
  app = 'APP',
}


export enum AppRoute {
  Main = '/',
  Summer = '/summer',
  Valentayne = '/valentayne',
  NewYear = '/newyear',
  CustomData = '/customdate',
  NoPath = '*',
}

export enum HappyDay {
  'Valentine Day' = AppRoute.Valentayne,
  'New Year' = AppRoute.NewYear,
}
