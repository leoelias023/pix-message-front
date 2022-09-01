import { Grid, Button } from "@mui/material";
import { useLocation } from "react-router-dom"

export default function QrCode() {
    const location = useLocation();

    const handleCopyQrCodePixClipboard = () => {
        const { qrcode } = location.state;
        navigator.clipboard.writeText(qrcode);
    }

    return  <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    style={{ minHeight: '100vh', flexDirection: 'column', display: 'flex', justifyContent: 'center' }}
    >
        <img style={{width: "40vh"}} src={location.state.imagemQrcode} alt="QRCODE PIX" />
        <Button variant='outlined' onClick={handleCopyQrCodePixClipboard}>Copiar código</Button>
    </Grid>
}