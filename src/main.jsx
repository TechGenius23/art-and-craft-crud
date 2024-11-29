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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/home",
        element:<Home></Home>,
        loader:async()=>{
          const dataresponse=await fetch('card.json');
          const datas=await dataresponse.json();
          return{datas};
        }
      },
      {
        path:"/addcraft",
        element:<Addcraftitems></Addcraftitems>,
        
      },
      {
        path:'/viewdetails/:id',
        element:<Viewdetails></Viewdetails>,
        loader:()=> fetch('card.json'),
      },
      {
        path:"/mycart",
        element:<Mylist></Mylist>
      },
      {
        path:'/souverirs',
        element:<Souveniers></Souveniers>
      },
      {
        path:"/homedecors",
        element:<Homedecoros></Homedecoros>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
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
