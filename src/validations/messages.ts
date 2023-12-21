import { NotificationProps } from "../helpers/notification";

export const existsMessage = (
  property: string,
  value = "",
  message?: string
): NotificationProps => {
  const _value = `${value ? `(${value}) ` : ""}`;

  return {
    property,
    message: message ? message : `${_value} já existe.`,
  };
};

export const requiredMessage = (
  property: string,
  message?: string
): NotificationProps => {
  return {
    property,
    message: message ? message : "Campo Obrigatório.",
  };
};

export const betweenMessage = (
  property: string,
  min: number,
  max: number,
  message?: string
): NotificationProps => {
  return {
    property,
    message: message
      ? message
      : `O número de caracteres deve estar entre ${min} e ${max}.`,
  };
};

export const dateGreaterThenMessage = (
  property: string,
  message?: string
): NotificationProps => {
  return {
    property,
    message: message
      ? message
      : `A data de início não pode ser superior a data final.`,
  };
};

export const greaterThenMessage = (
  property: string,
  compare: number,
  message?: string
): NotificationProps => {
  return {
    property,
    message: message ? message : `Deve ser maior que ${compare}.`,
  };
};

export const greaterOrEqualThenMessage = (
  property: string,
  compare: number,
  message?: string
): NotificationProps => {
  return {
    property,
    message: message ? message : `Deve ser maior ou igual que ${compare}.`,
  };
};

export const lessThenMessage = (
  property: string,
  compare: number,
  message?: string
): NotificationProps => {
  return {
    property,
    message: message ? message : `Deve ser manor que ${compare}.`,
  };
};

export const lessOrEqualThenMessage = (
  property: string,
  compare: number,
  message?: string
): NotificationProps => {
  return {
    property,
    message: message ? message : `Deve ser manor ou igual que ${compare}.`,
  };
};

export const notIncludeEnumValidationMessage = (
  property: string,
  values: string,
  message?: string
): NotificationProps => {
  return {
    property,
    message: message
      ? message
      : `Valor inválido. Deve ser um dos seguintes valores: ${values}.`,
  };
};
