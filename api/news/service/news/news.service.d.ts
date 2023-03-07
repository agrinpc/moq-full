import { Model } from 'mongoose';
import { AddNewsDto, UpdateNewsDto, UpdateNewsThumbDto } from 'src/news/dto/news.dto';
import { NewsInterface } from 'src/news/schema/news.schema';
export declare class NewsService {
    private readonly newsModel;
    private news;
    constructor(newsModel: Model<NewsInterface>);
    fetch(): Promise<NewsInterface[]>;
    fetchById(idVal: string): Promise<NewsInterface>;
    fetchByTag(ids: string): Promise<NewsInterface[]>;
    add(data: AddNewsDto): Promise<NewsInterface>;
    update(data: UpdateNewsDto): Promise<NewsInterface>;
    updateThumb(data: UpdateNewsThumbDto): Promise<NewsInterface>;
    addImg(id: string, imgId: string): Promise<object>;
    removeImg(id: string, imgId: string): Promise<Object>;
    addLabel(id: string, lbl: string): Promise<object>;
    removeLbl(id: string, lblId: string): Promise<Object>;
    remove(idVal: string): Promise<void>;
}
