// login.tsx
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import Forro from '../assets/Tela_Login.png';
import { FormControl, InputAdornment, IconButton, TextField, OutlinedInput } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';

interface Props {
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<Props> = ({ setIsLoading }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleLogin = () => {
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('senha');

        if (email === storedEmail && password === storedPassword) {
            setIsLoading(true); // Define isLoading como true antes de iniciar o processo de login

            // Simulação de processo de login assíncrono
            setTimeout(() => {
                console.log('Login bem-sucedido!');
                navigate('/home');
                setIsLoading(false); // Define isLoading como false após o login ser concluído
            }, 2000);
        } else {
            setError('Email ou senha incorretos.');
        }
    };

    return (
        <Grid container style={{ height: '100%' }}>
            <Grid item xs={12} sm={6} md={4} sx={{ backgroundColor: 'white', padding: '20px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                    <Typography variant="h4" gutterBottom color='#3E0A7E' fontWeight='bold'>
                        Bem Vindo!
                    </Typography>
                    <Box >
                        <Typography variant="body1" style={{ color: '#3E0A7E', fontWeight: 'bold' }}>
                            Email
                        </Typography>
                    </Box>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        placeholder='Email@exemplo.com'
                    />

                    <Box >
                        <Typography variant="body1" style={{ color: '#3E0A7E', fontWeight: 'bold' }}>
                            Senha
                        </Typography>
                    </Box>
                    <FormControl sx={{ my: 1 }} fullWidth variant="outlined">

                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="●●●●●●"
                        />
                    </FormControl>


                    <Typography variant="body2" gutterBottom>
                        <Link to='/esqueciMinhaSenha'>Esqueceu sua senha?</Link>
                    </Typography>

                    {error && (
                        <Typography variant="body2" color="error" style={{ marginBottom: 10 }}>
                            {error}
                        </Typography>
                    )}
                    <Button
                        variant="contained"
                        sx={{
                            marginY: '20px',
                            backgroundColor: '#F5006A',
                            color: '#fff',
                            fontWeight: '600',
                            padding: '15px',
                            '&:hover': {
                                backgroundColor: '#F5006A',
                            }
                        }}
                        onClick={handleLogin}
                    >
                        Entrar
                    </Button>

                    <Link to='/cadastro'>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: 'transparent',
                                color: '#F5006A',
                                border: '1px solid #F5006A',
                                fontWeight: '600',
                                padding: '15px',
                                width:'100%',
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                }
                            }}
                        >
                            Cadastrar
                        </Button>
                    </Link>

                </Box>
            </Grid>
            <Grid item xs={false} sm={6} md={8} sx={{ display: { xs: 'none', sm: 'block' } }}>
                <img src={Forro} alt="Imagem" style={{ width: '100%', objectFit: 'cover', height:'100%'}} />
            </Grid>
        </Grid>
    );
};

export default Login;
