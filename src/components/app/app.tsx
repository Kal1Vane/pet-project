import { ThemeProvider } from '@emotion/react';
import { Link, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../store';
import { getUserTheme } from '../../store/app/selectors';
import { getThemeNow } from '../../utils/utils';
import CustomScreen from '../custom/custom-screen';
import Header from '../header/header';
import Main from '../main/main';
import TimerScreen from '../timer-screen/timer-screen';
import './app.css';

function App(): JSX.Element {
  const themeApp = useAppSelector(getUserTheme);

  return (
    <ThemeProvider theme={getThemeNow(themeApp)}>
      <Header />
      <Routes>
        <Route
          path={AppRoute.Summer}
          element={<TimerScreen />}
        />
        <Route
          path={AppRoute.Valentayne}
          element={<TimerScreen />}
        />
        <Route
          path={AppRoute.NewYear}
          element={<TimerScreen />}
        />
        <Route
          path={AppRoute.CustomData}
          element={<CustomScreen />}
        />
        <Route
          path={AppRoute.Main}
          element={<Main />}
        />
        <Route
          path={AppRoute.NoPath}
          element={<Link to={AppRoute.Main}>Go Back</Link>}
        />
      </Routes>
    </ ThemeProvider>
  );
}

export default App;
