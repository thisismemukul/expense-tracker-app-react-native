import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react';
import Input from './Input';
import { GlobalStyles } from '../../constants/styles';
const ExpenseForm = () => {
    const [inputValues, setInputValues] = useState({
        amount:'',
        date:'',
        description:''
    });
    const inputChangeHandler = (inputIdentifier,enteredValue) => {
        setInputValues((curInputValues)=>{
            return {
                ...curInputValues,
                [inputIdentifier]:enteredValue
            }
        });
    };
    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expenses</Text>
            <View style={styles.inputRow}>
                <Input label="Amount" textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: inputChangeHandler.bind(this,'amount'),
                    value:inputValues.amount,
                }} 
                style={styles.rowInput}/>
                <Input label="Date" textInputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    maxLength: 10,
                    onChangeText: inputChangeHandler.bind(this,'date'),
                    value:inputValues.date,
                }} 
                style={styles.rowInput}/>
            </View>
            <Input label="Description" textInputConfig={{
                multiline: true,
                onChangeText: inputChangeHandler.bind(this,'description'),
                value:inputValues.description,
                // autoCapitalie:'none',
                // autoCorrect:false
            }} />
        </View>
    )
}

export default ExpenseForm

const styles = StyleSheet.create({
    form:{
        marginTop: 40,
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: GlobalStyles.COLORS.dark,
        marginVertical: 24,
        textAlign: 'center',
    },
    inputRow:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    rowInput:{
        flex:1,
    }
})