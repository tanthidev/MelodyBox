import axios from "~/config/axios";

export const getHome = () => new Promise(async(resole, rejetc) => {
    try {
        const response = await axios({
            url: '/home',
            method: 'get'
        })
        resole(response);
    } catch (error) {
        rejetc(error)
    }
})