import { StyleSheet, Text, View, Alert } from 'react-native'
import React, { useState } from 'react';
import Input from './Input';
import Button from '../UI/Button';
import { GlobalStyles } from '../../constants/styles';
import { getFormattedDate } from '../../util/date';
function ExpenseForm({ submitButtonLabel, onCancel, onSubmit, defaultValues }) {
    const [inputValues, setInputValues] = useState({
        amount: {
            value: defaultValues ? defaultValues.amount.toString() : '',
            isValid: true,
        },
        date: {
            value: defaultValues ? getFormattedDate(defaultValues.date) : '',
            isValid: true,
        },
        description: {
            value: defaultValues ? defaultValues.description : '',
            isValid: true,
        },
    });

    function inputChangedHandler(inputIdentifier, enteredValue) {
        setInputValues((curInputs) => {
            return {
                ...curInputs,
                [inputIdentifier]: { value: enteredValue, isValid: true },
            };
        });
    }

    function submitHandler() {
        const expenseData = {
            amount: +inputValues.amount.value,
            date: new Date(inputValues.date.value),
            description: inputValues.description.value,
        };

        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
        const descriptionIsValid = expenseData.description.trim().length > 0;

        if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
            // Alert.alert('Invalid input', 'Please check your input values');
            setInputValues((curInputs) => {
                return {
                    amount: { value: curInputs.amount.value, isValid: amountIsValid },
                    date: { value: curInputs.date.value, isValid: dateIsValid },
                    description: {
                        value: curInputs.description.value,
                        isValid: descriptionIsValid,
                    },
                };
            });
            return;
        }

        onSubmit(expenseData);
    }

    const formIsInvalid =
        !inputValues.amount.isValid ||
        !inputValues.date.isValid ||
        !inputValues.description.isValid;
    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expenses</Text>
            <View style={styles.inputRow}>
                <Input label="Amount" textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: inputChangedHandler.bind(this, 'amount'),
                    value: inputValues.amount.value,
                }}
                    invalid={!inputValues.amount.isValid}
                    style={styles.rowInput} />
                <Input label="Date" textInputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    maxLength: 10,
                    onChangeText: inputChangedHandler.bind(this, 'date'),
                    value: inputValues.date.value,
                }}
                    invalid={!inputValues.date.isValid}
                    style={styles.rowInput} />
            </View>
            <Input label="Description" textInputConfig={{
                multiline: true,
                onChangeText: inputChangedHandler.bind(this, 'description'),
                value: inputValues.description.value,
                // autoCapitalie:'none',
                // autoCorrect:false
            }}
                invalid={!inputValues.description.isValid}
            />
            {formIsInvalid && (
                <Text style={styles.errorText}>
                    Invalid input values - please check your entered data!
                </Text>
            )}
            <View style={styles.buttons}>
                <Button style={styles.button} mode="flat" onPress={onCancel}>Cancel</Button>
                <Button style={styles.button} onPress={submitHandler}>{submitButtonLabel}</Button>
            </View>
        </View>
    )
}

export default ExpenseForm

const styles = StyleSheet.create({
    form: {
        marginTop: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: GlobalStyles.COLORS.dark,
        marginVertical: 24,
        textAlign: 'center',
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rowInput: {
        flex: 1,
    },
    errorText: {
        textAlign: 'center',
        color: GlobalStyles.COLORS.error,
        margin: 8,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    },
})