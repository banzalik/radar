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
