import axios from "~/config/axios";

export const Search = keyword => new Promise(async(resole, rejetc) => {
    try {
        const response = await axios({
            url: '/search',
            method: 'get',
            params: {keyword}
        })
        resole(response);
    } catch (error) {
        rejetc(error)
    }
})