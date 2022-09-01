import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import UsePix from './components/UsePix';
import Donation from './components/Donation';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import QrCode from "./components/QrCode";
import WebSocket from "./components/WebSocket";

function App() {

  const theme = createTheme({});

  return (
    <ThemeProvider theme={theme}>
        <WebSocket />
        <Router>
          <Routes>
            <Route path='/' element={<UsePix />} />
            <Route path='/donation' element={<Donation />} />
            <Route path='/qrcode' element={<QrCode />} />
          </Routes>
        </Router>
    </ThemeProvider>
  );
}

export default App;
