import { FlatList, StyleSheet,Text } from 'react-native'
import React from 'react'
import ExpenseItem from './ExpenseItem';

const renderExpenseItem = (itemData) => {
    return<ExpenseItem {...itemData.item}/>
};
const ExpensesList = ({expenses}) => {
  return <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item)=>item.id}/>
}

export default ExpensesList

const styles = StyleSheet.create({})