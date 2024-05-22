import { StyleSheet } from "react-native"



export const colors = {
    darkGray: '#2d2d2d',
    lightGray: '#9b9b9b',
    orange: '#ff9427',

    textPrimary: 'white',
    textSecondary: '#666666',
    background: '#000000'
}

export const styles = StyleSheet.create({

    background: {
        flex: 1,
        backgroundColor: colors.background
    },

    calculatorContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end'
    },

    mainResult: {
        color: colors.textPrimary,
        fontSize: 70,
        textAlign: 'right',
        marginBottom: 10,
        fontWeight: '300'
    },

    subResult: {
        color: colors.textSecondary,
        fontSize: 50,
        textAlign: 'right',
        marginBottom: 10,
        fontWeight: '300'
    }
})