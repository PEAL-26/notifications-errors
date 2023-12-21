export interface NotificationProps {
  property: string;
  message: string;
}

export class Notification {
  private _notifications: NotificationProps[] = [];

  public addNotifications(
    props: NotificationProps | NotificationProps[],
    ...rest: Notification[]
  ) {
    if (Array.isArray(props)) {
      props
        .filter((pred) => !this.isEmpty(pred))
        .forEach((notification: NotificationProps) => {
          this._notifications.push(notification);
        });
    } else {
      if (!this.isEmpty(props)) this._notifications.push(props);
    }

    rest.forEach((notification) => {
      if (!this.isEmpty(notification))
        notification.notifications.map((not) => this._notifications.push(not));
    });
  }

  public get isValid() {
    return this._notifications.length === 0;
  }

  public clearNotifications() {
    this._notifications = [];
  }

  public get notifications() {
    return this._notifications;
  }

  private isEmpty(obj: object) {
    return Object.keys(obj).length === 0;
  }
}
