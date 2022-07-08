import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
const AllExpenses = () => {
  return <ExpensesOutput expensesPeriod="Total" />
}

export default AllExpenses

const styles = StyleSheet.create({})