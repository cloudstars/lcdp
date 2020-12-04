import { v4 as uuid } from "uuid";
import LinkedList from "../../common/LinkedList";
import { NodeOptions, NodeType } from "./Node";

/**
 * 流程节点数据模型
 */
export default class NodeModel<T extends NodeOptions = NodeOptions> extends LinkedList<NodeModel> implements Iterable<NodeModel> {
    private _id: string; // 节点ID
    private _name: string; // 节点名称
    private _type: NodeType; // 节点类型
    private _subType: string; // 节点子类型
    private _options: T; // 节点选项
    private _branchs: NodeModel[];

    constructor(name: string, type: NodeType, subType: string, options: T, branchs: NodeModel[]) {
        super();
        this._id = uuid().replace(/-/g, '');
        this._name = name;
        this._type = type;
        this._subType = subType;
        this._options = options;
        this._branchs = branchs;
    }

    // 使对象可被迭代
    [Symbol.iterator]() {
        let point: NodeModel = this;
        return {
            next(): IteratorResult<NodeModel> {
                if (point == null) {
                    return {
                        done: true,
                        value: null
                    }
                } else {
                    let curr = point;
                    point = (point.next as NodeModel)!;
                    return {
                        done: false,
                        value: curr
                    }
                }
            }
        };
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

    get options(): NodeOptions {
        return this._options;
    }

    get branchs(): NodeModel[] {
        return this._branchs;
    }


}