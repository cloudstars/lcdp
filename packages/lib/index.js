'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var uuid = require('uuid');
require('antd/dist/antd.css');

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

class LinkedList {
    constructor() {
        this._prev = null;
        this._next = null;
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

const contextInitValue = {
    editable: true,
    nodeMap: {
        [StartNode.id]: StartNode,
        [InputNode.id]: InputNode
    }
};
const WorkflowEditorContext = React.createContext(contextInitValue);

function NodeList(props) {
    let { startNodeModel } = props;
    let { nodeMap, editable } = React.useContext(WorkflowEditorContext);
    let reactNodes = [];
    for (let nodeModel of startNodeModel) {
        let isBranch = nodeModel.branchs && nodeModel.branchs.length > 0;
        let reactNode = (React__default['default'].createElement("div", { key: nodeModel.id, className: "flow-node" },
            React__default['default'].createElement(NodeWrapper, Object.assign({}, props, { isBranch: isBranch, nodeModel: nodeModel, "data-id": nodeModel.id }))));
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
        editable && React__default['default'].createElement(AddNodeBtn, { nodeModel: nodeModel })));
}
function AddNodeBtn(props) {
    let { nodeModel } = props;
    let { nodeMap, editable } = React.useContext(WorkflowEditorContext);
    function handleClick(e) {
        console.log('The addbtn was clicked.');
        let _in = InputNode;
        nodeModel.append(new NodeModel(_in.name, _in.type, _in.id, _in.defaultOptions(), []));
    }
    return (React__default['default'].createElement("div", { className: "flow-node-addbtn", onClick: handleClick }, "+"));
}

function Flow(props) {
    let { nodeMap, nodeModel } = React.useContext(WorkflowEditorContext);
    if (!nodeModel) {
        let sn = nodeMap[StartNode.id];
        nodeModel = new NodeModel(sn.name, sn.type, sn.id, sn.defaultOptions(), []);
    }
    return (React__default['default'].createElement("div", { className: "flow" },
        React__default['default'].createElement(NodeList, { startNodeModel: nodeModel }),
        React__default['default'].createElement(EndNode, Object.assign({}, props))));
}
function EndNode(props) {
    return (React__default['default'].createElement("div", { className: "flow-end" },
        React__default['default'].createElement("section", { className: "workflowEndBox" },
            React__default['default'].createElement("div", { className: "workflowEnd" }))));
}

var css_248z$1 = ".workflow-editor-canvas {\n  display: block;\n}\n.workflow-editor-canvas .flow {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.workflow-editor-canvas .flow .flow-node {\n  position: relative;\n}\n.workflow-editor-canvas .flow .flow-node::before {\n  position: absolute;\n  content: \"\";\n  width: 1px;\n  height: 100%;\n  background-color: #ccc;\n}\n.workflow-editor-canvas .flow .flow-node .flow-node-box {\n  width: 280px;\n  min-height: 128px;\n  border: 1px solid #ccc;\n  background: #fff;\n  border-radius: 6px;\n  /* 加了这个属性之后，才能遮住底部的1px背景线 */\n  position: relative;\n}\n.workflow-editor-canvas .flow .flow-node .flow-node-box .node-header {\n  height: 48px;\n  padding: 4px;\n  border-bottom: 1px solid #ccc;\n}\n.workflow-editor-canvas .flow .flow-node .flow-node-box .node-content {\n  padding: 6px;\n}\n.workflow-editor-canvas .flow .flow-node .flow-node-addbtn {\n  padding: 20px;\n}\n.workflow-editor-canvas .flow .flow-end {\n  width: 56px;\n  height: 32px;\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABACAQAAABokzttAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiCAkRLQN+59ZwAAAAfUlEQVRo3u3ZwQ2AIBAAQbFn69ce7qEumWng2BDC49Z1H1s7vz6AQIEC4c/WPfwH13Dg9Nudztv+DQqsE1gnsE5gncA6gXUC6wTWCawTWCewTmCdwLo1XRa8vWOYztv+BgXWCawTWCewTmCdwDqBdQLrBNYJrBNYJ7BOYN0Dws4H6yyzXK8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDgtMDlUMTc6NDU6MDMrMDg6MDBVMAcOAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA4LTA5VDE3OjQ1OjAzKzA4OjAwJG2/sgAAAABJRU5ErkJggg==) no-repeat;\n  background-size: 56px 32px;\n  margin: 30px auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy93b3JrZmxvdy9jb21wb25lbnRzL0Zsb3dDYW52YXMubGVzcyIsIkZsb3dDYW52YXMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjtBREZBO0VBSVEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNDUjtBRFBBO0VBVVksa0JBQUE7QUNBWjtBREVZO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ0FoQjtBRGpCQTtFQXFCZ0IsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VDRGQsMkJBQTJCO0VER2Isa0JBQUE7QUNEaEI7QUQxQkE7RUE4Qm9CLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUNEcEI7QUQvQkE7RUFvQ29CLFlBQUE7QUNGcEI7QURsQ0E7RUF5Q2dCLGFBQUE7QUNKaEI7QURyQ0E7RUE4Q1ksV0FBQTtFQUNBLFlBQUE7RUFDQSxxaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FDTloiLCJmaWxlIjoiRmxvd0NhbnZhcy5sZXNzIn0= */";
styleInject(css_248z$1);

function FlowCanvas(props) {
    return (React__default['default'].createElement("div", { className: "workflow-editor-canvas" },
        React__default['default'].createElement(Flow, null)));
}

var css_248z$2 = ".workflow-editor {\n  overflow: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy93b3JrZmxvdy9pbmRleC5sZXNzIiwiaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGNBQUE7QUNGSiIsImZpbGUiOiJpbmRleC5sZXNzIn0= */";
styleInject(css_248z$2);

function WorkflowEditor(props) {
    let contextValue = getInitContextValue(props);
    return (React__default['default'].createElement(WorkflowEditorContext.Provider, { value: contextValue },
        React__default['default'].createElement("div", { className: "workflow-editor" },
            React__default['default'].createElement(FlowCanvas, null),
            React__default['default'].createElement(ConfigPanel, null))));
}
function getInitContextValue(props) {
    let nodeMap = {};
    if (props.nodes) {
        for (let i in props.nodes) {
            nodeMap[props.nodes[i].id] = props.nodes[i];
        }
    }
    else {
        nodeMap = contextInitValue.nodeMap;
    }
    return {
        editable: props.editable || true,
        nodeMap: nodeMap,
        nodeModel: props.nodeModel,
    };
}

exports.FormEditor = FormEditor;
exports.PageEditor = PageEditor;
exports.WorkflowEditor = WorkflowEditor;
