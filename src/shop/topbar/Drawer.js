import {styled} from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import {leftToolbarWidth} from "../const";


export const Drawer = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginTop: '65px', //todo to remove
        marginLeft: leftToolbarWidth,
        width: `calc(100% - ${leftToolbarWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));