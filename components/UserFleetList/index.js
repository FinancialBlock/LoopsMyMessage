import React from "react";
import {View, Text, Image, FlatList} from "react-native";
import UserFleetPreview from "../UserFleetPreview";
import userWithFleets from "../../data/userWithFleets";
import styles from "./styles"

const UserFleetList = () => {
    return(
        <View>
            <FlatList
                horizontal={true}
                data={userWithFleets}
                renderItem={({item}) => <UserFleetPreview user={item}
                showsHorizontalScrollIndicator={false}
                />}
                />
            <Text style={styles.showallstories}> Show All Stories </Text>
        </View>
    )
}

export default UserFleetList;
