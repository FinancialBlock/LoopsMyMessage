import React from "react";
import {
    Text,
    View,
} from "react-native";
import FleetView from "../../components/FleetView";
import userWithFleets from "../../data/userWithFleets";
import styles from "./styles"
import posts from "../data/posts";
import PostView from "../components/Post";
import {User} from "../types";


const PostViewsScreen = () => {


    return(
        <View>
            <PostView user={{id: '3', name: 'blockchain', username: 'blockchain'}}/>
        </View>
    )
}

export default PostViewsScreen;
