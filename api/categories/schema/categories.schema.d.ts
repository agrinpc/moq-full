import * as mongoose from 'mongoose';
export declare const CategorySchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    title: string;
    text: string;
}>;
export interface CategoryInterface extends mongoose.Document {
    id: string;
    title: string;
    text: string;
}
export interface Category {
    id: string;
    title: string;
    text: string;
}
