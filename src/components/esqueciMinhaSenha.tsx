import { useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import Forro from '../assets/Tela_Login.png';
import { useNavigate } from "react-router-dom";

export default function EsqueciMinhaSenha() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleConfirmar = () => {
        // Verificar se o e-mail está cadastrado no localStorage
        const storedEmail = localStorage.getItem('email');
        if (storedEmail && storedEmail === email) {
            // Redirecionar para a página de redefinição de senha
            navigate('/redefinirSenha');
        } else {
            // Caso o e-mail não seja encontrado, exibir uma mensagem de erro
            setError('Email inválido!');
        }
    };

    return (
        <Grid container style={{ height: '100%' }}>
            <Grid item xs={12} sm={5} md={4} sx={{ backgroundColor: 'white', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                <Typography variant="h4" marginY='25px' color='#3E0A7E' fontWeight='bold' sx={{ textAlign: 'center' }}>
                    Esqueci Minha Senha
                </Typography>
                <Box >
                    <Typography variant="body1" style={{ color: '#3E0A7E', fontWeight: 'bold' }}>
                        E-mail
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
                {error && (
                    <Typography variant="body2" color="error" style={{ marginTop: '10px', textAlign: 'center' }}>
                        {error}
                    </Typography>
                )}
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
                            backgroundColor: '#F5006A', // Cor de fundo quando hover
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
