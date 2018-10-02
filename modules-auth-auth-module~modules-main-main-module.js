(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-auth-auth-module~modules-main-main-module"],{

/***/ "./node_modules/@angular/http/fesm5/http.js":
/*!**************************************************!*\
  !*** ./node_modules/@angular/http/fesm5/http.js ***!
  \**************************************************/
/*! exports provided: ɵangular_packages_http_http_e, ɵangular_packages_http_http_f, ɵangular_packages_http_http_a, ɵangular_packages_http_http_b, ɵangular_packages_http_http_c, BrowserXhr, JSONPBackend, JSONPConnection, CookieXSRFStrategy, XHRBackend, XHRConnection, BaseRequestOptions, RequestOptions, BaseResponseOptions, ResponseOptions, ReadyState, RequestMethod, ResponseContentType, ResponseType, Headers, Http, Jsonp, HttpModule, JsonpModule, Connection, ConnectionBackend, XSRFStrategy, Request, Response, QueryEncoder, URLSearchParams, VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_e", function() { return BrowserJsonp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_f", function() { return Body; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_a", function() { return _createDefaultCookieXSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_b", function() { return httpFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_c", function() { return jsonpFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserXhr", function() { return BrowserXhr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONPBackend", function() { return JSONPBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONPConnection", function() { return JSONPConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieXSRFStrategy", function() { return CookieXSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHRBackend", function() { return XHRBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHRConnection", function() { return XHRConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRequestOptions", function() { return BaseRequestOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestOptions", function() { return RequestOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseResponseOptions", function() { return BaseResponseOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseOptions", function() { return ResponseOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadyState", function() { return ReadyState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestMethod", function() { return RequestMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseContentType", function() { return ResponseContentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseType", function() { return ResponseType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Http", function() { return Http; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jsonp", function() { return Jsonp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpModule", function() { return HttpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpModule", function() { return JsonpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Connection", function() { return Connection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionBackend", function() { return ConnectionBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XSRFStrategy", function() { return XSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryEncoder", function() { return QueryEncoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLSearchParams", function() { return URLSearchParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/**
 * @license Angular v6.0.3
 * (c) 2010-2018 Google, Inc. https://angular.io/
 * License: MIT
 */






/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A backend for http that uses the `XMLHttpRequest` browser API.
 *
 * Take care not to evaluate this in non-browser contexts.
 *
 * @deprecated use @angular/common/http instead
 */
var BrowserXhr = /** @class */ (function () {
    function BrowserXhr() {
    }
    BrowserXhr.prototype.build = function () { return (new XMLHttpRequest()); };
    BrowserXhr.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    BrowserXhr.ctorParameters = function () { return []; };
    return BrowserXhr;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Supported http methods.
 * @deprecated use @angular/common/http instead
 */
/**
 * Supported http methods.
 * @deprecated use @angular/common/http instead
 */
var RequestMethod;
/**
 * Supported http methods.
 * @deprecated use @angular/common/http instead
 */
(function (RequestMethod) {
    RequestMethod[RequestMethod["Get"] = 0] = "Get";
    RequestMethod[RequestMethod["Post"] = 1] = "Post";
    RequestMethod[RequestMethod["Put"] = 2] = "Put";
    RequestMethod[RequestMethod["Delete"] = 3] = "Delete";
    RequestMethod[RequestMethod["Options"] = 4] = "Options";
    RequestMethod[RequestMethod["Head"] = 5] = "Head";
    RequestMethod[RequestMethod["Patch"] = 6] = "Patch";
})(RequestMethod || (RequestMethod = {}));
/**
 * All possible states in which a connection can be, based on
 * [States](http://www.w3.org/TR/XMLHttpRequest/#states) from the `XMLHttpRequest` spec, but with an
 * additional "CANCELLED" state.
 * @deprecated use @angular/common/http instead
 */
/**
 * All possible states in which a connection can be, based on
 * [States](http://www.w3.org/TR/XMLHttpRequest/#states) from the `XMLHttpRequest` spec, but with an
 * additional "CANCELLED" state.
 * @deprecated use @angular/common/http instead
 */
var ReadyState;
/**
 * All possible states in which a connection can be, based on
 * [States](http://www.w3.org/TR/XMLHttpRequest/#states) from the `XMLHttpRequest` spec, but with an
 * additional "CANCELLED" state.
 * @deprecated use @angular/common/http instead
 */
(function (ReadyState) {
    ReadyState[ReadyState["Unsent"] = 0] = "Unsent";
    ReadyState[ReadyState["Open"] = 1] = "Open";
    ReadyState[ReadyState["HeadersReceived"] = 2] = "HeadersReceived";
    ReadyState[ReadyState["Loading"] = 3] = "Loading";
    ReadyState[ReadyState["Done"] = 4] = "Done";
    ReadyState[ReadyState["Cancelled"] = 5] = "Cancelled";
})(ReadyState || (ReadyState = {}));
/**
 * Acceptable response types to be associated with a {@link Response}, based on
 * [ResponseType](https://fetch.spec.whatwg.org/#responsetype) from the Fetch spec.
 * @deprecated use @angular/common/http instead
 */
/**
 * Acceptable response types to be associated with a {@link Response}, based on
 * [ResponseType](https://fetch.spec.whatwg.org/#responsetype) from the Fetch spec.
 * @deprecated use @angular/common/http instead
 */
var ResponseType;
/**
 * Acceptable response types to be associated with a {@link Response}, based on
 * [ResponseType](https://fetch.spec.whatwg.org/#responsetype) from the Fetch spec.
 * @deprecated use @angular/common/http instead
 */
(function (ResponseType) {
    ResponseType[ResponseType["Basic"] = 0] = "Basic";
    ResponseType[ResponseType["Cors"] = 1] = "Cors";
    ResponseType[ResponseType["Default"] = 2] = "Default";
    ResponseType[ResponseType["Error"] = 3] = "Error";
    ResponseType[ResponseType["Opaque"] = 4] = "Opaque";
})(ResponseType || (ResponseType = {}));
/**
 * Supported content type to be automatically associated with a {@link Request}.
 * @deprecated use @angular/common/http instead
 */
/**
 * Supported content type to be automatically associated with a {@link Request}.
 * @deprecated use @angular/common/http instead
 */
var ContentType;
/**
 * Supported content type to be automatically associated with a {@link Request}.
 * @deprecated use @angular/common/http instead
 */
(function (ContentType) {
    ContentType[ContentType["NONE"] = 0] = "NONE";
    ContentType[ContentType["JSON"] = 1] = "JSON";
    ContentType[ContentType["FORM"] = 2] = "FORM";
    ContentType[ContentType["FORM_DATA"] = 3] = "FORM_DATA";
    ContentType[ContentType["TEXT"] = 4] = "TEXT";
    ContentType[ContentType["BLOB"] = 5] = "BLOB";
    ContentType[ContentType["ARRAY_BUFFER"] = 6] = "ARRAY_BUFFER";
})(ContentType || (ContentType = {}));
/**
 * Define which buffer to use to store the response
 * @deprecated use @angular/common/http instead
 */
/**
 * Define which buffer to use to store the response
 * @deprecated use @angular/common/http instead
 */
var ResponseContentType;
/**
 * Define which buffer to use to store the response
 * @deprecated use @angular/common/http instead
 */
(function (ResponseContentType) {
    ResponseContentType[ResponseContentType["Text"] = 0] = "Text";
    ResponseContentType[ResponseContentType["Json"] = 1] = "Json";
    ResponseContentType[ResponseContentType["ArrayBuffer"] = 2] = "ArrayBuffer";
    ResponseContentType[ResponseContentType["Blob"] = 3] = "Blob";
})(ResponseContentType || (ResponseContentType = {}));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Polyfill for [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers), as
 * specified in the [Fetch Spec](https://fetch.spec.whatwg.org/#headers-class).
 *
 * The only known difference between this `Headers` implementation and the spec is the
 * lack of an `entries` method.
 *
 * ### Example
 *
 * ```
 * import {Headers} from '@angular/http';
 *
 * var firstHeaders = new Headers();
 * firstHeaders.append('Content-Type', 'image/jpeg');
 * console.log(firstHeaders.get('Content-Type')) //'image/jpeg'
 *
 * // Create headers from Plain Old JavaScript Object
 * var secondHeaders = new Headers({
 *   'X-My-Custom-Header': 'Angular'
 * });
 * console.log(secondHeaders.get('X-My-Custom-Header')); //'Angular'
 *
 * var thirdHeaders = new Headers(secondHeaders);
 * console.log(thirdHeaders.get('X-My-Custom-Header')); //'Angular'
 * ```
 *
 * @deprecated use @angular/common/http instead
 */
var Headers = /** @class */ (function () {
    // TODO(vicb): any -> string|string[]
    function Headers(headers) {
        var _this = this;
        /** @internal header names are lower case */
        this._headers = new Map();
        /** @internal map lower case names to actual names */
        this._normalizedNames = new Map();
        if (!headers) {
            return;
        }
        if (headers instanceof Headers) {
            headers.forEach(function (values, name) {
                values.forEach(function (value) { return _this.append(name, value); });
            });
            return;
        }
        Object.keys(headers).forEach(function (name) {
            var values = Array.isArray(headers[name]) ? headers[name] : [headers[name]];
            _this.delete(name);
            values.forEach(function (value) { return _this.append(name, value); });
        });
    }
    /**
     * Returns a new Headers instance from the given DOMString of Response Headers
     */
    /**
       * Returns a new Headers instance from the given DOMString of Response Headers
       */
    Headers.fromResponseHeaderString = /**
       * Returns a new Headers instance from the given DOMString of Response Headers
       */
    function (headersString) {
        var headers = new Headers();
        headersString.split('\n').forEach(function (line) {
            var index = line.indexOf(':');
            if (index > 0) {
                var name_1 = line.slice(0, index);
                var value = line.slice(index + 1).trim();
                headers.set(name_1, value);
            }
        });
        return headers;
    };
    /**
     * Appends a header to existing list of header values for a given header name.
     */
    /**
       * Appends a header to existing list of header values for a given header name.
       */
    Headers.prototype.append = /**
       * Appends a header to existing list of header values for a given header name.
       */
    function (name, value) {
        var values = this.getAll(name);
        if (values === null) {
            this.set(name, value);
        }
        else {
            values.push(value);
        }
    };
    /**
     * Deletes all header values for the given name.
     */
    /**
       * Deletes all header values for the given name.
       */
    Headers.prototype.delete = /**
       * Deletes all header values for the given name.
       */
    function (name) {
        var lcName = name.toLowerCase();
        this._normalizedNames.delete(lcName);
        this._headers.delete(lcName);
    };
    Headers.prototype.forEach = function (fn) {
        var _this = this;
        this._headers.forEach(function (values, lcName) { return fn(values, _this._normalizedNames.get(lcName), _this._headers); });
    };
    /**
     * Returns first header that matches given name.
     */
    /**
       * Returns first header that matches given name.
       */
    Headers.prototype.get = /**
       * Returns first header that matches given name.
       */
    function (name) {
        var values = this.getAll(name);
        if (values === null) {
            return null;
        }
        return values.length > 0 ? values[0] : null;
    };
    /**
     * Checks for existence of header by given name.
     */
    /**
       * Checks for existence of header by given name.
       */
    Headers.prototype.has = /**
       * Checks for existence of header by given name.
       */
    function (name) { return this._headers.has(name.toLowerCase()); };
    /**
     * Returns the names of the headers
     */
    /**
       * Returns the names of the headers
       */
    Headers.prototype.keys = /**
       * Returns the names of the headers
       */
    function () { return Array.from(this._normalizedNames.values()); };
    /**
     * Sets or overrides header value for given name.
     */
    /**
       * Sets or overrides header value for given name.
       */
    Headers.prototype.set = /**
       * Sets or overrides header value for given name.
       */
    function (name, value) {
        if (Array.isArray(value)) {
            if (value.length) {
                this._headers.set(name.toLowerCase(), [value.join(',')]);
            }
        }
        else {
            this._headers.set(name.toLowerCase(), [value]);
        }
        this.mayBeSetNormalizedName(name);
    };
    /**
     * Returns values of all headers.
     */
    /**
       * Returns values of all headers.
       */
    Headers.prototype.values = /**
       * Returns values of all headers.
       */
    function () { return Array.from(this._headers.values()); };
    /**
     * Returns string of all headers.
     */
    // TODO(vicb): returns {[name: string]: string[]}
    /**
       * Returns string of all headers.
       */
    // TODO(vicb): returns {[name: string]: string[]}
    Headers.prototype.toJSON = /**
       * Returns string of all headers.
       */
    // TODO(vicb): returns {[name: string]: string[]}
    function () {
        var _this = this;
        var serialized = {};
        this._headers.forEach(function (values, name) {
            var split = [];
            values.forEach(function (v) { return split.push.apply(split, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(v.split(','))); });
            serialized[_this._normalizedNames.get(name)] = split;
        });
        return serialized;
    };
    /**
     * Returns list of header values for a given name.
     */
    /**
       * Returns list of header values for a given name.
       */
    Headers.prototype.getAll = /**
       * Returns list of header values for a given name.
       */
    function (name) {
        return this.has(name) ? this._headers.get(name.toLowerCase()) || null : null;
    };
    /**
     * This method is not implemented.
     */
    /**
       * This method is not implemented.
       */
    Headers.prototype.entries = /**
       * This method is not implemented.
       */
    function () { throw new Error('"entries" method is not implemented on Headers class'); };
    Headers.prototype.mayBeSetNormalizedName = function (name) {
        var lcName = name.toLowerCase();
        if (!this._normalizedNames.has(lcName)) {
            this._normalizedNames.set(lcName, name);
        }
    };
    return Headers;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a response options object to be optionally provided when instantiating a
 * {@link Response}.
 *
 * This class is based on the `ResponseInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#responseinit).
 *
 * All values are null by default. Typical defaults can be found in the
 * {@link BaseResponseOptions} class, which sub-classes `ResponseOptions`.
 *
 * This class may be used in tests to build {@link Response Responses} for
 * mock responses (see {@link MockBackend}).
 *
 * ### Example ([live demo](http://plnkr.co/edit/P9Jkk8e8cz6NVzbcxEsD?p=preview))
 *
 * ```typescript
 * import {ResponseOptions, Response} from '@angular/http';
 *
 * var options = new ResponseOptions({
 *   body: '{"name":"Jeff"}'
 * });
 * var res = new Response(options);
 *
 * console.log('res.json():', res.json()); // Object {name: "Jeff"}
 * ```
 *
 * @deprecated use @angular/common/http instead
 */
var ResponseOptions = /** @class */ (function () {
    function ResponseOptions(opts) {
        if (opts === void 0) { opts = {}; }
        var body = opts.body, status = opts.status, headers = opts.headers, statusText = opts.statusText, type = opts.type, url = opts.url;
        this.body = body != null ? body : null;
        this.status = status != null ? status : null;
        this.headers = headers != null ? headers : null;
        this.statusText = statusText != null ? statusText : null;
        this.type = type != null ? type : null;
        this.url = url != null ? url : null;
    }
    /**
     * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
     * override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * This may be useful when sharing a base `ResponseOptions` object inside tests,
     * where certain properties may change from test to test.
     *
     * ### Example ([live demo](http://plnkr.co/edit/1lXquqFfgduTFBWjNoRE?p=preview))
     *
     * ```typescript
     * import {ResponseOptions, Response} from '@angular/http';
     *
     * var options = new ResponseOptions({
     *   body: {name: 'Jeff'}
     * });
     * var res = new Response(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('options.url:', options.url); // null
     * console.log('res.json():', res.json()); // Object {name: "Jeff"}
     * console.log('res.url:', res.url); // https://google.com
     * ```
     */
    /**
       * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
       * override
       * existing values. This method will not change the values of the instance on which it is being
       * called.
       *
       * This may be useful when sharing a base `ResponseOptions` object inside tests,
       * where certain properties may change from test to test.
       *
       * ### Example ([live demo](http://plnkr.co/edit/1lXquqFfgduTFBWjNoRE?p=preview))
       *
       * ```typescript
       * import {ResponseOptions, Response} from '@angular/http';
       *
       * var options = new ResponseOptions({
       *   body: {name: 'Jeff'}
       * });
       * var res = new Response(options.merge({
       *   url: 'https://google.com'
       * }));
       * console.log('options.url:', options.url); // null
       * console.log('res.json():', res.json()); // Object {name: "Jeff"}
       * console.log('res.url:', res.url); // https://google.com
       * ```
       */
    ResponseOptions.prototype.merge = /**
       * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
       * override
       * existing values. This method will not change the values of the instance on which it is being
       * called.
       *
       * This may be useful when sharing a base `ResponseOptions` object inside tests,
       * where certain properties may change from test to test.
       *
       * ### Example ([live demo](http://plnkr.co/edit/1lXquqFfgduTFBWjNoRE?p=preview))
       *
       * ```typescript
       * import {ResponseOptions, Response} from '@angular/http';
       *
       * var options = new ResponseOptions({
       *   body: {name: 'Jeff'}
       * });
       * var res = new Response(options.merge({
       *   url: 'https://google.com'
       * }));
       * console.log('options.url:', options.url); // null
       * console.log('res.json():', res.json()); // Object {name: "Jeff"}
       * console.log('res.url:', res.url); // https://google.com
       * ```
       */
    function (options) {
        return new ResponseOptions({
            body: options && options.body != null ? options.body : this.body,
            status: options && options.status != null ? options.status : this.status,
            headers: options && options.headers != null ? options.headers : this.headers,
            statusText: options && options.statusText != null ? options.statusText : this.statusText,
            type: options && options.type != null ? options.type : this.type,
            url: options && options.url != null ? options.url : this.url,
        });
    };
    return ResponseOptions;
}());
/**
 * Subclass of {@link ResponseOptions}, with default values.
 *
 * Default values:
 *  * status: 200
 *  * headers: empty {@link Headers} object
 *
 * This class could be extended and bound to the {@link ResponseOptions} class
 * when configuring an {@link Injector}, in order to override the default options
 * used by {@link Http} to create {@link Response Responses}.
 *
 * ### Example ([live demo](http://plnkr.co/edit/qv8DLT?p=preview))
 *
 * ```typescript
 * import {provide} from '@angular/core';
 * import {bootstrap} from '@angular/platform-browser/browser';
 * import {HTTP_PROVIDERS, Headers, Http, BaseResponseOptions, ResponseOptions} from
 * '@angular/http';
 * import {App} from './myapp';
 *
 * class MyOptions extends BaseResponseOptions {
 *   headers:Headers = new Headers({network: 'github'});
 * }
 *
 * bootstrap(App, [HTTP_PROVIDERS, {provide: ResponseOptions, useClass: MyOptions}]);
 * ```
 *
 * The options could also be extended when manually creating a {@link Response}
 * object.
 *
 * ### Example ([live demo](http://plnkr.co/edit/VngosOWiaExEtbstDoix?p=preview))
 *
 * ```
 * import {BaseResponseOptions, Response} from '@angular/http';
 *
 * var options = new BaseResponseOptions();
 * var res = new Response(options.merge({
 *   body: 'Angular',
 *   headers: new Headers({framework: 'angular'})
 * }));
 * console.log('res.headers.get("framework"):', res.headers.get('framework')); // angular
 * console.log('res.text():', res.text()); // Angular;
 * ```
 *
 * @deprecated use @angular/common/http instead
 */
var BaseResponseOptions = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(BaseResponseOptions, _super);
    function BaseResponseOptions() {
        return _super.call(this, { status: 200, statusText: 'Ok', type: ResponseType.Default, headers: new Headers() }) || this;
    }
    BaseResponseOptions.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    BaseResponseOptions.ctorParameters = function () { return []; };
    return BaseResponseOptions;
}(ResponseOptions));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Abstract class from which real backends are derived.
 *
 * The primary purpose of a `ConnectionBackend` is to create new connections to fulfill a given
 * {@link Request}.
 *
 * @deprecated use @angular/common/http instead
 */
var ConnectionBackend = /** @class */ (function () {
    function ConnectionBackend() {
    }
    return ConnectionBackend;
}());
/**
 * Abstract class from which real connections are derived.
 *
 * @deprecated use @angular/common/http instead
 */
var Connection = /** @class */ (function () {
    function Connection() {
    }
    return Connection;
}());
/**
 * An XSRFStrategy configures XSRF protection (e.g. via headers) on an HTTP request.
 *
 * @deprecated use @angular/common/http instead
 */
var XSRFStrategy = /** @class */ (function () {
    function XSRFStrategy() {
    }
    return XSRFStrategy;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function normalizeMethodName(method) {
    if (typeof method !== 'string')
        return method;
    switch (method.toUpperCase()) {
        case 'GET':
            return RequestMethod.Get;
        case 'POST':
            return RequestMethod.Post;
        case 'PUT':
            return RequestMethod.Put;
        case 'DELETE':
            return RequestMethod.Delete;
        case 'OPTIONS':
            return RequestMethod.Options;
        case 'HEAD':
            return RequestMethod.Head;
        case 'PATCH':
            return RequestMethod.Patch;
    }
    throw new Error("Invalid request method. The method \"" + method + "\" is not supported.");
}
var isSuccess = function (status) { return (status >= 200 && status < 300); };
function getResponseURL(xhr) {
    if ('responseURL' in xhr) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return null;
}

function stringToArrayBuffer(input) {
    var view = new Uint16Array(input.length);
    for (var i = 0, strLen = input.length; i < strLen; i++) {
        view[i] = input.charCodeAt(i);
    }
    return view.buffer;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function paramParser(rawParams) {
    if (rawParams === void 0) { rawParams = ''; }
    var map = new Map();
    if (rawParams.length > 0) {
        var params = rawParams.split('&');
        params.forEach(function (param) {
            var eqIdx = param.indexOf('=');
            var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__read"])(eqIdx == -1 ? [param, ''] : [param.slice(0, eqIdx), param.slice(eqIdx + 1)], 2), key = _a[0], val = _a[1];
            var list = map.get(key) || [];
            list.push(val);
            map.set(key, list);
        });
    }
    return map;
}
/**
 * @deprecated use @angular/common/http instead
 **/
var QueryEncoder = /** @class */ (function () {
    function QueryEncoder() {
    }
    QueryEncoder.prototype.encodeKey = function (k) { return standardEncoding(k); };
    QueryEncoder.prototype.encodeValue = function (v) { return standardEncoding(v); };
    return QueryEncoder;
}());
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
/**
 * Map-like representation of url search parameters, based on
 * [URLSearchParams](https://url.spec.whatwg.org/#urlsearchparams) in the url living standard,
 * with several extensions for merging URLSearchParams objects:
 *   - setAll()
 *   - appendAll()
 *   - replaceAll()
 *
 * This class accepts an optional second parameter of ${@link QueryEncoder},
 * which is used to serialize parameters before making a request. By default,
 * `QueryEncoder` encodes keys and values of parameters using `encodeURIComponent`,
 * and then un-encodes certain characters that are allowed to be part of the query
 * according to IETF RFC 3986: https://tools.ietf.org/html/rfc3986.
 *
 * These are the characters that are not encoded: `! $ \' ( ) * + , ; A 9 - . _ ~ ? /`
 *
 * If the set of allowed query characters is not acceptable for a particular backend,
 * `QueryEncoder` can be subclassed and provided as the 2nd argument to URLSearchParams.
 *
 * ```
 * import {URLSearchParams, QueryEncoder} from '@angular/http';
 * class MyQueryEncoder extends QueryEncoder {
 *   encodeKey(k: string): string {
 *     return myEncodingFunction(k);
 *   }
 *
 *   encodeValue(v: string): string {
 *     return myEncodingFunction(v);
 *   }
 * }
 *
 * let params = new URLSearchParams('', new MyQueryEncoder());
 * ```
 * @deprecated use @angular/common/http instead
 */
var URLSearchParams = /** @class */ (function () {
    function URLSearchParams(rawParams, queryEncoder) {
        if (rawParams === void 0) { rawParams = ''; }
        if (queryEncoder === void 0) { queryEncoder = new QueryEncoder(); }
        this.rawParams = rawParams;
        this.queryEncoder = queryEncoder;
        this.paramsMap = paramParser(rawParams);
    }
    URLSearchParams.prototype.clone = function () {
        var clone = new URLSearchParams('', this.queryEncoder);
        clone.appendAll(this);
        return clone;
    };
    URLSearchParams.prototype.has = function (param) { return this.paramsMap.has(param); };
    URLSearchParams.prototype.get = function (param) {
        var storedParam = this.paramsMap.get(param);
        return Array.isArray(storedParam) ? storedParam[0] : null;
    };
    URLSearchParams.prototype.getAll = function (param) { return this.paramsMap.get(param) || []; };
    URLSearchParams.prototype.set = function (param, val) {
        if (val === void 0 || val === null) {
            this.delete(param);
            return;
        }
        var list = this.paramsMap.get(param) || [];
        list.length = 0;
        list.push(val);
        this.paramsMap.set(param, list);
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `set(name, values[0])`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    // A merge operation
    // For each name-values pair in `searchParams`, perform `set(name, values[0])`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.setAll = 
    // A merge operation
    // For each name-values pair in `searchParams`, perform `set(name, values[0])`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var list = _this.paramsMap.get(param) || [];
            list.length = 0;
            list.push(value[0]);
            _this.paramsMap.set(param, list);
        });
    };
    URLSearchParams.prototype.append = function (param, val) {
        if (val === void 0 || val === null)
            return;
        var list = this.paramsMap.get(param) || [];
        list.push(val);
        this.paramsMap.set(param, list);
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `append(name, value)`
    // for each value in `values`.
    //
    // E.g: "a=[1,2], c=[8]" + "a=[3,4], b=[7]" = "a=[1,2,3,4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    // A merge operation
    // For each name-values pair in `searchParams`, perform `append(name, value)`
    // for each value in `values`.
    //
    // E.g: "a=[1,2], c=[8]" + "a=[3,4], b=[7]" = "a=[1,2,3,4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.appendAll = 
    // A merge operation
    // For each name-values pair in `searchParams`, perform `append(name, value)`
    // for each value in `values`.
    //
    // E.g: "a=[1,2], c=[8]" + "a=[3,4], b=[7]" = "a=[1,2,3,4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var list = _this.paramsMap.get(param) || [];
            for (var i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `delete(name)`,
    // followed by `set(name, values)`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4,5,6], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    // A merge operation
    // For each name-values pair in `searchParams`, perform `delete(name)`,
    // followed by `set(name, values)`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4,5,6], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.replaceAll = 
    // A merge operation
    // For each name-values pair in `searchParams`, perform `delete(name)`,
    // followed by `set(name, values)`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4,5,6], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var list = _this.paramsMap.get(param) || [];
            list.length = 0;
            for (var i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    URLSearchParams.prototype.toString = function () {
        var _this = this;
        var paramsList = [];
        this.paramsMap.forEach(function (values, k) {
            values.forEach(function (v) {
                return paramsList.push(_this.queryEncoder.encodeKey(k) + '=' + _this.queryEncoder.encodeValue(v));
            });
        });
        return paramsList.join('&');
    };
    URLSearchParams.prototype.delete = function (param) { this.paramsMap.delete(param); };
    return URLSearchParams;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * HTTP request body used by both {@link Request} and {@link Response}
 * https://fetch.spec.whatwg.org/#body
 */
var Body = /** @class */ (function () {
    function Body() {
    }
    /**
     * Attempts to return body as parsed `JSON` object, or raises an exception.
     */
    /**
       * Attempts to return body as parsed `JSON` object, or raises an exception.
       */
    Body.prototype.json = /**
       * Attempts to return body as parsed `JSON` object, or raises an exception.
       */
    function () {
        if (typeof this._body === 'string') {
            return JSON.parse(this._body);
        }
        if (this._body instanceof ArrayBuffer) {
            return JSON.parse(this.text());
        }
        return this._body;
    };
    /**
     * Returns the body as a string, presuming `toString()` can be called on the response body.
     *
     * When decoding an `ArrayBuffer`, the optional `encodingHint` parameter determines how the
     * bytes in the buffer will be interpreted. Valid values are:
     *
     * - `legacy` - incorrectly interpret the bytes as UTF-16 (technically, UCS-2). Only characters
     *   in the Basic Multilingual Plane are supported, surrogate pairs are not handled correctly.
     *   In addition, the endianness of the 16-bit octet pairs in the `ArrayBuffer` is not taken
     *   into consideration. This is the default behavior to avoid breaking apps, but should be
     *   considered deprecated.
     *
     * - `iso-8859` - interpret the bytes as ISO-8859 (which can be used for ASCII encoded text).
     */
    /**
       * Returns the body as a string, presuming `toString()` can be called on the response body.
       *
       * When decoding an `ArrayBuffer`, the optional `encodingHint` parameter determines how the
       * bytes in the buffer will be interpreted. Valid values are:
       *
       * - `legacy` - incorrectly interpret the bytes as UTF-16 (technically, UCS-2). Only characters
       *   in the Basic Multilingual Plane are supported, surrogate pairs are not handled correctly.
       *   In addition, the endianness of the 16-bit octet pairs in the `ArrayBuffer` is not taken
       *   into consideration. This is the default behavior to avoid breaking apps, but should be
       *   considered deprecated.
       *
       * - `iso-8859` - interpret the bytes as ISO-8859 (which can be used for ASCII encoded text).
       */
    Body.prototype.text = /**
       * Returns the body as a string, presuming `toString()` can be called on the response body.
       *
       * When decoding an `ArrayBuffer`, the optional `encodingHint` parameter determines how the
       * bytes in the buffer will be interpreted. Valid values are:
       *
       * - `legacy` - incorrectly interpret the bytes as UTF-16 (technically, UCS-2). Only characters
       *   in the Basic Multilingual Plane are supported, surrogate pairs are not handled correctly.
       *   In addition, the endianness of the 16-bit octet pairs in the `ArrayBuffer` is not taken
       *   into consideration. This is the default behavior to avoid breaking apps, but should be
       *   considered deprecated.
       *
       * - `iso-8859` - interpret the bytes as ISO-8859 (which can be used for ASCII encoded text).
       */
    function (encodingHint) {
        if (encodingHint === void 0) { encodingHint = 'legacy'; }
        if (this._body instanceof URLSearchParams) {
            return this._body.toString();
        }
        if (this._body instanceof ArrayBuffer) {
            switch (encodingHint) {
                case 'legacy':
                    return String.fromCharCode.apply(null, new Uint16Array(this._body));
                case 'iso-8859':
                    return String.fromCharCode.apply(null, new Uint8Array(this._body));
                default:
                    throw new Error("Invalid value for encodingHint: " + encodingHint);
            }
        }
        if (this._body == null) {
            return '';
        }
        if (typeof this._body === 'object') {
            return JSON.stringify(this._body, null, 2);
        }
        return this._body.toString();
    };
    /**
     * Return the body as an ArrayBuffer
     */
    /**
       * Return the body as an ArrayBuffer
       */
    Body.prototype.arrayBuffer = /**
       * Return the body as an ArrayBuffer
       */
    function () {
        if (this._body instanceof ArrayBuffer) {
            return this._body;
        }
        return stringToArrayBuffer(this.text());
    };
    /**
      * Returns the request's body as a Blob, assuming that body exists.
      */
    /**
        * Returns the request's body as a Blob, assuming that body exists.
        */
    Body.prototype.blob = /**
        * Returns the request's body as a Blob, assuming that body exists.
        */
    function () {
        if (this._body instanceof Blob) {
            return this._body;
        }
        if (this._body instanceof ArrayBuffer) {
            return new Blob([this._body]);
        }
        throw new Error('The request body isn\'t either a blob or an array buffer');
    };
    return Body;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates `Response` instances from provided values.
 *
 * Though this object isn't
 * usually instantiated by end-users, it is the primary object interacted with when it comes time to
 * add data to a view.
 *
 * ### Example
 *
 * ```
 * http.request('my-friends.txt').subscribe(response => this.friends = response.text());
 * ```
 *
 * The Response's interface is inspired by the Response constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#response-class), but is considered a static value whose body
 * can be accessed many times. There are other differences in the implementation, but this is the
 * most significant.
 *
 * @deprecated use @angular/common/http instead
 */
var Response = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(Response, _super);
    function Response(responseOptions) {
        var _this = _super.call(this) || this;
        _this._body = responseOptions.body;
        _this.status = (responseOptions.status);
        _this.ok = (_this.status >= 200 && _this.status <= 299);
        _this.statusText = responseOptions.statusText;
        _this.headers = responseOptions.headers;
        _this.type = (responseOptions.type);
        _this.url = (responseOptions.url);
        return _this;
    }
    Response.prototype.toString = function () {
        return "Response with status: " + this.status + " " + this.statusText + " for URL: " + this.url;
    };
    return Response;
}(Body));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var _nextRequestId = 0;
var JSONP_HOME = '__ng_jsonp__';
var _jsonpConnections = null;
function _getJsonpConnections() {
    var w = typeof window == 'object' ? window : {};
    if (_jsonpConnections === null) {
        _jsonpConnections = w[JSONP_HOME] = {};
    }
    return _jsonpConnections;
}
// Make sure not to evaluate this in a non-browser environment!
var BrowserJsonp = /** @class */ (function () {
    function BrowserJsonp() {
    }
    // Construct a <script> element with the specified URL
    // Construct a <script> element with the specified URL
    BrowserJsonp.prototype.build = 
    // Construct a <script> element with the specified URL
    function (url) {
        var node = document.createElement('script');
        node.src = url;
        return node;
    };
    BrowserJsonp.prototype.nextRequestID = function () { return "__req" + _nextRequestId++; };
    BrowserJsonp.prototype.requestCallback = function (id) { return JSONP_HOME + "." + id + ".finished"; };
    BrowserJsonp.prototype.exposeConnection = function (id, connection) {
        var connections = _getJsonpConnections();
        connections[id] = connection;
    };
    BrowserJsonp.prototype.removeConnection = function (id) {
        var connections = _getJsonpConnections();
        connections[id] = null;
    };
    // Attach the <script> element to the DOM
    // Attach the <script> element to the DOM
    BrowserJsonp.prototype.send = 
    // Attach the <script> element to the DOM
    function (node) { document.body.appendChild((node)); };
    // Remove <script> element from the DOM
    // Remove <script> element from the DOM
    BrowserJsonp.prototype.cleanup = 
    // Remove <script> element from the DOM
    function (node) {
        if (node.parentNode) {
            node.parentNode.removeChild((node));
        }
    };
    BrowserJsonp.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    BrowserJsonp.ctorParameters = function () { return []; };
    return BrowserJsonp;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use GET request method.';
/**
 * Base class for an in-flight JSONP request.
 *
 * @deprecated use @angular/common/http instead
 */
var JSONPConnection = /** @class */ (function () {
    /** @internal */
    function JSONPConnection(req, _dom, baseResponseOptions) {
        var _this = this;
        this._dom = _dom;
        this.baseResponseOptions = baseResponseOptions;
        this._finished = false;
        if (req.method !== RequestMethod.Get) {
            throw new TypeError(JSONP_ERR_WRONG_METHOD);
        }
        this.request = req;
        this.response = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (responseObserver) {
            _this.readyState = ReadyState.Loading;
            var id = _this._id = _dom.nextRequestID();
            _dom.exposeConnection(id, _this);
            // Workaround Dart
            // url = url.replace(/=JSONP_CALLBACK(&|$)/, `generated method`);
            var callback = _dom.requestCallback(_this._id);
            var url = req.url;
            if (url.indexOf('=JSONP_CALLBACK&') > -1) {
                url = url.replace('=JSONP_CALLBACK&', "=" + callback + "&");
            }
            else if (url.lastIndexOf('=JSONP_CALLBACK') === url.length - '=JSONP_CALLBACK'.length) {
                url = url.substring(0, url.length - '=JSONP_CALLBACK'.length) + ("=" + callback);
            }
            var script = _this._script = _dom.build(url);
            var onLoad = function (event) {
                if (_this.readyState === ReadyState.Cancelled)
                    return;
                _this.readyState = ReadyState.Done;
                _dom.cleanup(script);
                if (!_this._finished) {
                    var responseOptions_1 = new ResponseOptions({ body: JSONP_ERR_NO_CALLBACK, type: ResponseType.Error, url: url });
                    if (baseResponseOptions) {
                        responseOptions_1 = baseResponseOptions.merge(responseOptions_1);
                    }
                    responseObserver.error(new Response(responseOptions_1));
                    return;
                }
                var responseOptions = new ResponseOptions({ body: _this._responseData, url: url });
                if (_this.baseResponseOptions) {
                    responseOptions = _this.baseResponseOptions.merge(responseOptions);
                }
                responseObserver.next(new Response(responseOptions));
                responseObserver.complete();
            };
            var onError = function (error) {
                if (_this.readyState === ReadyState.Cancelled)
                    return;
                _this.readyState = ReadyState.Done;
                _dom.cleanup(script);
                var responseOptions = new ResponseOptions({ body: error.message, type: ResponseType.Error });
                if (baseResponseOptions) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new Response(responseOptions));
            };
            script.addEventListener('load', onLoad);
            script.addEventListener('error', onError);
            _dom.send(script);
            return function () {
                _this.readyState = ReadyState.Cancelled;
                script.removeEventListener('load', onLoad);
                script.removeEventListener('error', onError);
                _this._dom.cleanup(script);
            };
        });
    }
    /**
     * Callback called when the JSONP request completes, to notify the application
     * of the new data.
     */
    /**
       * Callback called when the JSONP request completes, to notify the application
       * of the new data.
       */
    JSONPConnection.prototype.finished = /**
       * Callback called when the JSONP request completes, to notify the application
       * of the new data.
       */
    function (data) {
        // Don't leak connections
        this._finished = true;
        this._dom.removeConnection(this._id);
        if (this.readyState === ReadyState.Cancelled)
            return;
        this._responseData = data;
    };
    return JSONPConnection;
}());
/**
 * A {@link ConnectionBackend} that uses the JSONP strategy of making requests.
 *
 * @deprecated use @angular/common/http instead
 */
var JSONPBackend = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(JSONPBackend, _super);
    /** @internal */
    function JSONPBackend(_browserJSONP, _baseResponseOptions) {
        var _this = _super.call(this) || this;
        _this._browserJSONP = _browserJSONP;
        _this._baseResponseOptions = _baseResponseOptions;
        return _this;
    }
    JSONPBackend.prototype.createConnection = function (request) {
        return new JSONPConnection(request, this._browserJSONP, this._baseResponseOptions);
    };
    JSONPBackend.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    JSONPBackend.ctorParameters = function () { return [
        { type: BrowserJsonp, },
        { type: ResponseOptions, },
    ]; };
    return JSONPBackend;
}(ConnectionBackend));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Creates connections using `XMLHttpRequest`. Given a fully-qualified
 * request, an `XHRConnection` will immediately create an `XMLHttpRequest` object and send the
 * request.
 *
 * This class would typically not be created or interacted with directly inside applications, though
 * the {@link MockConnection} may be interacted with in tests.
 *
 * @deprecated use @angular/common/http instead
 */
var XHRConnection = /** @class */ (function () {
    function XHRConnection(req, browserXHR, baseResponseOptions) {
        var _this = this;
        this.request = req;
        this.response = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (responseObserver) {
            var _xhr = browserXHR.build();
            _xhr.open(RequestMethod[req.method].toUpperCase(), req.url);
            if (req.withCredentials != null) {
                _xhr.withCredentials = req.withCredentials;
            }
            // load event handler
            var onLoad = function () {
                // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
                var status = _xhr.status === 1223 ? 204 : _xhr.status;
                var body = null;
                // HTTP 204 means no content
                if (status !== 204) {
                    // responseText is the old-school way of retrieving response (supported by IE8 & 9)
                    // response/responseType properties were introduced in ResourceLoader Level2 spec
                    // (supported by IE10)
                    body = (typeof _xhr.response === 'undefined') ? _xhr.responseText : _xhr.response;
                    // Implicitly strip a potential XSSI prefix.
                    if (typeof body === 'string') {
                        body = body.replace(XSSI_PREFIX, '');
                    }
                }
                // fix status code when it is 0 (0 status is undocumented).
                // Occurs when accessing file resources or on Android 4.1 stock browser
                // while retrieving files from application cache.
                if (status === 0) {
                    status = body ? 200 : 0;
                }
                var headers = Headers.fromResponseHeaderString(_xhr.getAllResponseHeaders());
                // IE 9 does not provide the way to get URL of response
                var url = getResponseURL(_xhr) || req.url;
                var statusText = _xhr.statusText || 'OK';
                var responseOptions = new ResponseOptions({ body: body, status: status, headers: headers, statusText: statusText, url: url });
                if (baseResponseOptions != null) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                var response = new Response(responseOptions);
                response.ok = isSuccess(status);
                if (response.ok) {
                    responseObserver.next(response);
                    // TODO(gdi2290): defer complete if array buffer until done
                    responseObserver.complete();
                    return;
                }
                responseObserver.error(response);
            };
            // error event handler
            var onError = function (err) {
                var responseOptions = new ResponseOptions({
                    body: err,
                    type: ResponseType.Error,
                    status: _xhr.status,
                    statusText: _xhr.statusText,
                });
                if (baseResponseOptions != null) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new Response(responseOptions));
            };
            _this.setDetectedContentType(req, _xhr);
            if (req.headers == null) {
                req.headers = new Headers();
            }
            if (!req.headers.has('Accept')) {
                req.headers.append('Accept', 'application/json, text/plain, */*');
            }
            req.headers.forEach(function (values, name) { return _xhr.setRequestHeader((name), values.join(',')); });
            // Select the correct buffer type to store the response
            if (req.responseType != null && _xhr.responseType != null) {
                switch (req.responseType) {
                    case ResponseContentType.ArrayBuffer:
                        _xhr.responseType = 'arraybuffer';
                        break;
                    case ResponseContentType.Json:
                        _xhr.responseType = 'json';
                        break;
                    case ResponseContentType.Text:
                        _xhr.responseType = 'text';
                        break;
                    case ResponseContentType.Blob:
                        _xhr.responseType = 'blob';
                        break;
                    default:
                        throw new Error('The selected responseType is not supported');
                }
            }
            _xhr.addEventListener('load', onLoad);
            _xhr.addEventListener('error', onError);
            _xhr.send(_this.request.getBody());
            return function () {
                _xhr.removeEventListener('load', onLoad);
                _xhr.removeEventListener('error', onError);
                _xhr.abort();
            };
        });
    }
    XHRConnection.prototype.setDetectedContentType = function (req /** TODO Request */, _xhr /** XMLHttpRequest */) {
        // Skip if a custom Content-Type header is provided
        if (req.headers != null && req.headers.get('Content-Type') != null) {
            return;
        }
        // Set the detected content type
        switch (req.contentType) {
            case ContentType.NONE:
                break;
            case ContentType.JSON:
                _xhr.setRequestHeader('content-type', 'application/json');
                break;
            case ContentType.FORM:
                _xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                break;
            case ContentType.TEXT:
                _xhr.setRequestHeader('content-type', 'text/plain');
                break;
            case ContentType.BLOB:
                var blob = req.blob();
                if (blob.type) {
                    _xhr.setRequestHeader('content-type', blob.type);
                }
                break;
        }
    };
    return XHRConnection;
}());
/**
 * `XSRFConfiguration` sets up Cross Site Request Forgery (XSRF) protection for the application
 * using a cookie. See https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)
 * for more information on XSRF.
 *
 * Applications can configure custom cookie and header names by binding an instance of this class
 * with different `cookieName` and `headerName` values. See the main HTTP documentation for more
 * details.
 *
 * @deprecated use @angular/common/http instead
 */
var CookieXSRFStrategy = /** @class */ (function () {
    function CookieXSRFStrategy(_cookieName, _headerName) {
        if (_cookieName === void 0) { _cookieName = 'XSRF-TOKEN'; }
        if (_headerName === void 0) { _headerName = 'X-XSRF-TOKEN'; }
        this._cookieName = _cookieName;
        this._headerName = _headerName;
    }
    CookieXSRFStrategy.prototype.configureRequest = function (req) {
        var xsrfToken = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["ɵgetDOM"])().getCookie(this._cookieName);
        if (xsrfToken) {
            req.headers.set(this._headerName, xsrfToken);
        }
    };
    return CookieXSRFStrategy;
}());
/**
 * Creates {@link XHRConnection} instances.
 *
 * This class would typically not be used by end users, but could be
 * overridden if a different backend implementation should be used,
 * such as in a node backend.
 *
 * ### Example
 *
 * ```
 * import {Http, MyNodeBackend, HTTP_PROVIDERS, BaseRequestOptions} from '@angular/http';
 * @Component({
 *   viewProviders: [
 *     HTTP_PROVIDERS,
 *     {provide: Http, useFactory: (backend, options) => {
 *       return new Http(backend, options);
 *     }, deps: [MyNodeBackend, BaseRequestOptions]}]
 * })
 * class MyComponent {
 *   constructor(http:Http) {
 *     http.request('people.json').subscribe(res => this.people = res.json());
 *   }
 * }
 * ```
 * @deprecated use @angular/common/http instead
 */
var XHRBackend = /** @class */ (function () {
    function XHRBackend(_browserXHR, _baseResponseOptions, _xsrfStrategy) {
        this._browserXHR = _browserXHR;
        this._baseResponseOptions = _baseResponseOptions;
        this._xsrfStrategy = _xsrfStrategy;
    }
    XHRBackend.prototype.createConnection = function (request) {
        this._xsrfStrategy.configureRequest(request);
        return new XHRConnection(request, this._browserXHR, this._baseResponseOptions);
    };
    XHRBackend.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    XHRBackend.ctorParameters = function () { return [
        { type: BrowserXhr, },
        { type: ResponseOptions, },
        { type: XSRFStrategy, },
    ]; };
    return XHRBackend;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a request options object to be optionally provided when instantiating a
 * {@link Request}.
 *
 * This class is based on the `RequestInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#requestinit).
 *
 * All values are null by default. Typical defaults can be found in the {@link BaseRequestOptions}
 * class, which sub-classes `RequestOptions`.
 *
 * ```typescript
 * import {RequestOptions, Request, RequestMethod} from '@angular/http';
 *
 * const options = new RequestOptions({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * });
 * const req = new Request(options);
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // https://google.com
 * ```
 *
 * @deprecated use @angular/common/http instead
 */
var RequestOptions = /** @class */ (function () {
    // TODO(Dzmitry): remove search when this.search is removed
    function RequestOptions(opts) {
        if (opts === void 0) { opts = {}; }
        var method = opts.method, headers = opts.headers, body = opts.body, url = opts.url, search = opts.search, params = opts.params, withCredentials = opts.withCredentials, responseType = opts.responseType;
        this.method = method != null ? normalizeMethodName(method) : null;
        this.headers = headers != null ? headers : null;
        this.body = body != null ? body : null;
        this.url = url != null ? url : null;
        this.params = this._mergeSearchParams(params || search);
        this.withCredentials = withCredentials != null ? withCredentials : null;
        this.responseType = responseType != null ? responseType : null;
    }
    Object.defineProperty(RequestOptions.prototype, "search", {
        /**
         * @deprecated from 4.0.0. Use params instead.
         */
        get: /**
           * @deprecated from 4.0.0. Use params instead.
           */
        function () { return this.params; },
        /**
         * @deprecated from 4.0.0. Use params instead.
         */
        set: /**
           * @deprecated from 4.0.0. Use params instead.
           */
        function (params) { this.params = params; },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * Note that `headers` and `search` will override existing values completely if present in
     * the `options` object. If these values should be merged, it should be done prior to calling
     * `merge` on the `RequestOptions` instance.
     *
     * ```typescript
     * import {RequestOptions, Request, RequestMethod} from '@angular/http';
     *
     * const options = new RequestOptions({
     *   method: RequestMethod.Post
     * });
     * const req = new Request(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('req.method:', RequestMethod[req.method]); // Post
     * console.log('options.url:', options.url); // null
     * console.log('req.url:', req.url); // https://google.com
     * ```
     */
    /**
       * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
       * existing values. This method will not change the values of the instance on which it is being
       * called.
       *
       * Note that `headers` and `search` will override existing values completely if present in
       * the `options` object. If these values should be merged, it should be done prior to calling
       * `merge` on the `RequestOptions` instance.
       *
       * ```typescript
       * import {RequestOptions, Request, RequestMethod} from '@angular/http';
       *
       * const options = new RequestOptions({
       *   method: RequestMethod.Post
       * });
       * const req = new Request(options.merge({
       *   url: 'https://google.com'
       * }));
       * console.log('req.method:', RequestMethod[req.method]); // Post
       * console.log('options.url:', options.url); // null
       * console.log('req.url:', req.url); // https://google.com
       * ```
       */
    RequestOptions.prototype.merge = /**
       * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
       * existing values. This method will not change the values of the instance on which it is being
       * called.
       *
       * Note that `headers` and `search` will override existing values completely if present in
       * the `options` object. If these values should be merged, it should be done prior to calling
       * `merge` on the `RequestOptions` instance.
       *
       * ```typescript
       * import {RequestOptions, Request, RequestMethod} from '@angular/http';
       *
       * const options = new RequestOptions({
       *   method: RequestMethod.Post
       * });
       * const req = new Request(options.merge({
       *   url: 'https://google.com'
       * }));
       * console.log('req.method:', RequestMethod[req.method]); // Post
       * console.log('options.url:', options.url); // null
       * console.log('req.url:', req.url); // https://google.com
       * ```
       */
    function (options) {
        return new RequestOptions({
            method: options && options.method != null ? options.method : this.method,
            headers: options && options.headers != null ? options.headers : new Headers(this.headers),
            body: options && options.body != null ? options.body : this.body,
            url: options && options.url != null ? options.url : this.url,
            params: options && this._mergeSearchParams(options.params || options.search),
            withCredentials: options && options.withCredentials != null ? options.withCredentials :
                this.withCredentials,
            responseType: options && options.responseType != null ? options.responseType :
                this.responseType
        });
    };
    RequestOptions.prototype._mergeSearchParams = function (params) {
        if (!params)
            return this.params;
        if (params instanceof URLSearchParams) {
            return params.clone();
        }
        if (typeof params === 'string') {
            return new URLSearchParams(params);
        }
        return this._parseParams(params);
    };
    RequestOptions.prototype._parseParams = function (objParams) {
        var _this = this;
        if (objParams === void 0) { objParams = {}; }
        var params = new URLSearchParams();
        Object.keys(objParams).forEach(function (key) {
            var value = objParams[key];
            if (Array.isArray(value)) {
                value.forEach(function (item) { return _this._appendParam(key, item, params); });
            }
            else {
                _this._appendParam(key, value, params);
            }
        });
        return params;
    };
    RequestOptions.prototype._appendParam = function (key, value, params) {
        if (typeof value !== 'string') {
            value = JSON.stringify(value);
        }
        params.append(key, value);
    };
    return RequestOptions;
}());
/**
 * Subclass of {@link RequestOptions}, with default values.
 *
 * Default values:
 *  * method: {@link RequestMethod RequestMethod.Get}
 *  * headers: empty {@link Headers} object
 *
 * This class could be extended and bound to the {@link RequestOptions} class
 * when configuring an {@link Injector}, in order to override the default options
 * used by {@link Http} to create and send {@link Request Requests}.
 *
 * ```typescript
 * import {BaseRequestOptions, RequestOptions} from '@angular/http';
 *
 * class MyOptions extends BaseRequestOptions {
 *   search: string = 'coreTeam=true';
 * }
 *
 * {provide: RequestOptions, useClass: MyOptions};
 * ```
 *
 * The options could also be extended when manually creating a {@link Request}
 * object.
 *
 * ```
 * import {BaseRequestOptions, Request, RequestMethod} from '@angular/http';
 *
 * const options = new BaseRequestOptions();
 * const req = new Request(options.merge({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * }));
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // null
 * console.log('req.url:', req.url); // https://google.com
 * ```
 *
 * @deprecated use @angular/common/http instead
 */
var BaseRequestOptions = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(BaseRequestOptions, _super);
    function BaseRequestOptions() {
        return _super.call(this, { method: RequestMethod.Get, headers: new Headers() }) || this;
    }
    BaseRequestOptions.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    BaseRequestOptions.ctorParameters = function () { return []; };
    return BaseRequestOptions;
}(RequestOptions));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// TODO(jeffbcross): properly implement body accessors
/**
 * Creates `Request` instances from provided values.
 *
 * The Request's interface is inspired by the Request constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#request-class),
 * but is considered a static value whose body can be accessed many times. There are other
 * differences in the implementation, but this is the most significant.
 *
 * `Request` instances are typically created by higher-level classes, like {@link Http} and
 * {@link Jsonp}, but it may occasionally be useful to explicitly create `Request` instances.
 * One such example is when creating services that wrap higher-level services, like {@link Http},
 * where it may be useful to generate a `Request` with arbitrary headers and search params.
 *
 * ```typescript
 * import {Injectable, Injector} from '@angular/core';
 * import {HTTP_PROVIDERS, Http, Request, RequestMethod} from '@angular/http';
 *
 * @Injectable()
 * class AutoAuthenticator {
 *   constructor(public http:Http) {}
 *   request(url:string) {
 *     return this.http.request(new Request({
 *       method: RequestMethod.Get,
 *       url: url,
 *       search: 'password=123'
 *     }));
 *   }
 * }
 *
 * var injector = Injector.resolveAndCreate([HTTP_PROVIDERS, AutoAuthenticator]);
 * var authenticator = injector.get(AutoAuthenticator);
 * authenticator.request('people.json').subscribe(res => {
 *   //URL should have included '?password=123'
 *   console.log('people', res.json());
 * });
 * ```
 *
 * @deprecated use @angular/common/http instead
 */
var Request = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(Request, _super);
    function Request(requestOptions) {
        var _this = _super.call(this) || this;
        // TODO: assert that url is present
        var url = requestOptions.url;
        _this.url = (requestOptions.url);
        var paramsArg = requestOptions.params || requestOptions.search;
        if (paramsArg) {
            var params = void 0;
            if (typeof paramsArg === 'object' && !(paramsArg instanceof URLSearchParams)) {
                params = urlEncodeParams(paramsArg).toString();
            }
            else {
                params = paramsArg.toString();
            }
            if (params.length > 0) {
                var prefix = '?';
                if (_this.url.indexOf('?') != -1) {
                    prefix = (_this.url[_this.url.length - 1] == '&') ? '' : '&';
                }
                // TODO: just delete search-query-looking string in url?
                // TODO: just delete search-query-looking string in url?
                _this.url = url + prefix + params;
            }
        }
        _this._body = requestOptions.body;
        _this.method = normalizeMethodName((requestOptions.method));
        // TODO(jeffbcross): implement behavior
        // Defaults to 'omit', consistent with browser
        // TODO(jeffbcross): implement behavior
        // Defaults to 'omit', consistent with browser
        _this.headers = new Headers(requestOptions.headers);
        _this.contentType = _this.detectContentType();
        _this.withCredentials = (requestOptions.withCredentials);
        _this.responseType = (requestOptions.responseType);
        return _this;
    }
    /**
     * Returns the content type enum based on header options.
     */
    /**
       * Returns the content type enum based on header options.
       */
    Request.prototype.detectContentType = /**
       * Returns the content type enum based on header options.
       */
    function () {
        switch (this.headers.get('content-type')) {
            case 'application/json':
                return ContentType.JSON;
            case 'application/x-www-form-urlencoded':
                return ContentType.FORM;
            case 'multipart/form-data':
                return ContentType.FORM_DATA;
            case 'text/plain':
            case 'text/html':
                return ContentType.TEXT;
            case 'application/octet-stream':
                return this._body instanceof ArrayBuffer$1 ? ContentType.ARRAY_BUFFER : ContentType.BLOB;
            default:
                return this.detectContentTypeFromBody();
        }
    };
    /**
     * Returns the content type of request's body based on its type.
     */
    /**
       * Returns the content type of request's body based on its type.
       */
    Request.prototype.detectContentTypeFromBody = /**
       * Returns the content type of request's body based on its type.
       */
    function () {
        if (this._body == null) {
            return ContentType.NONE;
        }
        else if (this._body instanceof URLSearchParams) {
            return ContentType.FORM;
        }
        else if (this._body instanceof FormData) {
            return ContentType.FORM_DATA;
        }
        else if (this._body instanceof Blob$1) {
            return ContentType.BLOB;
        }
        else if (this._body instanceof ArrayBuffer$1) {
            return ContentType.ARRAY_BUFFER;
        }
        else if (this._body && typeof this._body === 'object') {
            return ContentType.JSON;
        }
        else {
            return ContentType.TEXT;
        }
    };
    /**
     * Returns the request's body according to its type. If body is undefined, return
     * null.
     */
    /**
       * Returns the request's body according to its type. If body is undefined, return
       * null.
       */
    Request.prototype.getBody = /**
       * Returns the request's body according to its type. If body is undefined, return
       * null.
       */
    function () {
        switch (this.contentType) {
            case ContentType.JSON:
                return this.text();
            case ContentType.FORM:
                return this.text();
            case ContentType.FORM_DATA:
                return this._body;
            case ContentType.TEXT:
                return this.text();
            case ContentType.BLOB:
                return this.blob();
            case ContentType.ARRAY_BUFFER:
                return this.arrayBuffer();
            default:
                return null;
        }
    };
    return Request;
}(Body));
function urlEncodeParams(params) {
    var searchParams = new URLSearchParams();
    Object.keys(params).forEach(function (key) {
        var value = params[key];
        if (value && Array.isArray(value)) {
            value.forEach(function (element) { return searchParams.append(key, element.toString()); });
        }
        else {
            searchParams.append(key, value.toString());
        }
    });
    return searchParams;
}
var noop = function () { };
var w = typeof window == 'object' ? window : noop;
var FormData = w /** TODO #9100 */['FormData'] || noop;
var Blob$1 = w /** TODO #9100 */['Blob'] || noop;
var ArrayBuffer$1 = w /** TODO #9100 */['ArrayBuffer'] || noop;

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function httpRequest(backend, request) {
    return backend.createConnection(request).response;
}
function mergeOptions(defaultOpts, providedOpts, method, url) {
    var newOptions = defaultOpts;
    if (providedOpts) {
        // Hack so Dart can used named parameters
        return newOptions.merge(new RequestOptions({
            method: providedOpts.method || method,
            url: providedOpts.url || url,
            search: providedOpts.search,
            params: providedOpts.params,
            headers: providedOpts.headers,
            body: providedOpts.body,
            withCredentials: providedOpts.withCredentials,
            responseType: providedOpts.responseType
        }));
    }
    return newOptions.merge(new RequestOptions({ method: method, url: url }));
}
/**
 * Performs http requests using `XMLHttpRequest` as the default backend.
 *
 * `Http` is available as an injectable class, with methods to perform http requests. Calling
 * `request` returns an `Observable` which will emit a single {@link Response} when a
 * response is received.
 *
 * ### Example
 *
 * ```typescript
 * import {Http, HTTP_PROVIDERS} from '@angular/http';
 * import {map} from 'rxjs/operators';
 *
 * @Component({
 *   selector: 'http-app',
 *   viewProviders: [HTTP_PROVIDERS],
 *   templateUrl: 'people.html'
 * })
 * class PeopleComponent {
 *   constructor(http: Http) {
 *     http.get('people.json')
 *       // Call map on the response observable to get the parsed people object
 *       .pipe(map(res => res.json()))
 *       // Subscribe to the observable to get the parsed people object and attach it to the
 *       // component
 *       .subscribe(people => this.people = people);
 *   }
 * }
 * ```
 *
 *
 * ### Example
 *
 * ```
 * http.get('people.json').subscribe((res:Response) => this.people = res.json());
 * ```
 *
 * The default construct used to perform requests, `XMLHttpRequest`, is abstracted as a "Backend" (
 * {@link XHRBackend} in this case), which could be mocked with dependency injection by replacing
 * the {@link XHRBackend} provider, as in the following example:
 *
 * ### Example
 *
 * ```typescript
 * import {BaseRequestOptions, Http} from '@angular/http';
 * import {MockBackend} from '@angular/http/testing';
 * var injector = Injector.resolveAndCreate([
 *   BaseRequestOptions,
 *   MockBackend,
 *   {provide: Http, useFactory:
 *       function(backend, defaultOptions) {
 *         return new Http(backend, defaultOptions);
 *       },
 *       deps: [MockBackend, BaseRequestOptions]}
 * ]);
 * var http = injector.get(Http);
 * http.get('request-from-mock-backend.json').subscribe((res:Response) => doSomething(res));
 * ```
 *
 * @deprecated use @angular/common/http instead
 */
var Http = /** @class */ (function () {
    function Http(_backend, _defaultOptions) {
        this._backend = _backend;
        this._defaultOptions = _defaultOptions;
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     */
    /**
       * Performs any type of http request. First argument is required, and can either be a url or
       * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
       * object can be provided as the 2nd argument. The options object will be merged with the values
       * of {@link BaseRequestOptions} before performing the request.
       */
    Http.prototype.request = /**
       * Performs any type of http request. First argument is required, and can either be a url or
       * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
       * object can be provided as the 2nd argument. The options object will be merged with the values
       * of {@link BaseRequestOptions} before performing the request.
       */
    function (url, options) {
        var responseObservable;
        if (typeof url === 'string') {
            responseObservable = httpRequest(this._backend, new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url)));
        }
        else if (url instanceof Request) {
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    /**
     * Performs a request with `get` http method.
     */
    /**
       * Performs a request with `get` http method.
       */
    Http.prototype.get = /**
       * Performs a request with `get` http method.
       */
    function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url)));
    };
    /**
     * Performs a request with `post` http method.
     */
    /**
       * Performs a request with `post` http method.
       */
    Http.prototype.post = /**
       * Performs a request with `post` http method.
       */
    function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Post, url)));
    };
    /**
     * Performs a request with `put` http method.
     */
    /**
       * Performs a request with `put` http method.
       */
    Http.prototype.put = /**
       * Performs a request with `put` http method.
       */
    function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Put, url)));
    };
    /**
     * Performs a request with `delete` http method.
     */
    /**
       * Performs a request with `delete` http method.
       */
    Http.prototype.delete = /**
       * Performs a request with `delete` http method.
       */
    function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Delete, url)));
    };
    /**
     * Performs a request with `patch` http method.
     */
    /**
       * Performs a request with `patch` http method.
       */
    Http.prototype.patch = /**
       * Performs a request with `patch` http method.
       */
    function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Patch, url)));
    };
    /**
     * Performs a request with `head` http method.
     */
    /**
       * Performs a request with `head` http method.
       */
    Http.prototype.head = /**
       * Performs a request with `head` http method.
       */
    function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Head, url)));
    };
    /**
     * Performs a request with `options` http method.
     */
    /**
       * Performs a request with `options` http method.
       */
    Http.prototype.options = /**
       * Performs a request with `options` http method.
       */
    function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Options, url)));
    };
    Http.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    Http.ctorParameters = function () { return [
        { type: ConnectionBackend, },
        { type: RequestOptions, },
    ]; };
    return Http;
}());
/**
 * @deprecated use @angular/common/http instead
 */
var Jsonp = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(Jsonp, _super);
    function Jsonp(backend, defaultOptions) {
        return _super.call(this, backend, defaultOptions) || this;
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     *
     * @security Regular XHR is the safest alternative to JSONP for most applications, and is
     * supported by all current browsers. Because JSONP creates a `<script>` element with
     * contents retrieved from a remote source, attacker-controlled data introduced by an untrusted
     * source could expose your application to XSS risks. Data exposed by JSONP may also be
     * readable by malicious third-party websites. In addition, JSONP introduces potential risk for
     * future security issues (e.g. content sniffing).  For more detail, see the
     * [Security Guide](http://g.co/ng/security).
     */
    /**
       * Performs any type of http request. First argument is required, and can either be a url or
       * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
       * object can be provided as the 2nd argument. The options object will be merged with the values
       * of {@link BaseRequestOptions} before performing the request.
       *
       * @security Regular XHR is the safest alternative to JSONP for most applications, and is
       * supported by all current browsers. Because JSONP creates a `<script>` element with
       * contents retrieved from a remote source, attacker-controlled data introduced by an untrusted
       * source could expose your application to XSS risks. Data exposed by JSONP may also be
       * readable by malicious third-party websites. In addition, JSONP introduces potential risk for
       * future security issues (e.g. content sniffing).  For more detail, see the
       * [Security Guide](http://g.co/ng/security).
       */
    Jsonp.prototype.request = /**
       * Performs any type of http request. First argument is required, and can either be a url or
       * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
       * object can be provided as the 2nd argument. The options object will be merged with the values
       * of {@link BaseRequestOptions} before performing the request.
       *
       * @security Regular XHR is the safest alternative to JSONP for most applications, and is
       * supported by all current browsers. Because JSONP creates a `<script>` element with
       * contents retrieved from a remote source, attacker-controlled data introduced by an untrusted
       * source could expose your application to XSS risks. Data exposed by JSONP may also be
       * readable by malicious third-party websites. In addition, JSONP introduces potential risk for
       * future security issues (e.g. content sniffing).  For more detail, see the
       * [Security Guide](http://g.co/ng/security).
       */
    function (url, options) {
        var responseObservable;
        if (typeof url === 'string') {
            url =
                new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url));
        }
        if (url instanceof Request) {
            if (url.method !== RequestMethod.Get) {
                throw new Error('JSONP requests must use GET request method.');
            }
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    Jsonp.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    Jsonp.ctorParameters = function () { return [
        { type: ConnectionBackend, },
        { type: RequestOptions, },
    ]; };
    return Jsonp;
}(Http));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function _createDefaultCookieXSRFStrategy() {
    return new CookieXSRFStrategy();
}
function httpFactory(xhrBackend, requestOptions) {
    return new Http(xhrBackend, requestOptions);
}
function jsonpFactory(jsonpBackend, requestOptions) {
    return new Jsonp(jsonpBackend, requestOptions);
}
/**
 * The module that includes http's providers
 *
 * @deprecated use @angular/common/http instead
 */
var HttpModule = /** @class */ (function () {
    function HttpModule() {
    }
    HttpModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    providers: [
                        // TODO(pascal): use factory type annotations once supported in DI
                        // issue: https://github.com/angular/angular/issues/3183
                        { provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions] },
                        BrowserXhr,
                        { provide: RequestOptions, useClass: BaseRequestOptions },
                        { provide: ResponseOptions, useClass: BaseResponseOptions },
                        XHRBackend,
                        { provide: XSRFStrategy, useFactory: _createDefaultCookieXSRFStrategy },
                    ],
                },] }
    ];
    /** @nocollapse */
    HttpModule.ctorParameters = function () { return []; };
    return HttpModule;
}());
/**
 * The module that includes jsonp's providers
 *
 * @deprecated use @angular/common/http instead
 */
var JsonpModule = /** @class */ (function () {
    function JsonpModule() {
    }
    JsonpModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    providers: [
                        // TODO(pascal): use factory type annotations once supported in DI
                        // issue: https://github.com/angular/angular/issues/3183
                        { provide: Jsonp, useFactory: jsonpFactory, deps: [JSONPBackend, RequestOptions] },
                        BrowserJsonp,
                        { provide: RequestOptions, useClass: BaseRequestOptions },
                        { provide: ResponseOptions, useClass: BaseResponseOptions },
                        JSONPBackend,
                    ],
                },] }
    ];
    /** @nocollapse */
    JsonpModule.ctorParameters = function () { return []; };
    return JsonpModule;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @deprecated use @angular/common/http instead
 */
var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('6.0.3');

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=http.js.map


/***/ }),

/***/ "./node_modules/angular-notifier/esm5/angular-notifier.js":
/*!****************************************************************!*\
  !*** ./node_modules/angular-notifier/esm5/angular-notifier.js ***!
  \****************************************************************/
/*! exports provided: NotifierModule, NotifierService, ɵf, ɵh, ɵe, ɵb, ɵa, ɵc, ɵd, ɵj, ɵg, ɵi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/angular-notifier/esm5/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotifierModule", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["NotifierModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotifierService", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["NotifierService"]; });

/* harmony import */ var _src_components_notifier_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/components/notifier-container.component */ "./node_modules/angular-notifier/esm5/src/components/notifier-container.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return _src_components_notifier_container_component__WEBPACK_IMPORTED_MODULE_1__["NotifierContainerComponent"]; });

/* harmony import */ var _src_components_notifier_notification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/components/notifier-notification.component */ "./node_modules/angular-notifier/esm5/src/components/notifier-notification.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return _src_components_notifier_notification_component__WEBPACK_IMPORTED_MODULE_2__["NotifierNotificationComponent"]; });

/* harmony import */ var _src_models_notifier_config_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/models/notifier-config.model */ "./node_modules/angular-notifier/esm5/src/models/notifier-config.model.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return _src_models_notifier_config_model__WEBPACK_IMPORTED_MODULE_3__["NotifierConfig"]; });

/* harmony import */ var _src_notifier_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/notifier.module */ "./node_modules/angular-notifier/esm5/src/notifier.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return _src_notifier_module__WEBPACK_IMPORTED_MODULE_4__["NotifierConfigToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return _src_notifier_module__WEBPACK_IMPORTED_MODULE_4__["NotifierOptionsToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return _src_notifier_module__WEBPACK_IMPORTED_MODULE_4__["notifierCustomConfigFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return _src_notifier_module__WEBPACK_IMPORTED_MODULE_4__["notifierDefaultConfigFactory"]; });

/* harmony import */ var _src_services_notifier_animation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/services/notifier-animation.service */ "./node_modules/angular-notifier/esm5/src/services/notifier-animation.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return _src_services_notifier_animation_service__WEBPACK_IMPORTED_MODULE_5__["NotifierAnimationService"]; });

/* harmony import */ var _src_services_notifier_queue_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/services/notifier-queue.service */ "./node_modules/angular-notifier/esm5/src/services/notifier-queue.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return _src_services_notifier_queue_service__WEBPACK_IMPORTED_MODULE_6__["NotifierQueueService"]; });

/* harmony import */ var _src_services_notifier_timer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/services/notifier-timer.service */ "./node_modules/angular-notifier/esm5/src/services/notifier-timer.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return _src_services_notifier_timer_service__WEBPACK_IMPORTED_MODULE_7__["NotifierTimerService"]; });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */








//# sourceMappingURL=angular-notifier.js.map

/***/ }),

/***/ "./node_modules/angular-notifier/esm5/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/angular-notifier/esm5/index.js ***!
  \*****************************************************/
/*! exports provided: NotifierModule, NotifierService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_notifier_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/notifier.module */ "./node_modules/angular-notifier/esm5/src/notifier.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotifierModule", function() { return _src_notifier_module__WEBPACK_IMPORTED_MODULE_0__["NotifierModule"]; });

/* harmony import */ var _src_services_notifier_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/services/notifier.service */ "./node_modules/angular-notifier/esm5/src/services/notifier.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotifierService", function() { return _src_services_notifier_service__WEBPACK_IMPORTED_MODULE_1__["NotifierService"]; });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angular-notifier/esm5/src/animation-presets/fade.animation-preset.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/angular-notifier/esm5/src/animation-presets/fade.animation-preset.js ***!
  \*******************************************************************************************/
/*! exports provided: fade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fade", function() { return fade; });
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Fade animation preset
 */
var /** @type {?} */ fade = {
    hide: function () {
        return {
            from: {
                opacity: '1'
            },
            to: {
                opacity: '0'
            }
        };
    },
    show: function () {
        return {
            from: {
                opacity: '0'
            },
            to: {
                opacity: '1'
            }
        };
    }
};
//# sourceMappingURL=fade.animation-preset.js.map

/***/ }),

/***/ "./node_modules/angular-notifier/esm5/src/animation-presets/slide.animation-preset.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/angular-notifier/esm5/src/animation-presets/slide.animation-preset.js ***!
  \********************************************************************************************/
/*! exports provided: slide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slide", function() { return slide; });
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Slide animation preset
 */
var /** @type {?} */ slide = {
    hide: function (notification) {
        // Prepare variables
        var /** @type {?} */ config = notification.component.getConfig();
        var /** @type {?} */ shift = notification.component.getShift();
        var /** @type {?} */ from;
        var /** @type {?} */ to;
        // Configure variables, depending on configuration and component
        if (config.position.horizontal.position === 'left') {
            from = {
                transform: "translate3d( 0, " + shift + "px, 0 )"
            };
            to = {
                transform: "translate3d( calc( -100% - " + config.position.horizontal.distance + "px - 10px ), " + shift + "px, 0 )"
            };
        }
        else if (config.position.horizontal.position === 'right') {
            from = {
                transform: "translate3d( 0, " + shift + "px, 0 )"
            };
            to = {
                transform: "translate3d( calc( 100% + " + config.position.horizontal.distance + "px + 10px ), " + shift + "px, 0 )"
            };
        }
        else {
            var /** @type {?} */ horizontalPosition = void 0;
            if (config.position.vertical.position === 'top') {
                horizontalPosition = "calc( -100% - " + config.position.horizontal.distance + "px - 10px )";
            }
            else {
                horizontalPosition = "calc( 100% + " + config.position.horizontal.distance + "px + 10px )";
            }
            from = {
                transform: "translate3d( -50%, " + shift + "px, 0 )"
            };
            to = {
                transform: "translate3d( -50%, " + horizontalPosition + ", 0 )"
            };
        }
        // Done
        return {
            from: from,
            to: to
        };
    },
    show: function (notification) {
        // Prepare variables
        var /** @type {?} */ config = notification.component.getConfig();
        var /** @type {?} */ from;
        var /** @type {?} */ to;
        // Configure variables, depending on configuration and component
        if (config.position.horizontal.position === 'left') {
            from = {
                transform: "translate3d( calc( -100% - " + config.position.horizontal.distance + "px - 10px ), 0, 0 )"
            };
            to = {
                transform: 'translate3d( 0, 0, 0 )'
            };
        }
        else if (config.position.horizontal.position === 'right') {
            from = {
                transform: "translate3d( calc( 100% + " + config.position.horizontal.distance + "px + 10px ), 0, 0 )"
            };
            to = {
                transform: 'translate3d( 0, 0, 0 )'
            };
        }
        else {
            var /** @type {?} */ horizontalPosition = void 0;
            if (config.position.vertical.position === 'top') {
                horizontalPosition = "calc( -100% - " + config.position.horizontal.distance + "px - 10px )";
            }
            else {
                horizontalPosition = "calc( 100% + " + config.position.horizontal.distance + "px + 10px )";
            }
            from = {
                transform: "translate3d( -50%, " + horizontalPosition + ", 0 )"
            };
            to = {
                transform: 'translate3d( -50%, 0, 0 )'
            };
        }
        // Done
        return {
            from: from,
            to: to
        };
    }
};
//# sourceMappingURL=slide.animation-preset.js.map

/***/ }),

/***/ "./node_modules/angular-notifier/esm5/src/components/notifier-container.component.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/angular-notifier/esm5/src/components/notifier-container.component.js ***!
  \*******************************************************************************************/
/*! exports provided: NotifierContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierContainerComponent", function() { return NotifierContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_notifier_notification_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../models/notifier-notification.model */ "./node_modules/angular-notifier/esm5/src/models/notifier-notification.model.js");
/* harmony import */ var _services_notifier_queue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/notifier-queue.service */ "./node_modules/angular-notifier/esm5/src/services/notifier-queue.service.js");
/* harmony import */ var _services_notifier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/notifier.service */ "./node_modules/angular-notifier/esm5/src/services/notifier.service.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */




/**
 * Notifier container component
 * ----------------------------
 * This component acts as a wrapper for all notification components; consequently, it is responsible for creating a new notification
 * component and removing an existing notification component. Being more precicely, it also handles side effects of those actions, such as
 * shifting or even completely removing other notifications as well. Overall, this components handles actions coming from the queue service
 * by subscribing to its action stream.
 *
 * Technical sidenote:
 * This component has to be used somewhere in an application to work; it will not inject and create itself automatically, primarily in order
 * to not break the Angular AoT compilation. Moreover, this component (and also the notification components) set their change detection
 * strategy onPush, which means that we handle change detection manually in order to get the best performance. (#perfmatters)
 */
var NotifierContainerComponent = /** @class */ (function () {
    function NotifierContainerComponent(changeDetector, notifierQueueService, notifierService) {
        this.changeDetector = changeDetector;
        this.queueService = notifierQueueService;
        this.config = notifierService.getConfig();
        this.notifications = [];
    }
    /**
     * Component initialization lifecycle hook, connects this component to the action queue, and then handles incoming actions
     * @return {?}
     */
    NotifierContainerComponent.prototype.ngOnInit = /**
     * Component initialization lifecycle hook, connects this component to the action queue, and then handles incoming actions
     * @return {?}
     */
    function () {
        var _this = this;
        this.queueServiceSubscription = this.queueService.actionStream.subscribe(function (action) {
            _this.handleAction(action).then(function () {
                _this.queueService.continue();
            });
        });
    };
    /**
     * Component destroyment lifecycle hook, cleans up the observable subsciption
     * @return {?}
     */
    NotifierContainerComponent.prototype.ngOnDestroy = /**
     * Component destroyment lifecycle hook, cleans up the observable subsciption
     * @return {?}
     */
    function () {
        if (this.queueServiceSubscription) {
            this.queueServiceSubscription.unsubscribe();
        }
    };
    /**
     * Notification identifier, used as the ngFor trackby function
     *
     * @param {?} index        Index
     * @param {?} notification Notifier notification
     * @return {?} Notification ID as the unique identnfier
     */
    NotifierContainerComponent.prototype.identifyNotification = /**
     * Notification identifier, used as the ngFor trackby function
     *
     * @param {?} index        Index
     * @param {?} notification Notifier notification
     * @return {?} Notification ID as the unique identnfier
     */
    function (index, notification) {
        return notification.id;
    };
    /**
     * Event handler, handles clicks on notification dismiss buttons
     *
     * @param {?} notificationId ID of the notification to dismiss
     * @return {?}
     */
    NotifierContainerComponent.prototype.onNotificationDismiss = /**
     * Event handler, handles clicks on notification dismiss buttons
     *
     * @param {?} notificationId ID of the notification to dismiss
     * @return {?}
     */
    function (notificationId) {
        this.queueService.push({
            payload: notificationId,
            type: 'HIDE'
        });
    };
    /**
     * Event handler, handles notification ready events
     *
     * @param {?} notificationComponent Notification component reference
     * @return {?}
     */
    NotifierContainerComponent.prototype.onNotificationReady = /**
     * Event handler, handles notification ready events
     *
     * @param {?} notificationComponent Notification component reference
     * @return {?}
     */
    function (notificationComponent) {
        var /** @type {?} */ currentNotification = this.notifications[this.notifications.length - 1]; // Get the latest notification
        currentNotification.component = notificationComponent; // Save the new omponent reference
        this.continueHandleShowAction(currentNotification); // Continue with handling the show action
    };
    /**
     * Handle incoming actions by mapping action types to methods, and then running them
     *
     * @param {?} action Action object
     * @return {?} Promise, resolved when done
     */
    NotifierContainerComponent.prototype.handleAction = /**
     * Handle incoming actions by mapping action types to methods, and then running them
     *
     * @param {?} action Action object
     * @return {?} Promise, resolved when done
     */
    function (action) {
        switch (action.type) {
            // TODO: Maybe a map (actionType -> class method) is a cleaner solution here?
            case 'SHOW':
                return this.handleShowAction(action);
            case 'HIDE':
                return this.handleHideAction(action);
            case 'HIDE_OLDEST':
                return this.handleHideOldestAction(action);
            case 'HIDE_NEWEST':
                return this.handleHideNewestAction(action);
            case 'HIDE_ALL':
                return this.handleHideAllAction(action);
            default:
                return new Promise(function (resolve, reject) {
                    resolve(); // Ignore unknown action types
                });
        }
    };
    /**
     * Show a new notification
     *
     * We simply add the notification to the list, and then wait until its properly initialized / created / rendered.
     *
     * @param {?} action Action object
     * @return {?} Promise, resolved when done
     */
    NotifierContainerComponent.prototype.handleShowAction = /**
     * Show a new notification
     *
     * We simply add the notification to the list, and then wait until its properly initialized / created / rendered.
     *
     * @param {?} action Action object
     * @return {?} Promise, resolved when done
     */
    function (action) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.tempPromiseResolver = resolve; // Save the promise resolve function so that it can be called later on by another method
            _this.addNotificationToList(new _models_notifier_notification_model__WEBPACK_IMPORTED_MODULE_1__["NotifierNotification"](action.payload));
        });
    };
    /**
     * Continue to show a new notification (after the notification components is initialized / created / rendered).
     *
     * If this is the first (and thus only) notification, we can simply show it. Otherwhise, if stacking is disabled (or a low value), we
     * switch out notifications, in particular we hide the existing one, and then show our new one. Yet, if stacking is enabled, we first
     * shift all older notifications, and then show our new notification. In addition, if there are too many notification on the screen,
     * we hide the oldest one first. Furthermore, if configured, animation overlapping is applied.
     *
     * @param {?} notification New notification to show
     * @return {?}
     */
    NotifierContainerComponent.prototype.continueHandleShowAction = /**
     * Continue to show a new notification (after the notification components is initialized / created / rendered).
     *
     * If this is the first (and thus only) notification, we can simply show it. Otherwhise, if stacking is disabled (or a low value), we
     * switch out notifications, in particular we hide the existing one, and then show our new one. Yet, if stacking is enabled, we first
     * shift all older notifications, and then show our new notification. In addition, if there are too many notification on the screen,
     * we hide the oldest one first. Furthermore, if configured, animation overlapping is applied.
     *
     * @param {?} notification New notification to show
     * @return {?}
     */
    function (notification) {
        var _this = this;
        // First (which means only one) notification in the list?
        var /** @type {?} */ numberOfNotifications = this.notifications.length;
        if (numberOfNotifications === 1) {
            notification.component.show().then(this.tempPromiseResolver); // Done
        }
        else {
            var /** @type {?} */ implicitStackingLimit = 2;
            // Stacking enabled? (stacking value below 2 means stacking is disabled)
            if (this.config.behaviour.stacking === false || this.config.behaviour.stacking < implicitStackingLimit) {
                this.notifications[0].component.hide().then(function () {
                    _this.removeNotificationFromList(_this.notifications[0]);
                    notification.component.show().then(_this.tempPromiseResolver); // Done
                });
            }
            else {
                var /** @type {?} */ stepPromises_1 = [];
                // Are there now too many notifications?
                if (numberOfNotifications > this.config.behaviour.stacking) {
                    var /** @type {?} */ oldNotifications_1 = this.notifications.slice(1, numberOfNotifications - 1);
                    // Are animations enabled?
                    if (this.config.animations.enabled) {
                        // Is animation overlap enabled?
                        if (this.config.animations.overlap !== false && this.config.animations.overlap > 0) {
                            stepPromises_1.push(this.notifications[0].component.hide());
                            setTimeout(function () {
                                stepPromises_1.push(_this.shiftNotifications(oldNotifications_1, notification.component.getHeight(), true));
                            }, this.config.animations.hide.speed - this.config.animations.overlap);
                            setTimeout(function () {
                                stepPromises_1.push(notification.component.show());
                            }, this.config.animations.hide.speed + this.config.animations.shift.speed - this.config.animations.overlap);
                        }
                        else {
                            stepPromises_1.push(new Promise(function (resolve, reject) {
                                _this.notifications[0].component.hide().then(function () {
                                    _this.shiftNotifications(oldNotifications_1, notification.component.getHeight(), true).then(function () {
                                        notification.component.show().then(resolve);
                                    });
                                });
                            }));
                        }
                    }
                    else {
                        stepPromises_1.push(this.notifications[0].component.hide());
                        stepPromises_1.push(this.shiftNotifications(oldNotifications_1, notification.component.getHeight(), true));
                        stepPromises_1.push(notification.component.show());
                    }
                }
                else {
                    var /** @type {?} */ oldNotifications_2 = this.notifications.slice(0, numberOfNotifications - 1);
                    // Are animations enabled?
                    if (this.config.animations.enabled) {
                        // Is animation overlap enabled?
                        if (this.config.animations.overlap !== false && this.config.animations.overlap > 0) {
                            stepPromises_1.push(this.shiftNotifications(oldNotifications_2, notification.component.getHeight(), true));
                            setTimeout(function () {
                                stepPromises_1.push(notification.component.show());
                            }, this.config.animations.shift.speed - this.config.animations.overlap);
                        }
                        else {
                            stepPromises_1.push(new Promise(function (resolve, reject) {
                                _this.shiftNotifications(oldNotifications_2, notification.component.getHeight(), true).then(function () {
                                    notification.component.show().then(resolve);
                                });
                            }));
                        }
                    }
                    else {
                        stepPromises_1.push(this.shiftNotifications(oldNotifications_2, notification.component.getHeight(), true));
                        stepPromises_1.push(notification.component.show());
                    }
                }
                Promise.all(stepPromises_1).then(function () {
                    if (numberOfNotifications > _this.config.behaviour.stacking) {
                        _this.removeNotificationFromList(_this.notifications[0]);
                    }
                    _this.tempPromiseResolver();
                }); // Done
            }
        }
    };
    /**
     * Hide an existing notification
     *
     * Fist, we skip everything if there are no notifications at all, or the given notification does not exist. Then, we hide the given
     * notification. If there exist older notifications, we then shift them around to fill the gap. Once both hiding the given notification
     * and shifting the older notificaitons is done, the given notification gets finally removed (from the DOM).
     *
     * @param {?} action Action object, payload contains the notification ID
     * @return {?} Promise, resolved when done
     */
    NotifierContainerComponent.prototype.handleHideAction = /**
     * Hide an existing notification
     *
     * Fist, we skip everything if there are no notifications at all, or the given notification does not exist. Then, we hide the given
     * notification. If there exist older notifications, we then shift them around to fill the gap. Once both hiding the given notification
     * and shifting the older notificaitons is done, the given notification gets finally removed (from the DOM).
     *
     * @param {?} action Action object, payload contains the notification ID
     * @return {?} Promise, resolved when done
     */
    function (action) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var /** @type {?} */ stepPromises = [];
            // Does the notification exist / are there even any notifications? (let's prevent accidential errors)
            var /** @type {?} */ notification = _this.findNotificationById(action.payload);
            if (notification === undefined) {
                resolve();
                return;
            }
            // Get older notifications
            var /** @type {?} */ notificationIndex = _this.findNotificationIndexById(action.payload);
            if (notificationIndex === undefined) {
                resolve();
                return;
            }
            var /** @type {?} */ oldNotifications = _this.notifications.slice(0, notificationIndex);
            // Do older notifications exist, and thus do we need to shift other notifications as a consequence?
            if (oldNotifications.length > 0) {
                // Are animations enabled?
                if (_this.config.animations.enabled && _this.config.animations.hide.speed > 0) {
                    // Is animation overlap enabled?
                    if (_this.config.animations.overlap !== false && _this.config.animations.overlap > 0) {
                        stepPromises.push(notification.component.hide());
                        setTimeout(function () {
                            stepPromises.push(_this.shiftNotifications(oldNotifications, notification.component.getHeight(), false));
                        }, _this.config.animations.hide.speed - _this.config.animations.overlap);
                    }
                    else {
                        notification.component.hide().then(function () {
                            stepPromises.push(_this.shiftNotifications(oldNotifications, notification.component.getHeight(), false));
                        });
                    }
                }
                else {
                    stepPromises.push(notification.component.hide());
                    stepPromises.push(_this.shiftNotifications(oldNotifications, notification.component.getHeight(), false));
                }
            }
            else {
                stepPromises.push(notification.component.hide());
            }
            // Wait until both hiding and shifting is done, then remove the notification from the list
            Promise.all(stepPromises).then(function () {
                _this.removeNotificationFromList(notification);
                resolve(); // Done
            });
        });
    };
    /**
     * Hide the oldest notification (bridge to handleHideAction)
     *
     * @param {?} action Action object
     * @return {?} Promise, resolved when done
     */
    NotifierContainerComponent.prototype.handleHideOldestAction = /**
     * Hide the oldest notification (bridge to handleHideAction)
     *
     * @param {?} action Action object
     * @return {?} Promise, resolved when done
     */
    function (action) {
        // Are there any notifications? (prevent accidential errors)
        if (this.notifications.length === 0) {
            return new Promise(function (resolve, reject) {
                resolve();
            }); // Done
        }
        else {
            action.payload = this.notifications[0].id;
            return this.handleHideAction(action);
        }
    };
    /**
     * Hide the newest notification (bridge to handleHideAction)
     *
     * @param {?} action Action object
     * @return {?} Promise, resolved when done
     */
    NotifierContainerComponent.prototype.handleHideNewestAction = /**
     * Hide the newest notification (bridge to handleHideAction)
     *
     * @param {?} action Action object
     * @return {?} Promise, resolved when done
     */
    function (action) {
        // Are there any notifications? (prevent accidential errors)
        if (this.notifications.length === 0) {
            return new Promise(function (resolve, reject) {
                resolve();
            }); // Done
        }
        else {
            action.payload = this.notifications[this.notifications.length - 1].id;
            return this.handleHideAction(action);
        }
    };
    /**
     * Hide all notifications at once
     *
     * @param {?} action Action object
     * @return {?} Promise, resolved when done
     */
    NotifierContainerComponent.prototype.handleHideAllAction = /**
     * Hide all notifications at once
     *
     * @param {?} action Action object
     * @return {?} Promise, resolved when done
     */
    function (action) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // Are there any notifications? (prevent accidential errors)
            var /** @type {?} */ numberOfNotifications = _this.notifications.length;
            if (numberOfNotifications === 0) {
                resolve(); // Done
                return;
            }
            // Are animations enabled?
            if (_this.config.animations.enabled && _this.config.animations.hide.speed > 0 && _this.config.animations.hide.offset !== false &&
                _this.config.animations.hide.offset > 0) {
                var _loop_1 = function (i) {
                    var /** @type {?} */ animationOffset = _this.config.position.vertical.position === 'top' ? numberOfNotifications - 1 : i;
                    setTimeout(function () {
                        _this.notifications[i].component.hide().then(function () {
                            // Are we done here, was this the last notification to be hidden?
                            if ((_this.config.position.vertical.position === 'top' && i === 0) ||
                                (_this.config.position.vertical.position === 'bottom' && i === numberOfNotifications - 1)) {
                                _this.removeAllNotificationsFromList();
                                resolve(); // Done
                            }
                        });
                    }, _this.config.animations.hide.offset * animationOffset);
                };
                for (var /** @type {?} */ i = numberOfNotifications - 1; i >= 0; i--) {
                    _loop_1(i);
                }
            }
            else {
                var /** @type {?} */ stepPromises = [];
                for (var /** @type {?} */ i = numberOfNotifications - 1; i >= 0; i--) {
                    stepPromises.push(_this.notifications[i].component.hide());
                }
                Promise.all(stepPromises).then(function () {
                    _this.removeAllNotificationsFromList();
                    resolve(); // Done
                });
            }
        });
    };
    /**
     * Shift multiple notifications at once
     *
     * @param {?} notifications List containing the notifications to be shifted
     * @param {?} distance      Distance to shift (in px)
     * @param {?} toMakePlace   Flag, defining in which direciton to shift
     * @return {?} Promise, resolved when done
     */
    NotifierContainerComponent.prototype.shiftNotifications = /**
     * Shift multiple notifications at once
     *
     * @param {?} notifications List containing the notifications to be shifted
     * @param {?} distance      Distance to shift (in px)
     * @param {?} toMakePlace   Flag, defining in which direciton to shift
     * @return {?} Promise, resolved when done
     */
    function (notifications, distance, toMakePlace) {
        return new Promise(function (resolve, reject) {
            // Are there any notifications to shift?
            if (notifications.length === 0) {
                resolve();
                return;
            }
            var /** @type {?} */ notificationPromises = [];
            for (var /** @type {?} */ i = notifications.length - 1; i >= 0; i--) {
                notificationPromises.push(notifications[i].component.shift(distance, toMakePlace));
            }
            Promise.all(notificationPromises).then(resolve); // Done
        });
    };
    /**
     * Add a new notification to the list of notifications (triggers change detection)
     *
     * @param {?} notification Notification to add to the list of notifications
     * @return {?}
     */
    NotifierContainerComponent.prototype.addNotificationToList = /**
     * Add a new notification to the list of notifications (triggers change detection)
     *
     * @param {?} notification Notification to add to the list of notifications
     * @return {?}
     */
    function (notification) {
        this.notifications.push(notification);
        this.changeDetector.markForCheck(); // Run change detection because the notification list changed
    };
    /**
     * Remove an existing notification from the list of notifications (triggers change detection)
     *
     * @param {?} notification Notification to be removed from the list of notifications
     * @return {?}
     */
    NotifierContainerComponent.prototype.removeNotificationFromList = /**
     * Remove an existing notification from the list of notifications (triggers change detection)
     *
     * @param {?} notification Notification to be removed from the list of notifications
     * @return {?}
     */
    function (notification) {
        this.notifications =
            this.notifications.filter(function (item) { return item.component !== notification.component; });
        this.changeDetector.markForCheck(); // Run change detection because the notification list changed
    };
    /**
     * Remove all notifications from the list (triggers change detection)
     * @return {?}
     */
    NotifierContainerComponent.prototype.removeAllNotificationsFromList = /**
     * Remove all notifications from the list (triggers change detection)
     * @return {?}
     */
    function () {
        this.notifications = [];
        this.changeDetector.markForCheck(); // Run change detection because the notification list changed
    };
    /**
     * Helper: Find a notification in the notification list by a given notification ID
     *
     * @param {?} notificationId Notification ID, used for finding notification
     * @return {?} Notification, undefined if not found
     */
    NotifierContainerComponent.prototype.findNotificationById = /**
     * Helper: Find a notification in the notification list by a given notification ID
     *
     * @param {?} notificationId Notification ID, used for finding notification
     * @return {?} Notification, undefined if not found
     */
    function (notificationId) {
        return this.notifications.find(function (currentNotification) { return currentNotification.id === notificationId; });
    };
    /**
     * Helper: Find a notification's index by a given notification ID
     *
     * @param {?} notificationId Notification ID, used for finding a notification's index
     * @return {?} Notification index, undefined if not found
     */
    NotifierContainerComponent.prototype.findNotificationIndexById = /**
     * Helper: Find a notification's index by a given notification ID
     *
     * @param {?} notificationId Notification ID, used for finding a notification's index
     * @return {?} Notification index, undefined if not found
     */
    function (notificationId) {
        var /** @type {?} */ notificationIndex = this.notifications.findIndex(function (currentNotification) { return currentNotification.id === notificationId; });
        return (notificationIndex !== -1 ? notificationIndex : undefined);
    };
    NotifierContainerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    // (#perfmatters)
                    host: {
                        class: 'notifier__container'
                    },
                    selector: 'notifier-container',
                    template: '<ul><li *ngFor="let notification of notifications; trackBy: identifyNotification;" class="notifier__container-list"><notifier-notification (dismiss)="onNotificationDismiss( $event )" (ready)="onNotificationReady( $event )" [notification]="notification"></notifier-notification></ul>'
                },] },
    ];
    /** @nocollapse */
    NotifierContainerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _services_notifier_queue_service__WEBPACK_IMPORTED_MODULE_2__["NotifierQueueService"] },
        { type: _services_notifier_service__WEBPACK_IMPORTED_MODULE_3__["NotifierService"] }
    ]; };
    return NotifierContainerComponent;
}());

function NotifierContainerComponent_tsickle_Closure_declarations() {
    /**
     * List of currently somewhat active notifications
     * @type {?}
     */
    NotifierContainerComponent.prototype.notifications;
    /**
     * Change detector
     * @type {?}
     */
    NotifierContainerComponent.prototype.changeDetector;
    /**
     * Notifier queue service
     * @type {?}
     */
    NotifierContainerComponent.prototype.queueService;
    /**
     * Notifier configuration
     * @type {?}
     */
    NotifierContainerComponent.prototype.config;
    /**
     * Queue service observable subscription (saved for cleanup)
     * @type {?}
     */
    NotifierContainerComponent.prototype.queueServiceSubscription;
    /**
     * Promise resolve function reference, temporarily used while the notification child component gets created
     * @type {?}
     */
    NotifierContainerComponent.prototype.tempPromiseResolver;
}
//# sourceMappingURL=notifier-container.component.js.map

/***/ }),

/***/ "./node_modules/angular-notifier/esm5/src/components/notifier-notification.component.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/angular-notifier/esm5/src/components/notifier-notification.component.js ***!
  \**********************************************************************************************/
/*! exports provided: NotifierNotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierNotificationComponent", function() { return NotifierNotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_notifier_animation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/notifier-animation.service */ "./node_modules/angular-notifier/esm5/src/services/notifier-animation.service.js");
/* harmony import */ var _models_notifier_notification_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../models/notifier-notification.model */ "./node_modules/angular-notifier/esm5/src/models/notifier-notification.model.js");
/* harmony import */ var _services_notifier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/notifier.service */ "./node_modules/angular-notifier/esm5/src/services/notifier.service.js");
/* harmony import */ var _services_notifier_timer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/notifier-timer.service */ "./node_modules/angular-notifier/esm5/src/services/notifier-timer.service.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */





/**
 * Notifier notification component
 * -------------------------------
 * This component is responsible for actually displaying the notification on screen. In addition, it's able to show and hide this
 * notification, in particular to animate this notification in and out, as well as shift (move) this notification vertically around.
 * Furthermore, the notification component handles all interactions the user has with this notification / component, such as clicks and
 * mouse movements.
 */
var NotifierNotificationComponent = /** @class */ (function () {
    function NotifierNotificationComponent(elementRef, renderer, notifierService, notifierTimerService, notifierAnimationService) {
        this.config = notifierService.getConfig();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dismiss = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.timerService = notifierTimerService;
        this.animationService = notifierAnimationService;
        this.renderer = renderer;
        this.element = elementRef.nativeElement;
        this.elementShift = 0;
    }
    /**
     * Component after view init lifecycle hook, setts up the component and then emits the ready event
     * @return {?}
     */
    NotifierNotificationComponent.prototype.ngAfterViewInit = /**
     * Component after view init lifecycle hook, setts up the component and then emits the ready event
     * @return {?}
     */
    function () {
        this.setup();
        this.elementHeight = this.element.offsetHeight;
        this.elementWidth = this.element.offsetWidth;
        this.ready.emit(this);
    };
    /**
     * Get the notifier config
     *
     * @return {?} Notifier configuration
     */
    NotifierNotificationComponent.prototype.getConfig = /**
     * Get the notifier config
     *
     * @return {?} Notifier configuration
     */
    function () {
        return this.config;
    };
    /**
     * Get notification element height (in px)
     *
     * @return {?} Notification element height (in px)
     */
    NotifierNotificationComponent.prototype.getHeight = /**
     * Get notification element height (in px)
     *
     * @return {?} Notification element height (in px)
     */
    function () {
        return this.elementHeight;
    };
    /**
     * Get notification element width (in px)
     *
     * @return {?} Notification element height (in px)
     */
    NotifierNotificationComponent.prototype.getWidth = /**
     * Get notification element width (in px)
     *
     * @return {?} Notification element height (in px)
     */
    function () {
        return this.elementWidth;
    };
    /**
     * Get notification shift offset (in px)
     *
     * @return {?} Notification element shift offset (in px)
     */
    NotifierNotificationComponent.prototype.getShift = /**
     * Get notification shift offset (in px)
     *
     * @return {?} Notification element shift offset (in px)
     */
    function () {
        return this.elementShift;
    };
    /**
     * Show (animate in) this notification
     *
     * @return {?} Promise, resolved when done
     */
    NotifierNotificationComponent.prototype.show = /**
     * Show (animate in) this notification
     *
     * @return {?} Promise, resolved when done
     */
    function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // Are animations enabled?
            if (_this.config.animations.enabled && _this.config.animations.show.speed > 0) {
                // Get animation data
                var /** @type {?} */ animationData = _this.animationService.getAnimationData('show', _this.notification);
                // Set initial styles (styles before animation), prevents quick flicker when animation starts
                var /** @type {?} */ animatedProperties = Object.keys(animationData.keyframes[0]);
                for (var /** @type {?} */ i = animatedProperties.length - 1; i >= 0; i--) {
                    _this.renderer.setStyle(_this.element, animatedProperties[i], animationData.keyframes[0][animatedProperties[i]]);
                }
                // Animate notification in
                // Animate notification in
                _this.renderer.setStyle(_this.element, 'visibility', 'visible');
                var /** @type {?} */ animation = _this.element.animate(animationData.keyframes, animationData.options);
                animation.onfinish = function () {
                    _this.startAutoHideTimer();
                    resolve(); // Done
                };
            }
            else {
                // Show notification
                // Show notification
                _this.renderer.setStyle(_this.element, 'visibility', 'visible');
                _this.startAutoHideTimer();
                resolve(); // Done
            }
        });
    };
    /**
     * Hide (animate out) this notification
     *
     * @return {?} Promise, resolved when done
     */
    NotifierNotificationComponent.prototype.hide = /**
     * Hide (animate out) this notification
     *
     * @return {?} Promise, resolved when done
     */
    function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.stopAutoHideTimer();
            // Are animations enabled?
            if (_this.config.animations.enabled && _this.config.animations.hide.speed > 0) {
                var /** @type {?} */ animationData = _this.animationService.getAnimationData('hide', _this.notification);
                var /** @type {?} */ animation = _this.element.animate(animationData.keyframes, animationData.options);
                animation.onfinish = function () {
                    resolve(); // Done
                };
            }
            else {
                resolve(); // Done
            }
        });
    };
    /**
     * Shift (move) this notification
     *
     * @param {?} distance         Distance to shift (in px)
     * @param {?} shiftToMakePlace Flag, defining in which direction to shift
     * @return {?} Promise, resolved when done
     */
    NotifierNotificationComponent.prototype.shift = /**
     * Shift (move) this notification
     *
     * @param {?} distance         Distance to shift (in px)
     * @param {?} shiftToMakePlace Flag, defining in which direction to shift
     * @return {?} Promise, resolved when done
     */
    function (distance, shiftToMakePlace) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // Calculate new position (position after the shift)
            var /** @type {?} */ newElementShift;
            if ((_this.config.position.vertical.position === 'top' && shiftToMakePlace)
                || (_this.config.position.vertical.position === 'bottom' && !shiftToMakePlace)) {
                newElementShift = _this.elementShift + distance + _this.config.position.vertical.gap;
            }
            else {
                newElementShift = _this.elementShift - distance - _this.config.position.vertical.gap;
            }
            var /** @type {?} */ horizontalPosition = _this.config.position.horizontal.position === 'middle' ? '-50%' : '0';
            // Are animations enabled?
            if (_this.config.animations.enabled && _this.config.animations.shift.speed > 0) {
                var /** @type {?} */ animationData = {
                    // TODO: Extract into animation service
                    keyframes: [
                        {
                            transform: "translate3d( " + horizontalPosition + ", " + _this.elementShift + "px, 0 )"
                        },
                        {
                            transform: "translate3d( " + horizontalPosition + ", " + newElementShift + "px, 0 )"
                        }
                    ],
                    options: {
                        duration: _this.config.animations.shift.speed,
                        easing: _this.config.animations.shift.easing,
                        fill: 'forwards'
                    }
                };
                _this.elementShift = newElementShift;
                var /** @type {?} */ animation = _this.element.animate(animationData.keyframes, animationData.options);
                animation.onfinish = function () {
                    resolve(); // Done
                };
            }
            else {
                _this.renderer.setStyle(_this.element, 'transform', "translate3d( " + horizontalPosition + ", " + newElementShift + "px, 0 )");
                _this.elementShift = newElementShift;
                resolve(); // Done
            }
        });
    };
    /**
     * Handle click on dismiss button
     * @return {?}
     */
    NotifierNotificationComponent.prototype.onClickDismiss = /**
     * Handle click on dismiss button
     * @return {?}
     */
    function () {
        this.dismiss.emit(this.notification.id);
    };
    /**
     * Handle mouseover over notification area
     * @return {?}
     */
    NotifierNotificationComponent.prototype.onNotificationMouseover = /**
     * Handle mouseover over notification area
     * @return {?}
     */
    function () {
        if (this.config.behaviour.onMouseover === 'pauseAutoHide') {
            this.pauseAutoHideTimer();
        }
        else if (this.config.behaviour.onMouseover === 'resetAutoHide') {
            this.stopAutoHideTimer();
        }
    };
    /**
     * Handle mouseout from notification area
     * @return {?}
     */
    NotifierNotificationComponent.prototype.onNotificationMouseout = /**
     * Handle mouseout from notification area
     * @return {?}
     */
    function () {
        if (this.config.behaviour.onMouseover === 'pauseAutoHide') {
            this.continueAutoHideTimer();
        }
        else if (this.config.behaviour.onMouseover === 'resetAutoHide') {
            this.startAutoHideTimer();
        }
    };
    /**
     * Handle click on notification area
     * @return {?}
     */
    NotifierNotificationComponent.prototype.onNotificationClick = /**
     * Handle click on notification area
     * @return {?}
     */
    function () {
        if (this.config.behaviour.onClick === 'hide') {
            this.onClickDismiss();
        }
    };
    /**
     * Start the auto hide timer (if enabled)
     * @return {?}
     */
    NotifierNotificationComponent.prototype.startAutoHideTimer = /**
     * Start the auto hide timer (if enabled)
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.config.behaviour.autoHide !== false && this.config.behaviour.autoHide > 0) {
            this.timerService.start(this.config.behaviour.autoHide).then(function () {
                _this.onClickDismiss();
            });
        }
    };
    /**
     * Pause the auto hide timer (if enabled)
     * @return {?}
     */
    NotifierNotificationComponent.prototype.pauseAutoHideTimer = /**
     * Pause the auto hide timer (if enabled)
     * @return {?}
     */
    function () {
        if (this.config.behaviour.autoHide !== false && this.config.behaviour.autoHide > 0) {
            this.timerService.pause();
        }
    };
    /**
     * Continue the auto hide timer (if enabled)
     * @return {?}
     */
    NotifierNotificationComponent.prototype.continueAutoHideTimer = /**
     * Continue the auto hide timer (if enabled)
     * @return {?}
     */
    function () {
        if (this.config.behaviour.autoHide !== false && this.config.behaviour.autoHide > 0) {
            this.timerService.continue();
        }
    };
    /**
     * Stop the auto hide timer (if enabled)
     * @return {?}
     */
    NotifierNotificationComponent.prototype.stopAutoHideTimer = /**
     * Stop the auto hide timer (if enabled)
     * @return {?}
     */
    function () {
        if (this.config.behaviour.autoHide !== false && this.config.behaviour.autoHide > 0) {
            this.timerService.stop();
        }
    };
    /**
     * Initial notification setup
     * @return {?}
     */
    NotifierNotificationComponent.prototype.setup = /**
     * Initial notification setup
     * @return {?}
     */
    function () {
        // Set start position (initially the exact same for every new notification)
        if (this.config.position.horizontal.position === 'left') {
            this.renderer.setStyle(this.element, 'left', this.config.position.horizontal.distance + "px");
        }
        else if (this.config.position.horizontal.position === 'right') {
            this.renderer.setStyle(this.element, 'right', this.config.position.horizontal.distance + "px");
        }
        else {
            this.renderer.setStyle(this.element, 'left', '50%');
            // Let's get the GPU handle some work as well (#perfmatters)
            this.renderer.setStyle(this.element, 'transform', 'translate3d( -50%, 0, 0 )');
        }
        if (this.config.position.vertical.position === 'top') {
            this.renderer.setStyle(this.element, 'top', this.config.position.vertical.distance + "px");
        }
        else {
            this.renderer.setStyle(this.element, 'bottom', this.config.position.vertical.distance + "px");
        }
        // Add classes (responsible for visual design)
        this.renderer.addClass(this.element, "notifier__notification--" + this.notification.type);
        this.renderer.addClass(this.element, "notifier__notification--" + this.config.theme);
    };
    NotifierNotificationComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    // (#perfmatters)
                    host: {
                        '(click)': 'onNotificationClick()',
                        '(mouseout)': 'onNotificationMouseout()',
                        '(mouseover)': 'onNotificationMouseover()',
                        class: 'notifier__notification'
                    },
                    providers: [
                        _services_notifier_timer_service__WEBPACK_IMPORTED_MODULE_4__["NotifierTimerService"]
                    ],
                    selector: 'notifier-notification',
                    template: '<p class="notifier__notification-message">{{ notification.message }}</p><button (click)="onClickDismiss()" *ngIf="config.behaviour.showDismissButton" class="notifier__notification-button" title="dismiss" type="button"><svg class="notifier__notification-button-icon" height="20" viewBox="0 0 24 24" width="20"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></button>'
                },] },
    ];
    /** @nocollapse */
    NotifierNotificationComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _services_notifier_service__WEBPACK_IMPORTED_MODULE_3__["NotifierService"] },
        { type: _services_notifier_timer_service__WEBPACK_IMPORTED_MODULE_4__["NotifierTimerService"] },
        { type: _services_notifier_animation_service__WEBPACK_IMPORTED_MODULE_1__["NotifierAnimationService"] }
    ]; };
    NotifierNotificationComponent.propDecorators = {
        notification: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        dismiss: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return NotifierNotificationComponent;
}());

function NotifierNotificationComponent_tsickle_Closure_declarations() {
    /**
     * Input: Notification object, contains all details necessary to construct the notification
     * @type {?}
     */
    NotifierNotificationComponent.prototype.notification;
    /**
     * Output: Ready event, handles the initialization success by emitting a reference to this notification component
     * @type {?}
     */
    NotifierNotificationComponent.prototype.ready;
    /**
     * Output: Dismiss event, handles the click on the dismiss button by emitting the notification ID of this notification component
     * @type {?}
     */
    NotifierNotificationComponent.prototype.dismiss;
    /**
     * Notifier configuration
     * @type {?}
     */
    NotifierNotificationComponent.prototype.config;
    /**
     * Notifier timer service
     * @type {?}
     */
    NotifierNotificationComponent.prototype.timerService;
    /**
     * Notifier animation service
     * @type {?}
     */
    NotifierNotificationComponent.prototype.animationService;
    /**
     * Angular renderer, used to preserve the overall DOM abstraction & independence
     * @type {?}
     */
    NotifierNotificationComponent.prototype.renderer;
    /**
     * Native element reference, used for manipulating DOM properties
     * @type {?}
     */
    NotifierNotificationComponent.prototype.element;
    /**
     * Current notification height, calculated and cached here (#perfmatters)
     * @type {?}
     */
    NotifierNotificationComponent.prototype.elementHeight;
    /**
     * Current notification width, calculated and cached here (#perfmatters)
     * @type {?}
     */
    NotifierNotificationComponent.prototype.elementWidth;
    /**
     * Current notification shift, calculated and cached here (#perfmatters)
     * @type {?}
     */
    NotifierNotificationComponent.prototype.elementShift;
}
//# sourceMappingURL=notifier-notification.component.js.map

/***/ }),

/***/ "./node_modules/angular-notifier/esm5/src/models/notifier-config.model.js":
/*!********************************************************************************!*\
  !*** ./node_modules/angular-notifier/esm5/src/models/notifier-config.model.js ***!
  \********************************************************************************/
/*! exports provided: NotifierOptions, NotifierConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierOptions", function() { return NotifierOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierConfig", function() { return NotifierConfig; });
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
function NotifierOptions() { }
function NotifierOptions_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    NotifierOptions.prototype.animations;
    /** @type {?|undefined} */
    NotifierOptions.prototype.behaviour;
    /** @type {?|undefined} */
    NotifierOptions.prototype.position;
    /** @type {?|undefined} */
    NotifierOptions.prototype.theme;
}
/**
 * Notifier configuration
 *
 * The notifier configuration defines what notifications look like, how they behave, and how they get animated. It is a global
 * configuration, which means that it only can be set once (at the beginning), and cannot be changed afterwards. Aligning to the world of
 * Angular, this configuration can be provided in the root app module - alternatively, a meaningful default configuration will be used.
 */
var /**
 * Notifier configuration
 *
 * The notifier configuration defines what notifications look like, how they behave, and how they get animated. It is a global
 * configuration, which means that it only can be set once (at the beginning), and cannot be changed afterwards. Aligning to the world of
 * Angular, this configuration can be provided in the root app module - alternatively, a meaningful default configuration will be used.
 */
NotifierConfig = /** @class */ (function () {
    function NotifierConfig(customOptions) {
        if (customOptions === void 0) { customOptions = {}; }
        // Set default values
        this.animations = {
            enabled: true,
            hide: {
                easing: 'ease',
                offset: 50,
                preset: 'fade',
                speed: 300
            },
            overlap: 150,
            shift: {
                easing: 'ease',
                speed: 300
            },
            show: {
                easing: 'ease',
                preset: 'slide',
                speed: 300
            }
        };
        this.behaviour = {
            autoHide: 7000,
            onClick: false,
            onMouseover: 'pauseAutoHide',
            showDismissButton: true,
            stacking: 4
        };
        this.position = {
            horizontal: {
                distance: 12,
                position: 'left'
            },
            vertical: {
                distance: 12,
                gap: 10,
                position: 'bottom'
            }
        };
        this.theme = 'material';
        // The following merges the custom options into the notifier config, respecting the already set default values
        // This linear, more explicit and code-sizy workflow is preferred here over a recursive one (because we know the object structure)
        // Technical sidenote: Objects are merged, other types of values simply overwritten / copied
        if (customOptions.theme !== undefined) {
            this.theme = customOptions.theme;
        }
        if (customOptions.animations !== undefined) {
            if (customOptions.animations.enabled !== undefined) {
                this.animations.enabled = customOptions.animations.enabled;
            }
            if (customOptions.animations.overlap !== undefined) {
                this.animations.overlap = customOptions.animations.overlap;
            }
            if (customOptions.animations.hide !== undefined) {
                Object.assign(this.animations.hide, customOptions.animations.hide);
            }
            if (customOptions.animations.shift !== undefined) {
                Object.assign(this.animations.shift, customOptions.animations.shift);
            }
            if (customOptions.animations.show !== undefined) {
                Object.assign(this.animations.show, customOptions.animations.show);
            }
        }
        if (customOptions.behaviour !== undefined) {
            Object.assign(this.behaviour, customOptions.behaviour);
        }
        if (customOptions.position !== undefined) {
            if (customOptions.position.horizontal !== undefined) {
                Object.assign(this.position.horizontal, customOptions.position.horizontal);
            }
            if (customOptions.position.vertical !== undefined) {
                Object.assign(this.position.vertical, customOptions.position.vertical);
            }
        }
    }
    return NotifierConfig;
}());
/**
 * Notifier configuration
 *
 * The notifier configuration defines what notifications look like, how they behave, and how they get animated. It is a global
 * configuration, which means that it only can be set once (at the beginning), and cannot be changed afterwards. Aligning to the world of
 * Angular, this configuration can be provided in the root app module - alternatively, a meaningful default configuration will be used.
 */

function NotifierConfig_tsickle_Closure_declarations() {
    /**
     * Customize animations
     * @type {?}
     */
    NotifierConfig.prototype.animations;
    /**
     * Customize behaviour
     * @type {?}
     */
    NotifierConfig.prototype.behaviour;
    /**
     * Customize positioning
     * @type {?}
     */
    NotifierConfig.prototype.position;
    /**
     * Customize theming
     * @type {?}
     */
    NotifierConfig.prototype.theme;
}
//# sourceMappingURL=notifier-config.model.js.map

/***/ }),

/***/ "./node_modules/angular-notifier/esm5/src/models/notifier-notification.model.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/angular-notifier/esm5/src/models/notifier-notification.model.js ***!
  \**************************************************************************************/
/*! exports provided: NotifierNotification, NotifierNotificationOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierNotification", function() { return NotifierNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierNotificationOptions", function() { return NotifierNotificationOptions; });
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Notification
 *
 * This class describes the structure of a notifiction, including all information it needs to live, and everyone else needs to work with it.
 */
var /**
 * Notification
 *
 * This class describes the structure of a notifiction, including all information it needs to live, and everyone else needs to work with it.
 */
NotifierNotification = /** @class */ (function () {
    function NotifierNotification(options) {
        Object.assign(this, options);
        // If not set manually, we have to create a unique notification ID by ourselves. The ID generation relies on the current browser
        // datetime in ms, in praticular the moment this notification gets constructed. Concurrency, and thus two IDs being the exact same,
        // is not possible due to the action queue concept.
        if (options.id === undefined) {
            this.id = "ID_" + new Date().getTime();
        }
    }
    return NotifierNotification;
}());
/**
 * Notification
 *
 * This class describes the structure of a notifiction, including all information it needs to live, and everyone else needs to work with it.
 */

function NotifierNotification_tsickle_Closure_declarations() {
    /**
     * Unique notification ID, can be set manually to control the notification from outside later on
     * @type {?}
     */
    NotifierNotification.prototype.id;
    /**
     * Notification type, will be used for constructing an appropriate class name
     * @type {?}
     */
    NotifierNotification.prototype.type;
    /**
     * Notification message
     * @type {?}
     */
    NotifierNotification.prototype.message;
    /**
     * Component reference of this notification, created and set during creation time
     * @type {?}
     */
    NotifierNotification.prototype.component;
}
/**
 * Notifiction options
 *
 * This interface describes which information are needed to create a new notification, or in other words, which information the external API
 * call must provide.
 * @record
 */
function NotifierNotificationOptions() { }
function NotifierNotificationOptions_tsickle_Closure_declarations() {
    /**
     * Notification ID, optional
     * @type {?|undefined}
     */
    NotifierNotificationOptions.prototype.id;
    /**
     * Notification type
     * @type {?}
     */
    NotifierNotificationOptions.prototype.type;
    /**
     * Notificatin message
     * @type {?}
     */
    NotifierNotificationOptions.prototype.message;
}
//# sourceMappingURL=notifier-notification.model.js.map

/***/ }),

/***/ "./node_modules/angular-notifier/esm5/src/notifier.module.js":
/*!*******************************************************************!*\
  !*** ./node_modules/angular-notifier/esm5/src/notifier.module.js ***!
  \*******************************************************************/
/*! exports provided: NotifierOptionsToken, NotifierConfigToken, notifierCustomConfigFactory, notifierDefaultConfigFactory, NotifierModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierOptionsToken", function() { return NotifierOptionsToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierConfigToken", function() { return NotifierConfigToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifierCustomConfigFactory", function() { return notifierCustomConfigFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifierDefaultConfigFactory", function() { return notifierDefaultConfigFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierModule", function() { return NotifierModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_notifier_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/notifier-container.component */ "./node_modules/angular-notifier/esm5/src/components/notifier-container.component.js");
/* harmony import */ var _components_notifier_notification_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/notifier-notification.component */ "./node_modules/angular-notifier/esm5/src/components/notifier-notification.component.js");
/* harmony import */ var _models_notifier_config_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/notifier-config.model */ "./node_modules/angular-notifier/esm5/src/models/notifier-config.model.js");
/* harmony import */ var _services_notifier_animation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/notifier-animation.service */ "./node_modules/angular-notifier/esm5/src/services/notifier-animation.service.js");
/* harmony import */ var _services_notifier_queue_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/notifier-queue.service */ "./node_modules/angular-notifier/esm5/src/services/notifier-queue.service.js");
/* harmony import */ var _services_notifier_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/notifier.service */ "./node_modules/angular-notifier/esm5/src/services/notifier.service.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */








/**
 * Injection Token for notifier options
 */
var /** @type {?} */ NotifierOptionsToken = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('[angular-notifier] Notifier Options');
/**
 * Injection Token for notifier configuration
 */
var /** @type {?} */ NotifierConfigToken = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('[anuglar-notifier] Notifier Config');
/**
 * Factory for a notifier configuration with custom options
 *
 * Sidenote:
 * Required as Angular AoT compilation cannot handle dynamic functions; see <https://github.com/angular/angular/issues/11262>.
 *
 * @param {?} options - Custom notifier options
 * @return {?} - Notifier configuration as result
 */
function notifierCustomConfigFactory(options) {
    return new _models_notifier_config_model__WEBPACK_IMPORTED_MODULE_4__["NotifierConfig"](options);
}
/**
 * Factory for a notifier configuration with default options
 *
 * Sidenote:
 * Required as Angular AoT compilation cannot handle dynamic functions; see <https://github.com/angular/angular/issues/11262>.
 *
 * @return {?} - Notifier configuration as result
 */
function notifierDefaultConfigFactory() {
    return new _models_notifier_config_model__WEBPACK_IMPORTED_MODULE_4__["NotifierConfig"]({});
}
/**
 * Notifier module
 */
var NotifierModule = /** @class */ (function () {
    function NotifierModule() {
    }
    /**
     * Setup the notifier module with custom providers, in this case with a custom configuration based on the givne options
     *
     * @param {?=} options
     * @return {?} - Notifier module with custom providers
     */
    NotifierModule.withConfig = /**
     * Setup the notifier module with custom providers, in this case with a custom configuration based on the givne options
     *
     * @param {?=} options
     * @return {?} - Notifier module with custom providers
     */
    function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: NotifierModule,
            providers: [
                // Provide the options itself upfront (as we need to inject them as dependencies -- see below)
                {
                    provide: NotifierOptionsToken,
                    useValue: options
                },
                // Provide a custom notifier configuration, based on the given notifier options
                {
                    deps: [
                        NotifierOptionsToken
                    ],
                    provide: NotifierConfigToken,
                    useFactory: notifierCustomConfigFactory
                }
            ]
        };
    };
    NotifierModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [
                        _components_notifier_container_component__WEBPACK_IMPORTED_MODULE_2__["NotifierContainerComponent"],
                        _components_notifier_notification_component__WEBPACK_IMPORTED_MODULE_3__["NotifierNotificationComponent"]
                    ],
                    exports: [
                        _components_notifier_container_component__WEBPACK_IMPORTED_MODULE_2__["NotifierContainerComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
                    ],
                    providers: [
                        _services_notifier_animation_service__WEBPACK_IMPORTED_MODULE_5__["NotifierAnimationService"],
                        _services_notifier_service__WEBPACK_IMPORTED_MODULE_7__["NotifierService"],
                        _services_notifier_queue_service__WEBPACK_IMPORTED_MODULE_6__["NotifierQueueService"],
                        // Provide the default notifier configuration if just the module is imported
                        {
                            provide: NotifierConfigToken,
                            useFactory: notifierDefaultConfigFactory
                        }
                    ]
                },] },
    ];
    return NotifierModule;
}());

//# sourceMappingURL=notifier.module.js.map

/***/ }),

/***/ "./node_modules/angular-notifier/esm5/src/services/notifier-animation.service.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/angular-notifier/esm5/src/services/notifier-animation.service.js ***!
  \***************************************************************************************/
/*! exports provided: NotifierAnimationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierAnimationService", function() { return NotifierAnimationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animation_presets_fade_animation_preset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../animation-presets/fade.animation-preset */ "./node_modules/angular-notifier/esm5/src/animation-presets/fade.animation-preset.js");
/* harmony import */ var _animation_presets_slide_animation_preset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../animation-presets/slide.animation-preset */ "./node_modules/angular-notifier/esm5/src/animation-presets/slide.animation-preset.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



/**
 * Notifier animation service
 */
var NotifierAnimationService = /** @class */ (function () {
    function NotifierAnimationService() {
        this.animationPresets = {
            fade: _animation_presets_fade_animation_preset__WEBPACK_IMPORTED_MODULE_1__["fade"],
            slide: _animation_presets_slide_animation_preset__WEBPACK_IMPORTED_MODULE_2__["slide"]
        };
    }
    /**
     * Get animation data
     *
     * This method generates all data the Web Animations API needs to animate our notification. The result depends on both the animation
     * direction (either in or out) as well as the notifications (and its attributes) itself.
     *
     * @param {?} direction    Animation direction, either in or out
     * @param {?} notification Notification the animation data should be generated for
     * @return {?} Animation information
     */
    NotifierAnimationService.prototype.getAnimationData = /**
     * Get animation data
     *
     * This method generates all data the Web Animations API needs to animate our notification. The result depends on both the animation
     * direction (either in or out) as well as the notifications (and its attributes) itself.
     *
     * @param {?} direction    Animation direction, either in or out
     * @param {?} notification Notification the animation data should be generated for
     * @return {?} Animation information
     */
    function (direction, notification) {
        // Get all necessary animation data
        var /** @type {?} */ keyframes;
        var /** @type {?} */ duration;
        var /** @type {?} */ easing;
        if (direction === 'show') {
            keyframes = this.animationPresets[notification.component.getConfig().animations.show.preset].show(notification);
            duration = notification.component.getConfig().animations.show.speed;
            easing = notification.component.getConfig().animations.show.easing;
        }
        else {
            keyframes = this.animationPresets[notification.component.getConfig().animations.hide.preset].hide(notification);
            duration = notification.component.getConfig().animations.hide.speed;
            easing = notification.component.getConfig().animations.hide.easing;
        }
        // Build and return animation data
        return {
            keyframes: [
                keyframes.from,
                keyframes.to
            ],
            options: {
                duration: duration,
                easing: easing,
                fill: 'forwards' // Keep the newly painted state after the animation finished
            }
        };
    };
    NotifierAnimationService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NotifierAnimationService.ctorParameters = function () { return []; };
    return NotifierAnimationService;
}());

function NotifierAnimationService_tsickle_Closure_declarations() {
    /**
     * List of animation presets (currently static)
     * @type {?}
     */
    NotifierAnimationService.prototype.animationPresets;
}
//# sourceMappingURL=notifier-animation.service.js.map

/***/ }),

/***/ "./node_modules/angular-notifier/esm5/src/services/notifier-queue.service.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/angular-notifier/esm5/src/services/notifier-queue.service.js ***!
  \***********************************************************************************/
/*! exports provided: NotifierQueueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierQueueService", function() { return NotifierQueueService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


/**
 * Notifier queue service
 *
 * In general, API calls don't get processed right away. Instead, we have to queue them up in order to prevent simultanious API calls
 * interfering with each other. This, at least in theory, is possible at any time. In particular, animations - which potentially overlap -
 * can cause changes in JS classes as well as affect the DOM. Therefore, the queue service takes all actions, puts them in a queue, and
 * processes them at the right time (which is when the previous action has been processed successfully).
 *
 * Technical sidenote:
 * An action looks pretty similar to the ones within the Flux / Redux pattern.
 */
var NotifierQueueService = /** @class */ (function () {
    function NotifierQueueService() {
        this.actionStream = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.actionQueue = [];
        this.isActionInProgress = false;
    }
    /**
     * Push a new action to the queue, and try to run it
     *
     * @param {?} action Action object
     * @return {?}
     */
    NotifierQueueService.prototype.push = /**
     * Push a new action to the queue, and try to run it
     *
     * @param {?} action Action object
     * @return {?}
     */
    function (action) {
        this.actionQueue.push(action);
        this.tryToRunNextAction();
    };
    /**
     * Continue with the next action (called when the current action is finished)
     * @return {?}
     */
    NotifierQueueService.prototype.continue = /**
     * Continue with the next action (called when the current action is finished)
     * @return {?}
     */
    function () {
        this.isActionInProgress = false;
        this.tryToRunNextAction();
    };
    /**
     * Try to run the next action in the queue; we skip if there already is some action in progress, or if there is no action left
     * @return {?}
     */
    NotifierQueueService.prototype.tryToRunNextAction = /**
     * Try to run the next action in the queue; we skip if there already is some action in progress, or if there is no action left
     * @return {?}
     */
    function () {
        if (this.isActionInProgress || this.actionQueue.length === 0) {
            return; // Skip (the queue can now go drink a coffee as it has nothing to do anymore)
        }
        this.isActionInProgress = true;
        this.actionStream.next(this.actionQueue.shift()); // Push next action to the stream, and remove the current action from the queue
    };
    NotifierQueueService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NotifierQueueService.ctorParameters = function () { return []; };
    return NotifierQueueService;
}());

function NotifierQueueService_tsickle_Closure_declarations() {
    /**
     * Stream of actions, subscribable from outside
     * @type {?}
     */
    NotifierQueueService.prototype.actionStream;
    /**
     * Queue of actions
     * @type {?}
     */
    NotifierQueueService.prototype.actionQueue;
    /**
     * Flag, true if some action is currently in progress
     * @type {?}
     */
    NotifierQueueService.prototype.isActionInProgress;
}
//# sourceMappingURL=notifier-queue.service.js.map

/***/ }),

/***/ "./node_modules/angular-notifier/esm5/src/services/notifier-timer.service.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/angular-notifier/esm5/src/services/notifier-timer.service.js ***!
  \***********************************************************************************/
/*! exports provided: NotifierTimerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierTimerService", function() { return NotifierTimerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Notifier timer service
 *
 * This service acts as a timer, needed due to the still rather limited setTimeout JavaScript API. The timer service can start and stop a
 * timer. Furthermore, it can also pause the timer at any time, and resume later on. The timer API workd promise-based.
 */
var NotifierTimerService = /** @class */ (function () {
    function NotifierTimerService() {
        this.now = 0;
        this.remaining = 0;
    }
    /**
     * Start (or resume) the timer
     *
     * @param {?} duration Timer duration, in ms
     * @return {?} Promise, resolved once the timer finishes
     */
    NotifierTimerService.prototype.start = /**
     * Start (or resume) the timer
     *
     * @param {?} duration Timer duration, in ms
     * @return {?} Promise, resolved once the timer finishes
     */
    function (duration) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // For the first run ...
            // For the first run ...
            _this.remaining = duration;
            // Setup, then start the timer
            // Setup, then start the timer
            _this.finishPromiseResolver = resolve;
            _this.continue();
        });
    };
    /**
     * Pause the timer
     * @return {?}
     */
    NotifierTimerService.prototype.pause = /**
     * Pause the timer
     * @return {?}
     */
    function () {
        clearTimeout(this.timerId);
        this.remaining -= new Date().getTime() - this.now;
    };
    /**
     * Continue the timer
     * @return {?}
     */
    NotifierTimerService.prototype.continue = /**
     * Continue the timer
     * @return {?}
     */
    function () {
        var _this = this;
        this.now = new Date().getTime();
        this.timerId = window.setTimeout(function () {
            _this.finish();
        }, this.remaining);
    };
    /**
     * Stop the timer
     * @return {?}
     */
    NotifierTimerService.prototype.stop = /**
     * Stop the timer
     * @return {?}
     */
    function () {
        clearTimeout(this.timerId);
        this.remaining = 0;
    };
    /**
     * Finish up the timeout by resolving the timer promise
     * @return {?}
     */
    NotifierTimerService.prototype.finish = /**
     * Finish up the timeout by resolving the timer promise
     * @return {?}
     */
    function () {
        this.finishPromiseResolver();
    };
    NotifierTimerService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NotifierTimerService.ctorParameters = function () { return []; };
    return NotifierTimerService;
}());

function NotifierTimerService_tsickle_Closure_declarations() {
    /**
     * Timestamp (in ms), created in the moment the timer starts
     * @type {?}
     */
    NotifierTimerService.prototype.now;
    /**
     * Remaining time (in ms)
     * @type {?}
     */
    NotifierTimerService.prototype.remaining;
    /**
     * Timeout ID, used for clearing the timeout later on
     * @type {?}
     */
    NotifierTimerService.prototype.timerId;
    /**
     * Promise resolve function, eventually getting called once the timer finishes
     * @type {?}
     */
    NotifierTimerService.prototype.finishPromiseResolver;
}
//# sourceMappingURL=notifier-timer.service.js.map

/***/ }),

/***/ "./node_modules/angular-notifier/esm5/src/services/notifier.service.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/angular-notifier/esm5/src/services/notifier.service.js ***!
  \*****************************************************************************/
/*! exports provided: NotifierService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierService", function() { return NotifierService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_notifier_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../models/notifier-config.model */ "./node_modules/angular-notifier/esm5/src/models/notifier-config.model.js");
/* harmony import */ var _notifier_queue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifier-queue.service */ "./node_modules/angular-notifier/esm5/src/services/notifier-queue.service.js");
/* harmony import */ var _notifier_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../notifier.module */ "./node_modules/angular-notifier/esm5/src/notifier.module.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */




/**
 * Notifier service
 *
 * This service provides access to the public notifier API. Once injected into a component, directive, pipe, service, or any other building
 * block of an applications, it can be used to show new notifications, and hide existing ones. Internally, it transforms API calls into
 * actions, which then get thrown into the action queue - eventually being processed at the right moment.
 */
var NotifierService = /** @class */ (function () {
    function NotifierService(notifierQueueService, config // The forwardRef is (sadly) required here
    ) {
        this.queueService = notifierQueueService;
        this.config = config;
    }
    /**
     * Get the notifier configuration
     *
     * @return {?} Notifier configuration
     */
    NotifierService.prototype.getConfig = /**
     * Get the notifier configuration
     *
     * @return {?} Notifier configuration
     */
    function () {
        return this.config;
    };
    /**
     * API: Show a new notification
     *
     * @param {?} notificationOptions Notification options
     * @return {?}
     */
    NotifierService.prototype.show = /**
     * API: Show a new notification
     *
     * @param {?} notificationOptions Notification options
     * @return {?}
     */
    function (notificationOptions) {
        this.queueService.push({
            payload: notificationOptions,
            type: 'SHOW'
        });
    };
    /**
     * API: Hide a specific notification, given its ID
     *
     * @param {?} notificationId ID of the notification to hide
     * @return {?}
     */
    NotifierService.prototype.hide = /**
     * API: Hide a specific notification, given its ID
     *
     * @param {?} notificationId ID of the notification to hide
     * @return {?}
     */
    function (notificationId) {
        this.queueService.push({
            payload: notificationId,
            type: 'HIDE'
        });
    };
    /**
     * API: Hide the newest notification
     * @return {?}
     */
    NotifierService.prototype.hideNewest = /**
     * API: Hide the newest notification
     * @return {?}
     */
    function () {
        this.queueService.push({
            type: 'HIDE_NEWEST'
        });
    };
    /**
     * API: Hide the oldest notification
     * @return {?}
     */
    NotifierService.prototype.hideOldest = /**
     * API: Hide the oldest notification
     * @return {?}
     */
    function () {
        this.queueService.push({
            type: 'HIDE_OLDEST'
        });
    };
    /**
     * API: Hide all notifications at once
     * @return {?}
     */
    NotifierService.prototype.hideAll = /**
     * API: Hide all notifications at once
     * @return {?}
     */
    function () {
        this.queueService.push({
            type: 'HIDE_ALL'
        });
    };
    /**
     * API: Shortcut for showing a new notification
     *
     * @param {?} type             Type of the notification
     * @param {?} message          Message of the notification
     * @param {?=} notificationId
     * @return {?}
     */
    NotifierService.prototype.notify = /**
     * API: Shortcut for showing a new notification
     *
     * @param {?} type             Type of the notification
     * @param {?} message          Message of the notification
     * @param {?=} notificationId
     * @return {?}
     */
    function (type, message, notificationId) {
        var /** @type {?} */ notificationOptions = {
            message: message,
            type: type
        };
        if (notificationId !== undefined) {
            notificationOptions.id = notificationId;
        }
        this.show(notificationOptions);
    };
    NotifierService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NotifierService.ctorParameters = function () { return [
        { type: _notifier_queue_service__WEBPACK_IMPORTED_MODULE_2__["NotifierQueueService"] },
        { type: _models_notifier_config_model__WEBPACK_IMPORTED_MODULE_1__["NotifierConfig"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return _notifier_module__WEBPACK_IMPORTED_MODULE_3__["NotifierConfigToken"]; }),] }] }
    ]; };
    return NotifierService;
}());

function NotifierService_tsickle_Closure_declarations() {
    /**
     * Notifier queue service
     * @type {?}
     */
    NotifierService.prototype.queueService;
    /**
     * Notifier configuration
     * @type {?}
     */
    NotifierService.prototype.config;
}
//# sourceMappingURL=notifier.service.js.map

/***/ }),

/***/ "./src/app/core/custom-http-params.ts":
/*!********************************************!*\
  !*** ./src/app/core/custom-http-params.ts ***!
  \********************************************/
/*! exports provided: CustomHttpParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomHttpParams", function() { return CustomHttpParams; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CustomHttpParams = /** @class */ (function (_super) {
    __extends(CustomHttpParams, _super);
    function CustomHttpParams(isCaching) {
        var _this = _super.call(this) || this;
        _this.isCaching = isCaching;
        return _this;
    }
    return CustomHttpParams;
}(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]));



/***/ }),

/***/ "./src/app/shared/components/action-button/action-button.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/action-button/action-button.component.ts ***!
  \****************************************************************************/
/*! exports provided: ActionButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionButtonComponent", function() { return ActionButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var ActionButtonComponent = /** @class */ (function () {
    function ActionButtonComponent(notifier) {
        this.notifier = notifier;
        this.isDisabled = false;
        this.loaderPositionRight = false;
        this.isPending = false;
    }
    ActionButtonComponent.prototype.onClick = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.isPending = true;
                this.action().subscribe(function (e) {
                    _this.isPending = false;
                }, function (e) {
                    _this.isPending = false;
                    _this.notifier.notify('error', _this.errorText || e.error.api_errors[0].msg);
                });
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ActionButtonComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ActionButtonComponent.prototype, "errorText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ActionButtonComponent.prototype, "className", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], ActionButtonComponent.prototype, "action", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ActionButtonComponent.prototype, "isDisabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ActionButtonComponent.prototype, "loaderPositionRight", void 0);
    ActionButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'action-button',
            template: " \n        <div class=\"panel__layout\" *ngIf=\"isPending && loaderPositionRight === false\">\n            <div class=\"loader loader--large\">\n                <svg class=\"loader__svg\" version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"24px\" height=\"24px\"\n                    viewBox=\"0 0 40 40\" enable-background=\"new 0 0 40 40\" xml:space=\"preserve\">\n                    <path class=\"loader__cyrcle\" d=\"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\n                        s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\n                        c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z\"></path>\n                    <path class=\"loader__runner\" d=\"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\n                            C22.32,8.481,24.301,9.057,26.013,10.047z\" transform=\"rotate(82.3618 20 20)\">\n                        <animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 20 20\" to=\"360 20 20\" dur=\"0.5s\" repeatCount=\"indefinite\"></animateTransform>\n                    </path>\n                </svg>\n            </div>\n        </div>\n        <div class=\"panel__layout shrink\">\n            <button class=\"button\" [ngClass]=\"className\" type=\"button\" (click)=\"onClick()\" [disabled]=\"isPending || isDisabled\">\n                {{ title }}\n                <ng-content></ng-content>\n            </button>\n        </div>\n        <div class=\"panel__layout\" *ngIf=\"isPending && loaderPositionRight === true\">\n            <div class=\"loader loader--large\">\n                <svg class=\"loader__svg\" version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"24px\" height=\"24px\"\n                    viewBox=\"0 0 40 40\" enable-background=\"new 0 0 40 40\" xml:space=\"preserve\">\n                    <path class=\"loader__cyrcle\" d=\"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\n                        s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\n                        c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z\"></path>\n                    <path class=\"loader__runner\" d=\"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\n                            C22.32,8.481,24.301,9.057,26.013,10.047z\" transform=\"rotate(82.3618 20 20)\">\n                        <animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 20 20\" to=\"360 20 20\" dur=\"0.5s\" repeatCount=\"indefinite\"></animateTransform>\n                    </path>\n                </svg>\n            </div>\n        </div>\n    ",
            host: { class: 'panel shrink' }
        }),
        __metadata("design:paramtypes", [angular_notifier__WEBPACK_IMPORTED_MODULE_1__["NotifierService"]])
    ], ActionButtonComponent);
    return ActionButtonComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/grid/components/filter/filter.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/grid/components/filter/filter.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"layout__block shrink\" *ngIf=\"options\">\r\n    <div class=\"filter\" [class.filter--active]=\"isFilter\">\r\n        <div class=\"filter__layout\">\r\n            <div class=\"filter__column column\">\r\n                <div class=\"filter__col column__col column__col--1\" *ngIf=\"options.labels\">\r\n                    <label class=\"label\">\r\n                        <div class=\"label__title\">\r\n                            {{ options.labels.title || 'Метки'}}:\r\n                        </div>\r\n                        <select class=\"label__item select\" [(ngModel)]=\"state.filter['labels']\">\r\n                            <option value=\"\">Любой</option>\r\n                            <option value=\"{{label.id}}\" *ngFor=\"let label of state.filterData.labels\">\r\n                                {{label.name}}\r\n                            </option>\r\n                        </select>\r\n                    </label>\r\n                </div>\r\n                <div class=\"filter__col column__col column__col--1\" *ngIf=\"options.from_bot\">\r\n                    <label class=\"label\">\r\n                        <div class=\"label__title\">\r\n                            {{ options.from_bot.title || 'Боты'}}:\r\n                        </div>\r\n                        <select class=\"label__item select\" [(ngModel)]=\"state.filter['from_bot']\">\r\n                            <option value=\"\">Любой</option>\r\n                            <option value=\"{{bot.id}}\" *ngFor=\"let bot of state.filterData.bots\">\r\n                                {{bot.name}}\r\n                            </option>\r\n                        </select>\r\n                    </label>\r\n                </div>\r\n                <div class=\"filter__col column__col column__col--1\" *ngIf=\"options.author\">\r\n                    <label class=\"label\">\r\n                        <div class=\"label__title\">\r\n                            {{ options.author.title || 'Автор'}}:\r\n                        </div>\r\n                        <select class=\"label__item select\" [(ngModel)]=\"state.filter[options.author.path || 'from_bot__owner']\">\r\n                            <option value=\"\">Любой</option>\r\n                            <option value=\"{{user.id}}\" *ngFor=\"let user of state.filterData.users\">\r\n                                {{user.first_name}}\r\n                            </option>\r\n                        </select>\r\n                    </label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"filter__layout shrink\">\r\n            <div class=\"label label--no-title shrink\">\r\n                <div class=\"panel\">\r\n                    <div class=\"panel__layout\">\r\n                        <button class=\"button bold\" type=\"button\" (click)=\"filter()\" [disabled]=\"isPending.state\">\r\n                            Применить\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"panel__layout\">\r\n                        <a class=\"link\" (click)=\"clear()\">Сброс</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/grid/components/filter/filter.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/grid/components/filter/filter.component.ts ***!
  \******************************************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _filter_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter.data.service */ "./src/app/shared/components/grid/components/filter/filter.data.service.ts");
/* harmony import */ var _filter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter.service */ "./src/app/shared/components/grid/components/filter/filter.service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services */ "./src/app/shared/components/grid/services/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models */ "./src/app/shared/components/grid/models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// TO-DO продумать механизм фильтрации по умолчанию
// TO-DO продумать механизм фильтрации по умолчанию
// TO-DO продумать механизм фильтрации по умолчанию
// TO-DO продумать механизм фильтрации по умолчанию
// TO-DO продумать механизм фильтрации по умолчанию
// TO-DO продумать механизм фильтрации по умолчанию
// TO-DO продумать механизм фильтрации по умолчанию
// TO-DO продумать механизм фильтрации по умолчанию
var FilterComponent = /** @class */ (function () {
    function FilterComponent(appState, filterDataService, filterService, dataService) {
        this.appState = appState;
        this.filterDataService = filterDataService;
        this.filterService = filterService;
        this.dataService = dataService;
        this.data = new _models__WEBPACK_IMPORTED_MODULE_5__["Data"]();
        this.isPending = { state: false };
        this.isFilter = true;
        this.state = this.appState.state;
    }
    /**
     * Initialize filter with options fields and get filter fields
     */
    FilterComponent.prototype.ngOnInit = function () {
        if (!this.state.filter) {
            this.state.filter = {};
        }
        for (var key in this.options) {
            if (this.state.filter.hasOwnProperty(key)) {
                this.state.filter[key] = '';
            }
            else {
                this.state.filter[key] = '';
            }
        }
        console.log(this.state.filter);
        if (this.options) {
            this.filterDataService.getFilterFields();
        }
    };
    FilterComponent.prototype.ngOnDestroy = function () {
        this.options = {};
        this.state.filter = {};
    };
    FilterComponent.prototype.filter = function () {
        var _this = this;
        var filters = this.filterService.getFilterQuery();
        this.isPending.state = true;
        this.dataService.get(this.url, filters).subscribe(function (res) {
            _this.data.response = res;
            _this.isPending.state = false;
        }, function (err) {
            _this.isPending.state = false;
            _this.data = new _models__WEBPACK_IMPORTED_MODULE_5__["Data"]();
        });
    };
    FilterComponent.prototype.onKeySearch = function (event) {
        if (event.keyCode === 13) {
            this.filter();
        }
    };
    FilterComponent.prototype.clear = function () {
        for (var key in this.state.filter) {
            if (this.state.filter.hasOwnProperty(key)) {
                this.state.filter[key] = '';
            }
        }
        this.filter();
    };
    FilterComponent.prototype.toggleFilter = function () {
        this.isFilter = !this.isFilter;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FilterComponent.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models__WEBPACK_IMPORTED_MODULE_5__["Data"])
    ], FilterComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FilterComponent.prototype, "url", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FilterComponent.prototype, "isPending", void 0);
    FilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'filter',
            template: __webpack_require__(/*! ./filter.component.html */ "./src/app/shared/components/grid/components/filter/filter.component.html"),
            host: { class: 'layout__block shrink' }
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppState"],
            _filter_data_service__WEBPACK_IMPORTED_MODULE_2__["FilterDataService"],
            _filter_service__WEBPACK_IMPORTED_MODULE_3__["FilterService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], FilterComponent);
    return FilterComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/grid/components/filter/filter.data.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/components/grid/components/filter/filter.data.service.ts ***!
  \*********************************************************************************/
/*! exports provided: FilterDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterDataService", function() { return FilterDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// TO-DO переписать
var FilterDataService = /** @class */ (function () {
    function FilterDataService(appState, http) {
        this.appState = appState;
        this.http = http;
        this.state = this.appState.state;
    }
    FilterDataService.prototype.getFilterFields = function () {
        this.state.filterData = {};
        this.getLabels();
        this.getBots();
        this.getUsers();
    };
    FilterDataService.prototype.getLabels = function () {
        var _this = this;
        if (!this.state.filterData.statuses) {
            this.http.get('/labels')
                .subscribe(function (labels) {
                _this.state.filterData.labels = labels.results;
            });
        }
    };
    FilterDataService.prototype.getBots = function () {
        var _this = this;
        if (!this.state.filterData.bots) {
            this.http.get('/telegram/bots?page_size=100')
                .subscribe(function (bots) {
                _this.state.filterData.bots = bots.results;
            });
        }
    };
    FilterDataService.prototype.getUsers = function () {
        var _this = this;
        if (!this.state.filterData.users) {
            this.http.get('/users')
                .subscribe(function (users) {
                _this.state.filterData.users = users.results;
            });
        }
    };
    FilterDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppState"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FilterDataService);
    return FilterDataService;
}());



/***/ }),

/***/ "./src/app/shared/components/grid/components/filter/filter.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/grid/components/filter/filter.service.ts ***!
  \****************************************************************************/
/*! exports provided: FilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterService", function() { return FilterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FilterService = /** @class */ (function () {
    function FilterService(appState) {
        this.appState = appState;
        this.state = this.appState.state;
    }
    /**
     * Returns query string from filter params
     */
    FilterService.prototype.getFilterQuery = function () {
        var params = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["URLSearchParams"]();
        for (var key in this.state.filter) {
            if (this.state.filter[key] !== null
                && this.state.filter[key] !== undefined
                && this.state.filter[key] !== '') {
                if (key === 'is_repost' && this.state.filter[key] == '1') {
                }
                else {
                    params.set(key, this.state.filter[key]);
                }
            }
        }
        return params.toString();
    };
    FilterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppState"]])
    ], FilterService);
    return FilterService;
}());



/***/ }),

/***/ "./src/app/shared/components/grid/components/filter/index.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/components/grid/components/filter/index.ts ***!
  \*******************************************************************/
/*! exports provided: FilterComponent, FilterService, FilterDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filter_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.component */ "./src/app/shared/components/grid/components/filter/filter.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return _filter_component__WEBPACK_IMPORTED_MODULE_0__["FilterComponent"]; });

/* harmony import */ var _filter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.service */ "./src/app/shared/components/grid/components/filter/filter.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterService", function() { return _filter_service__WEBPACK_IMPORTED_MODULE_1__["FilterService"]; });

/* harmony import */ var _filter_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter.data.service */ "./src/app/shared/components/grid/components/filter/filter.data.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterDataService", function() { return _filter_data_service__WEBPACK_IMPORTED_MODULE_2__["FilterDataService"]; });






/***/ }),

/***/ "./src/app/shared/components/grid/components/grid/grid.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/grid/components/grid/grid.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<filter\r\n    [options]=\"filters\"\r\n    [url]=\"url\"\r\n    [data]=\"data\"\r\n    [isPending]=\"isPending\"\r\n    *ngIf=\"isFilter\"\r\n>\r\n</filter>\r\n<div class=\"layout__block shrink\">\r\n    <div class=\"control-bar control-bar--sub\">\r\n        <div class=\"control-bar__layout\">\r\n            <div class=\"panel shrink\">\r\n                <div class=\"panel__layout\" *ngIf=\"filters\">\r\n                    <button class=\"button\" type=\"button\" (click)=\"toggleFilter()\">\r\n                        <span *ngIf=\"isFilter\">Фильтр скрыть</span>\r\n                        <span *ngIf=\"!isFilter\">Фильтр показать</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"panel__layout\">\r\n                    <div class=\"search\">\r\n                        <input \r\n                            class=\"search__input\"\r\n                            type=\"search\"\r\n                            [placeholder]=\"filters?.searchTitle || 'Название'\"\r\n                            (keyup)=\"onKeySearch($event)\"\r\n                            [(ngModel)]=\"searchText\"\r\n                        >\r\n                        <button class=\"search__button button\" (click)=\"onKeySearch({keyCode: 13})\" type=\"button\">\r\n                            <span class=\"button__icon icon icon--baseline\">\r\n                                <svg class=\"icon__svg\" viewBox=\"0 0 2134 2134\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                    <path id=\"search\" d=\"M1443.5,915.975c0,-145.262 -51.616,-269.508 -154.847,-372.739c-103.231,-103.231 -227.477,-154.846 -372.739,-154.846c-145.262,0 -269.508,51.615 -372.739,154.846c-103.231,103.231 -154.846,227.477 -154.846,372.739c0,145.262 51.615,269.508 154.846,372.739c103.231,103.231 227.477,154.846 372.739,154.846c145.262,0 269.508,-51.615 372.739,-154.846c103.231,-103.231 154.847,-227.477 154.847,-372.739Zm602.964,979.792c0,40.844 -14.927,76.17 -44.779,105.979c-29.853,29.808 -65.179,44.735 -105.979,44.779c-42.383,0 -77.709,-14.927 -105.979,-44.779l-403.932,-402.746c-140.514,97.34 -297.141,146.01 -469.881,146.01c-112.288,0 -219.651,-21.785 -322.091,-65.355c-102.439,-43.57 -190.766,-102.462 -264.979,-176.675c-74.214,-74.214 -133.106,-162.54 -176.676,-264.98c-43.569,-102.439 -65.354,-209.803 -65.354,-322.091c0,-112.288 21.785,-219.651 65.354,-322.091c43.57,-102.439 102.462,-190.766 176.676,-264.979c74.213,-74.214 162.54,-133.106 264.979,-176.676c102.44,-43.569 209.803,-65.354 322.091,-65.354c112.288,0 219.652,21.785 322.091,65.354c102.44,43.57 190.766,102.462 264.98,176.676c74.213,74.213 133.105,162.54 176.675,264.979c43.57,102.44 65.355,209.803 65.355,322.091c0,172.74 -48.67,329.367 -146.01,469.881l403.933,403.932c29.061,29.062 43.592,64.388 43.592,105.979l-0.066,0.066Z\"\r\n                                        style=\"fill-rule:nonzero;\" />\r\n                                </svg>\r\n                            </span>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"panel__layout\">\r\n                    Найдено:\r\n                    <span className=\"sub-text sub-text--primary\">{{ data.response?.count }}</span>\r\n                </div>\r\n                <div class=\"panel__layout\" *ngIf=\"this.selectedRow.length\">\r\n                    Выделено:\r\n                    <span class=\"sub-text sub-text--primary\">{{this.selectedRow.length | number}}</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"control-bar__layout align-right\">\r\n            <pagination *ngIf=\"!hidePagination\" [data]=\"data\" [url]=\"url\" [selectedRow]=\"selectedRow\" [isPending]=\"isPending\">\r\n            </pagination>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"layout__container\">\r\n    <table class=\"table\" [class.table--load]=\"isPending.state\">\r\n        <thead class=\"table__thead\">\r\n            <tr class=\"table__row\">\r\n                <th class=\"table__td\" *ngFor=\"let column of columns\">\r\n                    <span class=\"sub-text--tertiary\" *ngIf=\"!column.ico && !column.sort\">{{column.title}}</span>\r\n                    <span class=\"sub-text--tertiary\" *ngIf=\"column.ico && !column.sort\">\r\n                        <img class=\"icon__svg\" [src]=\"column.ico\">\r\n                    </span>\r\n                    <span *ngIf=\"column.sort\" [ngClass]=\"column.sort === 'asc' ? 'link link--asc' : 'link link--desc'\" (click)=\"column.sort = sort(column.sort, column.name)\">\r\n                        <img *ngIf=\"column.ico\" class=\"icon__svg\" [src]=\"column.ico\"> {{column.title}}\r\n                    </span>\r\n                    <input class=\"checkbox\" type=\"checkbox\" [checked]=\"isCheckedAll(column)\" (click)=\"selectAll(selectAllState, column)\" *ngIf=\"column.checkbox\"\r\n                        [disabled]=\"data.response.results.length === 0 || data.response.notFound\">\r\n                </th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class=\"table__tbody\">\r\n            <tr class=\"table__row table__row--loader\">\r\n                <td class=\"table__td\" [attr.colspan]=\"columns.length\">\r\n                    <div class=\"table-loader\" [class.table-loader--load]=\"isPending.state\">\r\n                        <div class=\"table-loader__layout table-loader__layout--loader\">\r\n                            <div class=\"panel shrink\">\r\n                                <div class=\"panel__layout\">\r\n                                    <div class=\"table-loader__loader loader\">\r\n                                        <svg class=\"loader__svg\" version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"24px\" height=\"24px\"\r\n                                            viewBox=\"0 0 40 40\" enable-background=\"new 0 0 40 40\" xml:space=\"preserve\">\r\n                                            <path class=\"loader__cyrcle\" d=\"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\r\n                                            s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\r\n                                            c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z\"\r\n                                            />\r\n                                            <path class=\"loader__runner\" d=\"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\r\n                                                C22.32,8.481,24.301,9.057,26.013,10.047z\">\r\n                                                <animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 20 20\" to=\"360 20 20\" dur=\"0.5s\" repeatCount=\"indefinite\"\r\n                                                />\r\n                                            </path>\r\n                                        </svg>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"panel__layout shrink\">\r\n                                    Загрузка&hellip;\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"table__row\" *ngIf=\"!isPending.state && data.response.notFound\">\r\n                <td class=\"table__td\" [attr.colspan]=\"columns.length\">\r\n                    <div class=\"table-loader__layout\">\r\n                        Нет данных\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"table__row\" *ngFor=\"let item of data.response.results\" [class.table__row--content]=\"isPending.state\">\r\n                <td class=\"table__td\" *ngFor=\"let column of columns\">\r\n                    <div *ngIf=\"column.checkbox\">\r\n                        <input class=\"checkbox\" type=\"checkbox\" *ngIf=\"!column.isShow ? true : column.isShow(item)\" (click)=\"onCheck(item.id)\" [checked]=\"isChecked(item.id)\">\r\n                    </div>\r\n                    <template-wrapper *ngIf=\"column.template\" [template]=\"column.template\" [model]=\"item\" [callback]=\"column.callback\" [stageName]=\"column.stageName\"></template-wrapper>\r\n                    <div *ngIf=\"!column.template\" [ngClass]=\"column.className\">{{getProps(item, column.name, column.type)}}</div>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/grid/components/grid/grid.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/grid/components/grid/grid.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/grid/components/grid/grid.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/grid/components/grid/grid.component.ts ***!
  \**************************************************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services */ "./src/app/shared/components/grid/services/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models */ "./src/app/shared/components/grid/models/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/app/shared/components/grid/utils/index.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../filter */ "./src/app/shared/components/grid/components/filter/index.ts");
/* harmony import */ var _core_storage_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/storage-provider */ "./src/app/core/storage-provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GridComponent = /** @class */ (function () {
    function GridComponent(dataService, utils, appState, filterService, storageProvider) {
        this.dataService = dataService;
        this.utils = utils;
        this.appState = appState;
        this.filterService = filterService;
        this.storageProvider = storageProvider;
        this.columns = [];
        this.selectedRow = [];
        this.isFilter = false;
        this.isPending = { state: false };
        this.data = new _models__WEBPACK_IMPORTED_MODULE_2__["Data"]();
        this.searchText = '';
        this.selectAllState = false;
        this.state = this.appState.state;
    }
    GridComponent.prototype.ngOnInit = function () {
        if (!this.url) {
            this.data.response.results = this.list;
        }
        else if (this.url) {
            var currentFilter = this.getFilter();
            var filter = currentFilter || this.defaultFilter;
            this.get(filter);
        }
    };
    GridComponent.prototype.ngOnChanges = function (changes) {
        if (changes.list && changes.list.currentValue) {
            this.data.response.results = changes.list.currentValue;
        }
        else if (changes.url && changes.url.currentValue) {
            this.url = changes.url.currentValue;
            var currentFilter = this.getFilter();
            var filter = currentFilter || this.defaultFilter;
            this.get(filter);
        }
    };
    // впадлу было заморачиваться, отрефакторить логику работы с чекбоксами
    GridComponent.prototype.isCheckedAll = function (columnOptions) {
        var _this = this;
        var isChecked = this.selectedRow.length === 0 ? false : true;
        this.data.response.results
            .map(function (e) {
            var index = _this.selectedRow.indexOf(e.id, 0);
            if (columnOptions.isShow) {
                if (index === -1 && columnOptions.isShow(e)) {
                    isChecked = false;
                }
                else if (index !== -1 && !columnOptions.isShow(e)) {
                    isChecked = false;
                }
            }
            else if (index === -1) {
                isChecked = false;
            }
        });
        this.selectAllState = isChecked;
        return this.selectAllState;
    };
    GridComponent.prototype.toggleFilter = function () {
        this.isFilter = !this.isFilter;
    };
    GridComponent.prototype.selectAll = function (selectAllState, columnOptions) {
        var _this = this;
        this.selectAllState = !selectAllState;
        this.data.response.results
            .map(function (e) {
            var index = _this.selectedRow.indexOf(e.id, 0);
            if (_this.selectAllState) {
                if (columnOptions.isShow && index === -1) {
                    if (columnOptions.isShow(e)) {
                        _this.selectedRow.push(e.id);
                    }
                }
                else {
                    if (index === -1) {
                        _this.selectedRow.push(e.id);
                    }
                }
            }
            else {
                if (index > -1) {
                    _this.selectedRow.splice(index, 1);
                }
            }
        });
    };
    GridComponent.prototype.isChecked = function (id) {
        return this.utils.contains(this.selectedRow, id);
    };
    GridComponent.prototype.onCheck = function (id) {
        var index = this.selectedRow.indexOf(id);
        this.selectAllState = false;
        if (index !== -1) {
            this.selectedRow.splice(index, 1);
        }
        else {
            this.selectedRow.push(id);
        }
    };
    GridComponent.prototype.getFilter = function () {
        return null;
    };
    GridComponent.prototype.refresh = function () {
        var _this = this;
        this.dataService.get(this.url).subscribe(function (res) {
            _this.data.response = res;
        });
    };
    // To-do сделать маппинг индекса сортировки
    GridComponent.prototype.sort = function (sort, propName) {
        var _this = this;
        this.isPending.state = true;
        this.dataService.sort(this.url, sort, propName, this.getFilter(), this.data.response.pagenum)
            .subscribe(function (res) {
            _this.data.response = res;
            _this.isPending.state = false;
        }, function (err) {
            _this.isPending.state = false;
            _this.data = new _models__WEBPACK_IMPORTED_MODULE_2__["Data"]();
        });
        return sort === 'desc' ? 'asc' : 'desc';
    };
    GridComponent.prototype.getProps = function (item, path, type) {
        return this.utils.getValueByPath(item, path, type);
    };
    GridComponent.prototype.onKeySearch = function (event) {
        var _this = this;
        var organizations = this.storageProvider.get('organizations');
        organizations = organizations ? organizations : [];
        if (event.keyCode === 13) {
            var newOrg = organizations.filter(function (e) {
                if (e.name.includes(_this.searchText) || e.decription.includes(_this.searchText) || e.address.includes(_this.searchText)) {
                    return e;
                }
            });
            console.log(newOrg);
            this.data.response.results = newOrg;
        }
    };
    GridComponent.prototype.filter = function () {
        var _this = this;
        var filters = this.filterService.getFilterQuery();
        this.isPending.state = true;
        this.dataService.get(this.url, filters).subscribe(function (res) {
            _this.data.response = res;
            _this.isPending.state = false;
        }, function (err) {
            _this.isPending.state = false;
            _this.data = new _models__WEBPACK_IMPORTED_MODULE_2__["Data"]();
        });
    };
    GridComponent.prototype.get = function (filters) {
        var _this = this;
        this.isPending.state = true;
        this.dataService.get(this.url, filters).subscribe(function (res) {
            _this.data.response = res;
            _this.isPending.state = false;
        }, function (err) {
            _this.isPending.state = false;
            _this.data = new _models__WEBPACK_IMPORTED_MODULE_2__["Data"]();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GridComponent.prototype, "filters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GridComponent.prototype, "url", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], GridComponent.prototype, "columns", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], GridComponent.prototype, "list", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GridComponent.prototype, "defaultFilter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], GridComponent.prototype, "hidePagination", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], GridComponent.prototype, "selectedRow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], GridComponent.prototype, "isFilter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GridComponent.prototype, "isPending", void 0);
    GridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'grid',
            template: __webpack_require__(/*! ./grid.component.html */ "./src/app/shared/components/grid/components/grid/grid.component.html"),
            styles: [__webpack_require__(/*! ./grid.component.scss */ "./src/app/shared/components/grid/components/grid/grid.component.scss")],
            host: { class: 'layout__block' },
            providers: [_services__WEBPACK_IMPORTED_MODULE_1__["DataService"]]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _utils__WEBPACK_IMPORTED_MODULE_3__["Utils"],
            _app_service__WEBPACK_IMPORTED_MODULE_4__["AppState"],
            _filter__WEBPACK_IMPORTED_MODULE_5__["FilterService"],
            _core_storage_provider__WEBPACK_IMPORTED_MODULE_6__["StorageProvider"]])
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/grid/components/grid/index.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/components/grid/components/grid/index.ts ***!
  \*****************************************************************/
/*! exports provided: GridComponent, TemplateProvider, TemplateWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid.component */ "./src/app/shared/components/grid/components/grid/grid.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return _grid_component__WEBPACK_IMPORTED_MODULE_0__["GridComponent"]; });

/* harmony import */ var _template_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.provider */ "./src/app/shared/components/grid/components/grid/template.provider.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateProvider", function() { return _template_provider__WEBPACK_IMPORTED_MODULE_1__["TemplateProvider"]; });

/* harmony import */ var _template_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template.wrapper */ "./src/app/shared/components/grid/components/grid/template.wrapper.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateWrapper", function() { return _template_wrapper__WEBPACK_IMPORTED_MODULE_2__["TemplateWrapper"]; });






/***/ }),

/***/ "./src/app/shared/components/grid/components/grid/template.provider.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/components/grid/components/grid/template.provider.ts ***!
  \*****************************************************************************/
/*! exports provided: TemplateProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateProvider", function() { return TemplateProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TemplateProvider = /** @class */ (function () {
    function TemplateProvider(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    TemplateProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[template-provider]',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], TemplateProvider);
    return TemplateProvider;
}());



/***/ }),

/***/ "./src/app/shared/components/grid/components/grid/template.wrapper.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/grid/components/grid/template.wrapper.ts ***!
  \****************************************************************************/
/*! exports provided: TemplateWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateWrapper", function() { return TemplateWrapper; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _template_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.provider */ "./src/app/shared/components/grid/components/grid/template.provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TemplateWrapper = /** @class */ (function () {
    function TemplateWrapper(_componentFactoryResolver, cdRef) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this.cdRef = cdRef;
        this.template = {};
        this.model = {};
        this.stageName = null;
        this.callback = {};
    }
    TemplateWrapper.prototype.ngAfterViewInit = function () {
        if (this.template) {
            this.loadComponent(this.template);
        }
    };
    TemplateWrapper.prototype.loadComponent = function (template) {
        var componentFactory = this._componentFactoryResolver.resolveComponentFactory(template);
        var viewContainerRef = this.host.viewContainerRef;
        viewContainerRef.clear();
        var componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance.data = this.model;
        componentRef.instance.stageName = this.stageName;
        componentRef.instance.callback = this.callback;
        this.cdRef.detectChanges();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TemplateWrapper.prototype, "template", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TemplateWrapper.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TemplateWrapper.prototype, "stageName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TemplateWrapper.prototype, "callback", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_template_provider__WEBPACK_IMPORTED_MODULE_1__["TemplateProvider"]),
        __metadata("design:type", _template_provider__WEBPACK_IMPORTED_MODULE_1__["TemplateProvider"])
    ], TemplateWrapper.prototype, "host", void 0);
    TemplateWrapper = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'template-wrapper',
            template: "\n        <div>\n           <ng-template template-provider></ng-template>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], TemplateWrapper);
    return TemplateWrapper;
}());



/***/ }),

/***/ "./src/app/shared/components/grid/components/index.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/grid/components/index.ts ***!
  \************************************************************/
/*! exports provided: GridComponent, TemplateProvider, TemplateWrapper, PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid */ "./src/app/shared/components/grid/components/grid/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return _grid__WEBPACK_IMPORTED_MODULE_0__["GridComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateProvider", function() { return _grid__WEBPACK_IMPORTED_MODULE_0__["TemplateProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateWrapper", function() { return _grid__WEBPACK_IMPORTED_MODULE_0__["TemplateWrapper"]; });

/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagination */ "./src/app/shared/components/grid/components/pagination/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return _pagination__WEBPACK_IMPORTED_MODULE_1__["PaginationComponent"]; });





/***/ }),

/***/ "./src/app/shared/components/grid/components/pagination/index.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/grid/components/pagination/index.ts ***!
  \***********************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pagination_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination.component */ "./src/app/shared/components/grid/components/pagination/pagination.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return _pagination_component__WEBPACK_IMPORTED_MODULE_0__["PaginationComponent"]; });




/***/ }),

/***/ "./src/app/shared/components/grid/components/pagination/pagination.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/grid/components/pagination/pagination.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pagination\">\r\n    <div class=\"pagination__layout\">\r\n        <div class=\"pagination__counter\">\r\n            Страница {{data.response.pagenum}}\r\n        </div>\r\n    </div>\r\n    <div class=\"pagination__layout\">\r\n        <div class=\"group-button\">\r\n            <button class=\"group-button__button button button--small-icon\" type=\"button\" (click)=\"first()\" [disabled]=\"data.response.pagenum == 1 || isPending.state\">\r\n                <span class=\"button__icon icon icon--baseline\">\r\n                    <svg class=\"icon__svg\" viewBox=\"0 0 2134 2134\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                        <path id=\"backward\" d=\"M1989.12,107.466c16.081,-16.08 29.623,-21.583 40.628,-16.507c11.005,5.075 16.507,18.618 16.507,40.628l0,1870.3c0,22.01 -5.502,35.552 -16.507,40.628c-11.005,5.075 -24.547,-0.427 -40.628,-16.507l-902.136,-902.137c-7.637,-7.637 -13.14,-15.677 -16.508,-24.121l0,902.137c0,22.01 -5.502,35.552 -16.507,40.628c-11.005,5.075 -24.547,-0.427 -40.628,-16.507l-902.136,-902.137c-16.081,-16.08 -24.121,-35.149 -24.121,-57.206c0,-22.057 8.04,-41.126 24.121,-57.207l902.136,-902.136c16.081,-16.081 29.623,-21.583 40.628,-16.508c11.005,5.076 16.507,18.619 16.507,40.628l0,902.137c3.368,-8.491 8.871,-16.531 16.508,-24.121l902.136,-901.994Z\" style=\"fill-rule:nonzero;\"/>\r\n                    </svg>\r\n                </span>\r\n            </button>\r\n            <button class=\"group-button__button button button--small-icon\" type=\"button\" (click)=\"prev()\" [disabled]=\"!data.response.previous_page_number || isPending.state\">\r\n                <span class=\"button__icon icon icon--baseline\">\r\n                    <svg class=\"icon__svg\" viewBox=\"0 0 2134 2134\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                        <path id=\"caret-left\" d=\"M1616,212.173l0,1708.99c0,33.041 -12.069,61.666 -36.209,85.877c-24.139,24.21 -52.765,36.28 -85.877,36.209c-33.111,-0.071 -61.737,-12.141 -85.876,-36.209l-854.494,-854.494c-24.139,-24.139 -36.209,-52.765 -36.209,-85.876c0,-33.112 12.07,-61.738 36.209,-85.877l854.494,-854.494c24.139,-24.139 52.765,-36.209 85.876,-36.209c33.112,0 61.738,12.07 85.877,36.209c24.14,24.14 36.209,52.765 36.209,85.877l0,0Z\" style=\"fill-rule:nonzero;\"/>\r\n                    </svg>\r\n                </span>\r\n            </button>\r\n            <button class=\"group-button__button button button--small-icon\" type=\"button\" (click)=\"next()\" [disabled]=\"!data.response.next_page_number || isPending.state\">\r\n                <span class=\"button__icon icon icon--baseline\">\r\n                    <svg class=\"icon__svg\" viewBox=\"0 0 2134 2134\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                        <path id=\"caret-right\" d=\"M1616,1066.67c0,33.04 -12.07,61.666 -36.209,85.877l-854.495,854.494c-24.139,24.14 -52.765,36.21 -85.877,36.21c-33.111,0 -61.737,-12.07 -85.876,-36.21c-24.14,-24.139 -36.21,-52.765 -36.21,-85.876l0,-1708.99c0,-33.04 12.07,-61.666 36.21,-85.877c24.139,-24.21 52.765,-36.28 85.876,-36.209c33.112,0.071 61.738,12.141 85.877,36.209l854.495,854.495c24.139,24.14 36.209,52.765 36.209,85.877Z\" style=\"fill-rule:nonzero;\"/>\r\n                    </svg>\r\n                </span>\r\n            </button>\r\n            <button class=\"group-button__button button button--small-icon\" type=\"button\" (click)=\"last()\" [disabled]=\"(!data.response.num_pages || !data.response.next_page_number)  || isPending.state\">\r\n                <span class=\"button__icon icon icon--baseline\">\r\n                    <svg class=\"icon__svg\" version=\"1.1\"viewBox=\"0 0 2134 2134\"  xmlns=\"http://www.w3.org/2000/svg\">\r\n                        <path d=\"M144.219,2025.86c-16.081,16.08 -29.623,21.583 -40.628,16.507c-11.005,-5.075 -16.507,-18.618 -16.507,-40.628l0,-1870.3c0,-22.01 5.502,-35.552 16.507,-40.628c11.005,-5.075 24.547,0.427 40.628,16.507l902.136,902.137c7.637,7.637 13.14,15.677 16.508,24.121l0,-902.137c0,-22.01 5.502,-35.552 16.507,-40.628c11.005,-5.075 24.547,0.427 40.628,16.507l902.136,902.137c16.081,16.08 24.121,35.149 24.121,57.206c0,22.057 -8.04,41.126 -24.121,57.207l-902.136,902.136c-16.081,16.081 -29.623,21.583 -40.628,16.508c-11.005,-5.076 -16.507,-18.619 -16.507,-40.628l0,-902.137c-3.368,8.491 -8.871,16.531 -16.508,24.121l-902.136,901.994l0,-0.002Z\" />\r\n                    </svg>\r\n                </span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n    <div class=\"pagination__layout\" (change)=\"pageCountChange($event.target.value)\">\r\n        <select class=\"select\">\r\n            <option value=\"10\">10</option>\r\n            <option value=\"50\">50</option>\r\n            <option value=\"100\">100</option>\r\n            <option value=\"1000\">1000</option>   \r\n        </select>\r\n    </div>\r\n    <div class=\"pagination__layout\">\r\n        <button class=\"button\" type=\"button\" (click)=\"reload()\" [disabled]=\"isPending.state\">\r\n            <span class=\"button__icon icon icon--baseline\">\r\n                <svg class=\"icon__svg\" viewBox=\"0 0 2134 2134\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                    <path id=\"refresh\" d=\"M2008.69,1269.54c0,4.212 -0.426,7.17 -1.278,8.874c-54.1,226.528 -167.364,410.15 -339.792,550.866c-172.428,140.716 -374.438,211.074 -606.031,211.074c-123.392,0 -242.786,-23.239 -358.18,-69.719c-115.393,-46.479 -218.292,-112.838 -308.695,-199.075l-163.577,163.577c-16.045,16.045 -35.072,24.068 -57.082,24.068c-22.009,0 -41.036,-8.023 -57.081,-24.068c-16.045,-16.045 -24.068,-35.073 -24.068,-57.082l0,-567.976c0,-21.962 8.023,-40.989 24.068,-57.082c16.045,-16.092 35.072,-24.115 57.081,-24.068l567.977,0c21.961,0 40.989,8.023 57.081,24.068c16.093,16.046 24.116,35.073 24.068,57.082c-0.047,22.009 -8.07,41.036 -24.068,57.082l-173.658,173.658c60.016,55.804 128.055,98.899 204.116,129.286c76.062,30.387 155.081,45.604 237.059,45.651c113.264,0 218.908,-27.476 316.931,-82.428c98.023,-54.951 176.617,-130.587 235.781,-226.906c9.277,-14.389 31.665,-63.826 67.163,-148.313c6.769,-19.453 19.453,-29.18 38.055,-29.18l243.448,0c10.981,0 20.495,4.024 28.541,12.07c8.047,8.046 12.07,17.56 12.07,28.541l0.071,0Zm31.735,-1014.26l0,567.976c0,21.962 -8.022,40.989 -24.068,57.082c-16.045,16.093 -35.072,24.115 -57.081,24.068l-567.976,0c-21.962,0 -40.989,-8.023 -57.082,-24.068c-16.093,-16.045 -24.115,-35.073 -24.068,-57.082c0.047,-22.009 8.07,-41.036 24.068,-57.081l174.937,-174.937c-125.097,-115.772 -272.582,-173.659 -442.454,-173.659c-113.264,0 -218.907,27.476 -316.931,82.428c-98.023,54.952 -176.617,130.587 -235.781,226.906c-9.277,14.389 -31.664,63.827 -67.163,148.313c-6.768,19.453 -19.453,29.18 -38.054,29.18l-252.324,0c-10.981,0 -20.494,-4.023 -28.541,-12.07c-8.046,-8.046 -12.069,-17.559 -12.069,-28.54l0,-8.875c54.952,-226.528 169.044,-410.15 342.277,-550.866c173.232,-140.716 376.071,-211.074 608.515,-211.074c123.393,0 243.402,23.453 360.026,70.358c116.625,46.905 220.162,113.051 310.612,198.437l164.784,-163.578c16.046,-16.045 35.073,-24.068 57.082,-24.068c22.009,0 41.036,8.023 57.081,24.068c16.046,16.046 24.068,35.073 24.068,57.082l0.142,0Z\" style=\"fill-rule:nonzero;\"/>\r\n                </svg>\r\n            </span>\r\n        </button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/components/grid/components/pagination/pagination.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/grid/components/pagination/pagination.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services */ "./src/app/shared/components/grid/services/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models */ "./src/app/shared/components/grid/models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaginationComponent = /** @class */ (function () {
    function PaginationComponent(dataService) {
        this.dataService = dataService;
        this.data = new _models__WEBPACK_IMPORTED_MODULE_2__["Data"]();
        this.selectedRow = [];
        this.isPending = { state: false };
        this.defaultCountOnPage = 10;
    }
    PaginationComponent.prototype.ngOnInit = function () {
        this.dataService.setCountOnPage(this.defaultCountOnPage);
    };
    PaginationComponent.prototype.pageCountChange = function (e) {
        this.dataService.setCountOnPage(e);
        this.reload();
    };
    /**
     * Get first page
     */
    PaginationComponent.prototype.first = function () {
        var _this = this;
        this.isPending.state = true;
        this.dataService.first(this.url, '').subscribe(function (res) {
            _this.data.response = res;
            _this.isPending.state = false;
        }, function (err) {
            _this.isPending.state = false;
            _this.data = new _models__WEBPACK_IMPORTED_MODULE_2__["Data"]();
        });
    };
    /**
     * Get previous page
     */
    PaginationComponent.prototype.prev = function () {
        var _this = this;
        this.isPending.state = true;
        if (this.data.response.previous_page_number) {
            this.dataService.prev(this.url, this.data.response.previous_page_number, '').subscribe(function (res) {
                _this.data.response = res;
                _this.isPending.state = false;
            }, function (err) {
                _this.isPending.state = false;
                _this.data = new _models__WEBPACK_IMPORTED_MODULE_2__["Data"]();
            });
        }
    };
    /**
     * Get next page
     */
    PaginationComponent.prototype.next = function () {
        var _this = this;
        this.isPending.state = true;
        if (this.data.response.next_page_number) {
            this.dataService.next(this.url, this.data.response.next_page_number, '').subscribe(function (res) {
                _this.data.response = res;
                _this.isPending.state = false;
            }, function (err) {
                _this.isPending.state = false;
                _this.data = new _models__WEBPACK_IMPORTED_MODULE_2__["Data"]();
            });
        }
    };
    /**
     * Get next page
     */
    PaginationComponent.prototype.last = function () {
        var _this = this;
        this.isPending.state = true;
        if (this.data.response.num_pages) {
            this.dataService.next(this.url, this.data.response.num_pages, '').subscribe(function (res) {
                _this.data.response = res;
                _this.isPending.state = false;
            }, function (err) {
                _this.isPending.state = false;
                _this.data = new _models__WEBPACK_IMPORTED_MODULE_2__["Data"]();
            });
        }
    };
    /**
     * Realod current page
     */
    PaginationComponent.prototype.reload = function () {
        var _this = this;
        this.isPending.state = true;
        this.dataService.reload(this.url, '').subscribe(function (res) {
            _this.data.response = res;
            _this.isPending.state = false;
            _this.selectedRow.splice(0, _this.selectedRow.length);
        }, function (err) {
            _this.isPending.state = false;
            _this.data = new _models__WEBPACK_IMPORTED_MODULE_2__["Data"]();
            _this.selectedRow.splice(0, _this.selectedRow.length);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PaginationComponent.prototype, "url", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models__WEBPACK_IMPORTED_MODULE_2__["Data"])
    ], PaginationComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PaginationComponent.prototype, "selectedRow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "isPending", void 0);
    PaginationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pagination',
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/app/shared/components/grid/components/pagination/pagination.component.html"),
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/grid/grid.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/components/grid/grid.module.ts ***!
  \*******************************************************/
/*! exports provided: GridModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridModule", function() { return GridModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/app/shared/components/grid/components/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/app/shared/components/grid/utils/index.ts");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./templates */ "./src/app/shared/components/grid/templates/index.ts");
/* harmony import */ var _templates_participants_template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./templates/participants.template */ "./src/app/shared/components/grid/templates/participants.template.ts");
/* harmony import */ var _templates_date_template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./templates/date.template */ "./src/app/shared/components/grid/templates/date.template.ts");
/* harmony import */ var _components_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/filter */ "./src/app/shared/components/grid/components/filter/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var GridModule = /** @class */ (function () {
    function GridModule() {
    }
    GridModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [
                _utils__WEBPACK_IMPORTED_MODULE_4__["Utils"],
                _components_filter__WEBPACK_IMPORTED_MODULE_8__["FilterService"],
                _components_filter__WEBPACK_IMPORTED_MODULE_8__["FilterDataService"],
            ],
            declarations: [
                _components__WEBPACK_IMPORTED_MODULE_3__["GridComponent"],
                _components__WEBPACK_IMPORTED_MODULE_3__["PaginationComponent"],
                _components__WEBPACK_IMPORTED_MODULE_3__["TemplateProvider"],
                _components__WEBPACK_IMPORTED_MODULE_3__["TemplateWrapper"],
                // Grid templates
                _templates__WEBPACK_IMPORTED_MODULE_5__["ActionComponent"],
                _templates__WEBPACK_IMPORTED_MODULE_5__["DescriptionTemplate"],
                _templates_participants_template__WEBPACK_IMPORTED_MODULE_6__["ParticipantsTemplate"],
                _templates_date_template__WEBPACK_IMPORTED_MODULE_7__["DateTemplate"],
                _templates__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"],
                _templates__WEBPACK_IMPORTED_MODULE_5__["ParticipantInfoComponent"],
                _templates__WEBPACK_IMPORTED_MODULE_5__["LabelsTemplate"],
                _templates__WEBPACK_IMPORTED_MODULE_5__["OwnerInfoTemplate"],
                _templates__WEBPACK_IMPORTED_MODULE_5__["AccountsComponent"],
                _templates__WEBPACK_IMPORTED_MODULE_5__["AccountsDetailComponent"],
                _templates__WEBPACK_IMPORTED_MODULE_5__["AccountLabelsTemplate"],
                _templates__WEBPACK_IMPORTED_MODULE_5__["AccountDateTemplate"],
                _templates__WEBPACK_IMPORTED_MODULE_5__["OwnerDetailComponent"],
                _templates__WEBPACK_IMPORTED_MODULE_5__["PostsTemplate"],
                _templates__WEBPACK_IMPORTED_MODULE_5__["MemberStatusComponent"],
                _templates__WEBPACK_IMPORTED_MODULE_5__["PostStatusComponent"],
                _components_filter__WEBPACK_IMPORTED_MODULE_8__["FilterComponent"],
                _templates__WEBPACK_IMPORTED_MODULE_5__["BotStatusTemplate"],
                _templates__WEBPACK_IMPORTED_MODULE_5__["EndDateTemplate"],
                _templates__WEBPACK_IMPORTED_MODULE_5__["RepostComponent"]
            ],
            exports: [
                _components__WEBPACK_IMPORTED_MODULE_3__["GridComponent"]
            ],
            entryComponents: [
                // Grid templates
                _templates__WEBPACK_IMPORTED_MODULE_5__["ActionComponent"],
                _templates__WEBPACK_IMPORTED_MODULE_5__["DescriptionTemplate"],
                _templates_participants_template__WEBPACK_IMPORTED_MODULE_6__["ParticipantsTemplate"],
                _templates_date_template__WEBPACK_IMPORTED_MODULE_7__["DateTemplate"],
                _templates__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"],
                _templates__WEBPACK_IMPORTED_MODULE_5__["ParticipantInfoComponent"],
                _templates__WEBPACK_IMPORTED_MODULE_5__["LabelsTemplate"],
                _templates__WEBPACK_IMPORTED_MODULE_5__["OwnerInfoTemplate"],
                _templates__WEBPACK_IMPORTED_MODULE_5__["AccountsComponent"],
                _templates__WEBPACK_IMPORTED_MODULE_5__["AccountsDetailComponent"],
                _templates__WEBPACK_IMPORTED_MODULE_5__["AccountLabelsTemplate"],
                _templates__WEBPACK_IMPORTED_MODULE_5__["AccountDateTemplate"],
                _templates__WEBPACK_IMPORTED_MODULE_5__["OwnerDetailComponent"],
                _templates__WEBPACK_IMPORTED_MODULE_5__["PostsTemplate"],
                _templates__WEBPACK_IMPORTED_MODULE_5__["MemberStatusComponent"],
                _templates__WEBPACK_IMPORTED_MODULE_5__["PostStatusComponent"],
                _templates__WEBPACK_IMPORTED_MODULE_5__["BotStatusTemplate"],
                _templates__WEBPACK_IMPORTED_MODULE_5__["EndDateTemplate"],
                _templates__WEBPACK_IMPORTED_MODULE_5__["RepostComponent"]
            ]
        })
    ], GridModule);
    return GridModule;
}());



/***/ }),

/***/ "./src/app/shared/components/grid/index.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/components/grid/index.ts ***!
  \*************************************************/
/*! exports provided: GridModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _grid_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid.module */ "./src/app/shared/components/grid/grid.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridModule", function() { return _grid_module__WEBPACK_IMPORTED_MODULE_0__["GridModule"]; });




/***/ }),

/***/ "./src/app/shared/components/grid/models/data.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/components/grid/models/data.ts ***!
  \*******************************************************/
/*! exports provided: Data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
var Data = /** @class */ (function () {
    function Data() {
        this.response = {
            notFound: false,
            count: null,
            next: null,
            next_page_number: null,
            num_pages: null,
            page_size: null,
            previous: null,
            previous_page_number: null,
            pagenum: null,
            results: []
        };
    }
    return Data;
}());



/***/ }),

/***/ "./src/app/shared/components/grid/models/index.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/components/grid/models/index.ts ***!
  \********************************************************/
/*! exports provided: Data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/app/shared/components/grid/models/data.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return _data__WEBPACK_IMPORTED_MODULE_0__["Data"]; });




/***/ }),

/***/ "./src/app/shared/components/grid/services/data.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/components/grid/services/data.service.ts ***!
  \*****************************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.countOnPage = 10;
    }
    DataService.prototype.setCountOnPage = function (count) {
        this.countOnPage = count;
    };
    DataService.prototype.get = function (url, filters, page) {
        return this.http.get("" + url + this.generetaUrlParams(filters, page))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (r) {
            if (r.results.length === 0) {
                r.notFound = true;
            }
            return r;
        }));
    };
    DataService.prototype.first = function (url, filter) {
        return this.get(url, filter, 1);
    };
    DataService.prototype.prev = function (url, prevPage, filter) {
        return this.get(url, filter, prevPage);
    };
    DataService.prototype.next = function (url, nextPage, filter) {
        return this.get(url, filter, nextPage);
    };
    DataService.prototype.reload = function (url, filter) {
        return this.get(url, filter);
    };
    // To-do сделать маппинг индекса сортировки
    DataService.prototype.sort = function (url, sort, propName, filters, page) {
        var index = sort === 'desc' ? '' : '-';
        return this.http.get("" + url + this.generetaUrlParams(filters, page) + "&ordering=" + index + propName)
            .pipe(function (response) {
            return response;
        });
    };
    DataService.prototype.generetaUrlParams = function (filter, page) {
        var urlParam = "?page_size=" + this.countOnPage + "&";
        if (filter) {
            urlParam = urlParam + filter;
            urlParam = page ? urlParam + '&' : urlParam;
        }
        if (page) {
            urlParam = urlParam + ("page=" + page);
        }
        return urlParam;
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/shared/components/grid/services/index.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/grid/services/index.ts ***!
  \**********************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.service */ "./src/app/shared/components/grid/services/data.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return _data_service__WEBPACK_IMPORTED_MODULE_0__["DataService"]; });




/***/ }),

/***/ "./src/app/shared/components/grid/templates/account-date.template.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/grid/templates/account-date.template.ts ***!
  \***************************************************************************/
/*! exports provided: AccountDateTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountDateTemplate", function() { return AccountDateTemplate; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccountDateTemplate = /** @class */ (function () {
    function AccountDateTemplate() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AccountDateTemplate.prototype, "data", void 0);
    AccountDateTemplate = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n        <div class=\"field\">\n            <div class=\"field__item\">\n                {{ data.created_date | date:'medium' }}\n            </div>\n            <div class=\"field__item\">\n                <span class=\"sub-text--primary\"></span>\n            </div>\n        </div>\n    "
        })
    ], AccountDateTemplate);
    return AccountDateTemplate;
}());



/***/ }),

/***/ "./src/app/shared/components/grid/templates/account-labels.template.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/components/grid/templates/account-labels.template.ts ***!
  \*****************************************************************************/
/*! exports provided: AccountLabelsTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountLabelsTemplate", function() { return AccountLabelsTemplate; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccountLabelsTemplate = /** @class */ (function () {
    function AccountLabelsTemplate() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AccountLabelsTemplate.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AccountLabelsTemplate.prototype, "callback", void 0);
    AccountLabelsTemplate = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "<div *ngFor=\"let account of data.accounts\">\n            <div class=\"field\" *ngFor=\"let detail of account.detailed_labels\">\n                <div class=\"field__label field__label--pink\">\n                    {{detail?.label?.name}}\n                </div>\n            </div>\n        </div>\n        "
        })
    ], AccountLabelsTemplate);
    return AccountLabelsTemplate;
}());



/***/ }),

/***/ "./src/app/shared/components/grid/templates/accounts-detail.template.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/grid/templates/accounts-detail.template.ts ***!
  \******************************************************************************/
/*! exports provided: AccountsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsDetailComponent", function() { return AccountsDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccountsDetailComponent = /** @class */ (function () {
    function AccountsDetailComponent() {
    }
    AccountsDetailComponent.prototype.isDisabled = function () {
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AccountsDetailComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AccountsDetailComponent.prototype, "callback", void 0);
    AccountsDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n        <div class=\"panel__layout\">\n            <div class=\"field\">\n                <div class=\"field__button\"  *ngFor=\"let account of data.accounts\">\n                    <button class=\"button\" [disabled]=\"isDisabled()\" (click)=\"callback.detail(account)\" type=\"button\">\n                        \u0414\u0435\u0442\u0430\u043B\u0438\n                    </button>\n                </div>\n            </div>\n        </div>\n    "
        })
    ], AccountsDetailComponent);
    return AccountsDetailComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/grid/templates/accounts.template.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/grid/templates/accounts.template.ts ***!
  \***********************************************************************/
/*! exports provided: AccountsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsComponent", function() { return AccountsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccountsComponent = /** @class */ (function () {
    function AccountsComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AccountsComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AccountsComponent.prototype, "callback", void 0);
    AccountsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n        <div class=\"panel__layout\" >\n            <div class=\"screenshot-viewer__body\">\n                <div class=\"screenshot-viewer__item\">\n                    <div class=\"screenshot-viewer__field field\">\n                        <div class=\"field__layout\">\n                            <span class=\"sub-text--secondary\"></span>\n                        </div>\n                        <div class=\"field__layout\">\n                            <div class=\"screenshot-viewer__item \">\n                               <span class=\"sub-text bold\">{{ data.task_type.platform.name }}</span>\n                            </div>\n                        </div>\n                        <div class=\"field__layout\">\n                            <div class=\"screenshot-viewer__item\">\n                                Id: {{ data.entity_id }}\n                            </div>\n                        </div>\n                        <!-- <div class=\"field__layout\">\n                            <div class=\"screenshot-viewer__item\">\n                                \u0418\u043C\u044F: {{ data.entity_id }}\n                            </div>\n                        </div>-->\n                        <div class=\"field__layout\">\n                            <div class=\"screenshot-viewer__item\">\n                                <a class=\"link link--\" [href]=\"data.url\" target=\"_blank\">{{ data.url }} </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    "
        })
    ], AccountsComponent);
    return AccountsComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/grid/templates/action.template.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/grid/templates/action.template.ts ***!
  \*********************************************************************/
/*! exports provided: ActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionComponent", function() { return ActionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActionComponent = /** @class */ (function () {
    function ActionComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ActionComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ActionComponent.prototype, "callback", void 0);
    ActionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n        <div class=\"panel align-right\">\n            <div class=\"panel__layout shrink\">\n                <button class=\"button button--small-icon\" (click)=\"callback.edit(data)\" type=\"button\">\n                    <span class=\"button__icon icon icon--baseline\">\n                        <svg class=\"icon__svg\" viewBox=\"0 0 2134 2134\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n                            <g transform=\"matrix(72.4606,0,0,72.4606,86.4919,-106.29)\">\n                                <path id=\"pencil\" d=\"M6.482,27.429L8.107,25.804L3.911,21.608L2.286,23.233L2.286,25.144L4.572,25.144L4.572,27.43L6.483,27.43L6.482,27.429ZM15.821,10.857C15.821,10.595 15.69,10.464 15.428,10.464C15.309,10.464 15.207,10.506 15.124,10.589L5.445,20.268C5.362,20.351 5.32,20.453 5.32,20.572C5.32,20.834 5.451,20.965 5.713,20.965C5.832,20.965 5.934,20.923 6.017,20.84L15.696,11.161C15.779,11.078 15.821,10.976 15.821,10.857L15.821,10.857ZM14.857,7.429L22.286,14.858L7.429,29.715L0,29.715L0,22.286L14.857,7.429ZM27.054,9.143C27.054,9.774 26.834,10.309 26.393,10.75L23.429,13.714L16,6.285L18.964,3.339C19.393,2.886 19.928,2.66 20.571,2.66C21.202,2.66 21.743,2.886 22.196,3.339L26.392,7.518C26.833,7.982 27.053,8.524 27.053,9.143L27.054,9.143Z\" style=\"fill-rule:nonzero;\"/>\n                            </g>\n                        </svg>\n                    </span>\n                </button>\n            </div>\n            <div class=\"panel__layout shrink\">\n                <button class=\"button button--small-icon\" (click)=\"callback.remove(data)\" type=\"button\">\n                    <span class=\"button__icon icon icon--baseline\">\n                        <svg class=\"icon__svg\" viewBox=\"0 0 2134 2134\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n                            <g transform=\"matrix(92.1348,0,0,92.1348,-91.6518,-512.8)\">\n                                <path id=\"remove\" d=\"M23.179,23.607C23.179,24.083 23.012,24.488 22.679,24.821L20.25,27.25C19.917,27.583 19.512,27.75 19.036,27.75C18.56,27.75 18.155,27.583 17.822,27.25L12.572,22L7.322,27.25C6.989,27.583 6.584,27.75 6.108,27.75C5.632,27.75 5.227,27.583 4.894,27.25L2.465,24.821C2.132,24.488 1.965,24.083 1.965,23.607C1.965,23.131 2.132,22.726 2.465,22.393L7.715,17.143L2.465,11.893C2.132,11.56 1.965,11.155 1.965,10.679C1.965,10.203 2.132,9.798 2.465,9.465L4.894,7.036C5.227,6.703 5.632,6.536 6.108,6.536C6.584,6.536 6.989,6.703 7.322,7.036L12.572,12.286L17.822,7.036C18.155,6.703 18.56,6.536 19.036,6.536C19.512,6.536 19.917,6.703 20.25,7.036L22.679,9.465C23.012,9.798 23.179,10.203 23.179,10.679C23.179,11.155 23.012,11.56 22.679,11.893L17.429,17.143L22.679,22.393C23.012,22.726 23.179,23.131 23.179,23.607Z\" style=\"fill-rule:nonzero;\"/>\n                            </g>\n                        </svg>\n                    </span>\n                </button>\n            </div>\n        </div>\n    "
        })
    ], ActionComponent);
    return ActionComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/grid/templates/bot-status.template.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/grid/templates/bot-status.template.ts ***!
  \*************************************************************************/
/*! exports provided: BotStatusTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotStatusTemplate", function() { return BotStatusTemplate; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BotStatusTemplate = /** @class */ (function () {
    function BotStatusTemplate() {
    }
    BotStatusTemplate.prototype.getColorReason = function (color) {
        switch (color) {
            case 'crawler_error':
                return 'alert';
            case 'authorized':
                return 'success';
            case 'waiting_for_code':
                return 'warning';
            default:
                return 'secondary';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BotStatusTemplate.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BotStatusTemplate.prototype, "callback", void 0);
    BotStatusTemplate = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n        <div class=\"panel__layout\">\n            <span class=\"sub-text sub-text--{{getColorReason(data?.auth_status?.code)}}\">\n                {{data?.auth_status?.name}}\n            </span>\n        </div>\n    "
        })
    ], BotStatusTemplate);
    return BotStatusTemplate;
}());



/***/ }),

/***/ "./src/app/shared/components/grid/templates/date.template.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/components/grid/templates/date.template.ts ***!
  \*******************************************************************/
/*! exports provided: DateTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTemplate", function() { return DateTemplate; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DateTemplate = /** @class */ (function () {
    function DateTemplate() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DateTemplate.prototype, "data", void 0);
    DateTemplate = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n        <div class=\"field\">\n\n            <div class=\"field__item\">\n                <span class=\"sub-text sub-text--secondary sub-text--nowrap\"> {{ data.created_date | date:'medium' }} </span>\n            </div>\n        </div>\n    "
        })
    ], DateTemplate);
    return DateTemplate;
}());



/***/ }),

/***/ "./src/app/shared/components/grid/templates/description.template.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/grid/templates/description.template.ts ***!
  \**************************************************************************/
/*! exports provided: DescriptionTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionTemplate", function() { return DescriptionTemplate; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DescriptionTemplate = /** @class */ (function () {
    function DescriptionTemplate() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DescriptionTemplate.prototype, "data", void 0);
    DescriptionTemplate = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n        <div class=\"field\">\n            <div class=\"field__title\">\n                <span class=\"sub-text\">{{data.crw_title}}</span>\n            </div>\n            <div class=\"field__item field__item--large-mb\">\n                <a class=\"link link--\" [href]=\"data.crw_url\" target=\"_blank\">{{data.crw_url?.length > 80 ? data.crw_url.slice(0,80) + '...' : data.crw_url}}</a>\n            </div>\n        </div>\n    "
        })
    ], DescriptionTemplate);
    return DescriptionTemplate;
}());



/***/ }),

/***/ "./src/app/shared/components/grid/templates/detail.template.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/grid/templates/detail.template.ts ***!
  \*********************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DetailComponent = /** @class */ (function () {
    function DetailComponent() {
    }
    DetailComponent.prototype.isDisabled = function () {
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DetailComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DetailComponent.prototype, "callback", void 0);
    DetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n        <div class=\"panel align-right\">\n            <div class=\"panel__layout shrink\">\n                <button class=\"button\" [disabled]=\"isDisabled()\" (click)=\"callback.detail(data)\" type=\"button\">\n                    \u0414\u0435\u0442\u0430\u043B\u0438\n                </button>\n            </div>\n        </div>\n    "
        })
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/grid/templates/end-date.template.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/grid/templates/end-date.template.ts ***!
  \***********************************************************************/
/*! exports provided: EndDateTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndDateTemplate", function() { return EndDateTemplate; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EndDateTemplate = /** @class */ (function () {
    function EndDateTemplate() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EndDateTemplate.prototype, "data", void 0);
    EndDateTemplate = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n        <div class=\"field\">\n\n            <div class=\"field__item\">\n                <span class=\"sub-text sub-text--secondary sub-text--nowrap\"> {{ data.done_date | date:'medium' }} </span>\n            </div>\n        </div>\n    "
        })
    ], EndDateTemplate);
    return EndDateTemplate;
}());



/***/ }),

/***/ "./src/app/shared/components/grid/templates/index.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/components/grid/templates/index.ts ***!
  \***********************************************************/
/*! exports provided: ActionComponent, DescriptionTemplate, ParticipantsTemplate, DateTemplate, EndDateTemplate, DetailComponent, ParticipantInfoComponent, LabelsTemplate, OwnerInfoTemplate, AccountsComponent, AccountsDetailComponent, AccountLabelsTemplate, AccountDateTemplate, OwnerDetailComponent, PostsTemplate, PostStatusComponent, MemberStatusComponent, BotStatusTemplate, RepostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action.template */ "./src/app/shared/components/grid/templates/action.template.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionComponent", function() { return _action_template__WEBPACK_IMPORTED_MODULE_0__["ActionComponent"]; });

/* harmony import */ var _description_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./description.template */ "./src/app/shared/components/grid/templates/description.template.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DescriptionTemplate", function() { return _description_template__WEBPACK_IMPORTED_MODULE_1__["DescriptionTemplate"]; });

/* harmony import */ var _participants_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./participants.template */ "./src/app/shared/components/grid/templates/participants.template.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParticipantsTemplate", function() { return _participants_template__WEBPACK_IMPORTED_MODULE_2__["ParticipantsTemplate"]; });

/* harmony import */ var _date_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date.template */ "./src/app/shared/components/grid/templates/date.template.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateTemplate", function() { return _date_template__WEBPACK_IMPORTED_MODULE_3__["DateTemplate"]; });

/* harmony import */ var _end_date_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./end-date.template */ "./src/app/shared/components/grid/templates/end-date.template.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EndDateTemplate", function() { return _end_date_template__WEBPACK_IMPORTED_MODULE_4__["EndDateTemplate"]; });

/* harmony import */ var _detail_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail.template */ "./src/app/shared/components/grid/templates/detail.template.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return _detail_template__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"]; });

/* harmony import */ var _participant_info_template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./participant-info.template */ "./src/app/shared/components/grid/templates/participant-info.template.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParticipantInfoComponent", function() { return _participant_info_template__WEBPACK_IMPORTED_MODULE_6__["ParticipantInfoComponent"]; });

/* harmony import */ var _labels_template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./labels.template */ "./src/app/shared/components/grid/templates/labels.template.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LabelsTemplate", function() { return _labels_template__WEBPACK_IMPORTED_MODULE_7__["LabelsTemplate"]; });

/* harmony import */ var _owner_info_template__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./owner-info.template */ "./src/app/shared/components/grid/templates/owner-info.template.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OwnerInfoTemplate", function() { return _owner_info_template__WEBPACK_IMPORTED_MODULE_8__["OwnerInfoTemplate"]; });

/* harmony import */ var _accounts_template__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./accounts.template */ "./src/app/shared/components/grid/templates/accounts.template.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountsComponent", function() { return _accounts_template__WEBPACK_IMPORTED_MODULE_9__["AccountsComponent"]; });

/* harmony import */ var _accounts_detail_template__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./accounts-detail.template */ "./src/app/shared/components/grid/templates/accounts-detail.template.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountsDetailComponent", function() { return _accounts_detail_template__WEBPACK_IMPORTED_MODULE_10__["AccountsDetailComponent"]; });

/* harmony import */ var _account_labels_template__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./account-labels.template */ "./src/app/shared/components/grid/templates/account-labels.template.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountLabelsTemplate", function() { return _account_labels_template__WEBPACK_IMPORTED_MODULE_11__["AccountLabelsTemplate"]; });

/* harmony import */ var _account_date_template__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./account-date.template */ "./src/app/shared/components/grid/templates/account-date.template.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountDateTemplate", function() { return _account_date_template__WEBPACK_IMPORTED_MODULE_12__["AccountDateTemplate"]; });

/* harmony import */ var _owner_detail_template__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./owner-detail.template */ "./src/app/shared/components/grid/templates/owner-detail.template.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OwnerDetailComponent", function() { return _owner_detail_template__WEBPACK_IMPORTED_MODULE_13__["OwnerDetailComponent"]; });

/* harmony import */ var _posts_template__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./posts-template */ "./src/app/shared/components/grid/templates/posts-template.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostsTemplate", function() { return _posts_template__WEBPACK_IMPORTED_MODULE_14__["PostsTemplate"]; });

/* harmony import */ var _post_status_template__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./post-status.template */ "./src/app/shared/components/grid/templates/post-status.template.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostStatusComponent", function() { return _post_status_template__WEBPACK_IMPORTED_MODULE_15__["PostStatusComponent"]; });

/* harmony import */ var _member_status_template__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./member-status.template */ "./src/app/shared/components/grid/templates/member-status.template.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemberStatusComponent", function() { return _member_status_template__WEBPACK_IMPORTED_MODULE_16__["MemberStatusComponent"]; });

/* harmony import */ var _bot_status_template__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./bot-status.template */ "./src/app/shared/components/grid/templates/bot-status.template.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BotStatusTemplate", function() { return _bot_status_template__WEBPACK_IMPORTED_MODULE_17__["BotStatusTemplate"]; });

/* harmony import */ var _repost_action_template__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./repost-action.template */ "./src/app/shared/components/grid/templates/repost-action.template.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RepostComponent", function() { return _repost_action_template__WEBPACK_IMPORTED_MODULE_18__["RepostComponent"]; });






















/***/ }),

/***/ "./src/app/shared/components/grid/templates/labels.template.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/grid/templates/labels.template.ts ***!
  \*********************************************************************/
/*! exports provided: LabelsTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelsTemplate", function() { return LabelsTemplate; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LabelsTemplate = /** @class */ (function () {
    function LabelsTemplate() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LabelsTemplate.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LabelsTemplate.prototype, "callback", void 0);
    LabelsTemplate = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n            <div class=\"field\" *ngFor=\"let detail of data.detailed_labels\">\n                <div class=\"field__label field__label--pink\">\n                    {{detail?.label?.name}}\n                </div>\n            </div>\n            <div class=\"field\">\n                <button class=\"button button--primary\" (click)=\"callback.addLabel(data)\">+</button>\n            </div>\n        "
        })
    ], LabelsTemplate);
    return LabelsTemplate;
}());



/***/ }),

/***/ "./src/app/shared/components/grid/templates/member-status.template.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/grid/templates/member-status.template.ts ***!
  \****************************************************************************/
/*! exports provided: MemberStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberStatusComponent", function() { return MemberStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MemberStatusComponent = /** @class */ (function () {
    function MemberStatusComponent() {
    }
    MemberStatusComponent.prototype.getColorReason = function (color) {
        switch (color) {
            case 'error':
                return 'alert';
            case 'done':
                return 'success';
            case 'in_progress':
                return 'warning';
            default:
                return 'secondary';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MemberStatusComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MemberStatusComponent.prototype, "callback", void 0);
    MemberStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n        <div class=\"panel__layout\">\n            <span class=\"sub-text sub-text--{{getColorReason(data.members_grab_status?.code)}}\">\n                {{data.members_grab_status?.name || '\u041D\u0435 \u043D\u0430\u0447\u0430\u0442\u043E'}}\n            </span>\n        </div>\n    "
        })
    ], MemberStatusComponent);
    return MemberStatusComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/grid/templates/owner-detail.template.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/grid/templates/owner-detail.template.ts ***!
  \***************************************************************************/
/*! exports provided: OwnerDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerDetailComponent", function() { return OwnerDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OwnerDetailComponent = /** @class */ (function () {
    function OwnerDetailComponent() {
    }
    OwnerDetailComponent.prototype.isDisabled = function () {
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OwnerDetailComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OwnerDetailComponent.prototype, "callback", void 0);
    OwnerDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n        <div class=\"panel align-right\">\n            <button class=\"button button--primary\" (click)=\"callback.owner(data)\">\u0414\u0430\u043D\u043D\u044B\u0435 \u0441\u0431\u043E\u0440\u0430</button>\n        </div>\n    "
        })
    ], OwnerDetailComponent);
    return OwnerDetailComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/grid/templates/owner-info.template.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/grid/templates/owner-info.template.ts ***!
  \*************************************************************************/
/*! exports provided: OwnerInfoTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerInfoTemplate", function() { return OwnerInfoTemplate; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OwnerInfoTemplate = /** @class */ (function () {
    function OwnerInfoTemplate() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OwnerInfoTemplate.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OwnerInfoTemplate.prototype, "callback", void 0);
    OwnerInfoTemplate = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n        <div class=\"field\">\n            <div class=\"field__item\">\n                <span class=\"sub-text\"> {{ data.performer.email }} </span>\n            </div>\n            <div class=\"field__item\">\n                <span class=\"sub-text sub-text--secondary sub-text--nowrap\"> {{ data.start_date | date:'medium' }} </span>\n            </div>\n        </div>\n        "
        })
    ], OwnerInfoTemplate);
    return OwnerInfoTemplate;
}());



/***/ }),

/***/ "./src/app/shared/components/grid/templates/participant-info.template.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/components/grid/templates/participant-info.template.ts ***!
  \*******************************************************************************/
/*! exports provided: ParticipantInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantInfoComponent", function() { return ParticipantInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParticipantInfoComponent = /** @class */ (function () {
    function ParticipantInfoComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ParticipantInfoComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ParticipantInfoComponent.prototype, "callback", void 0);
    ParticipantInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n        <div class=\"panel__layout\">\n            <div class=\"screenshot-viewer__body\">\n                <div class=\"screenshot-viewer__item\">\n                    <div class=\"screenshot-viewer__field field\">\n                        <div class=\"field__layout\">\n                            <span class=\"sub-text--secondary\">{{data?.crw_fullname}}</span>\n                        </div>\n                        <div class=\"field__layout\">\n                            <div class=\"screenshot-viewer__item\">\n                                <span class=\"sub-text sub-text--primary\">{{data?.crw_name}}</span>\n                            </div>\n                        </div>\n                        <div class=\"field__layout\">\n                            <div class=\"screenshot-viewer__item\">\n                                Id: {{data.crw_id}}\n                            </div>\n                        </div>\n                        <div class=\"field__layout\">\n                            <div class=\"screenshot-viewer__item\">\n                                Url: <a class=\"link link--\" [href]=\"data.crw_url\" target=\"_blank\">&nbsp;{{ data.crw_url }} </a>\n                            </div>\n                        </div>\n                        <div class=\"field__layout\">\n                            <div class=\"screenshot-viewer__item\">\n                                \u041F\u0441\u0435\u0432\u0434\u043E\u043D\u0438\u043C: {{data.crw_screen_name ? data.crw_screen_name : '\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u043E'}}\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    "
        })
    ], ParticipantInfoComponent);
    return ParticipantInfoComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/grid/templates/participants.template.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/grid/templates/participants.template.ts ***!
  \***************************************************************************/
/*! exports provided: ParticipantsTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantsTemplate", function() { return ParticipantsTemplate; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParticipantsTemplate = /** @class */ (function () {
    function ParticipantsTemplate() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ParticipantsTemplate.prototype, "data", void 0);
    ParticipantsTemplate = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n        <div class=\"field\">\n            <div class=\"field__item\">\n            <span class=\"sub-text sub-text--primary bold\">{{data.members_count}}</span> / <span class=\"sub-text sub-text--success bold\">{{data.labeled_members_count}}</span>\n            </div>\n        </div>\n    "
        })
    ], ParticipantsTemplate);
    return ParticipantsTemplate;
}());



/***/ }),

/***/ "./src/app/shared/components/grid/templates/post-status.template.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/grid/templates/post-status.template.ts ***!
  \**************************************************************************/
/*! exports provided: PostStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostStatusComponent", function() { return PostStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostStatusComponent = /** @class */ (function () {
    function PostStatusComponent() {
    }
    PostStatusComponent.prototype.getColorReason = function (color) {
        switch (color) {
            case 'error':
                return 'alert';
            case 'done':
                return 'success';
            case 'in_progress':
                return 'warning';
            default:
                return 'secondary';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PostStatusComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PostStatusComponent.prototype, "callback", void 0);
    PostStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n        <div class=\"panel__layout\">\n            <span class=\"sub-text sub-text--{{getColorReason(data.posts_grab_status?.code)}}\">\n                {{data.posts_grab_status?.name || '\u041D\u0435 \u043D\u0430\u0447\u0430\u0442\u043E'}}\n            </span>\n        </div>\n    "
        })
    ], PostStatusComponent);
    return PostStatusComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/grid/templates/posts-template.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/grid/templates/posts-template.ts ***!
  \********************************************************************/
/*! exports provided: PostsTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsTemplate", function() { return PostsTemplate; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostsTemplate = /** @class */ (function () {
    function PostsTemplate() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PostsTemplate.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PostsTemplate.prototype, "callback", void 0);
    PostsTemplate = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n        <div class=\"modal-box__post\">\n        <div class=\"modal-box__post--text\">\n        {{ data.crw_text }}\n        </div>\n            <table class=\"table table--small table--tertiary\">\n                <tbody class=\"table__tbody\">\n                    <tr class=\"table__row\">\n                        <td class=\"table__td\">\n                            <span class=\"sub-text--secondary\">\u0410\u0432\u0442\u043E\u0440:</span>\n                            <span>{{ data.account?.crw_fullname }}</span>\n                        </td>\n                    </tr>\n                    <tr class=\"table__row\">\n                        <td class=\"table__td\">\n                            <span class=\"sub-text--secondary\">\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043E:</span>\n                            {{ data.crw_published_date | date:'medium' }}\n                        </td>\n                        <td class=\"table__td\" colspan=\"3\">\n                            <span class=\"sub-text--secondary\">\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043F\u043E\u0441\u0442:</span>\n                            <a class=\"link\" [href]=\"'https://www.facebook.com/' + data.crw_id\" target=\"_blank\">{{ 'https://www.facebook.com/' + data.crw_id }}</a>\n                        </td>\n                   \n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        "
        })
    ], PostsTemplate);
    return PostsTemplate;
}());



/***/ }),

/***/ "./src/app/shared/components/grid/templates/repost-action.template.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/grid/templates/repost-action.template.ts ***!
  \****************************************************************************/
/*! exports provided: RepostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepostComponent", function() { return RepostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RepostComponent = /** @class */ (function () {
    function RepostComponent() {
    }
    RepostComponent.prototype.isDisabled = function () {
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RepostComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RepostComponent.prototype, "callback", void 0);
    RepostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n        <div class=\"panel align-right\">\n            <div class=\"panel__layout shrink\">\n                <button class=\"button\" [disabled]=\"isDisabled()\" (click)=\"callback.showReposts(data)\" type=\"button\">\n                    \u0420\u0435\u043F\u043E\u0441\u0442\u044B\n                </button>\n            </div>\n        </div>\n    "
        })
    ], RepostComponent);
    return RepostComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/grid/utils/index.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/components/grid/utils/index.ts ***!
  \*******************************************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.prototype.getValueByPath = function (item, path, type) {
        if (path) {
            try {
                var propNames = path.split('.');
                var value_1;
                if (propNames.length === 0) {
                    throw new Error();
                }
                propNames.map(function (prop) {
                    item = item[prop];
                    if (item != undefined) {
                        value_1 = item;
                    }
                    else {
                        type === Number ? value_1 = 0 : value_1 = 'Не указано';
                    }
                });
                return value_1;
            }
            catch (e) {
                console.error('Path parsing error');
            }
        }
    };
    Utils.prototype.contains = function (array, value) {
        var index = array.indexOf(value);
        if (index !== -1) {
            return true;
        }
        else {
            return false;
        }
    };
    return Utils;
}());



/***/ }),

/***/ "./src/app/shared/components/modal/modal.base.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/components/modal/modal.base.component.ts ***!
  \*****************************************************************/
/*! exports provided: ModalBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBaseComponent", function() { return ModalBaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_modal_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/modal-state */ "./src/app/shared/components/modal/model/modal-state.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalBaseComponent = /** @class */ (function () {
    function ModalBaseComponent() {
        this.internalState = new _model_modal_state__WEBPACK_IMPORTED_MODULE_1__["ModalState"](false);
    }
    Object.defineProperty(ModalBaseComponent.prototype, "modalState", {
        get: function () {
            return this.internalState;
        },
        set: function (modalState) {
            this.hasChangeState(modalState.isOpen);
            modalState.isOpen ? this.onOpen(modalState.isOpen) : this.onClose(modalState.isOpen);
            this.internalState = modalState;
        },
        enumerable: true,
        configurable: true
    });
    ModalBaseComponent.prototype.close = function () {
        this.modalState = new _model_modal_state__WEBPACK_IMPORTED_MODULE_1__["ModalState"](false);
    };
    // tslint:disable-next-line:no-empty
    ModalBaseComponent.prototype.onOpen = function (state) { };
    ;
    // tslint:disable-next-line:no-empty
    ModalBaseComponent.prototype.onClose = function (state) { };
    ;
    // tslint:disable-next-line:no-empty
    ModalBaseComponent.prototype.hasChangeState = function (state) { };
    ;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ModalBaseComponent.prototype, "modalState", null);
    ModalBaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: ''
        })
    ], ModalBaseComponent);
    return ModalBaseComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/modal/model/modal-state.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/modal/model/modal-state.ts ***!
  \**************************************************************/
/*! exports provided: ModalState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalState", function() { return ModalState; });
var ModalState = /** @class */ (function () {
    function ModalState(isOpen) {
        this.isOpen = isOpen;
    }
    return ModalState;
}());



/***/ }),

/***/ "./src/app/shared/components/select-field/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/components/select-field/index.ts ***!
  \*********************************************************/
/*! exports provided: SelectFiledModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _select_field_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-field.module */ "./src/app/shared/components/select-field/select-field.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectFiledModule", function() { return _select_field_module__WEBPACK_IMPORTED_MODULE_0__["SelectFiledModule"]; });




/***/ }),

/***/ "./src/app/shared/components/select-field/select-field.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/select-field/select-field.component.ts ***!
  \**************************************************************************/
/*! exports provided: CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, MySelectFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR", function() { return CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySelectFieldComponent", function() { return MySelectFieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _select_field_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-field.service */ "./src/app/shared/components/select-field/select-field.service.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var noop = function () { };
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return MySelectFieldComponent; }),
    multi: true
};
var MySelectFieldComponent = /** @class */ (function () {
    function MySelectFieldComponent(selectFieldService, appState) {
        this.selectFieldService = selectFieldService;
        this.appState = appState;
        this.dataSource = [];
        this.innerValue = '';
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        this.state = this.appState.state;
    }
    MySelectFieldComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectFieldService.get(this.type).subscribe(function (res) {
            _this.dataSource = res.results;
        });
    };
    MySelectFieldComponent.prototype.byId = function (innerItem, dictionaryItem) {
        return innerItem && dictionaryItem ? innerItem.id === dictionaryItem.id : innerItem === dictionaryItem;
    };
    Object.defineProperty(MySelectFieldComponent.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    MySelectFieldComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
    };
    MySelectFieldComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    MySelectFieldComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    MySelectFieldComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MySelectFieldComponent.prototype, "className", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MySelectFieldComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], MySelectFieldComponent.prototype, "isDisabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MySelectFieldComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MySelectFieldComponent.prototype, "title", void 0);
    MySelectFieldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-select-field',
            template: "\n        <select \n            [ngClass]=\"className || 'select'\"\n            [(ngModel)]=\"value\"\n            [compareWith]=\"byId\"\n        >\n            <option [ngValue]=\"null\">{{title ? title : '\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435'}}</option>\n            <option [ngValue]=\"object\" *ngFor=\"let object of dataSource\">\n                {{object.name}}\n            </option>\n        </select>\n    ",
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, _select_field_service__WEBPACK_IMPORTED_MODULE_2__["SelectFieldService"]]
        }),
        __metadata("design:paramtypes", [_select_field_service__WEBPACK_IMPORTED_MODULE_2__["SelectFieldService"],
            _app_service__WEBPACK_IMPORTED_MODULE_3__["AppState"]])
    ], MySelectFieldComponent);
    return MySelectFieldComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/select-field/select-field.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/select-field/select-field.module.ts ***!
  \***********************************************************************/
/*! exports provided: SelectFiledModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectFiledModule", function() { return SelectFiledModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _select_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-field.component */ "./src/app/shared/components/select-field/select-field.component.ts");
/* harmony import */ var _select_field_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select-field.service */ "./src/app/shared/components/select-field/select-field.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SelectFiledModule = /** @class */ (function () {
    function SelectFiledModule() {
    }
    SelectFiledModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _select_field_component__WEBPACK_IMPORTED_MODULE_3__["MySelectFieldComponent"]
            ],
            providers: [
                _select_field_service__WEBPACK_IMPORTED_MODULE_4__["SelectFieldService"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ],
            exports: [
                _select_field_component__WEBPACK_IMPORTED_MODULE_3__["MySelectFieldComponent"]
            ],
        })
    ], SelectFiledModule);
    return SelectFiledModule;
}());



/***/ }),

/***/ "./src/app/shared/components/select-field/select-field.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/select-field/select-field.service.ts ***!
  \************************************************************************/
/*! exports provided: SelectFieldService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectFieldService", function() { return SelectFieldService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_custom_http_params__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/custom-http-params */ "./src/app/core/custom-http-params.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SelectFieldService = /** @class */ (function () {
    function SelectFieldService(http) {
        this.http = http;
    }
    SelectFieldService.prototype.get = function (url) {
        return this.http.get("/" + url, {
            params: new _core_custom_http_params__WEBPACK_IMPORTED_MODULE_3__["CustomHttpParams"](true)
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
        }));
    };
    SelectFieldService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SelectFieldService);
    return SelectFieldService;
}());



/***/ }),

/***/ "./src/app/shared/components/tabs/components/index.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/tabs/components/index.ts ***!
  \************************************************************/
/*! exports provided: TabsBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabs_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.base.component */ "./src/app/shared/components/tabs/components/tabs.base.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabsBaseComponent", function() { return _tabs_base_component__WEBPACK_IMPORTED_MODULE_0__["TabsBaseComponent"]; });




/***/ }),

/***/ "./src/app/shared/components/tabs/components/main-tabs/main.tabs.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/tabs/components/main-tabs/main.tabs.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"layout__block layout__block--content\">\r\n    <div class=\"layout__block shrink\">\r\n        <div class=\"nav-sub\">\r\n            <div class=\"nav-sub__layout\">\r\n                <div class=\"nav-sub__title\">\r\n                    <span class=\"bold\">Этапы обработки:</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"nav-sub__layout\">\r\n                <a class=\"nav-sub__link\" [ngClass]=\"{'nav-sub__link--active': active == 'new'}\" routerLink=\"/main/new\">\r\n                    <span class=\"bold\">Новое:\r\n                        <span class=\"sub-text--secondary\">{{state?.new?.count}}</span>\r\n                    </span>\r\n                </a>\r\n            </div>\r\n            <div class=\"nav-sub__layout\">\r\n                <a class=\"nav-sub__link\" [ngClass]=\"{'nav-sub__link--active': active == 'inWork'}\" routerLink=\"/main/in-work\">\r\n                    <span class=\"bold\">В работе:\r\n                        <span class=\"sub-text--secondary\">{{state?.inProcess?.count}}</span>\r\n                    </span>\r\n                </a>\r\n            </div>\r\n            <div class=\"nav-sub__layout\">\r\n                <a class=\"nav-sub__link\" [ngClass]=\"{'nav-sub__link--active': active == 'ready'}\" routerLink=\"/main/ready\">\r\n                    <span class=\"bold\">Отработано:\r\n                        <span class=\"sub-text--secondary\">{{state?.ready?.count}}</span>\r\n                    </span>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <ng-content></ng-content>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/tabs/components/main-tabs/main.tabs.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/tabs/components/main-tabs/main.tabs.component.ts ***!
  \************************************************************************************/
/*! exports provided: MainTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainTabsComponent", function() { return MainTabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tabs_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tabs.base.component */ "./src/app/shared/components/tabs/components/tabs.base.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MainTabsComponent = /** @class */ (function (_super) {
    __extends(MainTabsComponent, _super);
    function MainTabsComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainTabsComponent.prototype.ngOnInit = function () {
        this.getCounters();
    };
    MainTabsComponent.prototype.getCounters = function () {
        var _this = this;
        this.dataService.get('tasks/scrolling_new/count').subscribe(function (e) {
            _this.state.new = e;
        });
        this.dataService.get('tasks/scrolling_in_precess/count').subscribe(function (e) {
            _this.state.inProcess = e;
        });
        this.dataService.get('tasks/scrolling_done/count').subscribe(function (e) {
            _this.state.ready = e;
        });
    };
    MainTabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'main-tabs',
            template: __webpack_require__(/*! ./main.tabs.component.html */ "./src/app/shared/components/tabs/components/main-tabs/main.tabs.component.html")
        })
    ], MainTabsComponent);
    return MainTabsComponent;
}(_tabs_base_component__WEBPACK_IMPORTED_MODULE_1__["TabsBaseComponent"]));



/***/ }),

/***/ "./src/app/shared/components/tabs/components/tabs.base.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/tabs/components/tabs.base.component.ts ***!
  \**************************************************************************/
/*! exports provided: TabsBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsBaseComponent", function() { return TabsBaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service */ "./src/app/shared/components/tabs/service/index.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsBaseComponent = /** @class */ (function () {
    function TabsBaseComponent(dataService, appState) {
        this.dataService = dataService;
        this.appState = appState;
        this.state = this.appState.state;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TabsBaseComponent.prototype, "active", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TabsBaseComponent.prototype, "data", void 0);
    TabsBaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: ''
        }),
        __metadata("design:paramtypes", [_service__WEBPACK_IMPORTED_MODULE_1__["TabService"],
            _app_service__WEBPACK_IMPORTED_MODULE_2__["AppState"]])
    ], TabsBaseComponent);
    return TabsBaseComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/tabs/service/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/components/tabs/service/index.ts ***!
  \*********************************************************/
/*! exports provided: TabService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tab_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab.service */ "./src/app/shared/components/tabs/service/tab.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabService", function() { return _tab_service__WEBPACK_IMPORTED_MODULE_0__["TabService"]; });




/***/ }),

/***/ "./src/app/shared/components/tabs/service/tab.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/tabs/service/tab.service.ts ***!
  \***************************************************************/
/*! exports provided: TabService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabService", function() { return TabService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabService = /** @class */ (function () {
    function TabService(http) {
        this.http = http;
    }
    TabService.prototype.get = function (url) {
        return this.http.get(url);
    };
    TabService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TabService);
    return TabService;
}());



/***/ }),

/***/ "./src/app/shared/components/tabs/tab.module.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/components/tabs/tab.module.ts ***!
  \******************************************************/
/*! exports provided: TabModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabModule", function() { return TabModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service */ "./src/app/shared/components/tabs/service/index.ts");
/* harmony import */ var _components_main_tabs_main_tabs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main-tabs/main.tabs.component */ "./src/app/shared/components/tabs/components/main-tabs/main.tabs.component.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components */ "./src/app/shared/components/tabs/components/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TabModule = /** @class */ (function () {
    function TabModule() {
    }
    TabModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_main_tabs_main_tabs_component__WEBPACK_IMPORTED_MODULE_5__["MainTabsComponent"],
                _components__WEBPACK_IMPORTED_MODULE_6__["TabsBaseComponent"]
            ],
            providers: [
                _service__WEBPACK_IMPORTED_MODULE_4__["TabService"],
                _components_main_tabs_main_tabs_component__WEBPACK_IMPORTED_MODULE_5__["MainTabsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            ],
            exports: [
                _components_main_tabs_main_tabs_component__WEBPACK_IMPORTED_MODULE_5__["MainTabsComponent"]
            ],
        })
    ], TabModule);
    return TabModule;
}());



/***/ }),

/***/ "./src/app/shared/notifier.config.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/notifier.config.ts ***!
  \*******************************************/
/*! exports provided: notifierConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifierConfig", function() { return notifierConfig; });
var notifierConfig = {
    position: {
        horizontal: {
            position: 'right',
            distance: 12
        }
    },
    behaviour: {
        autoHide: 3000,
        onClick: 'hide',
        showDismissButton: false
    }
};


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_tabs_tab_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/tabs/tab.module */ "./src/app/shared/components/tabs/tab.module.ts");
/* harmony import */ var _components_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/grid */ "./src/app/shared/components/grid/index.ts");
/* harmony import */ var _components_modal_modal_base_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/modal/modal.base.component */ "./src/app/shared/components/modal/modal.base.component.ts");
/* harmony import */ var _components_select_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/select-field */ "./src/app/shared/components/select-field/index.ts");
/* harmony import */ var _components_action_button_action_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/action-button/action-button.component */ "./src/app/shared/components/action-button/action-button.component.ts");
/* harmony import */ var _notifier_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./notifier.config */ "./src/app/shared/notifier.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_modal_modal_base_component__WEBPACK_IMPORTED_MODULE_7__["ModalBaseComponent"],
                _components_action_button_action_button_component__WEBPACK_IMPORTED_MODULE_9__["ActionButtonComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _components_tabs_tab_module__WEBPACK_IMPORTED_MODULE_5__["TabModule"],
                _components_grid__WEBPACK_IMPORTED_MODULE_6__["GridModule"],
                _components_select_field__WEBPACK_IMPORTED_MODULE_8__["SelectFiledModule"],
                angular_notifier__WEBPACK_IMPORTED_MODULE_2__["NotifierModule"].withConfig(_notifier_config__WEBPACK_IMPORTED_MODULE_10__["notifierConfig"])
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _components_tabs_tab_module__WEBPACK_IMPORTED_MODULE_5__["TabModule"],
                _components_grid__WEBPACK_IMPORTED_MODULE_6__["GridModule"],
                _components_select_field__WEBPACK_IMPORTED_MODULE_8__["SelectFiledModule"],
                _components_modal_modal_base_component__WEBPACK_IMPORTED_MODULE_7__["ModalBaseComponent"],
                _components_action_button_action_button_component__WEBPACK_IMPORTED_MODULE_9__["ActionButtonComponent"],
                angular_notifier__WEBPACK_IMPORTED_MODULE_2__["NotifierModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-auth-auth-module~modules-main-main-module.js.map