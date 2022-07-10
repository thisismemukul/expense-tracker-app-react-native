import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../constants/styles'
const Input = ({ label,style, textInputConfig }) => {
    const inputStyles = [styles.input];
    if (textInputConfig && textInputConfig.multiline) {
      inputStyles.push(styles.inputMultiline);
    }
    return (
        <View style={[styles.inputContainer,style]}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={inputStyles} {...textInputConfig} />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 9,
    },
    label: {
        fontSize: 12,
        color: GlobalStyles.COLORS.dark,
        marginBottom: 4,
    },
    input: {
        backgroundColor: GlobalStyles.COLORS.secondary,
        color: GlobalStyles.COLORS.dark,
        padding: 6,
        borderRadius: 6,
        fontSize: 18
    },
    inputMultiline: {
        minHeight: 140,
        textAlignVertical: 'top',
    }
});