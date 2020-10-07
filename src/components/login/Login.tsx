import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import './Login.css'

type LoginProps = {
    //hub: signalR.HubConnection;
}

type LoginState = {
}

export default class Login extends Component<LoginProps, LoginState> {

    constructor(props: Readonly<LoginProps>) {
        super(props);
        console.log(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="main-menu home">
                <Button
                    variant="outlined"
                    size="large"
                    color="primary"
                    className="app-button">
                    Создать комнату</Button>
                <Button
                    variant="outlined"
                    size="large"
                    color="primary"
                    className="app-button">
                    Присоединиться</Button>
            </div>
        )
    }
}