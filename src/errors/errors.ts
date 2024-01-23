import { HttpStatus } from '@/enums/http-status';
import { NotificationProps } from '../helpers/notification';
// import {
//   HttpException,
//   HttpStatus,
//   UnauthorizedException,
// } from '@nestjs/common';
// import { JsonWebTokenError } from '@nestjs/jwt';
import {
  JSON_WEB_TOKEN_ERROR_MESSAGE,
  UNAUTHORIZED_MESSAGE,
  deletedErrorMessage,
  existErrorMessage,
  internalServerErrorMessage,
  notActiveErrorMessage,
  notFoundErrorMessage,
  requiredPropertyErrorMessage,
  validationErrorMessage,
} from './messages';

export type NotificationErrorTypeNames =
  | 'NotFound'
  | 'Required'
  | 'Deleted'
  | 'Exists'
  | 'ValidationError'
  | 'JsonWebTokenError'
  | 'JsonWebTokenError'
  | string;

export interface NotificationErrorProps {
  message: string;
  name: NotificationErrorTypeNames;
  code: HttpStatus;
  stack?: string;
}

abstract class ErrorCustom extends Error {
  public errors: NotificationErrorProps[] = [];
}

export class NotificationError extends ErrorCustom {
  constructor(errors?: NotificationErrorProps | NotificationErrorProps[]) {
    super();

    if (errors) {
      Array.isArray(errors)
        ? errors.map((error) => this.errors.push(error))
        : this.errors.push(errors);
    }
  }

  addError(props: NotificationErrorProps) {
    this.errors.push(props);
  }

  addErrors(props: NotificationErrorProps[]) {
    this.errors.push(...props);
  }

  public get haveError() {
    return this.errors.length > 0;
  }
}

export class NotFoundError extends ErrorCustom {
  constructor(entity = '') {
    super();
    this.errors.push(notFoundErrorMessage(entity));
  }
}

export class RequiredPropertyError extends ErrorCustom {
  constructor(property = '') {
    super();
    this.errors.push(requiredPropertyErrorMessage(property));
  }
}

export class DeletedError extends ErrorCustom {
  constructor(entity = '') {
    super();
    this.errors.push(deletedErrorMessage(entity));
  }
}

export class NotActiveError extends ErrorCustom {
  constructor(entity = '') {
    super();
    this.errors.push(notActiveErrorMessage(entity));
  }
}

export class ExistError extends ErrorCustom {
  constructor(entity = '') {
    super();
    this.errors.push(existErrorMessage(entity));
  }
}

export class ValidationError extends ErrorCustom {
  constructor(
    notifications: NotificationProps | NotificationProps[],
    ...rest: NotificationProps[]
  ) {
    super();
    if (Array.isArray(notifications)) {
      notifications.forEach((notification) => {
        this.errors.push(validationErrorMessage(notification));
      });
    }

    rest.forEach((notification) => {
      this.errors.push(validationErrorMessage(notification));
    });
  }
}
