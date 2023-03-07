import { Gallery } from "src/gallery/schema/gallery.schema";
import { Label } from "src/labels/schema/labels.schema";
export declare class AddNewsDto {
    title: string;
    headline: string;
    thumb?: string;
    date?: string;
    text: string;
    desc: string;
    imgs: Gallery[];
    labels: Label[];
}
export declare class UpdateNewsDto {
    id: string;
    title: string;
    headline: string;
    text: string;
    desc: string;
}
export declare class UpdateNewsThumbDto {
    id: string;
    imgId: string;
}
