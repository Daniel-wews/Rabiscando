
import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton, Menu, MenuItem, Tabs, Tab, Stack, createTheme, ThemeProvider } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';
import AreaProfessor from './areaProfessor';
import MeuPerfil from './meuPerfil';


const theme = createTheme({
    components: {
        MuiTab: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        color: '#3E0A7E'
                    },
                },
            },
        },
    },
});

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
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default function Home() {

    const [value, setValue] = React.useState(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        navigate('/login'); // Navega para a página de login
    };

    return (
        <>
            <AppBar position="static" elevation={0} sx={{ backgroundColor: 'transparent', borderBottom: '2px solid #edf7f3' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <img src={Logo} alt="" />

                    <Box sx={{ borderBottom: 1 }}>
                        <ThemeProvider theme={theme}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab sx={{ marginRight: '3rem', textTransform:'none', fontWeight:'bold' }} label="Painel de Vendas" {...a11yProps(0)} />
                                <Tab sx={{textTransform:'none', fontWeight:'bold' }} label="Meu perfil" {...a11yProps(1)} />
                            </Tabs>
                        </ThemeProvider>
                    </Box>

                    <IconButton
                        aria-label="more"
                        aria-controls="dropdown-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <Typography variant="body1" fontWeight='600' sx={{ marginRight: '8px', color: '#3E0A7E' }}>Professor</Typography>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <Menu
                        id="dropdown-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Opção 1</MenuItem>
                        <MenuItem onClick={handleClose}>Opção 2</MenuItem>
                        <MenuItem onClick={handleClose}>Opção 3</MenuItem>
                        <MenuItem onClick={handleLogout}>Sair</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
            <Stack>
                <CustomTabPanel value={value} index={0}>
                    <AreaProfessor />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <MeuPerfil />
                </CustomTabPanel>
            </Stack>
        </>
    )
}
