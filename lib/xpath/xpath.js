module.exports = function () {
    'use strict';

    var my = {},
        Str = require('../string/string.js');

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
