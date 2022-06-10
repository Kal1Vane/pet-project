
import { Typography, Button, Grid, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AppRoute } from '../../const';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ParkIcon from '@mui/icons-material/Park';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DateRangeIcon from '@mui/icons-material/DateRange';

function Main():JSX.Element {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography align='center' variant="h4" component="h4">
        Сhoose to which you want to count down the time
          </Typography>
        </Grid>
        <Grid item xs="auto">
          <Button
            component={RouterLink}
            to={AppRoute.Valentayne}
            variant="contained"
            color="primary"
            startIcon={<FavoriteIcon/>}
          >
          Valentine Day
          </Button>
        </Grid>
        <Grid item xs="auto">
          <Button
            component={RouterLink}
            to={AppRoute.NewYear}
            variant="contained"
            color="primary"
            startIcon={<ParkIcon />}
          >
          New Year
          </Button>
        </Grid>
        <Grid item xs="auto">
          <Button
            component={RouterLink}
            to={AppRoute.Summer}
            variant="contained"
            color="primary"
            startIcon={<WbSunnyIcon />}
          >
          Beginning of summer
          </Button>
        </Grid>
        <Grid item xs="auto">
          <Button
            component={RouterLink}
            to={AppRoute.CustomData}
            variant="contained"
            color="primary"
            startIcon={<DateRangeIcon />}
          >
          Choise of you&#39;r date
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Main;
