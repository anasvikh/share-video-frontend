import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppToolbar from './components/toolbar/Toolbar';
import AppSidebar from './components/sidebar/Sidebar';
import Room from '../roomPage/RoomPage';
import HomePage from '../homePage/HomePage';
import RoomPage from '../roomPage/RoomPage';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(5),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
}));

export default function Layout() {
    const classes = useStyles();
    const [sidebarOpen, setSidebarOpen] = React.useState(false);
    const [toolbarInputVisibility, setToolbarInputVisibility] = React.useState(false);
    const [videoSrc, setVideoSrc] = React.useState('');

    return (
        <div className={classes.root}>
            <AppToolbar
                isInputVisible={toolbarInputVisibility}
                onMenuButtonClick={() => setSidebarOpen(true)}
                onAddVideo={(value: string) => setVideoSrc(value)} />
            <AppSidebar
                open={sidebarOpen}
                onClose={() => setSidebarOpen(false)} />
            <main className={classes.content}>
                <Router>
                    <Suspense fallback={<div className="text">Загрузка...</div>}>
                        <Switch>
                            <Route exact path="/">
                                <HomePage
                                    onCreateRoom={null}
                                    onJoinRoom={null} />
                            </Route>
                            <Route path="/room">
                                <RoomPage 
                                videoSrc={videoSrc} 
                                onToolbarInputVisibilityChanged={(value: boolean) => setToolbarInputVisibility(value)}/>
                            </Route>
                        </Switch>
                    </Suspense>
                </Router>
            </main>
        </div>
    );
}
