import { Grid, Typography } from "@mui/material";
import Icone01 from '../../assets/icone01.png'
import Icone02 from '../../assets/icone02.png'
import Icone03 from '../../assets/icone03.png'
import Icone04 from '../../assets/icone04.png'
import Icone05 from '../../assets/icone05.png'
import Card from "./card";

export default function VisaoGeral() {
    return (
        <>
            <Grid container spacing={2} sx={{ paddingY:'10px'}}>
                <Grid item xs={12} sm={6}>
                    <article style={{ textAlign: "start", backgroundColor: '#380478', borderRadius: '20px', color: 'white', padding: '20px' }}>
                        <img src={Icone01} alt="" />
                        <Typography variant="h6" style={{ marginTop: "10px" }}>500</Typography>
                        <Typography variant="body1">Inscritos</Typography>
                    </article>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <article style={{ textAlign: "start", backgroundColor: '#380478', borderRadius: '20px', color: 'white', padding: '20px' }}>
                        <img src={Icone02} alt="" />
                        <Typography variant="h6" style={{ marginTop: "10px" }}>500</Typography>
                        <Typography variant="body1">Cancelados</Typography>
                    </article>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <article style={{ textAlign: "start", backgroundColor: '#380478', borderRadius: '20px', color: 'white', padding: '20px' }}>
                    <img src={Icone03} alt="" />
                        <Typography variant="h6" style={{ marginTop: "10px" }}>R$300.000,00</Typography>
                        <Typography variant="body1">Faturamento Total</Typography>
                    </article>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <article style={{ textAlign: "start", backgroundColor: '#380478', borderRadius: '20px', color: 'white', padding: '20px' }}>
                    <img src={Icone04} alt="" />
                        <Typography variant="h6" style={{ marginTop: "10px" }}>R$300.000,00</Typography>
                        <Typography variant="body1">Recebidos</Typography>
                    </article>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <article style={{ textAlign: "start", backgroundColor: '#380478', borderRadius: '20px', color: 'white', padding: '20px' }}>
                    <img src={Icone05} alt="" />
                        <Typography variant="h6" style={{ marginTop: "10px" }}>R$300.000,00</Typography>
                        <Typography variant="body1">Disponivel</Typography>
                    </article>
                </Grid>
            </Grid>
            <Typography variant="h4" sx={{ color: '#3E0A7E', marginY: '20px' }}>Saldo</Typography>
            <Grid container spacing={2}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </Grid>
        </>
    );
}
