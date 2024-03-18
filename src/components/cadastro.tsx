import { useState } from 'react';
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import Forro from '../assets/Tela_Login.png';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate

export default function Cadastro() {
    const [nome, setNome] = useState<string>('');
    const [cpf, setCpf] = useState<string>('');
    const [telefone, setTelefone] = useState<string>('');
    const [cep, setCep] = useState<string>('');
    const [nomeError, setNomeError] = useState<string>('');
    const [cpfError, setCpfError] = useState<string>('');
    const [telefoneError, setTelefoneError] = useState<string>('');
    const [cepError, setCepError] = useState<string>('');
    const navigate = useNavigate(); // Inicialize useNavigate

    const validarCampos = () => {
        let isValid = true;

        if (!nome) {
            setNomeError('Por favor, preencha este campo');
            isValid = false;
        } else if (!/^[a-zA-Z\s]*$/.test(nome)) {
            setNomeError('Por favor, insira apenas caracteres');
            isValid = false;
        } else {
            setNomeError('');
        }

        let formattedCpf = cpf.replace(/\D/g, '');
        if (formattedCpf.length !== 11) {
            setCpfError('Por favor, preencha todos os campos corretamente');
            isValid = false;
        } else {
            setCpfError('');
        }

        let formattedTelefone = telefone.replace(/\D/g, '');
        if (formattedTelefone.length !== 11) {
            setTelefoneError('Por favor, preencha todos os campos corretamente');
            isValid = false;
        } else {
            setTelefoneError('');
        }

        let formattedCep = cep.replace(/\D/g, '');
        if (formattedCep.length !== 8) {
            setCepError('Por favor, preencha todos os campos corretamente');
            isValid = false;
        } else {
            setCepError('');
        }

        return isValid;
    };

    const handleAvancar = () => {
        if (validarCampos()) {
            console.log('Todos os campos estão preenchidos corretamente!');
            navigate('/CadastroParte2'); // Redirecione após a validação bem-sucedida
            localStorage.setItem('nome', nome);
            localStorage.setItem('cpf', cpf);
            localStorage.setItem('telefone', telefone);
            localStorage.setItem('cep', cep);
        }
    };

    return (
        <Grid container style={{ height: '100vh' }}>
            <Grid item xs={12} sm={5} md={4} sx={{ backgroundColor: 'white', padding: '20px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                    <Stack direction='row' justifyContent='space-between'>
                        <Typography variant="h5" gutterBottom color='#3E0A7E' fontWeight='bold'>
                            Dados Pessoais
                        </Typography>
                        <Typography color='#3E0A7E' >Etapa 1/2</Typography>
                    </Stack>

                    <Box >
                        <Typography variant="body1" style={{ color: '#3E0A7E', fontWeight: '600' }}>
                            Nome completo
                        </Typography>
                    </Box>
                    <TextField
                        variant="outlined"
                        sx={{ marginBottom: '15px' }}
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        fullWidth
                        placeholder='Nome completo'
                        error={!!nomeError}
                        helperText={nomeError}
                    />

                    <Box >
                        <Typography variant="body1" style={{ color: '#3E0A7E', fontWeight: 'bold' }}>
                            CPF
                        </Typography>
                    </Box>
                    <TextField
                        variant="outlined"
                        sx={{ marginBottom: '15px' }}
                        value={cpf}
                        onChange={(e) => {
                            let inputValue = e.target.value.replace(/\D/g, ''); 
                            inputValue = inputValue.slice(0, 11); 

                            let formattedValue = '';
                            for (let i = 0; i < inputValue.length; i++) {
                                if (i === 3 || i === 6) {
                                    formattedValue += '.'; 
                                } else if (i === 9) {
                                    formattedValue += '-'; 
                                }
                                formattedValue += inputValue[i];
                            }

                            setCpf(formattedValue);
                        }}
                        fullWidth
                        placeholder='000.000.000-00'
                        error={!!cpfError}
                        helperText={cpfError}
                    />

                    <Box >
                        <Typography variant="body1" style={{ color: '#3E0A7E', fontWeight: 'bold' }}>
                            Telefone
                        </Typography>
                    </Box>
                    <TextField
                        variant="outlined"
                        sx={{ marginBottom: '15px' }}
                        value={telefone}
                        onChange={(e) => {
                            let inputValue = e.target.value.replace(/\D/g, ''); 
                            inputValue = inputValue.slice(0, 11); 

                            let formattedValue = '';
                            for (let i = 0; i < inputValue.length; i++) {
                                if (i === 0) {
                                    formattedValue += '('; 
                                } else if (i === 2) {
                                    formattedValue += ') '; 
                                } else if (i === 7) {
                                    formattedValue += '-'; 
                                }
                                formattedValue += inputValue[i]; 
                            }

                            setTelefone(formattedValue); 
                        }}
                        fullWidth
                        placeholder='(00) 00000-0000'
                        error={!!telefoneError}
                        helperText={telefoneError}
                    />

                    <Box >
                        <Typography variant="body1" style={{ color: '#3E0A7E', fontWeight: 'bold' }}>
                            CEP
                        </Typography>
                    </Box>
                    <TextField
                        variant="outlined"
                        sx={{ marginBottom: '15px' }}
                        value={cep}
                        onChange={(e) => {
                            let inputValue = e.target.value.replace(/\D/g, ''); 
                            inputValue = inputValue.slice(0, 8); 

                            let formattedValue = '';
                            for (let i = 0; i < inputValue.length; i++) {
                                if (i === 5) {
                                    formattedValue += '-'; 
                                }
                                formattedValue += inputValue[i]; 
                            }

                            setCep(formattedValue); 
                        }}
                        fullWidth
                        placeholder='00000-000'
                        error={!!cepError}
                        helperText={cepError}
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
                        onClick={handleAvancar}
                    >
                        Avançar
                    </Button>
                </Box>
            </Grid>
            <Grid item xs={false} sm={7} md={8} sx={{ display: { xs: 'none', sm: 'block' } }}>
                <img src={Forro} alt="Imagem" style={{ width: '100%', objectFit: 'cover', height:'100%' }} />
            </Grid>
        </Grid>
    );
}
