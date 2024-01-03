import { NotificationProps } from '../helpers/notification';
import { HttpStatus } from '../enums/http-status';

export const INTERNAL_SERVER_ERROR_MESSAGE =
  'Ocorreu uma falha no sistema. Por favor, entre em contacto com o suporte ou tente mais tarde.';

export const UNAUTHORIZED_MESSAGE =
  'Acesso não autorizado, verifique suas credenciais. Se você continuar a ter problemas, entre em contacto com o suporte ou tente mais tarde.';

export const JSON_WEB_TOKEN_ERROR_MESSAGE =
  'Token inválido. Se você continuar a ter problemas, entre em contacto com o suporte ou tente mais tarde.';

export function notFoundErrorMessage(entity: string) {
  return {
    message: `${entity} não existe.`,
    name: 'NotFound',
    code: HttpStatus.BAD_REQUEST,
  };
}

export function requiredPropertyErrorMessage(property: string) {
  return {
    message: `${property} obrigatório(a).`,
    name: 'Required',
    code: HttpStatus.BAD_REQUEST,
  };
}

export function deletedErrorMessage(entity: string) {
  return {
    message: `${entity} não existe.`,
    name: 'Deleted',
    code: HttpStatus.BAD_REQUEST,
  };
}

export function existErrorMessage(entity: string) {
  return {
    message: `${entity} já existe na base de dados.`,
    name: 'Exists',
    code: HttpStatus.BAD_REQUEST,
  };
}

export function validationErrorMessage(props: NotificationProps) {
  return {
    message: `${props.property}: ${props.message}`,
    name: 'ValidationError',
    code: HttpStatus.BAD_REQUEST,
  };
}

export function internalServerErrorMessage() {
  return {
    message: INTERNAL_SERVER_ERROR_MESSAGE,
    name: 'InternalServerError',
    code: HttpStatus.INTERNAL_SERVER_ERROR,
  };
}

export function unauthorizedErrorMessage() {
  return {
    message: UNAUTHORIZED_MESSAGE,
    name: 'Unauthorized',
    code: HttpStatus.UNAUTHORIZED,
  };
}

export function jwtErrorMessage() {
  return {
    message: JSON_WEB_TOKEN_ERROR_MESSAGE,
    name: 'JsonWebTokenError',
    code: HttpStatus.BAD_REQUEST,
  };
}
