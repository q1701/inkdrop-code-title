"use strict";Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"default",{enumerable:true,get:function(){return createTitledPreBlock}});var _react=_interop_require_default(require("react"));function _interop_require_default(obj){return obj&&obj.__esModule?obj:{default:obj}}function createTitledPreBlock(OrigPre){var Pre=function(props){var codeClassName=props.className;var hasTitle=codeClassName&&codeClassName.split(" ")[0]==="with-title";var OrigNode=function(props){return OrigPre?_react.default.createElement(OrigPre,props):_react.default.createElement("pre",props)};return hasTitle?_react.default.createElement("div",{className:"with-title-block"},_react.default.createElement(OrigNode,props)):_react.default.createElement(OrigNode,props)};return Pre}