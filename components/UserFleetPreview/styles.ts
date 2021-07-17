import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',



    },
    text: {
        fontFamily: 'HelveticaNeue',
        color: 'black',
    },
    image: {
        width: 70,
        height: 80,
        marginTop: 10,
        borderRadius: 30,
        padding: 15,
        borderWidth: 3,
        borderColor: '#449bd4',

    },
    username: {
        marginTop: 5,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#606060'

    }

});

export default styles;
