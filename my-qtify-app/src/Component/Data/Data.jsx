import axios from "axios";


let albumTopUrl = `https://qtify-backend-labs.crio.do/albums/top`;

let newAlbumUrl = `https://qtify-backend-labs.crio.do/albums/new`;


export const getUid = () => {
    let id = Math.random().toString(36).substr(3, 9);
    return id;
};


// TOP ALBUM FETCH
export const topAlbumData = async () => {
    try {
        let res = await axios.get(`${albumTopUrl}`);
        return res.data;
    }
    catch(e) {
        console.log(`Error from Data Component `, e);
        return null;
    }
};


// NEW ALBUM FETCH

export const newAlbumData = async () => {
    try {
        let res = await axios.get(`${newAlbumUrl}`);
        return res.data;
    }
    catch(e) {
        console.log(`Error from Data Component `, e);
        return null;
    }
};