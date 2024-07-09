import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const SNSLinks = () => (
    <Box mt={2}>
        <Typography>사이트 SNS</Typography>
        <Box display="flex" gap={4}>
            <Link href="#" sx={{ fontSize: '3rem', color: 'inherit' }}>
                <FacebookIcon fontSize="inherit" />
            </Link>
            <Link href="#" sx={{ fontSize: '3rem', color: 'inherit' }}>
                <InstagramIcon fontSize="inherit" />
            </Link>
            <Link href="#" sx={{ fontSize: '3rem', color: 'inherit' }}>
                <TwitterIcon fontSize="inherit" />
            </Link>
        </Box>
    </Box>
);

export default SNSLinks;
