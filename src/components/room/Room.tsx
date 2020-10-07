import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import WarningRoundedIcon from '@material-ui/icons/WarningRounded';
import { FormControl, InputAdornment, InputBase, InputLabel, OutlinedInput, Typography } from '@material-ui/core';
import AddRoundedIcon from '@material-ui/icons/AddRounded';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    player: {
        width: 700,
        height: 400,
        backgroundColor: '#282c34',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    noVideo: {
        color: 'grey'
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'red',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '50ch',
            '&:focus': {
                width: '56ch',
            },
        },
    },
    srcInput: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    }
}));

type RoomProps = {
    onMenuButtonClick?: any,
}

export default function Room({ onMenuButtonClick }: RoomProps) {
    const classes = useStyles();
    const [videoSrc, setVideoSrc] = React.useState('');

    return (
        <div className={classes.root}>
            {/* <FormControl fullWidth className={classes.srcInput} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount"></InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    // value={values.amount}
                    // onChange={handleChange('amount')}
                    startAdornment={<InputAdornment position="start">
                        <AddRoundedIcon/>
                    </InputAdornment>}
                    labelWidth={60}
                />
            </FormControl> */}
            <div className={classes.player}>
                {!videoSrc && <div className={classes.noVideo}>
                    <WarningRoundedIcon style={{ fontSize: 100 }} />
                    <Typography style={{ fontSize: 26 }}>Видео не выбрано</Typography>
                </div>}
            </div>
        </div>
    );
}
