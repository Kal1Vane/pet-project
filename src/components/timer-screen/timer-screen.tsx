import Typography from '@mui/material/Typography/Typography';
import { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import { AppRoute, DataDay, TextDay } from '../../const';
import Timer from '../timer/timer';

function TimerScreen () :JSX.Element {
  const { pathname } = useLocation();

  let data = DataDay.NewYear;
  let text = TextDay.Default;

  if( pathname === AppRoute.NewYear){
    data = DataDay.NewYear;
    text = TextDay.NewYear;
  } else if (pathname === AppRoute.Summer){
    data = DataDay.Summer;
    text = TextDay.Summer;
  } else if (pathname === AppRoute.Valentayne){
    data = DataDay.Valentayne;
    text = TextDay.Valentayne;
  }

  return (
    <Fragment>
      <Typography color="primary" textAlign={'center'} variant="h4" component="h4">
        {text}
      </Typography>
      <Timer data={data} isCustomDate={false} />
    </Fragment>
  );
}

export default TimerScreen;

