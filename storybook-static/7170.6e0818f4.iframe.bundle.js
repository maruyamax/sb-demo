"use strict";(self.webpackChunk_storybook_design_system=self.webpackChunk_storybook_design_system||[]).push([[7170],{"./src/components/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_storybook_theming__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs"),polished__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/polished/dist/polished.esm.js"),_shared_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/shared/styles.ts"),_shared_animation__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/shared/animation.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children","isDisabled","isLoading","loadingText","isLink","ButtonWrapper","appearance"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var Text=(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_5__.zo)("span",{target:"eotfes63"})({name:"x9illq",styles:"display:inline-block;vertical-align:top"}),Loading=(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_5__.zo)("span",{target:"eotfes62"})({name:"142i4ns",styles:"position:absolute;top:50%;left:0;right:0;opacity:0"}),APPEARANCES_PRIMARY="primary",APPEARANCES_PRIMARY_OUTLINE="primaryOutline",APPEARANCES_SECONDARY="secondary",APPEARANCES_SECONDARY_OUTLINE="secondaryOutline",APPEARANCES_TERTIARY="tertiary",APPEARANCES_OUTLINE="outline",APPEARANCES_INVERSE_PRIMARY="inversePrimary",APPEARANCES_INVERSE_SECONDARY="inverseSecondary",APPEARANCES_INVERSE_OUTLINE="inverseOutline",APPEARANCES_INVERSE="inverse",APPEARANCES_INVERSE_NO_CHROME="inverseNoChrome",SIZES_SMALL="small",StyledButton=(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_5__.zo)("button",{target:"eotfes61"})("border:0;border-radius:3em;cursor:pointer;display:inline-block;overflow:hidden;padding:",(function(props){return props.size===SIZES_SMALL?"8px 16px":"13px 20px"}),";position:relative;text-align:center;text-decoration:none;transition:all 150ms ease-out;transform:translate3d(0, 0, 0);will-change:transform;vertical-align:top;white-space:nowrap;user-select:none;opacity:1;margin:0;background:transparent;font-size:",(function(props){return props.size===SIZES_SMALL?_shared_styles__WEBPACK_IMPORTED_MODULE_2__.cp.size.s1:_shared_styles__WEBPACK_IMPORTED_MODULE_2__.cp.size.s2}),"px;font-weight:",_shared_styles__WEBPACK_IMPORTED_MODULE_2__.cp.weight.extrabold,";line-height:1;",(function(props){return!props.isLoading&&"\n      &:hover {\n        transform: translate3d(0, -2px, 0);\n        box-shadow: rgba(0, 0, 0, 0.2) 0 2px 6px 0;\n      }\n\n      &:active {\n        transform: translate3d(0, 0, 0);\n      }\n    "})," ",Text,"{transform:scale3d(1, 1, 1) translate3d(0, 0, 0);transition:transform 700ms ",_shared_animation__WEBPACK_IMPORTED_MODULE_3__.Ui.rubber,";opacity:1;}",Loading,"{transform:translate3d(0, 100%, 0);}svg{height:",(function(props){return props.size===SIZES_SMALL?"12":"14"}),"px;width:",(function(props){return props.size===SIZES_SMALL?"12":"14"}),"px;vertical-align:top;margin-right:",(function(props){return props.size===SIZES_SMALL?"4":"6"}),"px;margin-top:",(function(props){return props.size===SIZES_SMALL?"0":"-1"}),"px;margin-bottom:",(function(props){return props.size===SIZES_SMALL?"0":"-1"}),"px;pointer-events:none;}",(function(props){return props.disabled&&"\n      cursor: not-allowed !important;\n      opacity: 0.5;\n      &:hover {\n        transform: none;\n      }\n    "})," ",(function(props){return props.isUnclickable&&"\n      cursor: default !important;\n      pointer-events: none;\n      &:hover {\n        transform: none;\n      }\n    "})," ",(function(props){return props.isLoading&&"\n      cursor: progress !important;\n      opacity: 0.7;\n\n      ".concat(Loading," {\n        transition: transform 700ms ").concat(_shared_animation__WEBPACK_IMPORTED_MODULE_3__.Ui.rubber,";\n        transform: translate3d(0, -50%, 0);\n        opacity: 1;\n      }\n\n      ").concat(Text," {\n        transform: scale3d(0, 0, 1) translate3d(0, -100%, 0);\n        opacity: 0;\n      }\n\n      &:hover {\n        transform: none;\n      }\n    ")})," ",(function(props){return props.containsIcon&&"\n      svg {\n        display: block;\n        margin: 0;\n        height: ".concat(props.size===SIZES_SMALL?"14":"16","px;\n        width: ").concat(props.size===SIZES_SMALL?"14":"16","px;\n      }\n      padding: ").concat(props.size===SIZES_SMALL?"7":"12","px;\n    ")})," ",(function(props){return props.appearance===APPEARANCES_PRIMARY&&"\n      background: ".concat(_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.primary,";\n      color: ").concat(_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.lightest,";\n\n      ").concat(!props.isLoading&&"\n          &:hover {\n            background: ".concat((0,polished__WEBPACK_IMPORTED_MODULE_6__._j)(.05,_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.primary),";\n          }\n          &:active {\n            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;\n          }\n        "),"\n    ")})," ",(function(props){return props.appearance===APPEARANCES_SECONDARY&&"\n      background: ".concat(_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.secondary,";\n      color: ").concat(_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.lightest,";\n\n      ").concat(!props.isLoading&&"\n          &:hover {\n            background: ".concat((0,polished__WEBPACK_IMPORTED_MODULE_6__._j)(.05,_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.secondary),";\n          }\n          &:active {\n            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;\n          }\n        "),"\n    ")})," ",(function(props){return props.appearance===APPEARANCES_TERTIARY&&"\n      background: ".concat(_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.tertiary,";\n      color: ").concat(_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.darkest,";\n\n      ").concat(!props.isLoading&&"\n          &:hover {\n            background: ".concat((0,polished__WEBPACK_IMPORTED_MODULE_6__._j)(.05,_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.tertiary),";\n          }\n          &:active {\n            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;\n          }\n        "),"\n    ")})," ",(function(props){return props.appearance===APPEARANCES_OUTLINE&&"\n      box-shadow: ".concat((0,polished__WEBPACK_IMPORTED_MODULE_6__.jb)(.05,_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.border)," 0 0 0 1px inset;\n      color: ").concat(_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.dark,";\n      background: transparent;\n\n      ").concat(!props.isLoading&&"\n          &:hover {\n            box-shadow: ".concat((0,polished__WEBPACK_IMPORTED_MODULE_6__.jb)(.3,_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.border)," 0 0 0 1px inset;\n          }\n\n          &:active {\n            background: ").concat((0,polished__WEBPACK_IMPORTED_MODULE_6__.jb)(.05,_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.border),";\n            box-shadow: transparent 0 0 0 1px inset;\n            color: ").concat(_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.darkest,";\n          }\n\n          &:active:focus:hover {\n            ","\n            background: ").concat((0,polished__WEBPACK_IMPORTED_MODULE_6__.jb)(.05,_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.border),";\n            box-shadow: transparent 0 0 0 1px inset;\n          }\n        "),";\n    ")}),";",(function(props){return props.appearance===APPEARANCES_PRIMARY_OUTLINE&&"\n      box-shadow: ".concat(_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.primary," 0 0 0 1px inset;\n      color: ").concat(_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.primary,";\n\n      &:hover {\n        box-shadow: ").concat(_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.primary," 0 0 0 1px inset;\n        background: transparent;\n      }\n\n      &:active {\n        background: ").concat(_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.primary,";\n        box-shadow: ").concat(_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.primary," 0 0 0 1px inset;\n        color: ").concat(_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.lightest,";\n      }\n    ")}),";",(function(props){return props.appearance===APPEARANCES_SECONDARY_OUTLINE&&"\n      box-shadow: ".concat(_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.secondary," 0 0 0 1px inset;\n      color: ").concat(_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.secondary,";\n\n      &:hover {\n        box-shadow: ").concat(_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.secondary," 0 0 0 1px inset;\n        background: transparent;\n      }\n\n      &:active {\n        background: ").concat(_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.secondary,";\n        box-shadow: ").concat(_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.secondary," 0 0 0 1px inset;\n        color: ").concat(_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.lightest,";\n      }\n    ")}),";",(function(props){return props.appearance===APPEARANCES_INVERSE_PRIMARY&&"\n        background: ".concat(_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.lightest,";\n        color: ").concat(_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.primary,";\n\n        ").concat(!props.isLoading&&"\n            &:hover {\n              background: ".concat(_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.lightest,";\n            }\n            &:active {\n              box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;\n            }\n        "),"\n    ")})," ",(function(props){return props.appearance===APPEARANCES_INVERSE_SECONDARY&&"\n        background: ".concat(_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.lightest,";\n        color: ").concat(_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.secondary,";\n\n        ").concat(!props.isLoading&&"\n            &:hover {\n              background: ".concat(_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.lightest,";\n            }\n            &:active {\n              box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;\n            }\n        "),"\n    ")})," ",(function(props){return props.appearance===APPEARANCES_INVERSE_OUTLINE&&"\n        box-shadow: ".concat(_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.lightest," 0 0 0 1px inset;\n        color: ").concat(_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.lightest,";\n\n        &:hover {\n          box-shadow: ").concat(_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.lightest," 0 0 0 1px inset;\n          background: transparent;\n        }\n\n        &:active {\n          background: ").concat(_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.lightest,";\n          box-shadow: ").concat(_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.lightest," 0 0 0 1px inset;\n          color: ").concat(_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.darkest,";\n        }\n    ")}),";",(function(props){return props.appearance===APPEARANCES_INVERSE&&"\n        background: ".concat(_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.tr10,";\n        color: ").concat(_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.lightest,";\n\n        ").concat(!props.isLoading&&"\n            &:hover {\n              background: ".concat(_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.tr10,";\n              box-shadow: none;\n            }\n            &:active {\n              box-shadow: none;\n            }\n        "),"\n    ")})," ",(function(props){return props.appearance===APPEARANCES_INVERSE_NO_CHROME&&"\n        background: transparent;\n        color: ".concat(_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.lightest,";\n\n        ").concat(!props.isLoading&&"\n            &:hover {\n              background: transparent;\n              box-shadow: none;\n            }\n            &:active {\n              box-shadow: none;\n            }\n        ","\n    ")}),";"),ButtonLink=(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_5__.zo)("a",{target:"eotfes60"})(),Button=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function(_ref,ref){var children=_ref.children,_ref$isDisabled=_ref.isDisabled,isDisabled=void 0!==_ref$isDisabled&&_ref$isDisabled,isLoading=_ref.isLoading,_ref$loadingText=_ref.loadingText,loadingText=void 0===_ref$loadingText?null:_ref$loadingText,isLink=_ref.isLink,_ref$ButtonWrapper=_ref.ButtonWrapper,ButtonWrapper=void 0===_ref$ButtonWrapper?null:_ref$ButtonWrapper,_ref$appearance=_ref.appearance,appearance=void 0===_ref$appearance?"tertiary":_ref$appearance,rest=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__.Z)(_ref,_excluded);return ButtonWrapper?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(StyledButton,_objectSpread(_objectSpread({as:ButtonWrapper,disabled:isDisabled,isLoading,appearance},rest),{},{ref,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Text,{children}),isLoading&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Loading,{children:loadingText||"Loading..."})]})})):isLink?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(StyledButton,_objectSpread(_objectSpread({as:ButtonLink,isLoading,appearance},rest),{},{ref,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Text,{children}),isLoading&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Loading,{children:loadingText||"Loading..."})]})})):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(StyledButton,_objectSpread(_objectSpread({disabled:isDisabled,isLoading,appearance},rest),{},{ref,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Text,{children}),isLoading&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Loading,{children:loadingText||"Loading..."})]})}))}));Button.displayName="button";try{StyledButton.displayName="button",StyledButton.__docgenInfo={description:"",displayName:"button",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},isUnclickable:{defaultValue:null,description:"",name:"isUnclickable",required:!1,type:{name:"boolean"}},containsIcon:{defaultValue:null,description:"",name:"containsIcon",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},appearance:{defaultValue:{value:"tertiary"},description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"outline"'},{value:'"inverse"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"primary"'},{value:'"primaryOutline"'},{value:'"secondaryOutline"'},{value:'"inversePrimary"'},{value:'"inverseSecondary"'},{value:'"inverseOutline"'},{value:'"inverseNoChrome"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button.tsx#button"]={docgenInfo:button.__docgenInfo,name:"button",path:"src/components/Button.tsx#button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/modal/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Modal});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_storybook_theming__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs"),react_modal__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-modal/lib/index.js"),react_modal__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__),_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Button.tsx"),_Icon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Icon.tsx"),_shared_styles__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/shared/styles.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var Action=(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_7__.zo)("div",{target:"e1pi15s62"})("position:absolute;z-index:2;bottom:10vh;left:50%;transform:translateX(-50%);@media (min-width: ",_shared_styles__WEBPACK_IMPORTED_MODULE_5__.eq,"px){right:30px;top:30px;bottom:auto;left:auto;transform:none;}"),CenteredItem=(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_7__.zo)("div",{target:"e1pi15s61"})(_shared_styles__WEBPACK_IMPORTED_MODULE_5__.A3,";width:100%;margin-top:auto!important;margin-bottom:auto!important;padding-top:3rem;padding-bottom:3rem;"),CenteredWrapper=(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_7__.zo)("div",{target:"e1pi15s60"})({name:"11qebxa",styles:"display:flex;justify-content:center;align-items:center;position:absolute;top:0;bottom:0;right:0;left:0"}),Modal=function Modal(_ref){var _ref$isBlank=_ref.isBlank,isBlank=void 0!==_ref$isBlank&&_ref$isBlank,isOpen=_ref.isOpen,onClose=_ref.onClose,children=_ref.children,_ref$overlayStyles=_ref.overlayStyles,overlayStyles=void 0===_ref$overlayStyles?{}:_ref$overlayStyles,_ref$contentStyles=_ref.contentStyles,contentStyles=void 0===_ref$contentStyles?{}:_ref$contentStyles,actions={onClose};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_modal__WEBPACK_IMPORTED_MODULE_2___default(),{isOpen,onRequestClose:onClose,contentLabel:"Example Modal",ariaHideApp:!1,closeTimeoutMS:300,style:{overlay:_objectSpread({backgroundColor:isBlank?_shared_styles__WEBPACK_IMPORTED_MODULE_5__.$_.lightest:"rgba(246, 249, 252, .97)",zIndex:2147483646,overflowX:"hidden",overflowY:"auto"},overlayStyles),content:_objectSpread({left:"0",top:"0",bottom:"0",right:"0",backgroundColor:"transparent",border:"none",overflow:"visible",padding:"0",width:"100%",margin:"auto"},contentStyles)},children:[isBlank?react__WEBPACK_IMPORTED_MODULE_1__.Children.only(children(actions)):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(CenteredWrapper,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(CenteredItem,{children:react__WEBPACK_IMPORTED_MODULE_1__.Children.only(children(actions))})}),!isBlank&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Action,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.z,{containsIcon:!0,appearance:"outline",onClick:onClose,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_4__.J,{icon:"cross"})})})]})};Modal.displayName="Modal";try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},isBlank:{defaultValue:{value:"false"},description:"",name:"isBlank",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"(event: MouseEvent<Element, MouseEvent> | KeyboardEvent<Element>) => void"}},overlayStyles:{defaultValue:{value:"{}"},description:"",name:"overlayStyles",required:!1,type:{name:"CSSProperties"}},contentStyles:{defaultValue:{value:"{}"},description:"",name:"contentStyles",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/modal/Modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/components/modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/shared/animation.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K9:()=>rotate360,T2:()=>jiggle,Ui:()=>easing,ez:()=>inlineGlow,w5:()=>glow});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),_storybook_theming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs"),_styles__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/shared/styles.ts"),easing={rubber:"cubic-bezier(0.175, 0.885, 0.335, 1.05)"},rotate360=(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.F4)(_templateObject||(_templateObject=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.Z)(["\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n"]))),glow=(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.F4)(_templateObject2||(_templateObject2=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.Z)(["\n  0%, 100% { opacity: 1; }\n  50% { opacity: .4; }\n"]))),jiggle=((0,_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.F4)(_templateObject3||(_templateObject3=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.Z)(["\n  0% { transform: translateY(1px); }\n  25% { transform: translateY(0px); }\n  50% { transform: translateY(-3px); }\n  100% { transform: translateY(1px); }\n"]))),(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.F4)(_templateObject4||(_templateObject4=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.Z)(["\n  0%, 100% { transform:translate3d(0,0,0); }\n  12.5%, 62.5% { transform:translate3d(-4px,0,0); }\n  37.5%, 87.5% {  transform: translate3d(4px,0,0);  }\n"])))),inlineGlow=((0,_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.F4)(_templateObject5||(_templateObject5=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.Z)(["\n  0% { transform:rotate(-3deg) }\n  1.68421% { transform:rotate(3deg) }\n  2.10526% { transform:rotate(6deg) }\n  3.78947% { transform:rotate(-6deg) }\n  4.21053% { transform:rotate(-6deg) }\n  5.89474% { transform:rotate(6deg) }\n  6.31579% { transform:rotate(6deg) }\n  8% { transform:rotate(-6deg) }\n  8.42105% { transform:rotate(-6deg) }\n  10.10526% { transform:rotate(6deg) }\n  10.52632% { transform:rotate(6deg) }\n  12.21053% { transform:rotate(-6deg) }\n  12.63158% { transform:rotate(-6deg) }\n  14.31579% { transform:rotate(6deg) }\n  15.78947% { transform:rotate(0deg) }\n  100% { transform:rotate(0deg) }\n"]))),(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.iv)("animation:",glow," 1.5s ease-in-out infinite;background:",_styles__WEBPACK_IMPORTED_MODULE_0__.$_.tr5,";color:transparent;cursor:progress;"))}}]);