import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const SNSLinks = () => (
    <Box mt={2}>
        <Typography>사이트 SNS</Typography>
        <Box display="flex">
            <Link href="#"><FacebookIcon /></Link>
            <Link href="#"><InstagramIcon /></Link>
            <Link href="#"><TwitterIcon /></Link>
        </Box>
    </Box>
);

export default SNSLinks;
