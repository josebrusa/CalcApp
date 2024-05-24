import { StyleSheet } from "react-native"



export const colors = {

    background: '#000000',
    darkGray: '#2d2d2d',
    lightGray: '#9b9b9b',
    orange: '#ff9427',
    textPrimary: 'white',
    textSecondary: '#666666',
}

export const styles = StyleSheet.create({

    background: {
        backgroundColor: colors.background,
        flex: 1,
    },

    calculatorContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
    },

    mainResult: {
        color: colors.textPrimary,
        fontSize: 70,
        fontWeight: '300',
        marginBottom: 10,
        textAlign: 'right',
    },

    subResult: {
        color: colors.textSecondary,
        fontSize: 50,
        fontWeight: '300',
        marginBottom: 10,
        textAlign: 'right',
    },

    button: {
        backgroundColor: colors.darkGray,
        borderRadius: 100,
        height: 80,
        justifyContent: 'center',
        marginHorizontal: 10,
        width: 80,
    },

    buttonText: {
        color: 'white',
        fontSize: 30,
        fontWeight: '300',
        padding: 10,
        textAlign: 'center',
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
        paddingHorizontal: 10,
    }
})