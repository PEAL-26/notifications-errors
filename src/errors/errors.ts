import { NotificationProps } from "../helpers/notification";
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
  notFoundErrorMessage,
  requiredPropertyErrorMessage,
  validationErrorMessage,
} from "./messages";

export type NotificationErrorTypeNames =
  | "NotFound"
  | "Required"
  | "Deleted"
  | "Exists"
  | "ValidationError"
  | "JsonWebTokenError"
  | "JsonWebTokenError";

export interface NotificationErrorProps {
  message: string;
  name: string | NotificationErrorTypeNames;
  code: number;
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
  constructor(entity = "") {
    super();
    this.errors.push(notFoundErrorMessage(entity));
  }
}

export class RequiredPropertyError extends ErrorCustom {
  constructor(property = "") {
    super();
    this.errors.push(requiredPropertyErrorMessage(property));
  }
}

export class DeletedError extends ErrorCustom {
  constructor(entity = "") {
    super();
    this.errors.push(deletedErrorMessage(entity));
  }
}

export class ExistError extends ErrorCustom {
  constructor(entity = "") {
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

// export class InternalServerError extends HttpException {
//   constructor() {
//     super(
//       {
//         erros: [internalServerErrorMessage()],
//       },
//       HttpStatus.INTERNAL_SERVER_ERROR,
//     );
//   }
// }

// export function VerifyError(error: any) {
//   console.log(error);
//   if (error?.errors) {
//     throw new HttpException({ errors: error.errors }, HttpStatus.BAD_REQUEST);
//   }

//   if (error instanceof JsonWebTokenError) {
//     const errors: NotificationErrorProps[] = [
//       {
//         message: JSON_WEB_TOKEN_ERROR_MESSAGE,
//         name: 'JsonWebTokenError',
//         code: HttpStatus.BAD_REQUEST,
//       },
//     ];
//     throw new HttpException({ errors }, HttpStatus.BAD_REQUEST);
//   }

//   if (error instanceof UnauthorizedException) {
//     const errors: NotificationErrorProps[] = [
//       {
//         message: UNAUTHORIZED_MESSAGE,
//         name: 'Unauthorized',
//         code: HttpStatus.UNAUTHORIZED,
//       },
//     ];
//     throw new HttpException({ errors }, HttpStatus.UNAUTHORIZED);
//   }

//   throw new InternalServerError();
// }
