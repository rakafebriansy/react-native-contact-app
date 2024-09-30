import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, CreateContactScreen } from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: true }}/>
            <Stack.Screen name="Create Contact" component={CreateContactScreen} options={{ headerShown: true }}/>
        </Stack.Navigator>
    )
}

export default Router;