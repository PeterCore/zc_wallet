import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from './routes/app.routes';
import RecordScreen from './pages/record';
import {useWatchAccounts} from './contexts/watchAccoutContext';
import WelcomeScreen from './pages/welcome';
import CreateWalletScreen from './pages/create_wallet';
const Stack = createNativeStackNavigator();
const Navigation = () => {
  const {...watchType} = useWatchAccounts();
  return (
    <Stack.Navigator /*screenOptions={{presentation: 'transparentModal'}}*/>
      {watchType.watchAccouts.length === 0 ? (
        <Stack.Screen
          name="create"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
      ) : null}
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Record"
        component={RecordScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Create"
        component={CreateWalletScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
