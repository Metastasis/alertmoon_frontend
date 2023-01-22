import {useState, createContext, useContext, useMemo, ReactElement} from 'react';
import {NotificationService, SearchParams} from './NotificationService';
import {searchNotifications} from './api';

const StoreContext = createContext<any>({
  data: [],
  nextPage: undefined,
  search: () => ([])
});

export const useNotifications = (): NotificationService => {
  return useContext(StoreContext);
};

export function Provider(props: {children: ReactElement}) {
  const {children} = props;
  const [data, setData] = useState<NotificationService['data']>([]);
  const [nextPage, setNextPage] = useState<NotificationService['nextPage']>(undefined);
  const service = useMemo(() => ({
    data,
    nextPage,
    search: async (params: SearchParams) => {
      try {
        const data = await searchNotifications(params);
        setData(data);
        setNextPage(undefined);
        return data;
      } catch (e) {
        console.error(e);
        return [];
      }
    }
  }), [data, nextPage]);
  return (
    <StoreContext.Provider value={service}>
      {children}
    </StoreContext.Provider>
  );
}
