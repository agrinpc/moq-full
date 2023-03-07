import { AddNewsDto, UpdateNewsDto, UpdateNewsThumbDto } from 'src/news/dto/news.dto';
import { News } from 'src/news/schema/news.schema';
import { NewsService } from 'src/news/service/news/news.service';
export declare class NewsController {
    private srv;
    constructor(srv: NewsService);
    get(): Promise<News[]>;
    getByTag(ids: string): Promise<News[]>;
    getSingle(id: string): Promise<News>;
    create(data: AddNewsDto): Promise<Object>;
    addImg(data: any): Promise<Object>;
    removeImg(data: any): Promise<Object>;
    addLbl(data: any): Promise<Object>;
    removeLbl(data: any): Promise<Object>;
    update(data: UpdateNewsDto): Promise<Object>;
    updateThumb(data: UpdateNewsThumbDto): Promise<Object>;
    deleteLabel(id: string): Promise<void>;
}
