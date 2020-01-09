import React, {Component} from 'react';
import Footer from "../Common/Footer/Footer";
import NavBar from "../Common/NavBar/NavBar";
import {Route} from 'react-router-dom'

const App = ({children}) => (
  <Route

    render={(props) => {
      return (
        <>
          <NavBar location={props.location.pathname}/>
          <main>
            {children}
          </main>
          <Footer location={props.location.pathname}/>
        </>
      );
    }}
  />
);

export default App;
