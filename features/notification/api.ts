import axios from 'axios';
import {NotificationList} from './NotificationModel';
import {SearchParams} from './NotificationService';


export function searchNotifications(params: SearchParams = {}) {
  return axios.post<NotificationList>(`${process.env.ALERTMOON_API}/notification/search`, params, {withCredentials: true})
    .then(res => res.data.map(mapResponse));
}

function mapResponse(data: any) {
  const {_id, __v, ...rest} = data;
  return {
    ...rest,
    id: _id,
  };
}
