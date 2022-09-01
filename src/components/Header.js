import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

export default function Header() {


    return <AppBar position="static">
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            display: { xs: 'flex' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          FEC - 2022
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              key={'enviar-mensagem'}
              variant='outlined'
            >
              <Link  style={{ textDecoration: 'none', color: '#fff' }} to="/">
              Enviar mensagem   
              </Link>
            </Button>
             <Button
              key={'donates'}
              variant='outlined'
            >
              <Link style={{ textDecoration: 'none', color: '#fff' }} to="/donation">Top doações</Link>
            </Button>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>;
}