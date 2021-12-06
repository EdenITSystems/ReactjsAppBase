import React from "react";
import routes from './routes'
import {useRoutes} from 'react-router-dom';
import './styles/styles.scss';
import Header from "./layout/header/Header";
import Footer from './layout/footer/Footer'

export default function App() {
  const routing = useRoutes(routes);

  return (
    <>
      <Header/>
        {routing}
      <Footer/>
    </>
  );
}

