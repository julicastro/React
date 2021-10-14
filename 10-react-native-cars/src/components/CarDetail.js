import React from "react";
import { View, Text } from "react-native";

import Item from "./Item";
import ItemSection from "./ItemSection";

const CarDetail = (props) => {
    return (
        <Item>
            <ItemSection>
                <View style={styles.headerContainer}>
                    <Text>{props.brand.brand}</Text>
                    <Text>{props.brand.model[0].name}</Text>
                </View>
            </ItemSection>
        </Item>
    );
};

const styles = {
    headerContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
}


export default CarDetail;