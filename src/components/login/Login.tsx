import React, { Component } from 'react';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    }
}));

type LoginProps = {
    onAuthorize: any
}

export default function Login({ onAuthorize }: LoginProps) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button
                variant="outlined"
                size="large"
                color="primary"
                className="app-button"
                onClick={onAuthorize}>
                Вход</Button>
            <Button
                variant="outlined"
                size="large"
                color="primary"
                className="app-button">
                Регистрация</Button>
        </div>
    )
}