import { v4 as uuid } from "uuid";
import LinkedList from "../../common/LinkedList";

/**
 * 控件数据模型（第一个控件代表了整个表单）
 */
export default class ControlModel extends LinkedList<ControlModel>  {
    private _id: string; // 节点ID
    private _name: string; // 节点名称
    private _options: any; // 节点选项
    private _children: ControlModel[];

    constructor(name: string, options: any, children: ControlModel[]) {
        super();
        this._id = uuid().replace(/-/g, '');
        this._name = name;
        this._options = options;
        this._children = children;
    }

    get id(): string {
        return this._id;
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