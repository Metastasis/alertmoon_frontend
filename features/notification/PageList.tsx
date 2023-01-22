import useSWR from 'swr';
import {useNotifications} from './NotificationAdapter';
import {useNotificationsList} from './ListApplication';

export default function PageList() {
  const notifications = useNotifications();
  const list = useNotificationsList({notificationService: notifications});
  const result = useSWR('notification.PageList', () => list.search());
  // TODO: состояние загрузки и ошибки это часть юзкейса в моем видении, но оно во вьюхе
  // Куда его деть?
  // И почему useNotificationList такой пустой?
  // Не должно ли там быть управления статусом как строкой?
  return (
    <div>
      <ul>
        {list.list.map((notification) => (
          <li key={notification.id}>
            {notification.title} ({notification.createdAt}) — {notification.content}
          </li>
        ))}
      </ul>
      {result.error && 'Произошла ошибка. Попробуй позже'}
      {!result.data && !result.error && 'Загружаем список'}
    </div>
  )
}
