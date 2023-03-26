import React, {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type WatchContextType = {
  watchlistCoinIds: string[];
  storeWatchlistCoinId: (coinId: string) => void;
  removeWatchlistCoinId: (coinId: string) => void;
};

const WatchlistContext = createContext<WatchContextType | null>(null);

export const useWatchlist = () => useContext(WatchlistContext);

const WatchlistProvider: React.FC<React.ReactNode> = (
  children: React.ReactNode,
) => {
  const [watchlistCoinIds, setWatchlistCoinIds] = useState<string[]>([]);

  const getWatchlistData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@watchlist_coins');
      setWatchlistCoinIds(jsonValue != null ? JSON.parse(jsonValue) : []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWatchlistData();
  }, []);

  const storeWatchlistCoinId = async (coinId: string) => {
    try {
      const newWatchlist = [...watchlistCoinIds, coinId];
      const jsonValue = JSON.stringify(newWatchlist);
      await AsyncStorage.setItem('@watchlist_coins', jsonValue);
    } catch (error) {
      console.log(error);
    }
  };

  const removeWatchlistCoinId = async (coinId: string) => {
    const newWatchlist = watchlistCoinIds.filter(
      coinIdValue => coinIdValue !== coinId,
    );
    const jsonValue = JSON.stringify(newWatchlist);
    await AsyncStorage.setItem('@watchlist_coins', jsonValue);
    setWatchlistCoinIds(newWatchlist);
  };

  return (
    <WatchlistContext.Provider
      value={{watchlistCoinIds, storeWatchlistCoinId, removeWatchlistCoinId}}
    >
      {children}
    </WatchlistContext.Provider>
  );
};

export default WatchlistProvider;
