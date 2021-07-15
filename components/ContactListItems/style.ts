import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
        padding: 10,
        alignSelf: 'flex-start',
    },
    lefContainer: {
        flexDirection: 'row',

    },
    midContainer: {
        justifyContent: 'space-around'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 10,
        marginRight: 15,
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    status: {
        fontSize: 16,
        color: 'grey',
        width: 220,
    },
    time: {
        fontSize: 14,
        color: 'grey',
        justifyContent: 'flex-end',
    },
});

export default styles;
