import {makeStyles, withStyles} from '@mui/styles';
import {createTheme, alpha} from '@mui/material/styles';
import {cyan, orange, indigo, grey} from '@mui/material/colors';
import gui_table_row_top_left from './assets/gui_table_row_top_left.svg';
import gui_table_row_top_right from './assets/gui_table_row_top_right.svg';
import menu_item_top_left from './assets/menu_item_top_left.svg';
import menu_item_top_right from './assets/menu_item_top_right.svg';
import menu_item_bottom_right from './assets/menu_item_bottom_right.svg';
import menu_item_bottom_center from './assets/menu_item_bottom_center.svg';
import menu_top_left from './assets/menu_top_left.svg';
import menu_top_right from './assets/menu_top_right.svg';
import menu_bottom_right from './assets/menu_bottom_right.svg';
import menu_bottom_left from './assets/menu_bottom_left.svg';
import switchTrack from './assets/switchTrack.svg';
import switch_checked_icon from './assets/switch_checked_icon.svg';
import switch_checked_track from './assets/switch_checked_track.svg';
import switch_disabled_track from './assets/switch_disabled_track.svg';
import '@fontsource/oxanium';
const drawerWidth = 210;
const appBarHeight = 64;

const colors = {
  black: '#000000',
  white: '#ffffff',
  primary_light: cyan.A100,
  primary_main: cyan.A200,
  primary_dark: cyan.A400,
  primary_background: '#214E58',
  secondary_background: '#052742',
  secondary_light: indigo.A100,
  secondary_main: indigo.A200,
  secondary_dark: indigo.A400,
  error_light: '#FF6C75',
  error_main: '#FF000F',
  error_dark: '#c10028',
  success_light: '#7AFF8F',
  success_main: '#00FF29',
  success_dark: '#348D33',
  warning_light: orange[300],
  warning_main: orange[500],
  warning_dark: orange[700],
};

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 300, // phone
      sm: 600, // tablets
      md: 900, // small laptop
      lg: 1200, // desktop
      xl: 1385,
    },
  },
  palette: {
    common: {
      black: colors.black,
      white: colors.white,
    },
    background: {
      paper: alpha(colors.white, 0),
      default: alpha(colors.white, 0),
    },
    primary: {
      light: colors.primary_light,
      main: colors.primary_main,
      dark: colors.primary_dark,
      background: colors.primary_background,
      contrastText: colors.black,
    },
    secondary: {
      light: colors.secondary_light,
      main: colors.secondary_main,
      dark: colors.secondary_dark,
      background: colors.secondary_background,
      contrastText: colors.white,
    },
    error: {
      light: colors.error_light,
      main: colors.error_main,
      dark: colors.error_dark,
      contrastText: colors.white,
    },
    success: {
      light: colors.success_light,
      main: colors.success_main,
      dark: colors.success_dark,
      contrastText: colors.white,
    },
    warning: {
      light: colors.warning_light,
      main: colors.warning_main,
      dark: colors.warning_dark,
    },
    text: {
      primary: alpha(colors.white, 1),
      secondary: alpha(colors.black, 0.54),
      disabled: grey[500],
      hint: grey[500],
    },
    disabled: {
      main: '#424242',
    },
  },
  typography: {
    fontFamily: 'Oxanium, Open Sans',
    body_legal: {
      fontSize: 7,
      lineHeight: 1.5,
    },
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        popper: {
          filter: `drop-shadow(0px 0px 6px ${colors.primary_main})`,
        },
        tooltip: {
          fontSize: 12,
          zIndex: -100,
          backgroundColor: colors.black,
          padding: '0px 0px !important',
          clipPath: `
          polygon(
            12.5px 0,
            100% 0,
            110% calc(100% - 21px),
            calc(100% - 9px) 100%,
            0 130%,
            -100% 230%)`,
        },
        arrow: {
          color: colors.primary_main,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        elevation1: {
          boxShadow: 'none',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: colors.white,
        },
        select: {
          '&.Mui-disabled': {
            cursor: 'not-allowed',
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: alpha(colors.black, 0.95),
          maxHeight: '400px !important',
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        popper: {
          backgroundColor: '#021919',
        },
        option: {
          '&:hover,&.Mui-focused': {
            backgroundColor: 'rgba(24, 255, 255, 0.12) !important',
            clipPath: `
              polygon(
                12px 0,
                100% 0,
                100% calc(100% - 12px),
                calc(100% - 12px) 100%,
                0 100%,
                0 12px
              )
            `,
            background: `
              url(${menu_item_top_left}) top left,
              url(${menu_item_top_right}) top right,
              url(${menu_item_bottom_right}) bottom right,
              url(${menu_item_bottom_center}) bottom center
            `,
            backgroundRepeat: 'no-repeat',
          },
        },
        noOptions: {
          color: colors.white,
          textShadow: `0px 0px 6px ${colors.white}`,
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          textShadow: `0px 0px 6px ${colors.white}`,
          zIndex: 10,
        },
        separator: {
          color: colors.white,
        },
        li: {
          textTransform: 'capitalize',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: alpha(colors.primary_main, 0.95),
            color: colors.black,
            '&.Mui-focusVisible': {
              backgroundColor: alpha(colors.primary_main, 0.95),
            },
            '&:hover': {
              backgroundColor: alpha(colors.primary_main, 0.95),
              color: colors.black,
            },
          },
        },
        button: {
          '&:hover': {
            backgroundColor: alpha(colors.primary_main, 0.95),
            color: colors.black,
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: colors.white,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          color: colors.white,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        outlinedPrimary: {
          boxShadow: `0px 0px 10px ${colors.primary_main}`,
          '&:hover': {
            boxShadow: `0px 0px 10px ${colors.primary_main}`,
          },
        },
        containedPrimary: {
          boxShadow: `0px 0px 10px ${colors.primary_main}`,
          '&:hover': {
            boxShadow: `0px 0px 10px ${colors.primary_main}`,
          },
        },
        contained: {
          '&.Mui-disabled': {
            boxShadow: `0px 0px 10px ${alpha(colors.primary_main, 0.5)}`,
            backgroundColor: alpha(colors.primary_main, 0.5),
            color: colors.primary_main,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: colors.white,
          filter: `drop-shadow(0px 0px 6px ${colors.white})`,
          '&.Mui-disabled': {
            color: alpha(colors.white, 0.26),
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: colors.white,
          textShadow: `0px 0px 6px ${alpha(colors.white, 0.5)}`,
          '&$focused': {
            color: colors.white,
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: '15.5px',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          border: `1px solid ${colors.primary_main}`,
          boxShadow: `0px 0px 10px ${colors.primary_main}`,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(colors.black, 0.8),
          '&.Mui-error': {
            '& input': {
              color: colors.error_main,
              '&::placeholder': {
                color: colors.error_main,
              },
            },
            '& .MuiIconButton-label': {
              color: colors.error_main,
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        formControl: {
          color: alpha(colors.white, 0.87),
          textShadow: `0px 0px 6px ${alpha(colors.white, 0.5)}`,
        },
        root: {
          '&.Mui-disabled': {
            color: alpha(colors.white, 0.3),
            textShadow: `0px 0px 6px ${alpha(colors.white, 0.3)}`,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          textShadow: `0px 0px 6px ${alpha(colors.white, 0.5)}`,
          '&::placeholder': {
            textShadow: `0px 0px 6px ${alpha(colors.white, 0.5)}`,
            color: colors.white,
            opacity: 1,
          },
        },
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.white,
          },
          '&.Mui-disabled': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: alpha(colors.white, 0.3),
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(colors.white, 0.5),
          color: alpha(colors.white, 0.87),
        },
        deleteIcon: {
          zIndex: 10,
          color: colors.white,
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: colors.white,
          filter: `drop-shadow(0px 0px 10px ${colors.primary_main})`,
          '&.Mui-disabled': {
            color: '#9e9e9e',
          },
        },
        colorPrimary: {
          '&.Mui-checked': {
            color: colors.white,
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          textShadow: `0px 0px 6px ${colors.white}`,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        container: {
          filter: `drop-shadow(0px 0px 6px ${colors.primary_main})`,
        },
        paper: {
          backgroundColor: alpha(colors.black, 0.8),
          borderRadius: 0,
          clipPath: `
      polygon(
        12px 0,
        100% 0,
        100% calc(100% - 12px),
        calc(100% - 12px) 100%,
        0 100%,
        0 12px
      )
    `,
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          '& > .MuiTableRow-root': {
            borderTop: `1px solid ${colors.primary_main}`,
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: alpha(colors.white, 0.25),
            '&:hover': {
              backgroundColor: alpha(colors.white, 0.25),
            },
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: 'none',
          textShadow: `0px 0px 6px ${colors.white}`,
          paddingBlock: '9px !important',
        },
      },
    },
    MuiStepContent: {
      styleOverrides: {
        root: {
          paddingTop: 20,
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          color: 'inherit',
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        label: {
          color: colors.primary_main,
          textShadow: `0px 0px 6px ${colors.primary_main}`,
          '&.MuiStepLabel-active': {
            color: colors.primary_main,
          },
          '&.MuiStepLabel-completed': {
            color: colors.primary_main,
          },
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          backgroundColor: alpha(colors.black, 0.8),
          maxHeight: 'calc(100% - 82px);',
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          filter: 'none',
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: '1 !important',
          },
        },
        colorSecondary: {
          '&.Mui-disabled + .MuiSwitch-track': {
            backgroundColor: colors.white,
          },
        },
        track: {
          backgroundColor: colors.white,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: colors.error_main,
          textShadow: `0px 0px 6px ${alpha(colors.white, 0.5)}`,
          marginLeft: '0 !important',
        },
      },
    },
    MuiTableSortLabel: {
      styleOverrides: {
        root: {
          '&:hover': {
            color: colors.primary_main,
            '&.Mui-active .MuiTableSortLabel-icon': {
              color: colors.primary_main,
            },
          },
          '&.Mui-active .MuiTableSortLabel-icon': {
            color: colors.white,
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: colors.white,
        },
      },
    },
    MuiPickersPopper: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(7, 50, 79, 0.92) !important',
          background: `url(${menu_top_left}) top left,
                       url(${menu_top_right}) top right,
                       url(${menu_bottom_right}) bottom right,
                       url(${menu_bottom_left}) bottom left`,
          backgroundRepeat: 'no-repeat',
          clipPath: `polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)`,
        },
      },
    },
  },
});

export default theme;

export const GlobalCss = withStyles(() => ({
  '@global': {
    'body::-webkit-scrollbar': {
      background: theme.palette.common.black,
    },
    'body::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.common.black,
    },
    '*::-webkit-scrollbar': {
      width: '1vw',
      height: '1vw',
      background: 'transparent',
      '&:horizontal': {
        borderBottom: `1px solid ${theme.palette.primary.main}`,
      },
      '&:vertical': {
        borderRight: `1px solid ${theme.palette.primary.main}`,
      },
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'transparent',
      '&:horizontal': {
        borderLeft: '0.5vw solid transparent',
        borderRight: '0.5vw solid transparent',
        borderBottom: `1vw solid ${theme.palette.primary.main}`,
      },
      '&:vertical': {
        borderTop: '0.5vw solid transparent',
        borderRight: `1vw solid ${theme.palette.primary.main}`,
        borderBottom: '0.5vw solid transparent',
      },
    },
    '*::-webkit-scrollbar-corner': {
      background: 'transparent',
    },
  },
}))(() => null);

export const useAppStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    position: 'relative',
  },
  appBar: {
    width: `calc(100% - ${72}px)`,
    zIndex: 10,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: `${appBarHeight}px`,
    backgroundColor: 'transparent',
    borderBottom: 0,
    color: theme.palette.common.white,
    boxShadow: 'none',
  },
  userAvatar: {
    clipPath: `polygon(6px 0, 100% 0, 100% calc(100% - 6px),
      calc(100% - 6px) 100%, 0 100%, 0 6px)`,
    backgroundColor: '#bdbdbd',
  },
  app_bar_line: {
    width: '100%',
    height: '1px',
    backgroundColor: theme.palette.primary.main,
    position: 'absolute',
    bottom: 0,
    right: 0,
    boxShadow: `0px 0px 9px 2px ${theme.palette.common.white}`,
  },
  top_bar_background: {
    backgroundColor: alpha(colors.secondary_background, 0.9),
    clipPath: `
      polygon(
        0 0,
        100% 0,
        100% calc(100% - 18px),
        calc(100% - 18px) 100%,
        0 100%
      )
    `,
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
  },
  blinking: {
    animation: 'blinking 500ms',
    animationFillMode: 'forwards',
  },
  img_blinking: {
    opacity: 0,
    animation: 'fade_in 500ms',
    animationDelay: '1s',
    animationFillMode: 'forwards',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  appBarFull: {
    width: '100% !important',
    boxShadow: `0px 0px 12px ${theme.palette.common.white}`,
    transition: 'none',
  },
  logo_container: {
    minWidth: 110,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    filter: `drop-shadow(0px 0px 10px ${theme.palette.primary.main})`,
    '& .logo_box': {
      width: 110,
      '& .logo': {
        maxWidth: '100%',
        maxHeight: 50,
      },
    },
    '& .powered_by': {
      width: 90,
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    minHeight: '100vh',
    position: 'fixed',
    zIndex: 1299,
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(9),
  },
  drawerContainer: {
    backgroundColor: theme.palette.common.black,
    borderRight: 0,
    overflow: 'initial',
  },
  drawer_container_gui2: {
    backgroundColor: 'transparent',
  },
  left_side_bar_line: {
    height: '100vh',
    width: '1px',
    backgroundColor: theme.palette.primary.main,
    position: 'absolute',
    top: 0,
    right: 0,
    boxShadow: `0px 0px 9px 2px ${theme.palette.common.white}`,
  },
  draw_expand_line: {
    width: '100%',
    height: '1px',
    backgroundColor: theme.palette.primary.main,
    position: 'absolute',
    left: 0,
    bottom: 0,
    boxShadow: `0px 0px 9px 2px ${theme.palette.common.white}`,
  },
  toolbar: {
    overflowX: 'clip',
    position: 'relative',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '0 12px',
    ...theme.mixins.toolbar,
  },
  toolbar_gui2: {
    backgroundColor: alpha(colors.secondary_background, 0.9),
  },
  content: {
    flexGrow: 1,
    width: '100%',
    minHeight: `calc(100vh - ${appBarHeight}px)`,
    paddingTop: '5rem',
  },
  pageContainer: {
    width: 'calc(100vw - 72px - 4px)',
    marginLeft: 72,
  },
  pageShift: {
    width: `calc(100vw - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  listItem: {
    position: 'relative',
    margin: '17px 0',
    '& .MuiListItem-gutters': {
      padding: '8px 0px 4px 0px',
      '& .MuiListItemIcon-root': {
        minWidth: 'initial',
        width: 72,
        display: 'flex',
        justifyContent: 'center',
      },
      '& .MuiListItemText-root': {
        marginLeft: '10px',
      },
    },
  },
  listItemActive: {
    '&::before': {
      content: "''",
      position: 'absolute',
      left: '0',
      top: '0',
      width: '4px',
      height: '100%',
      backgroundColor: theme.palette.primary.main,
      boxShadow: `0px 0px 6px ${theme.palette.common.white}`,
      borderRadius: 10,
    },
  },
  sidebar: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  sidebar_gui2: {
    backgroundColor: alpha(colors.secondary_background, 0.9),
    clipPath: `
      polygon(
        0 0,
        100% 0,
        100% calc(100% - 18px),
        calc(100% - 18px) 100%,
        0 100%
      )
    `,
  },
  drawer_outer_container: {
    position: 'absolute',
    left: '100%',
    top: `${appBarHeight}px`,
    width: '14px',
    height: '14px',
    backgroundColor: alpha(colors.secondary_background, 0.9),
    clipPath: `
      polygon(
        0 0,
        100% 0,
        0 100%
      )
    `,
    pointerEvents: 'none',
  },
  border: {
    position: 'absolute',
    filter: 'drop-shadow(0 0 10px #536DFE)',
    pointerEvents: 'none',
  },
  drawer_bottom_right_border: {
    bottom: 0,
    right: 0,
  },
  drawer_center_left_border: {
    bottom: '30%',
    left: 0,
  },
  drawer_top_left_border: {
    top: 0,
    left: 0,
  },
  drawer_outer_border: {
    top: `${appBarHeight}px`,
    left: '100%',
  },
  app_bar_bottom_center_border: {
    bottom: 0,
    left: '30%',
  },
  app_bar_bottom_right_border: {
    bottom: 0,
    right: 0,
  },
  app_bar_top_right_border: {
    top: 0,
    right: 0,
  },
  bottom_center_border: {
    left: '50%',
  },
  footer_divider: {
    textShadow: 'none',
  },
}));

export const useGuiSnackbarStyles = makeStyles(() => ({
  root: {
    width: '25vw',
  },
  header: {
    background: 'rgb(6,47,74)',
  },
  progress: {
    padding: '4px',
  },
  closeIcon: {
    '& .MuiButtonBase-root': {
      // display: 'none',
      position: 'absolute',
      top: 17,
      right: 10,
    },
  },
  border: {
    position: 'absolute',
  },
  top_center_border: {
    left: '38%',
    top: '-11.4%',
  },
}));

export const useGuiTableContainerStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'rgb(6,47,74)',
    '& svg': {
      zIndex: 999,
    },
  },
}));

export const useGuiButtonStyles = makeStyles(() => ({
  button_wrapper: {
    display: 'inline-block',
    transition: '0.25s ease',
    '&:hover': {
      filter: `drop-shadow(0 0 20px ${theme.palette.secondary.main})`,
    },
    '&:active': {
      filter: 'none',
    },
  },
  button: {
    position: 'relative',
    background: 'none',
    alignItems: 'center',
    gap: '6px',
    display: 'flex',
    border: 'none !important',
    boxShadow: 'none !important',
    clipPath: `
      polygon(
        6px 0,
        100% 0,
        100% calc(100% - 6px),
        calc(100% - 6px) 100%,
        0 100%,
        0 6px
      )
    `,
  },
  button_disabled: {
    color: `${theme.palette.grey[400]} !important`,
    backgroundColor: `${alpha(theme.palette.common.white, 0.1)} !important`,
    pointerEvents: 'none',
  },
  button_default: {
    color: '#16DBDB',
    backgroundColor: colors.secondary_background,
    '& svg': {
      opacity: 0.7,
    },
    '&:hover': {
      background: `linear-gradient(90deg, rgba(58,82,184,1) 100%, 
      rgba(0,0,0,1) 100%,rgba(8,11,24,1) 100%, rgba(22,219,219,1) 20%)`,
      boxShadow: 'none',
    },
    '&:active': {
      background: '#07335600 !important',
      '& svg': {
        opacity: 0.7,
      },
    },
  },
  button_primary: {
    color: '#16DBDB',
    backgroundColor: 'rgba(0, 115, 207, 0.5)',
    textShadow: '0px 4px 4px #000000',
    '&:hover': {
      background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2),
       rgba(0, 0, 0, 0.2)), #1698FF`,
      boxShadow: 'none',
    },
    '&:active': {
      background: '#1697FE',
      '& svg': {
        opacity: 0.7,
      },
    },
  },
  button_secondary: {
    color: '#1698FF',
    background: alpha(colors.secondary_background, 0.1),
    '& svg': {
      opacity: 0.7,
    },
    '&:hover': {
      background: alpha(colors.secondary_background, 0.1),
      boxShadow: `0px 0px 15px ${theme.palette.primary.main}`,
    },
    '&:active': {
      background: alpha(colors.secondary_background, 0.1),
      '& svg': {
        opacity: 0.7,
      },
    },
  },
  button_success: {
    color: theme.palette.success.main,
    background: alpha(theme.palette.success.main, 0.1),
    '& svg': {
      opacity: 0.7,
    },
    '&:hover': {
      background: alpha(theme.palette.success.main, 0.1),
    },
    '&:active': {
      background: alpha(theme.palette.success.main, 0.1),
      '& svg': {
        opacity: 0.7,
      },
    },
  },
  button_error: {
    color: theme.palette.error.main,
    background: alpha(theme.palette.error.main, 0.1),
    '& svg': {
      opacity: 0.7,
    },
    '&:hover': {
      background: alpha(theme.palette.error.main, 0.1),
    },
    '&:active': {
      background: alpha(theme.palette.error.main, 0.1),
      '& svg': {
        opacity: 0.7,
      },
    },
  },
  border: {
    position: 'absolute',
  },
  top_left_border: {
    top: 0,
    left: 0,
  },
  top_left_left_border: {
    top: 0,
    left: 2,
  },
  top_right_border: {
    top: 0,
    right: 0,
  },
  top_right_right_border: {
    top: 0,
    right: 2,
  },
  bottom_left_border: {
    bottom: 0,
    left: 0,
  },
  bottom_left_left_border: {
    bottom: 0,
    left: 2,
  },
  bottom_right_border: {
    bottom: 0,
    right: 0,
  },
  bottom_right_right_border: {
    bottom: 0,
    right: 2,
  },
}));

export const useGuiFileUploadStyles = makeStyles(() => ({
  dropzone: {
    display: 'flex',
    justifyContent: 'center',
    height: '120px',
    alignItems: 'center',
    padding: '1rem',
    border: '1px dashed #0E8F9E',
  },
}));

export const useSearchBarStyles = makeStyles(() => ({
  search: {
    position: 'relative',
    backgroundColor: 'transparent',
    width: 'auto',
  },
  search_icon: {
    height: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    filter: `drop-shadow(0px 0px 6px ${theme.palette.common.white})`,
  },
  search_icon_active: {
    pointerEvents: 'none',
  },
  input_root: {
    color: 'inherit',
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '0px',
    opacity: 0,
    boxShadow: 'none',
  },
  input_root_active: {
    width: '250px',
    opacity: 1,
  },
  listbox: {
    width: '100%',
    zIndex: 1,
    position: 'absolute',
    backgroundColor: alpha(theme.palette.common.black, 0.8),
    overflow: 'auto',
    maxHeight: 200,
    border: `1px solid ${alpha(theme.palette.common.black, 0.25)}`,
  },
  list_item: {
    '&:hover': {
      color: theme.palette.common.white,
      textDecoration: 'none',
      backgroundColor: 'transparent',
    },
  },
  active_item: {
    color: `${theme.palette.common.black} !important`,
    textDecoration: 'none',
    backgroundColor: `${alpha(theme.palette.primary.main, 0.8)} !important`,
  },
  blinking: {
    opacity: 0,
    animation: 'blinking 500ms',
    animationFillMode: 'forwards',
  },
}));

export const useGuiTextFieldStyles = makeStyles(() => ({
  wrapper: {
    position: 'relative',
    width: '100%',
    padding: 0,
    backgroundRepeat: 'no-repeat',
    '& .MuiAutocomplete-option, & .MuiMenuItem-root': {
      height: '65px !important',
      color: `${theme.palette.common.white} !important`,
      '&:hover': {
        backgroundColor: 'rgba(24, 255, 255, 0.12) !important',
        clipPath: `
          polygon(
            12px 0,
            100% 0,
            100% calc(100% - 12px),
            calc(100% - 12px) 100%,
            0 100%,
            0 12px
          )
        `,
        background: `
          url(${menu_item_top_left}) top left,
          url(${menu_item_top_right}) top right,
          url(${menu_item_bottom_right}) bottom right,
          url(${menu_item_bottom_center}) bottom center
        `,
        backgroundRepeat: 'no-repeat',
      },
    },
  },
  checked: {
    backgroundColor: `${colors.secondary_background} !important`,
    clipPath: `
          polygon(
            12px 0,
            100% 0,
            100% calc(100% - 12px),
            calc(100% - 12px) 100%,
            0 100%,
            0 12px
          )
        `,
    background: `
          url(${menu_item_top_left}) top left,
          top right,
          url(${menu_item_bottom_right}) bottom right,
          bottom center
        `,
    backgroundRepeat: 'no-repeat',
  },
  border: {
    position: 'absolute',
    transition: theme.transitions.create('filter'),
    zIndex: 1,
    pointerEvents: 'none',
  },
  border_off: {
    background: 'black !important',
    clipPath: `
    polygon(
    12px 0,
    100% 0,
    100% calc(100% - 12px),
    calc(100% - 12px) 100%,
    0 100%,
    0 12px
    )
        `,
  },
  top_left_border: {
    top: 0,
    left: 0,
  },
  top_right_border: {
    top: 0,
    right: 0,
  },
  bottom_right_border: {
    right: 0,
  },
  bottom_center_border: {
    left: '30%',
  },
  border_glow: {
    filter: 'drop-shadow(0 0 10px #536DFE)',
  },
  disabled: {
    '& .MuiInputBase-root': {
      backgroundColor: `${alpha(theme.palette.grey[900], 0.7)} !important`,
    },
  },
  error: {
    '& .MuiInputBase-root': {
      backgroundColor: `${alpha('#300A0770', 0.7)} !important`,
    },
  },
  root: {
    '& input[type=number]::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
    },
    '& input': {
      '&:-webkit-autofill': {
        WebkitBoxShadow: '0 0 0 1000px #153E3E inset !important;',
      },
    },
    '& .MuiInputBase-root': {
      borderRadius: 0,
      backgroundColor: alpha(colors.secondary_background, 0.8),
      clipPath: `
        polygon(
          12px 0,
          100% 0,
          100% calc(100% - 12px),
          calc(100% - 12px) 100%,
          0 100%,
          0 12px
        )
      `,
    },
    '& fieldset': {
      border: 0,
    },
    '& label.MuiInputLabel-shrink': {
      transform: 'translate(14px, -16px) scale(0.75)',
    },
  },
  paper: {
    borderRadius: 0,
    backgroundColor: 'transparent',
  },
  popper: {
    backgroundColor: 'transparent',
    '& .MuiAutocomplete-noOptions': {
      backgroundColor: '#021919',
      background: `
        url(${menu_top_left}) top left,
        url(${menu_top_right}) top right,
        url(${menu_bottom_right}) bottom right,
        url(${menu_bottom_left}) bottom left
      `,
      backgroundRepeat: 'no-repeat',
      clipPath: `
        polygon(
          12px 0,
          100% 0,
          100% calc(100% - 12px),
          calc(100% - 12px) 100%,
          0 100%,
          0 12px
        )
      `,
    },
  },
  list: {
    padding: '25px 0px 25px 0px',
    backgroundColor: 'rgba(7, 50, 79, 1)',
    background: `
      url(${menu_top_left}) top left,
      url(${menu_top_right}) top right,
      url(${menu_bottom_right}) bottom right,
      url(${menu_bottom_left}) bottom left
    `,
    backgroundRepeat: 'no-repeat',
    clipPath: `
      polygon(
        12px 0,
        100% 0,
        100% calc(100% - 12px),
        calc(100% - 12px) 100%,
        0 100%,
        0 12px
      )
    `,
    '& .MuiAutocomplete-option, & .MuiMenuItem-root': {
      height: '65px',
      color: `${theme.palette.common.white} !important`,
      '&:hover': {
        backgroundColor: 'rgba(24, 255, 255, 0.12) !important',
        clipPath: `
          polygon(
            12px 0,
            100% 0,
            100% calc(100% - 12px),
            calc(100% - 12px) 100%,
            0 100%,
            0 12px
          )
        `,
      },
    },
  },
  label: {
    color: '#18FFFF',
  },
}));

export const useHeadingStyles = makeStyles(() => ({
  heading: {
    fontSize: '18px',
    textShadow: '0px 0px 10px #18FFFF',
    fontWeight: 'bold',
  },
  table_heading: {
    fontSize: '16px',
    textShadow: '0px 0px 10px #18FFFF',
    fontWeight: 'bold',
  },
  position: {
    position: 'relative',
    top: 28,
    left: '1%',
  },
  text_field_heading: {
    color: 'rgb(24,255,255)',
    fontSize: '16px',
  },
  required: {
    color: 'red',
  },
  menu_label: {
    position: 'absolute',
    top: -16,
    left: 11,
    fontSize: '12px',
    color: '#18FFFF',
  },
}));

export const useLangSwitchStyles = makeStyles(() => ({
  heading: {
    fontSize: '19px',
    fontWeight: 'bold',
    color: 'rgb(24,255,255)',
  },
  active: {
    textShadow: '0px 0px 10px #18FFFF',
  },
}));

export const useGuiModuleStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    backgroundColor: alpha(colors.secondary_background, 0.9),
    boxShadow: 'none',
    border: 'none',
    filter: `drop-shadow(0px 0px 6px ${colors.primary_main})`,
    // filter: 'drop-shadow(0 0 10px #536DFE)',
    boxShadow: `1px 1px 10px ${colors.primary_main}`,
    clipPath: `
      polygon(
        12px 0,
        100% 0,
        100% calc(100% - 12px),
        calc(100% - 12px) 100%,
        0 100%,
        0 12px
      )
    `,
  },
  border: {
    position: 'absolute',
    filter: 'drop-shadow(0 0 10px #536DFE)',
    fill: '#18FFFF',
  },
  top_left_border: {
    top: 0,
    left: 0,
  },
  top_right_border: {
    top: 0,
    right: 0,
  },
  bottom_left_border: {
    bottom: 0,
    left: 0,
  },
  bottom_right_border: {
    bottom: 0,
    right: 0,
  },
}));

export const useImgStyles = makeStyles({
  imageStack: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '-20px',
  },
  image: {
    position: 'relative',
    zIndex: 1,
    '&:not(:first-child)': {
      marginLeft: '-50px',
    },
  },
});

export const useGuiTableStyles = makeStyles({
  root: {
    '& .MuiTableHead-root': {
      '& .MuiTableCell-root': {
        color: theme.palette.primary.main,
        textShadow: 'none',
        borderBottom: 0,
        paddingBlock: '0.85rem !important',
        background: 'rgb(7,36,61) !important',
      },
    },
    '& .MuiTableBody-root': {
      '& .MuiTableRow-root:first-child td': {
        borderTop: `1px solid ${colors.primary_main} !important`,
      },
      '& .MuiTableRow-root:not(:first-child)': {
        borderTop: 0,
        '& td': {
          borderTop: `1px solid ${colors.primary_main}`,
          '&:first-child': {
            position: 'relative',
            '&:before': {
              content: "''",
              position: 'absolute',
              top: 0,
              left: 0,
              background: `url(${gui_table_row_top_left}) top left`,
              backgroundRepeat: 'no-repeat !important',
              width: '27px',
              height: '7px',
            },
          },
          '&:last-child': {
            position: 'relative',
            '&:after': {
              content: "''",
              position: 'absolute',
              top: 0,
              right: 0,
              background: `url(${gui_table_row_top_right}) top right`,
              backgroundRepeat: 'no-repeat !important',
              width: '27px',
              height: '7px',
            },
          },
        },
      },
    },
  },
  tableFooter: {
    borderTop: `1px solid ${colors.primary_main}`,
    position: 'relative',
    '&::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '27px',
      height: '7px',
      background: `url(${gui_table_row_top_left}) top left`,
      backgroundRepeat: 'no-repeat !important',
    },
    '&::after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      right: 0,
      width: '27px',
      height: '7px',
      background: `url(${gui_table_row_top_right}) top left`,
      backgroundRepeat: 'no-repeat !important',
    },
  },
  disabled: {
    opacity: 0.4,
  },
  disableCell: {
    // opacity: 0.4,
    background: 'rgba(1, 13, 27)',
  },
});

export const useGuiDialogStyles = makeStyles(() => ({
  container: {
    '& .MuiDialog-container': {
      filter: 'drop-shadow(0px -8px 8px rgba(0, 0, 0, 0.35))',
    },
  },
  root: {
    backgroundColor: colors.secondary_background,
    maxHeight: 'calc(100vh - 64px)',
    position: 'relative',
    border: 'none',
  },
  content: {
    overflowY: 'auto',
    maxHeight: 'calc(100vh - 64px)',
    border: 'none',
    boxShadow: 'none',
    overflowX: 'hidden',
  },
  border: {
    position: 'absolute',
    filter: 'drop-shadow(0 0 10px #536DFE)',
  },
  top_left_border: {
    top: 0,
    left: 0,
  },
  top_right_border: {
    top: 0,
    right: 0,
  },
  bottom_left_border: {
    bottom: 0,
    left: 0,
  },
  bottom_right_border: {
    bottom: 0,
    right: 0,
  },
}));

export const useGuiDividerStyles = makeStyles(() => ({
  root: {
    position: 'relative',
  },
  divider_left: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  divider_right: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
}));

export const useCollapsableStyles = makeStyles(() => ({
  collapsing_cell: {
    overflow: 'hidden',
    border: 'none !important',
    padding: '0px !important',
    paddingLeft: '65px !important',
  },
}));

export const useGuiSwitchStyles = makeStyles(() => ({
  root: {
    width: '72px',
    '& .MuiTouchRipple-root': {
      display: 'none',
    },
    '& .MuiSwitch-switchBase': {
      backgroundColor: 'transparent !important',
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(32px)',
      '& .MuiSwitch-thumb': {
        background: `url(${switch_checked_icon}) top left / cover`,
        filter: 'drop-shadow(0px 0px 6px #536DFE)',
      },
      '&+.MuiSwitch-track': {
        background: `url(${switch_checked_track}) top left / cover`,
        opacity: '1 !important',
        filter: 'drop-shadow(0px 0px 6px #536DFE)',
      },
    },
    '& .MuiSwitch-switchBase.Mui-disabled': {
      '& .MuiSwitch-thumb': {
        background: `url(${switch_checked_icon}) top left / cover`,
      },
      '&+.MuiSwitch-track': {
        background: `url(${switch_disabled_track}) top left / cover`,
        opacity: '1 !important',
      },
    },
    '& .MuiSwitch-thumb': {
      borderRadius: 0,
      width: '25.56px',
      height: '20px',
      backgroundColor: 'transparent',
      background: `url(${switch_checked_icon}) top left / cover`,
      boxShadow: 'none',
      marginTop: '2px',
      filter: `drop-shadow(0px 0px 8px ${theme.palette.common.black})`,
    },
    '& .MuiSwitch-track': {
      borderRadius: 0,
      opacity: '1 !important',
      width: '46px',
      height: '18px',
      backgroundColor: 'transparent !important',
      background: `url(${switchTrack}) top left / cover`,
      boxShadow: 'none',
    },
  },
}));

export const useGuiTooltipStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    padding: 12,
    paddingInline: 18,
    backgroundColor: colors.secondary_background,
    boxShadow: 'none',
    border: 'none',
    color: theme.palette.error.light || theme.palette.primary.main,
    // textShadow: `0px 0px 6px ${theme.palette.primary.main}`,
  },
  border_error: {
    position: 'absolute',
    fill: theme.palette.error.main,
  },
  border: {
    position: 'absolute',
    // fill: '#18FFFF',
    filter: 'drop-shadow(0 0 10px #536DFE)',
  },
  top_left_border: {
    top: 0,
    left: 0,
  },
  top_right_border: {
    top: 0,
    right: 0,
  },
  bottom_left_border: {
    bottom: 0,
    left: 0,
  },
  bottom_right_border: {
    bottom: 0,
    right: 0,
  },
}));

export const useTabsStyles = makeStyles(() => ({
  selected: {
    paddingBlock: '1.1rem !important',
    paddingInline: '1.3rem !important',
    backgroundColor: 'rgba(24, 255, 255, 0.12) !important',
    background: `
      url(${menu_item_top_left}) top left,
      top right,
      bottom left,
      url(${menu_bottom_right}) bottom right !important`,
    backgroundRepeat: 'no-repeat !important',
    clipPath: `
      polygon(
        13px 0,
        100% 0,
        100% calc(100% - 13px),
        calc(100% - 13px) 100%,
        0 100%,
        0 13px
      )
    `,
  },
}));

export const useGuiChipStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    backgroundColor: colors.secondary_background,
    boxShadow: 'none',
    border: 'none',
    clipPath: `
      polygon(
        6px 0,
        100% 0,
        100% calc(100% - 6px),
        calc(100% - 6px) 100%,
        0 100%,
        0 6px
      )
    `,
  },
  rootDisabled: {
    backgroundColor: theme.palette.grey[900],
  },
  disabled: {
    backgroundColor: `${alpha(theme.palette.grey[900], 0.7)} !important`,
  },
  border: {
    position: 'absolute',
    filter: 'drop-shadow(0 0 10px #536DFE)',
  },
  top_left_border: {
    top: 0,
    left: 0,
  },
  top_right_border: {
    top: 0,
    right: 0,
  },
  bottom_left_border: {
    bottom: 0,
    left: 0,
  },
  bottom_right_border: {
    bottom: 0,
    right: 0,
  },
  chip_container: {
    paddingInline: 10,
    paddingBlock: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.primary.main,
  },
}));

export const useLoadingStyles = makeStyles(() => {
  return {
    loadingContainer: {
      position: 'fixed',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 9999,
      '& > img': {
        width: '100%',
      },
    },
  };
});

export const useWelcomeStyles = makeStyles(() => ({
  videoBackground: {
    width: '100vw',
    height: '100%',
    objectFit: 'cover',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: '-1',
  },
  hide: {
    display: 'none',
  },
  title: {
    textShadow: `0px 0px 6px ${theme.palette.primary.main}`,
    maxWidth: '100%',
    [theme.breakpoints.down('xl')]: {
      maxWidth: '500px',
    },
    fontSize: '45px',
  },
  description: {
    textShadow: `0px 0px 6px ${theme.palette.common.white}`,
  },
  youtubeButton: {
    filter: `drop-shadow(0px 0px 6px ${theme.palette.primary.main})`,
  },
  startButton: {
    boxShadow: `0px 0px 12px ${theme.palette.common.white}`,
    '&:hover': {
      boxShadow: `0px 0px 12px ${theme.palette.common.white}`,
    },
  },
  fadeOut: {
    visibility: 'hidden',
    transition: 'visibility 1.5s linear 0s',
  },
}));

export const usePaginationStyles = makeStyles(() => ({
  selected: {
    border: '1px solid #18FFFF',
  },
}));
