import React, {useEffect, useState} from "react";
import {View, Text, Image, FlatList} from "react-native";
import UserProfilePost from "../UserProfilePost";

import styles from "./styles"
import {API, graphqlOperation} from "aws-amplify";
import {listPost} from './queries';

const UserProfilePostList = () => {

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
                renderItem={({item}) => <UserProfilePost user={item}
                showsHorizontalScrollIndicator={false}
                />}
            />
            <Text style={styles.showallstories}> Show All Stories </Text>
        </View>
    )
}

export default UserProfilePostList;
