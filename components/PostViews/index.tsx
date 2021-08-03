import React from "react";
import {
    Image,
    Text, TouchableOpacity,
    View,
} from "react-native";
import {User, FleetType, Post} from "../../types";
import userWithFleets from "../../data/userWithFleets";
import styles from './styles';
import {Dimensions} from "react-native";
import FleetProfile from "../FleetProfile";
import moment from "moment";


export type PostViewsProps = {
    user: User;
    post: Post;
}

const PostViews = (props: PostViewsProps) => {
    const {user: {id, username, imageUri}} = props;
    console.log(props);

    return(
        <View>

            <Text> username </Text>



        </View>
    )
}

export default PostViews;
