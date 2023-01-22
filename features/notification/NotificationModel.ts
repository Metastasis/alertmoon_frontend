type DateTimeISO = string;

export type NotificationModel = {
  id: string;
  title: string;
  content: string;
  createdAt: DateTimeISO
}

export type NotificationList = NotificationModel[];
