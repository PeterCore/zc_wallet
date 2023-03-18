import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/route';
import {RecoilRoot} from 'recoil';
import WatchAccountsProvider from './src/contexts/watchAccoutContext';

const App = () => {
  return (
    <NavigationContainer>
      <RecoilRoot>
        <WatchAccountsProvider>
          <Navigation />
        </WatchAccountsProvider>
      </RecoilRoot>
    </NavigationContainer>
  );
};

export default App;
