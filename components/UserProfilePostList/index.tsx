import React, {useEffect, useState} from "react";
import {
    Dimensions,
    FlatList,
    Text,
    View,
} from "react-native";
import FleetView from "../../components/FleetView";
import userWithFleets from "../../data/userWithFleets";
import styles from "./styles"
import {API, graphqlOperation} from 'aws-amplify';
import posts from "../../data/posts";
import Post from "../../components/Post";
import ContactListItem from "../components/ContactListItems";
import usersdata from "../../data/Users";
import {listPosts} from "../../src/graphql/queries";
import UserProfilePost from "../UserProfilePost";


const UserProfilePostList = () => {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        const fetchPost = async () => {
            // fetch all the posts
            try {
                const response = await API.graphql(graphqlOperation(listPosts));
                setPosts(response.data.listPosts.items);
            } catch (e) {
                console.error(e);
            }
        };

        fetchPost();
    }, []);


    return(
        <View>
            <Text style={styles.PostTitle}>Post</Text>


            <FlatList
                data={posts}
                renderItem={({item}) => <UserProfilePost post={item}  />}
                horizontal={true}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
            />

        </View>
    )
}

export default UserProfilePostList;
