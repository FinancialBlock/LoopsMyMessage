import {Dimensions, StyleSheet} from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: "center",

        width: '100%',
        height: Dimensions.get('window').height - 80,
    },
    mainContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 25,
        marginRight: 10,
        flex: 1,
        alignItems: 'flex-end',
    },
    textInput: {
        flex: 1,
        marginHorizontal: 10
    },
    icon: {
        marginHorizontal: 5,
    },
    buttonContainer: {
        backgroundColor: Colors.light.tint,
        borderRadius: 25,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'black',
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
        padding: 5,
        top: -5,
    },
    userNames: {
        marginLeft: 10,


    },
    name: {
        color: "#efefef",
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5,
        top: 0,
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
    videPlayButton: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 100,
    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: '100%',
    },
    videopause: {
        justifyContent: 'center',
    },
    button: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        flexDirection: 'row',

    },
    loopsRight: {
        color: 'blue',
        alignItems: 'flex-end',

    },
    topContainer: {
        padding: 7,
        flexDirection: 'row',
        alignItems: 'flex-end',

    },
    bottomContainer: {
        padding: 5,
        flexDirection: 'row',
        flex: 3,
        position: 'absolute',
        bottom: 0,





    },
    iconContainer: {
        alignItems: "center",
        padding: 15,
        marginBottom: 80,
        justifyContent: 'flex-end',
        flex:3,

    },
    views: {
        alignItems: 'flex-end',
        alignSelf: 'center',
        color: 'white',
        alignItems: 'center',
        marginRight: 5,




    },
    statsLabel: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        marginTop: 5,
    },

    handle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 2,
    },
    description: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '300',
        marginBottom: 10,
    },
    songRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    songName: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 5,
    },

    songImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 5,
        borderColor: '#4c4c4c',
    },

    //  right container
    rightContainer: {

        flexDirection: 'row',
        height: 100,
        marginBottom: 100,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    profilePicture: {
        width: 70/1.3,
        height: 80/1.3,
        marginLeft: 5,
        marginTop: 5,
        borderRadius: 10,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#90ee90',
    },

    profiletop: {
        marginTop: 5,
        flexDirection: 'row',
    },
    cameraflip: {

    },
    videopause: {
        backgroundColor: 'blue',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(52, 52, 52, 0.2)'
    }
})

export default styles;
