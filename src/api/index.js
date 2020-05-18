import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com';

export const fetchUsersData = async () => {
    try {
        const { data } = await axios.get(`${url}/users`)
        return data
    } catch (error) {
        console.log("fetchData -> error", error)
    }
}

export const fetchPostsData = async () => {
    try {
        const { data } = await axios.get(`${url}/posts`)
        return data
    } catch (error) {
        console.log("fetchData -> error", error)
    }
}
