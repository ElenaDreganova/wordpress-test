/*! jQuery Migrate v3.3.2 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e,window)}):"object"==typeof module&&module.exports?module.exports=t(require("jquery"),window):t(jQuery,window)}(function(s,n){"use strict";function e(e){return 0<=function(e,t){for(var r=/^(\d+)\.(\d+)\.(\d+)/,n=r.exec(e)||[],o=r.exec(t)||[],i=1;i<=3;i++){if(+o[i]<+n[i])return 1;if(+n[i]<+o[i])return-1}return 0}(s.fn.jquery,e)}s.migrateVersion="3.3.2",n.console&&n.console.log&&(s&&e("3.0.0")||n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),s.migrateWarnings&&n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),n.console.log("JQMIGRATE: Migrate is installed"+(s.migrateMute?"":" with logging active")+", version "+s.migrateVersion));var r={};function u(e){var t=n.console;s.migrateDeduplicateWarnings&&r[e]||(r[e]=!0,s.migrateWarnings.push(e),t&&t.warn&&!s.migrateMute&&(t.warn("JQMIGRATE: "+e),s.migrateTrace&&t.trace&&t.trace()))}function t(e,t,r,n){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return u(n),r},set:function(e){u(n),r=e}})}function o(e,t,r,n){e[t]=function(){return u(n),r.apply(this,arguments)}}s.migrateDeduplicateWarnings=!0,s.migrateWarnings=[],void 0===s.migrateTrace&&(s.migrateTrace=!0),s.migrateReset=function(){r={},s.migrateWarnings.length=0},"BackCompat"===n.document.compatMode&&u("jQuery is not compatible with Quirks Mode");var i,a,c,d={},l=s.fn.init,p=s.find,f=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,y=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,m=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;for(i in s.fn.init=function(e){var t=Array.prototype.slice.call(arguments);return"string"==typeof e&&"#"===e&&(u("jQuery( '#' ) is not a valid selector"),t[0]=[]),l.apply(this,t)},s.fn.init.prototype=s.fn,s.find=function(t){var r=Array.prototype.slice.call(arguments);if("string"==typeof t&&f.test(t))try{n.document.querySelector(t)}catch(e){t=t.replace(y,function(e,t,r,n){return"["+t+r+'"'+n+'"]'});try{n.document.querySelector(t),u("Attribute selector with '#' must be quoted: "+r[0]),r[0]=t}catch(e){u("Attribute selector with '#' was not fixed: "+r[0])}}return p.apply(this,r)},p)Object.prototype.hasOwnProperty.call(p,i)&&(s.find[i]=p[i]);o(s.fn,"size",function(){return this.length},"jQuery.fn.size() is deprecated and removed; use the .length property"),o(s,"parseJSON",function(){return JSON.parse.apply(null,arguments)},"jQuery.parseJSON is deprecated; use JSON.parse"),o(s,"holdReady",s.holdReady,"jQuery.holdReady is deprecated"),o(s,"unique",s.uniqueSort,"jQuery.unique is deprecated; use jQuery.uniqueSort"),t(s.expr,"filters",s.expr.pseudos,"jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),t(s.expr,":",s.expr.pseudos,"jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),e("3.1.1")&&o(s,"trim",function(e){return null==e?"":(e+"").replace(m,"")},"jQuery.trim is deprecated; use String.prototype.trim"),e("3.2.0")&&(o(s,"nodeName",function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},"jQuery.nodeName is deprecated"),o(s,"isArray",Array.isArray,"jQuery.isArray is deprecated; use Array.isArray")),e("3.3.0")&&(o(s,"isNumeric",function(e){var t=typeof e;return("number"==t||"string"==t)&&!isNaN(e-parseFloat(e))},"jQuery.isNumeric() is deprecated"),s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){d["[object "+t+"]"]=t.toLowerCase()}),o(s,"type",function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?d[Object.prototype.toString.call(e)]||"object":typeof e},"jQuery.type is deprecated"),o(s,"isFunction",function(e){return"function"==typeof e},"jQuery.isFunction() is deprecated"),o(s,"isWindow",function(e){return null!=e&&e===e.window},"jQuery.isWindow() is deprecated")),s.ajax&&(a=s.ajax,c=/(=)\?(?=&|$)|\?\?/,s.ajax=function(){var e=a.apply(this,arguments);return e.promise&&(o(e,"success",e.done,"jQXHR.success is deprecated and removed"),o(e,"error",e.fail,"jQXHR.error is deprecated and removed"),o(e,"complete",e.always,"jQXHR.complete is deprecated and removed")),e},e("4.0.0")||s.ajaxPrefilter("+json",function(e){!1!==e.jsonp&&(c.test(e.url)||"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&c.test(e.data))&&u("JSON-to-JSONP auto-promotion is deprecated")}));var g=s.fn.removeAttr,h=s.fn.toggleClass,v=/\S+/g;function j(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})}s.fn.removeAttr=function(e){var r=this;return s.each(e.match(v),function(e,t){s.expr.match.bool.test(t)&&(u("jQuery.fn.removeAttr no longer sets boolean properties: "+t),r.prop(t,!1))}),g.apply(this,arguments)};var Q,b=!(s.fn.toggleClass=function(t){return void 0!==t&&"boolean"!=typeof t?h.apply(this,arguments):(u("jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var e=this.getAttribute&&this.getAttribute("class")||"";e&&s.data(this,"__className__",e),this.setAttribute&&this.setAttribute("class",!e&&!1!==t&&s.data(this,"__className__")||"")}))}),w=/^[a-z]/,x=/^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;s.swap&&s.each(["height","width","reliableMarginRight"],function(e,t){var r=s.cssHooks[t]&&s.cssHooks[t].get;r&&(s.cssHooks[t].get=function(){var e;return b=!0,e=r.apply(this,arguments),b=!1,e})}),s.swap=function(e,t,r,n){var o,i,a={};for(i in b||u("jQuery.swap() is undocumented and deprecated"),t)a[i]=e.style[i],e.style[i]=t[i];for(i in o=r.apply(e,n||[]),t)e.style[i]=a[i];return o},e("3.4.0")&&"undefined"!=typeof Proxy&&(s.cssProps=new Proxy(s.cssProps||{},{set:function(){return u("JQMIGRATE: jQuery.cssProps is deprecated"),Reflect.set.apply(this,arguments)}})),s.cssNumber||(s.cssNumber={}),Q=s.fn.css,s.fn.css=function(e,t){var r,n,o=this;return e&&"object"==typeof e&&!Array.isArray(e)?(s.each(e,function(e,t){s.fn.css.call(o,e,t)}),this):("number"==typeof t&&(r=j(e),n=r,w.test(n)&&x.test(n[0].toUpperCase()+n.slice(1))||s.cssNumber[r]||u('Number-typed values are deprecated for jQuery.fn.css( "'+e+'", value )')),Q.apply(this,arguments))};var A,k,S,M,N=s.data;s.data=function(e,t,r){var n,o,i;if(t&&"object"==typeof t&&2===arguments.length){for(i in n=s.hasData(e)&&N.call(this,e),o={},t)i!==j(i)?(u("jQuery.data() always sets/gets camelCased names: "+i),n[i]=t[i]):o[i]=t[i];return N.call(this,e,o),t}return t&&"string"==typeof t&&t!==j(t)&&(n=s.hasData(e)&&N.call(this,e))&&t in n?(u("jQuery.data() always sets/gets camelCased names: "+t),2<arguments.length&&(n[t]=r),n[t]):N.apply(this,arguments)},s.fx&&(S=s.Tween.prototype.run,M=function(e){return e},s.Tween.prototype.run=function(){1<s.easing[this.easing].length&&(u("'jQuery.easing."+this.easing.toString()+"' should use only one argument"),s.easing[this.easing]=M),S.apply(this,arguments)},A=s.fx.interval||13,k="jQuery.fx.interval is deprecated",n.requestAnimationFrame&&Object.defineProperty(s.fx,"interval",{configurable:!0,enumerable:!0,get:function(){return n.document.hidden||u(k),A},set:function(e){u(k),A=e}}));var R=s.fn.load,H=s.event.add,C=s.event.fix;s.event.props=[],s.event.fixHooks={},t(s.event.props,"concat",s.event.props.concat,"jQuery.event.props.concat() is deprecated and removed"),s.event.fix=function(e){var t,r=e.type,n=this.fixHooks[r],o=s.event.props;if(o.length){u("jQuery.event.props are deprecated and removed: "+o.join());while(o.length)s.event.addProp(o.pop())}if(n&&!n._migrated_&&(n._migrated_=!0,u("jQuery.event.fixHooks are deprecated and removed: "+r),(o=n.props)&&o.length))while(o.length)s.event.addProp(o.pop());return t=C.call(this,e),n&&n.filter?n.filter(t,e):t},s.event.add=function(e,t){return e===n&&"load"===t&&"complete"===n.document.readyState&&u("jQuery(window).on('load'...) called after load event occurred"),H.apply(this,arguments)},s.each(["load","unload","error"],function(e,t){s.fn[t]=function(){var e=Array.prototype.slice.call(arguments,0);return"load"===t&&"string"==typeof e[0]?R.apply(this,e):(u("jQuery.fn."+t+"() is deprecated"),e.splice(0,0,t),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))}}),s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,r){s.fn[r]=function(e,t){return u("jQuery.fn."+r+"() event shorthand is deprecated"),0<arguments.length?this.on(r,null,e,t):this.trigger(r)}}),s(function(){s(n.document).triggerHandler("ready")}),s.event.special.ready={setup:function(){this===n.document&&u("'ready' event is deprecated")}},s.fn.extend({bind:function(e,t,r){return u("jQuery.fn.bind() is deprecated"),this.on(e,null,t,r)},unbind:function(e,t){return u("jQuery.fn.unbind() is deprecated"),this.off(e,null,t)},delegate:function(e,t,r,n){return u("jQuery.fn.delegate() is deprecated"),this.on(t,e,r,n)},undelegate:function(e,t,r){return u("jQuery.fn.undelegate() is deprecated"),1===arguments.length?this.off(e,"**"):this.off(t,e||"**",r)},hover:function(e,t){return u("jQuery.fn.hover() is deprecated"),this.on("mouseenter",e).on("mouseleave",t||e)}});function T(e){var t=n.document.implementation.createHTMLDocument("");return t.body.innerHTML=e,t.body&&t.body.innerHTML}function P(e){var t=e.replace(O,"<$1></$2>");t!==e&&T(e)!==T(t)&&u("HTML tags must be properly nested and closed: "+e)}var O=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,q=s.htmlPrefilter;s.UNSAFE_restoreLegacyHtmlPrefilter=function(){s.htmlPrefilter=function(e){return P(e),e.replace(O,"<$1></$2>")}},s.htmlPrefilter=function(e){return P(e),q(e)};var D,_=s.fn.offset;s.fn.offset=function(){var e=this[0];return!e||e.nodeType&&e.getBoundingClientRect?_.apply(this,arguments):(u("jQuery.fn.offset() requires a valid DOM element"),arguments.length?this:void 0)},s.ajax&&(D=s.param,s.param=function(e,t){var r=s.ajaxSettings&&s.ajaxSettings.traditional;return void 0===t&&r&&(u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),t=r),D.call(this,e,t)});var E,F,J=s.fn.andSelf||s.fn.addBack;return s.fn.andSelf=function(){return u("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),J.apply(this,arguments)},s.Deferred&&(E=s.Deferred,F=[["resolve","done",s.Callbacks("once memory"),s.Callbacks("once memory"),"resolved"],["reject","fail",s.Callbacks("once memory"),s.Callbacks("once memory"),"rejected"],["notify","progress",s.Callbacks("memory"),s.Callbacks("memory")]],s.Deferred=function(e){var i=E(),a=i.promise();return i.pipe=a.pipe=function(){var o=arguments;return u("deferred.pipe() is deprecated"),s.Deferred(function(n){s.each(F,function(e,t){var r="function"==typeof o[e]&&o[e];i[t[1]](function(){var e=r&&r.apply(this,arguments);e&&"function"==typeof e.promise?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[t[0]+"With"](this===a?n.promise():this,r?[e]:arguments)})}),o=null}).promise()},e&&e.call(i,i),i},s.Deferred.exceptionHook=E.exceptionHook),s});
/*! This file is auto-generated */
!function(e,t){if("function"==typeof define&&define.amd)define("hoverintent",["module"],t);else if("undefined"!=typeof exports)t(module);else{var n={exports:{}};t(n),e.hoverintent=n.exports}}(this,function(e){"use strict";var t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};e.exports=function(e,n,o){function i(e,t){return y&&(y=clearTimeout(y)),b=0,p?void 0:o.call(e,t)}function r(e){m=e.clientX,d=e.clientY}function u(e,t){if(y&&(y=clearTimeout(y)),Math.abs(h-m)+Math.abs(E-d)<x.sensitivity)return b=1,p?void 0:n.call(e,t);h=m,E=d,y=setTimeout(function(){u(e,t)},x.interval)}function s(t){return L=!0,y&&(y=clearTimeout(y)),e.removeEventListener("mousemove",r,!1),1!==b&&(h=t.clientX,E=t.clientY,e.addEventListener("mousemove",r,!1),y=setTimeout(function(){u(e,t)},x.interval)),this}function c(t){return L=!1,y&&(y=clearTimeout(y)),e.removeEventListener("mousemove",r,!1),1===b&&(y=setTimeout(function(){i(e,t)},x.timeout)),this}function v(t){L||(p=!0,n.call(e,t))}function a(t){!L&&p&&(p=!1,o.call(e,t))}function f(){e.addEventListener("focus",v,!1),e.addEventListener("blur",a,!1)}function l(){e.removeEventListener("focus",v,!1),e.removeEventListener("blur",a,!1)}var m,d,h,E,L=!1,p=!1,T={},b=0,y=0,x={sensitivity:7,interval:100,timeout:0,handleFocus:!1};return T.options=function(e){var n=e.handleFocus!==x.handleFocus;return x=t({},x,e),n&&(x.handleFocus?f():l()),T},T.remove=function(){e&&(e.removeEventListener("mouseover",s,!1),e.removeEventListener("mouseout",c,!1),l())},e&&(e.addEventListener("mouseover",s,!1),e.addEventListener("mouseout",c,!1)),T}});
(function(){var isIe=/(trident|msie)/i.test(navigator.userAgent);if(isIe&&document.getElementById&&window.addEventListener){window.addEventListener('hashchange',function(){var id=location.hash.substring(1),element;if(!(/^[A-z0-9_-]+$/.test(id))){return;}
element=document.getElementById(id);if(element){if(!(/^(?:a|select|input|button|textarea)$/i.test(element.tagName))){element.tabIndex=-1;}
element.focus();}},false);}})();
(function($){var masthead,menuToggle,siteNavContain,siteNavigation;function initMainNavigation(container){var dropdownToggle=$('<button />',{'class':'dropdown-toggle','aria-expanded':false}).append(twentyseventeenScreenReaderText.icon).append($('<span />',{'class':'screen-reader-text',text:twentyseventeenScreenReaderText.expand}));container.find('.menu-item-has-children > a, .page_item_has_children > a').after(dropdownToggle);container.find('.current-menu-ancestor > button').addClass('toggled-on').attr('aria-expanded','true').find('.screen-reader-text').text(twentyseventeenScreenReaderText.collapse);container.find('.current-menu-ancestor > .sub-menu').addClass('toggled-on');container.find('.dropdown-toggle').on('click',function(e){var _this=$(this),screenReaderSpan=_this.find('.screen-reader-text');e.preventDefault();_this.toggleClass('toggled-on');_this.next('.children, .sub-menu').toggleClass('toggled-on');_this.attr('aria-expanded',_this.attr('aria-expanded')==='false'?'true':'false');screenReaderSpan.text(screenReaderSpan.text()===twentyseventeenScreenReaderText.expand?twentyseventeenScreenReaderText.collapse:twentyseventeenScreenReaderText.expand);});}
initMainNavigation($('.main-navigation'));masthead=$('#masthead');menuToggle=masthead.find('.menu-toggle');siteNavContain=masthead.find('.main-navigation');siteNavigation=masthead.find('.main-navigation > div > ul');(function(){if(!menuToggle.length){return;}
menuToggle.attr('aria-expanded','false');menuToggle.on('click.twentyseventeen',function(){siteNavContain.toggleClass('toggled-on');$(this).attr('aria-expanded',siteNavContain.hasClass('toggled-on'));});})();(function(){if(!siteNavigation.length||!siteNavigation.children().length){return;}
function toggleFocusClassTouchScreen(){if('none'===$('.menu-toggle').css('display')){$(document.body).on('touchstart.twentyseventeen',function(e){if(!$(e.target).closest('.main-navigation li').length){$('.main-navigation li').removeClass('focus');}});siteNavigation.find('.menu-item-has-children > a, .page_item_has_children > a').on('touchstart.twentyseventeen',function(e){var el=$(this).parent('li');if(!el.hasClass('focus')){e.preventDefault();el.toggleClass('focus');el.siblings('.focus').removeClass('focus');}});}else{siteNavigation.find('.menu-item-has-children > a, .page_item_has_children > a').unbind('touchstart.twentyseventeen');}}
if('ontouchstart'in window){$(window).on('resize.twentyseventeen',toggleFocusClassTouchScreen);toggleFocusClassTouchScreen();}
siteNavigation.find('a').on('focus.twentyseventeen blur.twentyseventeen',function(){$(this).parents('.menu-item, .page_item').toggleClass('focus');});})();})(jQuery);
(function($){var $body=$('body'),$customHeader=$body.find('.custom-header'),$branding=$customHeader.find('.site-branding'),$navigation=$body.find('.navigation-top'),$navWrap=$navigation.find('.wrap'),$navMenuItem=$navigation.find('.menu-item'),$menuToggle=$navigation.find('.menu-toggle'),$menuScrollDown=$body.find('.menu-scroll-down'),$sidebar=$body.find('#secondary'),$entryContent=$body.find('.entry-content'),$formatQuote=$body.find('.format-quote blockquote'),isFrontPage=$body.hasClass('twentyseventeen-front-page')||$body.hasClass('home blog'),navigationFixedClass='site-navigation-fixed',navigationHeight,navigationOuterHeight,navPadding,navMenuItemHeight,idealNavHeight,navIsNotTooTall,headerOffset,menuTop=0,resizeTimer;$('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex], [contenteditable]','.site-content-contain').filter(':visible').on('focus',function(){if($navigation.hasClass('site-navigation-fixed')){var windowScrollTop=$(window).scrollTop(),fixedNavHeight=$navigation.height(),itemScrollTop=$(this).offset().top,offsetDiff=itemScrollTop-windowScrollTop;if($('#wpadminbar').length){offsetDiff-=$('#wpadminbar').height();}
if(offsetDiff<fixedNavHeight){$(window).scrollTo(itemScrollTop-(fixedNavHeight+50),0);}}});function setNavProps(){navigationHeight=$navigation.height();navigationOuterHeight=$navigation.outerHeight();navPadding=parseFloat($navWrap.css('padding-top'))*2;navMenuItemHeight=$navMenuItem.outerHeight()*2;idealNavHeight=navPadding+navMenuItemHeight;navIsNotTooTall=navigationHeight<=idealNavHeight;}
function adjustScrollClass(){if('none'===$menuToggle.css('display')){if(navIsNotTooTall){if(isFrontPage&&($body.hasClass('has-header-image')||$body.hasClass('has-header-video'))){headerOffset=$customHeader.innerHeight()-navigationOuterHeight;}else{headerOffset=$customHeader.innerHeight();}
if($(window).scrollTop()>=headerOffset){$navigation.addClass(navigationFixedClass);}else{$navigation.removeClass(navigationFixedClass);}}else{$navigation.removeClass(navigationFixedClass);}}}
function adjustHeaderHeight(){if('none'===$menuToggle.css('display')){if(isFrontPage){$branding.css('margin-bottom',navigationOuterHeight);}else{$customHeader.css('margin-bottom',navigationOuterHeight);}}else{$customHeader.css('margin-bottom','0');$branding.css('margin-bottom','0');}}
function setQuotesIcon(){$(twentyseventeenScreenReaderText.quote).prependTo($formatQuote);}
function belowEntryMetaClass(param){var sidebarPos,sidebarPosBottom;if(!$body.hasClass('has-sidebar')||typeof $sidebar==='undefined'||$sidebar.length<1||($body.hasClass('search')||$body.hasClass('single-attachment')||$body.hasClass('error404')||$body.hasClass('twentyseventeen-front-page'))){return;}
sidebarPos=$sidebar.offset();sidebarPosBottom=sidebarPos.top+($sidebar.height()+28);$entryContent.find(param).each(function(){var $element=$(this),elementPos=$element.offset(),elementPosTop=elementPos.top;if(elementPosTop>sidebarPosBottom){$element.addClass('below-entry-meta');}else{$element.removeClass('below-entry-meta');}});}
function supportsInlineSVG(){var div=document.createElement('div');div.innerHTML='<svg/>';return'http://www.w3.org/2000/svg'===('undefined'!==typeof SVGRect&&div.firstChild&&div.firstChild.namespaceURI);}
function checkiOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;}
function supportsFixedBackground(){var el=document.createElement('div'),isSupported;try{if(!('backgroundAttachment'in el.style)||checkiOS()){return false;}
el.style.backgroundAttachment='fixed';isSupported=('fixed'===el.style.backgroundAttachment);return isSupported;}
catch(e){return false;}}
$(function(){if($navigation.length){setNavProps();adjustScrollClass();}
if($menuScrollDown.length){if($('body').hasClass('admin-bar')){menuTop-=32;}
if($('body').hasClass('blog')){menuTop-=30;}
if(!$navigation.length){navigationOuterHeight=0;}
$menuScrollDown.on('click',function(e){e.preventDefault();$(window).scrollTo('#primary',{duration:600,offset:{top:menuTop-navigationOuterHeight}});});}
adjustHeaderHeight();setQuotesIcon();belowEntryMetaClass('blockquote.alignleft, blockquote.alignright');if(true===supportsInlineSVG()){document.documentElement.className=document.documentElement.className.replace(/(\s*)no-svg(\s*)/,'$1svg$2');}
if(true===supportsFixedBackground()){document.documentElement.className+=' background-fixed';}});if($navigation.length){$(window).on('scroll',function(){adjustScrollClass();adjustHeaderHeight();});$(window).on('resize',function(){setNavProps();setTimeout(adjustScrollClass,500);});}
$(window).on('resize',function(){clearTimeout(resizeTimer);resizeTimer=setTimeout(function(){belowEntryMetaClass('blockquote.alignleft, blockquote.alignright');},300);setTimeout(adjustHeaderHeight,1000);});$(document).on('wp-custom-header-video-loaded',function(){$body.addClass('has-header-video');});})(jQuery);
;
/*!
 * jQuery.scrollTo
 * Copyright (c) 2007 Ariel Flesler - aflesler ○ gmail • com | https://github.com/flesler
 * Licensed under MIT
 * https://github.com/flesler/jquery.scrollTo
 * @projectDescription Lightweight, cross-browser and highly customizable animated scrolling with jQuery
 * @author Ariel Flesler
 * @version 2.1.3
 */
(function(factory){'use strict';if(typeof define==='function'&&define.amd){define(['jquery'],factory);}else if(typeof module!=='undefined'&&module.exports){module.exports=factory(require('jquery'));}else{factory(jQuery);}})(function($){'use strict';var $scrollTo=$.scrollTo=function(target,duration,settings){return $(window).scrollTo(target,duration,settings);};$scrollTo.defaults={axis:'xy',duration:0,limit:true};function isWin(elem){return!elem.nodeName||$.inArray(elem.nodeName.toLowerCase(),['iframe','#document','html','body'])!==-1;}
function isFunction(obj){return typeof obj==='function'}
$.fn.scrollTo=function(target,duration,settings){if(typeof duration==='object'){settings=duration;duration=0;}
if(typeof settings==='function'){settings={onAfter:settings};}
if(target==='max'){target=9e9;}
settings=$.extend({},$scrollTo.defaults,settings);duration=duration||settings.duration;var queue=settings.queue&&settings.axis.length>1;if(queue){duration/=2;}
settings.offset=both(settings.offset);settings.over=both(settings.over);return this.each(function(){if(target===null)return;var win=isWin(this),elem=win?this.contentWindow||window:this,$elem=$(elem),targ=target,attr={},toff;switch(typeof targ){case'number':case'string':if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break;}
targ=win?$(targ):$(targ,elem);case'object':if(targ.length===0)return;if(targ.is||targ.style){toff=(targ=$(targ)).offset();}}
var offset=isFunction(settings.offset)&&settings.offset(elem,targ)||settings.offset;$.each(settings.axis.split(''),function(i,axis){var Pos=axis==='x'?'Left':'Top',pos=Pos.toLowerCase(),key='scroll'+Pos,prev=$elem[key](),max=$scrollTo.max(elem,axis);if(toff){attr[key]=toff[pos]+(win?0:prev-$elem.offset()[pos]);if(settings.margin){attr[key]-=parseInt(targ.css('margin'+Pos),10)||0;attr[key]-=parseInt(targ.css('border'+Pos+'Width'),10)||0;}
attr[key]+=offset[pos]||0;if(settings.over[pos]){attr[key]+=targ[axis==='x'?'width':'height']()*settings.over[pos];}}else{var val=targ[pos];attr[key]=val.slice&&val.slice(-1)==='%'?parseFloat(val)/100*max:val;}
if(settings.limit&&/^\d+$/.test(attr[key])){attr[key]=attr[key]<=0?0:Math.min(attr[key],max);}
if(!i&&settings.axis.length>1){if(prev===attr[key]){attr={};}else if(queue){animate(settings.onAfterFirst);attr={};}}});animate(settings.onAfter);function animate(callback){var opts=$.extend({},settings,{queue:true,duration:duration,complete:callback&&function(){callback.call(elem,targ,settings);}});$elem.animate(attr,opts);}});};$scrollTo.max=function(elem,axis){var Dim=axis==='x'?'Width':'Height',scroll='scroll'+Dim;if(!isWin(elem))
return elem[scroll]-$(elem)[Dim.toLowerCase()]();var size='client'+Dim,doc=elem.ownerDocument||elem.document,html=doc.documentElement,body=doc.body;return Math.max(html[scroll],body[scroll])-Math.min(html[size],body[size]);};function both(val){return isFunction(val)||$.isPlainObject(val)?val:{top:val,left:val};}
$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(t){return $(t.elem)[t.prop]();},set:function(t){var curr=this.get(t);if(t.options.interrupt&&t._last&&t._last!==curr){return $(t.elem).stop();}
var next=Math.round(t.now);if(curr!==next){$(t.elem)[t.prop](next);t._last=this.get(t);}}};return $scrollTo;});
jQuery(document).ready(function()
{var percentage=jQuery('#wp-admin-bar-autoptimize-cache-info .autoptimize-radial-bar').attr('percentage');var rotate=percentage*1.8;jQuery('#wp-admin-bar-autoptimize-cache-info .autoptimize-radial-bar .mask.full, #wp-admin-bar-autoptimize-cache-info .autoptimize-radial-bar .fill').css({'-webkit-transform':'rotate('+rotate+'deg)','-ms-transform':'rotate('+rotate+'deg)','transform':'rotate('+rotate+'deg)'});jQuery('#wp-admin-bar-autoptimize-cache-info .autoptimize-radial-bar .inset').css('background-color',jQuery('#wp-admin-bar-autoptimize .ab-sub-wrapper').css('background-color'));jQuery('#wp-admin-bar-autoptimize-delete-cache .ab-item').css('background-color',jQuery('#wpadminbar').css('background-color'));jQuery('#wp-admin-bar-autoptimize-default li').on('click',function(e)
{var id=(typeof e.target.id!='undefined'&&e.target.id)?e.target.id:jQuery(e.target).parent('li').attr('id');var action='';if(id=='wp-admin-bar-autoptimize-delete-cache'){action='autoptimize_delete_cache';}else{return;}
jQuery('#wp-admin-bar-autoptimize').removeClass('hover');var modal_loading=jQuery('<div class="autoptimize-loading"></div>').appendTo('body').show();var success=function(){jQuery('#wp-admin-bar-autoptimize-cache-info .size').attr('class','size green').html('0.00 B');jQuery('#wp-admin-bar-autoptimize-cache-info .files').html('0');jQuery('#wp-admin-bar-autoptimize-cache-info .percentage .numbers').attr('class','numbers green').html('0%');jQuery('#wp-admin-bar-autoptimize-cache-info .autoptimize-radial-bar .fill').attr('class','fill bg-green');jQuery('#wp-admin-bar-autoptimize').attr('class','menupop bullet-green');jQuery('#wp-admin-bar-autoptimize-cache-info .autoptimize-radial-bar .mask.full, #wp-admin-bar-autoptimize-cache-info .autoptimize-radial-bar .fill').css({'-webkit-transform':'rotate(0deg)','-ms-transform':'rotate(0deg)','transform':'rotate(0deg)'});};var notice=function(){jQuery('<div id="ao-delete-cache-timeout" class="notice notice-error is-dismissible"><p><strong><span style="display:block;clear:both;">'+autoptimize_ajax_object.error_msg+'</span></strong></p><button type="button" class="notice-dismiss"><span class="screen-reader-text">'+autoptimize_ajax_object.dismiss_msg+'</span></button></div><br>').insertAfter('#wpbody .wrap h1:first-of-type').show();};jQuery.ajax({type:'GET',url:autoptimize_ajax_object.ajaxurl,data:{'action':action,'nonce':autoptimize_ajax_object.nonce},dataType:'json',cache:false,timeout:9000,success:function(cleared)
{modal_loading.remove();if(cleared){success();}else{notice();}},error:function(jqXHR,textStatus)
{modal_loading.remove();notice();}});});});