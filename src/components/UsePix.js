import { Grid } from "@mui/material";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import LinearProgess from '@mui/material/LinearProgress';
import MoneyInput from "@rschpdr/react-money-input/dist/index";
import { useState } from "react";
import { donate } from "../client/creathink-api";
import { useNavigate } from 'react-router-dom';

export default function UsePix(props) {

    const navigate = useNavigate();
    const [nickname, setNickname] = useState("");
    const [value, setValue] = useState(0);
    const [loading, setLoading] = useState(false);

    const handleChangeNickName = (e) => {
        setNickname(e.target.value);
    }

    const handleChangeValue = (e) => {
        setValue(e.target.value);
    }

    const handleDonate = async () => {

        setLoading(true);
        
        const response = await donate({
            nickname,
            value
        });

        setLoading(false);

        navigate('/qrcode', {
            state: response.data,
            replace: false
        })
    }

return  <>
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    style={{ minHeight: '100vh', flexDirection: 'row', display: 'flex', justifyContent: 'center' }}
    >
        <Grid item style={{display: 'flex', flexDirection: 'column'}}>
            <TextField disabled={loading} sx={{mb: 3}} label="Apelido" variant="outlined" value={nickname} onChange={handleChangeNickName} />
            <MoneyInput
            disabled={loading}
    customInput={TextField}
    variant="outlined"
    label="Valor"
    value={value}
    onChange={handleChangeValue}
    currencyConfig={{
        locale: 'pt-BR',
        currencyCode: "BRL"
    }}
  />
            <Button sx={{mt: 5}} variant="contained" onClick={handleDonate} disabled={loading}>Enviar</Button>
        </Grid>      
    </Grid>
    {loading ? <LinearProgess style={{position: "fixed", top: 0, left: 0, zIndex: 10000, width: '100%'}} /> :  <LinearProgess style={{position: "fixed", top: 0, left: 0, zIndex: 10000, width: '0%'}} />}
</>

}