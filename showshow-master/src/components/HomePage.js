import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = ({ DarkModeToggle }) => {
    const navigate = useNavigate();

    const goToSignUp = () => {
        navigate('/signup');
    };

    return (
        <div className="App">
            <div className="buttons-container">
                <button className="signup-button" onClick={goToSignUp}>회원가입</button>
            </div>
            <div className="home-page-container">
                <h1 className="title"></h1>
            </div>
        </div>
    );
};

export default HomePage;
