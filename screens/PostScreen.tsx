import React from "react";
import {
    Dimensions,
    FlatList,
    Text,
    View,
} from "react-native";
import FleetView from "../../components/FleetView";
import userWithFleets from "../../data/userWithFleets";
import styles from "./styles"
import userWithPost from "../data/posts";
import Post from "../components/Post";
import ContactListItem from "../components/ContactListItems";
import usersdata from "../data/Users";




const PostScreen = () => {
    const user = userWithPost[0];
    const post = userWithPost[0];





    return(
        <View>

            <FlatList
                data={userWithPost}
                renderItem={({item}) => <Post user={item}  />}
                showsVerticalScrollIndicator={false}
                snapToInterval={Dimensions.get('window').height - 130}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
            />
        </View>
    )
}

export default PostScreen;
