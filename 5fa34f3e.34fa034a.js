(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{259:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(9),c=(n(0),n(476)),a={id:"use-theme",title:"useTheme",sidebar_label:"useTheme"},i={id:"version-5.x/use-theme",title:"useTheme",description:"The `useTheme` hook let's us access the currently active theme. You can use it in your own components to have them respond to changes in the theme.",source:"@site/versioned_docs/version-5.x/use-theme.md",permalink:"/docs/use-theme",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-5.x/use-theme.md",version:"5.x",sidebar_label:"useTheme",sidebar:"version-5.x/docs",previous:{title:"useScrollToTop",permalink:"/docs/use-scroll-to-top"},next:{title:"CommonActions reference",permalink:"/docs/navigation-actions"}},s=[{value:"Using with class component",id:"using-with-class-component",children:[]}],u={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"useTheme")," hook let's us access the currently active theme. You can use it in your own components to have them respond to changes in the theme."),Object(c.b)("samp",{id:"system-themes"}),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import * as React from 'react';\nimport { TouchableOpacity, Text } from 'react-native';\nimport { useTheme } from '@react-navigation/native';\n\n// Black background and white text in light theme, inverted on dark theme\nfunction MyButton() {\n  const { colors } = useTheme();\n\n  return (\n    <TouchableOpacity style={{ backgroundColor: colors.card }}>\n      <Text style={{ color: colors.text }}>Button!</Text>\n    </TouchableOpacity>\n  );\n}\n")),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/themes"}),"theming guide")," for more details and usage guide around how to configure themes."),Object(c.b)("h2",{id:"using-with-class-component"},"Using with class component"),Object(c.b)("p",null,"You can wrap your class component in a function component to use the hook:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"class MyButton extends React.Component {\n  render() {\n    // Get it from props\n    const { theme } = this.props;\n  }\n}\n\n// Wrap and export\nexport default function(props) {\n  const theme = useTheme();\n\n  return <MyButton {...props} theme={theme} />;\n}\n")))}p.isMDXComponent=!0},476:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),h=r,b=l["".concat(a,".").concat(h)]||l[h]||m[h]||c;return n?o.a.createElement(b,i({ref:t},u,{components:n})):o.a.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var u=2;u<c;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);