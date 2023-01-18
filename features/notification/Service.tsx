import React from 'react';
import {NotificationService} from './NotificationService';
import {searchNotifications} from './api';

const StoreContext = React.createContext<NotificationService>({
    data: [],
    search: () => Promise.resolve([]),
    saveResult: (data) => {},
    setSearchStatus: (data) => {},
    nextPage: undefined,
    searchStatus: 'not_requested'
  }
);

export const useNotificationService = () => React.useContext(StoreContext);

export const NotificationProvider: React.FC = ({ children }) => {
  const [data, setData] = React.useState<NotificationService['data']>([]);
  const [nextPage, setNextPage] = React.useState<NotificationService['nextPage']>(undefined);
  const [searchStatus, setSearchStatus] = React.useState<NotificationService['searchStatus']>('not_requested');

  const value: NotificationService = {
    data,
    searchStatus,
    search: async () => {
      const result = await searchNotifications();
      return result;
    },
    saveResult: (newData) => setData(data.concat(newData)),
    setSearchStatus,
    nextPage
  };

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  );
};
