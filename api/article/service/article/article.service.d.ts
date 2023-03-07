import { Model } from 'mongoose';
import { AddArticleDto, UpdateArticleDto } from 'src/article/dto/article.dto';
import { ArticleInterface } from 'src/article/schema/article.schema';
export declare class ArticleService {
    private readonly articleModel;
    private articles;
    constructor(articleModel: Model<ArticleInterface>);
    fetch(): Promise<ArticleInterface[]>;
    fetchByCat(ids: string): Promise<ArticleInterface[]>;
    fetchById(idVal: string): Promise<ArticleInterface>;
    add(data: AddArticleDto): Promise<ArticleInterface>;
    update(data: UpdateArticleDto): Promise<ArticleInterface>;
    addImg(id: string, imgId: string): Promise<object>;
    removeImg(id: string, imgId: string): Promise<Object>;
    addLabel(id: string, lbl: string): Promise<object>;
    removeLbl(id: string, lblId: string): Promise<Object>;
    remove(idVal: string): Promise<void>;
}
