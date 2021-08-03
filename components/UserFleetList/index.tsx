import React, {useEffect, useState} from "react";
import {View, Text, Image, FlatList} from "react-native";
import UserFleetPreview from "../UserFleetPreview";

import styles from "./styles"
import {API, graphqlOperation} from "aws-amplify";
import {listUsers} from './queries';

const UserFleetList = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await API.graphql(graphqlOperation(listUsers));
                setUsers(data.data.listUsers.items);
            } catch (e) {console.log(e)
            }
        }
        fetchData();
    }, [])



    return(
        <View>
            <FlatList
                horizontal={true}
                data={users}
                renderItem={({item}) => <UserFleetPreview user={item}
                showsHorizontalScrollIndicator={false}
                />}
                />
            <Text style={styles.showallstories}> Show All Stories </Text>
        </View>
    )
}

export default UserFleetList;
