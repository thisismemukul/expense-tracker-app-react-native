import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import RecentExpenses from '../screens/RecentExpenses';
import AllExpenses from '../screens/AllExpenses';
import { GlobalStyles } from '../constants/styles';


const BottomTabs = () => {
    const BottomTabs = createBottomTabNavigator();
    return (
        <BottomTabs.Navigator 
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                let rn = route.name;
                if (rn == 'RecentExpenses') {
                    iconName = focused ? 'hourglass' : 'hourglass-outline';
                } else if (rn == 'AllExpenses') {
                    iconName = focused ? 'wallet' : 'wallet-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            headerStyle: { backgroundColor: GlobalStyles.COLORS.primary },
            headerTintColor: GlobalStyles.COLORS.white,
            tabBarStyle: {
                backgroundColor: GlobalStyles.COLORS.background,
                height: 60,
                elivation: 0,
                borderTopWidth: 0,
                paddingBottom: 10,
                borderTopColor: "transparent",
                position: "absolute",
                bottom: 16,
                right: 16,
                left: 16,
                borderRadius: 16,
                alignContent: 'center',
            },
            tabBarActiveTintColor: GlobalStyles.COLORS.icons,
        })}>
           
            <BottomTabs.Screen name="AllExpenses" component={AllExpenses} 
                options={{
                    title: 'All Expenses',
    
                }} />
                 <BottomTabs.Screen name="RecentExpenses" component={RecentExpenses}
            options={{
                title: 'Recent Expenses',

            }} />
        </BottomTabs.Navigator>
    )
}

export default BottomTabs