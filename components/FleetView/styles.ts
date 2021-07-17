import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import {Dimensions} from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: '#001933',
        width: '100%',
        height: Dimensions.get('window').height - 80,
    },
    text: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 20,

    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    userHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
        alignItems: 'center',
        position: 'absolute',
        padding: 10,
        top: -10,
    },
    userNames: {
        marginLeft: 10,
    },
    name: {
        color: "#efefef",
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    username: {
        color: "#efefef",
        fontSize: 18,
    },
    time: {
        color: "#efefef",
        fontSize: 18,
        marginLeft: 10,
    },
    buttonContainer: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        flexDirection: 'row'
    }
});


export default styles;
