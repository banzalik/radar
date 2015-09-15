/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/*global window*/
	(function (window) {
	    window.radar = __webpack_require__(1);
	})(window);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (function () {
	    var dir = './detectors/';
	
	    return {
	        init: function () {
	        },
	        version: __webpack_require__(2)(dir + 'version.js'),
	        getRootElement: __webpack_require__(4)(dir + 'getRootElement.js'),
	        getViewportSize: __webpack_require__(6)(dir + 'getViewportSize.js'),
	        getScreenSize: __webpack_require__(8)(dir + 'getScreenSize.js'),
	        getDocumentTitle: __webpack_require__(10)(dir + 'getDocumentTitle.js'),
	        getUa: __webpack_require__(12)(dir + 'getUa.js'),
	        ajax: __webpack_require__(16),
	        xpath: __webpack_require__(17),
	        string: __webpack_require__(18)
	    };
	})();


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./detectors/version.js": 3
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 2;


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = '0.0.1';


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./detectors/getRootElement.js": 5
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 4;


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*global document */
	/**
	 * Created by banzalik on 8/31/15.
	 */
	module.exports = function () {
	    var docElem = document.documentElement;
	    return 'CSS1Compat' === document.compatMode ? docElem : document.body || docElem;
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./detectors/getViewportSize.js": 7
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 6;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by banzalik on 8/31/15.
	 */
	module.exports = function () {
	    var root = __webpack_require__(5)();
	    return [root.clientWidth, root.clientHeight];
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./detectors/getScreenSize.js": 9
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 8;


/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * Created by banzalik on 8/31/15.
	 */
	module.exports = function () {
	    var screen = window.screen;
	
	    return [screen.width, screen.height];
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./detectors/getDocumentTitle.js": 11
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 10;


/***/ },
/* 11 */
/***/ function(module, exports) {

	/*global document */
	/**
	 * Created by banzalik on 9/1/15.
	 */
	module.exports = function () {
	    var title = document.title;
	    if (typeof title !== 'string' ) {
	        title =  document.getElementsByTagName('title');
	        if (title) {
	            title =  title[0].innerHTML;
	        } else {
	            title = '';
	        }
	    }
	    return title;
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./detectors/getUa.js": 13
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 12;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by banzalik on 8/31/15.
	 */
	module.exports = function () {
	    var Parser = __webpack_require__(14),
	        ua = new Parser();
	
	    return ua.getResult();
	};


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * UAParser.js v0.7.9
	 * Lightweight JavaScript-based User-Agent string parser
	 * https://github.com/faisalman/ua-parser-js
	 *
	 * Copyright © 2012-2015 Faisal Salman <fyzlman@gmail.com>
	 * Dual licensed under GPLv2 & MIT
	 */
	(function(window,undefined){"use strict";var LIBVERSION="0.7.9",EMPTY="",UNKNOWN="?",FUNC_TYPE="function",UNDEF_TYPE="undefined",OBJ_TYPE="object",STR_TYPE="string",MAJOR="major",MODEL="model",NAME="name",TYPE="type",VENDOR="vendor",VERSION="version",ARCHITECTURE="architecture",CONSOLE="console",MOBILE="mobile",TABLET="tablet",SMARTTV="smarttv",WEARABLE="wearable",EMBEDDED="embedded";var util={extend:function(regexes,extensions){for(var i in extensions){if("browser cpu device engine os".indexOf(i)!==-1&&extensions[i].length%2===0){regexes[i]=extensions[i].concat(regexes[i])}}return regexes},has:function(str1,str2){if(typeof str1==="string"){return str2.toLowerCase().indexOf(str1.toLowerCase())!==-1}else{return false}},lowerize:function(str){return str.toLowerCase()},major:function(version){return typeof version===STR_TYPE?version.split(".")[0]:undefined}};var mapper={rgx:function(){var result,i=0,j,k,p,q,matches,match,args=arguments;while(i<args.length&&!matches){var regex=args[i],props=args[i+1];if(typeof result===UNDEF_TYPE){result={};for(p in props){q=props[p];if(typeof q===OBJ_TYPE){result[q[0]]=undefined}else{result[q]=undefined}}}j=k=0;while(j<regex.length&&!matches){matches=regex[j++].exec(this.getUA());if(!!matches){for(p=0;p<props.length;p++){match=matches[++k];q=props[p];if(typeof q===OBJ_TYPE&&q.length>0){if(q.length==2){if(typeof q[1]==FUNC_TYPE){result[q[0]]=q[1].call(this,match)}else{result[q[0]]=q[1]}}else if(q.length==3){if(typeof q[1]===FUNC_TYPE&&!(q[1].exec&&q[1].test)){result[q[0]]=match?q[1].call(this,match,q[2]):undefined}else{result[q[0]]=match?match.replace(q[1],q[2]):undefined}}else if(q.length==4){result[q[0]]=match?q[3].call(this,match.replace(q[1],q[2])):undefined}}else{result[q]=match?match:undefined}}}}i+=2}return result},str:function(str,map){for(var i in map){if(typeof map[i]===OBJ_TYPE&&map[i].length>0){for(var j=0;j<map[i].length;j++){if(util.has(map[i][j],str)){return i===UNKNOWN?undefined:i}}}else if(util.has(map[i],str)){return i===UNKNOWN?undefined:i}}return str}};var maps={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}};var regexes={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[NAME,VERSION],[/\s(opr)\/([\w\.]+)/i],[[NAME,"Opera"],VERSION],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium)\/([\w\.-]+)/i],[NAME,VERSION],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[NAME,"IE"],VERSION],[/(edge)\/((\d+)?[\w\.]+)/i],[NAME,VERSION],[/(yabrowser)\/([\w\.]+)/i],[[NAME,"Yandex"],VERSION],[/(comodo_dragon)\/([\w\.]+)/i],[[NAME,/_/g," "],VERSION],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,/(uc\s?browser|qqbrowser)[\/\s]?([\w\.]+)/i],[NAME,VERSION],[/(dolfin)\/([\w\.]+)/i],[[NAME,"Dolphin"],VERSION],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[NAME,"Chrome"],VERSION],[/XiaoMi\/MiuiBrowser\/([\w\.]+)/i],[VERSION,[NAME,"MIUI Browser"]],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i],[VERSION,[NAME,"Android Browser"]],[/FBAV\/([\w\.]+);/i],[VERSION,[NAME,"Facebook"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[VERSION,[NAME,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[VERSION,NAME],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[NAME,[VERSION,mapper.str,maps.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[NAME,VERSION],[/(navigator|netscape)\/([\w\.-]+)/i],[[NAME,"Netscape"],VERSION],[/fxios\/([\w\.-]+)/i],[VERSION,[NAME,"Firefox"]],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[NAME,VERSION]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[ARCHITECTURE,"amd64"]],[/(ia32(?=;))/i],[[ARCHITECTURE,util.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[ARCHITECTURE,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[ARCHITECTURE,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[ARCHITECTURE,/ower/,"",util.lowerize]],[/(sun4\w)[;\)]/i],[[ARCHITECTURE,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[ARCHITECTURE,util.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[MODEL,VENDOR,[TYPE,TABLET]],[/applecoremedia\/[\w\.]+ \((ipad)/],[MODEL,[VENDOR,"Apple"],[TYPE,TABLET]],[/(apple\s{0,1}tv)/i],[[MODEL,"Apple TV"],[VENDOR,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[VENDOR,MODEL,[TYPE,TABLET]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],[MODEL,[VENDOR,"Amazon"],[TYPE,TABLET]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[[MODEL,mapper.str,maps.device.amazon.model],[VENDOR,"Amazon"],[TYPE,MOBILE]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[MODEL,VENDOR,[TYPE,MOBILE]],[/\((ip[honed|\s\w*]+);/i],[MODEL,[VENDOR,"Apple"],[TYPE,MOBILE]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/\(bb10;\s(\w+)/i],[MODEL,[VENDOR,"BlackBerry"],[TYPE,MOBILE]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i],[MODEL,[VENDOR,"Asus"],[TYPE,TABLET]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[VENDOR,"Sony"],[MODEL,"Xperia Tablet"],[TYPE,TABLET]],[/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],[[VENDOR,"Sony"],[MODEL,"Xperia Phone"],[TYPE,MOBILE]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[VENDOR,MODEL,[TYPE,CONSOLE]],[/android.+;\s(shield)\sbuild/i],[MODEL,[VENDOR,"Nvidia"],[TYPE,CONSOLE]],[/(playstation\s[3portablevi]+)/i],[MODEL,[VENDOR,"Sony"],[TYPE,CONSOLE]],[/(sprint\s(\w+))/i],[[VENDOR,mapper.str,maps.device.sprint.vendor],[MODEL,mapper.str,maps.device.sprint.model],[TYPE,MOBILE]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[VENDOR,MODEL,[TYPE,TABLET]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[VENDOR,[MODEL,/_/g," "],[TYPE,MOBILE]],[/(nexus\s9)/i],[MODEL,[VENDOR,"HTC"],[TYPE,TABLET]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[MODEL,[VENDOR,"Microsoft"],[TYPE,CONSOLE]],[/(kin\.[onetw]{3})/i],[[MODEL,/\./g," "],[VENDOR,"Microsoft"],[TYPE,MOBILE]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i],[MODEL,[VENDOR,"Motorola"],[TYPE,MOBILE]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[MODEL,[VENDOR,"Motorola"],[TYPE,TABLET]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[VENDOR,"Samsung"],MODEL,[TYPE,TABLET]],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[VENDOR,"Samsung"],MODEL,[TYPE,MOBILE]],[/(samsung);smarttv/i],[VENDOR,MODEL,[TYPE,SMARTTV]],[/\(dtv[\);].+(aquos)/i],[MODEL,[VENDOR,"Sharp"],[TYPE,SMARTTV]],[/sie-(\w+)*/i],[MODEL,[VENDOR,"Siemens"],[TYPE,MOBILE]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[VENDOR,"Nokia"],MODEL,[TYPE,MOBILE]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[MODEL,[VENDOR,"Acer"],[TYPE,TABLET]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[VENDOR,"LG"],MODEL,[TYPE,TABLET]],[/(lg) netcast\.tv/i],[VENDOR,MODEL,[TYPE,SMARTTV]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i],[MODEL,[VENDOR,"LG"],[TYPE,MOBILE]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[MODEL,[VENDOR,"Lenovo"],[TYPE,TABLET]],[/linux;.+((jolla));/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/((pebble))app\/[\d\.]+\s/i],[VENDOR,MODEL,[TYPE,WEARABLE]],[/android.+;\s(glass)\s\d/i],[MODEL,[VENDOR,"Google"],[TYPE,WEARABLE]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i],[[MODEL,/_/g," "],[VENDOR,"Xiaomi"],[TYPE,MOBILE]],[/(mobile|tablet);.+rv\:.+gecko\//i],[[TYPE,util.lowerize],VENDOR,MODEL]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[VERSION,[NAME,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[NAME,VERSION],[/rv\:([\w\.]+).*(gecko)/i],[VERSION,NAME]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[NAME,VERSION],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[NAME,[VERSION,mapper.str,maps.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[NAME,"Windows"],[VERSION,mapper.str,maps.os.windows.version]],[/\((bb)(10);/i],[[NAME,"BlackBerry"],VERSION],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[NAME,VERSION],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[NAME,"Symbian"],VERSION],[/\((series40);/i],[NAME],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[NAME,"Firefox OS"],VERSION],[/(nintendo|playstation)\s([wids3portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[NAME,VERSION],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[NAME,"Chromium OS"],VERSION],[/(sunos)\s?([\w\.]+\d)*/i],[[NAME,"Solaris"],VERSION],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[NAME,VERSION],[/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],[[NAME,"iOS"],[VERSION,/_/g,"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[NAME,"Mac OS"],[VERSION,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(haiku)\s(\w+)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[NAME,VERSION]]};var UAParser=function(uastring,extensions){if(!(this instanceof UAParser)){return new UAParser(uastring,extensions).getResult()}var ua=uastring||(window&&window.navigator&&window.navigator.userAgent?window.navigator.userAgent:EMPTY);var rgxmap=extensions?util.extend(regexes,extensions):regexes;this.getBrowser=function(){var browser=mapper.rgx.apply(this,rgxmap.browser);browser.major=util.major(browser.version);return browser};this.getCPU=function(){return mapper.rgx.apply(this,rgxmap.cpu)};this.getDevice=function(){return mapper.rgx.apply(this,rgxmap.device)};this.getEngine=function(){return mapper.rgx.apply(this,rgxmap.engine)};this.getOS=function(){return mapper.rgx.apply(this,rgxmap.os)};this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}};this.getUA=function(){return ua};this.setUA=function(uastring){ua=uastring;return this};this.setUA(ua);return this};UAParser.VERSION=LIBVERSION;UAParser.BROWSER={NAME:NAME,MAJOR:MAJOR,VERSION:VERSION};UAParser.CPU={ARCHITECTURE:ARCHITECTURE};UAParser.DEVICE={MODEL:MODEL,VENDOR:VENDOR,TYPE:TYPE,CONSOLE:CONSOLE,MOBILE:MOBILE,SMARTTV:SMARTTV,TABLET:TABLET,WEARABLE:WEARABLE,EMBEDDED:EMBEDDED};UAParser.ENGINE={NAME:NAME,VERSION:VERSION};UAParser.OS={NAME:NAME,VERSION:VERSION};if(typeof exports!==UNDEF_TYPE){if(typeof module!==UNDEF_TYPE&&module.exports){exports=module.exports=UAParser}exports.UAParser=UAParser}else{if("function"===FUNC_TYPE&&__webpack_require__(15)){!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return UAParser}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}else{window.UAParser=UAParser}}var $=window.jQuery||window.Zepto;if(typeof $!==UNDEF_TYPE){var parser=new UAParser;$.ua=parser.getResult();$.ua.get=function(){return parser.getUA()};$.ua.set=function(uastring){parser.setUA(uastring);var result=parser.getResult();for(var prop in result){$.ua[prop]=result[prop]}}}})(typeof window==="object"?window:this);

/***/ },
/* 15 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;
	
	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 16 */
/***/ function(module, exports) {

	/*global window, ActiveXObject*/
	module.exports = function ajax(url, callback, data, x) {
	    if (!url) {
	        return;
	    }
	    try {
	        x = new (window.XMLHttpRequest || ActiveXObject)('MSXML2.XMLHTTP.3.0');
	        x.open(data ? 'POST' : 'GET', url, 1);
	        x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	        x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	        x.onreadystatechange = function () {
	            x.readyState > 3 && callback && callback(x.responseText, x);
	        };
	        x.send(data);
	    }
	    catch (e) {
	        window.console && console.log(e);
	    }
	};


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function () {
	    'use strict';
	
	    var my = {},
	        Str = __webpack_require__(18);
	
	    /**
	     * Gets an XPath for an element which describes its hierarchical location.
	     */
	    my.getElementXPath = function (element) {
	        if (element && element.id) {
	            return '//*[@id="' + element.id + '"]';
	        }
	        else {
	            return my.getElementTreeXPath(element);
	        }
	    };
	
	    my.getElementTreeXPath = function (element) {
	        var paths = [];
	
	        // Use nodeName (instead of localName) so namespace prefix is included (if any).
	        for (; element && element.nodeType == Node.ELEMENT_NODE; element = element.parentNode) {
	            var index = 0,
	                hasFollowingSiblings = false;
	            for (var sibling = element.previousSibling; sibling; sibling = sibling.previousSibling) {
	                if (sibling.nodeType == Node.DOCUMENT_TYPE_NODE) {
	                    continue;
	                }
	
	                if (sibling.nodeName == element.nodeName) {
	                    ++index;
	                }
	            }
	
	            for (var sibling = element.nextSibling; sibling && !hasFollowingSiblings;
	                 sibling = sibling.nextSibling) {
	                if (sibling.nodeName == element.nodeName) {
	                    hasFollowingSiblings = true;
	                }
	            }
	
	            var tagName = (element.prefix ? element.prefix + ':' : '') + element.localName,
	                pathIndex = (index || hasFollowingSiblings ? '[' + (index + 1) + ']' : '');
	            paths.splice(0, 0, tagName + pathIndex);
	        }
	
	        return paths.length ? '/' + paths.join('/') : null;
	    };
	
	    my.cssToXPath = function (rule) {
	        var regElement = /^([#.]?)([a-z0-9\\*_-]*)((\|)([a-z0-9\\*_-]*))?/i,
	            regAttr1 = /^\[([^\]]*)\]/i,
	            regAttr2 = /^\[\s*([^~=\s]+)\s*(~?=)\s*"([^"]+)"\s*\]/i,
	            regPseudo = /^:([a-z_-])+/i,
	            regCombinator = /^(\s*[>+\s])?/i,
	            regComma = /^\s*,/i,
	            index = 1,
	            parts = ['//', '*'],
	            lastRule = null;
	
	        while (rule.length && rule != lastRule) {
	            lastRule = rule;
	
	            // Trim leading whitespace
	            rule = Str.trim(rule);
	            if (!rule.length) {
	                break;
	            }
	
	            // Match the element identifier
	            var m = regElement.exec(rule);
	            if (m) {
	                if (!m[1]) {
	                    // XXXjoe Namespace ignored for now
	                    if (m[5]) {
	                        parts[index] = m[5];
	                    }
	                    else {
	                        parts[index] = m[2];
	                    }
	                }
	                else if (m[1] == '#') {
	                    parts.push('[@id=\'' + m[2] + '\']');
	                }
	                else if (m[1] == '.') {
	                    parts.push("[contains(concat(' ',normalize-space(@class),' '), ' " + m[2] + " ')]");
	                }
	
	                rule = rule.substr(m[0].length);
	            }
	
	            // Match attribute selectors
	            m = regAttr2.exec(rule);
	            if (m) {
	                if (m[2] == '~=')
	                    parts.push("[contains(@" + m[1] + ", '" + m[3] + "')]");
	                else
	                    parts.push("[@" + m[1] + "='" + m[3] + "']");
	
	                rule = rule.substr(m[0].length);
	            }
	            else {
	                m = regAttr1.exec(rule);
	                if (m) {
	                    parts.push("[@" + m[1] + "]");
	                    rule = rule.substr(m[0].length);
	                }
	            }
	
	            // Skip over pseudo-classes and pseudo-elements, which are of no use to us
	            m = regPseudo.exec(rule);
	            while (m) {
	                rule = rule.substr(m[0].length);
	                m = regPseudo.exec(rule);
	            }
	
	            // Match combinators
	            m = regCombinator.exec(rule);
	            if (m && m[0].length) {
	                if (m[0].indexOf('>') != -1)
	                    parts.push('/');
	                else if (m[0].indexOf('+') != -1)
	                    parts.push('/following-sibling::');
	                else
	                    parts.push('//');
	
	                index = parts.length;
	                parts.push('*');
	                rule = rule.substr(m[0].length);
	            }
	
	            m = regComma.exec(rule);
	            if (m) {
	                parts.push(' | ', '//', '*');
	                index = parts.length - 1;
	                rule = rule.substr(m[0].length);
	            }
	        }
	
	        var xpath = parts.join('');
	        return xpath;
	    };
	
	    my.getElementsBySelector = function (doc, css) {
	        var xpath = my.cssToXPath(css);
	        return my.getElementsByXPath(doc, xpath);
	    };
	
	    my.getElementsByXPath = function (doc, xpath) {
	        try {
	            return my.evaluateXPath(doc, xpath);
	        }
	        catch (ex) {
	            return [];
	        }
	    };
	
	    /**
	     * Evaluates an XPath expression.
	     *
	     * @param {Document} doc
	     * @param {String} xpath The XPath expression.
	     * @param {Node} contextNode The context node.
	     * @param {int} resultType
	     *
	     * @returns {*} The result of the XPath expression, depending on resultType :<br> <ul>
	     *          <li>if it is XPathResult.NUMBER_TYPE, then it returns a Number</li>
	     *          <li>if it is XPathResult.STRING_TYPE, then it returns a String</li>
	     *          <li>if it is XPathResult.BOOLEAN_TYPE, then it returns a boolean</li>
	     *          <li>if it is XPathResult.UNORDERED_NODE_ITERATOR_TYPE
	     *              or XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, then it returns an array of nodes</li>
	     *          <li>if it is XPathResult.ORDERED_NODE_SNAPSHOT_TYPE
	     *              or XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, then it returns an array of nodes</li>
	     *          <li>if it is XPathResult.ANY_UNORDERED_NODE_TYPE
	     *              or XPathResult.FIRST_ORDERED_NODE_TYPE, then it returns a single node</li>
	     *          </ul>
	     */
	    my.evaluateXPath = function (doc, xpath, contextNode, resultType) {
	        if (contextNode === undefined)
	            contextNode = doc;
	
	        if (resultType === undefined)
	            resultType = XPathResult.ANY_TYPE;
	
	        var result = doc.evaluate(xpath, contextNode, null, resultType, null);
	
	        switch (result.resultType) {
	            case XPathResult.NUMBER_TYPE:
	                return result.numberValue;
	
	            case XPathResult.STRING_TYPE:
	                return result.stringValue;
	
	            case XPathResult.BOOLEAN_TYPE:
	                return result.booleanValue;
	
	            case XPathResult.UNORDERED_NODE_ITERATOR_TYPE:
	            case XPathResult.ORDERED_NODE_ITERATOR_TYPE:
	                var nodes = [];
	                for (var item = result.iterateNext(); item; item = result.iterateNext()) {
	                    nodes.push(item);
	                }
	                return nodes;
	
	            case XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE:
	            case XPathResult.ORDERED_NODE_SNAPSHOT_TYPE:
	                var nodes = [];
	                for (var i = 0; i < result.snapshotLength; ++i) {
	                    nodes.push(result.snapshotItem(i));
	                }
	                return nodes;
	
	            case XPathResult.ANY_UNORDERED_NODE_TYPE:
	            case XPathResult.FIRST_ORDERED_NODE_TYPE:
	                return result.singleNodeValue;
	        }
	    };
	
	    my.getRuleMatchingElements = function (rule, doc) {
	        var css = rule.selectorText,
	            xpath = my.cssToXPath(css);
	        return my.getElementsByXPath(doc, xpath);
	    };
	
	    return my;
	};


/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = {
	    trim: function (text) {
	        return text.replace(/^\s*|\s*$/g, '');
	    }
	};


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODUyZDBhN2M4ODFlMTEzZWNiMWYiLCJ3ZWJwYWNrOi8vLy4vbGliL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvcmFkYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbGliIF4uKnZlcnNpb25cXC5qcyQiLCJ3ZWJwYWNrOi8vLy4vbGliL2RldGVjdG9ycy92ZXJzaW9uLmpzIiwid2VicGFjazovLy8uL2xpYiBeLipnZXRSb290RWxlbWVudFxcLmpzJCIsIndlYnBhY2s6Ly8vLi9saWIvZGV0ZWN0b3JzL2dldFJvb3RFbGVtZW50LmpzIiwid2VicGFjazovLy8uL2xpYiBeLipnZXRWaWV3cG9ydFNpemVcXC5qcyQiLCJ3ZWJwYWNrOi8vLy4vbGliL2RldGVjdG9ycy9nZXRWaWV3cG9ydFNpemUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliIF4uKmdldFNjcmVlblNpemVcXC5qcyQiLCJ3ZWJwYWNrOi8vLy4vbGliL2RldGVjdG9ycy9nZXRTY3JlZW5TaXplLmpzIiwid2VicGFjazovLy8uL2xpYiBeLipnZXREb2N1bWVudFRpdGxlXFwuanMkIiwid2VicGFjazovLy8uL2xpYi9kZXRlY3RvcnMvZ2V0RG9jdW1lbnRUaXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIgXi4qZ2V0VWFcXC5qcyQiLCJ3ZWJwYWNrOi8vLy4vbGliL2RldGVjdG9ycy9nZXRVYS5qcyIsIndlYnBhY2s6Ly8vLi9+L3VhLXBhcnNlci1qcy9kaXN0L3VhLXBhcnNlci5taW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2FtZC1vcHRpb25zLmpzIiwid2VicGFjazovLy8uL2xpYi9uZXR3b3JrL2FqYXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3hwYXRoL3hwYXRoLmpzIiwid2VicGFjazovLy8uL2xpYi9zdHJpbmcvc3RyaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7QUNIRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7O0FDaEJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWlDLHVEQUF1RDtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2RBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBaUMsdURBQXVEO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWlDLHVEQUF1RDtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBaUMsdURBQXVEO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBaUMsdURBQXVEO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FB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O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzREFBcUQsTUFBTTtBQUMzRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCLDJCQUEyQjtBQUMxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNsT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJyYWRhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgODUyZDBhN2M4ODFlMTEzZWNiMWZcbiAqKi8iLCIvKmdsb2JhbCB3aW5kb3cqL1xuKGZ1bmN0aW9uICh3aW5kb3cpIHtcbiAgICB3aW5kb3cucmFkYXIgPSByZXF1aXJlKCcuL3JhZGFyLmpzJyk7XG59KSh3aW5kb3cpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2xpYi9hcHAuanNcbiAqKiBtb2R1bGUgaWQgPSAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRpciA9ICcuL2RldGVjdG9ycy8nO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICB9LFxuICAgICAgICB2ZXJzaW9uOiByZXF1aXJlKGRpciArICd2ZXJzaW9uLmpzJyksXG4gICAgICAgIGdldFJvb3RFbGVtZW50OiByZXF1aXJlKGRpciArICdnZXRSb290RWxlbWVudC5qcycpLFxuICAgICAgICBnZXRWaWV3cG9ydFNpemU6IHJlcXVpcmUoZGlyICsgJ2dldFZpZXdwb3J0U2l6ZS5qcycpLFxuICAgICAgICBnZXRTY3JlZW5TaXplOiByZXF1aXJlKGRpciArICdnZXRTY3JlZW5TaXplLmpzJyksXG4gICAgICAgIGdldERvY3VtZW50VGl0bGU6IHJlcXVpcmUoZGlyICsgJ2dldERvY3VtZW50VGl0bGUuanMnKSxcbiAgICAgICAgZ2V0VWE6IHJlcXVpcmUoZGlyICsgJ2dldFVhLmpzJyksXG4gICAgICAgIGFqYXg6IHJlcXVpcmUoJy4vbmV0d29yay9hamF4LmpzJyksXG4gICAgICAgIHhwYXRoOiByZXF1aXJlKCcuL3hwYXRoL3hwYXRoLmpzJyksXG4gICAgICAgIHN0cmluZzogcmVxdWlyZSgnLi9zdHJpbmcvc3RyaW5nLmpzJylcbiAgICB9O1xufSkoKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9saWIvcmFkYXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgbWFwID0ge1xuXHRcIi4vZGV0ZWN0b3JzL3ZlcnNpb24uanNcIjogM1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRyZXR1cm4gbWFwW3JlcV0gfHwgKGZ1bmN0aW9uKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKSB9KCkpO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAyO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2xpYiBeLip2ZXJzaW9uXFwuanMkXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAnMC4wLjEnO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2xpYi9kZXRlY3RvcnMvdmVyc2lvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBtYXAgPSB7XG5cdFwiLi9kZXRlY3RvcnMvZ2V0Um9vdEVsZW1lbnQuanNcIjogNVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRyZXR1cm4gbWFwW3JlcV0gfHwgKGZ1bmN0aW9uKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKSB9KCkpO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSA0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2xpYiBeLipnZXRSb290RWxlbWVudFxcLmpzJFxuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qZ2xvYmFsIGRvY3VtZW50ICovXG4vKipcbiAqIENyZWF0ZWQgYnkgYmFuemFsaWsgb24gOC8zMS8xNS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRvY0VsZW0gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgcmV0dXJuICdDU1MxQ29tcGF0JyA9PT0gZG9jdW1lbnQuY29tcGF0TW9kZSA/IGRvY0VsZW0gOiBkb2N1bWVudC5ib2R5IHx8IGRvY0VsZW07XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2xpYi9kZXRlY3RvcnMvZ2V0Um9vdEVsZW1lbnQuanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgbWFwID0ge1xuXHRcIi4vZGV0ZWN0b3JzL2dldFZpZXdwb3J0U2l6ZS5qc1wiOiA3XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHJldHVybiBtYXBbcmVxXSB8fCAoZnVuY3Rpb24oKSB7IHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpIH0oKSk7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDY7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbGliIF4uKmdldFZpZXdwb3J0U2l6ZVxcLmpzJFxuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ3JlYXRlZCBieSBiYW56YWxpayBvbiA4LzMxLzE1LlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcm9vdCA9IHJlcXVpcmUoJy4vZ2V0Um9vdEVsZW1lbnQuanMnKSgpO1xuICAgIHJldHVybiBbcm9vdC5jbGllbnRXaWR0aCwgcm9vdC5jbGllbnRIZWlnaHRdO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9saWIvZGV0ZWN0b3JzL2dldFZpZXdwb3J0U2l6ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBtYXAgPSB7XG5cdFwiLi9kZXRlY3RvcnMvZ2V0U2NyZWVuU2l6ZS5qc1wiOiA5XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHJldHVybiBtYXBbcmVxXSB8fCAoZnVuY3Rpb24oKSB7IHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpIH0oKSk7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDg7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbGliIF4uKmdldFNjcmVlblNpemVcXC5qcyRcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENyZWF0ZWQgYnkgYmFuemFsaWsgb24gOC8zMS8xNS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNjcmVlbiA9IHdpbmRvdy5zY3JlZW47XG5cbiAgICByZXR1cm4gW3NjcmVlbi53aWR0aCwgc2NyZWVuLmhlaWdodF07XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2xpYi9kZXRlY3RvcnMvZ2V0U2NyZWVuU2l6ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBtYXAgPSB7XG5cdFwiLi9kZXRlY3RvcnMvZ2V0RG9jdW1lbnRUaXRsZS5qc1wiOiAxMVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRyZXR1cm4gbWFwW3JlcV0gfHwgKGZ1bmN0aW9uKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKSB9KCkpO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAxMDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9saWIgXi4qZ2V0RG9jdW1lbnRUaXRsZVxcLmpzJFxuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKmdsb2JhbCBkb2N1bWVudCAqL1xuLyoqXG4gKiBDcmVhdGVkIGJ5IGJhbnphbGlrIG9uIDkvMS8xNS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRpdGxlID0gZG9jdW1lbnQudGl0bGU7XG4gICAgaWYgKHR5cGVvZiB0aXRsZSAhPT0gJ3N0cmluZycgKSB7XG4gICAgICAgIHRpdGxlID0gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0aXRsZScpO1xuICAgICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgICAgIHRpdGxlID0gIHRpdGxlWzBdLmlubmVySFRNTDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRpdGxlID0gJyc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRpdGxlO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9saWIvZGV0ZWN0b3JzL2dldERvY3VtZW50VGl0bGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIG1hcCA9IHtcblx0XCIuL2RldGVjdG9ycy9nZXRVYS5qc1wiOiAxM1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRyZXR1cm4gbWFwW3JlcV0gfHwgKGZ1bmN0aW9uKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKSB9KCkpO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAxMjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9saWIgXi4qZ2V0VWFcXC5qcyRcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGJhbnphbGlrIG9uIDgvMzEvMTUuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBQYXJzZXIgPSByZXF1aXJlKCcuLi8uLi9ub2RlX21vZHVsZXMvdWEtcGFyc2VyLWpzL2Rpc3QvdWEtcGFyc2VyLm1pbi5qcycpLFxuICAgICAgICB1YSA9IG5ldyBQYXJzZXIoKTtcblxuICAgIHJldHVybiB1YS5nZXRSZXN1bHQoKTtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbGliL2RldGVjdG9ycy9nZXRVYS5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIFVBUGFyc2VyLmpzIHYwLjcuOVxuICogTGlnaHR3ZWlnaHQgSmF2YVNjcmlwdC1iYXNlZCBVc2VyLUFnZW50IHN0cmluZyBwYXJzZXJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWlzYWxtYW4vdWEtcGFyc2VyLWpzXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTItMjAxNSBGYWlzYWwgU2FsbWFuIDxmeXpsbWFuQGdtYWlsLmNvbT5cbiAqIER1YWwgbGljZW5zZWQgdW5kZXIgR1BMdjIgJiBNSVRcbiAqL1xuKGZ1bmN0aW9uKHdpbmRvdyx1bmRlZmluZWQpe1widXNlIHN0cmljdFwiO3ZhciBMSUJWRVJTSU9OPVwiMC43LjlcIixFTVBUWT1cIlwiLFVOS05PV049XCI/XCIsRlVOQ19UWVBFPVwiZnVuY3Rpb25cIixVTkRFRl9UWVBFPVwidW5kZWZpbmVkXCIsT0JKX1RZUEU9XCJvYmplY3RcIixTVFJfVFlQRT1cInN0cmluZ1wiLE1BSk9SPVwibWFqb3JcIixNT0RFTD1cIm1vZGVsXCIsTkFNRT1cIm5hbWVcIixUWVBFPVwidHlwZVwiLFZFTkRPUj1cInZlbmRvclwiLFZFUlNJT049XCJ2ZXJzaW9uXCIsQVJDSElURUNUVVJFPVwiYXJjaGl0ZWN0dXJlXCIsQ09OU09MRT1cImNvbnNvbGVcIixNT0JJTEU9XCJtb2JpbGVcIixUQUJMRVQ9XCJ0YWJsZXRcIixTTUFSVFRWPVwic21hcnR0dlwiLFdFQVJBQkxFPVwid2VhcmFibGVcIixFTUJFRERFRD1cImVtYmVkZGVkXCI7dmFyIHV0aWw9e2V4dGVuZDpmdW5jdGlvbihyZWdleGVzLGV4dGVuc2lvbnMpe2Zvcih2YXIgaSBpbiBleHRlbnNpb25zKXtpZihcImJyb3dzZXIgY3B1IGRldmljZSBlbmdpbmUgb3NcIi5pbmRleE9mKGkpIT09LTEmJmV4dGVuc2lvbnNbaV0ubGVuZ3RoJTI9PT0wKXtyZWdleGVzW2ldPWV4dGVuc2lvbnNbaV0uY29uY2F0KHJlZ2V4ZXNbaV0pfX1yZXR1cm4gcmVnZXhlc30saGFzOmZ1bmN0aW9uKHN0cjEsc3RyMil7aWYodHlwZW9mIHN0cjE9PT1cInN0cmluZ1wiKXtyZXR1cm4gc3RyMi50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc3RyMS50b0xvd2VyQ2FzZSgpKSE9PS0xfWVsc2V7cmV0dXJuIGZhbHNlfX0sbG93ZXJpemU6ZnVuY3Rpb24oc3RyKXtyZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCl9LG1ham9yOmZ1bmN0aW9uKHZlcnNpb24pe3JldHVybiB0eXBlb2YgdmVyc2lvbj09PVNUUl9UWVBFP3ZlcnNpb24uc3BsaXQoXCIuXCIpWzBdOnVuZGVmaW5lZH19O3ZhciBtYXBwZXI9e3JneDpmdW5jdGlvbigpe3ZhciByZXN1bHQsaT0wLGosayxwLHEsbWF0Y2hlcyxtYXRjaCxhcmdzPWFyZ3VtZW50czt3aGlsZShpPGFyZ3MubGVuZ3RoJiYhbWF0Y2hlcyl7dmFyIHJlZ2V4PWFyZ3NbaV0scHJvcHM9YXJnc1tpKzFdO2lmKHR5cGVvZiByZXN1bHQ9PT1VTkRFRl9UWVBFKXtyZXN1bHQ9e307Zm9yKHAgaW4gcHJvcHMpe3E9cHJvcHNbcF07aWYodHlwZW9mIHE9PT1PQkpfVFlQRSl7cmVzdWx0W3FbMF1dPXVuZGVmaW5lZH1lbHNle3Jlc3VsdFtxXT11bmRlZmluZWR9fX1qPWs9MDt3aGlsZShqPHJlZ2V4Lmxlbmd0aCYmIW1hdGNoZXMpe21hdGNoZXM9cmVnZXhbaisrXS5leGVjKHRoaXMuZ2V0VUEoKSk7aWYoISFtYXRjaGVzKXtmb3IocD0wO3A8cHJvcHMubGVuZ3RoO3ArKyl7bWF0Y2g9bWF0Y2hlc1srK2tdO3E9cHJvcHNbcF07aWYodHlwZW9mIHE9PT1PQkpfVFlQRSYmcS5sZW5ndGg+MCl7aWYocS5sZW5ndGg9PTIpe2lmKHR5cGVvZiBxWzFdPT1GVU5DX1RZUEUpe3Jlc3VsdFtxWzBdXT1xWzFdLmNhbGwodGhpcyxtYXRjaCl9ZWxzZXtyZXN1bHRbcVswXV09cVsxXX19ZWxzZSBpZihxLmxlbmd0aD09Myl7aWYodHlwZW9mIHFbMV09PT1GVU5DX1RZUEUmJiEocVsxXS5leGVjJiZxWzFdLnRlc3QpKXtyZXN1bHRbcVswXV09bWF0Y2g/cVsxXS5jYWxsKHRoaXMsbWF0Y2gscVsyXSk6dW5kZWZpbmVkfWVsc2V7cmVzdWx0W3FbMF1dPW1hdGNoP21hdGNoLnJlcGxhY2UocVsxXSxxWzJdKTp1bmRlZmluZWR9fWVsc2UgaWYocS5sZW5ndGg9PTQpe3Jlc3VsdFtxWzBdXT1tYXRjaD9xWzNdLmNhbGwodGhpcyxtYXRjaC5yZXBsYWNlKHFbMV0scVsyXSkpOnVuZGVmaW5lZH19ZWxzZXtyZXN1bHRbcV09bWF0Y2g/bWF0Y2g6dW5kZWZpbmVkfX19fWkrPTJ9cmV0dXJuIHJlc3VsdH0sc3RyOmZ1bmN0aW9uKHN0cixtYXApe2Zvcih2YXIgaSBpbiBtYXApe2lmKHR5cGVvZiBtYXBbaV09PT1PQkpfVFlQRSYmbWFwW2ldLmxlbmd0aD4wKXtmb3IodmFyIGo9MDtqPG1hcFtpXS5sZW5ndGg7aisrKXtpZih1dGlsLmhhcyhtYXBbaV1bal0sc3RyKSl7cmV0dXJuIGk9PT1VTktOT1dOP3VuZGVmaW5lZDppfX19ZWxzZSBpZih1dGlsLmhhcyhtYXBbaV0sc3RyKSl7cmV0dXJuIGk9PT1VTktOT1dOP3VuZGVmaW5lZDppfX1yZXR1cm4gc3RyfX07dmFyIG1hcHM9e2Jyb3dzZXI6e29sZHNhZmFyaTp7dmVyc2lvbjp7XCIxLjBcIjpcIi84XCIsMS4yOlwiLzFcIiwxLjM6XCIvM1wiLFwiMi4wXCI6XCIvNDEyXCIsXCIyLjAuMlwiOlwiLzQxNlwiLFwiMi4wLjNcIjpcIi80MTdcIixcIjIuMC40XCI6XCIvNDE5XCIsXCI/XCI6XCIvXCJ9fX0sZGV2aWNlOnthbWF6b246e21vZGVsOntcIkZpcmUgUGhvbmVcIjpbXCJTRFwiLFwiS0ZcIl19fSxzcHJpbnQ6e21vZGVsOntcIkV2byBTaGlmdCA0R1wiOlwiNzM3M0tUXCJ9LHZlbmRvcjp7SFRDOlwiQVBBXCIsU3ByaW50OlwiU3ByaW50XCJ9fX0sb3M6e3dpbmRvd3M6e3ZlcnNpb246e01FOlwiNC45MFwiLFwiTlQgMy4xMVwiOlwiTlQzLjUxXCIsXCJOVCA0LjBcIjpcIk5UNC4wXCIsMjAwMDpcIk5UIDUuMFwiLFhQOltcIk5UIDUuMVwiLFwiTlQgNS4yXCJdLFZpc3RhOlwiTlQgNi4wXCIsNzpcIk5UIDYuMVwiLDg6XCJOVCA2LjJcIiw4LjE6XCJOVCA2LjNcIiwxMDpbXCJOVCA2LjRcIixcIk5UIDEwLjBcIl0sUlQ6XCJBUk1cIn19fX07dmFyIHJlZ2V4ZXM9e2Jyb3dzZXI6W1svKG9wZXJhXFxzbWluaSlcXC8oW1xcd1xcLi1dKykvaSwvKG9wZXJhXFxzW21vYmlsZXRhYl0rKS4rdmVyc2lvblxcLyhbXFx3XFwuLV0rKS9pLC8ob3BlcmEpLit2ZXJzaW9uXFwvKFtcXHdcXC5dKykvaSwvKG9wZXJhKVtcXC9cXHNdKyhbXFx3XFwuXSspL2ldLFtOQU1FLFZFUlNJT05dLFsvXFxzKG9wcilcXC8oW1xcd1xcLl0rKS9pXSxbW05BTUUsXCJPcGVyYVwiXSxWRVJTSU9OXSxbLyhraW5kbGUpXFwvKFtcXHdcXC5dKykvaSwvKGx1bmFzY2FwZXxtYXh0aG9ufG5ldGZyb250fGphc21pbmV8YmxhemVyKVtcXC9cXHNdPyhbXFx3XFwuXSspKi9pLC8oYXZhbnRcXHN8aWVtb2JpbGV8c2xpbXxiYWlkdSkoPzpicm93c2VyKT9bXFwvXFxzXT8oW1xcd1xcLl0qKS9pLC8oPzptc3xcXCgpKGllKVxccyhbXFx3XFwuXSspL2ksLyhyZWtvbnEpXFwvKFtcXHdcXC5dKykqL2ksLyhjaHJvbWl1bXxmbG9ja3xyb2NrbWVsdHxtaWRvcml8ZXBpcGhhbnl8c2lsa3xza3lmaXJlfG92aWJyb3dzZXJ8Ym9sdHxpcm9ufHZpdmFsZGl8aXJpZGl1bSlcXC8oW1xcd1xcLi1dKykvaV0sW05BTUUsVkVSU0lPTl0sWy8odHJpZGVudCkuK3J2WzpcXHNdKFtcXHdcXC5dKykuK2xpa2VcXHNnZWNrby9pXSxbW05BTUUsXCJJRVwiXSxWRVJTSU9OXSxbLyhlZGdlKVxcLygoXFxkKyk/W1xcd1xcLl0rKS9pXSxbTkFNRSxWRVJTSU9OXSxbLyh5YWJyb3dzZXIpXFwvKFtcXHdcXC5dKykvaV0sW1tOQU1FLFwiWWFuZGV4XCJdLFZFUlNJT05dLFsvKGNvbW9kb19kcmFnb24pXFwvKFtcXHdcXC5dKykvaV0sW1tOQU1FLC9fL2csXCIgXCJdLFZFUlNJT05dLFsvKGNocm9tZXxvbW5pd2VifGFyb3JhfFt0aXplbm9rYV17NX1cXHM/YnJvd3NlcilcXC92PyhbXFx3XFwuXSspL2ksLyh1Y1xccz9icm93c2VyfHFxYnJvd3NlcilbXFwvXFxzXT8oW1xcd1xcLl0rKS9pXSxbTkFNRSxWRVJTSU9OXSxbLyhkb2xmaW4pXFwvKFtcXHdcXC5dKykvaV0sW1tOQU1FLFwiRG9scGhpblwiXSxWRVJTSU9OXSxbLygoPzphbmRyb2lkLispY3Jtb3xjcmlvcylcXC8oW1xcd1xcLl0rKS9pXSxbW05BTUUsXCJDaHJvbWVcIl0sVkVSU0lPTl0sWy9YaWFvTWlcXC9NaXVpQnJvd3NlclxcLyhbXFx3XFwuXSspL2ldLFtWRVJTSU9OLFtOQU1FLFwiTUlVSSBCcm93c2VyXCJdXSxbL2FuZHJvaWQuK3ZlcnNpb25cXC8oW1xcd1xcLl0rKVxccysoPzptb2JpbGVcXHM/c2FmYXJpfHNhZmFyaSkvaV0sW1ZFUlNJT04sW05BTUUsXCJBbmRyb2lkIEJyb3dzZXJcIl1dLFsvRkJBVlxcLyhbXFx3XFwuXSspOy9pXSxbVkVSU0lPTixbTkFNRSxcIkZhY2Vib29rXCJdXSxbL3ZlcnNpb25cXC8oW1xcd1xcLl0rKS4rP21vYmlsZVxcL1xcdytcXHMoc2FmYXJpKS9pXSxbVkVSU0lPTixbTkFNRSxcIk1vYmlsZSBTYWZhcmlcIl1dLFsvdmVyc2lvblxcLyhbXFx3XFwuXSspLis/KG1vYmlsZVxccz9zYWZhcml8c2FmYXJpKS9pXSxbVkVSU0lPTixOQU1FXSxbL3dlYmtpdC4rPyhtb2JpbGVcXHM/c2FmYXJpfHNhZmFyaSkoXFwvW1xcd1xcLl0rKS9pXSxbTkFNRSxbVkVSU0lPTixtYXBwZXIuc3RyLG1hcHMuYnJvd3Nlci5vbGRzYWZhcmkudmVyc2lvbl1dLFsvKGtvbnF1ZXJvcilcXC8oW1xcd1xcLl0rKS9pLC8od2Via2l0fGtodG1sKVxcLyhbXFx3XFwuXSspL2ldLFtOQU1FLFZFUlNJT05dLFsvKG5hdmlnYXRvcnxuZXRzY2FwZSlcXC8oW1xcd1xcLi1dKykvaV0sW1tOQU1FLFwiTmV0c2NhcGVcIl0sVkVSU0lPTl0sWy9meGlvc1xcLyhbXFx3XFwuLV0rKS9pXSxbVkVSU0lPTixbTkFNRSxcIkZpcmVmb3hcIl1dLFsvKHN3aWZ0Zm94KS9pLC8oaWNlZHJhZ29ufGljZXdlYXNlbHxjYW1pbm98Y2hpbWVyYXxmZW5uZWN8bWFlbW9cXHNicm93c2VyfG1pbmltb3xjb25rZXJvcilbXFwvXFxzXT8oW1xcd1xcLlxcK10rKS9pLC8oZmlyZWZveHxzZWFtb25rZXl8ay1tZWxlb258aWNlY2F0fGljZWFwZXxmaXJlYmlyZHxwaG9lbml4KVxcLyhbXFx3XFwuLV0rKS9pLC8obW96aWxsYSlcXC8oW1xcd1xcLl0rKS4rcnZcXDouK2dlY2tvXFwvXFxkKy9pLC8ocG9sYXJpc3xseW54fGRpbGxvfGljYWJ8ZG9yaXN8YW1heWF8dzNtfG5ldHN1cmYpW1xcL1xcc10/KFtcXHdcXC5dKykvaSwvKGxpbmtzKVxcc1xcKChbXFx3XFwuXSspL2ksLyhnb2Jyb3dzZXIpXFwvPyhbXFx3XFwuXSspKi9pLC8oaWNlXFxzP2Jyb3dzZXIpXFwvdj8oW1xcd1xcLl9dKykvaSwvKG1vc2FpYylbXFwvXFxzXShbXFx3XFwuXSspL2ldLFtOQU1FLFZFUlNJT05dXSxjcHU6W1svKD86KGFtZHx4KD86KD86ODZ8NjQpW18tXSk/fHdvd3x3aW4pNjQpWztcXCldL2ldLFtbQVJDSElURUNUVVJFLFwiYW1kNjRcIl1dLFsvKGlhMzIoPz07KSkvaV0sW1tBUkNISVRFQ1RVUkUsdXRpbC5sb3dlcml6ZV1dLFsvKCg/OmlbMzQ2XXx4KTg2KVs7XFwpXS9pXSxbW0FSQ0hJVEVDVFVSRSxcImlhMzJcIl1dLFsvd2luZG93c1xccyhjZXxtb2JpbGUpO1xcc3BwYzsvaV0sW1tBUkNISVRFQ1RVUkUsXCJhcm1cIl1dLFsvKCg/OnBwY3xwb3dlcnBjKSg/OjY0KT8pKD86XFxzbWFjfDt8XFwpKS9pXSxbW0FSQ0hJVEVDVFVSRSwvb3dlci8sXCJcIix1dGlsLmxvd2VyaXplXV0sWy8oc3VuNFxcdylbO1xcKV0vaV0sW1tBUkNISVRFQ1RVUkUsXCJzcGFyY1wiXV0sWy8oKD86YXZyMzJ8aWE2NCg/PTspKXw2OGsoPz1cXCkpfGFybSg/OjY0fCg/PXZcXGQrOykpfCg/PWF0bWVsXFxzKWF2cnwoPzppcml4fG1pcHN8c3BhcmMpKD86NjQpPyg/PTspfHBhLXJpc2MpL2ldLFtbQVJDSElURUNUVVJFLHV0aWwubG93ZXJpemVdXV0sZGV2aWNlOltbL1xcKChpcGFkfHBsYXlib29rKTtbXFx3XFxzXFwpOy1dKyhyaW18YXBwbGUpL2ldLFtNT0RFTCxWRU5ET1IsW1RZUEUsVEFCTEVUXV0sWy9hcHBsZWNvcmVtZWRpYVxcL1tcXHdcXC5dKyBcXCgoaXBhZCkvXSxbTU9ERUwsW1ZFTkRPUixcIkFwcGxlXCJdLFtUWVBFLFRBQkxFVF1dLFsvKGFwcGxlXFxzezAsMX10dikvaV0sW1tNT0RFTCxcIkFwcGxlIFRWXCJdLFtWRU5ET1IsXCJBcHBsZVwiXV0sWy8oYXJjaG9zKVxccyhnYW1lcGFkMj8pL2ksLyhocCkuKyh0b3VjaHBhZCkvaSwvKGtpbmRsZSlcXC8oW1xcd1xcLl0rKS9pLC9cXHMobm9vaylbXFx3XFxzXStidWlsZFxcLyhcXHcrKS9pLC8oZGVsbClcXHMoc3RyZWFba3ByXFxzXFxkXSpbXFxka29dKS9pXSxbVkVORE9SLE1PREVMLFtUWVBFLFRBQkxFVF1dLFsvKGtmW0Etel0rKVxcc2J1aWxkXFwvW1xcd1xcLl0rLipzaWxrXFwvL2ldLFtNT0RFTCxbVkVORE9SLFwiQW1hem9uXCJdLFtUWVBFLFRBQkxFVF1dLFsvKHNkfGtmKVswMzQ5aGlqb3JzdHV3XStcXHNidWlsZFxcL1tcXHdcXC5dKy4qc2lsa1xcLy9pXSxbW01PREVMLG1hcHBlci5zdHIsbWFwcy5kZXZpY2UuYW1hem9uLm1vZGVsXSxbVkVORE9SLFwiQW1hem9uXCJdLFtUWVBFLE1PQklMRV1dLFsvXFwoKGlwW2hvbmVkfFxcc1xcdypdKyk7LisoYXBwbGUpL2ldLFtNT0RFTCxWRU5ET1IsW1RZUEUsTU9CSUxFXV0sWy9cXCgoaXBbaG9uZWR8XFxzXFx3Kl0rKTsvaV0sW01PREVMLFtWRU5ET1IsXCJBcHBsZVwiXSxbVFlQRSxNT0JJTEVdXSxbLyhibGFja2JlcnJ5KVtcXHMtXT8oXFx3KykvaSwvKGJsYWNrYmVycnl8YmVucXxwYWxtKD89XFwtKXxzb255ZXJpY3Nzb258YWNlcnxhc3VzfGRlbGx8aHVhd2VpfG1laXp1fG1vdG9yb2xhfHBvbHl0cm9uKVtcXHNfLV0/KFtcXHctXSspKi9pLC8oaHApXFxzKFtcXHdcXHNdK1xcdykvaSwvKGFzdXMpLT8oXFx3KykvaV0sW1ZFTkRPUixNT0RFTCxbVFlQRSxNT0JJTEVdXSxbL1xcKGJiMTA7XFxzKFxcdyspL2ldLFtNT0RFTCxbVkVORE9SLFwiQmxhY2tCZXJyeVwiXSxbVFlQRSxNT0JJTEVdXSxbL2FuZHJvaWQuKyh0cmFuc2ZvW3ByaW1lXFxzXXs0LDEwfVxcc1xcdyt8ZWVlcGN8c2xpZGVyXFxzXFx3K3xuZXh1cyA3KS9pXSxbTU9ERUwsW1ZFTkRPUixcIkFzdXNcIl0sW1RZUEUsVEFCTEVUXV0sWy8oc29ueSlcXHModGFibGV0XFxzW3BzXSlcXHNidWlsZFxcLy9pLC8oc29ueSk/KD86c2dwLispXFxzYnVpbGRcXC8vaV0sW1tWRU5ET1IsXCJTb255XCJdLFtNT0RFTCxcIlhwZXJpYSBUYWJsZXRcIl0sW1RZUEUsVEFCTEVUXV0sWy8oPzpzb255KT8oPzooPzooPzpjfGQpXFxkezR9KXwoPzpzb1stbF0uKykpXFxzYnVpbGRcXC8vaV0sW1tWRU5ET1IsXCJTb255XCJdLFtNT0RFTCxcIlhwZXJpYSBQaG9uZVwiXSxbVFlQRSxNT0JJTEVdXSxbL1xccyhvdXlhKVxccy9pLC8obmludGVuZG8pXFxzKFt3aWRzM3VdKykvaV0sW1ZFTkRPUixNT0RFTCxbVFlQRSxDT05TT0xFXV0sWy9hbmRyb2lkLis7XFxzKHNoaWVsZClcXHNidWlsZC9pXSxbTU9ERUwsW1ZFTkRPUixcIk52aWRpYVwiXSxbVFlQRSxDT05TT0xFXV0sWy8ocGxheXN0YXRpb25cXHNbM3BvcnRhYmxldmldKykvaV0sW01PREVMLFtWRU5ET1IsXCJTb255XCJdLFtUWVBFLENPTlNPTEVdXSxbLyhzcHJpbnRcXHMoXFx3KykpL2ldLFtbVkVORE9SLG1hcHBlci5zdHIsbWFwcy5kZXZpY2Uuc3ByaW50LnZlbmRvcl0sW01PREVMLG1hcHBlci5zdHIsbWFwcy5kZXZpY2Uuc3ByaW50Lm1vZGVsXSxbVFlQRSxNT0JJTEVdXSxbLyhsZW5vdm8pXFxzPyhTKD86NTAwMHw2MDAwKSsoPzpbLV1bXFx3K10pKS9pXSxbVkVORE9SLE1PREVMLFtUWVBFLFRBQkxFVF1dLFsvKGh0YylbO19cXHMtXSsoW1xcd1xcc10rKD89XFwpKXxcXHcrKSovaSwvKHp0ZSktKFxcdyspKi9pLC8oYWxjYXRlbHxnZWVrc3Bob25lfGh1YXdlaXxsZW5vdm98bmV4aWFufHBhbmFzb25pY3woPz07XFxzKXNvbnkpW19cXHMtXT8oW1xcdy1dKykqL2ldLFtWRU5ET1IsW01PREVMLC9fL2csXCIgXCJdLFtUWVBFLE1PQklMRV1dLFsvKG5leHVzXFxzOSkvaV0sW01PREVMLFtWRU5ET1IsXCJIVENcIl0sW1RZUEUsVEFCTEVUXV0sWy9bXFxzXFwoO10oeGJveCg/Olxcc29uZSk/KVtcXHNcXCk7XS9pXSxbTU9ERUwsW1ZFTkRPUixcIk1pY3Jvc29mdFwiXSxbVFlQRSxDT05TT0xFXV0sWy8oa2luXFwuW29uZXR3XXszfSkvaV0sW1tNT0RFTCwvXFwuL2csXCIgXCJdLFtWRU5ET1IsXCJNaWNyb3NvZnRcIl0sW1RZUEUsTU9CSUxFXV0sWy9cXHMobWlsZXN0b25lfGRyb2lkKD86WzItNHhdfFxccyg/OmJpb25pY3x4Mnxwcm98cmF6cikpPyg6P1xcczRnKT8pW1xcd1xcc10rYnVpbGRcXC8vaSwvbW90W1xccy1dPyhcXHcrKSovaSwvKFhUXFxkezMsNH0pIGJ1aWxkXFwvL2ldLFtNT0RFTCxbVkVORE9SLFwiTW90b3JvbGFcIl0sW1RZUEUsTU9CSUxFXV0sWy9hbmRyb2lkLitcXHMobXo2MFxcZHx4b29tW1xcczJdezAsMn0pXFxzYnVpbGRcXC8vaV0sW01PREVMLFtWRU5ET1IsXCJNb3Rvcm9sYVwiXSxbVFlQRSxUQUJMRVRdXSxbL2FuZHJvaWQuKygoc2NoLWlbODldMFxcZHxzaHctbTM4MHN8Z3QtcFxcZHs0fXxndC1uODAwMHxzZ2gtdDhbNTZdOXxuZXh1cyAxMCkpL2ksLygoU00tVFxcdyspKS9pXSxbW1ZFTkRPUixcIlNhbXN1bmdcIl0sTU9ERUwsW1RZUEUsVEFCTEVUXV0sWy8oKHNbY2dwXWgtXFx3K3xndC1cXHcrfGdhbGF4eVxcc25leHVzfHNtLW45MDApKS9pLC8oc2FtW3N1bmddKilbXFxzLV0qKFxcdystP1tcXHctXSopKi9pLC9zZWMtKChzZ2hcXHcrKSkvaV0sW1tWRU5ET1IsXCJTYW1zdW5nXCJdLE1PREVMLFtUWVBFLE1PQklMRV1dLFsvKHNhbXN1bmcpO3NtYXJ0dHYvaV0sW1ZFTkRPUixNT0RFTCxbVFlQRSxTTUFSVFRWXV0sWy9cXChkdHZbXFwpO10uKyhhcXVvcykvaV0sW01PREVMLFtWRU5ET1IsXCJTaGFycFwiXSxbVFlQRSxTTUFSVFRWXV0sWy9zaWUtKFxcdyspKi9pXSxbTU9ERUwsW1ZFTkRPUixcIlNpZW1lbnNcIl0sW1RZUEUsTU9CSUxFXV0sWy8obWFlbW98bm9raWEpLioobjkwMHxsdW1pYVxcc1xcZCspL2ksLyhub2tpYSlbXFxzXy1dPyhbXFx3LV0rKSovaV0sW1tWRU5ET1IsXCJOb2tpYVwiXSxNT0RFTCxbVFlQRSxNT0JJTEVdXSxbL2FuZHJvaWRcXHMzXFwuW1xcc1xcdzstXXsxMH0oYVxcZHszfSkvaV0sW01PREVMLFtWRU5ET1IsXCJBY2VyXCJdLFtUWVBFLFRBQkxFVF1dLFsvYW5kcm9pZFxcczNcXC5bXFxzXFx3Oy1dezEwfShsZz8pLShbMDZjdjldezMsNH0pL2ldLFtbVkVORE9SLFwiTEdcIl0sTU9ERUwsW1RZUEUsVEFCTEVUXV0sWy8obGcpIG5ldGNhc3RcXC50di9pXSxbVkVORE9SLE1PREVMLFtUWVBFLFNNQVJUVFZdXSxbLyhuZXh1c1xcc1s0NV0pL2ksL2xnW2U7XFxzXFwvLV0rKFxcdyspKi9pXSxbTU9ERUwsW1ZFTkRPUixcIkxHXCJdLFtUWVBFLE1PQklMRV1dLFsvYW5kcm9pZC4rKGlkZWF0YWJbYS16MC05XFwtXFxzXSspL2ldLFtNT0RFTCxbVkVORE9SLFwiTGVub3ZvXCJdLFtUWVBFLFRBQkxFVF1dLFsvbGludXg7LisoKGpvbGxhKSk7L2ldLFtWRU5ET1IsTU9ERUwsW1RZUEUsTU9CSUxFXV0sWy8oKHBlYmJsZSkpYXBwXFwvW1xcZFxcLl0rXFxzL2ldLFtWRU5ET1IsTU9ERUwsW1RZUEUsV0VBUkFCTEVdXSxbL2FuZHJvaWQuKztcXHMoZ2xhc3MpXFxzXFxkL2ldLFtNT0RFTCxbVkVORE9SLFwiR29vZ2xlXCJdLFtUWVBFLFdFQVJBQkxFXV0sWy9hbmRyb2lkLisoXFx3KylcXHMrYnVpbGRcXC9obVxcMS9pLC9hbmRyb2lkLisoaG1bXFxzXFwtX10qbm90ZT9bXFxzX10qKD86XFxkXFx3KT8pXFxzK2J1aWxkL2ksL2FuZHJvaWQuKyhtaVtcXHNcXC1fXSooPzpvbmV8b25lW1xcc19dcGx1cyk/W1xcc19dKig/OlxcZFxcdyk/KVxccytidWlsZC9pXSxbW01PREVMLC9fL2csXCIgXCJdLFtWRU5ET1IsXCJYaWFvbWlcIl0sW1RZUEUsTU9CSUxFXV0sWy8obW9iaWxlfHRhYmxldCk7LitydlxcOi4rZ2Vja29cXC8vaV0sW1tUWVBFLHV0aWwubG93ZXJpemVdLFZFTkRPUixNT0RFTF1dLGVuZ2luZTpbWy93aW5kb3dzLitcXHNlZGdlXFwvKFtcXHdcXC5dKykvaV0sW1ZFUlNJT04sW05BTUUsXCJFZGdlSFRNTFwiXV0sWy8ocHJlc3RvKVxcLyhbXFx3XFwuXSspL2ksLyh3ZWJraXR8dHJpZGVudHxuZXRmcm9udHxuZXRzdXJmfGFtYXlhfGx5bnh8dzNtKVxcLyhbXFx3XFwuXSspL2ksLyhraHRtbHx0YXNtYW58bGlua3MpW1xcL1xcc11cXCg/KFtcXHdcXC5dKykvaSwvKGljYWIpW1xcL1xcc10oWzIzXVxcLltcXGRcXC5dKykvaV0sW05BTUUsVkVSU0lPTl0sWy9ydlxcOihbXFx3XFwuXSspLiooZ2Vja28pL2ldLFtWRVJTSU9OLE5BTUVdXSxvczpbWy9taWNyb3NvZnRcXHMod2luZG93cylcXHModmlzdGF8eHApL2ldLFtOQU1FLFZFUlNJT05dLFsvKHdpbmRvd3MpXFxzbnRcXHM2XFwuMjtcXHMoYXJtKS9pLC8od2luZG93c1xcc3Bob25lKD86XFxzb3MpKnx3aW5kb3dzXFxzbW9iaWxlfHdpbmRvd3MpW1xcc1xcL10/KFtudGNlXFxkXFwuXFxzXStcXHcpL2ldLFtOQU1FLFtWRVJTSU9OLG1hcHBlci5zdHIsbWFwcy5vcy53aW5kb3dzLnZlcnNpb25dXSxbLyh3aW4oPz0zfDl8bil8d2luXFxzOXhcXHMpKFtudFxcZFxcLl0rKS9pXSxbW05BTUUsXCJXaW5kb3dzXCJdLFtWRVJTSU9OLG1hcHBlci5zdHIsbWFwcy5vcy53aW5kb3dzLnZlcnNpb25dXSxbL1xcKChiYikoMTApOy9pXSxbW05BTUUsXCJCbGFja0JlcnJ5XCJdLFZFUlNJT05dLFsvKGJsYWNrYmVycnkpXFx3KlxcLz8oW1xcd1xcLl0rKSovaSwvKHRpemVuKVtcXC9cXHNdKFtcXHdcXC5dKykvaSwvKGFuZHJvaWR8d2Vib3N8cGFsbVxcc29zfHFueHxiYWRhfHJpbVxcc3RhYmxldFxcc29zfG1lZWdvfGNvbnRpa2kpW1xcL1xccy1dPyhbXFx3XFwuXSspKi9pLC9saW51eDsuKyhzYWlsZmlzaCk7L2ldLFtOQU1FLFZFUlNJT05dLFsvKHN5bWJpYW5cXHM/b3N8c3ltYm9zfHM2MCg/PTspKVtcXC9cXHMtXT8oW1xcd1xcLl0rKSovaV0sW1tOQU1FLFwiU3ltYmlhblwiXSxWRVJTSU9OXSxbL1xcKChzZXJpZXM0MCk7L2ldLFtOQU1FXSxbL21vemlsbGEuK1xcKG1vYmlsZTsuK2dlY2tvLitmaXJlZm94L2ldLFtbTkFNRSxcIkZpcmVmb3ggT1NcIl0sVkVSU0lPTl0sWy8obmludGVuZG98cGxheXN0YXRpb24pXFxzKFt3aWRzM3BvcnRhYmxldnVdKykvaSwvKG1pbnQpW1xcL1xcc1xcKF0/KFxcdyspKi9pLC8obWFnZWlhfHZlY3RvcmxpbnV4KVs7XFxzXS9pLC8oam9saXxba3hsbl0/dWJ1bnR1fGRlYmlhbnxbb3Blbl0qc3VzZXxnZW50b298YXJjaHxzbGFja3dhcmV8ZmVkb3JhfG1hbmRyaXZhfGNlbnRvc3xwY2xpbnV4b3N8cmVkaGF0fHplbndhbGt8bGlucHVzKVtcXC9cXHMtXT8oW1xcd1xcLi1dKykqL2ksLyhodXJkfGxpbnV4KVxccz8oW1xcd1xcLl0rKSovaSwvKGdudSlcXHM/KFtcXHdcXC5dKykqL2ldLFtOQU1FLFZFUlNJT05dLFsvKGNyb3MpXFxzW1xcd10rXFxzKFtcXHdcXC5dK1xcdykvaV0sW1tOQU1FLFwiQ2hyb21pdW0gT1NcIl0sVkVSU0lPTl0sWy8oc3Vub3MpXFxzPyhbXFx3XFwuXStcXGQpKi9pXSxbW05BTUUsXCJTb2xhcmlzXCJdLFZFUlNJT05dLFsvXFxzKFtmcmVudG9wYy1dezAsNH1ic2R8ZHJhZ29uZmx5KVxccz8oW1xcd1xcLl0rKSovaV0sW05BTUUsVkVSU0lPTl0sWy8oaXBbaG9uZWFkXSspKD86Lipvc1xccyooW1xcd10rKSpcXHNsaWtlXFxzbWFjfDtcXHNvcGVyYSkvaV0sW1tOQU1FLFwiaU9TXCJdLFtWRVJTSU9OLC9fL2csXCIuXCJdXSxbLyhtYWNcXHNvc1xcc3gpXFxzPyhbXFx3XFxzXFwuXStcXHcpKi9pLC8obWFjaW50b3NofG1hYyg/PV9wb3dlcnBjKVxccykvaV0sW1tOQU1FLFwiTWFjIE9TXCJdLFtWRVJTSU9OLC9fL2csXCIuXCJdXSxbLygoPzpvcGVuKT9zb2xhcmlzKVtcXC9cXHMtXT8oW1xcd1xcLl0rKSovaSwvKGhhaWt1KVxccyhcXHcrKS9pLC8oYWl4KVxccygoXFxkKSg/PVxcLnxcXCl8XFxzKVtcXHdcXC5dKikqL2ksLyhwbGFuXFxzOXxtaW5peHxiZW9zfG9zXFwvMnxhbWlnYW9zfG1vcnBob3N8cmlzY1xcc29zfG9wZW52bXMpL2ksLyh1bml4KVxccz8oW1xcd1xcLl0rKSovaV0sW05BTUUsVkVSU0lPTl1dfTt2YXIgVUFQYXJzZXI9ZnVuY3Rpb24odWFzdHJpbmcsZXh0ZW5zaW9ucyl7aWYoISh0aGlzIGluc3RhbmNlb2YgVUFQYXJzZXIpKXtyZXR1cm4gbmV3IFVBUGFyc2VyKHVhc3RyaW5nLGV4dGVuc2lvbnMpLmdldFJlc3VsdCgpfXZhciB1YT11YXN0cmluZ3x8KHdpbmRvdyYmd2luZG93Lm5hdmlnYXRvciYmd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ/d2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ6RU1QVFkpO3ZhciByZ3htYXA9ZXh0ZW5zaW9ucz91dGlsLmV4dGVuZChyZWdleGVzLGV4dGVuc2lvbnMpOnJlZ2V4ZXM7dGhpcy5nZXRCcm93c2VyPWZ1bmN0aW9uKCl7dmFyIGJyb3dzZXI9bWFwcGVyLnJneC5hcHBseSh0aGlzLHJneG1hcC5icm93c2VyKTticm93c2VyLm1ham9yPXV0aWwubWFqb3IoYnJvd3Nlci52ZXJzaW9uKTtyZXR1cm4gYnJvd3Nlcn07dGhpcy5nZXRDUFU9ZnVuY3Rpb24oKXtyZXR1cm4gbWFwcGVyLnJneC5hcHBseSh0aGlzLHJneG1hcC5jcHUpfTt0aGlzLmdldERldmljZT1mdW5jdGlvbigpe3JldHVybiBtYXBwZXIucmd4LmFwcGx5KHRoaXMscmd4bWFwLmRldmljZSl9O3RoaXMuZ2V0RW5naW5lPWZ1bmN0aW9uKCl7cmV0dXJuIG1hcHBlci5yZ3guYXBwbHkodGhpcyxyZ3htYXAuZW5naW5lKX07dGhpcy5nZXRPUz1mdW5jdGlvbigpe3JldHVybiBtYXBwZXIucmd4LmFwcGx5KHRoaXMscmd4bWFwLm9zKX07dGhpcy5nZXRSZXN1bHQ9ZnVuY3Rpb24oKXtyZXR1cm57dWE6dGhpcy5nZXRVQSgpLGJyb3dzZXI6dGhpcy5nZXRCcm93c2VyKCksZW5naW5lOnRoaXMuZ2V0RW5naW5lKCksb3M6dGhpcy5nZXRPUygpLGRldmljZTp0aGlzLmdldERldmljZSgpLGNwdTp0aGlzLmdldENQVSgpfX07dGhpcy5nZXRVQT1mdW5jdGlvbigpe3JldHVybiB1YX07dGhpcy5zZXRVQT1mdW5jdGlvbih1YXN0cmluZyl7dWE9dWFzdHJpbmc7cmV0dXJuIHRoaXN9O3RoaXMuc2V0VUEodWEpO3JldHVybiB0aGlzfTtVQVBhcnNlci5WRVJTSU9OPUxJQlZFUlNJT047VUFQYXJzZXIuQlJPV1NFUj17TkFNRTpOQU1FLE1BSk9SOk1BSk9SLFZFUlNJT046VkVSU0lPTn07VUFQYXJzZXIuQ1BVPXtBUkNISVRFQ1RVUkU6QVJDSElURUNUVVJFfTtVQVBhcnNlci5ERVZJQ0U9e01PREVMOk1PREVMLFZFTkRPUjpWRU5ET1IsVFlQRTpUWVBFLENPTlNPTEU6Q09OU09MRSxNT0JJTEU6TU9CSUxFLFNNQVJUVFY6U01BUlRUVixUQUJMRVQ6VEFCTEVULFdFQVJBQkxFOldFQVJBQkxFLEVNQkVEREVEOkVNQkVEREVEfTtVQVBhcnNlci5FTkdJTkU9e05BTUU6TkFNRSxWRVJTSU9OOlZFUlNJT059O1VBUGFyc2VyLk9TPXtOQU1FOk5BTUUsVkVSU0lPTjpWRVJTSU9OfTtpZih0eXBlb2YgZXhwb3J0cyE9PVVOREVGX1RZUEUpe2lmKHR5cGVvZiBtb2R1bGUhPT1VTkRFRl9UWVBFJiZtb2R1bGUuZXhwb3J0cyl7ZXhwb3J0cz1tb2R1bGUuZXhwb3J0cz1VQVBhcnNlcn1leHBvcnRzLlVBUGFyc2VyPVVBUGFyc2VyfWVsc2V7aWYodHlwZW9mIGRlZmluZT09PUZVTkNfVFlQRSYmZGVmaW5lLmFtZCl7ZGVmaW5lKGZ1bmN0aW9uKCl7cmV0dXJuIFVBUGFyc2VyfSl9ZWxzZXt3aW5kb3cuVUFQYXJzZXI9VUFQYXJzZXJ9fXZhciAkPXdpbmRvdy5qUXVlcnl8fHdpbmRvdy5aZXB0bztpZih0eXBlb2YgJCE9PVVOREVGX1RZUEUpe3ZhciBwYXJzZXI9bmV3IFVBUGFyc2VyOyQudWE9cGFyc2VyLmdldFJlc3VsdCgpOyQudWEuZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIHBhcnNlci5nZXRVQSgpfTskLnVhLnNldD1mdW5jdGlvbih1YXN0cmluZyl7cGFyc2VyLnNldFVBKHVhc3RyaW5nKTt2YXIgcmVzdWx0PXBhcnNlci5nZXRSZXN1bHQoKTtmb3IodmFyIHByb3AgaW4gcmVzdWx0KXskLnVhW3Byb3BdPXJlc3VsdFtwcm9wXX19fX0pKHR5cGVvZiB3aW5kb3c9PT1cIm9iamVjdFwiP3dpbmRvdzp0aGlzKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi91YS1wYXJzZXItanMvZGlzdC91YS1wYXJzZXIubWluLmpzXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX2FtZF9vcHRpb25zX187XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogKHdlYnBhY2spL2J1aWxkaW4vYW1kLW9wdGlvbnMuanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypnbG9iYWwgd2luZG93LCBBY3RpdmVYT2JqZWN0Ki9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYWpheCh1cmwsIGNhbGxiYWNrLCBkYXRhLCB4KSB7XG4gICAgaWYgKCF1cmwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICB4ID0gbmV3ICh3aW5kb3cuWE1MSHR0cFJlcXVlc3QgfHwgQWN0aXZlWE9iamVjdCkoJ01TWE1MMi5YTUxIVFRQLjMuMCcpO1xuICAgICAgICB4Lm9wZW4oZGF0YSA/ICdQT1NUJyA6ICdHRVQnLCB1cmwsIDEpO1xuICAgICAgICB4LnNldFJlcXVlc3RIZWFkZXIoJ1gtUmVxdWVzdGVkLVdpdGgnLCAnWE1MSHR0cFJlcXVlc3QnKTtcbiAgICAgICAgeC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgICAgIHgub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgeC5yZWFkeVN0YXRlID4gMyAmJiBjYWxsYmFjayAmJiBjYWxsYmFjayh4LnJlc3BvbnNlVGV4dCwgeCk7XG4gICAgICAgIH07XG4gICAgICAgIHguc2VuZChkYXRhKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgd2luZG93LmNvbnNvbGUgJiYgY29uc29sZS5sb2coZSk7XG4gICAgfVxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9saWIvbmV0d29yay9hamF4LmpzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBteSA9IHt9LFxuICAgICAgICBTdHIgPSByZXF1aXJlKCcuLi9zdHJpbmcvc3RyaW5nLmpzJyk7XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGFuIFhQYXRoIGZvciBhbiBlbGVtZW50IHdoaWNoIGRlc2NyaWJlcyBpdHMgaGllcmFyY2hpY2FsIGxvY2F0aW9uLlxuICAgICAqL1xuICAgIG15LmdldEVsZW1lbnRYUGF0aCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuaWQpIHtcbiAgICAgICAgICAgIHJldHVybiAnLy8qW0BpZD1cIicgKyBlbGVtZW50LmlkICsgJ1wiXSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbXkuZ2V0RWxlbWVudFRyZWVYUGF0aChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBteS5nZXRFbGVtZW50VHJlZVhQYXRoID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHBhdGhzID0gW107XG5cbiAgICAgICAgLy8gVXNlIG5vZGVOYW1lIChpbnN0ZWFkIG9mIGxvY2FsTmFtZSkgc28gbmFtZXNwYWNlIHByZWZpeCBpcyBpbmNsdWRlZCAoaWYgYW55KS5cbiAgICAgICAgZm9yICg7IGVsZW1lbnQgJiYgZWxlbWVudC5ub2RlVHlwZSA9PSBOb2RlLkVMRU1FTlRfTk9ERTsgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gMCxcbiAgICAgICAgICAgICAgICBoYXNGb2xsb3dpbmdTaWJsaW5ncyA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yICh2YXIgc2libGluZyA9IGVsZW1lbnQucHJldmlvdXNTaWJsaW5nOyBzaWJsaW5nOyBzaWJsaW5nID0gc2libGluZy5wcmV2aW91c1NpYmxpbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2libGluZy5ub2RlVHlwZSA9PSBOb2RlLkRPQ1VNRU5UX1RZUEVfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoc2libGluZy5ub2RlTmFtZSA9PSBlbGVtZW50Lm5vZGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICsraW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKHZhciBzaWJsaW5nID0gZWxlbWVudC5uZXh0U2libGluZzsgc2libGluZyAmJiAhaGFzRm9sbG93aW5nU2libGluZ3M7XG4gICAgICAgICAgICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nLm5leHRTaWJsaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNpYmxpbmcubm9kZU5hbWUgPT0gZWxlbWVudC5ub2RlTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBoYXNGb2xsb3dpbmdTaWJsaW5ncyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgdGFnTmFtZSA9IChlbGVtZW50LnByZWZpeCA/IGVsZW1lbnQucHJlZml4ICsgJzonIDogJycpICsgZWxlbWVudC5sb2NhbE5hbWUsXG4gICAgICAgICAgICAgICAgcGF0aEluZGV4ID0gKGluZGV4IHx8IGhhc0ZvbGxvd2luZ1NpYmxpbmdzID8gJ1snICsgKGluZGV4ICsgMSkgKyAnXScgOiAnJyk7XG4gICAgICAgICAgICBwYXRocy5zcGxpY2UoMCwgMCwgdGFnTmFtZSArIHBhdGhJbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGF0aHMubGVuZ3RoID8gJy8nICsgcGF0aHMuam9pbignLycpIDogbnVsbDtcbiAgICB9O1xuXG4gICAgbXkuY3NzVG9YUGF0aCA9IGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICAgIHZhciByZWdFbGVtZW50ID0gL14oWyMuXT8pKFthLXowLTlcXFxcKl8tXSopKChcXHwpKFthLXowLTlcXFxcKl8tXSopKT8vaSxcbiAgICAgICAgICAgIHJlZ0F0dHIxID0gL15cXFsoW15cXF1dKilcXF0vaSxcbiAgICAgICAgICAgIHJlZ0F0dHIyID0gL15cXFtcXHMqKFtefj1cXHNdKylcXHMqKH4/PSlcXHMqXCIoW15cIl0rKVwiXFxzKlxcXS9pLFxuICAgICAgICAgICAgcmVnUHNldWRvID0gL146KFthLXpfLV0pKy9pLFxuICAgICAgICAgICAgcmVnQ29tYmluYXRvciA9IC9eKFxccypbPitcXHNdKT8vaSxcbiAgICAgICAgICAgIHJlZ0NvbW1hID0gL15cXHMqLC9pLFxuICAgICAgICAgICAgaW5kZXggPSAxLFxuICAgICAgICAgICAgcGFydHMgPSBbJy8vJywgJyonXSxcbiAgICAgICAgICAgIGxhc3RSdWxlID0gbnVsbDtcblxuICAgICAgICB3aGlsZSAocnVsZS5sZW5ndGggJiYgcnVsZSAhPSBsYXN0UnVsZSkge1xuICAgICAgICAgICAgbGFzdFJ1bGUgPSBydWxlO1xuXG4gICAgICAgICAgICAvLyBUcmltIGxlYWRpbmcgd2hpdGVzcGFjZVxuICAgICAgICAgICAgcnVsZSA9IFN0ci50cmltKHJ1bGUpO1xuICAgICAgICAgICAgaWYgKCFydWxlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBNYXRjaCB0aGUgZWxlbWVudCBpZGVudGlmaWVyXG4gICAgICAgICAgICB2YXIgbSA9IHJlZ0VsZW1lbnQuZXhlYyhydWxlKTtcbiAgICAgICAgICAgIGlmIChtKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFtWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFhYWGpvZSBOYW1lc3BhY2UgaWdub3JlZCBmb3Igbm93XG4gICAgICAgICAgICAgICAgICAgIGlmIChtWzVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0c1tpbmRleF0gPSBtWzVdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydHNbaW5kZXhdID0gbVsyXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtWzFdID09ICcjJykge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKCdbQGlkPVxcJycgKyBtWzJdICsgJ1xcJ10nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobVsxXSA9PSAnLicpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydHMucHVzaChcIltjb250YWlucyhjb25jYXQoJyAnLG5vcm1hbGl6ZS1zcGFjZShAY2xhc3MpLCcgJyksICcgXCIgKyBtWzJdICsgXCIgJyldXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJ1bGUgPSBydWxlLnN1YnN0cihtWzBdLmxlbmd0aCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE1hdGNoIGF0dHJpYnV0ZSBzZWxlY3RvcnNcbiAgICAgICAgICAgIG0gPSByZWdBdHRyMi5leGVjKHJ1bGUpO1xuICAgICAgICAgICAgaWYgKG0pIHtcbiAgICAgICAgICAgICAgICBpZiAobVsyXSA9PSAnfj0nKVxuICAgICAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKFwiW2NvbnRhaW5zKEBcIiArIG1bMV0gKyBcIiwgJ1wiICsgbVszXSArIFwiJyldXCIpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcGFydHMucHVzaChcIltAXCIgKyBtWzFdICsgXCI9J1wiICsgbVszXSArIFwiJ11cIik7XG5cbiAgICAgICAgICAgICAgICBydWxlID0gcnVsZS5zdWJzdHIobVswXS5sZW5ndGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbSA9IHJlZ0F0dHIxLmV4ZWMocnVsZSk7XG4gICAgICAgICAgICAgICAgaWYgKG0pIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydHMucHVzaChcIltAXCIgKyBtWzFdICsgXCJdXCIpO1xuICAgICAgICAgICAgICAgICAgICBydWxlID0gcnVsZS5zdWJzdHIobVswXS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2tpcCBvdmVyIHBzZXVkby1jbGFzc2VzIGFuZCBwc2V1ZG8tZWxlbWVudHMsIHdoaWNoIGFyZSBvZiBubyB1c2UgdG8gdXNcbiAgICAgICAgICAgIG0gPSByZWdQc2V1ZG8uZXhlYyhydWxlKTtcbiAgICAgICAgICAgIHdoaWxlIChtKSB7XG4gICAgICAgICAgICAgICAgcnVsZSA9IHJ1bGUuc3Vic3RyKG1bMF0ubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBtID0gcmVnUHNldWRvLmV4ZWMocnVsZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE1hdGNoIGNvbWJpbmF0b3JzXG4gICAgICAgICAgICBtID0gcmVnQ29tYmluYXRvci5leGVjKHJ1bGUpO1xuICAgICAgICAgICAgaWYgKG0gJiYgbVswXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAobVswXS5pbmRleE9mKCc+JykgIT0gLTEpXG4gICAgICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goJy8nKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtWzBdLmluZGV4T2YoJysnKSAhPSAtMSlcbiAgICAgICAgICAgICAgICAgICAgcGFydHMucHVzaCgnL2ZvbGxvd2luZy1zaWJsaW5nOjonKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goJy8vJyk7XG5cbiAgICAgICAgICAgICAgICBpbmRleCA9IHBhcnRzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKCcqJyk7XG4gICAgICAgICAgICAgICAgcnVsZSA9IHJ1bGUuc3Vic3RyKG1bMF0ubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbSA9IHJlZ0NvbW1hLmV4ZWMocnVsZSk7XG4gICAgICAgICAgICBpZiAobSkge1xuICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goJyB8ICcsICcvLycsICcqJyk7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBwYXJ0cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIHJ1bGUgPSBydWxlLnN1YnN0cihtWzBdLmxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgeHBhdGggPSBwYXJ0cy5qb2luKCcnKTtcbiAgICAgICAgcmV0dXJuIHhwYXRoO1xuICAgIH07XG5cbiAgICBteS5nZXRFbGVtZW50c0J5U2VsZWN0b3IgPSBmdW5jdGlvbiAoZG9jLCBjc3MpIHtcbiAgICAgICAgdmFyIHhwYXRoID0gbXkuY3NzVG9YUGF0aChjc3MpO1xuICAgICAgICByZXR1cm4gbXkuZ2V0RWxlbWVudHNCeVhQYXRoKGRvYywgeHBhdGgpO1xuICAgIH07XG5cbiAgICBteS5nZXRFbGVtZW50c0J5WFBhdGggPSBmdW5jdGlvbiAoZG9jLCB4cGF0aCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIG15LmV2YWx1YXRlWFBhdGgoZG9jLCB4cGF0aCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRXZhbHVhdGVzIGFuIFhQYXRoIGV4cHJlc3Npb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0RvY3VtZW50fSBkb2NcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30geHBhdGggVGhlIFhQYXRoIGV4cHJlc3Npb24uXG4gICAgICogQHBhcmFtIHtOb2RlfSBjb250ZXh0Tm9kZSBUaGUgY29udGV4dCBub2RlLlxuICAgICAqIEBwYXJhbSB7aW50fSByZXN1bHRUeXBlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdCBvZiB0aGUgWFBhdGggZXhwcmVzc2lvbiwgZGVwZW5kaW5nIG9uIHJlc3VsdFR5cGUgOjxicj4gPHVsPlxuICAgICAqICAgICAgICAgIDxsaT5pZiBpdCBpcyBYUGF0aFJlc3VsdC5OVU1CRVJfVFlQRSwgdGhlbiBpdCByZXR1cm5zIGEgTnVtYmVyPC9saT5cbiAgICAgKiAgICAgICAgICA8bGk+aWYgaXQgaXMgWFBhdGhSZXN1bHQuU1RSSU5HX1RZUEUsIHRoZW4gaXQgcmV0dXJucyBhIFN0cmluZzwvbGk+XG4gICAgICogICAgICAgICAgPGxpPmlmIGl0IGlzIFhQYXRoUmVzdWx0LkJPT0xFQU5fVFlQRSwgdGhlbiBpdCByZXR1cm5zIGEgYm9vbGVhbjwvbGk+XG4gICAgICogICAgICAgICAgPGxpPmlmIGl0IGlzIFhQYXRoUmVzdWx0LlVOT1JERVJFRF9OT0RFX0lURVJBVE9SX1RZUEVcbiAgICAgKiAgICAgICAgICAgICAgb3IgWFBhdGhSZXN1bHQuT1JERVJFRF9OT0RFX1NOQVBTSE9UX1RZUEUsIHRoZW4gaXQgcmV0dXJucyBhbiBhcnJheSBvZiBub2RlczwvbGk+XG4gICAgICogICAgICAgICAgPGxpPmlmIGl0IGlzIFhQYXRoUmVzdWx0Lk9SREVSRURfTk9ERV9TTkFQU0hPVF9UWVBFXG4gICAgICogICAgICAgICAgICAgIG9yIFhQYXRoUmVzdWx0LlVOT1JERVJFRF9OT0RFX1NOQVBTSE9UX1RZUEUsIHRoZW4gaXQgcmV0dXJucyBhbiBhcnJheSBvZiBub2RlczwvbGk+XG4gICAgICogICAgICAgICAgPGxpPmlmIGl0IGlzIFhQYXRoUmVzdWx0LkFOWV9VTk9SREVSRURfTk9ERV9UWVBFXG4gICAgICogICAgICAgICAgICAgIG9yIFhQYXRoUmVzdWx0LkZJUlNUX09SREVSRURfTk9ERV9UWVBFLCB0aGVuIGl0IHJldHVybnMgYSBzaW5nbGUgbm9kZTwvbGk+XG4gICAgICogICAgICAgICAgPC91bD5cbiAgICAgKi9cbiAgICBteS5ldmFsdWF0ZVhQYXRoID0gZnVuY3Rpb24gKGRvYywgeHBhdGgsIGNvbnRleHROb2RlLCByZXN1bHRUeXBlKSB7XG4gICAgICAgIGlmIChjb250ZXh0Tm9kZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgY29udGV4dE5vZGUgPSBkb2M7XG5cbiAgICAgICAgaWYgKHJlc3VsdFR5cGUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJlc3VsdFR5cGUgPSBYUGF0aFJlc3VsdC5BTllfVFlQRTtcblxuICAgICAgICB2YXIgcmVzdWx0ID0gZG9jLmV2YWx1YXRlKHhwYXRoLCBjb250ZXh0Tm9kZSwgbnVsbCwgcmVzdWx0VHlwZSwgbnVsbCk7XG5cbiAgICAgICAgc3dpdGNoIChyZXN1bHQucmVzdWx0VHlwZSkge1xuICAgICAgICAgICAgY2FzZSBYUGF0aFJlc3VsdC5OVU1CRVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0Lm51bWJlclZhbHVlO1xuXG4gICAgICAgICAgICBjYXNlIFhQYXRoUmVzdWx0LlNUUklOR19UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQuc3RyaW5nVmFsdWU7XG5cbiAgICAgICAgICAgIGNhc2UgWFBhdGhSZXN1bHQuQk9PTEVBTl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQuYm9vbGVhblZhbHVlO1xuXG4gICAgICAgICAgICBjYXNlIFhQYXRoUmVzdWx0LlVOT1JERVJFRF9OT0RFX0lURVJBVE9SX1RZUEU6XG4gICAgICAgICAgICBjYXNlIFhQYXRoUmVzdWx0Lk9SREVSRURfTk9ERV9JVEVSQVRPUl9UWVBFOlxuICAgICAgICAgICAgICAgIHZhciBub2RlcyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGl0ZW0gPSByZXN1bHQuaXRlcmF0ZU5leHQoKTsgaXRlbTsgaXRlbSA9IHJlc3VsdC5pdGVyYXRlTmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBub2RlcztcblxuICAgICAgICAgICAgY2FzZSBYUGF0aFJlc3VsdC5VTk9SREVSRURfTk9ERV9TTkFQU0hPVF9UWVBFOlxuICAgICAgICAgICAgY2FzZSBYUGF0aFJlc3VsdC5PUkRFUkVEX05PREVfU05BUFNIT1RfVFlQRTpcbiAgICAgICAgICAgICAgICB2YXIgbm9kZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdC5zbmFwc2hvdExlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzLnB1c2gocmVzdWx0LnNuYXBzaG90SXRlbShpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBub2RlcztcblxuICAgICAgICAgICAgY2FzZSBYUGF0aFJlc3VsdC5BTllfVU5PUkRFUkVEX05PREVfVFlQRTpcbiAgICAgICAgICAgIGNhc2UgWFBhdGhSZXN1bHQuRklSU1RfT1JERVJFRF9OT0RFX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5zaW5nbGVOb2RlVmFsdWU7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgbXkuZ2V0UnVsZU1hdGNoaW5nRWxlbWVudHMgPSBmdW5jdGlvbiAocnVsZSwgZG9jKSB7XG4gICAgICAgIHZhciBjc3MgPSBydWxlLnNlbGVjdG9yVGV4dCxcbiAgICAgICAgICAgIHhwYXRoID0gbXkuY3NzVG9YUGF0aChjc3MpO1xuICAgICAgICByZXR1cm4gbXkuZ2V0RWxlbWVudHNCeVhQYXRoKGRvYywgeHBhdGgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gbXk7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2xpYi94cGF0aC94cGF0aC5qc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICB0cmltOiBmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC9eXFxzKnxcXHMqJC9nLCAnJyk7XG4gICAgfVxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9saWIvc3RyaW5nL3N0cmluZy5qc1xuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9