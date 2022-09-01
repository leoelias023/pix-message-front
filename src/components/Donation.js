import { useEffect, useState } from "react"
import List from '@mui/material/List';
import { ListItem, ListItemText, Typography, Grid } from "@mui/material";
import { topDonations } from "../client/creathink-api";


export default function Donation() {

    const [donations, setDonations] = useState([]);

    const displayDonation = (donation) => {
        return  <ListItem key={donation.txid}>
            <ListItemText
            primary={`${donation.nickname} - R$ ${donation.valor}`}
            secondary={donation.infoPagador ? donation.infoPagador : ''}
            />
      </ListItem>
    }

    useEffect(() => {
        (async() => {
            const {data: donations} = await topDonations();
            setDonations(donations);
        })()
    }, [])

    return <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    style={{ minHeight: '100vh', flexDirection: 'column', display: 'flex', justifyContent: 'center' }}
    >
        <Typography variant="h2">Top doações</Typography>
        <List>{donations && donations.map(displayDonation)}</List>
    </Grid>
}