import { Model } from 'mongoose';
import { AddCategoryDto, UpdateCategoryDto } from 'src/categories/dto/categories.dto';
import { CategoryInterface } from 'src/categories/schema/categories.schema';
export declare class CategoriesService {
    private readonly categoryModel;
    private categories;
    constructor(categoryModel: Model<CategoryInterface>);
    fetch(): Promise<CategoryInterface[]>;
    fetchById(idVal: string): Promise<CategoryInterface>;
    add(data: AddCategoryDto): Promise<CategoryInterface>;
    update(data: UpdateCategoryDto): Promise<CategoryInterface>;
    remove(idVal: string): Promise<void>;
}
