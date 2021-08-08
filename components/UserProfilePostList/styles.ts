
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    PostTitle: {
        fontWeight: "bold",
        fontSize: 40,
        color:'lightblue'
        ,

    },
    iconContainer: {
        alignItems: "center",
        padding: 15,
        marginBottom: 80,
        justifyContent: 'flex-end',
        flex:3,

    },
    button: {
        backgroundColor: '#ff4747',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        height: 50,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default styles;
