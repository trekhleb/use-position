(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Demo_Demo}));var react=__webpack_require__(5),react_default=__webpack_require__.n(react),prop_types=__webpack_require__(187),prop_types_default=__webpack_require__.n(prop_types);__webpack_require__(16),__webpack_require__(22),__webpack_require__(26),__webpack_require__(65),__webpack_require__(28),__webpack_require__(20),__webpack_require__(47),__webpack_require__(37),__webpack_require__(40),__webpack_require__(57),__webpack_require__(14),__webpack_require__(38),__webpack_require__(29),__webpack_require__(30);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var defaultSettings={enableHighAccuracy:!1,timeout:1/0,maximumAge:0},Demo_Demo=function Demo(_ref){var _usePosition=function usePosition(){var watch=arguments.length>0&&void 0!==arguments[0]&&arguments[0],userSettings=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},settings=Object.assign({},defaultSettings,userSettings),_useState=Object(react.useState)({}),_useState2=_slicedToArray(_useState,2),position=_useState2[0],setPosition=_useState2[1],_useState3=Object(react.useState)(null),_useState4=_slicedToArray(_useState3,2),error=_useState4[0],setError=_useState4[1],onChange=function onChange(_ref){var coords=_ref.coords,timestamp=_ref.timestamp;setPosition({latitude:coords.latitude,longitude:coords.longitude,accuracy:coords.accuracy,speed:coords.speed,heading:coords.heading,timestamp:timestamp})},onError=function onError(error){setError(error.message)};return Object(react.useEffect)((function(){if(navigator&&navigator.geolocation){if(watch){var watcher=navigator.geolocation.watchPosition(onChange,onError,settings);return function(){return navigator.geolocation.clearWatch(watcher)}}navigator.geolocation.getCurrentPosition(onChange,onError,settings)}else setError("Geolocation is not supported")}),[settings.enableHighAccuracy,settings.timeout,settings.maximumAge]),Object.assign({},position,{error:error})}(_ref.watch,_ref.settings),latitude=_usePosition.latitude,longitude=_usePosition.longitude,timestamp=_usePosition.timestamp,accuracy=_usePosition.accuracy,speed=_usePosition.speed,heading=_usePosition.heading,error=_usePosition.error,loader=latitude||error?null:react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("div",null,"Trying to fetch location..."),react_default.a.createElement("br",null));return react_default.a.createElement(react_default.a.Fragment,null,loader,react_default.a.createElement("code",null,"latitude: ",latitude,react_default.a.createElement("br",null),"longitude: ",longitude,react_default.a.createElement("br",null),"timestamp: ",timestamp,react_default.a.createElement("br",null),"accuracy: ",accuracy&&"".concat(accuracy," meters"),react_default.a.createElement("br",null),"speed: ",speed,react_default.a.createElement("br",null),"heading: ",heading&&"".concat(heading," degrees"),react_default.a.createElement("br",null),"error: ",error))};Demo_Demo.propTypes={watch:prop_types_default.a.bool,settings:prop_types_default.a.object},Demo_Demo.__docgenInfo={description:"",methods:[],displayName:"Demo",props:{watch:{type:{name:"bool"},required:!1,description:""},settings:{type:{name:"object"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["demo/Demo.js"]={name:"Demo",docgenInfo:Demo_Demo.__docgenInfo,path:"demo/Demo.js"})},291:function(module,exports,__webpack_require__){__webpack_require__(292),__webpack_require__(443),__webpack_require__(444),module.exports=__webpack_require__(632)},358:function(module,exports){},444:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(94)},632:function(module,exports,__webpack_require__){"use strict";__webpack_require__(16),__webpack_require__(77),__webpack_require__(36),__webpack_require__(85),__webpack_require__(59),__webpack_require__(633),__webpack_require__(634),__webpack_require__(48),__webpack_require__(39);var _clientApi=__webpack_require__(105),_clientLogger=__webpack_require__(58),_configFilename=__webpack_require__(635);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},635:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(36),__webpack_require__(20),__webpack_require__(14),__webpack_require__(39),__webpack_require__(30);var _storybook_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(94),req=__webpack_require__(636);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.configure)((function loadStories(){req.keys().forEach((function(filename){return req(filename)}))}),module)}.call(this,__webpack_require__(290)(module))},636:function(module,exports,__webpack_require__){var map={"./index.stories.js":637};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=636},637:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(94),_demo_Demo__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(125),highAccuracySettings={enableHighAccuracy:!0};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("usePosition",module).add("fetching",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_demo_Demo__WEBPACK_IMPORTED_MODULE_2__.a,null)})).add("watching",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_demo_Demo__WEBPACK_IMPORTED_MODULE_2__.a,{watch:!0})})).add("high accuracy watching",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_demo_Demo__WEBPACK_IMPORTED_MODULE_2__.a,{watch:!0,settings:highAccuracySettings})}))}.call(this,__webpack_require__(290)(module))}},[[291,1,2]]]);
//# sourceMappingURL=main.bffe495eb205e50272d3.bundle.js.map