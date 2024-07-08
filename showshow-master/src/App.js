import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate, useLocation } from 'react-router-dom';
import { Container, Grid, Box, Button } from '@mui/material';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import MainContent from './components/MainContent';
import LoginArea from './components/LoginArea';
import SNSLinks from './components/SNSLinks';
import SignUp from './components/SignUp';
import './App.css';

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const body = document.body;
        if (darkMode) {
            body.classList.add('dark-mode');
            body.classList.remove('light-mode');
        } else {
            body.classList.add('light-mode');
            body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
                <Routes>
                    <Route path="/" element={<MainLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
                    <Route path="/signup" element={<SignUpOnly />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </Router>
    );
};

const MainLayout = ({ darkMode, toggleDarkMode }) => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                </Grid>
                <Grid item xs={2}>
                    <SideMenu />
                </Grid>
                <Grid item xs={8}>
                    <MainContent />
                </Grid>
                <Grid item xs={2}>
                    <LoginArea />
                    <SNSLinks />
                    <Box mt={2}>
                        <Link to="/signup" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" color="primary" fullWidth>
                                회원가입
                            </Button>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

const SignUpOnly = () => {
    return <SignUp />;
};

export default App;
