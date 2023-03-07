import { AddLabelDto, CreatLabelDto } from 'src/labels/dto/addlabel.dto';
import { Label } from 'src/labels/schema/labels.schema';
import { LabelsService } from 'src/labels/services/labels/labels.service';
export declare class LabelsController {
    private srv;
    constructor(srv: LabelsService);
    getLabels(): Promise<Label[]>;
    getLabelsSingle(id: string): Promise<Label>;
    createLabel(data: AddLabelDto): Promise<Object>;
    updateLabel(data: CreatLabelDto): Promise<Object>;
    deleteLabel(id: string): Promise<void>;
}
