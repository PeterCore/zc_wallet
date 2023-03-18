import React, {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type WatchAccountType = {
  watchAccouts: string[];
  storeWatchAccountId: (accountId: string) => void;
  removeWatchAccountId: (accountId: string) => void;
};

const WatchAccountContext = createContext<WatchAccountType | null>(null);

export const useWatchAccounts = () => useContext(WatchAccountContext);

const WatchAccountsProvider: React.FC<{
  children: React.ReactNode[] | React.ReactNode;
}> = props => {
  const [watchAccouts, setWatchAccounts] = useState<string[]>([]);

  const getAccounts = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@watch_accounts');
      setWatchAccounts(jsonValue != null ? JSON.parse(jsonValue) : []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAccounts();
  }, []);

  const storeWatchAccountId = async (accountId: string) => {
    try {
      const newAccountIds = [...watchAccouts, accountId];
      const jsonValue = JSON.stringify(newAccountIds);
      await AsyncStorage.setItem('@watch_accounts', jsonValue);
      setWatchAccounts(newAccountIds);
    } catch (error) {
      console.log(error);
    }
  };

  const removeWatchAccountId = async (accountId: string) => {
    try {
      const filterAccountIds = watchAccouts.filter(
        accountIdValue => accountIdValue !== accountId,
      );
      const jsonValue = JSON.stringify(filterAccountIds);
      await AsyncStorage.setItem('@watch_accounts', jsonValue);
      setWatchAccounts(filterAccountIds);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <WatchAccountContext.Provider
      value={{watchAccouts, storeWatchAccountId, removeWatchAccountId}}>
      {props.children}
    </WatchAccountContext.Provider>
  );
};

export default WatchAccountsProvider;
