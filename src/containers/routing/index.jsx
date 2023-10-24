import { Routes, Route } from 'react-router-dom';
import { Home } from '../../screens/Home';
import AboutUs from '../../screens/AboutUs';
import Page from '../Page';


export const routes = [
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

