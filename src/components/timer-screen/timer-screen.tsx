import { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import { AppRoute, DataDay } from '../../const';
import Timer from '../timer/timer';

function TimerScreen () :JSX.Element {
  const { pathname } = useLocation();

  let data = DataDay.NewYear;

  if( pathname === AppRoute.NewYear){
    data = DataDay.NewYear;
  } else if (pathname === AppRoute.Summer){
    data = DataDay.Summer;
  } else if (pathname === AppRoute.Valentayne){
    data = DataDay.Valentayne;
  }

  return (
    <Fragment>
      Are you clicked screen {data}
      <Timer data={data} />
    </Fragment>
  );
}

export default TimerScreen;

