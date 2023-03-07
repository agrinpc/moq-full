import * as mongoose from 'mongoose';
import { Gallery } from 'src/gallery/schema/gallery.schema';
import { Label } from 'src/labels/schema/labels.schema';
export declare const NewsSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    title: string;
    text: string;
    desc: string;
    imgs: mongoose.Types.ObjectId[];
    labels: mongoose.Types.ObjectId[];
    headline: string;
    date?: string;
    thumb?: mongoose.Types.ObjectId;
}>;
export interface NewsInterface extends mongoose.Document {
    id: string;
    title: string;
    headline: string;
    text: string;
    desc: string;
    date?: string;
    thumb: Gallery;
    imgs: Gallery[];
    labels: Label[];
}
export interface News {
    id: string;
    title: string;
    headline: string;
    text: string;
    desc: string;
    date?: string;
    thumb: Gallery;
    imgs: Gallery[];
    labels: Label[];
}
