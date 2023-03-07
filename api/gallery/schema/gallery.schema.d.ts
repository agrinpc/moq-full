import * as mongoose from 'mongoose';
export declare const GallerySchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    title: string;
    url: string;
}>;
export interface GalleryInterface extends mongoose.Document {
    id: string;
    title: string;
    url: string;
}
export interface Gallery {
    id: string;
    title: string;
    url: string;
}
