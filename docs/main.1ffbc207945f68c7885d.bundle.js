(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{294:function(module,exports,__webpack_require__){__webpack_require__(295),__webpack_require__(441),module.exports=__webpack_require__(442)},359:function(module,exports){},442:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(125);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)((function loadStories(){__webpack_require__(631)}),module)}.call(this,__webpack_require__(226)(module))},62:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Workspace_components_1_labeled_checkbox_material_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(181),C_Workspace_components_1_labeled_checkbox_material_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(283),C_Workspace_components_1_labeled_checkbox_material_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(284),C_Workspace_components_1_labeled_checkbox_material_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(289),C_Workspace_components_1_labeled_checkbox_material_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(290),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),_material_ui_core__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(638),_material_ui_core__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(637),styles_checkbox={padding:"0 5px 0 0"},styles_label={marginRight:7,whiteSpace:"nowrap"},LabeledCheckboxMaterialUi=function(_React$PureComponent){Object(C_Workspace_components_1_labeled_checkbox_material_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(LabeledCheckboxMaterialUi,_React$PureComponent);var _super=Object(C_Workspace_components_1_labeled_checkbox_material_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(LabeledCheckboxMaterialUi);function LabeledCheckboxMaterialUi(){var _this;Object(C_Workspace_components_1_labeled_checkbox_material_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,LabeledCheckboxMaterialUi);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_super.call.apply(_super,[this].concat(args))).isEmpty=function(obj){return void 0===obj||("string"==typeof obj&&0===obj.length||"object"==typeof obj&&0===Object.keys(obj).length)},_this.handleChange=function(event){var onChange=_this.props.onChange;onChange&&onChange(event.target.checked)},_this}return Object(C_Workspace_components_1_labeled_checkbox_material_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(LabeledCheckboxMaterialUi,[{key:"render",value:function render(){return react__WEBPACK_IMPORTED_MODULE_5__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,{control:this.getCheckbox(),disabled:this.props.disabled,label:this.props.label,style:this.getStyleLabel()})}},{key:"getCheckbox",value:function getCheckbox(){var _this$props=this.props,color=_this$props.color,checked=_this$props.checked,disabled=_this$props.disabled,label=_this$props.label,value=_this$props.value,cbColor=this.isEmpty(color)?"primary":color,cbValue=this.isEmpty(value)?label:value;return react__WEBPACK_IMPORTED_MODULE_5__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,{checked:checked,color:cbColor,disabled:disabled,onChange:this.handleChange,value:cbValue,style:this.getStyleCheckbox()})}},{key:"getStyleLabel",value:function getStyleLabel(){var styleLabel=this.props.styleLabel;return this.isEmpty(styleLabel)?styles_label:Object(C_Workspace_components_1_labeled_checkbox_material_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},styles_label,{},styleLabel)}},{key:"getStyleCheckbox",value:function getStyleCheckbox(){var styleCheckbox=this.props.styleCheckbox;return this.isEmpty(styleCheckbox)?styles_checkbox:Object(C_Workspace_components_1_labeled_checkbox_material_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},styles_checkbox,{},styleCheckbox)}}]),LabeledCheckboxMaterialUi}(react__WEBPACK_IMPORTED_MODULE_5__.PureComponent);__webpack_exports__.a=LabeledCheckboxMaterialUi},631:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _src_LabeledCheckboxMaterialUi__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(62),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(125),style={height:20},styles={checkbox:{color:"#008000"},label:{color:"#888888",fontStyle:"italic",fontWeight:"bold",textDecoration:"underline"}},showSelectedValue=function showSelectedValue(id){return function(checked){return document.getElementById(id).textContent=checked?"selected":"not selected"}};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("LabeledCheckboxMaterialUi",module).addParameters({options:{showPanel:!1}}).add("with label",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_LabeledCheckboxMaterialUi__WEBPACK_IMPORTED_MODULE_0__.a,{label:"I like it",onChange:showSelectedValue("lcbmui1")}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:style}),"Selected value: ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{id:"lcbmui1"}))})).add("with value",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_LabeledCheckboxMaterialUi__WEBPACK_IMPORTED_MODULE_0__.a,{label:"I like it",value:"aValue",onChange:showSelectedValue("lcbmui2")}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:style}),"Selected value: ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{id:"lcbmui2"}))})).add("controlled",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_LabeledCheckboxMaterialUi__WEBPACK_IMPORTED_MODULE_0__.a,{label:"Checked",checked:!0,onChange:showSelectedValue("lcbmui3")}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_LabeledCheckboxMaterialUi__WEBPACK_IMPORTED_MODULE_0__.a,{label:"Unchecked",checked:!1,onChange:showSelectedValue("lcbmui3")}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:style}),"Selected value: ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{id:"lcbmui3"}))})).add("disabled",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_LabeledCheckboxMaterialUi__WEBPACK_IMPORTED_MODULE_0__.a,{label:"Disabled",disabled:!0,onChange:showSelectedValue("lcbmui4")}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:style}),"Selected value: ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{id:"lcbmui4"}))})).add("styled",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_LabeledCheckboxMaterialUi__WEBPACK_IMPORTED_MODULE_0__.a,{label:"Checkbox and label styled",styleCheckbox:styles.checkbox,styleLabel:styles.label,onChange:showSelectedValue("lcbmui5")}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:style}),"Selected value: ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{id:"lcbmui5"}))}))}.call(this,__webpack_require__(226)(module))}},[[294,1,2]]]);
//# sourceMappingURL=main.1ffbc207945f68c7885d.bundle.js.map