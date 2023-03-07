import { Model } from 'mongoose';
import { AddGalleryDto, UpdateGalleryDto, UploadGalleryDto } from 'src/gallery/dto/gallery.dto';
import { GalleryInterface } from 'src/gallery/schema/gallery.schema';
export declare class GalleryService {
    private readonly galleryModel;
    private images;
    constructor(galleryModel: Model<GalleryInterface>);
    fetch(): Promise<GalleryInterface[]>;
    fetchById(idVal: string): Promise<GalleryInterface>;
    add(data: AddGalleryDto): Promise<GalleryInterface>;
    update(data: UpdateGalleryDto): Promise<GalleryInterface>;
    upload(data: UploadGalleryDto): Promise<GalleryInterface>;
    fetchImage(id: string): Promise<string>;
    remove(idVal: string): Promise<void>;
}
