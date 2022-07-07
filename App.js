import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabs from './navigation/BottomTabs';
import ManageExpense from './screens/ManageExpense';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="BottomTabs" 
            component={BottomTabs}
            options={{
              headerShown: false
            }}
            />
          <Stack.Screen name="ManageExpense" component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App
