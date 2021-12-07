import React from 'react';
import Home from './views/Home/Home';
import Others from "./views/Others/Others";
import Others1 from "./views/Others/Others1";

const routes = [
  {
    path: '/',
    children: [
      {path: '/', element: <Home/>},
      {path: '/others', element: <Others/>},
      {path: '/others1', element: <Others1/>}
    ]
  }
];

export default routes;