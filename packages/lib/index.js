'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var antd = require('antd');
var icons = require('@ant-design/icons');
var uuid = require('uuid');
var lodash = require('lodash');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function FormEditor(props) {
    return (React__default['default'].createElement("div", null, "\u8FD9\u662F\u4E00\u4E2AFormEditor"));
}

function PageEditor(props) {
    return (React__default['default'].createElement("div", null, "\u8FD9\u662F\u4E00\u4E2APageEditor"));
}

var NodeType;
(function (NodeType) {
    NodeType[NodeType["START"] = 0] = "START";
    NodeType[NodeType["INPUT"] = 1] = "INPUT";
    NodeType[NodeType["APPROVE"] = 2] = "APPROVE";
    NodeType[NodeType["SERVICE"] = 3] = "SERVICE";
    NodeType[NodeType["BRANCH"] = 4] = "BRANCH";
    NodeType[NodeType["CONDITION"] = 5] = "CONDITION";
})(NodeType || (NodeType = {}));

const StartNodeConfiger = React.forwardRef((props, ref) => {
    const [form] = antd.Form.useForm();
    const { options, onOptionsValuesChange } = props;
    React.useImperativeHandle(ref, () => ({
        getOptions: () => {
            return { field1: 'xxx' };
        }
    }), []);
    return (React__default['default'].createElement("div", null,
        React__default['default'].createElement("p", null, "\u8FD9\u662F\u4E00\u4E2AStartNodeConfiger"),
        React__default['default'].createElement("br", null),
        React__default['default'].createElement(antd.Form, { layout: "vertical", form: form, onValuesChange: onOptionsValuesChange },
            React__default['default'].createElement(antd.Form.Item, { name: "field1", label: "\u8BF7\u8F93\u5165\u7B2C\u4E00\u4E2A\u53C2\u6570", initialValue: options.field1 },
                React__default['default'].createElement(antd.Input.TextArea, { rows: 1 })),
            React__default['default'].createElement(antd.Form.Item, { name: "field2", label: "\u8BF7\u8F93\u5165\u7B2C\u4E8C\u4E2A\u53C2\u6570", initialValue: options.field2 },
                React__default['default'].createElement(antd.Input.TextArea, { rows: 3 })))));
});

function StartNodeViewer(props) {
    const { options } = props;
    return (React__default['default'].createElement("div", null,
        "\u8FD9\u662F\u4E00\u4E2AStartNodeViewer",
        React__default['default'].createElement("br", null),
        React__default['default'].createElement("br", null),
        React__default['default'].createElement("p", null,
            "\u7B2C\u4E00\u4E2A\u5B57\u6BB5\uFF1A",
            options.field1),
        React__default['default'].createElement("p", null, "\u7B2C\u4E8C\u4E2A\u5B57\u6BB5\uFF1A")));
}

const StartNode = {
    type: NodeType.START,
    id: 'default.start',
    selectable: false,
    name: '开始',
    color: '#f3f3f3',
    defaultOptions: () => {
        return {
            startForm: {},
            field1: 'xxx',
            fiedl2: 'yyy'
        };
    },
    nodeViewer: StartNodeViewer,
    nodeConfiger: StartNodeConfiger,
    validate: (nodeModel) => {
        return {
            hasError: false,
            title: '',
            message: ''
        };
    }
};

const InputNodeConfiger = React.forwardRef((props, ref) => {
    React.useImperativeHandle(ref, () => ({
        getOptions: () => {
            return { field2: 'xxx' };
        }
    }), []);
    return (React__default['default'].createElement("div", null,
        React__default['default'].createElement("p", null, "\u8FD9\u662F\u4E00\u4E2AInputNodeConfiger")));
});

function InputNodeViewer(props) {
    return (React__default['default'].createElement("div", null,
        React__default['default'].createElement("p", null, "\u8FD9\u662F\u4E00\u4E2AInputNodeViewer")));
}

const InputNode = {
    type: NodeType.INPUT,
    id: 'default.Input',
    selectable: true,
    name: '填写',
    color: '#fdfdfd',
    defaultOptions: () => {
        return {
            field2: "xx"
        };
    },
    nodeViewer: InputNodeViewer,
    nodeConfiger: InputNodeConfiger,
    validate: (nodeModel) => {
        return {
            hasError: false,
            title: '',
            message: ''
        };
    }
};

const ApproveNodeConfiger = React.forwardRef((props, ref) => {
    React.useImperativeHandle(ref, () => ({
        getOptions: () => {
            return { fielda: 'xxx' };
        }
    }), []);
    return (React__default['default'].createElement("div", null,
        React__default['default'].createElement("p", null, "\u8FD9\u662F\u4E00\u4E2AApproveNodeConfiger")));
});

function ApproveNodeViewer(props) {
    return (React__default['default'].createElement("div", null,
        React__default['default'].createElement("p", null, "\u8FD9\u662F\u4E00\u4E2AApproveNodeViewer")));
}

const ApproveNode = {
    type: NodeType.APPROVE,
    id: 'default.Approve',
    selectable: true,
    name: '审批',
    color: '#f1f1f1',
    defaultOptions: () => {
        return {
            field1: 'xxx'
        };
    },
    nodeViewer: ApproveNodeViewer,
    nodeConfiger: ApproveNodeConfiger,
    validate: (nodeModel) => {
        return {
            hasError: false,
            title: '',
            message: ''
        };
    }
};

const ConditionNodeConfiger = React.forwardRef((props, ref) => {
    React.useImperativeHandle(ref, () => ({
        getOptions: () => {
            return { fieldc: 'xxx' };
        }
    }), []);
    return (React__default['default'].createElement("div", null,
        React__default['default'].createElement("p", null, "\u8FD9\u662F\u4E00\u4E2AConditionNodeConfiger")));
});

function ConditionNodeViewer(props) {
    return (React__default['default'].createElement("div", null,
        React__default['default'].createElement("p", null, "\u8FD9\u662F\u4E00\u4E2AConditionNodeViewer")));
}

const ConditionNode = {
    type: NodeType.CONDITION,
    id: 'default.condition',
    selectable: false,
    name: '条件',
    color: '#fbfbfb',
    defaultOptions: () => {
        return {
            fieldc: "xxx"
        };
    },
    nodeViewer: ConditionNodeViewer,
    nodeConfiger: ConditionNodeConfiger,
    validate: (nodeModel) => {
        return {
            hasError: false,
            title: '',
            message: ''
        };
    }
};

const ExclusiveBranchNodeConfiger = React.forwardRef((props, ref) => {
    React.useImperativeHandle(ref, () => ({
        getOptions: () => {
            return { fieldb: 'xxx' };
        }
    }), []);
    return (React__default['default'].createElement("div", null,
        React__default['default'].createElement("p", null, "\u8FD9\u662F\u4E00\u4E2ABranchNodeConfiger")));
});

function AppendNodeButton(props) {
    let { nodeModel } = props;
    let { setPeddingNode } = React.useContext(WorkflowEditorContext);
    function handleClick(e) {
        setPeddingNode && setPeddingNode({
            nodeModel: nodeModel
        });
    }
    return (React__default['default'].createElement("div", { className: "flow-node-addbtn", onClick: handleClick },
        React__default['default'].createElement(icons.PlusOutlined, null)));
}

function NodeList(props) {
    let { children, startNodeModel } = props;
    console.log('NodeList:' + startNodeModel);
    let reactNodes = [];
    for (let nodeModel of startNodeModel) {
        let nm = nodeModel;
        let isBranch = nm.branchs && nm.branchs.length > 0;
        let reactNode = (React__default['default'].createElement("div", { key: nm.id, className: "flow-node" },
            React__default['default'].createElement(NodeWrapper, Object.assign({}, props, { isBranch: isBranch, nodeModel: nm }))));
        reactNodes.push(reactNode);
    }
    return (React__default['default'].createElement("div", { className: "flow-list" },
        children,
        reactNodes));
}
function NodeWrapper(props) {
    let { nodeMap, editable, setCurrentNode } = React.useContext(WorkflowEditorContext);
    let nodeModel = props.nodeModel;
    let node = nodeMap[nodeModel.subType];
    let NodeViewer = node.nodeViewer;
    const onNodeItemClick = () => {
        setCurrentNode && setCurrentNode(nodeModel);
        console.log('current=' + nodeModel);
    };
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        props.isBranch ?
            React__default['default'].createElement(NodeViewer, { key: nodeModel.id, dataModel: nodeModel }) :
            React__default['default'].createElement("div", { className: "flow-node-item", onClick: onNodeItemClick },
                React__default['default'].createElement("div", { className: "node-item-header", style: { backgroundColor: node.color } }, nodeModel.name),
                React__default['default'].createElement("div", { className: "node-item-content" },
                    React__default['default'].createElement(NodeViewer, { key: nodeModel.id, dataModel: nodeModel, options: nodeModel.options }))),
        editable && React__default['default'].createElement(AppendNodeButton, { nodeModel: nodeModel })));
}

function ExclusiveBranchNodeViewer(props) {
    let branchs = props.dataModel.branchs;
    return (React__default['default'].createElement("div", { className: "flow-branch" }, branchs && branchs.length > 0 &&
        branchs.map((startNodeModel, index) => {
            let clearBorder = null;
            if (index == 0) {
                clearBorder = React__default['default'].createElement("div", { className: "clear-left-border" });
            }
            else if (index == branchs.length - 1) {
                clearBorder = React__default['default'].createElement("div", { className: "clear-right-border" });
            }
            return React__default['default'].createElement(NodeList, { startNodeModel: startNodeModel }, clearBorder);
        })));
}

const ExclusiveBranchNode = {
    type: NodeType.BRANCH,
    id: 'default.branch',
    selectable: true,
    name: '分支',
    color: '#f4f4f4',
    defaultOptions: () => {
        return {
            fieldb: "xxxdfs"
        };
    },
    nodeViewer: ExclusiveBranchNodeViewer,
    nodeConfiger: ExclusiveBranchNodeConfiger,
    validate: (nodeModel) => {
        return {
            hasError: false,
            title: '',
            message: ''
        };
    },
    conditionNode: ConditionNode
};

const contextInitValue = {
    editable: true,
    nodeMap: {
        [StartNode.id]: StartNode,
        [InputNode.id]: InputNode,
        [ApproveNode.id]: ApproveNode,
        [ConditionNode.id]: ConditionNode,
        [ExclusiveBranchNode.id]: ExclusiveBranchNode
    }
};
const WorkflowEditorContext = React.createContext(contextInitValue);

function ConfigPanel(props) {
    const { nodeMap, currentNode, setCurrentNode, refreshNodeModel } = React.useContext(WorkflowEditorContext);
    const [isVisible, setVisible] = React.useState(!!currentNode);
    const [options, setOptions] = React.useState(currentNode ? currentNode.options : {});
    React.useEffect(() => {
        setVisible(!!currentNode);
    }, [currentNode]);
    const onClose = () => {
        setVisible(false);
        setCurrentNode && setCurrentNode(undefined);
    };
    const onSave = () => {
        if (currentNode) {
            let Node = nodeMap[currentNode.subType];
            currentNode.options = options;
            refreshNodeModel && refreshNodeModel();
        }
        setVisible(false);
    };
    const onOptionsValuesChange = (newOptionsValuesPart) => {
        setOptions({ ...options, ...newOptionsValuesPart });
    };
    if (!currentNode) {
        return React__default['default'].createElement(React__default['default'].Fragment, null);
    }
    else {
        let NodeConfiger = nodeMap[currentNode.subType].nodeConfiger;
        return (React__default['default'].createElement(antd.Drawer, { visible: isVisible, title: "Basic Drawer", placement: "right", closable: false, onClose: onClose, footer: footer(onClose, onSave) }, !!currentNode &&
            React__default['default'].createElement(NodeConfiger, { options: currentNode.options, onOptionsValuesChange: onOptionsValuesChange })));
    }
}
function footer(onCancel, onSave) {
    return (React__default['default'].createElement("div", { style: { textAlign: 'right' } },
        React__default['default'].createElement(antd.Button, { onClick: onCancel, style: { marginRight: 8 } }, "\u53D6\u6D88"),
        React__default['default'].createElement(antd.Button, { onClick: onSave, type: "primary" }, "\u63D0\u4EA4")));
}

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
    set options(options) {
        this._options = options;
    }
    get branchs() {
        return this._branchs;
    }
}

function AppendNodeModal(props) {
    const { nodeMap, peddingNode, setPeddingNode, refreshNodeModel } = React.useContext(WorkflowEditorContext);
    const [isVisible, setVisible] = React.useState(!!peddingNode);
    React.useEffect(() => {
        setVisible(!!peddingNode);
    }, [peddingNode]);
    const handleOk = () => {
        setVisible(false);
    };
    const handleCancel = () => {
        setVisible(false);
    };
    const appendNode = React.useCallback((node) => {
        console.log('appendNode');
        let branchs = [];
        if (node.type == NodeType.BRANCH) {
            let cn = node.conditionNode;
            branchs.push(new NodeModel(cn.name, cn.type, cn.id, cn.defaultOptions(), []));
            branchs.push(new NodeModel(cn.name, cn.type, cn.id, cn.defaultOptions(), []));
        }
        peddingNode.nodeModel.append(new NodeModel(node.name, node.type, node.id, node.defaultOptions(), branchs));
        refreshNodeModel && refreshNodeModel();
        setVisible(false);
        setPeddingNode && setPeddingNode(undefined);
    }, [peddingNode]);
    let nodesSelector = React.useMemo(() => {
        return getNodesSelector(nodeMap, appendNode);
    }, [peddingNode]);
    return (React__default['default'].createElement(antd.Modal, { visible: isVisible, closable: false, onOk: handleOk, onCancel: handleCancel, footer: [] },
        React__default['default'].createElement("div", { className: "node-append-selector" }, nodesSelector)));
}
function getNodesSelector(nodeMap, appendNode) {
    let reactNodes = [];
    for (let key in nodeMap) {
        let node = nodeMap[key];
        if (node.selectable) {
            reactNodes.push((React__default['default'].createElement("div", { key: node.id, className: "node-card", onClick: () => appendNode(node) }, node.name)));
        }
    }
    return reactNodes;
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

function FlowCanvas(props) {
    return (React__default['default'].createElement("div", { className: "workflow-editor-canvas" },
        React__default['default'].createElement(Flow, null),
        React__default['default'].createElement(AppendNodeModal, null)));
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

var css_248z = ".workflow-editor {\n  overflow: auto;\n}\n.workflow-editor-canvas {\n  display: block;\n}\n.workflow-editor-canvas .flow-list {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.workflow-editor-canvas .flow-list::before {\n  position: absolute;\n  content: \"\";\n  width: 1px;\n  height: 100%;\n  top: 0;\n  left: 50%;\n  background-color: #ccc;\n}\n.workflow-editor-canvas .flow-list .flow-node {\n  position: relative;\n  padding: 20px 50px 0 50px;\n}\n.workflow-editor-canvas .flow-list .flow-node + .flow-node {\n  padding-top: 0;\n}\n.workflow-editor-canvas .flow-list .flow-node-item {\n  position: relative;\n  width: 280px;\n}\n.workflow-editor-canvas .flow-list .flow-node-item .node-item-header {\n  height: 50px;\n  background-color: silver;\n}\n.workflow-editor-canvas .flow-list .flow-node-item .node-item-content {\n  overflow: hidden;\n  height: 80px;\n  background-color: snow;\n}\n.workflow-editor-canvas .flow-list .flow-node-addbtn {\n  position: relative;\n  padding: 20px 0;\n}\n.workflow-editor-canvas .flow-list .flow-node-addbtn > button {\n  width: 20px;\n  height: 20px;\n  display: block;\n  margin: 0 auto;\n  border-radius: 100%;\n  border: 1px solid gray;\n}\n.workflow-editor-canvas .flow-list .flow-branch {\n  display: inline-flex;\n  position: relative;\n  /* 这个参数用于遮住底部的1px背景  */\n  background-color: #fff;\n}\n.workflow-editor-canvas .flow-list .flow-branch > .flow-list {\n  position: relative;\n  border-top: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n}\n.workflow-editor-canvas .flow-list .clear-left-border,\n.workflow-editor-canvas .flow-list .clear-right-border {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n.workflow-editor-canvas .flow-list .clear-left-border::before,\n.workflow-editor-canvas .flow-list .clear-left-border::after,\n.workflow-editor-canvas .flow-list .clear-right-border::before,\n.workflow-editor-canvas .flow-list .clear-right-border::after {\n  content: \"\";\n  position: absolute;\n  width: 50%;\n  background: #fff;\n  height: 10px;\n}\n.workflow-editor-canvas .flow-list .clear-left-border::before {\n  left: 0;\n  top: -5px;\n}\n.workflow-editor-canvas .flow-list .clear-left-border::after {\n  left: 0;\n  bottom: -5px;\n}\n.workflow-editor-canvas .flow-list .clear-right-border::before {\n  right: -2px;\n  top: -5px;\n}\n.workflow-editor-canvas .flow-list .clear-right-border::after {\n  right: -2px;\n  bottom: -5px;\n}\n.workflow-editor-canvas .flow-end {\n  width: 56px;\n  height: 32px;\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABACAQAAABokzttAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiCAkRLQN+59ZwAAAAfUlEQVRo3u3ZwQ2AIBAAQbFn69ce7qEumWng2BDC49Z1H1s7vz6AQIEC4c/WPfwH13Dg9Nudztv+DQqsE1gnsE5gncA6gXUC6wTWCawTWCewTmCdwLo1XRa8vWOYztv+BgXWCawTWCewTmCdwDqBdQLrBNYJrBNYJ7BOYN0Dws4H6yyzXK8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDgtMDlUMTc6NDU6MDMrMDg6MDBVMAcOAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA4LTA5VDE3OjQ1OjAzKzA4OjAwJG2/sgAAAABJRU5ErkJggg==) no-repeat;\n  background-size: 56px 32px;\n  margin: 30px auto;\n}\n.node-append-selector {\n  display: flex;\n}\n.node-append-selector .node-card {\n  border: 1px solid grey;\n  width: 60px;\n  height: 60px;\n  margin: 10px;\n}\n.workflow-editor-panel {\n  display: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy93b3JrZmxvdy9Xb3JrZmxvd0VkaXRvci5sZXNzIiwiaW5kZXgubGVzcyIsInNyYy93b3JrZmxvdy9jb21wb25lbnRzL0Zsb3dDYW52YXMubGVzcyIsInNyYy93b3JrZmxvdy9jb21wb25lbnRzL0NvbmZpZ2VyUGFuZWwubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjtBQ0FBO0VBQ0ksY0FBQTtBREVKO0FDSEE7RUFJUSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FERVI7QUNBUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBREVaO0FDbEJBO0VBb0JZLGtCQUFBO0VBQ0EseUJBQUE7QURDWjtBQ0NZO0VBQ0ksY0FBQTtBRENoQjtBQ3pCQTtFQTZCWSxrQkFBQTtFQUNBLFlBQUE7QUREWjtBQzdCQTtFQWlDZ0IsWUFBQTtFQUNBLHdCQUFBO0FERGhCO0FDakNBO0VBc0NnQixnQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBREZoQjtBQ3RDQTtFQTZDWSxrQkFBQTtFQUNBLGVBQUE7QURKWjtBQ01ZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QURKaEI7QUNsREE7RUEyRFksb0JBQUE7RUFDQSxrQkFBQTtFRE5WLHNCQUFzQjtFQ09aLHNCQUFBO0FETFo7QUNPWTtFQUNJLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtBRExoQjtBQzdEQTs7RUF3RVksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FEUFo7QUNyRUE7Ozs7RUFtRlksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBRFJaO0FDL0VBO0VBMkZZLE9BQUE7RUFDQSxTQUFBO0FEVFo7QUNuRkE7RUFnR1ksT0FBQTtFQUNBLFlBQUE7QURWWjtBQ3ZGQTtFQXFHWSxXQUFBO0VBQ0EsU0FBQTtBRFhaO0FDM0ZBO0VBMEdZLFdBQUE7RUFDQSxZQUFBO0FEWlo7QUMvRkE7RUFpSFEsV0FBQTtFQUNBLFlBQUE7RUFDQSxxaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FEZlI7QUNtQkE7RUFDSSxhQUFBO0FEakJKO0FDZ0JBO0VBSVEsc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QURqQlI7QUU5R0E7RUFDSSxhQUFBO0FGZ0hKIiwiZmlsZSI6ImluZGV4Lmxlc3MifQ== */";
styleInject(css_248z);

function WorkflowEditor(props) {
    let { startNodeModel } = props;
    let nodeMap = React.useMemo(() => getNodeMap(props.nodes), []);
    let initNodeModel = React.useMemo(() => startNodeModel || getDefaultStartNodeModel(nodeMap), []);
    const [nodeModel, setNodeModel] = React.useState(initNodeModel);
    const [peddingNode, setPeddingNode] = React.useState();
    const [currentNode, setCurrentNode] = React.useState();
    let contextValue = React.useMemo(() => {
        return getContextValue(props, nodeMap, nodeModel, setNodeModel, peddingNode, setPeddingNode, currentNode, setCurrentNode);
    }, [peddingNode, currentNode]);
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
function getContextValue(props, nodeMap, nodeModel, setNodeModel, peddingNode, setPeddingNode, currentNode, setCurrentNode) {
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
        },
        currentNode: currentNode,
        setCurrentNode: (currentNode) => {
            setCurrentNode(currentNode);
        }
    };
}

exports.FormEditor = FormEditor;
exports.PageEditor = PageEditor;
exports.WorkflowEditor = WorkflowEditor;
