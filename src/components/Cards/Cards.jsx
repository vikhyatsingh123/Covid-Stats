import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Info = ({ data: { cases, todayCases, recovered, deaths,todayDeaths, active, updated } }) => {
  if (!cases) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={4} component={Card} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={cases} duration={2.75} separator="," />
			  [+<CountUp start={0} end={todayCases? todayCases: 0} duration={2.75} separator="," />]
            </Typography>
            <Typography color="textSecondary">
              {new Date(updated).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of Infected cases of COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={4} component={Card} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={recovered} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(updated).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of recoveries from COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={4} component={Card} className={cx(styles.card, styles.active)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Active
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={active} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(updated).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of active cases of COVID-19.
            </Typography>
          </CardContent>
        </Grid>
		<Grid item xs={12} md={4} component={Card} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={deaths} duration={2.75} separator="," />
			  [+<CountUp start={0} end={todayDeaths? todayDeaths: 0} duration={2.75} separator="," />]
            </Typography>
            <Typography color="textSecondary">
              {new Date(updated).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of deaths caused by COVID-19.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Info;
