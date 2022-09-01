import { useEffect, useState } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';


export default function WebSocket() {
    const { lastMessage, readyState } = useWebSocket("wss://creathink.space:8080");
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");

    function playAlertSound() {
        new Audio('mixkit-arcade-bonus-alert-767.wav').play()
    }

    function addSnackbarMessage({
        valor,
        nickname,
        infoPagador
    }) {
        setOpen(true);    
        setMessage(`${nickname} [R$ ${valor}] - ${infoPagador}`);
        setTimeout(() => setOpen(false), 5000);
    }

    useEffect(() => {

        if (lastMessage) {
            
            const { event, data: pix} = JSON.parse(lastMessage.data);

            if (event === "pix_received") {
                playAlertSound()
                addSnackbarMessage(pix);

                const msg = new SpeechSynthesisUtterance();
                msg.text = `${pix.nickname} enviou um PIX de ${pix.valor} reais`;
                window.speechSynthesis.speak(msg)

                if (pix.infoPagador?.length) {
                    const msg = new SpeechSynthesisUtterance();
                    msg.text = pix.infoPagador;
                    window.speechSynthesis.speak(msg)
                }

            }


             console.log('Received message', pix);
        }
    }, [lastMessage])
    return  <Snackbar
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    open={open}
    message={message}
    key={message}
  />
}