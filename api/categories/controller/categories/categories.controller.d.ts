import { AddCategoryDto, UpdateCategoryDto } from 'src/categories/dto/categories.dto';
import { Category } from 'src/categories/schema/categories.schema';
import { CategoriesService } from 'src/categories/service/categories/categories.service';
export declare class CategoriesController {
    private srv;
    constructor(srv: CategoriesService);
    getLabels(): Promise<Category[]>;
    getLabelsSingle(id: string): Promise<Category>;
    createLabel(data: AddCategoryDto): Promise<Object>;
    updateLabel(data: UpdateCategoryDto): Promise<Object>;
    deleteLabel(id: string): Promise<void>;
}
