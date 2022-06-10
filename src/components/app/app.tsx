import { Fragment } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import CustomScreen from '../custom/custom-screen';
import Header from '../header/header';
import Main from '../main/main';


function App(): JSX.Element {

  return (
    <>
      <Header />
      <Routes>
        <Route
          path={AppRoute.Summer}
          element={<Fragment> You clicked summer</Fragment>}
        />
        <Route
          path={AppRoute.Valentayne}
          element={<Fragment>You clicked valentayne Day</Fragment>}
        />
        <Route
          path={AppRoute.NewYear}
          element={<Fragment>You clicked new Year</Fragment>}
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
    </>
  );
}

export default App;
