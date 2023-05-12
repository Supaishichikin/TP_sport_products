import {useRoutes} from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Cart from '../pages/Cart';
import Products from '../pages/Products';
import AdminProducts from '../pages/admin/AdminProducts';
import AdminUsers from '../pages/admin/AdminUsers';

export default function Router() {

    return useRoutes(
        [
            {
                path: 'register',
                element: <Register/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'products',
                element: <Products/>
            },
            {
                path: 'cart',
                element: <Cart/>
            },
            {
                path: 'admin-products',
                element: <AdminProducts/>
            },
            {
                path: 'admin-users',
                element: <AdminUsers/>
            }
        ]
    );
}