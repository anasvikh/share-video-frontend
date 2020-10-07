import React, { Component } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    }
}));

type HomeProps = {
    onCreateRoom: any
    onJoinRoom: any
}

export default function Home({ onCreateRoom, onJoinRoom }: HomeProps) {
    const classes = useStyles();
    const history = useHistory();

    return (
        <div className={classes.root}>
            <Button
                variant="outlined"
                size="large"
                color="primary"
                className="app-button"
                onClick={() => history.push('/room')}>
                Создать комнату</Button>
            <Button
                variant="outlined"
                size="large"
                color="primary"
                className="app-button"
                onClick={onJoinRoom}>
                Присоединиться</Button>
        </div>
    )
}