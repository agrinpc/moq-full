import * as mongoose from 'mongoose';
export declare const LabelSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    title: string;
}>;
export interface LabelInterface extends mongoose.Document {
    id: string;
    title: string;
}
export interface Label {
    id: string;
    title: string;
}
