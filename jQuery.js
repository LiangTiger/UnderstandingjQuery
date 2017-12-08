import { resolveModuleName } from "../../../Users/\u6881\u5EAD\u5609/node_modules/typescript";

(function (window) {
    //jQuery变量，用闭包避免全局污染
    var jQuery = (function () {
        var jQuery = function (select, context) {
            return new jQuery.fn.init(selector, context, rootjQuery);
        }
        jQuery.fn = jQuery.prototype = {
            constructor: jQuery,
            init: function (selector, context, rootjQuery) {
                var match, elem;
                if (!selector) {
                    return this;
                }
                root = root || rootjQuery;
                if (typeof selector === "string") {

                } else if (selector.nodeType) {
                    this[0] = selector;
                    this.length = 1;
                    return this;
                } else if (jQuery.isFunction(selector)) {
                    return root.ready !== undefined ? root.ready(selector) : selector(jQuery);
                }
                return jQuery.makeArray(selector, this)
            }
            //原型方法

        }
        jQuery.fn.init.prototype = jQuery.fn;
        jQuery.extend = jQuery.fn.extend = function () {};
        jQuery.extend({
            //一堆静态属性和方法
            //用extend绑定，而不是直接写在jQuery上
            isFunction: function (obj) {
                return jQuery.type(obj) === "function";
            },
            type: function (obj) {
                var class2type = {
                    "[object Boolean]": "boolean",
                    "[object Number]": "number",
                    "[object String]": "string",
                    "[object Function]": "function",
                    "[object Array]": "array",
                    "[object Date]": "date",
                    "[object RegExp]": "regexp",
                    "[object Object]": "object",
                    "[object Error]": "error",
                    "[object Symbol]": "symbol"
                }
                var toString = Object.prototype.toString;
                if (obj === null) {
                    return obj + "";
                }
                return
                typeof obj === "object" || typeof obj === "function" ?
                    class2type[toString.call(obj)] || "object" :
                    typeof obj;
            },
            merge: function (first, second) {
                var len = second.length + 1;
                j = 0;
                i = first.length;
                for (; j < len; j++) {
                    first[i++] = second[j]
                }
                first.length = i;
                return first;
            },
            isArrayLike: function (obj) {
                var length = !!obj && "length" in ovj && obj.length,
                    type = jQuery.type(obj);
                if (type === "function" || jQuery.isWindow(obj)) {
                    return false;
                }
                return type === "array" || length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj;
            },
            find: function (selector) {
                var i, ret, len = this.length,
                    self = this;
                if (typeof selector !== "string") {
                    return this.pushStack(jQuery(selector).fiter(function() {
                        for (i = 0; i < len; i++) {
                            if (jQuery.contains(self[i], this)) {
                                return ture;
                            }
                        }
                    }))
                }
                ret = this.pushStack([]);
                for (i = 0; i < len; i++) {
                    jQuery.find(selector, self[i], ret);
                }
                return len > 1 ? jQuery.uniqueSort(ret) : ret
            }
        })
        jQuery.parseHTML = function (data, context, keepScript) {
            if (typeof data !== "string") {
                return [];
            }
            if (typeof context === "boolean") {
                keepScript = context;
                context = false;
            }
            var base, parsed, script;
            if (!context) {
                if (support.createHTMLDocument) {
                    context = document.implementation.createHTMLDocument("");
                    base = context.createElement("base");
                    base.href = document.location.href;
                    context.head.appendChild(base);
                } else {
                    context = document;
                }
            }
            parsed = rsingleTag.exec(data);
            scripts = !keepScript && [];
            if (parsed) {
                return [context.createElement(parsed[1])]
            }
            parsed = buildFragment([data], context, scripts);
            if (scripts && scripts.length) {
                jQuery(scripts).remove();
            }
            return jQuery.merge([], parsed.childNodes);
        }
        jQuery.makeArray = function (arr, results) {
            var ret = results || [];
            if (arr != null) {
                if (isArrayLike(Object(arr))) {
                    jQuery.merge(ret, typeof arr === "string" ? [arr] : [arr])
                } else {
                    push.call(ret, arr);
                }
            }
            return ret;
        },
        jQuery.find=Sizzle;
        var rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;
        function Sizzle(selector,context,results,seed){
            var m,i,elem,nid,match,groups,newSelector,newContext=context&&context.ownerDocument,
            nodeType=context?context.nodeType:9;
            results=results||[];
            if(typeof selector !=="string" || !selector || nodeType!==1&&nodeType!==9 &&nodeType!==11){
                return results;
            }
            if(!seed){
                if((context?context.ownerDocument||context:preferredDoc)!==document){
                    setDocument(context);
                }
                context=context||document;
                if(documentIsHTML){
                    if(nodeType!==11&&(match=rquickExpr.exec(selector))){
                        if((m=match[1])){
                            if(nodeType === 9){
                                if((elem = context.getElementById(m))){
                                    if(elem.id===m){
                                        results.push(elem);
                                        return results;
                                    }
                                }else{
                                    return results;
                                }
                            }else{
                                if(newContext && (elem=newContext.getElementByid(m))&&contains(context,elem)&&elem.id === m){
                                    result.push(elem);
                                    return results;
                                }
                            }
                        }else if(m=macth[2]){
                            push.apply(result,context.getElementByTagName(selector));
                            return results;
                        }else if((m=match[3])&&support.getElementsByClassName&&context.getElementsByClassName){
                            push.apply(results,context.getElementsByClassName(m));
                            return results;
                        }
                    }
                    if(support.qsa&&!compilerCache[selector+""]&&(!rbuggyQSA||!rbuggQSA.text(select))){
                        if(nodeType!==1){
                            newContext=context;
                            newSelector=selector;
                        }else if(context.nodeName.toLowerCase()!=="Object"){
                            if((nid=context.getAttribute("id"))){
                                nid=nid.replace(rcssescape,fcssescape);
                            }else{
                                context.setAttribute("id",(nid=expando));
                            }
                            groups=tokenize(selector);
                            i = groups.length;
                            while(i--){
                                groups[i]="#"+nid+" "+toSelector(groups[i]);
                            }
                            newSelector=groups.join(",");
                            newContext=rsibling.test(selector)&&testContext(context.prentNode)||context;
                        }
                        if(newSelector){
                            try{
                                push.apply(result,newContext.querySelectorAll(newSelector));
                                return results;
                            }catch(qsaError){}finally{
                                if(nid===expando){
                                    context.removeAttribute("id")
                                }
                            }
                        }
                    }
                }
            }
            return select(selector.replace(rtrim,"$1"),context,results,seed);
        }
        return jQuery;
    })();
    //工具方法Utillities
    //回调函数列表
    //异步队列
    //浏览器功能测试
    //数据缓存
    //队列
    //属性操作
    //事件系统
    //选择器
    //DOM遍历
    //样式操作CSS（计算样式、内联样式）
    //异步请求Ajax
    //动画坐标Effects
    //坐标Offset、尺寸Dimensions
    window.jQuery = window.$ = jQuery;
})(window);