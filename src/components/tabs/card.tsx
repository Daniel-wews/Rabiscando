import { Box, Grid, Typography } from "@mui/material";

export default function Card(){
    return(
        <Grid item xs={12} sm={6} md={3}> {/* Alterado para md={6} */}
            <Box sx={{ border: '2px solid gray', borderRadius: "10px", height:'20vh', display:'flex', flexDirection:'column', justifyContent:'space-evenly', paddingX:'12px' }}>
                <Typography variant="body1" fontWeight='bold' sx={{color:'#3E0A7E'}}>Saldo:<span style={{ color: 'red' }}>R$200</span></Typography> {/* Alterado para R$ em vermelho */}
                <Typography variant="body2" sx={{ color: 'gray' }}>20/01/2024</Typography>
                <Typography variant="body2" fontWeight='bold' sx={{color:'#3E0A7E'}} >Lembrete: <span style={{ color: 'gray' }}>Gerar nova fiscal</span></Typography> {/* Alterado para lembrete em cor 3E0A7E */}
            </Box>
        </Grid>
    )
}
