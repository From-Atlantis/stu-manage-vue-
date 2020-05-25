import urls from './URLs';
import axios from 'axios'

const appkey = 'dongmeiqi_1547441744650'
const size = 5

const myAxios = axios.create({
    baseURL: urls.baseURL,
    method: 'get',
    params: {
        appkey
    }
})

export default {
    findByPage(page) {
        return myAxios({
            url: urls.findByPage,
            params: {
                page,
                size
            }
        })
    },
    updateStu(item) {
        return myAxios({
            url: urls.updateStu,
            params: {
                ...item
            }
        })
    },
    delStu(sNo) {
        return myAxios({
            url: urls.delStu,
            params: {
                sNo
            }
        })
    },
    addStu(item) {
        return myAxios({
            url: urls.addStu,
            params: {
                ...item
            }
        })
    }
}