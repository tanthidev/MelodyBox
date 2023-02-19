import axios from "~/config/axios";

export const topMusic = id => new Promise(async(resole, rejetc) => {
    try {
        const response = await axios({
            url: '/detailplaylist',
            method: 'get',
            params: {id}
        })
        resole(response);
    } catch (error) {
        rejetc(error)
    }
})