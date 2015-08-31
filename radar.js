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

	(function () {
	    var dir = './detectors/',
	        app = {
	            init: function () {
	                console.log(this.version);
	            },
	            version: __webpack_require__(1)(dir + 'version.js'),
	            getRootElement: __webpack_require__(3)(dir + 'getRootElement.js'),
	            getViewportSize: __webpack_require__(5)(dir + 'getViewportSize.js'),
	            getDocumentTitle: __webpack_require__(7)(dir + 'getDocumentTitle.js'),
	            getUa: __webpack_require__(9)(dir + 'getUa.js')
	        };
	
	    window.radar = app;
	})();
	


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
		"./detectors/getDocumentTitle.js": 8
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./detectors/getUa.js": 10
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
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by banzalik on 8/31/15.
	 */
	module.exports = function () {
	    var Parser = __webpack_require__(11),
	        ua = new Parser();
	
	    return ua.getResult();
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * UAParser.js v0.7.9
	 * Lightweight JavaScript-based User-Agent string parser
	 * https://github.com/faisalman/ua-parser-js
	 *
	 * Copyright © 2012-2015 Faisal Salman <fyzlman@gmail.com>
	 * Dual licensed under GPLv2 & MIT
	 */
	(function(window,undefined){"use strict";var LIBVERSION="0.7.9",EMPTY="",UNKNOWN="?",FUNC_TYPE="function",UNDEF_TYPE="undefined",OBJ_TYPE="object",STR_TYPE="string",MAJOR="major",MODEL="model",NAME="name",TYPE="type",VENDOR="vendor",VERSION="version",ARCHITECTURE="architecture",CONSOLE="console",MOBILE="mobile",TABLET="tablet",SMARTTV="smarttv",WEARABLE="wearable",EMBEDDED="embedded";var util={extend:function(regexes,extensions){for(var i in extensions){if("browser cpu device engine os".indexOf(i)!==-1&&extensions[i].length%2===0){regexes[i]=extensions[i].concat(regexes[i])}}return regexes},has:function(str1,str2){if(typeof str1==="string"){return str2.toLowerCase().indexOf(str1.toLowerCase())!==-1}else{return false}},lowerize:function(str){return str.toLowerCase()},major:function(version){return typeof version===STR_TYPE?version.split(".")[0]:undefined}};var mapper={rgx:function(){var result,i=0,j,k,p,q,matches,match,args=arguments;while(i<args.length&&!matches){var regex=args[i],props=args[i+1];if(typeof result===UNDEF_TYPE){result={};for(p in props){q=props[p];if(typeof q===OBJ_TYPE){result[q[0]]=undefined}else{result[q]=undefined}}}j=k=0;while(j<regex.length&&!matches){matches=regex[j++].exec(this.getUA());if(!!matches){for(p=0;p<props.length;p++){match=matches[++k];q=props[p];if(typeof q===OBJ_TYPE&&q.length>0){if(q.length==2){if(typeof q[1]==FUNC_TYPE){result[q[0]]=q[1].call(this,match)}else{result[q[0]]=q[1]}}else if(q.length==3){if(typeof q[1]===FUNC_TYPE&&!(q[1].exec&&q[1].test)){result[q[0]]=match?q[1].call(this,match,q[2]):undefined}else{result[q[0]]=match?match.replace(q[1],q[2]):undefined}}else if(q.length==4){result[q[0]]=match?q[3].call(this,match.replace(q[1],q[2])):undefined}}else{result[q]=match?match:undefined}}}}i+=2}return result},str:function(str,map){for(var i in map){if(typeof map[i]===OBJ_TYPE&&map[i].length>0){for(var j=0;j<map[i].length;j++){if(util.has(map[i][j],str)){return i===UNKNOWN?undefined:i}}}else if(util.has(map[i],str)){return i===UNKNOWN?undefined:i}}return str}};var maps={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}};var regexes={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[NAME,VERSION],[/\s(opr)\/([\w\.]+)/i],[[NAME,"Opera"],VERSION],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium)\/([\w\.-]+)/i],[NAME,VERSION],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[NAME,"IE"],VERSION],[/(edge)\/((\d+)?[\w\.]+)/i],[NAME,VERSION],[/(yabrowser)\/([\w\.]+)/i],[[NAME,"Yandex"],VERSION],[/(comodo_dragon)\/([\w\.]+)/i],[[NAME,/_/g," "],VERSION],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,/(uc\s?browser|qqbrowser)[\/\s]?([\w\.]+)/i],[NAME,VERSION],[/(dolfin)\/([\w\.]+)/i],[[NAME,"Dolphin"],VERSION],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[NAME,"Chrome"],VERSION],[/XiaoMi\/MiuiBrowser\/([\w\.]+)/i],[VERSION,[NAME,"MIUI Browser"]],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i],[VERSION,[NAME,"Android Browser"]],[/FBAV\/([\w\.]+);/i],[VERSION,[NAME,"Facebook"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[VERSION,[NAME,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[VERSION,NAME],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[NAME,[VERSION,mapper.str,maps.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[NAME,VERSION],[/(navigator|netscape)\/([\w\.-]+)/i],[[NAME,"Netscape"],VERSION],[/fxios\/([\w\.-]+)/i],[VERSION,[NAME,"Firefox"]],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[NAME,VERSION]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[ARCHITECTURE,"amd64"]],[/(ia32(?=;))/i],[[ARCHITECTURE,util.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[ARCHITECTURE,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[ARCHITECTURE,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[ARCHITECTURE,/ower/,"",util.lowerize]],[/(sun4\w)[;\)]/i],[[ARCHITECTURE,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[ARCHITECTURE,util.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[MODEL,VENDOR,[TYPE,TABLET]],[/applecoremedia\/[\w\.]+ \((ipad)/],[MODEL,[VENDOR,"Apple"],[TYPE,TABLET]],[/(apple\s{0,1}tv)/i],[[MODEL,"Apple TV"],[VENDOR,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[VENDOR,MODEL,[TYPE,TABLET]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],[MODEL,[VENDOR,"Amazon"],[TYPE,TABLET]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[[MODEL,mapper.str,maps.device.amazon.model],[VENDOR,"Amazon"],[TYPE,MOBILE]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[MODEL,VENDOR,[TYPE,MOBILE]],[/\((ip[honed|\s\w*]+);/i],[MODEL,[VENDOR,"Apple"],[TYPE,MOBILE]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/\(bb10;\s(\w+)/i],[MODEL,[VENDOR,"BlackBerry"],[TYPE,MOBILE]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i],[MODEL,[VENDOR,"Asus"],[TYPE,TABLET]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[VENDOR,"Sony"],[MODEL,"Xperia Tablet"],[TYPE,TABLET]],[/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],[[VENDOR,"Sony"],[MODEL,"Xperia Phone"],[TYPE,MOBILE]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[VENDOR,MODEL,[TYPE,CONSOLE]],[/android.+;\s(shield)\sbuild/i],[MODEL,[VENDOR,"Nvidia"],[TYPE,CONSOLE]],[/(playstation\s[3portablevi]+)/i],[MODEL,[VENDOR,"Sony"],[TYPE,CONSOLE]],[/(sprint\s(\w+))/i],[[VENDOR,mapper.str,maps.device.sprint.vendor],[MODEL,mapper.str,maps.device.sprint.model],[TYPE,MOBILE]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[VENDOR,MODEL,[TYPE,TABLET]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[VENDOR,[MODEL,/_/g," "],[TYPE,MOBILE]],[/(nexus\s9)/i],[MODEL,[VENDOR,"HTC"],[TYPE,TABLET]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[MODEL,[VENDOR,"Microsoft"],[TYPE,CONSOLE]],[/(kin\.[onetw]{3})/i],[[MODEL,/\./g," "],[VENDOR,"Microsoft"],[TYPE,MOBILE]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i],[MODEL,[VENDOR,"Motorola"],[TYPE,MOBILE]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[MODEL,[VENDOR,"Motorola"],[TYPE,TABLET]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[VENDOR,"Samsung"],MODEL,[TYPE,TABLET]],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[VENDOR,"Samsung"],MODEL,[TYPE,MOBILE]],[/(samsung);smarttv/i],[VENDOR,MODEL,[TYPE,SMARTTV]],[/\(dtv[\);].+(aquos)/i],[MODEL,[VENDOR,"Sharp"],[TYPE,SMARTTV]],[/sie-(\w+)*/i],[MODEL,[VENDOR,"Siemens"],[TYPE,MOBILE]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[VENDOR,"Nokia"],MODEL,[TYPE,MOBILE]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[MODEL,[VENDOR,"Acer"],[TYPE,TABLET]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[VENDOR,"LG"],MODEL,[TYPE,TABLET]],[/(lg) netcast\.tv/i],[VENDOR,MODEL,[TYPE,SMARTTV]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i],[MODEL,[VENDOR,"LG"],[TYPE,MOBILE]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[MODEL,[VENDOR,"Lenovo"],[TYPE,TABLET]],[/linux;.+((jolla));/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/((pebble))app\/[\d\.]+\s/i],[VENDOR,MODEL,[TYPE,WEARABLE]],[/android.+;\s(glass)\s\d/i],[MODEL,[VENDOR,"Google"],[TYPE,WEARABLE]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i],[[MODEL,/_/g," "],[VENDOR,"Xiaomi"],[TYPE,MOBILE]],[/(mobile|tablet);.+rv\:.+gecko\//i],[[TYPE,util.lowerize],VENDOR,MODEL]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[VERSION,[NAME,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[NAME,VERSION],[/rv\:([\w\.]+).*(gecko)/i],[VERSION,NAME]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[NAME,VERSION],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[NAME,[VERSION,mapper.str,maps.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[NAME,"Windows"],[VERSION,mapper.str,maps.os.windows.version]],[/\((bb)(10);/i],[[NAME,"BlackBerry"],VERSION],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[NAME,VERSION],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[NAME,"Symbian"],VERSION],[/\((series40);/i],[NAME],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[NAME,"Firefox OS"],VERSION],[/(nintendo|playstation)\s([wids3portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[NAME,VERSION],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[NAME,"Chromium OS"],VERSION],[/(sunos)\s?([\w\.]+\d)*/i],[[NAME,"Solaris"],VERSION],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[NAME,VERSION],[/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],[[NAME,"iOS"],[VERSION,/_/g,"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[NAME,"Mac OS"],[VERSION,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(haiku)\s(\w+)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[NAME,VERSION]]};var UAParser=function(uastring,extensions){if(!(this instanceof UAParser)){return new UAParser(uastring,extensions).getResult()}var ua=uastring||(window&&window.navigator&&window.navigator.userAgent?window.navigator.userAgent:EMPTY);var rgxmap=extensions?util.extend(regexes,extensions):regexes;this.getBrowser=function(){var browser=mapper.rgx.apply(this,rgxmap.browser);browser.major=util.major(browser.version);return browser};this.getCPU=function(){return mapper.rgx.apply(this,rgxmap.cpu)};this.getDevice=function(){return mapper.rgx.apply(this,rgxmap.device)};this.getEngine=function(){return mapper.rgx.apply(this,rgxmap.engine)};this.getOS=function(){return mapper.rgx.apply(this,rgxmap.os)};this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}};this.getUA=function(){return ua};this.setUA=function(uastring){ua=uastring;return this};this.setUA(ua);return this};UAParser.VERSION=LIBVERSION;UAParser.BROWSER={NAME:NAME,MAJOR:MAJOR,VERSION:VERSION};UAParser.CPU={ARCHITECTURE:ARCHITECTURE};UAParser.DEVICE={MODEL:MODEL,VENDOR:VENDOR,TYPE:TYPE,CONSOLE:CONSOLE,MOBILE:MOBILE,SMARTTV:SMARTTV,TABLET:TABLET,WEARABLE:WEARABLE,EMBEDDED:EMBEDDED};UAParser.ENGINE={NAME:NAME,VERSION:VERSION};UAParser.OS={NAME:NAME,VERSION:VERSION};if(typeof exports!==UNDEF_TYPE){if(typeof module!==UNDEF_TYPE&&module.exports){exports=module.exports=UAParser}exports.UAParser=UAParser}else{if("function"===FUNC_TYPE&&__webpack_require__(12)){!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return UAParser}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}else{window.UAParser=UAParser}}var $=window.jQuery||window.Zepto;if(typeof $!==UNDEF_TYPE){var parser=new UAParser;$.ua=parser.getResult();$.ua.get=function(){return parser.getUA()};$.ua.set=function(uastring){parser.setUA(uastring);var result=parser.getResult();for(var prop in result){$.ua[prop]=result[prop]}}}})(typeof window==="object"?window:this);

/***/ },
/* 12 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;
	
	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODE0MTNmNTAyYWRhYWE5YTA3YmUiLCJ3ZWJwYWNrOi8vLy4vbGliL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9saWIgXi4qdmVyc2lvblxcLmpzJCIsIndlYnBhY2s6Ly8vLi9saWIvZGV0ZWN0b3JzL3ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbGliIF4uKmdldFJvb3RFbGVtZW50XFwuanMkIiwid2VicGFjazovLy8uL2xpYi9kZXRlY3RvcnMvZ2V0Um9vdEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbGliIF4uKmdldFZpZXdwb3J0U2l6ZVxcLmpzJCIsIndlYnBhY2s6Ly8vLi9saWIvZGV0ZWN0b3JzL2dldFZpZXdwb3J0U2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIgXi4qZ2V0RG9jdW1lbnRUaXRsZVxcLmpzJCIsIndlYnBhY2s6Ly8vLi9saWIvZGV0ZWN0b3JzL2dldERvY3VtZW50VGl0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliIF4uKmdldFVhXFwuanMkIiwid2VicGFjazovLy8uL2xpYi9kZXRlY3RvcnMvZ2V0VWEuanMiLCJ3ZWJwYWNrOi8vLy4vfi91YS1wYXJzZXItanMvZGlzdC91YS1wYXJzZXIubWluLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUM7Ozs7Ozs7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MEIsNkNBQTZDLDBCQUEwQiw2Q0FBNkMsc0JBQXNCLHlDQUF5QywwQkFBMEIsT0FBTyw4SEFBOEgsc0JBQXNCLFdBQVcsOEJBQThCLFlBQVksYUFBYSxlQUFlLGFBQWEsNEJBQTRCLGtCQUFrQix1Q0FBdUMsY0FBYywyQkFBMkIsaUJBQWlCLHFJQUFxSSxpQkFBaUIsMkJBQTJCLGFBQWEsMkJBQTJCLGdDQUFnQywrQ0FBK0MsZ0NBQWdDLDBCQUEwQixLQUFLLG9EQUEwQyw2Q0FBa0IsZ0JBQWdCLHVKQUFFLEtBQUssMEJBQTBCLGtDQUFrQywwQkFBMEIsd0JBQXdCLHdCQUF3QixvQkFBb0IsdUJBQXVCLDRCQUE0Qix1QkFBdUIsOEJBQThCLHdCQUF3QiwyQkFBMkIsd0M7Ozs7OztBQ1J2NFkiLCJmaWxlIjoicmFkYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDgxNDEzZjUwMmFkYWFhOWEwN2JlXG4gKiovIiwiKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZGlyID0gJy4vZGV0ZWN0b3JzLycsXG4gICAgICAgIGFwcCA9IHtcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnZlcnNpb24pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZlcnNpb246IHJlcXVpcmUoZGlyICsgJ3ZlcnNpb24uanMnKSxcbiAgICAgICAgICAgIGdldFJvb3RFbGVtZW50OiByZXF1aXJlKGRpciArICdnZXRSb290RWxlbWVudC5qcycpLFxuICAgICAgICAgICAgZ2V0Vmlld3BvcnRTaXplOiByZXF1aXJlKGRpciArICdnZXRWaWV3cG9ydFNpemUuanMnKSxcbiAgICAgICAgICAgIGdldERvY3VtZW50VGl0bGU6IHJlcXVpcmUoZGlyICsgJ2dldERvY3VtZW50VGl0bGUuanMnKSxcbiAgICAgICAgICAgIGdldFVhOiByZXF1aXJlKGRpciArICdnZXRVYS5qcycpXG4gICAgICAgIH07XG5cbiAgICB3aW5kb3cucmFkYXIgPSBhcHA7XG59KSgpO1xuXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbGliL2FwcC5qc1xuICoqIG1vZHVsZSBpZCA9IDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBtYXAgPSB7XG5cdFwiLi9kZXRlY3RvcnMvdmVyc2lvbi5qc1wiOiAyXG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHJldHVybiBtYXBbcmVxXSB8fCAoZnVuY3Rpb24oKSB7IHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpIH0oKSk7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDE7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbGliIF4uKnZlcnNpb25cXC5qcyRcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9ICcwLjAuMSc7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbGliL2RldGVjdG9ycy92ZXJzaW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIG1hcCA9IHtcblx0XCIuL2RldGVjdG9ycy9nZXRSb290RWxlbWVudC5qc1wiOiA0XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHJldHVybiBtYXBbcmVxXSB8fCAoZnVuY3Rpb24oKSB7IHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpIH0oKSk7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbGliIF4uKmdldFJvb3RFbGVtZW50XFwuanMkXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypnbG9iYWwgZG9jdW1lbnQgKi9cbi8qKlxuICogQ3JlYXRlZCBieSBiYW56YWxpayBvbiA4LzMxLzE1LlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZG9jRWxlbSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICByZXR1cm4gJ0NTUzFDb21wYXQnID09PSBkb2N1bWVudC5jb21wYXRNb2RlID8gZG9jRWxlbSA6IGRvY3VtZW50LmJvZHkgfHwgZG9jRWxlbTtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbGliL2RldGVjdG9ycy9nZXRSb290RWxlbWVudC5qc1xuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBtYXAgPSB7XG5cdFwiLi9kZXRlY3RvcnMvZ2V0Vmlld3BvcnRTaXplLmpzXCI6IDZcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0cmV0dXJuIG1hcFtyZXFdIHx8IChmdW5jdGlvbigpIHsgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIikgfSgpKTtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gNTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9saWIgXi4qZ2V0Vmlld3BvcnRTaXplXFwuanMkXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGJhbnphbGlrIG9uIDgvMzEvMTUuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByb290ID0gcmVxdWlyZSgnLi9nZXRSb290RWxlbWVudC5qcycpKCk7XG4gICAgcmV0dXJuIFtyb290LmNsaWVudFdpZHRoLCByb290LmNsaWVudEhlaWdodF07XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2xpYi9kZXRlY3RvcnMvZ2V0Vmlld3BvcnRTaXplLmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIG1hcCA9IHtcblx0XCIuL2RldGVjdG9ycy9nZXREb2N1bWVudFRpdGxlLmpzXCI6IDhcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0cmV0dXJuIG1hcFtyZXFdIHx8IChmdW5jdGlvbigpIHsgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIikgfSgpKTtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gNztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9saWIgXi4qZ2V0RG9jdW1lbnRUaXRsZVxcLmpzJFxuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qZ2xvYmFsIGRvY3VtZW50ICovXG4vKipcbiAqIENyZWF0ZWQgYnkgYmFuemFsaWsgb24gOS8xLzE1LlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGl0bGUgPSBkb2N1bWVudC50aXRsZTtcbiAgICBpZiAodHlwZW9mIHRpdGxlICE9PSAnc3RyaW5nJyApIHtcbiAgICAgICAgdGl0bGUgPSAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RpdGxlJyk7XG4gICAgICAgIGlmICh0aXRsZSkge1xuICAgICAgICAgICAgdGl0bGUgPSAgdGl0bGVbMF0uaW5uZXJIVE1MO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGl0bGUgPSAnJztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGl0bGU7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2xpYi9kZXRlY3RvcnMvZ2V0RG9jdW1lbnRUaXRsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBtYXAgPSB7XG5cdFwiLi9kZXRlY3RvcnMvZ2V0VWEuanNcIjogMTBcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0cmV0dXJuIG1hcFtyZXFdIHx8IChmdW5jdGlvbigpIHsgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIikgfSgpKTtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gOTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9saWIgXi4qZ2V0VWFcXC5qcyRcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENyZWF0ZWQgYnkgYmFuemFsaWsgb24gOC8zMS8xNS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIFBhcnNlciA9IHJlcXVpcmUoJy4uLy4uL25vZGVfbW9kdWxlcy91YS1wYXJzZXItanMvZGlzdC91YS1wYXJzZXIubWluLmpzJyksXG4gICAgICAgIHVhID0gbmV3IFBhcnNlcigpO1xuXG4gICAgcmV0dXJuIHVhLmdldFJlc3VsdCgpO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9saWIvZGV0ZWN0b3JzL2dldFVhLmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogVUFQYXJzZXIuanMgdjAuNy45XG4gKiBMaWdodHdlaWdodCBKYXZhU2NyaXB0LWJhc2VkIFVzZXItQWdlbnQgc3RyaW5nIHBhcnNlclxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhaXNhbG1hbi91YS1wYXJzZXItanNcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxMi0yMDE1IEZhaXNhbCBTYWxtYW4gPGZ5emxtYW5AZ21haWwuY29tPlxuICogRHVhbCBsaWNlbnNlZCB1bmRlciBHUEx2MiAmIE1JVFxuICovXG4oZnVuY3Rpb24od2luZG93LHVuZGVmaW5lZCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIExJQlZFUlNJT049XCIwLjcuOVwiLEVNUFRZPVwiXCIsVU5LTk9XTj1cIj9cIixGVU5DX1RZUEU9XCJmdW5jdGlvblwiLFVOREVGX1RZUEU9XCJ1bmRlZmluZWRcIixPQkpfVFlQRT1cIm9iamVjdFwiLFNUUl9UWVBFPVwic3RyaW5nXCIsTUFKT1I9XCJtYWpvclwiLE1PREVMPVwibW9kZWxcIixOQU1FPVwibmFtZVwiLFRZUEU9XCJ0eXBlXCIsVkVORE9SPVwidmVuZG9yXCIsVkVSU0lPTj1cInZlcnNpb25cIixBUkNISVRFQ1RVUkU9XCJhcmNoaXRlY3R1cmVcIixDT05TT0xFPVwiY29uc29sZVwiLE1PQklMRT1cIm1vYmlsZVwiLFRBQkxFVD1cInRhYmxldFwiLFNNQVJUVFY9XCJzbWFydHR2XCIsV0VBUkFCTEU9XCJ3ZWFyYWJsZVwiLEVNQkVEREVEPVwiZW1iZWRkZWRcIjt2YXIgdXRpbD17ZXh0ZW5kOmZ1bmN0aW9uKHJlZ2V4ZXMsZXh0ZW5zaW9ucyl7Zm9yKHZhciBpIGluIGV4dGVuc2lvbnMpe2lmKFwiYnJvd3NlciBjcHUgZGV2aWNlIGVuZ2luZSBvc1wiLmluZGV4T2YoaSkhPT0tMSYmZXh0ZW5zaW9uc1tpXS5sZW5ndGglMj09PTApe3JlZ2V4ZXNbaV09ZXh0ZW5zaW9uc1tpXS5jb25jYXQocmVnZXhlc1tpXSl9fXJldHVybiByZWdleGVzfSxoYXM6ZnVuY3Rpb24oc3RyMSxzdHIyKXtpZih0eXBlb2Ygc3RyMT09PVwic3RyaW5nXCIpe3JldHVybiBzdHIyLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzdHIxLnRvTG93ZXJDYXNlKCkpIT09LTF9ZWxzZXtyZXR1cm4gZmFsc2V9fSxsb3dlcml6ZTpmdW5jdGlvbihzdHIpe3JldHVybiBzdHIudG9Mb3dlckNhc2UoKX0sbWFqb3I6ZnVuY3Rpb24odmVyc2lvbil7cmV0dXJuIHR5cGVvZiB2ZXJzaW9uPT09U1RSX1RZUEU/dmVyc2lvbi5zcGxpdChcIi5cIilbMF06dW5kZWZpbmVkfX07dmFyIG1hcHBlcj17cmd4OmZ1bmN0aW9uKCl7dmFyIHJlc3VsdCxpPTAsaixrLHAscSxtYXRjaGVzLG1hdGNoLGFyZ3M9YXJndW1lbnRzO3doaWxlKGk8YXJncy5sZW5ndGgmJiFtYXRjaGVzKXt2YXIgcmVnZXg9YXJnc1tpXSxwcm9wcz1hcmdzW2krMV07aWYodHlwZW9mIHJlc3VsdD09PVVOREVGX1RZUEUpe3Jlc3VsdD17fTtmb3IocCBpbiBwcm9wcyl7cT1wcm9wc1twXTtpZih0eXBlb2YgcT09PU9CSl9UWVBFKXtyZXN1bHRbcVswXV09dW5kZWZpbmVkfWVsc2V7cmVzdWx0W3FdPXVuZGVmaW5lZH19fWo9az0wO3doaWxlKGo8cmVnZXgubGVuZ3RoJiYhbWF0Y2hlcyl7bWF0Y2hlcz1yZWdleFtqKytdLmV4ZWModGhpcy5nZXRVQSgpKTtpZighIW1hdGNoZXMpe2ZvcihwPTA7cDxwcm9wcy5sZW5ndGg7cCsrKXttYXRjaD1tYXRjaGVzWysra107cT1wcm9wc1twXTtpZih0eXBlb2YgcT09PU9CSl9UWVBFJiZxLmxlbmd0aD4wKXtpZihxLmxlbmd0aD09Mil7aWYodHlwZW9mIHFbMV09PUZVTkNfVFlQRSl7cmVzdWx0W3FbMF1dPXFbMV0uY2FsbCh0aGlzLG1hdGNoKX1lbHNle3Jlc3VsdFtxWzBdXT1xWzFdfX1lbHNlIGlmKHEubGVuZ3RoPT0zKXtpZih0eXBlb2YgcVsxXT09PUZVTkNfVFlQRSYmIShxWzFdLmV4ZWMmJnFbMV0udGVzdCkpe3Jlc3VsdFtxWzBdXT1tYXRjaD9xWzFdLmNhbGwodGhpcyxtYXRjaCxxWzJdKTp1bmRlZmluZWR9ZWxzZXtyZXN1bHRbcVswXV09bWF0Y2g/bWF0Y2gucmVwbGFjZShxWzFdLHFbMl0pOnVuZGVmaW5lZH19ZWxzZSBpZihxLmxlbmd0aD09NCl7cmVzdWx0W3FbMF1dPW1hdGNoP3FbM10uY2FsbCh0aGlzLG1hdGNoLnJlcGxhY2UocVsxXSxxWzJdKSk6dW5kZWZpbmVkfX1lbHNle3Jlc3VsdFtxXT1tYXRjaD9tYXRjaDp1bmRlZmluZWR9fX19aSs9Mn1yZXR1cm4gcmVzdWx0fSxzdHI6ZnVuY3Rpb24oc3RyLG1hcCl7Zm9yKHZhciBpIGluIG1hcCl7aWYodHlwZW9mIG1hcFtpXT09PU9CSl9UWVBFJiZtYXBbaV0ubGVuZ3RoPjApe2Zvcih2YXIgaj0wO2o8bWFwW2ldLmxlbmd0aDtqKyspe2lmKHV0aWwuaGFzKG1hcFtpXVtqXSxzdHIpKXtyZXR1cm4gaT09PVVOS05PV04/dW5kZWZpbmVkOml9fX1lbHNlIGlmKHV0aWwuaGFzKG1hcFtpXSxzdHIpKXtyZXR1cm4gaT09PVVOS05PV04/dW5kZWZpbmVkOml9fXJldHVybiBzdHJ9fTt2YXIgbWFwcz17YnJvd3Nlcjp7b2xkc2FmYXJpOnt2ZXJzaW9uOntcIjEuMFwiOlwiLzhcIiwxLjI6XCIvMVwiLDEuMzpcIi8zXCIsXCIyLjBcIjpcIi80MTJcIixcIjIuMC4yXCI6XCIvNDE2XCIsXCIyLjAuM1wiOlwiLzQxN1wiLFwiMi4wLjRcIjpcIi80MTlcIixcIj9cIjpcIi9cIn19fSxkZXZpY2U6e2FtYXpvbjp7bW9kZWw6e1wiRmlyZSBQaG9uZVwiOltcIlNEXCIsXCJLRlwiXX19LHNwcmludDp7bW9kZWw6e1wiRXZvIFNoaWZ0IDRHXCI6XCI3MzczS1RcIn0sdmVuZG9yOntIVEM6XCJBUEFcIixTcHJpbnQ6XCJTcHJpbnRcIn19fSxvczp7d2luZG93czp7dmVyc2lvbjp7TUU6XCI0LjkwXCIsXCJOVCAzLjExXCI6XCJOVDMuNTFcIixcIk5UIDQuMFwiOlwiTlQ0LjBcIiwyMDAwOlwiTlQgNS4wXCIsWFA6W1wiTlQgNS4xXCIsXCJOVCA1LjJcIl0sVmlzdGE6XCJOVCA2LjBcIiw3OlwiTlQgNi4xXCIsODpcIk5UIDYuMlwiLDguMTpcIk5UIDYuM1wiLDEwOltcIk5UIDYuNFwiLFwiTlQgMTAuMFwiXSxSVDpcIkFSTVwifX19fTt2YXIgcmVnZXhlcz17YnJvd3NlcjpbWy8ob3BlcmFcXHNtaW5pKVxcLyhbXFx3XFwuLV0rKS9pLC8ob3BlcmFcXHNbbW9iaWxldGFiXSspLit2ZXJzaW9uXFwvKFtcXHdcXC4tXSspL2ksLyhvcGVyYSkuK3ZlcnNpb25cXC8oW1xcd1xcLl0rKS9pLC8ob3BlcmEpW1xcL1xcc10rKFtcXHdcXC5dKykvaV0sW05BTUUsVkVSU0lPTl0sWy9cXHMob3ByKVxcLyhbXFx3XFwuXSspL2ldLFtbTkFNRSxcIk9wZXJhXCJdLFZFUlNJT05dLFsvKGtpbmRsZSlcXC8oW1xcd1xcLl0rKS9pLC8obHVuYXNjYXBlfG1heHRob258bmV0ZnJvbnR8amFzbWluZXxibGF6ZXIpW1xcL1xcc10/KFtcXHdcXC5dKykqL2ksLyhhdmFudFxcc3xpZW1vYmlsZXxzbGltfGJhaWR1KSg/OmJyb3dzZXIpP1tcXC9cXHNdPyhbXFx3XFwuXSopL2ksLyg/Om1zfFxcKCkoaWUpXFxzKFtcXHdcXC5dKykvaSwvKHJla29ucSlcXC8oW1xcd1xcLl0rKSovaSwvKGNocm9taXVtfGZsb2NrfHJvY2ttZWx0fG1pZG9yaXxlcGlwaGFueXxzaWxrfHNreWZpcmV8b3ZpYnJvd3Nlcnxib2x0fGlyb258dml2YWxkaXxpcmlkaXVtKVxcLyhbXFx3XFwuLV0rKS9pXSxbTkFNRSxWRVJTSU9OXSxbLyh0cmlkZW50KS4rcnZbOlxcc10oW1xcd1xcLl0rKS4rbGlrZVxcc2dlY2tvL2ldLFtbTkFNRSxcIklFXCJdLFZFUlNJT05dLFsvKGVkZ2UpXFwvKChcXGQrKT9bXFx3XFwuXSspL2ldLFtOQU1FLFZFUlNJT05dLFsvKHlhYnJvd3NlcilcXC8oW1xcd1xcLl0rKS9pXSxbW05BTUUsXCJZYW5kZXhcIl0sVkVSU0lPTl0sWy8oY29tb2RvX2RyYWdvbilcXC8oW1xcd1xcLl0rKS9pXSxbW05BTUUsL18vZyxcIiBcIl0sVkVSU0lPTl0sWy8oY2hyb21lfG9tbml3ZWJ8YXJvcmF8W3RpemVub2thXXs1fVxccz9icm93c2VyKVxcL3Y/KFtcXHdcXC5dKykvaSwvKHVjXFxzP2Jyb3dzZXJ8cXFicm93c2VyKVtcXC9cXHNdPyhbXFx3XFwuXSspL2ldLFtOQU1FLFZFUlNJT05dLFsvKGRvbGZpbilcXC8oW1xcd1xcLl0rKS9pXSxbW05BTUUsXCJEb2xwaGluXCJdLFZFUlNJT05dLFsvKCg/OmFuZHJvaWQuKyljcm1vfGNyaW9zKVxcLyhbXFx3XFwuXSspL2ldLFtbTkFNRSxcIkNocm9tZVwiXSxWRVJTSU9OXSxbL1hpYW9NaVxcL01pdWlCcm93c2VyXFwvKFtcXHdcXC5dKykvaV0sW1ZFUlNJT04sW05BTUUsXCJNSVVJIEJyb3dzZXJcIl1dLFsvYW5kcm9pZC4rdmVyc2lvblxcLyhbXFx3XFwuXSspXFxzKyg/Om1vYmlsZVxccz9zYWZhcml8c2FmYXJpKS9pXSxbVkVSU0lPTixbTkFNRSxcIkFuZHJvaWQgQnJvd3NlclwiXV0sWy9GQkFWXFwvKFtcXHdcXC5dKyk7L2ldLFtWRVJTSU9OLFtOQU1FLFwiRmFjZWJvb2tcIl1dLFsvdmVyc2lvblxcLyhbXFx3XFwuXSspLis/bW9iaWxlXFwvXFx3K1xccyhzYWZhcmkpL2ldLFtWRVJTSU9OLFtOQU1FLFwiTW9iaWxlIFNhZmFyaVwiXV0sWy92ZXJzaW9uXFwvKFtcXHdcXC5dKykuKz8obW9iaWxlXFxzP3NhZmFyaXxzYWZhcmkpL2ldLFtWRVJTSU9OLE5BTUVdLFsvd2Via2l0Lis/KG1vYmlsZVxccz9zYWZhcml8c2FmYXJpKShcXC9bXFx3XFwuXSspL2ldLFtOQU1FLFtWRVJTSU9OLG1hcHBlci5zdHIsbWFwcy5icm93c2VyLm9sZHNhZmFyaS52ZXJzaW9uXV0sWy8oa29ucXVlcm9yKVxcLyhbXFx3XFwuXSspL2ksLyh3ZWJraXR8a2h0bWwpXFwvKFtcXHdcXC5dKykvaV0sW05BTUUsVkVSU0lPTl0sWy8obmF2aWdhdG9yfG5ldHNjYXBlKVxcLyhbXFx3XFwuLV0rKS9pXSxbW05BTUUsXCJOZXRzY2FwZVwiXSxWRVJTSU9OXSxbL2Z4aW9zXFwvKFtcXHdcXC4tXSspL2ldLFtWRVJTSU9OLFtOQU1FLFwiRmlyZWZveFwiXV0sWy8oc3dpZnRmb3gpL2ksLyhpY2VkcmFnb258aWNld2Vhc2VsfGNhbWlub3xjaGltZXJhfGZlbm5lY3xtYWVtb1xcc2Jyb3dzZXJ8bWluaW1vfGNvbmtlcm9yKVtcXC9cXHNdPyhbXFx3XFwuXFwrXSspL2ksLyhmaXJlZm94fHNlYW1vbmtleXxrLW1lbGVvbnxpY2VjYXR8aWNlYXBlfGZpcmViaXJkfHBob2VuaXgpXFwvKFtcXHdcXC4tXSspL2ksLyhtb3ppbGxhKVxcLyhbXFx3XFwuXSspLitydlxcOi4rZ2Vja29cXC9cXGQrL2ksLyhwb2xhcmlzfGx5bnh8ZGlsbG98aWNhYnxkb3Jpc3xhbWF5YXx3M218bmV0c3VyZilbXFwvXFxzXT8oW1xcd1xcLl0rKS9pLC8obGlua3MpXFxzXFwoKFtcXHdcXC5dKykvaSwvKGdvYnJvd3NlcilcXC8/KFtcXHdcXC5dKykqL2ksLyhpY2VcXHM/YnJvd3NlcilcXC92PyhbXFx3XFwuX10rKS9pLC8obW9zYWljKVtcXC9cXHNdKFtcXHdcXC5dKykvaV0sW05BTUUsVkVSU0lPTl1dLGNwdTpbWy8oPzooYW1kfHgoPzooPzo4Nnw2NClbXy1dKT98d293fHdpbik2NClbO1xcKV0vaV0sW1tBUkNISVRFQ1RVUkUsXCJhbWQ2NFwiXV0sWy8oaWEzMig/PTspKS9pXSxbW0FSQ0hJVEVDVFVSRSx1dGlsLmxvd2VyaXplXV0sWy8oKD86aVszNDZdfHgpODYpWztcXCldL2ldLFtbQVJDSElURUNUVVJFLFwiaWEzMlwiXV0sWy93aW5kb3dzXFxzKGNlfG1vYmlsZSk7XFxzcHBjOy9pXSxbW0FSQ0hJVEVDVFVSRSxcImFybVwiXV0sWy8oKD86cHBjfHBvd2VycGMpKD86NjQpPykoPzpcXHNtYWN8O3xcXCkpL2ldLFtbQVJDSElURUNUVVJFLC9vd2VyLyxcIlwiLHV0aWwubG93ZXJpemVdXSxbLyhzdW40XFx3KVs7XFwpXS9pXSxbW0FSQ0hJVEVDVFVSRSxcInNwYXJjXCJdXSxbLygoPzphdnIzMnxpYTY0KD89OykpfDY4ayg/PVxcKSl8YXJtKD86NjR8KD89dlxcZCs7KSl8KD89YXRtZWxcXHMpYXZyfCg/OmlyaXh8bWlwc3xzcGFyYykoPzo2NCk/KD89Oyl8cGEtcmlzYykvaV0sW1tBUkNISVRFQ1RVUkUsdXRpbC5sb3dlcml6ZV1dXSxkZXZpY2U6W1svXFwoKGlwYWR8cGxheWJvb2spO1tcXHdcXHNcXCk7LV0rKHJpbXxhcHBsZSkvaV0sW01PREVMLFZFTkRPUixbVFlQRSxUQUJMRVRdXSxbL2FwcGxlY29yZW1lZGlhXFwvW1xcd1xcLl0rIFxcKChpcGFkKS9dLFtNT0RFTCxbVkVORE9SLFwiQXBwbGVcIl0sW1RZUEUsVEFCTEVUXV0sWy8oYXBwbGVcXHN7MCwxfXR2KS9pXSxbW01PREVMLFwiQXBwbGUgVFZcIl0sW1ZFTkRPUixcIkFwcGxlXCJdXSxbLyhhcmNob3MpXFxzKGdhbWVwYWQyPykvaSwvKGhwKS4rKHRvdWNocGFkKS9pLC8oa2luZGxlKVxcLyhbXFx3XFwuXSspL2ksL1xccyhub29rKVtcXHdcXHNdK2J1aWxkXFwvKFxcdyspL2ksLyhkZWxsKVxccyhzdHJlYVtrcHJcXHNcXGRdKltcXGRrb10pL2ldLFtWRU5ET1IsTU9ERUwsW1RZUEUsVEFCTEVUXV0sWy8oa2ZbQS16XSspXFxzYnVpbGRcXC9bXFx3XFwuXSsuKnNpbGtcXC8vaV0sW01PREVMLFtWRU5ET1IsXCJBbWF6b25cIl0sW1RZUEUsVEFCTEVUXV0sWy8oc2R8a2YpWzAzNDloaWpvcnN0dXddK1xcc2J1aWxkXFwvW1xcd1xcLl0rLipzaWxrXFwvL2ldLFtbTU9ERUwsbWFwcGVyLnN0cixtYXBzLmRldmljZS5hbWF6b24ubW9kZWxdLFtWRU5ET1IsXCJBbWF6b25cIl0sW1RZUEUsTU9CSUxFXV0sWy9cXCgoaXBbaG9uZWR8XFxzXFx3Kl0rKTsuKyhhcHBsZSkvaV0sW01PREVMLFZFTkRPUixbVFlQRSxNT0JJTEVdXSxbL1xcKChpcFtob25lZHxcXHNcXHcqXSspOy9pXSxbTU9ERUwsW1ZFTkRPUixcIkFwcGxlXCJdLFtUWVBFLE1PQklMRV1dLFsvKGJsYWNrYmVycnkpW1xccy1dPyhcXHcrKS9pLC8oYmxhY2tiZXJyeXxiZW5xfHBhbG0oPz1cXC0pfHNvbnllcmljc3NvbnxhY2VyfGFzdXN8ZGVsbHxodWF3ZWl8bWVpenV8bW90b3JvbGF8cG9seXRyb24pW1xcc18tXT8oW1xcdy1dKykqL2ksLyhocClcXHMoW1xcd1xcc10rXFx3KS9pLC8oYXN1cyktPyhcXHcrKS9pXSxbVkVORE9SLE1PREVMLFtUWVBFLE1PQklMRV1dLFsvXFwoYmIxMDtcXHMoXFx3KykvaV0sW01PREVMLFtWRU5ET1IsXCJCbGFja0JlcnJ5XCJdLFtUWVBFLE1PQklMRV1dLFsvYW5kcm9pZC4rKHRyYW5zZm9bcHJpbWVcXHNdezQsMTB9XFxzXFx3K3xlZWVwY3xzbGlkZXJcXHNcXHcrfG5leHVzIDcpL2ldLFtNT0RFTCxbVkVORE9SLFwiQXN1c1wiXSxbVFlQRSxUQUJMRVRdXSxbLyhzb255KVxccyh0YWJsZXRcXHNbcHNdKVxcc2J1aWxkXFwvL2ksLyhzb255KT8oPzpzZ3AuKylcXHNidWlsZFxcLy9pXSxbW1ZFTkRPUixcIlNvbnlcIl0sW01PREVMLFwiWHBlcmlhIFRhYmxldFwiXSxbVFlQRSxUQUJMRVRdXSxbLyg/OnNvbnkpPyg/Oig/Oig/OmN8ZClcXGR7NH0pfCg/OnNvWy1sXS4rKSlcXHNidWlsZFxcLy9pXSxbW1ZFTkRPUixcIlNvbnlcIl0sW01PREVMLFwiWHBlcmlhIFBob25lXCJdLFtUWVBFLE1PQklMRV1dLFsvXFxzKG91eWEpXFxzL2ksLyhuaW50ZW5kbylcXHMoW3dpZHMzdV0rKS9pXSxbVkVORE9SLE1PREVMLFtUWVBFLENPTlNPTEVdXSxbL2FuZHJvaWQuKztcXHMoc2hpZWxkKVxcc2J1aWxkL2ldLFtNT0RFTCxbVkVORE9SLFwiTnZpZGlhXCJdLFtUWVBFLENPTlNPTEVdXSxbLyhwbGF5c3RhdGlvblxcc1szcG9ydGFibGV2aV0rKS9pXSxbTU9ERUwsW1ZFTkRPUixcIlNvbnlcIl0sW1RZUEUsQ09OU09MRV1dLFsvKHNwcmludFxccyhcXHcrKSkvaV0sW1tWRU5ET1IsbWFwcGVyLnN0cixtYXBzLmRldmljZS5zcHJpbnQudmVuZG9yXSxbTU9ERUwsbWFwcGVyLnN0cixtYXBzLmRldmljZS5zcHJpbnQubW9kZWxdLFtUWVBFLE1PQklMRV1dLFsvKGxlbm92bylcXHM/KFMoPzo1MDAwfDYwMDApKyg/OlstXVtcXHcrXSkpL2ldLFtWRU5ET1IsTU9ERUwsW1RZUEUsVEFCTEVUXV0sWy8oaHRjKVs7X1xccy1dKyhbXFx3XFxzXSsoPz1cXCkpfFxcdyspKi9pLC8oenRlKS0oXFx3KykqL2ksLyhhbGNhdGVsfGdlZWtzcGhvbmV8aHVhd2VpfGxlbm92b3xuZXhpYW58cGFuYXNvbmljfCg/PTtcXHMpc29ueSlbX1xccy1dPyhbXFx3LV0rKSovaV0sW1ZFTkRPUixbTU9ERUwsL18vZyxcIiBcIl0sW1RZUEUsTU9CSUxFXV0sWy8obmV4dXNcXHM5KS9pXSxbTU9ERUwsW1ZFTkRPUixcIkhUQ1wiXSxbVFlQRSxUQUJMRVRdXSxbL1tcXHNcXCg7XSh4Ym94KD86XFxzb25lKT8pW1xcc1xcKTtdL2ldLFtNT0RFTCxbVkVORE9SLFwiTWljcm9zb2Z0XCJdLFtUWVBFLENPTlNPTEVdXSxbLyhraW5cXC5bb25ldHddezN9KS9pXSxbW01PREVMLC9cXC4vZyxcIiBcIl0sW1ZFTkRPUixcIk1pY3Jvc29mdFwiXSxbVFlQRSxNT0JJTEVdXSxbL1xccyhtaWxlc3RvbmV8ZHJvaWQoPzpbMi00eF18XFxzKD86YmlvbmljfHgyfHByb3xyYXpyKSk/KDo/XFxzNGcpPylbXFx3XFxzXStidWlsZFxcLy9pLC9tb3RbXFxzLV0/KFxcdyspKi9pLC8oWFRcXGR7Myw0fSkgYnVpbGRcXC8vaV0sW01PREVMLFtWRU5ET1IsXCJNb3Rvcm9sYVwiXSxbVFlQRSxNT0JJTEVdXSxbL2FuZHJvaWQuK1xccyhtejYwXFxkfHhvb21bXFxzMl17MCwyfSlcXHNidWlsZFxcLy9pXSxbTU9ERUwsW1ZFTkRPUixcIk1vdG9yb2xhXCJdLFtUWVBFLFRBQkxFVF1dLFsvYW5kcm9pZC4rKChzY2gtaVs4OV0wXFxkfHNody1tMzgwc3xndC1wXFxkezR9fGd0LW44MDAwfHNnaC10OFs1Nl05fG5leHVzIDEwKSkvaSwvKChTTS1UXFx3KykpL2ldLFtbVkVORE9SLFwiU2Ftc3VuZ1wiXSxNT0RFTCxbVFlQRSxUQUJMRVRdXSxbLygoc1tjZ3BdaC1cXHcrfGd0LVxcdyt8Z2FsYXh5XFxzbmV4dXN8c20tbjkwMCkpL2ksLyhzYW1bc3VuZ10qKVtcXHMtXSooXFx3Ky0/W1xcdy1dKikqL2ksL3NlYy0oKHNnaFxcdyspKS9pXSxbW1ZFTkRPUixcIlNhbXN1bmdcIl0sTU9ERUwsW1RZUEUsTU9CSUxFXV0sWy8oc2Ftc3VuZyk7c21hcnR0di9pXSxbVkVORE9SLE1PREVMLFtUWVBFLFNNQVJUVFZdXSxbL1xcKGR0dltcXCk7XS4rKGFxdW9zKS9pXSxbTU9ERUwsW1ZFTkRPUixcIlNoYXJwXCJdLFtUWVBFLFNNQVJUVFZdXSxbL3NpZS0oXFx3KykqL2ldLFtNT0RFTCxbVkVORE9SLFwiU2llbWVuc1wiXSxbVFlQRSxNT0JJTEVdXSxbLyhtYWVtb3xub2tpYSkuKihuOTAwfGx1bWlhXFxzXFxkKykvaSwvKG5va2lhKVtcXHNfLV0/KFtcXHctXSspKi9pXSxbW1ZFTkRPUixcIk5va2lhXCJdLE1PREVMLFtUWVBFLE1PQklMRV1dLFsvYW5kcm9pZFxcczNcXC5bXFxzXFx3Oy1dezEwfShhXFxkezN9KS9pXSxbTU9ERUwsW1ZFTkRPUixcIkFjZXJcIl0sW1RZUEUsVEFCTEVUXV0sWy9hbmRyb2lkXFxzM1xcLltcXHNcXHc7LV17MTB9KGxnPyktKFswNmN2OV17Myw0fSkvaV0sW1tWRU5ET1IsXCJMR1wiXSxNT0RFTCxbVFlQRSxUQUJMRVRdXSxbLyhsZykgbmV0Y2FzdFxcLnR2L2ldLFtWRU5ET1IsTU9ERUwsW1RZUEUsU01BUlRUVl1dLFsvKG5leHVzXFxzWzQ1XSkvaSwvbGdbZTtcXHNcXC8tXSsoXFx3KykqL2ldLFtNT0RFTCxbVkVORE9SLFwiTEdcIl0sW1RZUEUsTU9CSUxFXV0sWy9hbmRyb2lkLisoaWRlYXRhYlthLXowLTlcXC1cXHNdKykvaV0sW01PREVMLFtWRU5ET1IsXCJMZW5vdm9cIl0sW1RZUEUsVEFCTEVUXV0sWy9saW51eDsuKygoam9sbGEpKTsvaV0sW1ZFTkRPUixNT0RFTCxbVFlQRSxNT0JJTEVdXSxbLygocGViYmxlKSlhcHBcXC9bXFxkXFwuXStcXHMvaV0sW1ZFTkRPUixNT0RFTCxbVFlQRSxXRUFSQUJMRV1dLFsvYW5kcm9pZC4rO1xccyhnbGFzcylcXHNcXGQvaV0sW01PREVMLFtWRU5ET1IsXCJHb29nbGVcIl0sW1RZUEUsV0VBUkFCTEVdXSxbL2FuZHJvaWQuKyhcXHcrKVxccytidWlsZFxcL2htXFwxL2ksL2FuZHJvaWQuKyhobVtcXHNcXC1fXSpub3RlP1tcXHNfXSooPzpcXGRcXHcpPylcXHMrYnVpbGQvaSwvYW5kcm9pZC4rKG1pW1xcc1xcLV9dKig/Om9uZXxvbmVbXFxzX11wbHVzKT9bXFxzX10qKD86XFxkXFx3KT8pXFxzK2J1aWxkL2ldLFtbTU9ERUwsL18vZyxcIiBcIl0sW1ZFTkRPUixcIlhpYW9taVwiXSxbVFlQRSxNT0JJTEVdXSxbLyhtb2JpbGV8dGFibGV0KTsuK3J2XFw6LitnZWNrb1xcLy9pXSxbW1RZUEUsdXRpbC5sb3dlcml6ZV0sVkVORE9SLE1PREVMXV0sZW5naW5lOltbL3dpbmRvd3MuK1xcc2VkZ2VcXC8oW1xcd1xcLl0rKS9pXSxbVkVSU0lPTixbTkFNRSxcIkVkZ2VIVE1MXCJdXSxbLyhwcmVzdG8pXFwvKFtcXHdcXC5dKykvaSwvKHdlYmtpdHx0cmlkZW50fG5ldGZyb250fG5ldHN1cmZ8YW1heWF8bHlueHx3M20pXFwvKFtcXHdcXC5dKykvaSwvKGtodG1sfHRhc21hbnxsaW5rcylbXFwvXFxzXVxcKD8oW1xcd1xcLl0rKS9pLC8oaWNhYilbXFwvXFxzXShbMjNdXFwuW1xcZFxcLl0rKS9pXSxbTkFNRSxWRVJTSU9OXSxbL3J2XFw6KFtcXHdcXC5dKykuKihnZWNrbykvaV0sW1ZFUlNJT04sTkFNRV1dLG9zOltbL21pY3Jvc29mdFxccyh3aW5kb3dzKVxccyh2aXN0YXx4cCkvaV0sW05BTUUsVkVSU0lPTl0sWy8od2luZG93cylcXHNudFxcczZcXC4yO1xccyhhcm0pL2ksLyh3aW5kb3dzXFxzcGhvbmUoPzpcXHNvcykqfHdpbmRvd3NcXHNtb2JpbGV8d2luZG93cylbXFxzXFwvXT8oW250Y2VcXGRcXC5cXHNdK1xcdykvaV0sW05BTUUsW1ZFUlNJT04sbWFwcGVyLnN0cixtYXBzLm9zLndpbmRvd3MudmVyc2lvbl1dLFsvKHdpbig/PTN8OXxuKXx3aW5cXHM5eFxccykoW250XFxkXFwuXSspL2ldLFtbTkFNRSxcIldpbmRvd3NcIl0sW1ZFUlNJT04sbWFwcGVyLnN0cixtYXBzLm9zLndpbmRvd3MudmVyc2lvbl1dLFsvXFwoKGJiKSgxMCk7L2ldLFtbTkFNRSxcIkJsYWNrQmVycnlcIl0sVkVSU0lPTl0sWy8oYmxhY2tiZXJyeSlcXHcqXFwvPyhbXFx3XFwuXSspKi9pLC8odGl6ZW4pW1xcL1xcc10oW1xcd1xcLl0rKS9pLC8oYW5kcm9pZHx3ZWJvc3xwYWxtXFxzb3N8cW54fGJhZGF8cmltXFxzdGFibGV0XFxzb3N8bWVlZ298Y29udGlraSlbXFwvXFxzLV0/KFtcXHdcXC5dKykqL2ksL2xpbnV4Oy4rKHNhaWxmaXNoKTsvaV0sW05BTUUsVkVSU0lPTl0sWy8oc3ltYmlhblxccz9vc3xzeW1ib3N8czYwKD89OykpW1xcL1xccy1dPyhbXFx3XFwuXSspKi9pXSxbW05BTUUsXCJTeW1iaWFuXCJdLFZFUlNJT05dLFsvXFwoKHNlcmllczQwKTsvaV0sW05BTUVdLFsvbW96aWxsYS4rXFwobW9iaWxlOy4rZ2Vja28uK2ZpcmVmb3gvaV0sW1tOQU1FLFwiRmlyZWZveCBPU1wiXSxWRVJTSU9OXSxbLyhuaW50ZW5kb3xwbGF5c3RhdGlvbilcXHMoW3dpZHMzcG9ydGFibGV2dV0rKS9pLC8obWludClbXFwvXFxzXFwoXT8oXFx3KykqL2ksLyhtYWdlaWF8dmVjdG9ybGludXgpWztcXHNdL2ksLyhqb2xpfFtreGxuXT91YnVudHV8ZGViaWFufFtvcGVuXSpzdXNlfGdlbnRvb3xhcmNofHNsYWNrd2FyZXxmZWRvcmF8bWFuZHJpdmF8Y2VudG9zfHBjbGludXhvc3xyZWRoYXR8emVud2Fsa3xsaW5wdXMpW1xcL1xccy1dPyhbXFx3XFwuLV0rKSovaSwvKGh1cmR8bGludXgpXFxzPyhbXFx3XFwuXSspKi9pLC8oZ251KVxccz8oW1xcd1xcLl0rKSovaV0sW05BTUUsVkVSU0lPTl0sWy8oY3JvcylcXHNbXFx3XStcXHMoW1xcd1xcLl0rXFx3KS9pXSxbW05BTUUsXCJDaHJvbWl1bSBPU1wiXSxWRVJTSU9OXSxbLyhzdW5vcylcXHM/KFtcXHdcXC5dK1xcZCkqL2ldLFtbTkFNRSxcIlNvbGFyaXNcIl0sVkVSU0lPTl0sWy9cXHMoW2ZyZW50b3BjLV17MCw0fWJzZHxkcmFnb25mbHkpXFxzPyhbXFx3XFwuXSspKi9pXSxbTkFNRSxWRVJTSU9OXSxbLyhpcFtob25lYWRdKykoPzouKm9zXFxzKihbXFx3XSspKlxcc2xpa2VcXHNtYWN8O1xcc29wZXJhKS9pXSxbW05BTUUsXCJpT1NcIl0sW1ZFUlNJT04sL18vZyxcIi5cIl1dLFsvKG1hY1xcc29zXFxzeClcXHM/KFtcXHdcXHNcXC5dK1xcdykqL2ksLyhtYWNpbnRvc2h8bWFjKD89X3Bvd2VycGMpXFxzKS9pXSxbW05BTUUsXCJNYWMgT1NcIl0sW1ZFUlNJT04sL18vZyxcIi5cIl1dLFsvKCg/Om9wZW4pP3NvbGFyaXMpW1xcL1xccy1dPyhbXFx3XFwuXSspKi9pLC8oaGFpa3UpXFxzKFxcdyspL2ksLyhhaXgpXFxzKChcXGQpKD89XFwufFxcKXxcXHMpW1xcd1xcLl0qKSovaSwvKHBsYW5cXHM5fG1pbml4fGJlb3N8b3NcXC8yfGFtaWdhb3N8bW9ycGhvc3xyaXNjXFxzb3N8b3BlbnZtcykvaSwvKHVuaXgpXFxzPyhbXFx3XFwuXSspKi9pXSxbTkFNRSxWRVJTSU9OXV19O3ZhciBVQVBhcnNlcj1mdW5jdGlvbih1YXN0cmluZyxleHRlbnNpb25zKXtpZighKHRoaXMgaW5zdGFuY2VvZiBVQVBhcnNlcikpe3JldHVybiBuZXcgVUFQYXJzZXIodWFzdHJpbmcsZXh0ZW5zaW9ucykuZ2V0UmVzdWx0KCl9dmFyIHVhPXVhc3RyaW5nfHwod2luZG93JiZ3aW5kb3cubmF2aWdhdG9yJiZ3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudD93aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDpFTVBUWSk7dmFyIHJneG1hcD1leHRlbnNpb25zP3V0aWwuZXh0ZW5kKHJlZ2V4ZXMsZXh0ZW5zaW9ucyk6cmVnZXhlczt0aGlzLmdldEJyb3dzZXI9ZnVuY3Rpb24oKXt2YXIgYnJvd3Nlcj1tYXBwZXIucmd4LmFwcGx5KHRoaXMscmd4bWFwLmJyb3dzZXIpO2Jyb3dzZXIubWFqb3I9dXRpbC5tYWpvcihicm93c2VyLnZlcnNpb24pO3JldHVybiBicm93c2VyfTt0aGlzLmdldENQVT1mdW5jdGlvbigpe3JldHVybiBtYXBwZXIucmd4LmFwcGx5KHRoaXMscmd4bWFwLmNwdSl9O3RoaXMuZ2V0RGV2aWNlPWZ1bmN0aW9uKCl7cmV0dXJuIG1hcHBlci5yZ3guYXBwbHkodGhpcyxyZ3htYXAuZGV2aWNlKX07dGhpcy5nZXRFbmdpbmU9ZnVuY3Rpb24oKXtyZXR1cm4gbWFwcGVyLnJneC5hcHBseSh0aGlzLHJneG1hcC5lbmdpbmUpfTt0aGlzLmdldE9TPWZ1bmN0aW9uKCl7cmV0dXJuIG1hcHBlci5yZ3guYXBwbHkodGhpcyxyZ3htYXAub3MpfTt0aGlzLmdldFJlc3VsdD1mdW5jdGlvbigpe3JldHVybnt1YTp0aGlzLmdldFVBKCksYnJvd3Nlcjp0aGlzLmdldEJyb3dzZXIoKSxlbmdpbmU6dGhpcy5nZXRFbmdpbmUoKSxvczp0aGlzLmdldE9TKCksZGV2aWNlOnRoaXMuZ2V0RGV2aWNlKCksY3B1OnRoaXMuZ2V0Q1BVKCl9fTt0aGlzLmdldFVBPWZ1bmN0aW9uKCl7cmV0dXJuIHVhfTt0aGlzLnNldFVBPWZ1bmN0aW9uKHVhc3RyaW5nKXt1YT11YXN0cmluZztyZXR1cm4gdGhpc307dGhpcy5zZXRVQSh1YSk7cmV0dXJuIHRoaXN9O1VBUGFyc2VyLlZFUlNJT049TElCVkVSU0lPTjtVQVBhcnNlci5CUk9XU0VSPXtOQU1FOk5BTUUsTUFKT1I6TUFKT1IsVkVSU0lPTjpWRVJTSU9OfTtVQVBhcnNlci5DUFU9e0FSQ0hJVEVDVFVSRTpBUkNISVRFQ1RVUkV9O1VBUGFyc2VyLkRFVklDRT17TU9ERUw6TU9ERUwsVkVORE9SOlZFTkRPUixUWVBFOlRZUEUsQ09OU09MRTpDT05TT0xFLE1PQklMRTpNT0JJTEUsU01BUlRUVjpTTUFSVFRWLFRBQkxFVDpUQUJMRVQsV0VBUkFCTEU6V0VBUkFCTEUsRU1CRURERUQ6RU1CRURERUR9O1VBUGFyc2VyLkVOR0lORT17TkFNRTpOQU1FLFZFUlNJT046VkVSU0lPTn07VUFQYXJzZXIuT1M9e05BTUU6TkFNRSxWRVJTSU9OOlZFUlNJT059O2lmKHR5cGVvZiBleHBvcnRzIT09VU5ERUZfVFlQRSl7aWYodHlwZW9mIG1vZHVsZSE9PVVOREVGX1RZUEUmJm1vZHVsZS5leHBvcnRzKXtleHBvcnRzPW1vZHVsZS5leHBvcnRzPVVBUGFyc2VyfWV4cG9ydHMuVUFQYXJzZXI9VUFQYXJzZXJ9ZWxzZXtpZih0eXBlb2YgZGVmaW5lPT09RlVOQ19UWVBFJiZkZWZpbmUuYW1kKXtkZWZpbmUoZnVuY3Rpb24oKXtyZXR1cm4gVUFQYXJzZXJ9KX1lbHNle3dpbmRvdy5VQVBhcnNlcj1VQVBhcnNlcn19dmFyICQ9d2luZG93LmpRdWVyeXx8d2luZG93LlplcHRvO2lmKHR5cGVvZiAkIT09VU5ERUZfVFlQRSl7dmFyIHBhcnNlcj1uZXcgVUFQYXJzZXI7JC51YT1wYXJzZXIuZ2V0UmVzdWx0KCk7JC51YS5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gcGFyc2VyLmdldFVBKCl9OyQudWEuc2V0PWZ1bmN0aW9uKHVhc3RyaW5nKXtwYXJzZXIuc2V0VUEodWFzdHJpbmcpO3ZhciByZXN1bHQ9cGFyc2VyLmdldFJlc3VsdCgpO2Zvcih2YXIgcHJvcCBpbiByZXN1bHQpeyQudWFbcHJvcF09cmVzdWx0W3Byb3BdfX19fSkodHlwZW9mIHdpbmRvdz09PVwib2JqZWN0XCI/d2luZG93OnRoaXMpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3VhLXBhcnNlci1qcy9kaXN0L3VhLXBhcnNlci5taW4uanNcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfYW1kX29wdGlvbnNfXztcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAod2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9