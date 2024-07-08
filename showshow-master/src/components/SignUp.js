import React, { useState } from 'react';
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    FormControl,
    FormControlLabel,
    Checkbox,
    FormHelperText,
    Grid,
    Box,
    Typography,
    Container,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
} from '@mui/material/';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';

const FormHelperTexts = styled(FormHelperText)`
    width: 100%;
    padding-left: 16px;
    font-weight: 700;
    color: #d32f2f;
`;

const Boxs = styled(Box)`
    padding-bottom: 40px;
`;

const SignUp = () => {
    const theme = createTheme();
    const [checked, setChecked] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordState, setPasswordState] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [nameError, setNameError] = useState('');
    const [registerError, setRegisterError] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const handleAgree = (event) => {
        setChecked(event.target.checked);
    };

    const onhandlePost = async (data) => {
        const { email, name, password } = data;
        const postData = { email, name, password };
        // Perform post request logic here
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);
        const joinData = {
            email: data.get('email'),
            name: data.get('name'),
            password: data.get('password'),
            rePassword: data.get('rePassword'),
        };
        const { email, name, password, rePassword } = joinData;

        const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (!emailRegex.test(email)) setEmailError('올바른 이메일 형식이 아닙니다.');
        else setEmailError('');

        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
        if (!passwordRegex.test(password))
            setPasswordState('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!');
        else setPasswordState('');

        if (password !== rePassword) setPasswordError('비밀번호가 일치하지 않습니다.');
        else setPasswordError('');

        const nameRegex = /^[가-힣a-zA-Z]+$/;
        if (!nameRegex.test(name) || name.length < 1) setNameError('올바른 이름을 입력해주세요.');
        else setNameError('');

        if (!checked) alert('회원가입 약관에 동의해주세요.');

        if (
            emailRegex.test(email) &&
            passwordRegex.test(password) &&
            password === rePassword &&
            nameRegex.test(name) &&
            checked
        ) {
            onhandlePost(joinData);
            setOpenModal(true);
        }
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} />
                    <Typography component="h1" variant="h5">
                        회원가입
                    </Typography>
                    <Boxs component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <FormControl component="fieldset" variant="standard">
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        autoFocus
                                        fullWidth
                                        type="email"
                                        id="email"
                                        name="email"
                                        label="이메일 주소"
                                        error={emailError !== ''}
                                    />
                                </Grid>
                                <FormHelperTexts>{emailError}</FormHelperTexts>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        type="password"
                                        id="password"
                                        name="password"
                                        label="비밀번호 (숫자+영문자+특수문자 8자리 이상)"
                                        error={passwordState !== ''}
                                    />
                                </Grid>
                                <FormHelperTexts>{passwordState}</FormHelperTexts>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        type="password"
                                        id="rePassword"
                                        name="rePassword"
                                        label="비밀번호 재입력"
                                        error={passwordError !== ''}
                                    />
                                </Grid>
                                <FormHelperTexts>{passwordError}</FormHelperTexts>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="name"
                                        name="name"
                                        label="이름"
                                        error={nameError !== ''}
                                    />
                                </Grid>
                                <FormHelperTexts>{nameError}</FormHelperTexts>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox onChange={handleAgree} color="primary" />}
                                        label="회원가입 약관에 동의합니다."
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                size="large"
                            >
                                회원가입
                            </Button>
                        </FormControl>
                        <FormHelperTexts>{registerError}</FormHelperTexts>
                    </Boxs>
                </Box>
            </Container>

            <Dialog open={openModal} onClose={handleCloseModal}>
                <DialogTitle>회원가입 성공!</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        회원가입이 성공적으로 완료되었습니다. 홈페이지로 이동합니다.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseModal} color="primary" autoFocus>
                        확인
                    </Button>
                </DialogActions>
            </Dialog>
        </ThemeProvider>
    );
};

export default SignUp;