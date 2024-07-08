import React from 'react';
import { Box, TextField, Button } from '@mui/material';

const LoginArea = () => (
    <Box>
        <TextField fullWidth label="Username" margin="normal" />
        <TextField fullWidth label="Password" type="password" margin="normal" />
        <Button variant="contained" fullWidth>로그인</Button>
    </Box>
);

export default LoginArea;
