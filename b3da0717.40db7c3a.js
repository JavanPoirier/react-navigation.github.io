(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{374:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(1),o=n(9),i=(n(0),n(476)),r={id:"navigation-actions",title:"CommonActions reference",sidebar_label:"CommonActions"},c={id:"version-5.x/navigation-actions",title:"CommonActions reference",description:"A navigation action is an object containing at least a `type` property. The action can be handled by routers with the `getStateForAction` method to return a new state from an existing navigation state.",source:"@site/versioned_docs/version-5.x/navigation-actions.md",permalink:"/docs/navigation-actions",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-5.x/navigation-actions.md",version:"5.x",sidebar_label:"CommonActions",sidebar:"version-5.x/docs",previous:{title:"useTheme",permalink:"/docs/use-theme"},next:{title:"StackActions reference",permalink:"/docs/stack-actions"}},s=[{value:"Common actions",id:"common-actions",children:[{value:"navigate",id:"navigate",children:[]},{value:"reset",id:"reset",children:[]},{value:"goBack",id:"goback",children:[]},{value:"setParams",id:"setparams",children:[]}]}],l={rightToc:s};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A navigation action is an object containing at least a ",Object(i.b)("inlineCode",{parentName:"p"},"type")," property. The action can be handled by routers with the ",Object(i.b)("inlineCode",{parentName:"p"},"getStateForAction")," method to return a new state from an existing navigation state."),Object(i.b)("p",null,"Each navigation actions can contain at least the following properties:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"type")," (required) - A string which represents the name of the action."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"payload")," (options) - An object containing additional information about the action. For example, it will contain ",Object(i.b)("inlineCode",{parentName:"li"},"name")," and ",Object(i.b)("inlineCode",{parentName:"li"},"params")," for ",Object(i.b)("inlineCode",{parentName:"li"},"navigate"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"source")," (optional) - The key of the route which should be considered as the source of the action. This is used by some routers to determine which route to apply the action on. By default, ",Object(i.b)("inlineCode",{parentName:"li"},"navigation.dispatch")," adds the key of the route that dispatched the action."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"target")," (optional) - The key of the navigation state the action should be applied on.")),Object(i.b)("p",null,"It's important to highlight that dispatching a navigation action doesn't throw any error when the action is unhandled (similar to when you dispatch an action that isn't handled by a reducer in redux and nothing happens)."),Object(i.b)("h2",{id:"common-actions"},"Common actions"),Object(i.b)("p",null,"The library exports several action creators under the ",Object(i.b)("inlineCode",{parentName:"p"},"CommonActions")," namespace. You should use these action creators instead of writing action objects manually."),Object(i.b)("h3",{id:"navigate"},"navigate"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"navigate")," action allows to navigate to a specific route. It takes the following arguments:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"name")," - ",Object(i.b)("em",{parentName:"li"},"string")," - A destination name of the route that has been registered somewhere.."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"key")," - ",Object(i.b)("em",{parentName:"li"},"string")," - The identifier for the route to navigate to. Navigate back to this route if it already exists.."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"params")," - ",Object(i.b)("em",{parentName:"li"},"object")," - Params to merge into the destination route..")),Object(i.b)("p",null,"The options object passed should at least contain a ",Object(i.b)("inlineCode",{parentName:"p"},"key")," or ",Object(i.b)("inlineCode",{parentName:"p"},"name")," property, and optionally ",Object(i.b)("inlineCode",{parentName:"p"},"params"),". If both ",Object(i.b)("inlineCode",{parentName:"p"},"key")," and ",Object(i.b)("inlineCode",{parentName:"p"},"name")," are passed, stack navigator will create a new route with the specified key if no matches were found."),Object(i.b)("samp",{id:"common-actions"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { CommonActions } from '@react-navigation/native';\n\nnavigation.dispatch(\n  CommonActions.navigate({\n    name: 'Profile',\n    params: {\n      user: 'jane',\n    },\n  })\n);\n")),Object(i.b)("h3",{id:"reset"},"reset"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"reset")," action allows to reset the navigation state to the given state. It takes the following arguments:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"state")," - ",Object(i.b)("em",{parentName:"li"},"object")," - The new navigation state object to use.")),Object(i.b)("samp",{id:"common-actions"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { CommonActions } from '@react-navigation/native';\n\nnavigation.dispatch(\n  CommonActions.reset({\n    index: 1,\n    routes: [\n      { name: 'Home' },\n      {\n        name: 'Profile',\n        params: { user: 'jane' },\n      },\n    ],\n  })\n);\n")),Object(i.b)("p",null,"The state object specified in ",Object(i.b)("inlineCode",{parentName:"p"},"reset")," replaces the existing navigation state with the new one. This means that if you provide new route objects without a key, or route objects with a different key, it'll remove the existing screens for those routes and add new screens."),Object(i.b)("p",null,"If you want to preserve the existing screens but only want to modify the state, you can pass a function to ",Object(i.b)("inlineCode",{parentName:"p"},"dispatch")," where you can get the existing state. Then you can change it as you like (make sure not to mutate the existing state, but create new state object for your changes). and return a ",Object(i.b)("inlineCode",{parentName:"p"},"reset")," action with the desired state:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { CommonActions } from '@react-navigation/native';\n\nnavigation.dispatch(state => {\n  // Remove the home route from the stack\n  const routes = state.routes.filter(r => r.name !== 'Home');\n\n  return CommonActions.reset({\n    ...state,\n    routes,\n    index: routes.length - 1,\n  });\n});\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: Consider the navigator's state object to be internal and subject to change in a minor release. Avoid using properties from the navigation state object except ",Object(i.b)("inlineCode",{parentName:"p"},"index")," and ",Object(i.b)("inlineCode",{parentName:"p"},"routes"),", unless you really need it. If there is some functionality you cannot achieve without relying on the structure of the state object, please open an issue.")),Object(i.b)("h3",{id:"goback"},"goBack"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"goBack")," action creator allows to go back to the previous route in history. It doesn't take any arguments."),Object(i.b)("samp",{id:"common-actions"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { CommonActions } from '@react-navigation/native';\n\nnavigation.dispatch(CommonActions.goBack());\n")),Object(i.b)("p",null,"If you want to go back from a particular route, you can add a ",Object(i.b)("inlineCode",{parentName:"p"},"source")," property referring to the route key and a ",Object(i.b)("inlineCode",{parentName:"p"},"target")," property referring to the ",Object(i.b)("inlineCode",{parentName:"p"},"key")," of the navigator which contains the route:"),Object(i.b)("samp",{id:"common-actions"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { CommonActions } from '@react-navigation/native';\n\nnavigation.dispatch({\n  ...CommonActions.goBack(),\n  source: route.key,\n  target: state.key,\n});\n")),Object(i.b)("p",null,"By default, the key of the route which dispatched the action is passed as the ",Object(i.b)("inlineCode",{parentName:"p"},"source")," property and the ",Object(i.b)("inlineCode",{parentName:"p"},"target")," property is ",Object(i.b)("inlineCode",{parentName:"p"},"undefined"),"."),Object(i.b)("h3",{id:"setparams"},"setParams"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"setParams")," action allows to update params for a certain route. It takes the following arguments:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"params")," - ",Object(i.b)("em",{parentName:"li"},"object")," - required - New params to be merged into existing route params.")),Object(i.b)("samp",{id:"common-actions"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { CommonActions } from '@react-navigation/native';\n\nnavigation.dispatch(CommonActions.setParams({ user: 'Wojtek' }));\n")),Object(i.b)("p",null,"If you want to set params for a particular route, you can add a ",Object(i.b)("inlineCode",{parentName:"p"},"source")," property referring to the route key:"),Object(i.b)("samp",{id:"common-actions"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { CommonActions } from '@react-navigation/native';\n\nnavigation.dispatch({\n  ...CommonActions.setParams({ user: 'Wojtek' }),\n  source: route.key,\n});\n")),Object(i.b)("p",null,"If the ",Object(i.b)("inlineCode",{parentName:"p"},"source")," property is explicitly set to ",Object(i.b)("inlineCode",{parentName:"p"},"undefined"),", it'll set the params for the focused route."))}b.isMDXComponent=!0},476:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,d=p["".concat(r,".").concat(u)]||p[u]||m[u]||i;return n?o.a.createElement(d,c({ref:t},l,{components:n})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);