import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppToolbar from './components/toolbar/Toolbar';
import AppSidebar from './components/sidebar/Sidebar';
import Login from '../login/Login';
import Room from '../room/Room';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column'
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
    const [videoSrc, setVideoSrc] = React.useState('');

    return (
        <div className={classes.root}>
            <AppToolbar
                onMenuButtonClick={() => setSidebarOpen(true)}
                onAddVideo={(value: string) => setVideoSrc(value)} />
            <AppSidebar
                open={sidebarOpen}
                onClose={() => setSidebarOpen(false)} />
            <main className={classes.content}>
                <Router>
                    <Suspense fallback={<div className="text">Загрузка...</div>}>
                        <Switch>
                            <Route exact path="/"
                                render={(props) =>
                                    <Room videoSrc={videoSrc} />
                                }
                            />
                        </Switch>
                    </Suspense>
                </Router>
            </main>
        </div>
    );
}
