import React, {useRef, useState, useEffect} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {Box, AppBar, Toolbar, Grid, Typography} from '@mui/material';
import clsx from 'clsx';
import {useAppStyles} from '../themes';
import XTooltip from './XTooltip';
import {ReactComponent as AppBarBottomRight} from '/src/assets/app_bar_bottom_right.svg';
import {ReactComponent as AppBarBottomCenter} from '/src/assets/app_bar_bottom_center.svg';
import {ReactComponent as AppBarTopRight} from '/src/assets/app_bar_top_right.svg';

const XTopbar = () => {
  const classes = useAppStyles();
  const drawerOpen = true;
  const [topBarHeight, topBarHeightSet] = useState(0);
  const topBarRef = useRef(null);
  useEffect(() => {
    if (topBarRef.current) topBarHeightSet(topBarRef.current.offsetHeight);
  }, []);
  return (
    <AppBar
      position='fixed'
      ref={topBarRef}
      className={clsx(classes.appBar, {
        [classes.appBarShift]: drawerOpen,
      })}
    >
      <div className={classes.top_bar_background} />
      <Toolbar>
        <Box pl={2} />
        <Grid container>
          <Grid item xs={10}>
            {/* <RouterLink to='#'>
              <Box sx={{display: 'flex', alignItems: 'center', height: '10vh'}}>
                <img style={{width: '96px', height: '42px'}} src='' alt='' />
              </Box>
            </RouterLink> */}
          </Grid>
          <Box px={1} />
          <Grid item xs={2}></Grid>
        </Grid>
        <Box flexGrow={1} />
        <Box pr={5}>
          <XTooltip placement='left' data='Anakin Dabir'>
            <Box p={0.9} className={classes.userAvatar} sx={{cursor: 'default'}}>
              <Typography fontSize={14} fontWeight='bold'>
                {/* {user.firstName?.[0] + user.lastName?.[0]} */}
              </Typography>
            </Box>
          </XTooltip>
        </Box>
      </Toolbar>
      <AppBarBottomRight className={clsx(classes.border, classes.app_bar_bottom_right_border)} />
      <AppBarTopRight className={clsx(classes.border, classes.app_bar_top_right_border)} />
      <AppBarBottomCenter
        className={clsx(classes.border, classes.bottom_center_border)}
        style={{
          top: `${topBarHeight}px`,
          transform: 'translateY(-100%)',
        }}
      />
    </AppBar>
  );
};

export default XTopbar;
