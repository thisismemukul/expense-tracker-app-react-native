import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RecentExpenses from '../screens/RecentExpenses';
import AllExpenses from '../screens/AllExpenses';


const BottomTabs = () => {
    const BottomTabs = createBottomTabNavigator();
  return (
    <BottomTabs.Navigator>
        <BottomTabs.Screen name="RecentExpenses" component={RecentExpenses} />
        <BottomTabs.Screen name="AllExpenses" component={AllExpenses} />
    </BottomTabs.Navigator>
  )
}

export default BottomTabs