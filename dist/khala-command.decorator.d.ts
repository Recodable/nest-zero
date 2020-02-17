export interface Option {
    flags: string;
    description: string;
}
export interface CommandOptions {
    signature: string;
    description?: string;
    options?: Option[];
}
export declare function Command(options?: string | CommandOptions): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
