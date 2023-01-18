import axios from 'axios';
import {NotificationList} from './NotificationModel';


export function searchNotifications() {
  return axios.post<NotificationList>('/api/v1/notification/search').then(res => res.data);
}
