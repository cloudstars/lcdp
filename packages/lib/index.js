'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var antd = require('antd');
require('antd/dist/antd.css');
var uuid = require('uuid');
var icons = require('@ant-design/icons');
var lodash = require('lodash');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function FormEditor(props) {
    return (React__default['default'].createElement("div", null, "\u8FD9\u662F\u4E00\u4E2AFormEditor"));
}

function PageEditor(props) {
    return (React__default['default'].createElement("div", null, "\u8FD9\u662F\u4E00\u4E2APageEditor"));
}

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".workflow-editor {\n  overflow: auto;\n}\n.workflow-editor-panel {\n  display: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy93b3JrZmxvdy9pbmRleC5sZXNzIiwiQ29uZmlnUGFuZWwubGVzcyIsInNyYy93b3JrZmxvdy9jb21wb25lbnRzL0NvbmZpZ1BhbmVsLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxjQUFBO0FDRko7QUNDQTtFQUNJLGFBQUE7QURDSiIsImZpbGUiOiJDb25maWdQYW5lbC5sZXNzIn0= */";
styleInject(css_248z);

function ConfigPanel(props) {
    return (React__default['default'].createElement("div", { className: "workflow-editor-panel" },
        React__default['default'].createElement("p", null, "\u8FD9\u662F\u4E00\u4E2AConfigPanel")));
}

var NodeType;
(function (NodeType) {
    NodeType[NodeType["START"] = 0] = "START";
    NodeType[NodeType["INPUT"] = 1] = "INPUT";
    NodeType[NodeType["APPROVE"] = 2] = "APPROVE";
    NodeType[NodeType["SERVICE"] = 3] = "SERVICE";
    NodeType[NodeType["CONDITION"] = 4] = "CONDITION";
})(NodeType || (NodeType = {}));

function StartNodeConfiger(props) {
    return (React__default['default'].createElement("div", null,
        React__default['default'].createElement("p", null, "\u8FD9\u662F\u4E00\u4E2AStartNodeConfiger")));
}
class StartNodeConfigerClass extends React__default['default'].Component {
    hasError(node) {
        return false;
    }
    render() {
        return React__default['default'].createElement("div", null, "\u8FD9\u662F\u4E00\u4E2AStartNodeConfiger");
    }
}

function StartNodeViewer(props) {
    return (React__default['default'].createElement("div", null, "\u8FD9\u662F\u4E00\u4E2AStartNodeViewer"));
}
class StartNodeViewerClass extends React__default['default'].Component {
    constructor() {
        super(...arguments);
        this.hasError = (node) => {
            return true;
        };
    }
    render() {
        return React__default['default'].createElement("div", null, "\u8FD9\u662F\u4E00\u4E2AStartNodeViewer");
    }
}

const StartNode = {
    type: NodeType.START,
    id: 'default.start',
    name: '开始',
    color: '#f3f3f3',
    defaultOptions: () => {
        return {};
    },
    nodeConfiger: StartNodeConfiger,
    nodeViewer: StartNodeViewer,
    validate: (node) => {
        return {
            hasError: false,
            title: '',
            message: ''
        };
    }
};

function InputNodeConfiger(props) {
    return (React__default['default'].createElement("div", null,
        React__default['default'].createElement("p", null, "\u8FD9\u662F\u4E00\u4E2AInputNodeConfiger")));
}

function InputNodeViewer(props) {
    return (React__default['default'].createElement("div", null,
        React__default['default'].createElement("p", null, "\u8FD9\u662F\u4E00\u4E2AInputNodeViewer")));
}

const InputNode = {
    type: NodeType.INPUT,
    id: 'default.Input',
    name: '填写',
    color: '#fdfdfd',
    defaultOptions: () => {
        return {};
    },
    nodeConfiger: InputNodeConfiger,
    nodeViewer: InputNodeViewer,
    validate: (node) => {
        return {
            hasError: false,
            title: '',
            message: ''
        };
    }
};

function ApproveNodeConfiger(props) {
    return (React__default['default'].createElement("div", null,
        React__default['default'].createElement("p", null, "\u8FD9\u662F\u4E00\u4E2AApproveNodeConfiger")));
}

function ApproveNodeViewer(props) {
    return (React__default['default'].createElement("div", null,
        React__default['default'].createElement("p", null, "\u8FD9\u662F\u4E00\u4E2AApproveNodeViewer")));
}

const ApproveNode = {
    type: NodeType.APPROVE,
    id: 'default.Approve',
    name: '审批',
    color: '#f1f1f1',
    defaultOptions: () => {
        return {};
    },
    nodeConfiger: ApproveNodeConfiger,
    nodeViewer: ApproveNodeViewer,
    validate: (node) => {
        return {
            hasError: false,
            title: '',
            message: ''
        };
    }
};

function ConditionNodeConfiger(props) {
    return (React__default['default'].createElement("div", null,
        React__default['default'].createElement("p", null, "\u8FD9\u662F\u4E00\u4E2AConditionNodeConfiger")));
}

function ConditionNodeViewer(props) {
    return (React__default['default'].createElement("div", null,
        React__default['default'].createElement("p", null, "\u8FD9\u662F\u4E00\u4E2AConditionNodeViewer")));
}

const ConditionNode = {
    type: NodeType.CONDITION,
    id: 'default.condition',
    name: '条件',
    color: '#fbfbfb',
    defaultOptions: () => {
        return {};
    },
    nodeConfiger: ConditionNodeConfiger,
    nodeViewer: ConditionNodeViewer,
    validate: (node) => {
        return {
            hasError: false,
            title: '',
            message: ''
        };
    }
};

const contextInitValue = {
    editable: true,
    nodeMap: {
        [StartNode.id]: StartNode,
        [InputNode.id]: InputNode,
        [ApproveNode.id]: ApproveNode,
        [ConditionNode.id]: ConditionNode
    }
};
const WorkflowEditorContext = React.createContext(contextInitValue);

class LinkedList {
    constructor() {
        this._prev = null;
        this._next = null;
    }
    [Symbol.iterator]() {
        let point = this;
        return {
            next() {
                if (point == null) {
                    return {
                        done: true,
                        value: null
                    };
                }
                else {
                    let curr = point;
                    point = point.next;
                    return {
                        done: false,
                        value: curr
                    };
                }
            }
        };
    }
    get prev() {
        return this._prev;
    }
    get next() {
        return this._next;
    }
    append(node) {
        node._prev = this;
        let nodeLast = node;
        while (nodeLast && nodeLast.next != null) {
            nodeLast = nodeLast.next;
        }
        nodeLast._next = this._next;
        this._next = node;
    }
    trace() {
        let p = this;
        while (p != null) {
            console.trace(p);
            p = p._next;
        }
    }
}

class NodeModel extends LinkedList {
    constructor(name, type, subType, options, branchs) {
        super();
        this._id = uuid.v4().replace(/-/g, '');
        this._name = name;
        this._type = type;
        this._subType = subType;
        this._options = options;
        this._branchs = branchs;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get type() {
        return this._type;
    }
    get subType() {
        return this._subType;
    }
    get options() {
        return this._options;
    }
    get branchs() {
        return this._branchs;
    }
}

function AppendNodeModal(props) {
    const { nodeMap, peddingNode, refreshNodeModel } = React.useContext(WorkflowEditorContext);
    const [isModalVisible, setModalVisible] = React.useState(!!peddingNode);
    React.useEffect(() => {
        setModalVisible(!!peddingNode);
    }, [peddingNode]);
    const handleOk = () => {
        setModalVisible(false);
    };
    const handleCancel = () => {
        setModalVisible(false);
    };
    const appendNode = React.useCallback((node) => {
        peddingNode.nodeModel.append(new NodeModel(node.name, node.type, node.id, node.defaultOptions(), []));
        refreshNodeModel && refreshNodeModel();
    }, [peddingNode]);
    let nodesSelector = React.useMemo(() => {
        return getNodesSelector(nodeMap, appendNode);
    }, [peddingNode]);
    return (React__default['default'].createElement(antd.Modal, { visible: isModalVisible, closable: false, onOk: handleOk, onCancel: handleCancel },
        React__default['default'].createElement("div", { className: "node-append-selector" }, nodesSelector)));
}
function getNodesSelector(nodeMap, appendNode) {
    let reactNodes = [];
    for (let key in nodeMap) {
        let node = nodeMap[key];
        if (node.type == NodeType.START)
            continue;
        let reactNode = (React__default['default'].createElement("div", { key: node.id, className: "node-card", onClick: () => appendNode(node) }, node.name));
        reactNodes.push(reactNode);
    }
    return reactNodes;
}

function AppendNodeButton(props) {
    let { nodeModel } = props;
    let { setPeddingNode } = React.useContext(WorkflowEditorContext);
    function handleClick(e) {
        setPeddingNode && setPeddingNode({
            nodeModel: nodeModel
        });
    }
    return (React__default['default'].createElement("div", { className: "node-append-btn", onClick: handleClick },
        React__default['default'].createElement(icons.PlusOutlined, null)));
}

function NodeList(props) {
    let { startNodeModel } = props;
    let reactNodes = [];
    for (let nodeModel of startNodeModel) {
        let nm = nodeModel;
        let isBranch = nm.branchs && nm.branchs.length > 0;
        let reactNode = (React__default['default'].createElement("div", { key: nm.id, className: "flow-node" },
            React__default['default'].createElement(NodeWrapper, Object.assign({}, props, { isBranch: isBranch, nodeModel: nm }))));
        reactNodes.push(reactNode);
    }
    return React__default['default'].createElement(React__default['default'].Fragment, null, reactNodes);
}
function NodeWrapper(props) {
    let { nodeMap, editable } = React.useContext(WorkflowEditorContext);
    let nodeModel = props.nodeModel;
    let node = nodeMap[nodeModel.subType];
    let NodeViewer = node.nodeViewer;
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement("div", { className: "flow-node-box" },
            !props.isBranch &&
                React__default['default'].createElement("div", { className: "node-header", style: { backgroundColor: node.color } }, nodeModel.name),
            React__default['default'].createElement("div", { className: "node-content" },
                React__default['default'].createElement(NodeViewer, { key: nodeModel.id, dataModel: nodeModel }))),
        editable && React__default['default'].createElement(AppendNodeButton, { nodeModel: nodeModel })));
}

function Flow(props) {
    let { nodeModel } = React.useContext(WorkflowEditorContext);
    return (React__default['default'].createElement("div", { className: "flow" },
        React__default['default'].createElement(NodeList, { startNodeModel: nodeModel }),
        React__default['default'].createElement(EndNode, Object.assign({}, props))));
}
function EndNode(props) {
    return (React__default['default'].createElement("div", { className: "flow-end" },
        React__default['default'].createElement("section", { className: "workflowEndBox" },
            React__default['default'].createElement("div", { className: "workflowEnd" }))));
}

var css_248z$1 = ".workflow-editor-canvas {\n  display: block;\n}\n.workflow-editor-canvas .flow {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.workflow-editor-canvas .flow .flow-node {\n  position: relative;\n}\n.workflow-editor-canvas .flow .flow-node::before {\n  position: absolute;\n  content: \"\";\n  width: 1px;\n  height: 100%;\n  background-color: #ccc;\n}\n.workflow-editor-canvas .flow .flow-node .flow-node-box {\n  width: 280px;\n  min-height: 128px;\n  border: 1px solid #ccc;\n  background: #fff;\n  border-radius: 6px;\n  /* 加了这个属性之后，才能遮住底部的1px背景线 */\n  position: relative;\n}\n.workflow-editor-canvas .flow .flow-node .flow-node-box .node-header {\n  height: 48px;\n  padding: 4px;\n  border-bottom: 1px solid #ccc;\n}\n.workflow-editor-canvas .flow .flow-node .flow-node-box .node-content {\n  padding: 6px;\n}\n.workflow-editor-canvas .flow .flow-node .node-append-btn {\n  padding: 20px;\n  text-align: center;\n}\n.workflow-editor-canvas .flow .flow-node .node-append-btn span {\n  position: relative;\n  border: 1px solid grey;\n  border-radius: 50%;\n  cursor: pointer;\n  outline: none;\n}\n.workflow-editor-canvas .flow .flow-end {\n  width: 56px;\n  height: 32px;\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABACAQAAABokzttAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiCAkRLQN+59ZwAAAAfUlEQVRo3u3ZwQ2AIBAAQbFn69ce7qEumWng2BDC49Z1H1s7vz6AQIEC4c/WPfwH13Dg9Nudztv+DQqsE1gnsE5gncA6gXUC6wTWCawTWCewTmCdwLo1XRa8vWOYztv+BgXWCawTWCewTmCdwDqBdQLrBNYJrBNYJ7BOYN0Dws4H6yyzXK8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDgtMDlUMTc6NDU6MDMrMDg6MDBVMAcOAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA4LTA5VDE3OjQ1OjAzKzA4OjAwJG2/sgAAAABJRU5ErkJggg==) no-repeat;\n  background-size: 56px 32px;\n  margin: 30px auto;\n}\n.node-append-selector {\n  display: flex;\n}\n.node-append-selector .node-card {\n  border: 1px solid grey;\n  width: 60px;\n  height: 60px;\n  margin: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy93b3JrZmxvdy9jb21wb25lbnRzL0Zsb3dDYW52YXMubGVzcyIsIkZsb3dDYW52YXMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjtBREZBO0VBSVEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNDUjtBRFBBO0VBVVksa0JBQUE7QUNBWjtBREVZO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ0FoQjtBRGpCQTtFQXFCZ0IsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VDRGQsMkJBQTJCO0VER2Isa0JBQUE7QUNEaEI7QUQxQkE7RUE4Qm9CLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUNEcEI7QUQvQkE7RUFvQ29CLFlBQUE7QUNGcEI7QURsQ0E7RUF5Q2dCLGFBQUE7RUFDQSxrQkFBQTtBQ0poQjtBRHRDQTtFQTZDb0Isa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNKcEI7QUQ3Q0E7RUF1RFksV0FBQTtFQUNBLFlBQUE7RUFDQSxxaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FDUFo7QURZQTtFQUNJLGFBQUE7QUNWSjtBRFNBO0VBSVEsc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNWUiIsImZpbGUiOiJGbG93Q2FudmFzLmxlc3MifQ== */";
styleInject(css_248z$1);

function FlowCanvas(props) {
    return (React__default['default'].createElement("div", { className: "workflow-editor-canvas" },
        React__default['default'].createElement(Flow, null),
        React__default['default'].createElement(AppendNodeModal, null)));
}

var css_248z$2 = ".workflow-editor {\n  overflow: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy93b3JrZmxvdy9pbmRleC5sZXNzIiwiaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGNBQUE7QUNGSiIsImZpbGUiOiJpbmRleC5sZXNzIn0= */";
styleInject(css_248z$2);

function WorkflowEditor(props) {
    let { startNodeModel } = props;
    let nodeMap = React.useMemo(() => getNodeMap(props.nodes), []);
    let initNodeModel = React.useMemo(() => startNodeModel || getDefaultStartNodeModel(nodeMap), []);
    const [nodeModel, setNodeModel] = React.useState(initNodeModel);
    const [peddingNode, setPeddingNode] = React.useState();
    let contextValue = React.useMemo(() => getContextValue(props, nodeMap, nodeModel, setNodeModel, peddingNode, setPeddingNode), [peddingNode]);
    return (React__default['default'].createElement(WorkflowEditorContext.Provider, { value: contextValue },
        React__default['default'].createElement("div", { className: "workflow-editor" },
            React__default['default'].createElement(FlowCanvas, null),
            React__default['default'].createElement(ConfigPanel, null))));
}
function getNodeMap(nodes) {
    let nodeMap = {};
    if (nodes) {
        for (let i in nodes) {
            let node = nodes[i];
            nodeMap[node.id] = node;
        }
    }
    else {
        nodeMap = contextInitValue.nodeMap;
    }
    return nodeMap;
}
function getDefaultStartNodeModel(nodeMap) {
    for (let key in nodeMap) {
        if (nodeMap[key].type == NodeType.START) {
            let startNode = nodeMap[key];
            return new NodeModel(startNode.name, startNode.type, startNode.id, startNode.defaultOptions(), []);
        }
    }
    throw new Error("流程初始化出错，不存在开始节点！！！");
}
function getContextValue(props, nodeMap, nodeModel, setNodeModel, peddingNode, setPeddingNode) {
    return {
        editable: props.editable || true,
        nodeMap: nodeMap,
        nodeModel: nodeModel,
        refreshNodeModel: () => {
            setNodeModel((prevNodeModel) => {
                return lodash.cloneDeep(prevNodeModel);
            });
        },
        peddingNode: peddingNode,
        setPeddingNode: (peddingNode) => {
            setPeddingNode(peddingNode);
        }
    };
}

exports.FormEditor = FormEditor;
exports.PageEditor = PageEditor;
exports.WorkflowEditor = WorkflowEditor;
