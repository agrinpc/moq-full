/// <reference types="multer" />
export declare const saveImageStorage: {
    storage: import("multer").StorageEngine;
    fileFilter: (req: any, file: any, cb: any) => void;
};
export declare const removeFile: (fullPath: string) => void;
