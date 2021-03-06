
import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    headerText: {
        fontFamily: 'HelveticaNeue',
        color: 'black',
        opacity: .4,
        fontSize: 30,
        fontWeight:'bold',

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
});

export default styles;
