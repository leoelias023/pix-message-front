import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import UsePix from './components/UsePix';
import Donation from './components/Donation';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import QrCode from "./components/QrCode";
import WebSocket from "./components/WebSocket";
import Header from "./components/Header";
import { useEffect } from "react";

function App() {

  const theme = createTheme({});

  useEffect(() => {


    setInterval(( ) => {
      const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
      const r = randomBetween(0, 255);
      const g = randomBetween(0, 255);
      const b = randomBetween(0, 255);
      const rgb = `rgb(${r},${g},${b})`;

      document.getElementById('root').style.backgroundColor = rgb;

    }, 300)
    
  }, [])

  return (
    <ThemeProvider theme={theme}>
        <WebSocket />
        <Router>
          <Header />
          <Routes>
            <Route exact path='/' element={<UsePix />} />
            <Route path='/donation' element={<Donation />} />
            <Route path='/qrcode' element={<QrCode />} />
          </Routes>
        </Router>
    </ThemeProvider>
  );
}

export default App;
