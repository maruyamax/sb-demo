"use strict";(self.webpackChunk_storybook_design_system=self.webpackChunk_storybook_design_system||[]).push([[8897,30],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties});var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=(0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__.Z)(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}},"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutPropertiesLoose})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}__webpack_require__.d(__webpack_exports__,{Z:()=>_slicedToArray})},"./src/images/Illustrations.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ColoredIcons:()=>ColoredIcons,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),_storybook_theming__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs")),_colored_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/images/colored-icons/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import React from 'react';\nimport { styled } from '@storybook/theming';\n\nimport * as coloredIcons from './colored-icons';\n\nexport default {\n  title: 'Images',\n};\n\nconst Grid = styled.div`\n  display: flex;\n  flex-wrap: wrap;\n  margin: 3rem;\n`;\n\nconst Item = styled.div`\n  display: inline-flex;\n  align-items: center;\n  flex: 0 0 20%;\n  margin-right: 5%;\n  margin-bottom: 20px;\n\n  svg {\n    width: 32px;\n    height: 32px;\n    margin-right: 10px;\n  }\n`;\n\nexport const ColoredIcons = () => (\n  <Grid>\n    {Object.entries(coloredIcons).map(([name, Icon]) => (\n      <Item key={name}>\n        <Icon /> {name}\n      </Item>\n    ))}\n  </Grid>\n);\n",locationsMap:{"colored-icons":{startLoc:{col:28,line:30},endLoc:{col:1,line:38},startBody:{col:28,line:30},endBody:{col:1,line:38}}}}},title:"Images"};var Grid=(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_3__.zo)("div",{target:"e1wfgtiq1"})({name:"lgurkn",styles:"display:flex;flex-wrap:wrap;margin:3rem"}),Item=(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_3__.zo)("div",{target:"e1wfgtiq0"})({name:"1nt256m",styles:"display:inline-flex;align-items:center;flex:0 0 20%;margin-right:5%;margin-bottom:20px;svg{width:32px;height:32px;margin-right:10px;}"}),ColoredIcons=function ColoredIcons(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Grid,{children:Object.entries(_colored_icons__WEBPACK_IMPORTED_MODULE_1__).map((function(_ref){var _ref2=(0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.Z)(_ref,2),name=_ref2[0],Icon=_ref2[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Item,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Icon,{})," ",name]},name)}))})};ColoredIcons.displayName="ColoredIcons";var __namedExportsOrder=["ColoredIcons"];ColoredIcons.parameters={...ColoredIcons.parameters,docs:{...ColoredIcons.parameters?.docs,source:{originalSource:'function ColoredIcons() {\n  return /*#__PURE__*/_jsx(Grid, {\n    children: Object.entries(coloredIcons).map(function (_ref) {\n      var _ref2 = _slicedToArray(_ref, 2),\n        name = _ref2[0],\n        Icon = _ref2[1];\n      return /*#__PURE__*/_jsxs(Item, {\n        children: [/*#__PURE__*/_jsx(Icon, {}), " ", name]\n      }, name);\n    })\n  });\n}',...ColoredIcons.parameters?.docs?.source}}}}}]);