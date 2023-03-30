import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/route';
import {RecoilRoot} from 'recoil';
import WatchAccountsProvider from './src/contexts/watchAccoutContext';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <NavigationContainer>
      <RecoilRoot>
        <WatchAccountsProvider>
          <Navigation />
        </WatchAccountsProvider>
      </RecoilRoot>
      <Toast />
    </NavigationContainer>
  );
};

export default App;
