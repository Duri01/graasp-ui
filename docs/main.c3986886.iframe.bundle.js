(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/global.css":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/@storybook/builder-webpack4/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/@storybook/builder-webpack4/node_modules/css-loader/dist/cjs.js?!./node_modules/@storybook/builder-webpack4/node_modules/postcss-loader/dist/cjs.js?!./.storybook/global.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters=(__webpack_require__("./.storybook/global.css"),{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}});function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return Object(ClientApi.d)(value);case"argTypes":return Object(ClientApi.b)(value);case"decorators":return value.forEach((function(decorator){return Object(ClientApi.f)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.g)(loader,!1)}));case"parameters":return Object(ClientApi.h)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.e)(enhancer)}));case"render":return Object(ClientApi.i)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.h)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/@storybook/builder-webpack4/node_modules/webpack/buildin/module.js")(module))},"./node_modules/@storybook/builder-webpack4/node_modules/css-loader/dist/cjs.js?!./node_modules/@storybook/builder-webpack4/node_modules/postcss-loader/dist/cjs.js?!./.storybook/global.css":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/@storybook/builder-webpack4/node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,".blackColor {\n  color:black !important\n}\n\n.blackBorderTop {\n  border-top: 5px solid #5050d2 !important\n}\n  ",""]),module.exports=exports},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./Button/Button.stories.tsx":"./src/Button/Button.stories.tsx","./Navigation/Navigation.stories.tsx":"./src/Navigation/Navigation.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./src/Button/Button.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary})),__webpack_require__.d(__webpack_exports__,"Secondary",(function(){return Secondary})),__webpack_require__.d(__webpack_exports__,"Large",(function(){return Large})),__webpack_require__.d(__webpack_exports__,"Small",(function(){return Small}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js");var Button_Button=__webpack_require__("./node_modules/@material-ui/core/esm/Button/Button.js"),makeStyles=__webpack_require__("./node_modules/@material-ui/core/esm/styles/makeStyles.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),useStyles=Object(makeStyles.a)((function(theme){return{button:{margin:theme.spacing(1)}}})),Button_GraaspButton=function GraaspButton(_ref){var id=_ref.id,dataCy=_ref.dataCy,onClick=_ref.onClick,children=_ref.children,className=_ref.className,startIcon=_ref.startIcon,autoFocus=_ref.autoFocus,endIcon=_ref.endIcon,fullWidth=_ref.fullWidth,_ref$component=_ref.component,component=void 0===_ref$component?"button":_ref$component,_ref$color=_ref.color,color=void 0===_ref$color?"primary":_ref$color,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"contained":_ref$variant,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$size=_ref.size,size=void 0===_ref$size?"medium":_ref$size,classes=useStyles();return Object(jsx_runtime.jsx)(Button_Button.a,{id:id,"data-cy":dataCy,variant:variant,color:color,onClick:onClick,disabled:disabled,className:Object(clsx_m.a)(classes.button,className),size:size,startIcon:startIcon,endIcon:endIcon,autoFocus:autoFocus,fullWidth:fullWidth,component:component,children:children})};Button_GraaspButton.displayName="GraaspButton";try{Button_GraaspButton.displayName="GraaspButton",Button_GraaspButton.__docgenInfo={description:"Column properties.",displayName:"GraaspButton",props:{autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"button contents, usually a string",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"classname string",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"primary"'},{value:'"secondary"'},{value:'"default"'}]}},component:{defaultValue:{value:"button"},description:"",name:"component",required:!1,type:{name:"ElementType<any>"}},dataCy:{defaultValue:null,description:"cypress data-cy attribute",name:"dataCy",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},endIcon:{defaultValue:null,description:"",name:"endIcon",required:!1,type:{name:"ReactNode"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"id string",name:"id",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"on click handler",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},startIcon:{defaultValue:null,description:"",name:"startIcon",required:!1,type:{name:"ReactNode"}},variant:{defaultValue:{value:"contained"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"contained"'},{value:'"outlined"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Button/Button.tsx#GraaspButton"]={docgenInfo:Button_GraaspButton.__docgenInfo,name:"GraaspButton",path:"src/Button/Button.tsx#GraaspButton"})}catch(__react_docgen_typescript_loader_error){}try{Button.displayName="Button",Button.__docgenInfo={description:"Column properties.",displayName:"Button",props:{autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"button contents, usually a string",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"classname string",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"primary"'},{value:'"secondary"'},{value:'"default"'}]}},component:{defaultValue:{value:"button"},description:"",name:"component",required:!1,type:{name:"ElementType<any>"}},dataCy:{defaultValue:null,description:"cypress data-cy attribute",name:"dataCy",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},endIcon:{defaultValue:null,description:"",name:"endIcon",required:!1,type:{name:"ReactNode"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"id string",name:"id",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"on click handler",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},startIcon:{defaultValue:null,description:"",name:"startIcon",required:!1,type:{name:"ReactNode"}},variant:{defaultValue:{value:"contained"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"contained"'},{value:'"outlined"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}var TABLE_CATEGORIES_MUI="Material UI",TABLE_CATEGORIES_EVENTS="Events",Button_stories_Template=(__webpack_exports__.default={title:"Button",component:Button_GraaspButton,argTypes:{color:{table:{category:TABLE_CATEGORIES_MUI}},size:{table:{category:TABLE_CATEGORIES_MUI}},fullWidth:{table:{category:TABLE_CATEGORIES_MUI}},startIcon:{table:{category:TABLE_CATEGORIES_MUI}},endIcon:{table:{category:TABLE_CATEGORIES_MUI}},autoFocus:{table:{category:TABLE_CATEGORIES_MUI}},disabled:{table:{category:TABLE_CATEGORIES_MUI}},component:{table:{category:TABLE_CATEGORIES_MUI}},variant:{table:{category:TABLE_CATEGORIES_MUI}},onClick:{table:{category:TABLE_CATEGORIES_EVENTS}}}},function Template(args){return Object(jsx_runtime.jsx)(Button_GraaspButton,Object.assign({},args,{children:args.children}))});Button_stories_Template.displayName="Template";var Primary=Button_stories_Template.bind({});Primary.args={color:"primary",children:"Button"};var Secondary=Button_stories_Template.bind({});Secondary.args={color:"secondary",children:"Button"};var Large=Button_stories_Template.bind({});Large.args={size:"large",children:"Button"};var Small=Button_stories_Template.bind({});Small.args={size:"small",children:"Button"},Primary.parameters=Object.assign({storySource:{source:"(args) => (\n  <Button {...args}>{args.children}</Button>\n)"}},Primary.parameters),Secondary.parameters=Object.assign({storySource:{source:"(args) => (\n  <Button {...args}>{args.children}</Button>\n)"}},Secondary.parameters),Large.parameters=Object.assign({storySource:{source:"(args) => (\n  <Button {...args}>{args.children}</Button>\n)"}},Large.parameters),Small.parameters=Object.assign({storySource:{source:"(args) => (\n  <Button {...args}>{args.children}</Button>\n)"}},Small.parameters)},"./src/Navigation/Navigation.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"White",(function(){return White})),__webpack_require__.d(__webpack_exports__,"Black",(function(){return Black}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var react=__webpack_require__("./node_modules/react/index.js"),react_default=__webpack_require__.n(react),makeStyles=(__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/@material-ui/core/esm/styles/makeStyles.js")),Button=__webpack_require__("./node_modules/@material-ui/core/esm/Button/Button.js"),Typography=__webpack_require__("./node_modules/@material-ui/core/esm/Typography/Typography.js"),Menu=__webpack_require__("./node_modules/@material-ui/core/esm/Menu/Menu.js"),MenuItem=__webpack_require__("./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js"),dist=__webpack_require__("./node_modules/@graasp/sdk/dist/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ExploreIcon_ExploreIcon=function ExploreIcon(_ref){var className=_ref.className,_ref$size=_ref.size,size=void 0===_ref$size?30:_ref$size,classes=Object(makeStyles.a)((function(){return{background:{fill:"#5050d2"},circle:{fill:"#FFFFFF"},disabledBackground:{fill:"#FFFFFF"},disabledCircle:{fill:"#5050d2"}}}))();return Object(jsx_runtime.jsx)("svg",{height:size,width:size,viewBox:"0 0 40 40",className:className,children:Object(jsx_runtime.jsxs)("g",{children:[Object(jsx_runtime.jsx)("circle",{className:classes.circle,cx:"20.71",cy:"19.5",r:"17.86"}),Object(jsx_runtime.jsx)("path",{className:classes.background,d:"M19.9,0.62C9.12,0.62,0.36,9.38,0.36,20.15c0,10.77,8.76,19.54,19.54,19.54c10.77,0,19.54-8.76,19.54-19.54 C39.43,9.38,30.67,0.62,19.9,0.62z M27.62,16.3c-0.17-0.42-0.38-0.82-0.62-1.18c-0.65-0.96-1.93-2.24-4.39-2.9 c-1.28-0.34-2.61-0.37-3.96-0.1l-0.84-4.1c1.99-0.41,3.97-0.36,5.88,0.15c3.71,0.99,5.73,3.05,6.78,4.6 c0.42,0.62,0.77,1.28,1.04,1.98L27.62,16.3z"})]})})};ExploreIcon_ExploreIcon.displayName="ExploreIcon";var icons_ExploreIcon=ExploreIcon_ExploreIcon;try{ExploreIcon_ExploreIcon.displayName="ExploreIcon",ExploreIcon_ExploreIcon.__docgenInfo={description:"",displayName:"ExploreIcon",props:{size:{defaultValue:{value:"30"},description:"",name:"size",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/ExploreIcon.tsx#ExploreIcon"]={docgenInfo:ExploreIcon_ExploreIcon.__docgenInfo,name:"ExploreIcon",path:"src/icons/ExploreIcon.tsx#ExploreIcon"})}catch(__react_docgen_typescript_loader_error){}var clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),BuildIcon_BuildIcon=function BuildIcon(_ref){var _clsx,_clsx2,className=_ref.className,_ref$size=_ref.size,size=void 0===_ref$size?30:_ref$size,disabled=_ref.disabled,classes=Object(makeStyles.a)((function(){return{background:{fill:"#5050d2"},circle:{fill:"#FFFFFF"},disabledBackground:{fill:"#FFFFFF"},disabledCircle:{fill:"#5050d2"}}}))();return Object(jsx_runtime.jsx)("svg",{height:size,width:size,viewBox:"0 0 40 40",className:className,children:Object(jsx_runtime.jsxs)("g",{children:[Object(jsx_runtime.jsx)("circle",{className:Object(clsx_m.a)(classes.circle,(_clsx={},_clsx[classes.disabledCircle]=disabled,_clsx)),cx:"20.56",cy:"19.26",r:"17.43"}),Object(jsx_runtime.jsx)("path",{className:Object(clsx_m.a)(classes.background,(_clsx2={},_clsx2[classes.disabledBackground]=disabled,_clsx2)),d:"M20.02,0.49C9.31,0.49,0.62,9.18,0.62,19.9s8.69,19.41,19.41,19.41s19.41-8.69,19.41-19.41 S30.74,0.49,20.02,0.49z M29.91,30.51c-2.75,0-5.5,0-8.25,0.01c0-2.53,0-5.07,0-7.6c0.95,0,1.91,0,2.86,0 c0-0.65,0.01-1.29,0.01-1.94c-2.69,0-5.37,0-8.06,0.01c-0.01,0.31-0.02,0.63-0.02,0.94c0.01,0.33,0.02,0.66,0.02,0.99 c1.04,0,2.09,0,3.13,0c0,2.53,0,5.07,0,7.6c-2.83,0-5.66,0-8.49,0.01c0-2.53-0.01-5.07-0.01-7.6c1.02,0,2.04,0,3.05,0 c0-2.04,0-4.08,0.01-6.11c-1.01,0-2.03,0-3.04,0c0-2.57-0.01-5.13-0.01-7.7c2.83-0.01,5.66-0.03,8.5-0.04c0,2.58,0,5.16,0,7.74 c-1.04,0-2.09,0-3.13,0c0.01,0.32,0.01,0.65,0.01,0.99c0,0.34,0,0.68-0.01,1.02c3.51,0,7.02,0,10.54,0c0,1.45,0,2.75,0,4.14 c0.97-0.01,1.94-0.02,2.91-0.03C29.91,25.44,29.91,27.98,29.91,30.51z"})]})})};BuildIcon_BuildIcon.displayName="BuildIcon";var icons_BuildIcon=BuildIcon_BuildIcon;try{BuildIcon_BuildIcon.displayName="BuildIcon",BuildIcon_BuildIcon.__docgenInfo={description:"",displayName:"BuildIcon",props:{size:{defaultValue:{value:"30"},description:"",name:"size",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/BuildIcon.tsx#BuildIcon"]={docgenInfo:BuildIcon_BuildIcon.__docgenInfo,name:"BuildIcon",path:"src/icons/BuildIcon.tsx#BuildIcon"})}catch(__react_docgen_typescript_loader_error){}var BarChart=__webpack_require__("./node_modules/@material-ui/icons/BarChart.js"),BarChart_default=__webpack_require__.n(BarChart),AnalyzeIcon_AnalyzeIcon=function AnalyzeIcon(_ref){var className=_ref.className;return Object(jsx_runtime.jsx)(BarChart_default.a,{className:className})};AnalyzeIcon_AnalyzeIcon.displayName="AnalyzeIcon";var icons_AnalyzeIcon=AnalyzeIcon_AnalyzeIcon;try{AnalyzeIcon_AnalyzeIcon.displayName="AnalyzeIcon",AnalyzeIcon_AnalyzeIcon.__docgenInfo={description:"",displayName:"AnalyzeIcon",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/AnalyzeIcon.tsx#AnalyzeIcon"]={docgenInfo:AnalyzeIcon_AnalyzeIcon.__docgenInfo,name:"AnalyzeIcon",path:"src/icons/AnalyzeIcon.tsx#AnalyzeIcon"})}catch(__react_docgen_typescript_loader_error){}var PlayIcon_PlayIcon=function PlayIcon(_ref){var className=_ref.className,_ref$size=_ref.size,size=void 0===_ref$size?30:_ref$size,classes=Object(makeStyles.a)((function(){return{background:{fill:"#5050d2"},circle:{fill:"#FFFFFF"},disabledBackground:{fill:"#FFFFFF"},disabledCircle:{fill:"#5050d2"}}}))();return Object(jsx_runtime.jsx)("svg",{height:size,width:size,viewBox:"0 0 40 40",className:className,children:Object(jsx_runtime.jsxs)("g",{children:[Object(jsx_runtime.jsx)("circle",{className:classes.circle,cx:"18.93",cy:"19.39",r:"17.4"}),Object(jsx_runtime.jsx)("path",{className:classes.background,d:"M19.9,0.49C9.11,0.49,0.36,9.23,0.36,20.02c0,10.79,8.75,19.54,19.54,19.54s19.54-8.75,19.54-19.54 C39.43,9.23,30.69,0.49,19.9,0.49z M31.61,21.33l-18.56,8.99c-0.13,0.06-0.28,0.1-0.42,0.1c-0.18,0-0.36-0.05-0.51-0.15 c-0.28-0.18-0.45-0.48-0.45-0.82V12.08c0-0.33,0.17-0.63,0.44-0.81c0.27-0.18,0.62-0.2,0.92-0.07l18.56,8.38 c0.34,0.15,0.56,0.49,0.57,0.86C32.16,20.83,31.94,21.17,31.61,21.33z"})]})})};PlayIcon_PlayIcon.displayName="PlayIcon";var icons_PlayIcon=PlayIcon_PlayIcon;try{PlayIcon_PlayIcon.displayName="PlayIcon",PlayIcon_PlayIcon.__docgenInfo={description:"",displayName:"PlayIcon",props:{size:{defaultValue:{value:"30"},description:"",name:"size",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/PlayIcon.tsx#PlayIcon"]={docgenInfo:PlayIcon_PlayIcon.__docgenInfo,name:"PlayIcon",path:"src/icons/PlayIcon.tsx#PlayIcon"})}catch(__react_docgen_typescript_loader_error){}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Navigation_useStyles=Object(makeStyles.a)((function(theme){return{icon:{marginRight:theme.spacing(1)},analyzeIcon:{margin:theme.spacing(0,1,0,.5)},button:{textTransform:"capitalize",fontSize:theme.typography.fontSize,color:"white"},menuItem:{textTransform:"capitalize"},triangle:{width:0,height:0,borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderTop:"5px solid #fff",display:"inline",marginLeft:theme.spacing(1)}}})),Navigation_ContextMenuItem=function ContextMenuItem(_ref){var value=_ref.value,disabled=_ref.disabled,classes=Navigation_useStyles();switch(value){case dist.Context.BUILDER:return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(icons_BuildIcon,{className:classes.icon,disabled:disabled}),dist.Context.BUILDER]});case dist.Context.LIBRARY:return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(icons_ExploreIcon,{className:classes.icon,disabled:disabled}),dist.Context.LIBRARY]});case dist.Context.PLAYER:return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(icons_PlayIcon,{className:classes.icon,disabled:disabled}),dist.Context.PLAYER]});case dist.Context.ANALYTICS:return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(icons_AnalyzeIcon,{className:classes.analyzeIcon,disabled:disabled}),dist.Context.ANALYTICS]});default:return null}},Navigation_Navigation=function Navigation(_ref2){var currentValue=_ref2.currentValue,_ref2$hostMap=_ref2.hostMap,hostMap=void 0===_ref2$hostMap?{}:_ref2$hostMap,id=_ref2.id,_ref2$buttonColor=_ref2.buttonColor,buttonColor=void 0===_ref2$buttonColor?"secondary":_ref2$buttonColor,buttonClassname=_ref2.buttonClassname,triangleClassname=_ref2.triangleClassname,classes=Navigation_useStyles(),_React$useState2=_slicedToArray(react_default.a.useState(null),2),anchorEl=_React$useState2[0],setAnchorEl=_React$useState2[1],onClick=function onClick(value){return function(){var url=hostMap[value];url||(url="/"),Object(dist.redirect)(url)}};return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsxs)(Button.a,{id:id,"aria-controls":"navigation-menu","aria-haspopup":"true",onClick:function handleClick(event){setAnchorEl(event.currentTarget)},className:Object(clsx_m.a)(buttonClassname,classes.button),variant:"outlined",color:buttonColor,children:[Object(jsx_runtime.jsx)(Typography.a,{variant:"h6",color:"inherit",children:currentValue}),Object(jsx_runtime.jsx)("div",{className:Object(clsx_m.a)(triangleClassname,classes.triangle)})]}),Object(jsx_runtime.jsxs)(Menu.a,{id:"navigation-menu",anchorEl:anchorEl,keepMounted:!0,getContentAnchorEl:null,open:Boolean(anchorEl),onClose:function handleClose(){setAnchorEl(null)},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:[Object(jsx_runtime.jsx)(MenuItem.a,{className:classes.menuItem,onClick:onClick(dist.Context.BUILDER),disabled:currentValue===dist.Context.BUILDER,children:Object(jsx_runtime.jsx)(Navigation_ContextMenuItem,{value:dist.Context.BUILDER})}),Object(jsx_runtime.jsx)(MenuItem.a,{className:classes.menuItem,onClick:onClick(dist.Context.LIBRARY),disabled:currentValue===dist.Context.LIBRARY,children:Object(jsx_runtime.jsx)(Navigation_ContextMenuItem,{value:dist.Context.LIBRARY})}),Object(jsx_runtime.jsx)(MenuItem.a,{className:classes.menuItem,onClick:onClick(dist.Context.PLAYER),disabled:currentValue===dist.Context.PLAYER,children:Object(jsx_runtime.jsx)(Navigation_ContextMenuItem,{value:dist.Context.PLAYER})}),Object(jsx_runtime.jsx)(MenuItem.a,{disabled:!0,className:classes.menuItem,children:Object(jsx_runtime.jsx)(Navigation_ContextMenuItem,{value:dist.Context.ANALYTICS})})]})]})},src_Navigation_Navigation=Navigation_Navigation;try{Navigation_Navigation.displayName="Navigation",Navigation_Navigation.__docgenInfo={description:"",displayName:"Navigation",props:{buttonClassname:{defaultValue:null,description:"button's classname",name:"buttonClassname",required:!1,type:{name:"string"}},buttonColor:{defaultValue:{value:"secondary"},description:"button's color based on MUI design",name:"buttonColor",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"primary"'},{value:'"secondary"'},{value:'"default"'}]}},currentValue:{defaultValue:null,description:"current context to set as default value",name:"currentValue",required:!0,type:{name:"enum",value:[{value:'"builder"'},{value:'"player"'},{value:'"library"'},{value:'"analytics"'},{value:'"explorer"'},{value:'"analyzer"'}]}},hostMap:{defaultValue:{value:"{}"},description:"map of hosts to define apps' urls",name:"hostMap",required:!1,type:{name:"HostMap"}},id:{defaultValue:null,description:"id string",name:"id",required:!1,type:{name:"string"}},triangleClassname:{defaultValue:null,description:"button's triangle's classname",name:"triangleClassname",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Navigation/Navigation.tsx#Navigation"]={docgenInfo:Navigation_Navigation.__docgenInfo,name:"Navigation",path:"src/Navigation/Navigation.tsx#Navigation"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Navigation",component:src_Navigation_Navigation,parameters:{backgrounds:{values:[{name:"black",value:"#000"},{name:"white",value:"#fff"}]}}};var Navigation_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(src_Navigation_Navigation,Object.assign({},args))};Navigation_stories_Template.displayName="Template";var White=Navigation_stories_Template.bind({});White.args={currentValue:dist.Context.BUILDER},White.parameters={backgrounds:{default:"black"}};var Black=Navigation_stories_Template.bind({});Black.args={currentValue:dist.Context.PLAYER,buttonColor:"primary",buttonClassname:"blackColor",triangleClassname:"blackBorderTop"},Black.parameters={backgrounds:{default:"white"}},White.parameters=Object.assign({storySource:{source:"(args) => (\n  <Navigation {...args} />\n)"}},White.parameters),Black.parameters=Object.assign({storySource:{source:"(args) => (\n  <Navigation {...args} />\n)"}},Black.parameters)},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);