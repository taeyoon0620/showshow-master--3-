import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Concert from '../assets/Concert.PNG';  // 상대 경로로 이미지를 import합니다.
import Concert2 from '../assets/Concert2.PNG';  // 상대 경로로 이미지를 import합니다.
import 임영웅 from '../assets/임영웅.PNG';  // 상대 경로로 이미지를 import합니다.

const RecentPerformances = () => {
    const performances = [
        { title: '2024 임영웅 콘서트', image: 임영웅 },  // import한 이미지를 사용합니다.
        { title: '첼로 공연', image: Concert },  // import한 이미지를 사용합니다.
        { title: '뮤지컬 공연', image: Concert2 },  // import한 이미지를 사용합니다.
    ];

    const imageHeight = '400px'; // 원하는 높이로 설정

    return (
        <Box mt={4}>
            <Typography variant="h5" style={{ fontFamily: 'Malgun Gothic', fontSize: '45px' }}>
                최근 인기 공연
            </Typography>
            <Grid container spacing={2}>
                {performances.map((performance, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                        <Box
                            component="img"
                            src={performance.image}
                            alt={performance.title}
                            sx={{
                                width: '100%',
                                height: imageHeight,
                                objectFit: 'cover', // 비율을 유지하면서 크기를 맞춤
                                mb: 3, // 이미지와 이미지 사이의 간격을 위해 추가된 마진
                            }}
                        />
                        <Typography align="center" style={{ marginTop: '30px' }}>{performance.title}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default RecentPerformances;
