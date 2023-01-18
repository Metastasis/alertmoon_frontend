type DateTimeISO = string;

export type NotificationModel = {
  title: string;
  content: string;
  createAt: DateTimeISO
}

export type NotificationList = NotificationModel[];
