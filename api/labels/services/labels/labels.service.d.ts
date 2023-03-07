import { Model } from 'mongoose';
import { AddLabelDto, CreatLabelDto } from 'src/labels/dto/addlabel.dto';
import { LabelInterface } from 'src/labels/schema/labels.schema';
export declare class LabelsService {
    private readonly labelModel;
    private labels;
    constructor(labelModel: Model<LabelInterface>);
    fetchLabels(): Promise<LabelInterface[]>;
    fetchLabelById(idVal: string): Promise<LabelInterface>;
    add(data: AddLabelDto): Promise<LabelInterface>;
    update(data: CreatLabelDto): Promise<LabelInterface>;
    remove(idVal: string): Promise<void>;
}
