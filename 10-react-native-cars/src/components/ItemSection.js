import React from "react";
import { View } from "react-native";
import { tsPropertySignature } from "@babel/types";

const ItemSection = () => {
    return <View style={styles.viewStyle}>
        {props.children}
    </View>
}

const styles = {
    viewStyle: {
        backgrounBottomWidth: 1,
        borderColor: 'gainsboro',
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        position: 'relative'
    }
}

export default ItemSection;