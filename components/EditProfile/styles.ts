import { StyleSheet } from 'react-native';
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',

    },
    rowContainer: {
        flexDirection: "row",
        alignItems: "center",






    },
    editimage: {
        width: 105,
        height: 120,
        marginTop: 20,
        borderRadius: 30,
        padding: 15,
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#449bd4',
        alignSelf: 'center',

    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        flexDirection: "column",
        height: 60,
    },
    leftContainer: {
        flexDirection: "column",

        padding: 10,


    },
    editContainer: {
        fontWeight: 'bold',
        fontSize: 20,
        flexDirection: "column",
        height: 60,


    }

})

export default styles;
