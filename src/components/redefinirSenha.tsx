import { useState } from 'react';
import { Box, Button, Grid, Typography, FormControl, InputAdornment, IconButton, OutlinedInput } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Forro from '../assets/Tela_Login.png';

export default function RedefinirSenha() {
    const navigate = useNavigate();
    const [novaSenha, setNovaSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [showNovaSenha, setShowNovaSenha] = useState(false);
    const [showConfirmarSenha, setShowConfirmarSenha] = useState(false);

    const handleClickShowNovaSenha = () => {
        setShowNovaSenha(!showNovaSenha);
    };

    const handleClickShowConfirmarSenha = () => {
        setShowConfirmarSenha(!showConfirmarSenha);
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleConfirmar = () => {
        if (novaSenha.length >= 6 && novaSenha === confirmarSenha) {
            // Atualizar localStorage
            localStorage.setItem('senha', novaSenha);
            alert('Senha atualizada com sucesso.')
            // Redirecionar para a página de login
            navigate('/');
        } else {
            alert('As senhas não correspondem ou não atendem aos critérios de validação.');
        }
    };

    return (
        <Grid container style={{ height: '100%' }}>
            <Grid item xs={12} sm={5} md={4} sx={{ backgroundColor: 'white', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                <Typography variant="h4" marginY='25px' color='#3E0A7E' fontWeight='bold' sx={{ textAlign: 'center' }}>
                    Redefinir sua senha
                </Typography>

                <Box>
                    <Typography variant="body1" style={{ color: '#3E0A7E', fontWeight: 'bold' }}>
                        Nova Senha
                    </Typography>
                </Box>
                <FormControl sx={{ my: 1 }} fullWidth variant="outlined">
                    <OutlinedInput
                        id="outlined-adornment-nova-senha"
                        type={showNovaSenha ? 'text' : 'password'}
                        onChange={(e) => setNovaSenha(e.target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle nova senha visibility"
                                    onClick={handleClickShowNovaSenha}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showNovaSenha ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        placeholder="Nova senha"
                    />
                </FormControl>

                <Box marginTop='15px'>
                    <Typography variant="body1" style={{ color: '#3E0A7E', fontWeight: 'bold' }}>
                        Confirmar Nova Senha
                    </Typography>
                </Box>
                <FormControl sx={{ my: 1 }} fullWidth variant="outlined">
                    <OutlinedInput
                        id="outlined-adornment-confirmar-senha"
                        type={showConfirmarSenha ? 'text' : 'password'}
                        onChange={(e) => setConfirmarSenha(e.target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle confirmar senha visibility"
                                    onClick={handleClickShowConfirmarSenha}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showConfirmarSenha ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        placeholder="Confirmação de senha"
                    />
                </FormControl>

                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#F5006A',
                        color: '#fff',
                        fontWeight: '600',
                        padding: '15px',
                        marginTop: '15px',
                        width: '100%',
                        '&:hover': {
                            backgroundColor: '#F5006A',
                        }
                    }}
                    onClick={handleConfirmar}
                >
                    Confirmar
                </Button>
            </Grid>

            <Grid item xs={false} sm={7} md={8} sx={{ display: { xs: 'none', sm: 'block' } }}>
                <img src={Forro} alt="Imagem" style={{ width: '100%', objectFit: 'cover', height: '100%' }} />
            </Grid>
        </Grid>
    );
}
