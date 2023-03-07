import * as mongoose from 'mongoose';
import { Category } from 'src/categories/schema/categories.schema';
import { Gallery } from 'src/gallery/schema/gallery.schema';
import { Label } from 'src/labels/schema/labels.schema';
export declare const ArticleSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    title: string;
    text: string;
    desc: string;
    imgs: mongoose.Types.ObjectId[];
    labels: mongoose.Types.ObjectId[];
    date?: string;
    cat?: mongoose.Types.ObjectId;
}>;
export interface ArticleInterface extends mongoose.Document {
    id: string;
    title: string;
    text: string;
    desc: string;
    date?: string;
    cat?: Category;
    imgs: Gallery[];
    labels: Label[];
}
export interface Article {
    id: string;
    title: string;
    text: string;
    desc: string;
    date?: string;
    cat?: Category;
    imgs: Gallery[];
    labels: Label[];
}
