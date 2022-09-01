import axios from 'axios';

const api = axios.create({
    baseURL: "https://creathink.space:8081",
})

export async function donate({
    value,
    nickname
}) {

    const cob = api.post('/pix', {
        value,
        nickname
    });

    return cob;
}

export async function topDonations() {
    return api.get('/top-donation');
}