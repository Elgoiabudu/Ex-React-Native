import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
    container: {
        //flex: 1,
        //width: "100%",
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 5
    },
    card: {
        width: 350,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 5, // Para Android
        shadowColor: '#000', // Para iOS
        shadowOffset: { width: 0, height: 2 }, // Para iOS
        shadowOpacity: 0.1, // Para iOS
        shadowRadius: 4, // Para iOS
        justifyContent: 'center',
        alignItems: 'center',
        margin: "1%",
        padding: 10, // Padding interno do card
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
        width: '100%'    
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'cover', // Ajuste o resizeMode conforme necessário
    },
    input: {
        width: '100%', // Largura total do contêiner pai
        maxWidth: 300, // Largura máxima
        height: 50, // Altura do campo de texto
        paddingHorizontal: 15, // Espaçamento horizontal interno
        paddingVertical: 10, // Espaçamento vertical interno
        borderWidth: 1, // Largura da borda
        borderColor: '#ddd', // Cor da borda
        borderRadius: 5, // Borda arredondada
        backgroundColor: '#fff', // Cor de fundo
        fontSize: 16, // Tamanho da fonte
        color: '#333', // Cor do texto
    }
});

export default Styles;

