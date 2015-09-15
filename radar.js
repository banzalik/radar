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
	    var dir = './detectors/',
	        app = {
	            init: function () {
	            },
	            version: __webpack_require__(1)(dir + 'version.js'),
	            getRootElement: __webpack_require__(3)(dir + 'getRootElement.js'),
	            getViewportSize: __webpack_require__(5)(dir + 'getViewportSize.js'),
	            getScreenSize: __webpack_require__(7)(dir + 'getScreenSize.js'),
	            getDocumentTitle: __webpack_require__(9)(dir + 'getDocumentTitle.js'),
	            getUa: __webpack_require__(11)(dir + 'getUa.js'),
	            ajax: __webpack_require__(15),
	            xpath: __webpack_require__(16),
	            string: __webpack_require__(17)
	        };
	
	    window.radar = app;
	})(window);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./detectors/version.js": 2
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
	webpackContext.id = 1;


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = '0.0.1';


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./detectors/getRootElement.js": 4
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
	webpackContext.id = 3;


/***/ },
/* 4 */
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./detectors/getViewportSize.js": 6
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
	webpackContext.id = 5;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by banzalik on 8/31/15.
	 */
	module.exports = function () {
	    var root = __webpack_require__(4)();
	    return [root.clientWidth, root.clientHeight];
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./detectors/getScreenSize.js": 8
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
	webpackContext.id = 7;


/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * Created by banzalik on 8/31/15.
	 */
	module.exports = function () {
	    var screen = window.screen;
	
	    return [screen.width, screen.height];
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./detectors/getDocumentTitle.js": 10
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
	webpackContext.id = 9;


/***/ },
/* 10 */
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./detectors/getUa.js": 12
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
	webpackContext.id = 11;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by banzalik on 8/31/15.
	 */
	module.exports = function () {
	    var Parser = __webpack_require__(13),
	        ua = new Parser();
	
	    return ua.getResult();
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * UAParser.js v0.7.9
	 * Lightweight JavaScript-based User-Agent string parser
	 * https://github.com/faisalman/ua-parser-js
	 *
	 * Copyright © 2012-2015 Faisal Salman <fyzlman@gmail.com>
	 * Dual licensed under GPLv2 & MIT
	 */
	(function(window,undefined){"use strict";var LIBVERSION="0.7.9",EMPTY="",UNKNOWN="?",FUNC_TYPE="function",UNDEF_TYPE="undefined",OBJ_TYPE="object",STR_TYPE="string",MAJOR="major",MODEL="model",NAME="name",TYPE="type",VENDOR="vendor",VERSION="version",ARCHITECTURE="architecture",CONSOLE="console",MOBILE="mobile",TABLET="tablet",SMARTTV="smarttv",WEARABLE="wearable",EMBEDDED="embedded";var util={extend:function(regexes,extensions){for(var i in extensions){if("browser cpu device engine os".indexOf(i)!==-1&&extensions[i].length%2===0){regexes[i]=extensions[i].concat(regexes[i])}}return regexes},has:function(str1,str2){if(typeof str1==="string"){return str2.toLowerCase().indexOf(str1.toLowerCase())!==-1}else{return false}},lowerize:function(str){return str.toLowerCase()},major:function(version){return typeof version===STR_TYPE?version.split(".")[0]:undefined}};var mapper={rgx:function(){var result,i=0,j,k,p,q,matches,match,args=arguments;while(i<args.length&&!matches){var regex=args[i],props=args[i+1];if(typeof result===UNDEF_TYPE){result={};for(p in props){q=props[p];if(typeof q===OBJ_TYPE){result[q[0]]=undefined}else{result[q]=undefined}}}j=k=0;while(j<regex.length&&!matches){matches=regex[j++].exec(this.getUA());if(!!matches){for(p=0;p<props.length;p++){match=matches[++k];q=props[p];if(typeof q===OBJ_TYPE&&q.length>0){if(q.length==2){if(typeof q[1]==FUNC_TYPE){result[q[0]]=q[1].call(this,match)}else{result[q[0]]=q[1]}}else if(q.length==3){if(typeof q[1]===FUNC_TYPE&&!(q[1].exec&&q[1].test)){result[q[0]]=match?q[1].call(this,match,q[2]):undefined}else{result[q[0]]=match?match.replace(q[1],q[2]):undefined}}else if(q.length==4){result[q[0]]=match?q[3].call(this,match.replace(q[1],q[2])):undefined}}else{result[q]=match?match:undefined}}}}i+=2}return result},str:function(str,map){for(var i in map){if(typeof map[i]===OBJ_TYPE&&map[i].length>0){for(var j=0;j<map[i].length;j++){if(util.has(map[i][j],str)){return i===UNKNOWN?undefined:i}}}else if(util.has(map[i],str)){return i===UNKNOWN?undefined:i}}return str}};var maps={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}};var regexes={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[NAME,VERSION],[/\s(opr)\/([\w\.]+)/i],[[NAME,"Opera"],VERSION],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium)\/([\w\.-]+)/i],[NAME,VERSION],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[NAME,"IE"],VERSION],[/(edge)\/((\d+)?[\w\.]+)/i],[NAME,VERSION],[/(yabrowser)\/([\w\.]+)/i],[[NAME,"Yandex"],VERSION],[/(comodo_dragon)\/([\w\.]+)/i],[[NAME,/_/g," "],VERSION],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,/(uc\s?browser|qqbrowser)[\/\s]?([\w\.]+)/i],[NAME,VERSION],[/(dolfin)\/([\w\.]+)/i],[[NAME,"Dolphin"],VERSION],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[NAME,"Chrome"],VERSION],[/XiaoMi\/MiuiBrowser\/([\w\.]+)/i],[VERSION,[NAME,"MIUI Browser"]],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i],[VERSION,[NAME,"Android Browser"]],[/FBAV\/([\w\.]+);/i],[VERSION,[NAME,"Facebook"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[VERSION,[NAME,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[VERSION,NAME],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[NAME,[VERSION,mapper.str,maps.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[NAME,VERSION],[/(navigator|netscape)\/([\w\.-]+)/i],[[NAME,"Netscape"],VERSION],[/fxios\/([\w\.-]+)/i],[VERSION,[NAME,"Firefox"]],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[NAME,VERSION]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[ARCHITECTURE,"amd64"]],[/(ia32(?=;))/i],[[ARCHITECTURE,util.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[ARCHITECTURE,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[ARCHITECTURE,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[ARCHITECTURE,/ower/,"",util.lowerize]],[/(sun4\w)[;\)]/i],[[ARCHITECTURE,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[ARCHITECTURE,util.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[MODEL,VENDOR,[TYPE,TABLET]],[/applecoremedia\/[\w\.]+ \((ipad)/],[MODEL,[VENDOR,"Apple"],[TYPE,TABLET]],[/(apple\s{0,1}tv)/i],[[MODEL,"Apple TV"],[VENDOR,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[VENDOR,MODEL,[TYPE,TABLET]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],[MODEL,[VENDOR,"Amazon"],[TYPE,TABLET]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[[MODEL,mapper.str,maps.device.amazon.model],[VENDOR,"Amazon"],[TYPE,MOBILE]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[MODEL,VENDOR,[TYPE,MOBILE]],[/\((ip[honed|\s\w*]+);/i],[MODEL,[VENDOR,"Apple"],[TYPE,MOBILE]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/\(bb10;\s(\w+)/i],[MODEL,[VENDOR,"BlackBerry"],[TYPE,MOBILE]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i],[MODEL,[VENDOR,"Asus"],[TYPE,TABLET]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[VENDOR,"Sony"],[MODEL,"Xperia Tablet"],[TYPE,TABLET]],[/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],[[VENDOR,"Sony"],[MODEL,"Xperia Phone"],[TYPE,MOBILE]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[VENDOR,MODEL,[TYPE,CONSOLE]],[/android.+;\s(shield)\sbuild/i],[MODEL,[VENDOR,"Nvidia"],[TYPE,CONSOLE]],[/(playstation\s[3portablevi]+)/i],[MODEL,[VENDOR,"Sony"],[TYPE,CONSOLE]],[/(sprint\s(\w+))/i],[[VENDOR,mapper.str,maps.device.sprint.vendor],[MODEL,mapper.str,maps.device.sprint.model],[TYPE,MOBILE]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[VENDOR,MODEL,[TYPE,TABLET]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[VENDOR,[MODEL,/_/g," "],[TYPE,MOBILE]],[/(nexus\s9)/i],[MODEL,[VENDOR,"HTC"],[TYPE,TABLET]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[MODEL,[VENDOR,"Microsoft"],[TYPE,CONSOLE]],[/(kin\.[onetw]{3})/i],[[MODEL,/\./g," "],[VENDOR,"Microsoft"],[TYPE,MOBILE]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i],[MODEL,[VENDOR,"Motorola"],[TYPE,MOBILE]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[MODEL,[VENDOR,"Motorola"],[TYPE,TABLET]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[VENDOR,"Samsung"],MODEL,[TYPE,TABLET]],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[VENDOR,"Samsung"],MODEL,[TYPE,MOBILE]],[/(samsung);smarttv/i],[VENDOR,MODEL,[TYPE,SMARTTV]],[/\(dtv[\);].+(aquos)/i],[MODEL,[VENDOR,"Sharp"],[TYPE,SMARTTV]],[/sie-(\w+)*/i],[MODEL,[VENDOR,"Siemens"],[TYPE,MOBILE]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[VENDOR,"Nokia"],MODEL,[TYPE,MOBILE]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[MODEL,[VENDOR,"Acer"],[TYPE,TABLET]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[VENDOR,"LG"],MODEL,[TYPE,TABLET]],[/(lg) netcast\.tv/i],[VENDOR,MODEL,[TYPE,SMARTTV]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i],[MODEL,[VENDOR,"LG"],[TYPE,MOBILE]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[MODEL,[VENDOR,"Lenovo"],[TYPE,TABLET]],[/linux;.+((jolla));/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/((pebble))app\/[\d\.]+\s/i],[VENDOR,MODEL,[TYPE,WEARABLE]],[/android.+;\s(glass)\s\d/i],[MODEL,[VENDOR,"Google"],[TYPE,WEARABLE]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i],[[MODEL,/_/g," "],[VENDOR,"Xiaomi"],[TYPE,MOBILE]],[/(mobile|tablet);.+rv\:.+gecko\//i],[[TYPE,util.lowerize],VENDOR,MODEL]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[VERSION,[NAME,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[NAME,VERSION],[/rv\:([\w\.]+).*(gecko)/i],[VERSION,NAME]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[NAME,VERSION],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[NAME,[VERSION,mapper.str,maps.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[NAME,"Windows"],[VERSION,mapper.str,maps.os.windows.version]],[/\((bb)(10);/i],[[NAME,"BlackBerry"],VERSION],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[NAME,VERSION],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[NAME,"Symbian"],VERSION],[/\((series40);/i],[NAME],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[NAME,"Firefox OS"],VERSION],[/(nintendo|playstation)\s([wids3portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[NAME,VERSION],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[NAME,"Chromium OS"],VERSION],[/(sunos)\s?([\w\.]+\d)*/i],[[NAME,"Solaris"],VERSION],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[NAME,VERSION],[/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],[[NAME,"iOS"],[VERSION,/_/g,"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[NAME,"Mac OS"],[VERSION,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(haiku)\s(\w+)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[NAME,VERSION]]};var UAParser=function(uastring,extensions){if(!(this instanceof UAParser)){return new UAParser(uastring,extensions).getResult()}var ua=uastring||(window&&window.navigator&&window.navigator.userAgent?window.navigator.userAgent:EMPTY);var rgxmap=extensions?util.extend(regexes,extensions):regexes;this.getBrowser=function(){var browser=mapper.rgx.apply(this,rgxmap.browser);browser.major=util.major(browser.version);return browser};this.getCPU=function(){return mapper.rgx.apply(this,rgxmap.cpu)};this.getDevice=function(){return mapper.rgx.apply(this,rgxmap.device)};this.getEngine=function(){return mapper.rgx.apply(this,rgxmap.engine)};this.getOS=function(){return mapper.rgx.apply(this,rgxmap.os)};this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}};this.getUA=function(){return ua};this.setUA=function(uastring){ua=uastring;return this};this.setUA(ua);return this};UAParser.VERSION=LIBVERSION;UAParser.BROWSER={NAME:NAME,MAJOR:MAJOR,VERSION:VERSION};UAParser.CPU={ARCHITECTURE:ARCHITECTURE};UAParser.DEVICE={MODEL:MODEL,VENDOR:VENDOR,TYPE:TYPE,CONSOLE:CONSOLE,MOBILE:MOBILE,SMARTTV:SMARTTV,TABLET:TABLET,WEARABLE:WEARABLE,EMBEDDED:EMBEDDED};UAParser.ENGINE={NAME:NAME,VERSION:VERSION};UAParser.OS={NAME:NAME,VERSION:VERSION};if(typeof exports!==UNDEF_TYPE){if(typeof module!==UNDEF_TYPE&&module.exports){exports=module.exports=UAParser}exports.UAParser=UAParser}else{if("function"===FUNC_TYPE&&__webpack_require__(14)){!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return UAParser}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}else{window.UAParser=UAParser}}var $=window.jQuery||window.Zepto;if(typeof $!==UNDEF_TYPE){var parser=new UAParser;$.ua=parser.getResult();$.ua.get=function(){return parser.getUA()};$.ua.set=function(uastring){parser.setUA(uastring);var result=parser.getResult();for(var prop in result){$.ua[prop]=result[prop]}}}})(typeof window==="object"?window:this);

/***/ },
/* 14 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;
	
	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 15 */
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function () {
	    'use strict';
	
	    var my = {},
	        Str = __webpack_require__(17);
	
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
/* 17 */
/***/ function(module, exports) {

	module.exports = {
	    trim: function (text) {
	        return text.replace(/^\s*|\s*$/g, '');
	    }
	};


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWI0NjMxZjgwNjQ4M2Q2MDIzZWUiLCJ3ZWJwYWNrOi8vLy4vbGliL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9saWIgXi4qdmVyc2lvblxcLmpzJCIsIndlYnBhY2s6Ly8vLi9saWIvZGV0ZWN0b3JzL3ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbGliIF4uKmdldFJvb3RFbGVtZW50XFwuanMkIiwid2VicGFjazovLy8uL2xpYi9kZXRlY3RvcnMvZ2V0Um9vdEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbGliIF4uKmdldFZpZXdwb3J0U2l6ZVxcLmpzJCIsIndlYnBhY2s6Ly8vLi9saWIvZGV0ZWN0b3JzL2dldFZpZXdwb3J0U2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIgXi4qZ2V0U2NyZWVuU2l6ZVxcLmpzJCIsIndlYnBhY2s6Ly8vLi9saWIvZGV0ZWN0b3JzL2dldFNjcmVlblNpemUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliIF4uKmdldERvY3VtZW50VGl0bGVcXC5qcyQiLCJ3ZWJwYWNrOi8vLy4vbGliL2RldGVjdG9ycy9nZXREb2N1bWVudFRpdGxlLmpzIiwid2VicGFjazovLy8uL2xpYiBeLipnZXRVYVxcLmpzJCIsIndlYnBhY2s6Ly8vLi9saWIvZGV0ZWN0b3JzL2dldFVhLmpzIiwid2VicGFjazovLy8uL34vdWEtcGFyc2VyLWpzL2Rpc3QvdWEtcGFyc2VyLm1pbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vYW1kLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL25ldHdvcmsvYWpheC5qcyIsIndlYnBhY2s6Ly8vLi9saWIveHBhdGgveHBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3N0cmluZy9zdHJpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUM7Ozs7Ozs7QUNsQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBaUMsdURBQXVEO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDZEE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQyx1REFBdUQ7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBaUMsdURBQXVEO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQyx1REFBdUQ7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQyx1REFBdUQ7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtB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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBK0IsMkJBQTJCO0FBQzFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ2xPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InJhZGFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBhYjQ2MzFmODA2NDgzZDYwMjNlZVxuICoqLyIsIi8qZ2xvYmFsIHdpbmRvdyovXG4oZnVuY3Rpb24gKHdpbmRvdykge1xuICAgIHZhciBkaXIgPSAnLi9kZXRlY3RvcnMvJyxcbiAgICAgICAgYXBwID0ge1xuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZlcnNpb246IHJlcXVpcmUoZGlyICsgJ3ZlcnNpb24uanMnKSxcbiAgICAgICAgICAgIGdldFJvb3RFbGVtZW50OiByZXF1aXJlKGRpciArICdnZXRSb290RWxlbWVudC5qcycpLFxuICAgICAgICAgICAgZ2V0Vmlld3BvcnRTaXplOiByZXF1aXJlKGRpciArICdnZXRWaWV3cG9ydFNpemUuanMnKSxcbiAgICAgICAgICAgIGdldFNjcmVlblNpemU6IHJlcXVpcmUoZGlyICsgJ2dldFNjcmVlblNpemUuanMnKSxcbiAgICAgICAgICAgIGdldERvY3VtZW50VGl0bGU6IHJlcXVpcmUoZGlyICsgJ2dldERvY3VtZW50VGl0bGUuanMnKSxcbiAgICAgICAgICAgIGdldFVhOiByZXF1aXJlKGRpciArICdnZXRVYS5qcycpLFxuICAgICAgICAgICAgYWpheDogcmVxdWlyZSgnLi9uZXR3b3JrL2FqYXguanMnKSxcbiAgICAgICAgICAgIHhwYXRoOiByZXF1aXJlKCcuL3hwYXRoL3hwYXRoLmpzJyksXG4gICAgICAgICAgICBzdHJpbmc6IHJlcXVpcmUoJy4vc3RyaW5nL3N0cmluZy5qcycpXG4gICAgICAgIH07XG5cbiAgICB3aW5kb3cucmFkYXIgPSBhcHA7XG59KSh3aW5kb3cpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2xpYi9hcHAuanNcbiAqKiBtb2R1bGUgaWQgPSAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgbWFwID0ge1xuXHRcIi4vZGV0ZWN0b3JzL3ZlcnNpb24uanNcIjogMlxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRyZXR1cm4gbWFwW3JlcV0gfHwgKGZ1bmN0aW9uKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKSB9KCkpO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAxO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2xpYiBeLip2ZXJzaW9uXFwuanMkXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAnMC4wLjEnO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2xpYi9kZXRlY3RvcnMvdmVyc2lvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBtYXAgPSB7XG5cdFwiLi9kZXRlY3RvcnMvZ2V0Um9vdEVsZW1lbnQuanNcIjogNFxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRyZXR1cm4gbWFwW3JlcV0gfHwgKGZ1bmN0aW9uKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKSB9KCkpO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2xpYiBeLipnZXRSb290RWxlbWVudFxcLmpzJFxuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qZ2xvYmFsIGRvY3VtZW50ICovXG4vKipcbiAqIENyZWF0ZWQgYnkgYmFuemFsaWsgb24gOC8zMS8xNS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRvY0VsZW0gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgcmV0dXJuICdDU1MxQ29tcGF0JyA9PT0gZG9jdW1lbnQuY29tcGF0TW9kZSA/IGRvY0VsZW0gOiBkb2N1bWVudC5ib2R5IHx8IGRvY0VsZW07XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2xpYi9kZXRlY3RvcnMvZ2V0Um9vdEVsZW1lbnQuanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgbWFwID0ge1xuXHRcIi4vZGV0ZWN0b3JzL2dldFZpZXdwb3J0U2l6ZS5qc1wiOiA2XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHJldHVybiBtYXBbcmVxXSB8fCAoZnVuY3Rpb24oKSB7IHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpIH0oKSk7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbGliIF4uKmdldFZpZXdwb3J0U2l6ZVxcLmpzJFxuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ3JlYXRlZCBieSBiYW56YWxpayBvbiA4LzMxLzE1LlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcm9vdCA9IHJlcXVpcmUoJy4vZ2V0Um9vdEVsZW1lbnQuanMnKSgpO1xuICAgIHJldHVybiBbcm9vdC5jbGllbnRXaWR0aCwgcm9vdC5jbGllbnRIZWlnaHRdO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9saWIvZGV0ZWN0b3JzL2dldFZpZXdwb3J0U2l6ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBtYXAgPSB7XG5cdFwiLi9kZXRlY3RvcnMvZ2V0U2NyZWVuU2l6ZS5qc1wiOiA4XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHJldHVybiBtYXBbcmVxXSB8fCAoZnVuY3Rpb24oKSB7IHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpIH0oKSk7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDc7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbGliIF4uKmdldFNjcmVlblNpemVcXC5qcyRcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENyZWF0ZWQgYnkgYmFuemFsaWsgb24gOC8zMS8xNS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNjcmVlbiA9IHdpbmRvdy5zY3JlZW47XG5cbiAgICByZXR1cm4gW3NjcmVlbi53aWR0aCwgc2NyZWVuLmhlaWdodF07XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2xpYi9kZXRlY3RvcnMvZ2V0U2NyZWVuU2l6ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBtYXAgPSB7XG5cdFwiLi9kZXRlY3RvcnMvZ2V0RG9jdW1lbnRUaXRsZS5qc1wiOiAxMFxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRyZXR1cm4gbWFwW3JlcV0gfHwgKGZ1bmN0aW9uKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKSB9KCkpO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSA5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2xpYiBeLipnZXREb2N1bWVudFRpdGxlXFwuanMkXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypnbG9iYWwgZG9jdW1lbnQgKi9cbi8qKlxuICogQ3JlYXRlZCBieSBiYW56YWxpayBvbiA5LzEvMTUuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0aXRsZSA9IGRvY3VtZW50LnRpdGxlO1xuICAgIGlmICh0eXBlb2YgdGl0bGUgIT09ICdzdHJpbmcnICkge1xuICAgICAgICB0aXRsZSA9ICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGl0bGUnKTtcbiAgICAgICAgaWYgKHRpdGxlKSB7XG4gICAgICAgICAgICB0aXRsZSA9ICB0aXRsZVswXS5pbm5lckhUTUw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aXRsZSA9ICcnO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aXRsZTtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbGliL2RldGVjdG9ycy9nZXREb2N1bWVudFRpdGxlLmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBtYXAgPSB7XG5cdFwiLi9kZXRlY3RvcnMvZ2V0VWEuanNcIjogMTJcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0cmV0dXJuIG1hcFtyZXFdIHx8IChmdW5jdGlvbigpIHsgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIikgfSgpKTtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gMTE7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbGliIF4uKmdldFVhXFwuanMkXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ3JlYXRlZCBieSBiYW56YWxpayBvbiA4LzMxLzE1LlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgUGFyc2VyID0gcmVxdWlyZSgnLi4vLi4vbm9kZV9tb2R1bGVzL3VhLXBhcnNlci1qcy9kaXN0L3VhLXBhcnNlci5taW4uanMnKSxcbiAgICAgICAgdWEgPSBuZXcgUGFyc2VyKCk7XG5cbiAgICByZXR1cm4gdWEuZ2V0UmVzdWx0KCk7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2xpYi9kZXRlY3RvcnMvZ2V0VWEuanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBVQVBhcnNlci5qcyB2MC43LjlcbiAqIExpZ2h0d2VpZ2h0IEphdmFTY3JpcHQtYmFzZWQgVXNlci1BZ2VudCBzdHJpbmcgcGFyc2VyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFpc2FsbWFuL3VhLXBhcnNlci1qc1xuICpcbiAqIENvcHlyaWdodCDCqSAyMDEyLTIwMTUgRmFpc2FsIFNhbG1hbiA8Znl6bG1hbkBnbWFpbC5jb20+XG4gKiBEdWFsIGxpY2Vuc2VkIHVuZGVyIEdQTHYyICYgTUlUXG4gKi9cbihmdW5jdGlvbih3aW5kb3csdW5kZWZpbmVkKXtcInVzZSBzdHJpY3RcIjt2YXIgTElCVkVSU0lPTj1cIjAuNy45XCIsRU1QVFk9XCJcIixVTktOT1dOPVwiP1wiLEZVTkNfVFlQRT1cImZ1bmN0aW9uXCIsVU5ERUZfVFlQRT1cInVuZGVmaW5lZFwiLE9CSl9UWVBFPVwib2JqZWN0XCIsU1RSX1RZUEU9XCJzdHJpbmdcIixNQUpPUj1cIm1ham9yXCIsTU9ERUw9XCJtb2RlbFwiLE5BTUU9XCJuYW1lXCIsVFlQRT1cInR5cGVcIixWRU5ET1I9XCJ2ZW5kb3JcIixWRVJTSU9OPVwidmVyc2lvblwiLEFSQ0hJVEVDVFVSRT1cImFyY2hpdGVjdHVyZVwiLENPTlNPTEU9XCJjb25zb2xlXCIsTU9CSUxFPVwibW9iaWxlXCIsVEFCTEVUPVwidGFibGV0XCIsU01BUlRUVj1cInNtYXJ0dHZcIixXRUFSQUJMRT1cIndlYXJhYmxlXCIsRU1CRURERUQ9XCJlbWJlZGRlZFwiO3ZhciB1dGlsPXtleHRlbmQ6ZnVuY3Rpb24ocmVnZXhlcyxleHRlbnNpb25zKXtmb3IodmFyIGkgaW4gZXh0ZW5zaW9ucyl7aWYoXCJicm93c2VyIGNwdSBkZXZpY2UgZW5naW5lIG9zXCIuaW5kZXhPZihpKSE9PS0xJiZleHRlbnNpb25zW2ldLmxlbmd0aCUyPT09MCl7cmVnZXhlc1tpXT1leHRlbnNpb25zW2ldLmNvbmNhdChyZWdleGVzW2ldKX19cmV0dXJuIHJlZ2V4ZXN9LGhhczpmdW5jdGlvbihzdHIxLHN0cjIpe2lmKHR5cGVvZiBzdHIxPT09XCJzdHJpbmdcIil7cmV0dXJuIHN0cjIudG9Mb3dlckNhc2UoKS5pbmRleE9mKHN0cjEudG9Mb3dlckNhc2UoKSkhPT0tMX1lbHNle3JldHVybiBmYWxzZX19LGxvd2VyaXplOmZ1bmN0aW9uKHN0cil7cmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpfSxtYWpvcjpmdW5jdGlvbih2ZXJzaW9uKXtyZXR1cm4gdHlwZW9mIHZlcnNpb249PT1TVFJfVFlQRT92ZXJzaW9uLnNwbGl0KFwiLlwiKVswXTp1bmRlZmluZWR9fTt2YXIgbWFwcGVyPXtyZ3g6ZnVuY3Rpb24oKXt2YXIgcmVzdWx0LGk9MCxqLGsscCxxLG1hdGNoZXMsbWF0Y2gsYXJncz1hcmd1bWVudHM7d2hpbGUoaTxhcmdzLmxlbmd0aCYmIW1hdGNoZXMpe3ZhciByZWdleD1hcmdzW2ldLHByb3BzPWFyZ3NbaSsxXTtpZih0eXBlb2YgcmVzdWx0PT09VU5ERUZfVFlQRSl7cmVzdWx0PXt9O2ZvcihwIGluIHByb3BzKXtxPXByb3BzW3BdO2lmKHR5cGVvZiBxPT09T0JKX1RZUEUpe3Jlc3VsdFtxWzBdXT11bmRlZmluZWR9ZWxzZXtyZXN1bHRbcV09dW5kZWZpbmVkfX19aj1rPTA7d2hpbGUoajxyZWdleC5sZW5ndGgmJiFtYXRjaGVzKXttYXRjaGVzPXJlZ2V4W2orK10uZXhlYyh0aGlzLmdldFVBKCkpO2lmKCEhbWF0Y2hlcyl7Zm9yKHA9MDtwPHByb3BzLmxlbmd0aDtwKyspe21hdGNoPW1hdGNoZXNbKytrXTtxPXByb3BzW3BdO2lmKHR5cGVvZiBxPT09T0JKX1RZUEUmJnEubGVuZ3RoPjApe2lmKHEubGVuZ3RoPT0yKXtpZih0eXBlb2YgcVsxXT09RlVOQ19UWVBFKXtyZXN1bHRbcVswXV09cVsxXS5jYWxsKHRoaXMsbWF0Y2gpfWVsc2V7cmVzdWx0W3FbMF1dPXFbMV19fWVsc2UgaWYocS5sZW5ndGg9PTMpe2lmKHR5cGVvZiBxWzFdPT09RlVOQ19UWVBFJiYhKHFbMV0uZXhlYyYmcVsxXS50ZXN0KSl7cmVzdWx0W3FbMF1dPW1hdGNoP3FbMV0uY2FsbCh0aGlzLG1hdGNoLHFbMl0pOnVuZGVmaW5lZH1lbHNle3Jlc3VsdFtxWzBdXT1tYXRjaD9tYXRjaC5yZXBsYWNlKHFbMV0scVsyXSk6dW5kZWZpbmVkfX1lbHNlIGlmKHEubGVuZ3RoPT00KXtyZXN1bHRbcVswXV09bWF0Y2g/cVszXS5jYWxsKHRoaXMsbWF0Y2gucmVwbGFjZShxWzFdLHFbMl0pKTp1bmRlZmluZWR9fWVsc2V7cmVzdWx0W3FdPW1hdGNoP21hdGNoOnVuZGVmaW5lZH19fX1pKz0yfXJldHVybiByZXN1bHR9LHN0cjpmdW5jdGlvbihzdHIsbWFwKXtmb3IodmFyIGkgaW4gbWFwKXtpZih0eXBlb2YgbWFwW2ldPT09T0JKX1RZUEUmJm1hcFtpXS5sZW5ndGg+MCl7Zm9yKHZhciBqPTA7ajxtYXBbaV0ubGVuZ3RoO2orKyl7aWYodXRpbC5oYXMobWFwW2ldW2pdLHN0cikpe3JldHVybiBpPT09VU5LTk9XTj91bmRlZmluZWQ6aX19fWVsc2UgaWYodXRpbC5oYXMobWFwW2ldLHN0cikpe3JldHVybiBpPT09VU5LTk9XTj91bmRlZmluZWQ6aX19cmV0dXJuIHN0cn19O3ZhciBtYXBzPXticm93c2VyOntvbGRzYWZhcmk6e3ZlcnNpb246e1wiMS4wXCI6XCIvOFwiLDEuMjpcIi8xXCIsMS4zOlwiLzNcIixcIjIuMFwiOlwiLzQxMlwiLFwiMi4wLjJcIjpcIi80MTZcIixcIjIuMC4zXCI6XCIvNDE3XCIsXCIyLjAuNFwiOlwiLzQxOVwiLFwiP1wiOlwiL1wifX19LGRldmljZTp7YW1hem9uOnttb2RlbDp7XCJGaXJlIFBob25lXCI6W1wiU0RcIixcIktGXCJdfX0sc3ByaW50Onttb2RlbDp7XCJFdm8gU2hpZnQgNEdcIjpcIjczNzNLVFwifSx2ZW5kb3I6e0hUQzpcIkFQQVwiLFNwcmludDpcIlNwcmludFwifX19LG9zOnt3aW5kb3dzOnt2ZXJzaW9uOntNRTpcIjQuOTBcIixcIk5UIDMuMTFcIjpcIk5UMy41MVwiLFwiTlQgNC4wXCI6XCJOVDQuMFwiLDIwMDA6XCJOVCA1LjBcIixYUDpbXCJOVCA1LjFcIixcIk5UIDUuMlwiXSxWaXN0YTpcIk5UIDYuMFwiLDc6XCJOVCA2LjFcIiw4OlwiTlQgNi4yXCIsOC4xOlwiTlQgNi4zXCIsMTA6W1wiTlQgNi40XCIsXCJOVCAxMC4wXCJdLFJUOlwiQVJNXCJ9fX19O3ZhciByZWdleGVzPXticm93c2VyOltbLyhvcGVyYVxcc21pbmkpXFwvKFtcXHdcXC4tXSspL2ksLyhvcGVyYVxcc1ttb2JpbGV0YWJdKykuK3ZlcnNpb25cXC8oW1xcd1xcLi1dKykvaSwvKG9wZXJhKS4rdmVyc2lvblxcLyhbXFx3XFwuXSspL2ksLyhvcGVyYSlbXFwvXFxzXSsoW1xcd1xcLl0rKS9pXSxbTkFNRSxWRVJTSU9OXSxbL1xccyhvcHIpXFwvKFtcXHdcXC5dKykvaV0sW1tOQU1FLFwiT3BlcmFcIl0sVkVSU0lPTl0sWy8oa2luZGxlKVxcLyhbXFx3XFwuXSspL2ksLyhsdW5hc2NhcGV8bWF4dGhvbnxuZXRmcm9udHxqYXNtaW5lfGJsYXplcilbXFwvXFxzXT8oW1xcd1xcLl0rKSovaSwvKGF2YW50XFxzfGllbW9iaWxlfHNsaW18YmFpZHUpKD86YnJvd3Nlcik/W1xcL1xcc10/KFtcXHdcXC5dKikvaSwvKD86bXN8XFwoKShpZSlcXHMoW1xcd1xcLl0rKS9pLC8ocmVrb25xKVxcLyhbXFx3XFwuXSspKi9pLC8oY2hyb21pdW18ZmxvY2t8cm9ja21lbHR8bWlkb3JpfGVwaXBoYW55fHNpbGt8c2t5ZmlyZXxvdmlicm93c2VyfGJvbHR8aXJvbnx2aXZhbGRpfGlyaWRpdW0pXFwvKFtcXHdcXC4tXSspL2ldLFtOQU1FLFZFUlNJT05dLFsvKHRyaWRlbnQpLitydls6XFxzXShbXFx3XFwuXSspLitsaWtlXFxzZ2Vja28vaV0sW1tOQU1FLFwiSUVcIl0sVkVSU0lPTl0sWy8oZWRnZSlcXC8oKFxcZCspP1tcXHdcXC5dKykvaV0sW05BTUUsVkVSU0lPTl0sWy8oeWFicm93c2VyKVxcLyhbXFx3XFwuXSspL2ldLFtbTkFNRSxcIllhbmRleFwiXSxWRVJTSU9OXSxbLyhjb21vZG9fZHJhZ29uKVxcLyhbXFx3XFwuXSspL2ldLFtbTkFNRSwvXy9nLFwiIFwiXSxWRVJTSU9OXSxbLyhjaHJvbWV8b21uaXdlYnxhcm9yYXxbdGl6ZW5va2FdezV9XFxzP2Jyb3dzZXIpXFwvdj8oW1xcd1xcLl0rKS9pLC8odWNcXHM/YnJvd3NlcnxxcWJyb3dzZXIpW1xcL1xcc10/KFtcXHdcXC5dKykvaV0sW05BTUUsVkVSU0lPTl0sWy8oZG9sZmluKVxcLyhbXFx3XFwuXSspL2ldLFtbTkFNRSxcIkRvbHBoaW5cIl0sVkVSU0lPTl0sWy8oKD86YW5kcm9pZC4rKWNybW98Y3Jpb3MpXFwvKFtcXHdcXC5dKykvaV0sW1tOQU1FLFwiQ2hyb21lXCJdLFZFUlNJT05dLFsvWGlhb01pXFwvTWl1aUJyb3dzZXJcXC8oW1xcd1xcLl0rKS9pXSxbVkVSU0lPTixbTkFNRSxcIk1JVUkgQnJvd3NlclwiXV0sWy9hbmRyb2lkLit2ZXJzaW9uXFwvKFtcXHdcXC5dKylcXHMrKD86bW9iaWxlXFxzP3NhZmFyaXxzYWZhcmkpL2ldLFtWRVJTSU9OLFtOQU1FLFwiQW5kcm9pZCBCcm93c2VyXCJdXSxbL0ZCQVZcXC8oW1xcd1xcLl0rKTsvaV0sW1ZFUlNJT04sW05BTUUsXCJGYWNlYm9va1wiXV0sWy92ZXJzaW9uXFwvKFtcXHdcXC5dKykuKz9tb2JpbGVcXC9cXHcrXFxzKHNhZmFyaSkvaV0sW1ZFUlNJT04sW05BTUUsXCJNb2JpbGUgU2FmYXJpXCJdXSxbL3ZlcnNpb25cXC8oW1xcd1xcLl0rKS4rPyhtb2JpbGVcXHM/c2FmYXJpfHNhZmFyaSkvaV0sW1ZFUlNJT04sTkFNRV0sWy93ZWJraXQuKz8obW9iaWxlXFxzP3NhZmFyaXxzYWZhcmkpKFxcL1tcXHdcXC5dKykvaV0sW05BTUUsW1ZFUlNJT04sbWFwcGVyLnN0cixtYXBzLmJyb3dzZXIub2xkc2FmYXJpLnZlcnNpb25dXSxbLyhrb25xdWVyb3IpXFwvKFtcXHdcXC5dKykvaSwvKHdlYmtpdHxraHRtbClcXC8oW1xcd1xcLl0rKS9pXSxbTkFNRSxWRVJTSU9OXSxbLyhuYXZpZ2F0b3J8bmV0c2NhcGUpXFwvKFtcXHdcXC4tXSspL2ldLFtbTkFNRSxcIk5ldHNjYXBlXCJdLFZFUlNJT05dLFsvZnhpb3NcXC8oW1xcd1xcLi1dKykvaV0sW1ZFUlNJT04sW05BTUUsXCJGaXJlZm94XCJdXSxbLyhzd2lmdGZveCkvaSwvKGljZWRyYWdvbnxpY2V3ZWFzZWx8Y2FtaW5vfGNoaW1lcmF8ZmVubmVjfG1hZW1vXFxzYnJvd3NlcnxtaW5pbW98Y29ua2Vyb3IpW1xcL1xcc10/KFtcXHdcXC5cXCtdKykvaSwvKGZpcmVmb3h8c2VhbW9ua2V5fGstbWVsZW9ufGljZWNhdHxpY2VhcGV8ZmlyZWJpcmR8cGhvZW5peClcXC8oW1xcd1xcLi1dKykvaSwvKG1vemlsbGEpXFwvKFtcXHdcXC5dKykuK3J2XFw6LitnZWNrb1xcL1xcZCsvaSwvKHBvbGFyaXN8bHlueHxkaWxsb3xpY2FifGRvcmlzfGFtYXlhfHczbXxuZXRzdXJmKVtcXC9cXHNdPyhbXFx3XFwuXSspL2ksLyhsaW5rcylcXHNcXCgoW1xcd1xcLl0rKS9pLC8oZ29icm93c2VyKVxcLz8oW1xcd1xcLl0rKSovaSwvKGljZVxccz9icm93c2VyKVxcL3Y/KFtcXHdcXC5fXSspL2ksLyhtb3NhaWMpW1xcL1xcc10oW1xcd1xcLl0rKS9pXSxbTkFNRSxWRVJTSU9OXV0sY3B1OltbLyg/OihhbWR8eCg/Oig/Ojg2fDY0KVtfLV0pP3x3b3d8d2luKTY0KVs7XFwpXS9pXSxbW0FSQ0hJVEVDVFVSRSxcImFtZDY0XCJdXSxbLyhpYTMyKD89OykpL2ldLFtbQVJDSElURUNUVVJFLHV0aWwubG93ZXJpemVdXSxbLygoPzppWzM0Nl18eCk4NilbO1xcKV0vaV0sW1tBUkNISVRFQ1RVUkUsXCJpYTMyXCJdXSxbL3dpbmRvd3NcXHMoY2V8bW9iaWxlKTtcXHNwcGM7L2ldLFtbQVJDSElURUNUVVJFLFwiYXJtXCJdXSxbLygoPzpwcGN8cG93ZXJwYykoPzo2NCk/KSg/Olxcc21hY3w7fFxcKSkvaV0sW1tBUkNISVRFQ1RVUkUsL293ZXIvLFwiXCIsdXRpbC5sb3dlcml6ZV1dLFsvKHN1bjRcXHcpWztcXCldL2ldLFtbQVJDSElURUNUVVJFLFwic3BhcmNcIl1dLFsvKCg/OmF2cjMyfGlhNjQoPz07KSl8NjhrKD89XFwpKXxhcm0oPzo2NHwoPz12XFxkKzspKXwoPz1hdG1lbFxccylhdnJ8KD86aXJpeHxtaXBzfHNwYXJjKSg/OjY0KT8oPz07KXxwYS1yaXNjKS9pXSxbW0FSQ0hJVEVDVFVSRSx1dGlsLmxvd2VyaXplXV1dLGRldmljZTpbWy9cXCgoaXBhZHxwbGF5Ym9vayk7W1xcd1xcc1xcKTstXSsocmltfGFwcGxlKS9pXSxbTU9ERUwsVkVORE9SLFtUWVBFLFRBQkxFVF1dLFsvYXBwbGVjb3JlbWVkaWFcXC9bXFx3XFwuXSsgXFwoKGlwYWQpL10sW01PREVMLFtWRU5ET1IsXCJBcHBsZVwiXSxbVFlQRSxUQUJMRVRdXSxbLyhhcHBsZVxcc3swLDF9dHYpL2ldLFtbTU9ERUwsXCJBcHBsZSBUVlwiXSxbVkVORE9SLFwiQXBwbGVcIl1dLFsvKGFyY2hvcylcXHMoZ2FtZXBhZDI/KS9pLC8oaHApLisodG91Y2hwYWQpL2ksLyhraW5kbGUpXFwvKFtcXHdcXC5dKykvaSwvXFxzKG5vb2spW1xcd1xcc10rYnVpbGRcXC8oXFx3KykvaSwvKGRlbGwpXFxzKHN0cmVhW2twclxcc1xcZF0qW1xcZGtvXSkvaV0sW1ZFTkRPUixNT0RFTCxbVFlQRSxUQUJMRVRdXSxbLyhrZltBLXpdKylcXHNidWlsZFxcL1tcXHdcXC5dKy4qc2lsa1xcLy9pXSxbTU9ERUwsW1ZFTkRPUixcIkFtYXpvblwiXSxbVFlQRSxUQUJMRVRdXSxbLyhzZHxrZilbMDM0OWhpam9yc3R1d10rXFxzYnVpbGRcXC9bXFx3XFwuXSsuKnNpbGtcXC8vaV0sW1tNT0RFTCxtYXBwZXIuc3RyLG1hcHMuZGV2aWNlLmFtYXpvbi5tb2RlbF0sW1ZFTkRPUixcIkFtYXpvblwiXSxbVFlQRSxNT0JJTEVdXSxbL1xcKChpcFtob25lZHxcXHNcXHcqXSspOy4rKGFwcGxlKS9pXSxbTU9ERUwsVkVORE9SLFtUWVBFLE1PQklMRV1dLFsvXFwoKGlwW2hvbmVkfFxcc1xcdypdKyk7L2ldLFtNT0RFTCxbVkVORE9SLFwiQXBwbGVcIl0sW1RZUEUsTU9CSUxFXV0sWy8oYmxhY2tiZXJyeSlbXFxzLV0/KFxcdyspL2ksLyhibGFja2JlcnJ5fGJlbnF8cGFsbSg/PVxcLSl8c29ueWVyaWNzc29ufGFjZXJ8YXN1c3xkZWxsfGh1YXdlaXxtZWl6dXxtb3Rvcm9sYXxwb2x5dHJvbilbXFxzXy1dPyhbXFx3LV0rKSovaSwvKGhwKVxccyhbXFx3XFxzXStcXHcpL2ksLyhhc3VzKS0/KFxcdyspL2ldLFtWRU5ET1IsTU9ERUwsW1RZUEUsTU9CSUxFXV0sWy9cXChiYjEwO1xccyhcXHcrKS9pXSxbTU9ERUwsW1ZFTkRPUixcIkJsYWNrQmVycnlcIl0sW1RZUEUsTU9CSUxFXV0sWy9hbmRyb2lkLisodHJhbnNmb1twcmltZVxcc117NCwxMH1cXHNcXHcrfGVlZXBjfHNsaWRlclxcc1xcdyt8bmV4dXMgNykvaV0sW01PREVMLFtWRU5ET1IsXCJBc3VzXCJdLFtUWVBFLFRBQkxFVF1dLFsvKHNvbnkpXFxzKHRhYmxldFxcc1twc10pXFxzYnVpbGRcXC8vaSwvKHNvbnkpPyg/OnNncC4rKVxcc2J1aWxkXFwvL2ldLFtbVkVORE9SLFwiU29ueVwiXSxbTU9ERUwsXCJYcGVyaWEgVGFibGV0XCJdLFtUWVBFLFRBQkxFVF1dLFsvKD86c29ueSk/KD86KD86KD86Y3xkKVxcZHs0fSl8KD86c29bLWxdLispKVxcc2J1aWxkXFwvL2ldLFtbVkVORE9SLFwiU29ueVwiXSxbTU9ERUwsXCJYcGVyaWEgUGhvbmVcIl0sW1RZUEUsTU9CSUxFXV0sWy9cXHMob3V5YSlcXHMvaSwvKG5pbnRlbmRvKVxccyhbd2lkczN1XSspL2ldLFtWRU5ET1IsTU9ERUwsW1RZUEUsQ09OU09MRV1dLFsvYW5kcm9pZC4rO1xccyhzaGllbGQpXFxzYnVpbGQvaV0sW01PREVMLFtWRU5ET1IsXCJOdmlkaWFcIl0sW1RZUEUsQ09OU09MRV1dLFsvKHBsYXlzdGF0aW9uXFxzWzNwb3J0YWJsZXZpXSspL2ldLFtNT0RFTCxbVkVORE9SLFwiU29ueVwiXSxbVFlQRSxDT05TT0xFXV0sWy8oc3ByaW50XFxzKFxcdyspKS9pXSxbW1ZFTkRPUixtYXBwZXIuc3RyLG1hcHMuZGV2aWNlLnNwcmludC52ZW5kb3JdLFtNT0RFTCxtYXBwZXIuc3RyLG1hcHMuZGV2aWNlLnNwcmludC5tb2RlbF0sW1RZUEUsTU9CSUxFXV0sWy8obGVub3ZvKVxccz8oUyg/OjUwMDB8NjAwMCkrKD86Wy1dW1xcdytdKSkvaV0sW1ZFTkRPUixNT0RFTCxbVFlQRSxUQUJMRVRdXSxbLyhodGMpWztfXFxzLV0rKFtcXHdcXHNdKyg/PVxcKSl8XFx3KykqL2ksLyh6dGUpLShcXHcrKSovaSwvKGFsY2F0ZWx8Z2Vla3NwaG9uZXxodWF3ZWl8bGVub3ZvfG5leGlhbnxwYW5hc29uaWN8KD89O1xccylzb255KVtfXFxzLV0/KFtcXHctXSspKi9pXSxbVkVORE9SLFtNT0RFTCwvXy9nLFwiIFwiXSxbVFlQRSxNT0JJTEVdXSxbLyhuZXh1c1xcczkpL2ldLFtNT0RFTCxbVkVORE9SLFwiSFRDXCJdLFtUWVBFLFRBQkxFVF1dLFsvW1xcc1xcKDtdKHhib3goPzpcXHNvbmUpPylbXFxzXFwpO10vaV0sW01PREVMLFtWRU5ET1IsXCJNaWNyb3NvZnRcIl0sW1RZUEUsQ09OU09MRV1dLFsvKGtpblxcLltvbmV0d117M30pL2ldLFtbTU9ERUwsL1xcLi9nLFwiIFwiXSxbVkVORE9SLFwiTWljcm9zb2Z0XCJdLFtUWVBFLE1PQklMRV1dLFsvXFxzKG1pbGVzdG9uZXxkcm9pZCg/OlsyLTR4XXxcXHMoPzpiaW9uaWN8eDJ8cHJvfHJhenIpKT8oOj9cXHM0Zyk/KVtcXHdcXHNdK2J1aWxkXFwvL2ksL21vdFtcXHMtXT8oXFx3KykqL2ksLyhYVFxcZHszLDR9KSBidWlsZFxcLy9pXSxbTU9ERUwsW1ZFTkRPUixcIk1vdG9yb2xhXCJdLFtUWVBFLE1PQklMRV1dLFsvYW5kcm9pZC4rXFxzKG16NjBcXGR8eG9vbVtcXHMyXXswLDJ9KVxcc2J1aWxkXFwvL2ldLFtNT0RFTCxbVkVORE9SLFwiTW90b3JvbGFcIl0sW1RZUEUsVEFCTEVUXV0sWy9hbmRyb2lkLisoKHNjaC1pWzg5XTBcXGR8c2h3LW0zODBzfGd0LXBcXGR7NH18Z3QtbjgwMDB8c2doLXQ4WzU2XTl8bmV4dXMgMTApKS9pLC8oKFNNLVRcXHcrKSkvaV0sW1tWRU5ET1IsXCJTYW1zdW5nXCJdLE1PREVMLFtUWVBFLFRBQkxFVF1dLFsvKChzW2NncF1oLVxcdyt8Z3QtXFx3K3xnYWxheHlcXHNuZXh1c3xzbS1uOTAwKSkvaSwvKHNhbVtzdW5nXSopW1xccy1dKihcXHcrLT9bXFx3LV0qKSovaSwvc2VjLSgoc2doXFx3KykpL2ldLFtbVkVORE9SLFwiU2Ftc3VuZ1wiXSxNT0RFTCxbVFlQRSxNT0JJTEVdXSxbLyhzYW1zdW5nKTtzbWFydHR2L2ldLFtWRU5ET1IsTU9ERUwsW1RZUEUsU01BUlRUVl1dLFsvXFwoZHR2W1xcKTtdLisoYXF1b3MpL2ldLFtNT0RFTCxbVkVORE9SLFwiU2hhcnBcIl0sW1RZUEUsU01BUlRUVl1dLFsvc2llLShcXHcrKSovaV0sW01PREVMLFtWRU5ET1IsXCJTaWVtZW5zXCJdLFtUWVBFLE1PQklMRV1dLFsvKG1hZW1vfG5va2lhKS4qKG45MDB8bHVtaWFcXHNcXGQrKS9pLC8obm9raWEpW1xcc18tXT8oW1xcdy1dKykqL2ldLFtbVkVORE9SLFwiTm9raWFcIl0sTU9ERUwsW1RZUEUsTU9CSUxFXV0sWy9hbmRyb2lkXFxzM1xcLltcXHNcXHc7LV17MTB9KGFcXGR7M30pL2ldLFtNT0RFTCxbVkVORE9SLFwiQWNlclwiXSxbVFlQRSxUQUJMRVRdXSxbL2FuZHJvaWRcXHMzXFwuW1xcc1xcdzstXXsxMH0obGc/KS0oWzA2Y3Y5XXszLDR9KS9pXSxbW1ZFTkRPUixcIkxHXCJdLE1PREVMLFtUWVBFLFRBQkxFVF1dLFsvKGxnKSBuZXRjYXN0XFwudHYvaV0sW1ZFTkRPUixNT0RFTCxbVFlQRSxTTUFSVFRWXV0sWy8obmV4dXNcXHNbNDVdKS9pLC9sZ1tlO1xcc1xcLy1dKyhcXHcrKSovaV0sW01PREVMLFtWRU5ET1IsXCJMR1wiXSxbVFlQRSxNT0JJTEVdXSxbL2FuZHJvaWQuKyhpZGVhdGFiW2EtejAtOVxcLVxcc10rKS9pXSxbTU9ERUwsW1ZFTkRPUixcIkxlbm92b1wiXSxbVFlQRSxUQUJMRVRdXSxbL2xpbnV4Oy4rKChqb2xsYSkpOy9pXSxbVkVORE9SLE1PREVMLFtUWVBFLE1PQklMRV1dLFsvKChwZWJibGUpKWFwcFxcL1tcXGRcXC5dK1xccy9pXSxbVkVORE9SLE1PREVMLFtUWVBFLFdFQVJBQkxFXV0sWy9hbmRyb2lkLis7XFxzKGdsYXNzKVxcc1xcZC9pXSxbTU9ERUwsW1ZFTkRPUixcIkdvb2dsZVwiXSxbVFlQRSxXRUFSQUJMRV1dLFsvYW5kcm9pZC4rKFxcdyspXFxzK2J1aWxkXFwvaG1cXDEvaSwvYW5kcm9pZC4rKGhtW1xcc1xcLV9dKm5vdGU/W1xcc19dKig/OlxcZFxcdyk/KVxccytidWlsZC9pLC9hbmRyb2lkLisobWlbXFxzXFwtX10qKD86b25lfG9uZVtcXHNfXXBsdXMpP1tcXHNfXSooPzpcXGRcXHcpPylcXHMrYnVpbGQvaV0sW1tNT0RFTCwvXy9nLFwiIFwiXSxbVkVORE9SLFwiWGlhb21pXCJdLFtUWVBFLE1PQklMRV1dLFsvKG1vYmlsZXx0YWJsZXQpOy4rcnZcXDouK2dlY2tvXFwvL2ldLFtbVFlQRSx1dGlsLmxvd2VyaXplXSxWRU5ET1IsTU9ERUxdXSxlbmdpbmU6W1svd2luZG93cy4rXFxzZWRnZVxcLyhbXFx3XFwuXSspL2ldLFtWRVJTSU9OLFtOQU1FLFwiRWRnZUhUTUxcIl1dLFsvKHByZXN0bylcXC8oW1xcd1xcLl0rKS9pLC8od2Via2l0fHRyaWRlbnR8bmV0ZnJvbnR8bmV0c3VyZnxhbWF5YXxseW54fHczbSlcXC8oW1xcd1xcLl0rKS9pLC8oa2h0bWx8dGFzbWFufGxpbmtzKVtcXC9cXHNdXFwoPyhbXFx3XFwuXSspL2ksLyhpY2FiKVtcXC9cXHNdKFsyM11cXC5bXFxkXFwuXSspL2ldLFtOQU1FLFZFUlNJT05dLFsvcnZcXDooW1xcd1xcLl0rKS4qKGdlY2tvKS9pXSxbVkVSU0lPTixOQU1FXV0sb3M6W1svbWljcm9zb2Z0XFxzKHdpbmRvd3MpXFxzKHZpc3RhfHhwKS9pXSxbTkFNRSxWRVJTSU9OXSxbLyh3aW5kb3dzKVxcc250XFxzNlxcLjI7XFxzKGFybSkvaSwvKHdpbmRvd3NcXHNwaG9uZSg/Olxcc29zKSp8d2luZG93c1xcc21vYmlsZXx3aW5kb3dzKVtcXHNcXC9dPyhbbnRjZVxcZFxcLlxcc10rXFx3KS9pXSxbTkFNRSxbVkVSU0lPTixtYXBwZXIuc3RyLG1hcHMub3Mud2luZG93cy52ZXJzaW9uXV0sWy8od2luKD89M3w5fG4pfHdpblxcczl4XFxzKShbbnRcXGRcXC5dKykvaV0sW1tOQU1FLFwiV2luZG93c1wiXSxbVkVSU0lPTixtYXBwZXIuc3RyLG1hcHMub3Mud2luZG93cy52ZXJzaW9uXV0sWy9cXCgoYmIpKDEwKTsvaV0sW1tOQU1FLFwiQmxhY2tCZXJyeVwiXSxWRVJTSU9OXSxbLyhibGFja2JlcnJ5KVxcdypcXC8/KFtcXHdcXC5dKykqL2ksLyh0aXplbilbXFwvXFxzXShbXFx3XFwuXSspL2ksLyhhbmRyb2lkfHdlYm9zfHBhbG1cXHNvc3xxbnh8YmFkYXxyaW1cXHN0YWJsZXRcXHNvc3xtZWVnb3xjb250aWtpKVtcXC9cXHMtXT8oW1xcd1xcLl0rKSovaSwvbGludXg7Lisoc2FpbGZpc2gpOy9pXSxbTkFNRSxWRVJTSU9OXSxbLyhzeW1iaWFuXFxzP29zfHN5bWJvc3xzNjAoPz07KSlbXFwvXFxzLV0/KFtcXHdcXC5dKykqL2ldLFtbTkFNRSxcIlN5bWJpYW5cIl0sVkVSU0lPTl0sWy9cXCgoc2VyaWVzNDApOy9pXSxbTkFNRV0sWy9tb3ppbGxhLitcXChtb2JpbGU7LitnZWNrby4rZmlyZWZveC9pXSxbW05BTUUsXCJGaXJlZm94IE9TXCJdLFZFUlNJT05dLFsvKG5pbnRlbmRvfHBsYXlzdGF0aW9uKVxccyhbd2lkczNwb3J0YWJsZXZ1XSspL2ksLyhtaW50KVtcXC9cXHNcXChdPyhcXHcrKSovaSwvKG1hZ2VpYXx2ZWN0b3JsaW51eClbO1xcc10vaSwvKGpvbGl8W2t4bG5dP3VidW50dXxkZWJpYW58W29wZW5dKnN1c2V8Z2VudG9vfGFyY2h8c2xhY2t3YXJlfGZlZG9yYXxtYW5kcml2YXxjZW50b3N8cGNsaW51eG9zfHJlZGhhdHx6ZW53YWxrfGxpbnB1cylbXFwvXFxzLV0/KFtcXHdcXC4tXSspKi9pLC8oaHVyZHxsaW51eClcXHM/KFtcXHdcXC5dKykqL2ksLyhnbnUpXFxzPyhbXFx3XFwuXSspKi9pXSxbTkFNRSxWRVJTSU9OXSxbLyhjcm9zKVxcc1tcXHddK1xccyhbXFx3XFwuXStcXHcpL2ldLFtbTkFNRSxcIkNocm9taXVtIE9TXCJdLFZFUlNJT05dLFsvKHN1bm9zKVxccz8oW1xcd1xcLl0rXFxkKSovaV0sW1tOQU1FLFwiU29sYXJpc1wiXSxWRVJTSU9OXSxbL1xccyhbZnJlbnRvcGMtXXswLDR9YnNkfGRyYWdvbmZseSlcXHM/KFtcXHdcXC5dKykqL2ldLFtOQU1FLFZFUlNJT05dLFsvKGlwW2hvbmVhZF0rKSg/Oi4qb3NcXHMqKFtcXHddKykqXFxzbGlrZVxcc21hY3w7XFxzb3BlcmEpL2ldLFtbTkFNRSxcImlPU1wiXSxbVkVSU0lPTiwvXy9nLFwiLlwiXV0sWy8obWFjXFxzb3NcXHN4KVxccz8oW1xcd1xcc1xcLl0rXFx3KSovaSwvKG1hY2ludG9zaHxtYWMoPz1fcG93ZXJwYylcXHMpL2ldLFtbTkFNRSxcIk1hYyBPU1wiXSxbVkVSU0lPTiwvXy9nLFwiLlwiXV0sWy8oKD86b3Blbik/c29sYXJpcylbXFwvXFxzLV0/KFtcXHdcXC5dKykqL2ksLyhoYWlrdSlcXHMoXFx3KykvaSwvKGFpeClcXHMoKFxcZCkoPz1cXC58XFwpfFxccylbXFx3XFwuXSopKi9pLC8ocGxhblxcczl8bWluaXh8YmVvc3xvc1xcLzJ8YW1pZ2Fvc3xtb3JwaG9zfHJpc2NcXHNvc3xvcGVudm1zKS9pLC8odW5peClcXHM/KFtcXHdcXC5dKykqL2ldLFtOQU1FLFZFUlNJT05dXX07dmFyIFVBUGFyc2VyPWZ1bmN0aW9uKHVhc3RyaW5nLGV4dGVuc2lvbnMpe2lmKCEodGhpcyBpbnN0YW5jZW9mIFVBUGFyc2VyKSl7cmV0dXJuIG5ldyBVQVBhcnNlcih1YXN0cmluZyxleHRlbnNpb25zKS5nZXRSZXN1bHQoKX12YXIgdWE9dWFzdHJpbmd8fCh3aW5kb3cmJndpbmRvdy5uYXZpZ2F0b3ImJndpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50P3dpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50OkVNUFRZKTt2YXIgcmd4bWFwPWV4dGVuc2lvbnM/dXRpbC5leHRlbmQocmVnZXhlcyxleHRlbnNpb25zKTpyZWdleGVzO3RoaXMuZ2V0QnJvd3Nlcj1mdW5jdGlvbigpe3ZhciBicm93c2VyPW1hcHBlci5yZ3guYXBwbHkodGhpcyxyZ3htYXAuYnJvd3Nlcik7YnJvd3Nlci5tYWpvcj11dGlsLm1ham9yKGJyb3dzZXIudmVyc2lvbik7cmV0dXJuIGJyb3dzZXJ9O3RoaXMuZ2V0Q1BVPWZ1bmN0aW9uKCl7cmV0dXJuIG1hcHBlci5yZ3guYXBwbHkodGhpcyxyZ3htYXAuY3B1KX07dGhpcy5nZXREZXZpY2U9ZnVuY3Rpb24oKXtyZXR1cm4gbWFwcGVyLnJneC5hcHBseSh0aGlzLHJneG1hcC5kZXZpY2UpfTt0aGlzLmdldEVuZ2luZT1mdW5jdGlvbigpe3JldHVybiBtYXBwZXIucmd4LmFwcGx5KHRoaXMscmd4bWFwLmVuZ2luZSl9O3RoaXMuZ2V0T1M9ZnVuY3Rpb24oKXtyZXR1cm4gbWFwcGVyLnJneC5hcHBseSh0aGlzLHJneG1hcC5vcyl9O3RoaXMuZ2V0UmVzdWx0PWZ1bmN0aW9uKCl7cmV0dXJue3VhOnRoaXMuZ2V0VUEoKSxicm93c2VyOnRoaXMuZ2V0QnJvd3NlcigpLGVuZ2luZTp0aGlzLmdldEVuZ2luZSgpLG9zOnRoaXMuZ2V0T1MoKSxkZXZpY2U6dGhpcy5nZXREZXZpY2UoKSxjcHU6dGhpcy5nZXRDUFUoKX19O3RoaXMuZ2V0VUE9ZnVuY3Rpb24oKXtyZXR1cm4gdWF9O3RoaXMuc2V0VUE9ZnVuY3Rpb24odWFzdHJpbmcpe3VhPXVhc3RyaW5nO3JldHVybiB0aGlzfTt0aGlzLnNldFVBKHVhKTtyZXR1cm4gdGhpc307VUFQYXJzZXIuVkVSU0lPTj1MSUJWRVJTSU9OO1VBUGFyc2VyLkJST1dTRVI9e05BTUU6TkFNRSxNQUpPUjpNQUpPUixWRVJTSU9OOlZFUlNJT059O1VBUGFyc2VyLkNQVT17QVJDSElURUNUVVJFOkFSQ0hJVEVDVFVSRX07VUFQYXJzZXIuREVWSUNFPXtNT0RFTDpNT0RFTCxWRU5ET1I6VkVORE9SLFRZUEU6VFlQRSxDT05TT0xFOkNPTlNPTEUsTU9CSUxFOk1PQklMRSxTTUFSVFRWOlNNQVJUVFYsVEFCTEVUOlRBQkxFVCxXRUFSQUJMRTpXRUFSQUJMRSxFTUJFRERFRDpFTUJFRERFRH07VUFQYXJzZXIuRU5HSU5FPXtOQU1FOk5BTUUsVkVSU0lPTjpWRVJTSU9OfTtVQVBhcnNlci5PUz17TkFNRTpOQU1FLFZFUlNJT046VkVSU0lPTn07aWYodHlwZW9mIGV4cG9ydHMhPT1VTkRFRl9UWVBFKXtpZih0eXBlb2YgbW9kdWxlIT09VU5ERUZfVFlQRSYmbW9kdWxlLmV4cG9ydHMpe2V4cG9ydHM9bW9kdWxlLmV4cG9ydHM9VUFQYXJzZXJ9ZXhwb3J0cy5VQVBhcnNlcj1VQVBhcnNlcn1lbHNle2lmKHR5cGVvZiBkZWZpbmU9PT1GVU5DX1RZUEUmJmRlZmluZS5hbWQpe2RlZmluZShmdW5jdGlvbigpe3JldHVybiBVQVBhcnNlcn0pfWVsc2V7d2luZG93LlVBUGFyc2VyPVVBUGFyc2VyfX12YXIgJD13aW5kb3cualF1ZXJ5fHx3aW5kb3cuWmVwdG87aWYodHlwZW9mICQhPT1VTkRFRl9UWVBFKXt2YXIgcGFyc2VyPW5ldyBVQVBhcnNlcjskLnVhPXBhcnNlci5nZXRSZXN1bHQoKTskLnVhLmdldD1mdW5jdGlvbigpe3JldHVybiBwYXJzZXIuZ2V0VUEoKX07JC51YS5zZXQ9ZnVuY3Rpb24odWFzdHJpbmcpe3BhcnNlci5zZXRVQSh1YXN0cmluZyk7dmFyIHJlc3VsdD1wYXJzZXIuZ2V0UmVzdWx0KCk7Zm9yKHZhciBwcm9wIGluIHJlc3VsdCl7JC51YVtwcm9wXT1yZXN1bHRbcHJvcF19fX19KSh0eXBlb2Ygd2luZG93PT09XCJvYmplY3RcIj93aW5kb3c6dGhpcyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdWEtcGFyc2VyLWpzL2Rpc3QvdWEtcGFyc2VyLm1pbi5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19hbWRfb3B0aW9uc19fO1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqICh3ZWJwYWNrKS9idWlsZGluL2FtZC1vcHRpb25zLmpzXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qZ2xvYmFsIHdpbmRvdywgQWN0aXZlWE9iamVjdCovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFqYXgodXJsLCBjYWxsYmFjaywgZGF0YSwgeCkge1xuICAgIGlmICghdXJsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgeCA9IG5ldyAod2luZG93LlhNTEh0dHBSZXF1ZXN0IHx8IEFjdGl2ZVhPYmplY3QpKCdNU1hNTDIuWE1MSFRUUC4zLjAnKTtcbiAgICAgICAgeC5vcGVuKGRhdGEgPyAnUE9TVCcgOiAnR0VUJywgdXJsLCAxKTtcbiAgICAgICAgeC5zZXRSZXF1ZXN0SGVhZGVyKCdYLVJlcXVlc3RlZC1XaXRoJywgJ1hNTEh0dHBSZXF1ZXN0Jyk7XG4gICAgICAgIHguc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgICAgICB4Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHgucmVhZHlTdGF0ZSA+IDMgJiYgY2FsbGJhY2sgJiYgY2FsbGJhY2soeC5yZXNwb25zZVRleHQsIHgpO1xuICAgICAgICB9O1xuICAgICAgICB4LnNlbmQoZGF0YSk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHdpbmRvdy5jb25zb2xlICYmIGNvbnNvbGUubG9nKGUpO1xuICAgIH1cbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbGliL25ldHdvcmsvYWpheC5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgbXkgPSB7fSxcbiAgICAgICAgU3RyID0gcmVxdWlyZSgnLi4vc3RyaW5nL3N0cmluZy5qcycpO1xuXG4gICAgLyoqXG4gICAgICogR2V0cyBhbiBYUGF0aCBmb3IgYW4gZWxlbWVudCB3aGljaCBkZXNjcmliZXMgaXRzIGhpZXJhcmNoaWNhbCBsb2NhdGlvbi5cbiAgICAgKi9cbiAgICBteS5nZXRFbGVtZW50WFBhdGggPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50LmlkKSB7XG4gICAgICAgICAgICByZXR1cm4gJy8vKltAaWQ9XCInICsgZWxlbWVudC5pZCArICdcIl0nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG15LmdldEVsZW1lbnRUcmVlWFBhdGgoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgbXkuZ2V0RWxlbWVudFRyZWVYUGF0aCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHZhciBwYXRocyA9IFtdO1xuXG4gICAgICAgIC8vIFVzZSBub2RlTmFtZSAoaW5zdGVhZCBvZiBsb2NhbE5hbWUpIHNvIG5hbWVzcGFjZSBwcmVmaXggaXMgaW5jbHVkZWQgKGlmIGFueSkuXG4gICAgICAgIGZvciAoOyBlbGVtZW50ICYmIGVsZW1lbnQubm9kZVR5cGUgPT0gTm9kZS5FTEVNRU5UX05PREU7IGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IDAsXG4gICAgICAgICAgICAgICAgaGFzRm9sbG93aW5nU2libGluZ3MgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAodmFyIHNpYmxpbmcgPSBlbGVtZW50LnByZXZpb3VzU2libGluZzsgc2libGluZzsgc2libGluZyA9IHNpYmxpbmcucHJldmlvdXNTaWJsaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNpYmxpbmcubm9kZVR5cGUgPT0gTm9kZS5ET0NVTUVOVF9UWVBFX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHNpYmxpbmcubm9kZU5hbWUgPT0gZWxlbWVudC5ub2RlTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICArK2luZGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yICh2YXIgc2libGluZyA9IGVsZW1lbnQubmV4dFNpYmxpbmc7IHNpYmxpbmcgJiYgIWhhc0ZvbGxvd2luZ1NpYmxpbmdzO1xuICAgICAgICAgICAgICAgICBzaWJsaW5nID0gc2libGluZy5uZXh0U2libGluZykge1xuICAgICAgICAgICAgICAgIGlmIChzaWJsaW5nLm5vZGVOYW1lID09IGVsZW1lbnQubm9kZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzRm9sbG93aW5nU2libGluZ3MgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHRhZ05hbWUgPSAoZWxlbWVudC5wcmVmaXggPyBlbGVtZW50LnByZWZpeCArICc6JyA6ICcnKSArIGVsZW1lbnQubG9jYWxOYW1lLFxuICAgICAgICAgICAgICAgIHBhdGhJbmRleCA9IChpbmRleCB8fCBoYXNGb2xsb3dpbmdTaWJsaW5ncyA/ICdbJyArIChpbmRleCArIDEpICsgJ10nIDogJycpO1xuICAgICAgICAgICAgcGF0aHMuc3BsaWNlKDAsIDAsIHRhZ05hbWUgKyBwYXRoSW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhdGhzLmxlbmd0aCA/ICcvJyArIHBhdGhzLmpvaW4oJy8nKSA6IG51bGw7XG4gICAgfTtcblxuICAgIG15LmNzc1RvWFBhdGggPSBmdW5jdGlvbiAocnVsZSkge1xuICAgICAgICB2YXIgcmVnRWxlbWVudCA9IC9eKFsjLl0/KShbYS16MC05XFxcXCpfLV0qKSgoXFx8KShbYS16MC05XFxcXCpfLV0qKSk/L2ksXG4gICAgICAgICAgICByZWdBdHRyMSA9IC9eXFxbKFteXFxdXSopXFxdL2ksXG4gICAgICAgICAgICByZWdBdHRyMiA9IC9eXFxbXFxzKihbXn49XFxzXSspXFxzKih+Pz0pXFxzKlwiKFteXCJdKylcIlxccypcXF0vaSxcbiAgICAgICAgICAgIHJlZ1BzZXVkbyA9IC9eOihbYS16Xy1dKSsvaSxcbiAgICAgICAgICAgIHJlZ0NvbWJpbmF0b3IgPSAvXihcXHMqWz4rXFxzXSk/L2ksXG4gICAgICAgICAgICByZWdDb21tYSA9IC9eXFxzKiwvaSxcbiAgICAgICAgICAgIGluZGV4ID0gMSxcbiAgICAgICAgICAgIHBhcnRzID0gWycvLycsICcqJ10sXG4gICAgICAgICAgICBsYXN0UnVsZSA9IG51bGw7XG5cbiAgICAgICAgd2hpbGUgKHJ1bGUubGVuZ3RoICYmIHJ1bGUgIT0gbGFzdFJ1bGUpIHtcbiAgICAgICAgICAgIGxhc3RSdWxlID0gcnVsZTtcblxuICAgICAgICAgICAgLy8gVHJpbSBsZWFkaW5nIHdoaXRlc3BhY2VcbiAgICAgICAgICAgIHJ1bGUgPSBTdHIudHJpbShydWxlKTtcbiAgICAgICAgICAgIGlmICghcnVsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTWF0Y2ggdGhlIGVsZW1lbnQgaWRlbnRpZmllclxuICAgICAgICAgICAgdmFyIG0gPSByZWdFbGVtZW50LmV4ZWMocnVsZSk7XG4gICAgICAgICAgICBpZiAobSkge1xuICAgICAgICAgICAgICAgIGlmICghbVsxXSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBYWFhqb2UgTmFtZXNwYWNlIGlnbm9yZWQgZm9yIG5vd1xuICAgICAgICAgICAgICAgICAgICBpZiAobVs1XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydHNbaW5kZXhdID0gbVs1XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRzW2luZGV4XSA9IG1bMl07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobVsxXSA9PSAnIycpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydHMucHVzaCgnW0BpZD1cXCcnICsgbVsyXSArICdcXCddJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1bMV0gPT0gJy4nKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goXCJbY29udGFpbnMoY29uY2F0KCcgJyxub3JtYWxpemUtc3BhY2UoQGNsYXNzKSwnICcpLCAnIFwiICsgbVsyXSArIFwiICcpXVwiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBydWxlID0gcnVsZS5zdWJzdHIobVswXS5sZW5ndGgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBNYXRjaCBhdHRyaWJ1dGUgc2VsZWN0b3JzXG4gICAgICAgICAgICBtID0gcmVnQXR0cjIuZXhlYyhydWxlKTtcbiAgICAgICAgICAgIGlmIChtKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1bMl0gPT0gJ349JylcbiAgICAgICAgICAgICAgICAgICAgcGFydHMucHVzaChcIltjb250YWlucyhAXCIgKyBtWzFdICsgXCIsICdcIiArIG1bM10gKyBcIicpXVwiKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goXCJbQFwiICsgbVsxXSArIFwiPSdcIiArIG1bM10gKyBcIiddXCIpO1xuXG4gICAgICAgICAgICAgICAgcnVsZSA9IHJ1bGUuc3Vic3RyKG1bMF0ubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG0gPSByZWdBdHRyMS5leGVjKHJ1bGUpO1xuICAgICAgICAgICAgICAgIGlmIChtKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goXCJbQFwiICsgbVsxXSArIFwiXVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcnVsZSA9IHJ1bGUuc3Vic3RyKG1bMF0ubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNraXAgb3ZlciBwc2V1ZG8tY2xhc3NlcyBhbmQgcHNldWRvLWVsZW1lbnRzLCB3aGljaCBhcmUgb2Ygbm8gdXNlIHRvIHVzXG4gICAgICAgICAgICBtID0gcmVnUHNldWRvLmV4ZWMocnVsZSk7XG4gICAgICAgICAgICB3aGlsZSAobSkge1xuICAgICAgICAgICAgICAgIHJ1bGUgPSBydWxlLnN1YnN0cihtWzBdLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgbSA9IHJlZ1BzZXVkby5leGVjKHJ1bGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBNYXRjaCBjb21iaW5hdG9yc1xuICAgICAgICAgICAgbSA9IHJlZ0NvbWJpbmF0b3IuZXhlYyhydWxlKTtcbiAgICAgICAgICAgIGlmIChtICYmIG1bMF0ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1bMF0uaW5kZXhPZignPicpICE9IC0xKVxuICAgICAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKCcvJyk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobVswXS5pbmRleE9mKCcrJykgIT0gLTEpXG4gICAgICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goJy9mb2xsb3dpbmctc2libGluZzo6Jyk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKCcvLycpO1xuXG4gICAgICAgICAgICAgICAgaW5kZXggPSBwYXJ0cy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgcGFydHMucHVzaCgnKicpO1xuICAgICAgICAgICAgICAgIHJ1bGUgPSBydWxlLnN1YnN0cihtWzBdLmxlbmd0aCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG0gPSByZWdDb21tYS5leGVjKHJ1bGUpO1xuICAgICAgICAgICAgaWYgKG0pIHtcbiAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKCcgfCAnLCAnLy8nLCAnKicpO1xuICAgICAgICAgICAgICAgIGluZGV4ID0gcGFydHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICBydWxlID0gcnVsZS5zdWJzdHIobVswXS5sZW5ndGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHhwYXRoID0gcGFydHMuam9pbignJyk7XG4gICAgICAgIHJldHVybiB4cGF0aDtcbiAgICB9O1xuXG4gICAgbXkuZ2V0RWxlbWVudHNCeVNlbGVjdG9yID0gZnVuY3Rpb24gKGRvYywgY3NzKSB7XG4gICAgICAgIHZhciB4cGF0aCA9IG15LmNzc1RvWFBhdGgoY3NzKTtcbiAgICAgICAgcmV0dXJuIG15LmdldEVsZW1lbnRzQnlYUGF0aChkb2MsIHhwYXRoKTtcbiAgICB9O1xuXG4gICAgbXkuZ2V0RWxlbWVudHNCeVhQYXRoID0gZnVuY3Rpb24gKGRvYywgeHBhdGgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBteS5ldmFsdWF0ZVhQYXRoKGRvYywgeHBhdGgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChleCkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEV2YWx1YXRlcyBhbiBYUGF0aCBleHByZXNzaW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtEb2N1bWVudH0gZG9jXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHhwYXRoIFRoZSBYUGF0aCBleHByZXNzaW9uLlxuICAgICAqIEBwYXJhbSB7Tm9kZX0gY29udGV4dE5vZGUgVGhlIGNvbnRleHQgbm9kZS5cbiAgICAgKiBAcGFyYW0ge2ludH0gcmVzdWx0VHlwZVxuICAgICAqXG4gICAgICogQHJldHVybnMgeyp9IFRoZSByZXN1bHQgb2YgdGhlIFhQYXRoIGV4cHJlc3Npb24sIGRlcGVuZGluZyBvbiByZXN1bHRUeXBlIDo8YnI+IDx1bD5cbiAgICAgKiAgICAgICAgICA8bGk+aWYgaXQgaXMgWFBhdGhSZXN1bHQuTlVNQkVSX1RZUEUsIHRoZW4gaXQgcmV0dXJucyBhIE51bWJlcjwvbGk+XG4gICAgICogICAgICAgICAgPGxpPmlmIGl0IGlzIFhQYXRoUmVzdWx0LlNUUklOR19UWVBFLCB0aGVuIGl0IHJldHVybnMgYSBTdHJpbmc8L2xpPlxuICAgICAqICAgICAgICAgIDxsaT5pZiBpdCBpcyBYUGF0aFJlc3VsdC5CT09MRUFOX1RZUEUsIHRoZW4gaXQgcmV0dXJucyBhIGJvb2xlYW48L2xpPlxuICAgICAqICAgICAgICAgIDxsaT5pZiBpdCBpcyBYUGF0aFJlc3VsdC5VTk9SREVSRURfTk9ERV9JVEVSQVRPUl9UWVBFXG4gICAgICogICAgICAgICAgICAgIG9yIFhQYXRoUmVzdWx0Lk9SREVSRURfTk9ERV9TTkFQU0hPVF9UWVBFLCB0aGVuIGl0IHJldHVybnMgYW4gYXJyYXkgb2Ygbm9kZXM8L2xpPlxuICAgICAqICAgICAgICAgIDxsaT5pZiBpdCBpcyBYUGF0aFJlc3VsdC5PUkRFUkVEX05PREVfU05BUFNIT1RfVFlQRVxuICAgICAqICAgICAgICAgICAgICBvciBYUGF0aFJlc3VsdC5VTk9SREVSRURfTk9ERV9TTkFQU0hPVF9UWVBFLCB0aGVuIGl0IHJldHVybnMgYW4gYXJyYXkgb2Ygbm9kZXM8L2xpPlxuICAgICAqICAgICAgICAgIDxsaT5pZiBpdCBpcyBYUGF0aFJlc3VsdC5BTllfVU5PUkRFUkVEX05PREVfVFlQRVxuICAgICAqICAgICAgICAgICAgICBvciBYUGF0aFJlc3VsdC5GSVJTVF9PUkRFUkVEX05PREVfVFlQRSwgdGhlbiBpdCByZXR1cm5zIGEgc2luZ2xlIG5vZGU8L2xpPlxuICAgICAqICAgICAgICAgIDwvdWw+XG4gICAgICovXG4gICAgbXkuZXZhbHVhdGVYUGF0aCA9IGZ1bmN0aW9uIChkb2MsIHhwYXRoLCBjb250ZXh0Tm9kZSwgcmVzdWx0VHlwZSkge1xuICAgICAgICBpZiAoY29udGV4dE5vZGUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIGNvbnRleHROb2RlID0gZG9jO1xuXG4gICAgICAgIGlmIChyZXN1bHRUeXBlID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXN1bHRUeXBlID0gWFBhdGhSZXN1bHQuQU5ZX1RZUEU7XG5cbiAgICAgICAgdmFyIHJlc3VsdCA9IGRvYy5ldmFsdWF0ZSh4cGF0aCwgY29udGV4dE5vZGUsIG51bGwsIHJlc3VsdFR5cGUsIG51bGwpO1xuXG4gICAgICAgIHN3aXRjaCAocmVzdWx0LnJlc3VsdFR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgWFBhdGhSZXN1bHQuTlVNQkVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5udW1iZXJWYWx1ZTtcblxuICAgICAgICAgICAgY2FzZSBYUGF0aFJlc3VsdC5TVFJJTkdfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnN0cmluZ1ZhbHVlO1xuXG4gICAgICAgICAgICBjYXNlIFhQYXRoUmVzdWx0LkJPT0xFQU5fVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LmJvb2xlYW5WYWx1ZTtcblxuICAgICAgICAgICAgY2FzZSBYUGF0aFJlc3VsdC5VTk9SREVSRURfTk9ERV9JVEVSQVRPUl9UWVBFOlxuICAgICAgICAgICAgY2FzZSBYUGF0aFJlc3VsdC5PUkRFUkVEX05PREVfSVRFUkFUT1JfVFlQRTpcbiAgICAgICAgICAgICAgICB2YXIgbm9kZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpdGVtID0gcmVzdWx0Lml0ZXJhdGVOZXh0KCk7IGl0ZW07IGl0ZW0gPSByZXN1bHQuaXRlcmF0ZU5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICBub2Rlcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZXM7XG5cbiAgICAgICAgICAgIGNhc2UgWFBhdGhSZXN1bHQuVU5PUkRFUkVEX05PREVfU05BUFNIT1RfVFlQRTpcbiAgICAgICAgICAgIGNhc2UgWFBhdGhSZXN1bHQuT1JERVJFRF9OT0RFX1NOQVBTSE9UX1RZUEU6XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVzID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHQuc25hcHNob3RMZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBub2Rlcy5wdXNoKHJlc3VsdC5zbmFwc2hvdEl0ZW0oaSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZXM7XG5cbiAgICAgICAgICAgIGNhc2UgWFBhdGhSZXN1bHQuQU5ZX1VOT1JERVJFRF9OT0RFX1RZUEU6XG4gICAgICAgICAgICBjYXNlIFhQYXRoUmVzdWx0LkZJUlNUX09SREVSRURfTk9ERV9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQuc2luZ2xlTm9kZVZhbHVlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIG15LmdldFJ1bGVNYXRjaGluZ0VsZW1lbnRzID0gZnVuY3Rpb24gKHJ1bGUsIGRvYykge1xuICAgICAgICB2YXIgY3NzID0gcnVsZS5zZWxlY3RvclRleHQsXG4gICAgICAgICAgICB4cGF0aCA9IG15LmNzc1RvWFBhdGgoY3NzKTtcbiAgICAgICAgcmV0dXJuIG15LmdldEVsZW1lbnRzQnlYUGF0aChkb2MsIHhwYXRoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIG15O1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9saWIveHBhdGgveHBhdGguanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgdHJpbTogZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgcmV0dXJuIHRleHQucmVwbGFjZSgvXlxccyp8XFxzKiQvZywgJycpO1xuICAgIH1cbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbGliL3N0cmluZy9zdHJpbmcuanNcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==