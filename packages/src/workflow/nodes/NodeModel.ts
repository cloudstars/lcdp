import { v4 as uuid } from "uuid";
import LinkedList from "../../common/LinkedList";
import { NodeType } from "./Node";

/**
 * 节点数据模型（第一个节点代表了整个流程）
 */
export default class NodeModel extends LinkedList<NodeModel>  {
    private _id: string; // 节点ID
    private _name: string; // 节点名称
    private _type: NodeType; // 节点类型
    private _subType: string; // 节点子类型
    private _options: any; // 节点选项
    private _branchs: NodeModel[];

    constructor(name: string, type: NodeType, subType: string, options: any, branchs: NodeModel[]) {
        super();
        this._id = uuid().replace(/-/g, '');
        this._name = name;
        this._type = type;
        this._subType = subType;
        this._options = options;
        this._branchs = branchs;
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get type(): NodeType {
        return this._type;
    }

    get subType(): string {
        return this._subType;
    }

    get options(): any {
        return this._options;
    }

    set options(options: any) {
        this._options = options;
    }

    get branchs(): NodeModel[] {
        return this._branchs;
    }

}