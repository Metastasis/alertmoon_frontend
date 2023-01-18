import {useNotifications} from './adapter';


export default function PageList() {
  const notifications = useNotifications();
  return (
    <div>
      <ul>
        {notifications.data.map((notification) => (
          <li key={notification.title}>
            {notification.title} ({notification.createAt}) — {notification.content}
          </li>
        ))}
      </ul>
      {notifications.searchStatus === 'error' && 'Произошла ошибка. Попробуй позже'}
      {notifications.searchStatus === 'loading' && 'Загружаем список'}
    </div>
  )
}
