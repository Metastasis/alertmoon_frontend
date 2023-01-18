import {useEffect} from 'react';
import useSWR from 'swr';
import {useNotificationService} from './Service';


export function useNotifications() {
  const notificationService = useNotificationService();
  const request = useSWR(
    'notifications',
    () => notificationService.search()
  );
  useEffect(() => {
    if (request.error) {
      notificationService.setSearchStatus('error');
    } else if (request.data && !request.error) {
      notificationService.setSearchStatus('success');
      notificationService.saveResult(request.data);
    } else {
      notificationService.setSearchStatus('loading');
    }
  }, [notificationService, request]);
  return notificationService;
}
