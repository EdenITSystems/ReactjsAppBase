import React from 'react';
import Login from './views/Auths/Login/Login';
import Signin from './views/Auths/Signin/Signin';
import Home from './views/Home/Home';

const routes = [
  {
    path: '/',
    children: [
      {path: '/', element: <Home/>},
      {path: '/signin', element: <Signin/>},
      {path: '/login', element: <Login/>}
    ]
  }
];

export default routes;