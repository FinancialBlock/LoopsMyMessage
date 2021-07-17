import React from "react";
import {
    Text,
    View,
} from "react-native";
import {User, FleetType} from "../../types";
import userWithFleets from "../../data/userWithFleets";
import styles from './styles';


export type FleetView = {
    user: User;
    fleets: FleetType;


}

const FleetView = () => {
    return(
    <View>
    <Text>Hello fleet view</Text>
    </View>
    )
}

export default FleetView;
