
import {Dimensions, StyleSheet} from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({

    container: {
        width: 100,
        height: 150,
        marginRight: 8,


    },
    statsLabel: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        marginTop: 5,
    },
    headerText: {
        fontFamily: 'HelveticaNeue',
        color: 'black',
        opacity: .4,
        fontSize: 30,
        fontWeight:'bold',

    },
    iconContainer: {
        alignItems: "center",
        padding: 15,
        marginBottom: 80,
        justifyContent: 'flex-end',
        flex:3,

    },
    postIcons: {
        flexDirection: 'row',
        width:100,
        height: 160,
        marginRight: 10,
        marginLeft:2,
        borderColor: 'white',
        borderRadius: 13,
        marginBottom: 10,
        padding: 10,


    },


    showAll: {
        alignContent: "center",
        alignSelf: "center",
        padding: 6,
        borderWidth: 1,
        marginTop: 5,
        borderRadius: 14,
        borderTopColor: 'red',

    },
    titleBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 24,
        marginHorizontal: 16,
    },
    subText: {
        fontSize: 12,
        color: '#AEB5BC',
        textTransform: 'uppercase',
        fontWeight: '500',
    },
    heartIcon: {
        alignSelf: "flex-end",
        position: "absolute",
        right: 0,






    },
    profileImage: {
        width: 105,
        height: 120,
        marginTop: 10,
        borderRadius: 30,
        padding: 15,
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#449bd4',



    },
    dm: {
        backgroundColor: '#41444B',
        position: 'absolute',
        top: 20,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    active: {
        backgroundColor: '#34FFB9',
        position: 'absolute',
        bottom: 28,
        left: 10,
        padding: 4,
        height: 20,
        width: 20,
        borderRadius: 10,
    },
    add: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 16,
    },
    statsContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 32,
    },
    statsBox: {
        alignItems: 'center',
        flex: 1,
    },
    mediaImageContainer: {
        width: 180,
        height: 200,
        borderRadius: 12,
        overflow: 'hidden',
        marginHorizontal: 10,
    },
    mediaCount: {
        backgroundColor: '#41444B',
        position: 'absolute',
        top: '50%',
        marginTop: -50,
        marginLeft: 30,
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        shadowColor: 'rgba(0, 0, 0, 0.38)',
        shadowOffset: {width: 0, height: 10},
        shadowRadius: 20,
        shadowOpacity: 1,
    },
    recent: {
        marginLeft: 78,
        marginTop: 32,
        marginBottom: 6,
        fontSize: 10,
    },
    recentItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 16,
    },
    activityIndicator: {
        backgroundColor: '#CABFAB',
        padding: 4,
        height: 12,
        width: 12,
        borderRadius: 6,
        marginTop: 3,
        marginRight: 20,
    },
    iconloop: {
        flexDirection: 'row',
    },
    userBtnWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 2,
        marginTop: 10,
    },
    userBtn: {
        borderColor: '#2e64e5',
        borderWidth: 2,
        borderRadius: 3,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginHorizontal: 5,
    },
    userBtnTxt: {
        color: '#2e64e5',
    },
    background: {
        width: '100%',

        height: 200,

        overflow: 'hidden',
        position: 'absolute',

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
        width: 100,
        height: 150,
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
        marginLeft: 10,
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
        width: 100,
        height: 150,


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
        color: 'white',
        fontWeight: 'bold',





    },
    views: {
        alignItems: 'flex-end',
        alignSelf: 'center',
        color: 'white',
        marginRight: 5,




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
        width: 100,
        height: 150,
        position: "absolute",
        backgroundColor: 'rgba(52, 52, 52, 0.2)'
    }
});

export default styles;
