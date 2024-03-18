import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function createData(
  Data: string,
  Tipo: string,
  Consumidor: string,
  Codigo: string,
  Valor: string,
) {
  return { Data, Tipo, Consumidor, Codigo, Valor };
}

const rows = [
  createData('00/00/00', 'Entrada', 'Aluno 01 Aluno 01', 'XIGSA5489SS', 'R$ 1.000,00'),
  createData('00/00/00', 'Entrada', 'Aluno 01 Aluno 01', 'XIGSA5489SS', 'R$ 1.000,00'),
  createData('00/00/00', 'Entrada', 'Aluno 01 Aluno 01', 'XIGSA5489SS', 'R$ 1.000,00'),
  createData('00/00/00', 'Entrada', 'Aluno 01 Aluno 01', 'XIGSA5489SS', 'R$ 1.000,00'),
  createData('00/00/00', 'Entrada', 'Aluno 01 Aluno 01', 'XIGSA5489SS', 'R$ 1.000,00'),
];

export default function Extrato() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        aria-controls="menu-todas"
        aria-haspopup="true"
        onClick={handleClick}
        variant="contained"
        color="primary"
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          marginBottom: '16px',
          color: '#3E0A7E',
          backgroundColor: '#e5e5e5',
          borderRadius: '10px',
          boxShadow: 'none',
          textTransform:'none',
          fontSize:'20px',
          width:'8%',
          '&:hover': {
            backgroundColor: '#e5e5e5', // Manter a mesma cor de fundo ao passar o mouse
            boxShadow: 'none',
          },
        }}
      >
        Todas
      </Button>
      <Menu
        id="menu-todas"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Opção 1</MenuItem>
        <MenuItem onClick={handleClose}>Opção 2</MenuItem>
        <MenuItem onClick={handleClose}>Opção 3</MenuItem>
      </Menu>
      <TableContainer component={Paper} sx={{ height: '100%' }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ bgcolor: '#3E0A7E' }}>
              <TableCell sx={{ color: 'white' }}>Data</TableCell>
              <TableCell sx={{ color: 'white' }} align="right">Tipo</TableCell>
              <TableCell sx={{ color: 'white' }} align="right">Consumidor</TableCell>
              <TableCell sx={{ color: 'white' }} align="right">Codigo</TableCell>
              <TableCell sx={{ color: 'white' }} align="right">Valor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.Data}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" sx={{ color: '#3E0A7E' }}>
                  {row.Data}
                </TableCell>
                <TableCell align="right" sx={{ color: '#3E0A7E' }}>{row.Tipo}</TableCell>
                <TableCell align="right" sx={{ color: '#3E0A7E' }}>{row.Consumidor}</TableCell>
                <TableCell align="right" sx={{ color: '#3E0A7E' }}>{row.Codigo}</TableCell>
                <TableCell align="right" sx={{ color: '#3E0A7E' }}>{row.Valor}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
