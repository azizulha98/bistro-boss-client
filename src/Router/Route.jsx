import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../Layouts/MainLayouts';
import ErrorPages from '../Pages/Error/ErrorPages';
import Home from '../Pages/Home/Home/Home';

const createRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,
    errorElement: <ErrorPages />,
    children: [
      { path: '/', element: <Home /> },
      
    ]
  }
])

export default createRouter;