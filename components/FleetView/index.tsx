import React from "react";
import {
    Image,
    Text, TouchableOpacity,
    View,
} from "react-native";
import {User, FleetType} from "../../types";
import userWithFleets from "../../data/userWithFleets";
import styles from './styles';
import {Dimensions} from "react-native";
import FleetProfile from "../FleetProfile";
import moment from "moment";

export type FleetViewProps = {
    user: User;
    fleet: FleetType;
    goToNextFleet: Function;
    goToPrevFleet: Function;


}



const FleetView = (props: FleetViewProps) => {
    const {user, fleet, goToNextFleet, goToPrevFleet} = props;
    return(
        <View style={styles.container}>

            {fleet.imageUri && <Image source={{ uri: fleet.imageUri}} style={styles.image}/>}
            <Text style={styles.text}>{fleet.text}</Text>

            <View style={styles.userHeaderContainer}>
                <FleetProfile image={user.imageUri} size={70} />
                <View style={styles.userNames}>
                    <Text style={styles.name}>{user.name}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.username}>
                            @{user.username}
                        </Text>
                        <Text style={styles.time}>
                            {moment(fleet.createdAt).fromNow()}
                        </Text>
                    </View>
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={{flex: 1}} onPress={() => goToPrevFleet()} />
                <TouchableOpacity style={{flex: 1}} onPress={() => goToNextFleet()} />
            </View>

        </View>
    )
}

export default FleetView;
