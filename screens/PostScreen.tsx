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
import PostView from "../components/Post";
import ContactListItem from "../components/ContactListItems";
import usersdata from "../data/Users";




const PostScreen = () => {
    const user = user
    const post = userdata[0];





    return(
        <View>

            <FlatList
                data={post}
                renderItem={({item}) => <PostView user={user}  />}
                showsVerticalScrollIndicator={false}
                snapToInterval={Dimensions.get('window').height - 130}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
            />
        </View>
    )
}

export default PostScreen;
