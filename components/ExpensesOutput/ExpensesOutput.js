import { StyleSheet, View } from 'react-native'
import React from 'react'
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { GlobalStyles } from '../../constants/styles';

const DUMMY_EXPENSES = [
    {
        id: 1,
        description: 'A Pair Of shoes',
        amount: 95.50,
        date: new Date( '2020-01-01')
    },
    {
        id: 2,
        description: 'Coffee',
        amount: 2.50,
        date: new Date( '2020-01-02')
    },
    {
        id: 3,
        description: 'Restaurant',
        amount: 10.80,
        date: new Date( '2020-01-03')
    },
    {
        id: 4,
        description: 'Gas',
        amount: 3.20,
        date: new Date( '2020-01-04')
    },
    {
        id: 5,
        description: 'Lunch',
        amount: 12.50,
        date: new Date( '2020-01-05')
    },
    {
        id: 6,
        description: 'Dinner',
        amount: 25.00,
        date: new Date( '2020-01-06')
    },
    {
        id: 7,
        description: 'Dessert',
        amount: 5.00,
        date: new Date( '2020-01-07')
    }
];
const ExpensesOutput = ({ expenses,expensesPeriod }) => {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
            <ExpensesList expenses={DUMMY_EXPENSES} />
        </View>
    )
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,   
        backgroundColor: GlobalStyles.COLORS.primary,
},
});