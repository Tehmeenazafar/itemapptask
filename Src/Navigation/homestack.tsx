import React, { FC } from 'react'
import { HomePage,DetailPage,AddEditPage,Login} from '../Screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const HomeStack: React.FC = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Biometric Login' }}
        />
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: 'Home Page' }}
        />
         <Stack.Screen
          name="detail"
          component={DetailPage}
          options={{ title: 'Detail Page' }}
        />
         <Stack.Screen
          name="editupdate"
          component={AddEditPage}
          options={{ title: 'Add' }}
        />
      </Stack.Navigator>
    )
}



export default HomeStack;