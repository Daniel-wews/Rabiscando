import { Button, Grid, Typography } from "@mui/material";
import Forro from '../assets/Tela_Login.png';
import { Link } from "react-router-dom";

export default function CadastroEfetuado() {
    return (
        <Grid container style={{ height: '100%' }}>
            <Grid item xs={12} sm={5} md={4} sx={{ backgroundColor: 'white', padding: '20px', display:'flex', flexDirection:'column', justifyContent:'center' }}>

                <Typography variant="h4" marginY='25px' color='#3E0A7E' fontWeight='bold' sx={{ textAlign: 'center' }}>
                    Cadastro Efetuado!
                </Typography>
                <Link to='/'>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#F5006A',
                        color: '#fff',
                        fontWeight: '600',
                        padding: '15px',
                        width:'100%',
                        '&:hover': {
                            backgroundColor: '#F5006A', // Cor de fundo quando hover
                        }
                    }}
                >
                    Fazer Login
                </Button>
                </Link>
            </Grid>

            <Grid item xs={false} sm={7} md={8} sx={{ display: { xs: 'none', sm: 'block' } }}>
                <img src={Forro} alt="Imagem" style={{ width: '100%', objectFit: 'cover', height: '100%' }} />
            </Grid>
        </Grid>
    );
}
