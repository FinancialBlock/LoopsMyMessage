import React from "react";
import {
    Text,
    View,
} from "react-native";
import FleetView from "../../components/FleetView";
import userWithFleets from "../../data/userWithFleets";
import styles from "./styles"



const FleetScreen = () => {

    const user = userWithFleets[0];
    const fleet = userWithFleets[0].fleets.items[1];



    return(
        <View>
            <FleetView user={user} fleet={fleet}/>
        </View>
    )
}

export default FleetScreen;
