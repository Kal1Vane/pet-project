import { AppRoute, UserTheme } from '../const';
import { themeCustom, themeMain, themeNewYear, themeSummer, themeValentayne } from '../theme/theme';

export function randomInteger(min = 0, max = 5) : number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const formatNumber = (num:number) => num.toLocaleString('en-US', {
  minimumIntegerDigits: 2,
  useGrouping: false,
});


export const getScreenUserTheme = (type: string) => {
  switch (type) {
    case AppRoute.Valentayne :
      return UserTheme.Valentayne;
    case AppRoute.Main :
      return UserTheme.Main;
    case AppRoute.NewYear :
      return UserTheme.NewYear;
    case AppRoute.Summer :
      return UserTheme.Summer;
    case AppRoute.CustomData :
      return UserTheme.CustomData;
  }
};

export const getThemeNow = (theme : UserTheme) => {
  switch (theme) {
    case UserTheme.Valentayne :
      return themeValentayne;
    case UserTheme.Main :
      return themeMain;
    case UserTheme.NewYear :
      return themeNewYear;
    case UserTheme.Summer :
      return themeSummer;
    case UserTheme.CustomData :
      return themeCustom;
  }
};
