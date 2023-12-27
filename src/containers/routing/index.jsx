import { Routes, Route } from 'react-router-dom';
import { Home } from '../../screens/Home';
import AboutUs from '../../screens/AboutUs';
import { BlogPage } from '../../screens/Blog';
import EstatesPage from '../../screens/Estates';
import EstateDetail from '../../screens/EstateDetailPage';
import Page from '../Page';


export const routes = [
    {
        path: '/',
        title: 'Home',
        element: <Page><Home/></Page>
    },
    {
        path: '/home',
        title: 'Home',
        element: <Page><Home/></Page>
    },
    {
        path: '/about',
        title: 'About Us',
        element: <Page><AboutUs /></Page>
    },
    {
        path: '/blog',
        title: 'Blog',
        element: <Page><BlogPage/></Page>
    },
    {
        path:'/estates',
        title: 'Estates',
        element: <Page><EstatesPage></EstatesPage></Page>
    },
    {
        path:'/estates/:id',
        title: 'Estate',
        element: <Page><EstateDetail></EstateDetail></Page>
    }
]

export const Routing = () => {
    return (
        <Routes>
            {
                routes.map((route, index) => (
                    <Route key={index} path={route.path} element={route.element} />
                ))
            }
        </Routes> 
    )
}
export default Routing;

