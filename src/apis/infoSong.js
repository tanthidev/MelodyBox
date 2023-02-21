import axios from "~/config/axios";

export const InfoSong = id => new Promise(async(resole, rejetc) => {
    try {
        const response = await axios({
            url: '/infosong',
            method: 'get',
            params: {id}
        })
        resole(response);
    } catch (error) {
        rejetc(error)
    }
})