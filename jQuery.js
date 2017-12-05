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
                }else if(jQuery.isFunction(selector)){
                    return root.ready!==undefined?root.ready(selector):selector(jQuery);
                }
                return jQuery.makeArray(selector,this)
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
            }
        })
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