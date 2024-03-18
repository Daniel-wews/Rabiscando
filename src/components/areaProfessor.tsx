import React from 'react';
import { Box, Button, Tab, Tabs, Typography } from '@mui/material';
import VisaoGeral from './tabs/visaoGeral';
import Extrato from './Extrato';

const AreaProfessor: React.FC = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 1 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <>
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h4" color="#3E0A7E" fontWeight="600" padding='20px 15px'>
            Área Do professor
          </Typography>
          <Button sx={{
            backgroundColor: 'red', color: 'white', fontWeight: '600', marginRight: '20px', borderRadius: '10px', height: '60px',
            textTransform:'none',fontSize:'20px',
            '&:hover': {
              backgroundColor: 'red',
            }
          }}>Relatório de receitas</Button>
        </Box>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Visão Geral" />
          <Tab label="Extrato" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <VisaoGeral/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Extrato/>
      </CustomTabPanel>
      <Box>
      </Box>
    </>
  );
};

export default AreaProfessor;
