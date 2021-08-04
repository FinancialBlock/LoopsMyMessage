import React, {useState} from "react";
import {
    Dimensions, FlatList,
    Text,
    View,
} from "react-native";
import FleetView from "../../components/FleetView";
import userWithFleets from "../../data/userWithFleets";
import styles from "./styles"
import posts from "../data/posts";
import PostView from "../components/Post";
import {User} from "../types";
import {Post} from "../types";
import userWithPost from "../data/posts";



const PostViewsScreen = () => {
    // const post = posts.find().user[1];



    return(
        <View>
            <FlatList
                data={posts}
                renderItem={({item}) => <PostView post={item} />}
                showsVerticalScrollIndicator={false}
                snapToInterval={Dimensions.get('window').height - 130}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
            />
            <Text>Hey</Text>
           //encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTApJdGN6I8NjFvhKfOBIwjz759q53b8HBckMLXl_blfq5RXZFy'}}/>
        </View>
    )
}

export default PostViewsScreen;
