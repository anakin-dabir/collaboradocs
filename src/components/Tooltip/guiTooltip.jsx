import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import {Box} from '@mui/material';
import clsx from 'clsx';
import {styled} from '@mui/styles';
import theme, {useGuiTooltipStyles} from '../../themes';
import {ReactComponent as ModuleTopLeft} from './../../img/module_top_left.svg';
import {ReactComponent as ModuleTopRight} from './../../img/module_top_right.svg';
import {ReactComponent as ModuleBottomRight} from './../../img/module_bottom_right.svg';
import {ReactComponent as ModuleBottomLeft} from './../../img/module_bottom_left.svg';

const GuiTooltip = ({className, title, children, placement, dir = 'ltr', ...props}) => {
  const classes = useGuiTooltipStyles();
  return (
    <Tooltip
      className={clsx(className)}
      {...props}
      title={
        <Box className={classes.root} sx={{direction: dir}}>
          <ModuleTopLeft
            className={clsx(classes.border, classes.top_left_border)}
            style={{transform: 'scale(0.7) translate(-21.43%, -21.43%)'}}
          />
          <ModuleBottomLeft
            className={clsx(classes.border, classes.bottom_left_border)}
            style={{transform: 'scale(0.7) translate(-21.43%, 21.43%)'}}
          />
          <ModuleBottomRight
            className={clsx(classes.border, classes.bottom_right_border)}
            style={{transform: 'scale(0.7) translate(21.43%, 21.43%)'}}
          />
          <ModuleTopRight
            className={clsx(classes.border, classes.top_right_border)}
            style={{transform: 'scale(0.7) translate(21.43%, -21.43%)'}}
          />
          {title}
        </Box>
      }
      placement={placement}
      arrow
    >
      {children}
    </Tooltip>
  );
};

export default React.memo(GuiTooltip);
