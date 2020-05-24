import axios from 'axios'

const url = 'http://134.122.97.189/';


export const fetchContentBySlug = async (parent, child) => {
    if (!child) throw Error ('Slug Must be defined')
    try {
        const { data } = await axios.get(url.concat(`${parent}?slug=${child}`))
        console.log("fetchContentBySlug -> data", data[0].children)
        return data[0].children
    } catch (error) {
        throw Error (error)
    }
}
