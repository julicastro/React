// import libraries
import React from "react";
import { AppRegistry } from "react-native";

import Header from "./src/components/Header";
import CarList from "./src/components/CarList";

/* 
 no importamos toda la libreria
 sino q solo lo q vamos a usar. x eso 
 no va ReactNative y si { Text }
*/

// create component
const App = () => {
    return (
        <View>
            <Header title={'Cars'} />
            <CarList />
        </View>
    )
};

// render component to screen
AppRegistry.registerComponent('cars', () => App);
/* 'cars' debe ser igual q el nombre del proyecto */