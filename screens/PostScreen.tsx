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
import posts from "../data/posts";
import Post from "../components/Post";
import ContactListItem from "../components/ContactListItems";
import usersdata from "../data/Users";





const PostScreen = () => {
    const post = posts[0];


    return(
        <View>


            <FlatList
                data={posts}
                renderItem={({item}) => <Post post={item}  />}
                showsVerticalScrollIndicator={false}
                snapToInterval={Dimensions.get('window').height - 130}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
            />

        </View>
    )
}

export default PostScreen;
