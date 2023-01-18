import {NotificationList} from './NotificationModel';


export type SearchRequest = {
  pageStatus: 'success'
  data: NotificationList
  nextPage?: number
} | {
  pageStatus: 'error'
  data?: NotificationList
  nextPage?: void
} | {
  pageStatus: 'loading'
  data: NotificationList
  nextPage?: number
} | {
  pageStatus: 'not_requested'
  data: []
  nextPage?: number
}

export type SearchParams = {
  page: number
}

export type NotificationService = {
  data: NotificationList
  nextPage?: number
  search: (params?: SearchParams) => Promise<NotificationList>
  saveResult: (data: NotificationList) => void
  searchStatus: SearchRequest['pageStatus']
  setSearchStatus: (status: SearchRequest['pageStatus']) => void
}

