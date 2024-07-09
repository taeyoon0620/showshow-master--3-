import React, { useState, useEffect, useRef } from 'react';
import { Typography, Box, Button } from '@mui/material';
import './CountdownTimer.css'; // CSS 파일을 추가합니다.

const CountdownTimer = () => {
    const calculateInitialTime = () => {
        const now = new Date();
        const utcNow = new Date(
            now.getUTCFullYear(),
            now.getUTCMonth(),
            now.getUTCDate(),
            now.getUTCHours(),
            now.getUTCMinutes(),
            now.getUTCSeconds()
        );
        const targetTime = utcNow.getTime() + 9999 * 24 * 60 * 60 * 1000 + 99 * 60 * 60 * 1000 + 99 * 60 * 1000 + 99 * 1000;
        return targetTime - utcNow.getTime();
    };

    const initialTime = calculateInitialTime();
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef(null);

    const calculateTimeLeft = (time) => {
        return {
            days: Math.floor(time / (1000 * 60 * 60 * 24)),
            hours: Math.floor((time / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((time / 1000 / 60) % 60),
            seconds: Math.floor((time / 1000) % 60)
        };
    };

    useEffect(() => {
        if (isRunning) {
            timerRef.current = setInterval(() => {
                setTimeLeft((prevTime) => {
                    if (prevTime <= 0) {
                        clearInterval(timerRef.current);
                        return 0;
                    }
                    return prevTime - 1000;
                });
            }, 1000);
        } else {
            clearInterval(timerRef.current);
        }
        return () => clearInterval(timerRef.current);
    }, [isRunning]);

    const handleStart = () => setIsRunning(true);
    const handleStop = () => setIsRunning(false);
    const handleReset = () => {
        setIsRunning(false);
        setTimeLeft(initialTime);
    };

    const time = calculateTimeLeft(timeLeft);

    return (
        <Box textAlign="center" className="countdown-timer">
            <Typography variant="h4">
                {`${String(time.days).padStart(4, '0')}:${String(time.hours).padStart(2, '0')}:${String(time.minutes).padStart(2, '0')}:${String(time.seconds).padStart(2, '0')}`}
            </Typography>
            <Box mt={2}>
                <Button variant="contained" color="primary" onClick={handleStart} disabled={isRunning}>
                    Start
                </Button>
                <Button variant="contained" color="secondary" onClick={handleStop} disabled={!isRunning} sx={{ mx: 1 }}>
                    Stop
                </Button>
                <Button variant="contained" onClick={handleReset}>
                    Reset
                </Button>
            </Box>
        </Box>
    );
};

export default CountdownTimer;
    