// import libraries
import React from "react";
import { Text, AppRegistry } from "react-native"; 
import Header from "./src/components/Header";

/* 
 no importamos toda la libreria
 sino q solo lo q vamos a usar. x eso 
 no va ReactNative y si { Text }
*/

// create component
const App = () => {
    return (
        <Header />
    )
};

// render component to screen
AppRegistry.registerComponent('cars', () => App);
/* 'cars' debe ser igual q el nombre del proyecto */