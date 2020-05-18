import Homepage from "pages/Homepage"
import Posts from "pages/Posts"
import BoilerplateInfo from "pages/BoilerplateInfo"
import { faHome, faList, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import Users from "pages/Users";

const AppRoutes = [
    {
        id: 'homepage',
        name: 'Homepage',
        path: '/',
        icon: faHome,
        page: Homepage
    },
    {
        id: 'users',
        name: 'Users',
        path: '/users',
        icon: faList,
        page: Users
    },
    {
        id: 'posts',
        name: 'Posts',
        path: '/posts',
        icon: faList,
        page: Posts
    },
    {
        id: 'boilerplate-info',
        name: 'Boilerplate Info',
        path: '/boilerplate-info',
        icon: faExclamationCircle,
        page: BoilerplateInfo
    },
]
export default AppRoutes
