export const USER_NAME = 'User';

export enum UserTheme {
  NewYear = 'NEWYEAR',
  Valentayne = 'VALENTAYNE',
  CustomData = 'CUSTOMDATA',
  Summer = 'SUMMER',
  Main = 'MAIN',
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


export const backgroundArray = {
  newYear : [
    '../../img/new-year-theme/winter-0.jpg',
    '../../img/new-year-theme/winter-1.jpg',
    '../../img/new-year-theme/winter-2.jpg',
    '../../img/new-year-theme/winter-3.jpg',
    '../../img/new-year-theme/winter-4.jpg',
  ],
  summer : [
    '../../img/summer-theme/summer-0.jpg',
    '../../img/summer-theme/summer-1.jpg',
    '../../img/summer-theme/summer-2.jpg',
    '../../img/summer-theme/summer-3.jpg',
    '../../img/summer-theme/summer-4.jpg',
  ],
  valentayne : [
    '../../img/valentaine-theme/valentaine-0.jpg',
    '../../img/valentaine-theme/valentaine-1.jpg',
    '../../img/valentaine-theme/valentaine-2.jpg',
    '../../img/valentaine-theme/valentaine-3.jpg',
    '../../img/valentaine-theme/valentaine-4.jpg',
  ],
  customData : [
    '../../img/choise-data-theme/custom-0.jpg',
    '../../img/choise-data-theme/custom-0.jpg',
    '../../img/choise-data-theme/custom-0.jpg',
    '../../img/choise-data-theme/custom-0.jpg',
    '../../img/choise-data-theme/custom-0.jpg',
  ],
  main : [
    '../../img/main-theme/main-1.jpg',
    '../../img/main-theme/main-1.jpg',
    '../../img/main-theme/main-2.jpg',
    '../../img/main-theme/main-3.jpg',
    '../../img/main-theme/main-4.jpg',
  ],
};
