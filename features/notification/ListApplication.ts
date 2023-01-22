import {NotificationService} from './NotificationService';


type Deps = {notificationService: NotificationService};

/*
* Search Notification Use Case
* search notifications
* if request failed display an error

* NotificationService -> find notifications and save them in memory
* NotificationService -> check for status and display either an error or a list
* */

export const useNotificationsList = ({notificationService}: Deps) => {
  return {
    list: notificationService.data,
    search: notificationService.search,
    nextPage: notificationService.nextPage
  };
}
