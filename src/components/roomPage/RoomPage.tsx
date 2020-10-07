import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import WarningRoundedIcon from '@material-ui/icons/WarningRounded';
import { Grid, Paper, Typography } from '@material-ui/core';
import SentimentDissatisfiedRoundedIcon from '@material-ui/icons/SentimentDissatisfiedRounded';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    player: {
        width: '100%',
        height: '100%',
        minHeight: 400,
        backgroundColor: '#282c34',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    noVideo: {
        color: 'grey'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

type RoomPageProps = {
    videoSrc: any,
    onToolbarInputVisibilityChanged: any
}

export default function RoomPage({ videoSrc, onToolbarInputVisibilityChanged }: RoomPageProps) {
    const classes = useStyles();
    useEffect(() => {
        console.log("videoSrc has changed");
        setVideoError(false);
    }, [videoSrc]);

    useEffect(() => {
        console.log('mount');
        onToolbarInputVisibilityChanged(true);
    }, []);
    useEffect(() => () => {
        console.log("unmount");
        onToolbarInputVisibilityChanged(false);
    }, []);

    const [videoError, setVideoError] = React.useState(false); // TODO: find a way to get an error

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>xs=12</Paper>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Paper className={classes.paper}>
                        <div className={classes.player}>
                            {(!videoSrc || videoError) && <div className={classes.noVideo}>
                                {videoError ?
                                    <SentimentDissatisfiedRoundedIcon style={{ fontSize: 80 }} /> :
                                    <WarningRoundedIcon style={{ fontSize: 100 }} />}
                                <Typography style={{ fontSize: 26 }}>
                                    {videoError ?
                                        'Ошибка воспроизведения' :
                                        'Видео не выбрано'}
                                </Typography>
                            </div>}
                            {videoSrc && !videoError && <video width="100%" height="100%" controls
                                onPause={event => console.log(`Pause ${event.currentTarget.currentTime} sec`)}
                                onError={event => { console.log('video error'); setVideoError(true) }}
                                onPlay={event => console.log(`Play ${event.currentTarget.currentTime} sec`)}>
                                <source src={videoSrc} />
                    Your browser does not support the video tag.
                </video>}
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={5} container>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>xs=6</Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>xs=6</Paper>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
