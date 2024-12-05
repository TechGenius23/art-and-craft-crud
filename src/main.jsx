/* eslint-disable react/jsx-no-undef */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Authprovider from './assets/Components/Authprovider';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/Components/Root';
import Errorpage from './assets/Components/Errorpage';
import Home from './assets/Components/Home';
import Souveniers from './assets/Components/Souveniers';
import Addcraftitems from './assets/Components/Addcraftitems';
import Mylist from './assets/Components/Mylist';
import Homedecoros from './assets/Components/Homedecoros';
import Login from './assets/Components/Login';
import Register from './assets/Components/Register';
import Viewdetails from './assets/Components/Viewdetails';
import Makelist from './assets/Components/Makelist';
import Beforemylist from './assets/Components/Beforemylist';
import Privateroute from './assets/Components/Privateroute';
import Sheam from './assets/Components/Sheam';
import Update from './assets/Components/Update';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
        loader: async () => {
          const dataresponse = await fetch('card.json');
          const datas = await dataresponse.json();
         
          return { datas };
        }
      },
      {
        path: "/sheam",
        element: <Sheam></Sheam>,

      },
      {
        path: '/viewdetails/:id',
        element: <Viewdetails></Viewdetails>,
        loader: () => fetch('card.json'),
      },
      {
        path: "/mycart",      
        element:<Privateroute>
          <Mylist></Mylist>
        </Privateroute> ,

      },
      {
        path: '/beforemylist',
        element: <Beforemylist></Beforemylist>,
        loader: () => fetch('http://localhost:5000/user')
      },
      {
        path: '/souverirs',
        element: <Souveniers></Souveniers>
      },
      {
        path: "/homedecors",
        element: <Homedecoros></Homedecoros>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/makelist',
        element: <Makelist></Makelist>
      },
      {
        path:'/update',
        element:<Update></Update>
      }
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </StrictMode>,
)
