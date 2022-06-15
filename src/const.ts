export const USER_NAME = 'User';

export enum UserTheme {
  Light = 'LIGHT',
  Night = 'NIGHT',
  Psyhodelick = 'PSYHODELICK',
}

export enum NameSpace {
  app = 'APP',
}

export enum TextDay {
  Default = '',
  Summer = 'Time until summer',
  Valentayne  = 'Time until valentine\'s day',
  NewYear = 'Time until the new year',
  CustomData = 'Time to the selected date',
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


export enum DataDay {
  Summer = '06-01',
  Valentayne = '02-14',
  NewYear = '12-31',
}


export const formatNumber = (num:number) => num.toLocaleString('en-US', {
  minimumIntegerDigits: 2,
  useGrouping: false,
});
