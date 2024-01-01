import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../Layouts/MainLayouts';
import ErrorPages from '../Pages/Error/ErrorPages';
import Home from '../Pages/Home/Home/Home';
import Menu from '../Pages/Menu/Menu/Menu';
import Order from '../Pages/Order/Order/Order';
import Login from '../Pages/Login/Login';
import Singin from '../Pages/Singin/Singin';
import PrivateRoute from './PrivateRoute';


const createRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,
    errorElement: <ErrorPages />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'menu', element: <Menu /> },
      { path: 'order/:category', element: <PrivateRoute><Order /> </PrivateRoute> },
      { path: 'login', element: <Login /> },
      { path: 'singing', element: <Singin /> },

    ]
  }
])

export default createRouter;