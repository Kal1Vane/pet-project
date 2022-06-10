import {  Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AppRoute } from '../../const';
import HomeIcon from '@mui/icons-material/Home';

function Header():JSX.Element {
  return (
    <Button
      component={RouterLink}
      to={AppRoute.Main}
      variant="contained"
      color="primary"
    >
      <HomeIcon />
    </Button>
  );
}
export default Header;
