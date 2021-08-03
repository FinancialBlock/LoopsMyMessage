import {Dimensions, StyleSheet} from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,

    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'column',
        margin: 20,
        alignSelf: 'flex-end',



    },
    button: {
        flex: 0.1,
        alignSelf: 'flex-start',
        alignItems: 'center',



    },
    text: {
        fontSize: 18,
        color: 'white',
        alignItems: 'flex-end',




    },
    bottomContainer: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'space-between',


        bottom: 30,


    },
    photoContainer: {


        backgroundColor: 'transparent',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },



})

export default styles;
