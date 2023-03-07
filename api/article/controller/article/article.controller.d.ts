import { AddArticleDto, UpdateArticleDto } from 'src/article/dto/article.dto';
import { Article } from 'src/article/schema/article.schema';
import { ArticleService } from 'src/article/service/article/article.service';
export declare class ArticleController {
    private srv;
    constructor(srv: ArticleService);
    get(): Promise<Article[]>;
    getByCat(ids: string): Promise<Article[]>;
    getSingle(id: string): Promise<Article>;
    create(data: AddArticleDto): Promise<Object>;
    addImg(data: any): Promise<Object>;
    removeImg(data: any): Promise<Object>;
    addLbl(data: any): Promise<Object>;
    removeLbl(data: any): Promise<Object>;
    update(data: UpdateArticleDto): Promise<Object>;
    deleteLabel(id: string): Promise<void>;
}
