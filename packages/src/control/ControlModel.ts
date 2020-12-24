import { v4 as uuid } from "uuid";

/**
 * 控件数据模型
 */
export default class ControlModel {
    private _id: string; // 控件ID
    private _type: string;  // 控件类型
    private _name: string; // 控件名称
    private _options: any; // 控件选项
    private _children: ControlModel[];

    constructor(name: string, type: string, options: any, children: ControlModel[]) {
        this._id = uuid().replace(/-/g, '');
        this._type = type;
        this._name = name;
        this._options = options;
        this._children = children;
    }

    get id(): string {
        return this._id;
    }

    get type(): string {
        return this._type;
    }

    get name(): string {
        return this._name;
    }

    get options(): any {
        return this._options;
    }

    set options(options: any) {
        this._options = options;
    }

    get children(): ControlModel[] {
        return this._children;
    }

}