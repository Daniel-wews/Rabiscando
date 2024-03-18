import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import Login from '../components/login';
import Cadastro from '../components/cadastro';
import CadastroParte2 from '../components/cadastroParte2';
import CadastroEfetuado from '../components/cadastroEfetuado';
import Home from '../components/Home';
import EsqueciMinhaSenha from '../components/esqueciMinhaSenha';
import RedefinirSenha from '../components/redefinirSenha';
import MeuPerfil from '../components/meuPerfil';
// import Extrato from '../components/Extrato';
import TabExtrato from '../components/tabs/tab_extrato';

const LoadingSpinner: React.FC = () => (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
      }}
    >
      <CircularProgress size={80} color="primary" />
      <h2 style={{ color: 'white', marginTop: '10px' }}>Carregando...</h2>
    </Box>
  );

const Rota: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <BrowserRouter>
      {isLoading && <LoadingSpinner />}
      <Routes>
      <Route path="/" element={<Login setIsLoading={setIsLoading} />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/CadastroParte2" element={<CadastroParte2 />} />
        <Route path="/CadastroEfetuado" element={<CadastroEfetuado />} />
        <Route path="/home" element={<Home />} />
        <Route path="/esqueciMinhaSenha" element={<EsqueciMinhaSenha />} />
        <Route path="/redefinirSenha" element={<RedefinirSenha />} />
        <Route path="/meuPerfil" element={<MeuPerfil />} />
        <Route path="/tab_extrato" element={<TabExtrato />} />
        {/* <Route path="/Extrato" element={<Extrato />} /> */}
        {/* Fallback para rota não encontrada */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rota;
