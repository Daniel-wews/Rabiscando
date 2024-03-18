import React, { useState, useEffect } from 'react';
import { Box, TextField, Typography, Button, Grid } from '@mui/material';

export default function MeuPerfil() {
  const [cpf, setCPF] = useState<string>('');
  const [telefone, setTelefone] = useState<string>('');
  const [cep, setCep] = useState<string>('');
  const [nome, setNome] = useState<string>('');
  const [nomeError, setNomeError] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [senhaAtual, setSenhaAtual] = useState<string>('');
  const [novaSenha, setNovaSenha] = useState<string>('');
  const [confirmarSenha, setConfirmarSenha] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [senhaError, setSenhaError] = useState<string>('');

  useEffect(() => {
    // Carregar os dados armazenados no localStorage
    const userData = localStorage.getItem('userData');
    if (userData) {
      const { nome, cpf, telefone, cep } = JSON.parse(userData);
      setNome(nome);
      setCPF(cpf);
      setTelefone(telefone);
      setCep(cep);
    }

    // Carregar o e-mail armazenado no localStorage
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
    }
    const storedNome = localStorage.getItem('nome');
    if (storedNome) {
      setNome(storedNome);
    }
    const storedTelefone = localStorage.getItem('telefone');
    if (storedTelefone) {
      setTelefone(storedTelefone);
    }
    const storedCpf = localStorage.getItem('cpf');
    if (storedCpf) {
      setCPF(storedCpf);
    }
    const storedCep = localStorage.getItem('cep');
    if (storedCep) {
      setCep(storedCep);
    }
  }, []);

  // Função para verificar se o e-mail e a senha estão corretos
  const validarCredenciais = (): boolean => {
    const storedEmail = localStorage.getItem('email');
    const storedSenha = localStorage.getItem('senha');


    if (email === storedEmail && senhaAtual === storedSenha) {
      return true;
    } else {
      setEmailError('E-mail ou senha incorretos');
      return false;
    }
  };

  // Função para validar a nova senha
  const validarNovaSenha = (): boolean => {
    if (novaSenha.length < 6) {
      setSenhaError('A nova senha deve ter pelo menos 6 caracteres');
      return false;
    } else if (novaSenha !== confirmarSenha) {
      setSenhaError('As senhas não coincidem');
      return false;
    } else {
      setSenhaError('');
      return true;
    }
  };

  // Manipulador de mudança para o campo de e-mail
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  // Manipulador de mudança para o campo de senha atual
  const handleSenhaAtualChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSenhaAtual(e.target.value);
  };

  // Manipulador de mudança para o campo de nova senha
  const handleNovaSenhaChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNovaSenha(e.target.value);
  };

  // Manipulador de mudança para o campo de confirmar senha
  const handleConfirmarSenhaChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setConfirmarSenha(e.target.value);
  };

  // Manipulador de clique no botão Confirmar
  const handleConfirmarClick = (): void => {
    if (validarCredenciais() && validarNovaSenha()) {
      // Armazenar a senha atual no localStorage
      localStorage.setItem('senha', novaSenha);
      // Atualizar os dados no localStorage
      const userData = { nome, cpf, telefone, cep };
      localStorage.setItem('userData', JSON.stringify(userData));
      // Recarregar a página
      window.location.reload();
    }
  };

  // Manipulador de mudança para o campo de nome
  const handleNomeChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const inputValue: string = e.target.value;
    if (/^[a-zA-Z\s]*$/.test(inputValue)) {
      setNome(inputValue);
      setNomeError('');
    } else {
      setNomeError('Por favor, insira apenas caracteres');
    }
  };

  // Função para formatar o CPF
  const formatarCPF = (value: string): string => {
    let cleanedValue = value.replace(/\D/g, '');
    cleanedValue = cleanedValue.slice(0, 11);

    let formattedValue = '';
    for (let i = 0; i < cleanedValue.length; i++) {
      if (i === 3 || i === 6) {
        formattedValue += '.';
      } else if (i === 9) {
        formattedValue += '-';
      }
      formattedValue += cleanedValue[i];
    }

    return formattedValue;
  };

  // Manipulador de mudança para o campo CPF
  const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const inputValue: string = e.target.value;
    const formattedCPF: string = formatarCPF(inputValue);
    setCPF(formattedCPF);
  };

  // Função para formatar o telefone
  const formatarTelefone = (value: string): string => {
    let cleanedValue = value.replace(/\D/g, '');
    cleanedValue = cleanedValue.slice(0, 11);

    let formattedValue = '';
    for (let i = 0; i < cleanedValue.length; i++) {
      if (i === 0) {
        formattedValue += '(';
      } else if (i === 2) {
        formattedValue += ') ';
      } else if (i === 7) {
        formattedValue += '-';
      }
      formattedValue += cleanedValue[i];
    }

    return formattedValue;
  };

  // Manipulador de mudança para o campo de telefone
  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const inputValue: string = e.target.value;
    const formattedTelefone: string = formatarTelefone(inputValue);
    setTelefone(formattedTelefone);
  };

  // Função para formatar o CEP
  const formatarCEP = (value: string): string => {
    let cleanedValue = value.replace(/\D/g, '');
    cleanedValue = cleanedValue.slice(0, 8);

    let formattedValue = '';
    for (let i = 0; i < cleanedValue.length; i++) {
      if (i === 5) {
        formattedValue += '-';
      }
      formattedValue += cleanedValue[i];
    }

    return formattedValue;
  };

  // Manipulador de mudança para o campo de CEP
  const handleCEPChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const inputValue: string = e.target.value;
    const formattedCEP: string = formatarCEP(inputValue);
    setCep(formattedCEP);
  };

  return (
    <Box sx={{ padding: '10px' }}>
      <Typography variant="h4" gutterBottom sx={{ color: '#3E0A7E', fontWeight:'600' }}>
        Configurações
      </Typography>
      <Typography variant="h5" gutterBottom sx={{ color: '#3E0A7E' }}>
        Dados Pessoais
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography sx={{ color: '#f71b76' }}>Nome completo*</Typography>
          <TextField
            fullWidth
            InputProps={{
              sx: {
                color: '#3E0A7E', // Define a cor do texto
                borderRadius:'15px'
              },
            }}
            sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}
            onChange={handleNomeChange}
            value={nome}
            placeholder='Nome Completo'
            error={!!nomeError}
            helperText={nomeError}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography sx={{ color: '#f71b76' }}>Telefone*</Typography>
          <TextField
            fullWidth
            InputProps={{
              sx: {
                color: '#3E0A7E', // Define a cor do texto
                borderRadius:'15px'
              },
            }}
            sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}
            onChange={handleTelefoneChange}
            value={telefone}
            placeholder='(00) 00000-0000'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography sx={{ color: '#f71b76' }}>CPF*</Typography>
          <TextField
            fullWidth
            InputProps={{
              sx: {
                color: '#3E0A7E', // Define a cor do texto
                borderRadius:'15px'
              },
            }}
            sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}
            onChange={handleCPFChange}
            value={cpf}
            placeholder='000.000.000-00'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography sx={{ color: '#f71b76' }}>CEP*</Typography>
          <TextField
            fullWidth
            InputProps={{
              sx: {
                color: '#3E0A7E', // Define a cor do texto
                borderRadius:'15px'
              },
            }}
            sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}
            onChange={handleCEPChange}
            value={cep}
            placeholder='00000-000'
          />
        </Grid>
      </Grid>
      <Typography variant="h5" gutterBottom sx={{ color: '#3E0A7E', marginY:'25px' }}>
        Dados de acesso
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography sx={{ color: '#f71b76' }}>Email*</Typography>
          <TextField
            fullWidth
            InputProps={{
              sx: {
                color: '#3E0A7E', // Define a cor do texto
                borderRadius:'15px'
              },
            }}
            sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}
            onChange={handleEmailChange}
            value={email}
            error={!!emailError}
            helperText={emailError}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography sx={{ color: '#f71b76' }}>Senha Atual*</Typography>
          <TextField
            fullWidth
            InputProps={{
              sx: {
                borderRadius:'15px'
              },
            }}
            type="password"
            sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}
            onChange={handleSenhaAtualChange}
            value={senhaAtual}
            error={!!emailError}
            helperText={emailError}
            placeholder='Senha Atual'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography sx={{ color: '#f71b76' }}>Nova Senha*</Typography>
          <TextField
            fullWidth
            InputProps={{
              sx: {
                borderRadius:'15px'
              },
            }}
            type="password"
            sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}
            value={novaSenha}
            onChange={handleNovaSenhaChange}
            error={!!senhaError}
            helperText={senhaError}
            placeholder='Nova Senha'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography sx={{ color: '#f71b76' }}>Confirmar Senha*</Typography>
          <TextField
            fullWidth
            InputProps={{
              sx: {
                borderRadius:'15px'
              },
            }}
            type="password"
            sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}
            value={confirmarSenha}
            onChange={handleConfirmarSenhaChange}
            error={!!senhaError}
            helperText={senhaError}
            placeholder='Confirmar Senha'
          />
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginRight: '6px', marginTop: '20px' }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#f71b76',
            color: 'white',
            fontWeight: 'bold',
            padding: '15px',
            width: { xs: '100%', sm: '22%' },
            '&:hover': {
              backgroundColor: '#ff5252',
            }
          }}
          onClick={handleConfirmarClick}
        >
          Confirmar
        </Button>
      </Box>
    </Box>
  );

}
