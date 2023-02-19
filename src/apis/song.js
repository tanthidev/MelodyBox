import axios from "~/config/axios";

export const Song = id => new Promise(async(resole, rejetc) => {
    try {
        const response = await axios({
            url: '/song',
            method: 'get',
            params: {id}
        })
        resole(response);
    } catch (error) {
        rejetc(error)
    }
})