import axios from "axios";
let albumTopUrl = `https://qtify-backend-labs.crio.do/albums/top`;

export const getUid = () => {
    let id = Math.random().toString(36).substr(3, 9);
    return id;
};

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