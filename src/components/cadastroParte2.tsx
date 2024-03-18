import { useState } from 'react';
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import Forro from '../assets/Tela_Login.png';
import { useNavigate } from 'react-router-dom';

export default function CadastroParte2() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [emailError, setEmailError] = useState('');
    const [senhaError, setSenhaError] = useState('');
    const [confirmarSenhaError, setConfirmarSenhaError] = useState('');
    const navigate = useNavigate();

    const validarCampos = () => {
        let isValid = true;

        if (!email || !email.includes('@') || !email.includes('.')) {
            setEmailError('Por favor, insira um email válido');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (!senha) {
            setSenhaError('Por favor, preencha este campo');
            isValid = false;
        } else if (senha.length < 6) {
            setSenhaError('Mínimo de 6 caracteres');
            isValid = false;
        } else {
            setSenhaError('');
        }

        if (senha !== confirmarSenha) {
            setConfirmarSenhaError('As senhas não coincidem');
            isValid = false;
        } else {
            setConfirmarSenhaError('');
        }

        return isValid;
    };

    const handleCadastrar = () => {
        if (validarCampos()) {
            // Aqui você pode armazenar o email e a senha, por exemplo, em localStorage
            localStorage.setItem('email', email);
            localStorage.setItem('senha', senha);
            
            // Verifique se os dados estão corretos antes de armazenar
            console.log('Email cadastrado:', email);
            console.log('Senha cadastrada:', senha);
            
            console.log('Todos os campos estão preenchidos corretamente!');
            navigate('/CadastroEfetuado');
        }
    };

    return (
        <Grid container style={{ height: '100%' }}>
            <Grid item xs={12} sm={5} md={4} sx={{ backgroundColor: 'white', padding: '20px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                    <Stack direction='row' justifyContent='space-between'>
                        <Typography variant="h5" gutterBottom color='#3E0A7E' fontWeight='bold'>
                            Dados de acesso
                        </Typography>
                        <Typography color='#3E0A7E' >Etapa 2/2</Typography>
                    </Stack>

                    <Box >
                        <Typography variant="body1" style={{ color: '#3E0A7E', fontWeight: '600' }}>
                            Email
                        </Typography>
                    </Box>
                    <TextField
                        variant="outlined"
                        sx={{ marginBottom: '15px' }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        placeholder='Email'
                        error={!!emailError}
                        helperText={emailError}
                    />

                    <Box >
                        <Typography variant="body1" style={{ color: '#3E0A7E', fontWeight: 'bold' }}>
                            Senha
                        </Typography>
                    </Box>
                    <TextField
                        variant="outlined"
                        sx={{ marginBottom: '15px' }}
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        fullWidth
                        placeholder='Senha'
                        type='password'
                        error={!!senhaError}
                        helperText={senhaError}
                    />

                    <Box >
                        <Typography variant="body1" style={{ color: '#3E0A7E', fontWeight: 'bold' }}>
                            Confirmar Senha
                        </Typography>
                    </Box>
                    <TextField
                        variant="outlined"
                        sx={{ marginBottom: '15px' }}
                        value={confirmarSenha}
                        onChange={(e) => setConfirmarSenha(e.target.value)}
                        fullWidth
                        placeholder='Confirmar Senha'
                        type='password'
                        error={!!confirmarSenhaError}
                        helperText={confirmarSenhaError}
                    />

                    <Button
                        variant="contained"
                        sx={{
                            marginY: '20px',
                            backgroundColor: '#F5006A',
                            color: '#fff',
                            fontWeight: '600',
                            padding: '15px',
                            width:'100%',
                            '&:hover': {
                                backgroundColor: '#F5006A',
                            }
                        }}
                        onClick={handleCadastrar}
                    >
                        Cadastrar
                    </Button>
                </Box>
            </Grid>
            <Grid item xs={false} sm={7} md={8} sx={{ display: { xs: 'none', sm: 'block' } }}>
                <img src={Forro} alt="Imagem" style={{ width: '100%', objectFit: 'cover', height:'100%' }} />
            </Grid>
        </Grid>
    );
}
