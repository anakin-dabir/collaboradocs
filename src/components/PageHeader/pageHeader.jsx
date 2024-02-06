import React, {useState, KeyboardEvent} from 'react';
// import {useSelector} from 'react-redux';
import {Box, Typography, InputAdornment, IconButton} from '@mui/material';
import {LocalizationProvider} from '@mui/x-date-pickers';
import {DateRangePicker} from '@mui/x-date-pickers-pro';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {useHeadingStyles} from '../../themes';
import clsx from 'clsx';
import XTextfield from '../XTextfield';
import XCheckbox from '../XCheckbox';
import XButton from '../XButton';
import {ReactComponent as FilterIcon} from './../../img/filterIcon.svg';
import {ReactComponent as CalendarIcon} from './../../img/calendarIcon.svg';
import {ReactComponent as CrossIcon} from './../../img/crossIcon.svg';
import menu_top_left from './../../img/menu_top_left.svg';
import menu_top_right from './../../img/menu_top_right.svg';
import menu_bottom_right from './../../img/menu_bottom_right.svg';
import menu_bottom_left from './../../img/menu_bottom_left.svg';
import DividerBottom from './../../img/dividerBottom.png';

function PageHeader({
  title = 'Demo Title',
  addBtnText = 'Demo Button',
  addBtnHandle,
  searchSet,
  selectedDate = ['12/11/2021', '12/11/2023'],
  selectedDateSet,
  multipleFilters = false,
  searchPlaceholder,
  secondPlaceholder,
  pastPromo,
  search = '',
  actions = true,
  stackBtn = false,
  stackBtnTexts,
  stackBtnHandles,
}) {
  // const {drawerOpen} = useSelector(state => state.drawer);
  const drawerOpen = true;
  const headingClasses = useHeadingStyles();
  const [priceCalendarOpen, priceCalendarOpenSet] = useState(false);
  const handleSearchChange = e => {
    searchSet?.(e.target.value);
  };
  return (
    <>
      <Box pb={4} pt={3}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            right: '41.5%',
          }}
        >
          <Typography className={clsx(headingClasses.heading)}>{title}</Typography>
          <Box sx={{width: '15%', position: 'absolute', bottom: 0}}>
            <img
              style={{width: '100%', marginBottom: '10px'}}
              className={clsx(headingClasses.position)}
              src={DividerBottom}
              alt=''
            />
          </Box>
        </Box>
        {actions && (
          <Box pt={8}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Box sx={{width: '25%'}}>
                <XTextfield
                  type='text'
                  value={search}
                  autoComplete='off'
                  variant='outlined'
                  placeholder={searchPlaceholder}
                  onChange={handleSearchChange}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <FilterIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              {multipleFilters && (
                <>
                  <Box sx={{width: '25%'}} mr={drawerOpen ? 25 : 35}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DateRangePicker
                        name='priceTimeFrame'
                        value={[selectedDate[0], selectedDate[1]] || null}
                        open={priceCalendarOpen}
                        onClose={() => priceCalendarOpenSet(false)}
                        onOpen={() => priceCalendarOpenSet(true)}
                        PopperProps={{
                          sx: {
                            '&.MuiPickersPopper-root': {
                              backgroundColor: 'rgba(7, 50, 79, 0.92) !important',
                              background: `
                                  url(${menu_top_left}) top left,
                                  url(${menu_top_right}) top right,
                                  url(${menu_bottom_right}) bottom right,
                                  url(${menu_bottom_left}) bottom left`,
                              backgroundRepeat: 'no-repeat',
                              clipPath: `polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)`,
                            },
                          },
                        }}
                        onChange={value => {
                          selectedDateSet?.([
                            value[0]?.toLocaleDateString('en-US', {
                              month: '2-digit',
                              day: '2-digit',
                              year: 'numeric',
                            }) || '',
                            value[1]?.toLocaleDateString('en-US', {
                              month: '2-digit',
                              day: '2-digit',
                              year: 'numeric',
                            }) || '',
                          ]);
                        }}
                        renderInput={() => (
                          <XTextfield
                            name='priceTimeFrame'
                            variant='outlined'
                            placeholder={secondPlaceholder}
                            value={
                              selectedDate[0] && selectedDate[1]
                                ? [
                                    new Date(selectedDate[0]).toLocaleDateString('en-GB'),
                                    new Date(selectedDate[1]).toLocaleDateString('en-GB'),
                                  ].join('-')
                                : ''
                            }
                            onKeyDown={e => {
                              if (e.code === 'Backspace') selectedDateSet?.(['', '']);
                            }}
                            type='text'
                            inputProps={{
                              endAdornment: (
                                <InputAdornment position='end'>
                                  {selectedDate[0] && selectedDate[1] && (
                                    <IconButton onClick={() => selectedDateSet?.(['', ''])}>
                                      <CrossIcon />
                                    </IconButton>
                                  )}
                                  <IconButton
                                    onClick={() => {
                                      priceCalendarOpenSet?.(prev => !prev);
                                    }}
                                  >
                                    <CalendarIcon />
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </Box>
                  {/* <Box pr={10}>
                    <XCheckbox
                      value={pastPromo.value}
                      checked={pastPromo.checked}
                      onChange={pastPromo.onChange}
                    />
                    Show past promotions
                  </Box> */}
                </>
              )}
              {addBtnHandle && (
                <Box>
                  <XButton
                    style={{
                      paddingLeft: 40,
                      paddingRight: 40,
                      whiteSpace: 'nowrap',
                    }}
                    onClick={addBtnHandle}
                  >
                    {addBtnText}
                  </XButton>
                </Box>
              )}
            </Box>
          </Box>
        )}
        {stackBtnHandles && stackBtnTexts && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '10px',
              marginTop: '-25px',
            }}
          >
            <XButton
              style={{
                paddingLeft: 40,
                paddingRight: 40,
                whiteSpace: 'nowrap',
              }}
              onClick={stackBtnHandles[0]}
            >
              {stackBtnTexts[0]}
            </XButton>
            <XButton
              style={{
                paddingLeft: 40,
                paddingRight: 40,
                whiteSpace: 'nowrap',
              }}
              onClick={stackBtnHandles[1]}
            >
              {stackBtnTexts[1]}
            </XButton>
          </Box>
        )}
      </Box>
    </>
  );
}

export default PageHeader;
