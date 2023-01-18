import {NotificationService} from './NotificationService';
import {NotificationList} from './NotificationModel';


type FindNotifications = (dependencies: {notificationService: NotificationService}) => Promise<NotificationList>;

/*
* Search Notification Use Case
* search notifications
* if request failed display an error

* NotificationService -> find notifications and save them in memory
* NotificationService -> check for status and display either an error or a list
* */

// TODO: Where it is supposed to go?
export const findNotifications: FindNotifications = ({notificationService}) => {
  return notificationService.search();
}
