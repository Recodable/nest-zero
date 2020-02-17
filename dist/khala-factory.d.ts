import { KhalaApplication } from './khala-application';
interface KhalaApplicationOptions {
    logger: boolean;
}
export declare class KhalaFactoryStatic {
    create(module: any, options?: KhalaApplicationOptions): Promise<KhalaApplication>;
    private initialize;
}
export declare const KhalaFactory: KhalaFactoryStatic;
export {};
