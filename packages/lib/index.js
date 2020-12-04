'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var uuid = require('uuid');

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

var css_248z = ".flexColumn {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  vertical-align: top;\n}\n.bold {\n  font-weight: 700;\n}\n.BGYellow {\n  background: #ffa340;\n}\n.BGGreen {\n  background: #01ca83;\n}\n.Font13 {\n  font-size: 13px!important;\n}\n.Gray_9e {\n  color: #9e9e9e !important;\n}\n.mTop10 {\n  margin-top: 10px!important;\n}\n.workflow-editor {\n  display: flex;\n  flex: 1 1;\n  overflow: auto;\n}\n.workflow-editorContent {\n  overflow: auto;\n}\n.workflow-editor .flexColumn {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n}\n.workflow-editor .workflowBox {\n  padding: 20px 50px 0;\n  position: relative;\n}\n.workflow-editor .workflowBox::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 1px;\n  height: 100%;\n  background-color: #ccc;\n}\n.workflow-editor .workflowLineBtn {\n  padding: 20px 0;\n  width: 280px;\n  position: relative;\n}\n.workflow-editor .workflowLineBtn .icon-custom_add_circle {\n  width: 20px;\n  height: 20px;\n  display: block;\n  font-size: 20px;\n  cursor: pointer;\n  position: relative;\n  background: #f0f0f0;\n  color: #ccc;\n  margin: 0 auto;\n}\n.workflow-editor .workflowItem {\n  width: 280px;\n  background: #fff;\n  border-radius: 6px;\n  position: relative;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.16);\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n}\n.workflow-editor .workflowItem .workflowAvatars {\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: -20px;\n  left: 0;\n  right: 0;\n  height: 40px;\n  z-index: 2;\n  pointer-events: none;\n}\n.workflow-editor .workflowItem .workflowName {\n  width: 100%;\n  height: 60px;\n  position: relative;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n  font-size: 15px;\n  color: #fff;\n  padding: 26px 10px 0;\n  box-sizing: border-box;\n}\n.workflow-editor .workflowItem .workflowName .workflowNodeNameText {\n  padding: 0 6px;\n  height: 28px;\n  line-height: 28px;\n  box-sizing: border-box;\n  text-align: center;\n  border-radius: 3px;\n  display: inline-block;\n  max-width: 100%;\n}\n.workflow-editor .workflowItem .workflowContent {\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: 50px;\n}\n.workflow-editor .workflowBranch {\n  display: inline-flex;\n  position: relative;\n  padding-top: 13px;\n  background-color: #f5f5f9;\n}\n.workflow-editor .workflowBranch > .flexColumn {\n  border-top: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n}\n.workflow-editor .workflowBranch > .flexColumn .clearLeftBorder {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n}\n.workflow-editor .flow .flow-end {\n  width: 56px;\n  height: 32px;\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABACAQAAABokzttAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiCAkRLQN+59ZwAAAAfUlEQVRo3u3ZwQ2AIBAAQbFn69ce7qEumWng2BDC49Z1H1s7vz6AQIEC4c/WPfwH13Dg9Nudztv+DQqsE1gnsE5gncA6gXUC6wTWCawTWCewTmCdwLo1XRa8vWOYztv+BgXWCawTWCewTmCdwDqBdQLrBNYJrBNYJ7BOYN0Dws4H6yyzXK8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDgtMDlUMTc6NDU6MDMrMDg6MDBVMAcOAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA4LTA5VDE3OjQ1OjAzKzA4OjAwJG2/sgAAAABJRU5ErkJggg==) no-repeat;\n  background-size: 56px 32px;\n  margin: 30px auto;\n}\n.workflow-editor-panel {\n  display: none;\n}\n";
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
    return (React__default['default'].createElement("div", { className: "workflowItem" },
        React__default['default'].createElement("div", { className: "workflowAvatars flexRow" },
            React__default['default'].createElement("i", { className: "workflowAvatar BGYellow icon-worksheet" })),
        React__default['default'].createElement("div", { className: "workflowName TxtCenter BGYellow" },
            React__default['default'].createElement("div", { className: "workflowNodeNameText ellipsis bold" }, props.dataModel.name)),
        React__default['default'].createElement("div", { className: "workflowContent" })));
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

const contextInitValue = {
    editable: true,
    nodeMap: {
        [StartNode.id]: StartNode
    }
};
const WorkflowEditorContext = React.createContext(contextInitValue);

function Branch(props) {
    let branchs = props.branchs;
    return (React__default['default'].createElement("div", { className: "workflowBranch" },
        React__default['default'].createElement("i", { className: "workflowBranchBtn icon-workflow_add" }),
        branchs && branchs.length > 0 &&
            branchs.map((startNodeModel) => {
                React__default['default'].createElement(NodeList, { startNodeModel: startNodeModel });
            })));
}

function NodeList(props) {
    let { startNodeModel } = props;
    let { nodeMap, editable } = React.useContext(WorkflowEditorContext);
    let reactNodes = [];
    for (let nodeModel of startNodeModel) {
        let NodeViewer = nodeMap[nodeModel.subType].nodeViewer;
        let reactNode;
        if (nodeModel.branchs && nodeModel.branchs.length > 0) {
            reactNode = React__default['default'].createElement(Branch, { key: nodeModel.id, branchs: nodeModel.branchs });
        }
        else {
            reactNode = React__default['default'].createElement(NodeViewer, { key: nodeModel.id, dataModel: nodeModel });
        }
        let wrapper = (React__default['default'].createElement("div", { key: nodeModel.id, className: "flexColumn" },
            React__default['default'].createElement("section", { className: "workflowBox", "data-id": nodeModel.id }, reactNode),
            editable &&
                React__default['default'].createElement("div", { className: "workflowLineBtn" },
                    React__default['default'].createElement("i", { className: "icon-custom_add_circle" }))));
        reactNodes.push(wrapper);
    }
    return React__default['default'].createElement(React__default['default'].Fragment, null, reactNodes);
}

function Flow(props) {
    let { nodeMap, startNodeModel } = React.useContext(WorkflowEditorContext);
    if (!startNodeModel) {
        let sn = nodeMap[StartNode.id];
        startNodeModel = new NodeModel(sn.name, sn.type, sn.id, sn.defaultOptions(), []);
    }
    return (React__default['default'].createElement("div", { className: "flow" },
        React__default['default'].createElement(NodeList, { startNodeModel: startNodeModel }),
        React__default['default'].createElement(EndNode, Object.assign({}, props))));
}
function EndNode(props) {
    return (React__default['default'].createElement("div", { className: "flow-end" },
        React__default['default'].createElement("section", { className: "workflowEndBox" },
            React__default['default'].createElement("div", { className: "workflowEnd" }),
            React__default['default'].createElement("div", { className: "Font13 mTop10 Gray_9e" }, "\u6D41\u7A0B\u7ED3\u675F"))));
}

function FlowCanvas(props) {
    return (React__default['default'].createElement("div", { className: "workflowEditorContent workflow-editor-canvas" },
        React__default['default'].createElement(Flow, null)));
}

var css_248z$1 = ".flexColumn {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  vertical-align: top;\n}\n.bold {\n  font-weight: 700;\n}\n.BGYellow {\n  background: #ffa340;\n}\n.BGGreen {\n  background: #01ca83;\n}\n.Font13 {\n  font-size: 13px!important;\n}\n.Gray_9e {\n  color: #9e9e9e !important;\n}\n.mTop10 {\n  margin-top: 10px!important;\n}\n.workflow-editor {\n  display: flex;\n  flex: 1 1;\n  overflow: auto;\n}\n.workflow-editorContent {\n  overflow: auto;\n}\n.workflow-editor .flexColumn {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n}\n.workflow-editor .workflowBox {\n  padding: 20px 50px 0;\n  position: relative;\n}\n.workflow-editor .workflowBox::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 1px;\n  height: 100%;\n  background-color: #ccc;\n}\n.workflow-editor .workflowLineBtn {\n  padding: 20px 0;\n  width: 280px;\n  position: relative;\n}\n.workflow-editor .workflowLineBtn .icon-custom_add_circle {\n  width: 20px;\n  height: 20px;\n  display: block;\n  font-size: 20px;\n  cursor: pointer;\n  position: relative;\n  background: #f0f0f0;\n  color: #ccc;\n  margin: 0 auto;\n}\n.workflow-editor .workflowItem {\n  width: 280px;\n  background: #fff;\n  border-radius: 6px;\n  position: relative;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.16);\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n}\n.workflow-editor .workflowItem .workflowAvatars {\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: -20px;\n  left: 0;\n  right: 0;\n  height: 40px;\n  z-index: 2;\n  pointer-events: none;\n}\n.workflow-editor .workflowItem .workflowName {\n  width: 100%;\n  height: 60px;\n  position: relative;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n  font-size: 15px;\n  color: #fff;\n  padding: 26px 10px 0;\n  box-sizing: border-box;\n}\n.workflow-editor .workflowItem .workflowName .workflowNodeNameText {\n  padding: 0 6px;\n  height: 28px;\n  line-height: 28px;\n  box-sizing: border-box;\n  text-align: center;\n  border-radius: 3px;\n  display: inline-block;\n  max-width: 100%;\n}\n.workflow-editor .workflowItem .workflowContent {\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: 50px;\n}\n.workflow-editor .workflowBranch {\n  display: inline-flex;\n  position: relative;\n  padding-top: 13px;\n  background-color: #f5f5f9;\n}\n.workflow-editor .workflowBranch > .flexColumn {\n  border-top: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n}\n.workflow-editor .workflowBranch > .flexColumn .clearLeftBorder {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n}\n.workflow-editor .flow .flow-end {\n  width: 56px;\n  height: 32px;\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABACAQAAABokzttAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiCAkRLQN+59ZwAAAAfUlEQVRo3u3ZwQ2AIBAAQbFn69ce7qEumWng2BDC49Z1H1s7vz6AQIEC4c/WPfwH13Dg9Nudztv+DQqsE1gnsE5gncA6gXUC6wTWCawTWCewTmCdwLo1XRa8vWOYztv+BgXWCawTWCewTmCdwDqBdQLrBNYJrBNYJ7BOYN0Dws4H6yyzXK8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDgtMDlUMTc6NDU6MDMrMDg6MDBVMAcOAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA4LTA5VDE3OjQ1OjAzKzA4OjAwJG2/sgAAAABJRU5ErkJggg==) no-repeat;\n  background-size: 56px 32px;\n  margin: 30px auto;\n}\n";
styleInject(css_248z$1);

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
        editable: props.editable,
        nodeMap: nodeMap
    };
}

exports.FormEditor = FormEditor;
exports.PageEditor = PageEditor;
exports.WorkflowEditor = WorkflowEditor;
