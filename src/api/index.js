import axios from 'axios'

const url = 'http://134.122.97.189/';


export const fetchContentBySlug = async (parent, child) => {
    if (!child) throw Error('Slug Must be defined')
    try {
        const token = localStorage.getItem("token");
        const { data } = await axios.get(url.concat(`${parent}?slug=${child}`), { headers: { "Authorization": `Bearer ${token.slice(1, -1)}` } })
        return data[0].children
    } catch (error) {
        console.log(error)
    }
}

export const postLogin = async (username, password) => {
    if (!username || !password) return { status: 'failed', message: 'You need to provide a username and password' }
    try {
        const { data } = await axios.post(url.concat(`auth/local`), { 'identifier': username, 'password': password })
        return data
    } catch (error) {
        return { status: 'failed', message: 'Login Failed' }
    }
}