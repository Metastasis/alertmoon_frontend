import {NotificationList} from './NotificationModel';

export type SearchParams = {
  page?: number
}

export type NotificationService = {
  data: NotificationList
  nextPage?: number
  search: (params?: SearchParams) => Promise<NotificationList>
}
