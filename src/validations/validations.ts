import { NotificationProps } from "../helpers/notification";
import {
  betweenMessage,
  dateGreaterThenMessage,
  greaterOrEqualThenMessage,
  greaterThenMessage,
  lessOrEqualThenMessage,
  lessThenMessage,
  notIncludeEnumValidationMessage,
  requiredMessage,
} from "./messages";

type ValueNotEmpty = string | null | undefined;

export function notEmptyValidation(
  value: ValueNotEmpty,
  property: string,
  message?: string
): NotificationProps {
  if (!value?.trim()) {
    return requiredMessage(property, message);
  }

  return {} as NotificationProps;
}

export function betweenLengthValidation(
  value: string,
  min: number,
  max: number,
  property: string,
  message?: string
): NotificationProps {
  if (value?.length < min && value?.length > max) {
    return betweenMessage(property, min, max, message);
  }

  return {} as NotificationProps;
}

export function numberGreaterThanValidation(
  value: number,
  compare: number,
  property: string,
  message?: string
): NotificationProps {
  if (value <= compare) {
    return greaterThenMessage(property, compare, message);
  }

  return {} as NotificationProps;
}

export function numberGreaterOrEqualThanValidation(
  value: number,
  compare: number,
  property: string,
  message?: string
): NotificationProps {
  if (value < compare) {
    return greaterOrEqualThenMessage(property, compare, message);
  }

  return {} as NotificationProps;
}

export function numberLessThanValidation(
  value: number,
  compare: number,
  property: string,
  message?: string
): NotificationProps {
  if (value >= compare) {
    return lessThenMessage(property, compare, message);
  }

  return {} as NotificationProps;
}

export function numberLessOrEqualThanValidation(
  value: number,
  compare: number,
  property: string,
  message?: string
): NotificationProps {
  if (value > compare) {
    return lessOrEqualThenMessage(property, compare, message);
  }

  return {} as NotificationProps;
}

export function dateNotGreaterThenValidation(
  start: Date,
  end: Date,
  property: string,
  message?: string
): NotificationProps {
  if (start > end) {
    return dateGreaterThenMessage(property, message);
  }

  return {} as NotificationProps;
}

export function notIncludeEnumValidation(
  obj: object,
  value: string,
  property: string,
  message?: string
): NotificationProps {
  const keys = Object.keys(obj);
  if (!keys.includes(value))
    return notIncludeEnumValidationMessage(property, keys.join(", "), message);

  return {} as NotificationProps;
}
