import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from './routes/app.routes';
import RecordScreen from './pages/record';
import {useWatchAccounts} from './contexts/watchAccoutContext';
import WelcomeScreen from './pages/welcome';
import CreateWalletScreen from './pages/create_wallet';
import {useNavigation} from '@react-navigation/native';
import {Pressable} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import MnemonicScreen from './pages/mnemonic';
import BackupMnemonicsScreen from './pages/backup_mnemonics';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  const navigation = useNavigation();

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
        options={{
          // headerShown: false,
          title: '创建钱包',
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <ArrowStyledIcon name="arrow-left" />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="Mnemonic"
        component={MnemonicScreen}
        options={{
          // headerShown: false,
          title: '助记词',
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <ArrowStyledIcon name="arrow-left" />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="Backup"
        component={BackupMnemonicsScreen}
        options={{
          // headerShown: false,
          title: '备份助记词',
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <ArrowStyledIcon name="arrow-left" />
            </Pressable>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export const ArrowStyledIcon = styled(Icon)`
  align-self: center;
  font-size: 25px;
  color: #666666;
`;

export default Navigation;
