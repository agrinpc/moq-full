/// <reference types="multer" />
import { AddGalleryDto, UpdateGalleryDto } from 'src/gallery/dto/gallery.dto';
import { Gallery } from 'src/gallery/schema/gallery.schema';
import { GalleryService } from 'src/gallery/service/gallery/gallery.service';
export declare class GalleryController {
    private srv;
    constructor(srv: GalleryService);
    getImages(): Promise<Gallery[]>;
    getSingle(id: string): Promise<Gallery>;
    create(data: AddGalleryDto): Promise<Object>;
    update(data: UpdateGalleryDto): Promise<Object>;
    upload(data: {
        id: string;
    }, file: Express.Multer.File, req: any): Promise<object>;
    getImage(id: string, res: any): Promise<void>;
    deleteLabel(id: string): Promise<void>;
}
