"use strict";(self.webpackChunk_storybook_design_system=self.webpackChunk_storybook_design_system||[]).push([[5343,30],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties});var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=(0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__.Z)(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}},"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutPropertiesLoose})},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_KKE3V3AL.aD,Nw:()=>actions});var chunk_KKE3V3AL=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-KKE3V3AL.mjs"),actions=(...args)=>{let options=chunk_KKE3V3AL.vc,names=args;1===names.length&&Array.isArray(names[0])&&([names]=names),1!==names.length&&"string"!=typeof names[names.length-1]&&(options={...chunk_KKE3V3AL.vc,...names.pop()});let namesObject=names[0];(1!==names.length||"string"==typeof namesObject)&&(namesObject={},names.forEach((name=>{namesObject[name]=name})));let actionsObject={};return Object.keys(namesObject).forEach((name=>{actionsObject[name]=(0,chunk_KKE3V3AL.aD)(namesObject[name],options)})),actionsObject};__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs")},"./src/components/Link.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Link});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_storybook_theming__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs"),polished__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/polished/dist/polished.esm.js"),_Icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Icon.tsx"),_shared_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/shared/styles.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["containsIcon","inverse","isButton","LinkWrapper","nochrome","secondary","tertiary"],_excluded2=["children","withArrow"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var _ref3={name:"1lnhbgp",styles:">svg:last-of-type{height:0.65em;width:0.65em;margin-right:0;margin-left:0.25em;bottom:auto;vertical-align:inherit;}"},LinkInner=(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_5__.zo)("span",{target:"e1ja7avb3"})((function(props){return props.withArrow&&_ref3}),";"),_ref={name:"13jr1vs",styles:"color:inherit;&:hover,&:active{color:inherit;text-decoration:underline;}"},_ref2={name:"m8gvx1",styles:"svg{height:1em;width:1em;vertical-align:middle;position:relative;bottom:0;margin-right:0;}"},StyledLink=(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_5__.zo)("a",{target:"e1ja7avb2"})("display:inline-block;transition:transform 150ms ease-out,color 150ms ease-out;text-decoration:none;color:",_shared_styles__WEBPACK_IMPORTED_MODULE_3__.$_.secondary,";&:hover,&:focus-visible{cursor:pointer;transform:translateY(-1px);color:",(0,polished__WEBPACK_IMPORTED_MODULE_6__._j)(.07,_shared_styles__WEBPACK_IMPORTED_MODULE_3__.$_.secondary),";}&:active{transform:translateY(0);color:",(0,polished__WEBPACK_IMPORTED_MODULE_6__._j)(.1,_shared_styles__WEBPACK_IMPORTED_MODULE_3__.$_.secondary),";}svg{display:inline-block;height:1em;width:1em;vertical-align:text-top;position:relative;bottom:-0.125em;margin-right:0.4em;}",(function(props){return props.containsIcon&&_ref2}),";",(function(props){return props.secondary&&(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_5__.iv)("color:",_shared_styles__WEBPACK_IMPORTED_MODULE_3__.$_.mediumdark,";&:hover{color:",_shared_styles__WEBPACK_IMPORTED_MODULE_3__.$_.dark,";}&:active{color:",_shared_styles__WEBPACK_IMPORTED_MODULE_3__.$_.darker,";}")}),";",(function(props){return props.tertiary&&(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_5__.iv)("color:",_shared_styles__WEBPACK_IMPORTED_MODULE_3__.$_.dark,";&:hover{color:",_shared_styles__WEBPACK_IMPORTED_MODULE_3__.$_.darkest,";}&:active{color:",_shared_styles__WEBPACK_IMPORTED_MODULE_3__.$_.mediumdark,";}")}),";",(function(props){return props.nochrome&&_ref}),";",(function(props){return props.inverse&&(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_5__.iv)("color:",_shared_styles__WEBPACK_IMPORTED_MODULE_3__.$_.lightest,";&:hover{color:",_shared_styles__WEBPACK_IMPORTED_MODULE_3__.$_.lighter,";}&:active{color:",_shared_styles__WEBPACK_IMPORTED_MODULE_3__.$_.light,";}")}),";"),UnstyledLink=(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_5__.zo)("a",{target:"e1ja7avb1"})(),LinkButton=(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_5__.zo)("button",{target:"e1ja7avb0"})({name:"152yo6p",styles:"background:none;border:none;padding:0;font:inherit;cursor:pointer"}),LinkComponentPicker=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function(_ref4,ref){_ref4.containsIcon,_ref4.inverse;var isButton=_ref4.isButton,LinkWrapper=_ref4.LinkWrapper,rest=(_ref4.nochrome,_ref4.secondary,_ref4.tertiary,(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__.Z)(_ref4,_excluded));return isButton?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(LinkButton,_objectSpread(_objectSpread({},rest),{},{ref})):LinkWrapper?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(LinkWrapper,_objectSpread(_objectSpread({},rest),{},{ref})):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(UnstyledLink,_objectSpread(_objectSpread({},rest),{},{ref}))}));LinkComponentPicker.displayName="LinkComponentPicker";var Link=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function(_ref5,ref){var children=_ref5.children,withArrow=_ref5.withArrow,rest=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__.Z)(_ref5,_excluded2),content=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(LinkInner,{withArrow,children:[children,withArrow&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.J,{icon:"arrowright"})]})});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(StyledLink,_objectSpread(_objectSpread({as:LinkComponentPicker,ref},rest),{},{children:content}))}));Link.displayName="Link",Link.defaultProps={withArrow:!1,isButton:!1,containsIcon:!1,secondary:!1,tertiary:!1,nochrome:!1,inverse:!1};try{Link.displayName="LinkComponentPicker",Link.__docgenInfo={description:"",displayName:"LinkComponentPicker",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},inverse:{defaultValue:{value:"false"},description:"",name:"inverse",required:!1,type:{name:"boolean"}},containsIcon:{defaultValue:{value:"false"},description:"",name:"containsIcon",required:!1,type:{name:"boolean"}},secondary:{defaultValue:{value:"false"},description:"",name:"secondary",required:!1,type:{name:"boolean"}},tertiary:{defaultValue:{value:"false"},description:"",name:"tertiary",required:!1,type:{name:"boolean"}},nochrome:{defaultValue:{value:"false"},description:"",name:"nochrome",required:!1,type:{name:"boolean"}},withArrow:{defaultValue:{value:"false"},description:"",name:"withArrow",required:!1,type:{name:"boolean"}},isButton:{defaultValue:{value:"false"},description:"",name:"isButton",required:!1,type:{name:"boolean"}},LinkWrapper:{defaultValue:null,description:"",name:"LinkWrapper",required:!1,type:{name:"ComponentType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Link.tsx#LinkComponentPicker"]={docgenInfo:LinkComponentPicker.__docgenInfo,name:"LinkComponentPicker",path:"src/components/Link.tsx#LinkComponentPicker"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/StoryLinkWrapper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>StoryLinkWrapper});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js")),_excluded=["children","href","onClick","to"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var fireClickAction=(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.aD)("onLinkClick"),StoryLinkWrapper=function StoryLinkWrapper(_ref){var children=_ref.children,href=_ref.href,onClick=_ref.onClick,to=_ref.to,rest=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__.Z)(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a",_objectSpread(_objectSpread({"data-storyLinkWrapper":"true",href:href||to,onClick:function modifiedOnClick(event){event.preventDefault(),onClick(event),fireClickAction(href||to)}},rest),{},{children}))};StoryLinkWrapper.displayName="StoryLinkWrapper";try{StoryLinkWrapper.displayName="StoryLinkWrapper",StoryLinkWrapper.__docgenInfo={description:"",displayName:"StoryLinkWrapper",props:{to:{defaultValue:null,description:"",name:"to",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/StoryLinkWrapper.tsx#StoryLinkWrapper"]={docgenInfo:StoryLinkWrapper.__docgenInfo,name:"StoryLinkWrapper",path:"src/components/StoryLinkWrapper.tsx#StoryLinkWrapper"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Link.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{All:()=>All,Basic:()=>Basic,ContainsIcon:()=>ContainsIcon,HasLinkWrapper:()=>HasLinkWrapper,IsButton:()=>IsButton,WithArrow:()=>WithArrow,WithIcon:()=>WithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _storybook_theming__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_Icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Icon.tsx"),_Link__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Link.tsx"),_StoryLinkWrapper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/StoryLinkWrapper.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");var CustomLink=(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_6__.zo)(_Link__WEBPACK_IMPORTED_MODULE_3__.r,{target:"e2pq68f0"})({name:"13kmxi1",styles:"&&{color:red;}"}),onLinkClick=(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.aD)("onLinkClick");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:'import React from \'react\';\nimport { styled } from \'@storybook/theming\';\nimport { action } from \'@storybook/addon-actions\';\n\nimport { Icon } from \'./Icon\';\nimport { Link } from \'./Link\';\n// @ts-ignore\nimport { StoryLinkWrapper } from \'./StoryLinkWrapper\';\n\nconst CustomLink = styled(Link)`\n  && {\n    color: red;\n  }\n`;\n\nconst onLinkClick = action(\'onLinkClick\');\n\nexport default {\n  title: \'Link\',\n  component: Link,\n};\n\nexport const Basic: React.FunctionComponent<React.ComponentProps<typeof Link>> = () => (\n  <Link href="http://chromatic.com/" inverse={false}>\n    link text\n  </Link>\n);\n\nexport const All = () => (\n  <>\n    <Link href="https://learnstorybook.com">default</Link>{\' \'}\n    <Link secondary href="https://learnstorybook.com">\n      secondary\n    </Link>{\' \'}\n    <Link tertiary href="https://learnstorybook.com">\n      tertiary\n    </Link>{\' \'}\n    <Link nochrome href="https://learnstorybook.com">\n      nochrome\n    </Link>{\' \'}\n    <span style={{ background: \'#333\' }}>\n      <Link inverse href="https://learnstorybook.com">\n        inverse\n      </Link>\n    </span>\n  </>\n);\n\nexport const WithArrow = () => (\n  <Link containsIcon withArrow href="https://learnstorybook.com">\n    withArrow shows an arrow behind the link\n  </Link>\n);\n\nexport const ContainsIcon = () => (\n  <Link containsIcon href="https://learnstorybook.com" aria-label="Toggle side bar">\n    <Icon icon="sidebar" aria-hidden />\n  </Link>\n);\n\nexport const WithIcon = () => (\n  <Link href="https://learnstorybook.com">\n    <Icon icon="discord" aria-hidden />\n    Link with an icon in front\n  </Link>\n);\n\nexport const IsButton = () => (\n  \n  <Link isButton onClick={onLinkClick}>\n    is actually a button\n  </Link>\n);\n\nexport const HasLinkWrapper = () => (\n  <>\n    <Link tertiary LinkWrapper={StoryLinkWrapper} href="http://storybook.js.org">\n      has a LinkWrapper like GatsbyLink or NextLink\n    </Link>\n    <br />\n    <CustomLink tertiary LinkWrapper={StoryLinkWrapper} href="http://storybook.js.org">\n      has a LinkWrapper like GatsbyLink or NextLink with custom styling\n    </CustomLink>\n  </>\n);\n',locationsMap:{basic:{startLoc:{col:81,line:23},endLoc:{col:1,line:27},startBody:{col:81,line:23},endBody:{col:1,line:27}},all:{startLoc:{col:19,line:29},endLoc:{col:1,line:47},startBody:{col:19,line:29},endBody:{col:1,line:47}},"with-arrow":{startLoc:{col:25,line:49},endLoc:{col:1,line:53},startBody:{col:25,line:49},endBody:{col:1,line:53}},"contains-icon":{startLoc:{col:28,line:55},endLoc:{col:1,line:59},startBody:{col:28,line:55},endBody:{col:1,line:59}},"with-icon":{startLoc:{col:24,line:61},endLoc:{col:1,line:66},startBody:{col:24,line:61},endBody:{col:1,line:66}},"is-button":{startLoc:{col:24,line:68},endLoc:{col:1,line:73},startBody:{col:24,line:68},endBody:{col:1,line:73}},"has-link-wrapper":{startLoc:{col:30,line:75},endLoc:{col:1,line:85},startBody:{col:30,line:75},endBody:{col:1,line:85}}}}},title:"Link",component:_Link__WEBPACK_IMPORTED_MODULE_3__.r};var Basic=function Basic(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_3__.r,{href:"http://chromatic.com/",inverse:!1,children:"link text"})};Basic.displayName="Basic";var All=function All(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_3__.r,{href:"https://learnstorybook.com",children:"default"})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_3__.r,{secondary:!0,href:"https://learnstorybook.com",children:"secondary"})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_3__.r,{tertiary:!0,href:"https://learnstorybook.com",children:"tertiary"})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_3__.r,{nochrome:!0,href:"https://learnstorybook.com",children:"nochrome"})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{style:{background:"#333"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_3__.r,{inverse:!0,href:"https://learnstorybook.com",children:"inverse"})})]})},WithArrow=function WithArrow(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_3__.r,{containsIcon:!0,withArrow:!0,href:"https://learnstorybook.com",children:"withArrow shows an arrow behind the link"})};WithArrow.displayName="WithArrow";var ContainsIcon=function ContainsIcon(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_3__.r,{containsIcon:!0,href:"https://learnstorybook.com","aria-label":"Toggle side bar",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.J,{icon:"sidebar","aria-hidden":!0})})};ContainsIcon.displayName="ContainsIcon";var WithIcon=function WithIcon(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Link__WEBPACK_IMPORTED_MODULE_3__.r,{href:"https://learnstorybook.com",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.J,{icon:"discord","aria-hidden":!0}),"Link with an icon in front"]})};WithIcon.displayName="WithIcon";var IsButton=function IsButton(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_3__.r,{isButton:!0,onClick:onLinkClick,children:"is actually a button"})};IsButton.displayName="IsButton";var HasLinkWrapper=function HasLinkWrapper(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_3__.r,{tertiary:!0,LinkWrapper:_StoryLinkWrapper__WEBPACK_IMPORTED_MODULE_4__.u,href:"http://storybook.js.org",children:"has a LinkWrapper like GatsbyLink or NextLink"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(CustomLink,{tertiary:!0,LinkWrapper:_StoryLinkWrapper__WEBPACK_IMPORTED_MODULE_4__.u,href:"http://storybook.js.org",children:"has a LinkWrapper like GatsbyLink or NextLink with custom styling"})]})},__namedExportsOrder=["Basic","All","WithArrow","ContainsIcon","WithIcon","IsButton","HasLinkWrapper"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'function Basic() {\n  return /*#__PURE__*/_jsx(Link, {\n    href: "http://chromatic.com/",\n    inverse: false,\n    children: "link text"\n  });\n}',...Basic.parameters?.docs?.source}}},All.parameters={...All.parameters,docs:{...All.parameters?.docs,source:{originalSource:'function All() {\n  return /*#__PURE__*/_jsxs(_Fragment, {\n    children: [/*#__PURE__*/_jsx(Link, {\n      href: "https://learnstorybook.com",\n      children: "default"\n    }), \' \', /*#__PURE__*/_jsx(Link, {\n      secondary: true,\n      href: "https://learnstorybook.com",\n      children: "secondary"\n    }), \' \', /*#__PURE__*/_jsx(Link, {\n      tertiary: true,\n      href: "https://learnstorybook.com",\n      children: "tertiary"\n    }), \' \', /*#__PURE__*/_jsx(Link, {\n      nochrome: true,\n      href: "https://learnstorybook.com",\n      children: "nochrome"\n    }), \' \', /*#__PURE__*/_jsx("span", {\n      style: {\n        background: \'#333\'\n      },\n      children: /*#__PURE__*/_jsx(Link, {\n        inverse: true,\n        href: "https://learnstorybook.com",\n        children: "inverse"\n      })\n    })]\n  });\n}',...All.parameters?.docs?.source}}},WithArrow.parameters={...WithArrow.parameters,docs:{...WithArrow.parameters?.docs,source:{originalSource:'function WithArrow() {\n  return /*#__PURE__*/_jsx(Link, {\n    containsIcon: true,\n    withArrow: true,\n    href: "https://learnstorybook.com",\n    children: "withArrow shows an arrow behind the link"\n  });\n}',...WithArrow.parameters?.docs?.source}}},ContainsIcon.parameters={...ContainsIcon.parameters,docs:{...ContainsIcon.parameters?.docs,source:{originalSource:'function ContainsIcon() {\n  return /*#__PURE__*/_jsx(Link, {\n    containsIcon: true,\n    href: "https://learnstorybook.com",\n    "aria-label": "Toggle side bar",\n    children: /*#__PURE__*/_jsx(Icon, {\n      icon: "sidebar",\n      "aria-hidden": true\n    })\n  });\n}',...ContainsIcon.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:'function WithIcon() {\n  return /*#__PURE__*/_jsxs(Link, {\n    href: "https://learnstorybook.com",\n    children: [/*#__PURE__*/_jsx(Icon, {\n      icon: "discord",\n      "aria-hidden": true\n    }), "Link with an icon in front"]\n  });\n}',...WithIcon.parameters?.docs?.source}}},IsButton.parameters={...IsButton.parameters,docs:{...IsButton.parameters?.docs,source:{originalSource:'function IsButton() {\n  return /*#__PURE__*/(\n\n    /* eslint-disable-next-line */\n    _jsx(Link, {\n      isButton: true,\n      onClick: onLinkClick,\n      children: "is actually a button"\n    })\n  );\n}',...IsButton.parameters?.docs?.source}}},HasLinkWrapper.parameters={...HasLinkWrapper.parameters,docs:{...HasLinkWrapper.parameters?.docs,source:{originalSource:'function HasLinkWrapper() {\n  return /*#__PURE__*/_jsxs(_Fragment, {\n    children: [/*#__PURE__*/_jsx(Link, {\n      tertiary: true,\n      LinkWrapper: StoryLinkWrapper,\n      href: "http://storybook.js.org",\n      children: "has a LinkWrapper like GatsbyLink or NextLink"\n    }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx(CustomLink, {\n      tertiary: true,\n      LinkWrapper: StoryLinkWrapper,\n      href: "http://storybook.js.org",\n      children: "has a LinkWrapper like GatsbyLink or NextLink with custom styling"\n    })]\n  });\n}',...HasLinkWrapper.parameters?.docs?.source}}};try{Basic.displayName="Basic",Basic.__docgenInfo={description:"",displayName:"Basic",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},inverse:{defaultValue:null,description:"",name:"inverse",required:!1,type:{name:"boolean"}},containsIcon:{defaultValue:null,description:"",name:"containsIcon",required:!1,type:{name:"boolean"}},secondary:{defaultValue:null,description:"",name:"secondary",required:!1,type:{name:"boolean"}},tertiary:{defaultValue:null,description:"",name:"tertiary",required:!1,type:{name:"boolean"}},nochrome:{defaultValue:null,description:"",name:"nochrome",required:!1,type:{name:"boolean"}},withArrow:{defaultValue:null,description:"",name:"withArrow",required:!1,type:{name:"boolean"}},isButton:{defaultValue:null,description:"",name:"isButton",required:!1,type:{name:"boolean"}},LinkWrapper:{defaultValue:null,description:"",name:"LinkWrapper",required:!1,type:{name:"ComponentType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Link.stories.tsx#Basic"]={docgenInfo:Basic.__docgenInfo,name:"Basic",path:"src/components/Link.stories.tsx#Basic"})}catch(__react_docgen_typescript_loader_error){}}}]);