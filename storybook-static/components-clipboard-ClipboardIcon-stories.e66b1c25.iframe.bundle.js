(self.webpackChunk_storybook_design_system=self.webpackChunk_storybook_design_system||[]).push([[5804],{"./src/components/clipboard/Clipboard.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{T:()=>Clipboard});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/copy-to-clipboard/index.js"),copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_storybook_theming__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs"),_tooltip_TooltipNote__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/tooltip/TooltipNote.tsx"),_tooltip_WithTooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/tooltip/WithTooltip.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children","toCopy","getCopyContent","copyOptions","resetTimeout","renderCopiedTooltip","renderUncopiedTooltip"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var Tooltip=(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_6__.zo)(_tooltip_WithTooltip__WEBPACK_IMPORTED_MODULE_4__.Z,{target:"e1lzlo4x0"})({name:"e0dnmk",styles:"cursor:pointer"}),Clipboard=function Clipboard(_ref){var children=_ref.children,toCopy=_ref.toCopy,getCopyContent=_ref.getCopyContent,copyOptions=_ref.copyOptions,resetTimeout=_ref.resetTimeout,renderCopiedTooltip=_ref.renderCopiedTooltip,renderUncopiedTooltip=_ref.renderUncopiedTooltip,props=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__.Z)(_ref,_excluded),_useState=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!1),_useState2=(0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8__.Z)(_useState,2),copied=_useState2[0],setCopied=_useState2[1];(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((function(){var timeoutId;return copied&&timeoutId&&clearTimeout(timeoutId),copied&&resetTimeout&&(timeoutId=setTimeout((function(){return setCopied(!1)}),resetTimeout)),function(){clearTimeout(timeoutId)}}),[copied]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Tooltip,_objectSpread(_objectSpread({onClick:function copy(){copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default()(toCopy||getCopyContent(),copyOptions)&&setCopied(!0)},hasChrome:!1,tooltip:copied?renderCopiedTooltip:renderUncopiedTooltip},props),{},{children:"function"==typeof children?children(copied):children}))};Clipboard.displayName="Clipboard",Clipboard.defaultProps={copyOptions:void 0,renderCopiedTooltip:function renderCopiedTooltip(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tooltip_TooltipNote__WEBPACK_IMPORTED_MODULE_3__.g,{note:"Copied"})},renderUncopiedTooltip:function renderUncopiedTooltip(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tooltip_TooltipNote__WEBPACK_IMPORTED_MODULE_3__.g,{note:"Copy to clipboard"})},resetTimeout:3e3,toCopy:void 0,getCopyContent:function getCopyContent(){return""}};try{Clipboard.displayName="Clipboard",Clipboard.__docgenInfo={description:"",displayName:"Clipboard",props:{toCopy:{defaultValue:{value:"undefined"},description:"",name:"toCopy",required:!1,type:{name:"string"}},getCopyContent:{defaultValue:{value:"() => ''"},description:"",name:"getCopyContent",required:!1,type:{name:"() => string"}},copyOptions:{defaultValue:{value:"undefined"},description:"",name:"copyOptions",required:!1,type:{name:"any"}},renderCopiedTooltip:{defaultValue:{value:'() => <TooltipNote note="Copied" />'},description:"",name:"renderCopiedTooltip",required:!1,type:{name:"() => ReactNode"}},renderUncopiedTooltip:{defaultValue:{value:'() => <TooltipNote note="Copy to clipboard" />'},description:"",name:"renderUncopiedTooltip",required:!1,type:{name:"() => ReactNode"}},resetTimeout:{defaultValue:{value:"3000"},description:"",name:"resetTimeout",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/clipboard/Clipboard.tsx#Clipboard"]={docgenInfo:Clipboard.__docgenInfo,name:"Clipboard",path:"src/components/clipboard/Clipboard.tsx#Clipboard"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/clipboard/ClipboardIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{K:()=>ClipboardIcon});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_storybook_theming__WEBPACK_IMPORTED_MODULE_6__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs")),_shared_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/shared/styles.ts"),_Icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Icon.tsx"),_Clipboard__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/clipboard/Clipboard.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var StyledClipboard=(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_6__.zo)(_Clipboard__WEBPACK_IMPORTED_MODULE_4__.T,{target:"ewp3f4r1"})("line-height:10px;padding:10px;color:",_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.mediumdark,";&:hover{color:",_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.darker,";}"),StyledIcon=(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_6__.zo)(_Icon__WEBPACK_IMPORTED_MODULE_3__.J,{target:"ewp3f4r0"})("width:12px;height:12px;vertical-align:top;color:",(function(props){return props.copied?_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.positive:"inherit"}),";"),ClipboardIcon=function ClipboardIcon(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledClipboard,_objectSpread(_objectSpread({},props),{},{children:function children(copied){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledIcon,{icon:copied?"check":"copy",copied})}}))};ClipboardIcon.displayName="ClipboardIcon";try{ClipboardIcon.displayName="ClipboardIcon",ClipboardIcon.__docgenInfo={description:"",displayName:"ClipboardIcon",props:{toCopy:{defaultValue:null,description:"",name:"toCopy",required:!1,type:{name:"string"}},getCopyContent:{defaultValue:null,description:"",name:"getCopyContent",required:!1,type:{name:"() => string"}},copyOptions:{defaultValue:null,description:"",name:"copyOptions",required:!1,type:{name:"any"}},resetTimeout:{defaultValue:null,description:"",name:"resetTimeout",required:!1,type:{name:"number"}},renderCopiedTooltip:{defaultValue:null,description:"",name:"renderCopiedTooltip",required:!1,type:{name:"() => ReactNode"}},renderUncopiedTooltip:{defaultValue:null,description:"",name:"renderUncopiedTooltip",required:!1,type:{name:"() => ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/clipboard/ClipboardIcon.tsx#ClipboardIcon"]={docgenInfo:ClipboardIcon.__docgenInfo,name:"ClipboardIcon",path:"src/components/clipboard/ClipboardIcon.tsx#ClipboardIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/tooltip/Tooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{u:()=>Tooltip});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_storybook_theming__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs")),_shared_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/shared/styles.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["placement","hasChrome","children","arrowProps","tooltipRef","arrowRef","zIndex"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var ifPlacementEquals=function ifPlacementEquals(props,placement,value){var fallback=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return props["data-placement"].split("-")[0]===placement?value:fallback},Arrow=(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_4__.zo)("div",{target:"e1sfricw1"})("position:absolute;border-style:solid;display:",(function(props){return props.isVisible?"block":"none"}),";",(function(props){return(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_4__.iv)("margin-bottom:",ifPlacementEquals(props,"top",0,8),"px;margin-top:",ifPlacementEquals(props,"bottom",0,8),"px;margin-right:",ifPlacementEquals(props,"left",0,8),"px;margin-left:",ifPlacementEquals(props,"right",0,8),"px;bottom:",ifPlacementEquals(props,"top",-8,"auto"),"px;top:",ifPlacementEquals(props,"bottom",-8,"auto"),"px;right:",ifPlacementEquals(props,"left",-8,"auto"),"px;left:",ifPlacementEquals(props,"right",-8,"auto"),"px;border-bottom-width:",ifPlacementEquals(props,"top",0,8),"px;border-top-width:",ifPlacementEquals(props,"bottom",0,8),"px;border-right-width:",ifPlacementEquals(props,"left",0,8),"px;border-left-width:",ifPlacementEquals(props,"right",0,8),"px;border-top-color:",ifPlacementEquals(props,"top","white","transparent"),";border-bottom-color:",ifPlacementEquals(props,"bottom","white","transparent"),";border-left-color:",ifPlacementEquals(props,"left","white","transparent"),";border-right-color:",ifPlacementEquals(props,"right","white","transparent"),";")}),";"),TooltipWrapper=(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_4__.zo)("div",{target:"e1sfricw0"})("display:",(function(props){return props.hidden?"none":"inline-block"}),";z-index:",(function(props){return props.zIndex}),";",(function(props){return!props.hasChrome&&"\n      margin-bottom: ".concat(ifPlacementEquals(props,"top",8),"px;\n      margin-bottom: ").concat(ifPlacementEquals(props,"top-start",8),"px;\n      margin-top: ").concat(ifPlacementEquals(props,"bottom",8),"px;\n      margin-top: ").concat(ifPlacementEquals(props,"bottom-start",8),"px;\n      margin-left: ").concat(ifPlacementEquals(props,"right",8),"px;\n      margin-right: ").concat(ifPlacementEquals(props,"left",8),"px;\n    ")}),";",(function(props){return props.hasChrome&&"\n      margin-bottom: ".concat(ifPlacementEquals(props,"top",10),"px;\n      margin-top: ").concat(ifPlacementEquals(props,"bottom",10),"px;\n      margin-left: ").concat(ifPlacementEquals(props,"right",10),"px;\n      margin-right: ").concat(ifPlacementEquals(props,"left",10),"px;\n\n      background: rgba(255, 255, 255, 0.97);\n\n      filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.05)) drop-shadow(0 1px 3px rgba(0, 0, 0, 0.1));\n      border-radius: ").concat(_shared_styles__WEBPACK_IMPORTED_MODULE_2__.W0.borderRadius.small,"px;\n      font-size: ").concat(_shared_styles__WEBPACK_IMPORTED_MODULE_2__.cp.size.s1,"px;\n    ")}),";"),Tooltip=function Tooltip(_ref){var _ref$placement=_ref.placement,placement=void 0===_ref$placement?"top":_ref$placement,_ref$hasChrome=_ref.hasChrome,hasChrome=void 0===_ref$hasChrome||_ref$hasChrome,children=_ref.children,arrowProps=_ref.arrowProps,tooltipRef=_ref.tooltipRef,arrowRef=_ref.arrowRef,_ref$zIndex=_ref.zIndex,zIndex=void 0===_ref$zIndex?_shared_styles__WEBPACK_IMPORTED_MODULE_2__.W5.tooltip:_ref$zIndex,props=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__.Z)(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(TooltipWrapper,_objectSpread(_objectSpread({hasChrome,"data-placement":placement,ref:tooltipRef,zIndex},props),{},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Arrow,_objectSpread({isVisible:hasChrome,"data-placement":placement,ref:arrowRef},arrowProps)),children]}))};Tooltip.displayName="Tooltip";try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{hasChrome:{defaultValue:{value:"true"},description:"",name:"hasChrome",required:!1,type:{name:"boolean"}},arrowProps:{defaultValue:null,description:"",name:"arrowProps",required:!1,type:{name:"{ theme?: Theme; as?: ElementType<any>; } & ArrowProps & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & { ...; }"}},placement:{defaultValue:{value:"top"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"auto-start"'},{value:'"auto"'},{value:'"auto-end"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"bottom-end"'},{value:'"bottom-start"'},{value:'"left-end"'},{value:'"left-start"'}]}},arrowRef:{defaultValue:null,description:"",name:"arrowRef",required:!1,type:{name:"any"}},tooltipRef:{defaultValue:null,description:"",name:"tooltipRef",required:!1,type:{name:"any"}},zIndex:{defaultValue:{value:"2147483647"},description:"",name:"zIndex",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},hidden:{defaultValue:null,description:"",name:"hidden",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/tooltip/Tooltip.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"src/components/tooltip/Tooltip.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/tooltip/TooltipNote.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{g:()=>TooltipNote});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_storybook_theming__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs")),_shared_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/shared/styles.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["note"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var Note=(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_4__.zo)("div",{target:"e1vthhiv0"})("padding:2px 6px;line-height:16px;font-size:10px;font-weight:",_shared_styles__WEBPACK_IMPORTED_MODULE_2__.cp.weight.bold,";color:",_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.lightest,";box-shadow:0 0 5px 0 rgba(0, 0, 0, 0.3);border-radius:",_shared_styles__WEBPACK_IMPORTED_MODULE_2__.W0.borderRadius.small,"px;white-space:nowrap;pointer-events:none;z-index:-1;background:rgba(0, 0, 0, 0.6);margin:6px;"),TooltipNote=function TooltipNote(_ref){var note=_ref.note,rest=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__.Z)(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Note,_objectSpread(_objectSpread({},rest),{},{children:note}))};TooltipNote.displayName="TooltipNote";try{TooltipNote.displayName="TooltipNote",TooltipNote.__docgenInfo={description:"",displayName:"TooltipNote",props:{note:{defaultValue:null,description:"",name:"note",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/tooltip/TooltipNote.tsx#TooltipNote"]={docgenInfo:TooltipNote.__docgenInfo,name:"TooltipNote",path:"src/components/tooltip/TooltipNote.tsx#TooltipNote"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/tooltip/WithTooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_storybook_theming__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs"),react_popper_tooltip__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/react-popper-tooltip/dist/esm/react-popper-tooltip.js"),uuid__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/uuid/index.js"),uuid__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__),_Tooltip__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/tooltip/Tooltip.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["tabIndex","tagName","onClick","onMouseEnter","onMouseLeave"],_excluded2=["children","closeOnClick","delayHide","delayShow","hasChrome","modifiers","onVisibilityChange","placement","portalContainer","startOpen","tagName","tooltip","tooltipZIndex","trigger"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var ButtonContainer=(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_5__.zo)("button",{target:"emjsjmc1"})("background:transparent;border:0;cursor:",(function(props){return"hover"===props.trigger?"default":"pointer"}),";display:inline-block;font-size:inherit;font-weight:inherit;margin:0;padding:0;text-align:inherit;text-decoration:none;"),StyledTooltip=(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_5__.zo)(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.u,{target:"emjsjmc0"})((function(props){return!props.hasTooltipContent&&"display: none;"}),";"),isDescendantOfAction=function isDescendantOfAction(element){var parentElement=element.parentElement;return"BODY"!==parentElement.tagName&&("A"===parentElement.tagName||"BUTTON"===parentElement.tagName||isDescendantOfAction(parentElement))},AsComponent=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function(_ref,ref){var tabIndex=_ref.tabIndex,tagName=_ref.tagName,onClick=_ref.onClick,onMouseEnter=_ref.onMouseEnter,onMouseLeave=_ref.onMouseLeave,props=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__.Z)(_ref,_excluded),Component=tagName||ButtonContainer,asProps=_objectSpread({ref,onClick,onMouseEnter,onMouseLeave,onFocus:onMouseEnter,onBlur:onMouseLeave,role:"button"},props),onKeyDown=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return function(event){onClick&&("Enter"!==event.key&&" "!==event.key||(event.preventDefault(),onClick(event)))}}),[onClick]);return tagName&&(asProps.tabIndex=tabIndex||0,asProps.onKeyDown=onKeyDown),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Component,_objectSpread({},asProps))}));AsComponent.displayName="AsComponent";var WithTooltip=function WithTooltip(_ref2){var _children=_ref2.children,_ref2$closeOnClick=_ref2.closeOnClick,closeOnClick=void 0!==_ref2$closeOnClick&&_ref2$closeOnClick,_ref2$delayHide=_ref2.delayHide,delayHide=void 0===_ref2$delayHide?100:_ref2$delayHide,_ref2$delayShow=_ref2.delayShow,delayShow=void 0===_ref2$delayShow?0:_ref2$delayShow,_ref2$hasChrome=_ref2.hasChrome,hasChrome=void 0===_ref2$hasChrome||_ref2$hasChrome,_ref2$modifiers=_ref2.modifiers,modifiers=void 0===_ref2$modifiers?{}:_ref2$modifiers,_ref2$onVisibilityCha=_ref2.onVisibilityChange,onVisibilityChange=void 0===_ref2$onVisibilityCha?function(){}:_ref2$onVisibilityCha,_ref2$placement=_ref2.placement,placement=void 0===_ref2$placement?"top":_ref2$placement,_ref2$portalContainer=_ref2.portalContainer,portalContainer=void 0===_ref2$portalContainer?void 0:_ref2$portalContainer,_ref2$startOpen=_ref2.startOpen,startOpen=void 0!==_ref2$startOpen&&_ref2$startOpen,_ref2$tagName=_ref2.tagName,tagName=void 0===_ref2$tagName?void 0:_ref2$tagName,_ref2$tooltip=_ref2.tooltip,_tooltip=void 0===_ref2$tooltip?void 0:_ref2$tooltip,_ref2$tooltipZIndex=_ref2.tooltipZIndex,tooltipZIndex=void 0===_ref2$tooltipZIndex?void 0:_ref2$tooltipZIndex,_ref2$trigger=_ref2.trigger,trigger=void 0===_ref2$trigger?"hover":_ref2$trigger,props=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__.Z)(_ref2,_excluded2),id=react__WEBPACK_IMPORTED_MODULE_1__.useMemo((function(){return uuid__WEBPACK_IMPORTED_MODULE_2___default().v4()}),[]),_useState=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(startOpen),_useState2=(0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7__.Z)(_useState,2),isTooltipShown=_useState2[0],setTooltipShown=_useState2[1],closeTooltip=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return function(){return setTooltipShown(!1)}}),[setTooltipShown]),closeTooltipOnClick=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return function(event){closeOnClick&&isDescendantOfAction(event.target)&&closeTooltip()}}),[closeOnClick,closeTooltip]),defaultPortalContainer="undefined"!=typeof window?document.getElementById("storybook-root")||document.getElementById("root")||document.body:void 0;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_popper_tooltip__WEBPACK_IMPORTED_MODULE_8__.Z,{delayHide,delayShow,placement,trigger,tooltipShown:isTooltipShown,onVisibilityChange:function handleVisibilityChange(isVisible){onVisibilityChange(isVisible),setTooltipShown(isVisible)},modifiers,portalContainer:portalContainer||defaultPortalContainer,tooltip:function tooltip(_ref3){var getTooltipProps=_ref3.getTooltipProps,getArrowProps=_ref3.getArrowProps,tooltipRef=_ref3.tooltipRef,arrowRef=_ref3.arrowRef,tooltipPlacement=_ref3.placement;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(StyledTooltip,_objectSpread(_objectSpread({hidden:void 0,hasChrome,placement:tooltipPlacement,tooltipRef,arrowRef,arrowProps:getArrowProps(),onClick:closeTooltipOnClick},getTooltipProps()),{},{id,role:"tooltip",hasTooltipContent:!!_tooltip,zIndex:tooltipZIndex,children:"function"==typeof _tooltip?_tooltip({onHide:closeTooltip}):_tooltip}))},children:function children(_ref4){var getTriggerProps=_ref4.getTriggerProps,triggerRef=_ref4.triggerRef;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(AsComponent,_objectSpread(_objectSpread(_objectSpread({tagName,trigger,ref:triggerRef},getTriggerProps()),props),{},{"aria-controls":id,"aria-describedby":isTooltipShown?id:void 0,children:_children}))}})};WithTooltip.displayName="WithTooltip";const __WEBPACK_DEFAULT_EXPORT__=WithTooltip;try{AsComponent.displayName="AsComponent",AsComponent.__docgenInfo={description:"",displayName:"AsComponent",props:{tagName:{defaultValue:{value:"undefined"},description:"",name:"tagName",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}},trigger:{defaultValue:{value:"hover"},description:"",name:"trigger",required:!1,type:{name:"Trigger"}},closeOnClick:{defaultValue:{value:"false"},description:"",name:"closeOnClick",required:!1,type:{name:"boolean"}},placement:{defaultValue:{value:"top"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"auto-start"'},{value:'"auto"'},{value:'"auto-end"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"bottom-end"'},{value:'"bottom-start"'},{value:'"left-end"'},{value:'"left-start"'}]}},modifiers:{defaultValue:{value:"{}"},description:"",name:"modifiers",required:!1,type:{name:"any"}},hasChrome:{defaultValue:{value:"true"},description:"",name:"hasChrome",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:{value:"undefined"},description:"",name:"tooltip",required:!1,type:{name:"Function | ReactNode"}},startOpen:{defaultValue:{value:"false"},description:"",name:"startOpen",required:!1,type:{name:"boolean"}},delayHide:{defaultValue:{value:"100"},description:"",name:"delayHide",required:!1,type:{name:"number"}},delayShow:{defaultValue:{value:"0"},description:"",name:"delayShow",required:!1,type:{name:"number"}},onVisibilityChange:{defaultValue:{value:"() => {}"},description:"",name:"onVisibilityChange",required:!1,type:{name:"Function"}},portalContainer:{defaultValue:{value:"undefined"},description:"",name:"portalContainer",required:!1,type:{name:"HTMLElement"}},tooltipZIndex:{defaultValue:{value:"undefined"},description:"",name:"tooltipZIndex",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/tooltip/WithTooltip.tsx#AsComponent"]={docgenInfo:AsComponent.__docgenInfo,name:"AsComponent",path:"src/components/tooltip/WithTooltip.tsx#AsComponent"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/copy-to-clipboard/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var deselectCurrent=__webpack_require__("./node_modules/toggle-selection/index.js"),clipboardToIE11Formatting={"text/plain":"Text","text/html":"Url",default:"Text"},defaultMessage="Copy to clipboard: #{key}, Enter";module.exports=function copy(text,options){var debug,message,reselectPrevious,range,selection,mark,success=!1;options||(options={}),debug=options.debug||!1;try{if(reselectPrevious=deselectCurrent(),range=document.createRange(),selection=document.getSelection(),(mark=document.createElement("span")).textContent=text,mark.style.all="unset",mark.style.position="fixed",mark.style.top=0,mark.style.clip="rect(0, 0, 0, 0)",mark.style.whiteSpace="pre",mark.style.webkitUserSelect="text",mark.style.MozUserSelect="text",mark.style.msUserSelect="text",mark.style.userSelect="text",mark.addEventListener("copy",(function(e){if(e.stopPropagation(),options.format)if(e.preventDefault(),void 0===e.clipboardData){debug&&console.warn("unable to use e.clipboardData"),debug&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var format=clipboardToIE11Formatting[options.format]||clipboardToIE11Formatting.default;window.clipboardData.setData(format,text)}else e.clipboardData.clearData(),e.clipboardData.setData(options.format,text);options.onCopy&&(e.preventDefault(),options.onCopy(e.clipboardData))})),document.body.appendChild(mark),range.selectNodeContents(mark),selection.addRange(range),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");success=!0}catch(err){debug&&console.error("unable to copy using execCommand: ",err),debug&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(options.format||"text",text),options.onCopy&&options.onCopy(window.clipboardData),success=!0}catch(err){debug&&console.error("unable to copy using clipboardData: ",err),debug&&console.error("falling back to prompt"),message=function format(message){var copyKey=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return message.replace(/#{\s*key\s*}/g,copyKey)}("message"in options?options.message:defaultMessage),window.prompt(message,text)}}finally{selection&&("function"==typeof selection.removeRange?selection.removeRange(range):selection.removeAllRanges()),mark&&document.body.removeChild(mark),reselectPrevious()}return success}},"./node_modules/toggle-selection/index.js":module=>{module.exports=function(){var selection=document.getSelection();if(!selection.rangeCount)return function(){};for(var active=document.activeElement,ranges=[],i=0;i<selection.rangeCount;i++)ranges.push(selection.getRangeAt(i));switch(active.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":active.blur();break;default:active=null}return selection.removeAllRanges(),function(){"Caret"===selection.type&&selection.removeAllRanges(),selection.rangeCount||ranges.forEach((function(range){selection.addRange(range)})),active&&active.focus()}}},"./src/components/clipboard/ClipboardIcon.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _ClipboardIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/clipboard/ClipboardIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import React from 'react';\n\nimport { ClipboardIcon } from './ClipboardIcon';\n\nexport default {\n  title: 'Clipboard/ClipboardIcon',\n};\n\nexport const Default = () => (\n  <div style={{ padding: '3em' }}>\n    <ClipboardIcon toCopy=\"value\" />\n  </div>\n);\n",locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:13},startBody:{col:23,line:9},endBody:{col:1,line:13}}}}},title:"Clipboard/ClipboardIcon"};var Default=function Default(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{padding:"3em"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ClipboardIcon__WEBPACK_IMPORTED_MODULE_1__.K,{toCopy:"value"})})};Default.displayName="Default";var __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'function Default() {\n  return /*#__PURE__*/_jsx("div", {\n    style: {\n      padding: \'3em\'\n    },\n    children: /*#__PURE__*/_jsx(ClipboardIcon, {\n      toCopy: "value"\n    })\n  });\n}',...Default.parameters?.docs?.source}}}}}]);