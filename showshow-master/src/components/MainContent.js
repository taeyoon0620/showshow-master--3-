import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import CountdownTimer from './CountdownTimer';
import RecentPerformances from './RecentPerformances';
import RegionalPerformances from './RegionalPerformances';
import busking from '../assets/busking.PNG';  // 상대 경로로 이미지를 import합니다.

const MainContent = () => (
    <Box>
        <Typography variant="h5" style={{ fontFamily: 'Malgun Gothic', fontSize: '35px' }}>곧 시작하는 공연 정보</Typography>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <CountdownTimer />
            </Grid>
            <Grid item xs={6}>
                <img src={busking} alt="공연 사진" style={{ width: '100%', height: 'auto' }} /> {/* import한 이미지 사용 */}
            </Grid>
        </Grid>
        <RecentPerformances />
        <RegionalPerformances />
    </Box>
);

export default MainContent;