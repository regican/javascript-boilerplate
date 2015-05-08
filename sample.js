!function(d, w, jsVar, u) {
    'use strict'

    // Safe reference 
    var js = function(obj) {
        return new jsWrapper(obj);
    };

    // Current version
    js.version = '0.1';

    // For debugging
    js._debug = true;
    var log = function(){
        if (console && js._debug) {
            console.log.apply(console, arguments);
        }
    }
    

    // OOP wrapper and chaining
    var jsWrapper = function(obj) { 
        this._obj = obj;
    };

    // Expose `wrapper.prototype` as `js.prototype`
    var jsProto = js.prototype = jsWrapper.prototype;

    // -- Module functions ---
    // Test function
    jsProto.test = function(){
        log('initialized '+ jsVar +', version', js.version, 'debug true');
    }
    jsProto.test();




    // Exports
    // CommonJS or exports object
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = js;
        }
        exports[jsVar] = js;
    } 

    // AMD module
    else if (typeof define === 'function' && define.amd) {
        define([], function() {
            return js;
        });
    } 

    // Standard Reference
    else {
        // Use js.noConflict to restore its original value    
        js.noConflict = (function(previousJS) {
            return function() {
                // Reset the value of the variable:
                w[jsVar] = previousJS;
                // Delete the noConflict function:
                js.noConflict = undefined;
                // Return reference to the library to re-assign it
                return js;
            };
        })(w[jsVar]);

        // Declare on global/window object:
        w[jsVar] = js;
    }

}(document,this,"varName");