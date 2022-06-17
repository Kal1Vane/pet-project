import {  Button } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';
import HomeIcon from '@mui/icons-material/Home';
import { useAppDispatch } from '../../store';
import { changeUserTheme } from '../../store/app/app';
import { useEffect } from 'react';
import { getScreenUserTheme } from '../../utils/utils';

function Header():JSX.Element {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(changeUserTheme(getScreenUserTheme(pathname)));
  },[pathname]);

  return (
    <Button
      component={RouterLink}
      to={AppRoute.Main}
      variant="contained"
      color="primary"
    >
      <HomeIcon color="secondary" />
    </Button>
  );
}
export default Header;
