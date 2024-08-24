import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
    container: {
        //flex: 1,
        width: "100%",
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 10
    },
    card: {
        //flex: 1,
        width: 300,
        height: 300,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 5, // Para Android
        shadowColor: '#000', // Para iOS
        shadowOffset: { width: 0, height: 2 }, // Para iOS
        shadowOpacity: 0.1, // Para iOS
        shadowRadius: 4, // Para iOS
        justifyContent: 'center',
        alignItems: 'center',   
        margin: "1%"     
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    cardContent: {
        fontSize: 16,
        color: '#666',
    },
    list: {
        paddingHorizontal: 16, // Para dar uma margem nas laterais
    },
});

export default Styles;

