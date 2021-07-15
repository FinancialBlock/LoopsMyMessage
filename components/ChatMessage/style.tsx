import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'rgba(52, 52, 52, 0)',
    },
    messageBox: {
        borderRadius: 5,
        padding: 10,
        shadowOffset: { height: 1, width: 1 },
        shadowRadius: 1, //IOS
        backgroundColor: '#fff',
        elevation: 2,
        color: 'black',
        backfaceVisibility: 'visible',
    },
    name: {
        color: Colors.light.tint,
        fontWeight: "bold",
        marginBottom: 5,
    },
    message: {

    },
    time: {
        alignSelf: "flex-end",
        color: Colors.dark.tint,
    }
});

export default styles;
