import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import createRouter from './Router/Route'
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <div className='max-w-screen-xl mx-auto'>
      <RouterProvider router={createRouter} />
    </div>
  </HelmetProvider>
)
