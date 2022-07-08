import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { GlobalStyles } from '../../constants/styles';

const ExpensesSummary = ({ expenses, periodName }) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  },0);
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>Rs. {expensesSum.toFixed(2)}</Text>
    </View>
  )
}

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: GlobalStyles.COLORS.secondary,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
},
period:{
  fontSize: 18,
  color:GlobalStyles.COLORS.dark,
},
sum:{
  fontSize: 18,
  fontWeight:'bold',
  color:GlobalStyles.COLORS.dark,
}
});