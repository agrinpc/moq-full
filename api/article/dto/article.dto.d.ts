import { Gallery } from "src/gallery/schema/gallery.schema";
import { Label } from "src/labels/schema/labels.schema";
export declare class AddArticleDto {
    title: string;
    text: string;
    desc: string;
    cat: string;
    date?: string;
    imgs: Gallery[];
    labels: Label[];
}
export declare class UpdateArticleDto {
    id: string;
    title: string;
    text: string;
    desc: string;
    cat: string;
}
export declare class AddImgDto {
    id: string;
}
export declare class AddLabelDto {
    id: string;
}
