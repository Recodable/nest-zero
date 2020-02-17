import { SIGNATURE, DESCRIPTION, OPTIONS } from './constants';

export interface Option {
  flags: string;
  description: string;
}

export interface CommandOptions {
  signature: string;
  description?: string;
  options?: Option[];
}

export function Command(options: string | CommandOptions = '') {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    if (typeof options === 'string') {
      options = { signature: options };
    }
    Reflect.defineMetadata(SIGNATURE, options.signature, descriptor.value);
    Reflect.defineMetadata(DESCRIPTION, options.description, descriptor.value);
    Reflect.defineMetadata(OPTIONS, options.options, descriptor.value);
  };
}
