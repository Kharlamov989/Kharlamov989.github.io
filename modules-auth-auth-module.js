(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-auth-auth-module"],{

/***/ "./src/app/modules/auth/auth-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/auth/auth-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.component */ "./src/app/modules/auth/auth.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { AuthGuard } from '../../core/guards';
var routes = [
    { path: '', component: _auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"] },
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/auth/auth.component.html":
/*!**************************************************!*\
  !*** ./src/app/modules/auth/auth.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"layout\">\r\n    <div class=\"layout__block\">\r\n        <div class=\"login-box login-box--sign-in\">\r\n            <form class=\"login-box__container login-box__container--sign-in\" [formGroup]=\"loginForm\" (ngSubmit)=\"submit()\">\r\n                <div class=\"login-box__layout\">\r\n                    <div class=\"panel\">\r\n                        <div class=\"panel__layout\">\r\n                            <div class=\"login-box__title\">\r\n                                Справочник организаций\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"login-box__layout\">\r\n                    <div class=\"group-input\">\r\n                        <input class=\"group-input__input input\" type=\"email\" placeholder=\"E-mail\" formControlName=\"email\" />\r\n                        <input class=\"group-input__input group-input__input--last input\" type=\"password\" placeholder=\"Пароль\"\r\n                            formControlName=\"password\" />\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"login-box__layout\">\r\n                    <div class=\"login-box__message login-box__message--error\" *ngIf=\"error\">Ошибка входа: не верный\r\n                        логин или пароль</div>\r\n                </div>\r\n\r\n                <div class=\"login-box__layout\">\r\n                    <div class=\"panel\">\r\n                        <div class=\"panel__layout shrink\">\r\n                            <button class=\"login-box__button button\" type=\"submit\">\r\n                                Войти\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n\r\n            <form class=\"login-box__container login-box__container--password-recovery\">\r\n                <div class=\"login-box__layout\">\r\n                    <div class=\"panel\">\r\n                        <div class=\"panel__layout\">\r\n                            <div class=\"login-box__title\">\r\n                                Восстановление пароля:\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"panel__layout shrink\">\r\n                            <div class=\"logo logo--login logo--n-m\">\r\n                                <svg class=\"logo__icon\" viewBox=\"0 0 35 18\" version=\"1.1\">\r\n                                    <path d=\"M4.783,4.129c2.41,-1.587 4.691,-2.303 6.175,-2.647c-1.969,1.76 -3.207,4.315 -3.207,7.158c0,2.843 1.238,5.398 3.207,7.158c-1.484,-0.344 -3.765,-1.06 -6.175,-2.647c-2.35,-1.546 -3.883,-3.304 -4.783,-4.511c0.9,-1.207 2.433,-2.965 4.783,-4.511Zm25.234,0c-2.41,-1.587 -4.691,-2.303 -6.175,-2.647c1.969,1.76 3.207,4.315 3.207,7.158c0,2.843 -1.238,5.398 -3.207,7.158c1.484,-0.344 3.765,-1.06 6.175,-2.647c2.35,-1.546 3.883,-3.304 4.783,-4.511c-0.9,-1.207 -2.433,-2.965 -4.783,-4.511Zm-14.869,3.215l4.131,-7.132c-0.603,-0.134 -1.231,-0.212 -1.877,-0.212c-2.081,0 -3.984,0.73 -5.48,1.948l3.178,5.482l0.048,-0.086Zm10.525,-1.283c-0.797,-2.526 -2.731,-4.544 -5.198,-5.477l-3.173,5.477l8.371,0Zm0.226,0.842l-6.494,0l0.251,0.437l4.131,7.13c1.414,-1.538 2.285,-3.585 2.285,-5.835c0,-0.592 -0.061,-1.19 -0.173,-1.732Zm-11.502,1.749l-3.381,-5.838c-1.413,1.538 -2.284,3.59 -2.284,5.841c0,0.592 0.06,1.135 0.173,1.737l6.494,0l-1.002,-1.74Zm-5.267,2.582c0.798,2.526 2.732,4.545 5.198,5.478l3.174,-5.478l-8.372,0Zm9.772,-0.002l-3.382,5.836c0.607,0.134 1.236,0.212 1.882,0.212c2.081,0 3.984,-0.73 5.479,-1.948l-3.177,-5.482l-0.802,1.382Z\"\r\n                                        style=\"fill:#00416c;fill-rule:nonzero;\" />\r\n                                </svg>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"panel__layout shrink\">\r\n                            <div class=\"login-box__title login-box__title--logo\">\r\n                                Аргус 360\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"login-box__layout\">\r\n                    <div class=\"group-input\">\r\n                        <input class=\"group-input__input input\" type=\"email\" placeholder=\"E-mail\" />\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"login-box__layout\">\r\n                    <div class=\"panel\">\r\n                        <div class=\"panel__layout shrink\">\r\n                            <button class=\"login-box__button button\" type=\"submit\">\r\n                                Продолжить\r\n                            </button>\r\n                        </div>\r\n                        <div class=\"panel__layout\">\r\n                            <div class=\"login-box__message\">\r\n                                <a href=\"#\" class=\"link\">Отмена</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n\r\n            <form class=\"login-box__container login-box__container--successful-recovery\">\r\n                <div class=\"login-box__layout\">\r\n                    <div class=\"panel\">\r\n                        <div class=\"panel__layout\">\r\n                            <div class=\"login-box__title\">\r\n                                Восстановление пароля:\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"panel__layout shrink\">\r\n                            <div class=\"logo logo--n-m\">\r\n                                <svg class=\"logo__icon\" viewBox=\"0 0 35 18\" version=\"1.1\">\r\n                                    <path d=\"M4.783,4.129c2.41,-1.587 4.691,-2.303 6.175,-2.647c-1.969,1.76 -3.207,4.315 -3.207,7.158c0,2.843 1.238,5.398 3.207,7.158c-1.484,-0.344 -3.765,-1.06 -6.175,-2.647c-2.35,-1.546 -3.883,-3.304 -4.783,-4.511c0.9,-1.207 2.433,-2.965 4.783,-4.511Zm25.234,0c-2.41,-1.587 -4.691,-2.303 -6.175,-2.647c1.969,1.76 3.207,4.315 3.207,7.158c0,2.843 -1.238,5.398 -3.207,7.158c1.484,-0.344 3.765,-1.06 6.175,-2.647c2.35,-1.546 3.883,-3.304 4.783,-4.511c-0.9,-1.207 -2.433,-2.965 -4.783,-4.511Zm-14.869,3.215l4.131,-7.132c-0.603,-0.134 -1.231,-0.212 -1.877,-0.212c-2.081,0 -3.984,0.73 -5.48,1.948l3.178,5.482l0.048,-0.086Zm10.525,-1.283c-0.797,-2.526 -2.731,-4.544 -5.198,-5.477l-3.173,5.477l8.371,0Zm0.226,0.842l-6.494,0l0.251,0.437l4.131,7.13c1.414,-1.538 2.285,-3.585 2.285,-5.835c0,-0.592 -0.061,-1.19 -0.173,-1.732Zm-11.502,1.749l-3.381,-5.838c-1.413,1.538 -2.284,3.59 -2.284,5.841c0,0.592 0.06,1.135 0.173,1.737l6.494,0l-1.002,-1.74Zm-5.267,2.582c0.798,2.526 2.732,4.545 5.198,5.478l3.174,-5.478l-8.372,0Zm9.772,-0.002l-3.382,5.836c0.607,0.134 1.236,0.212 1.882,0.212c2.081,0 3.984,-0.73 5.479,-1.948l-3.177,-5.482l-0.802,1.382Z\"\r\n                                        style=\"fill:#00416c;fill-rule:nonzero;\" />\r\n                                </svg>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"panel__layout shrink\">\r\n                            <div class=\"login-box__title login-box__title--logo\">\r\n                                Аргус 360\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"login-box__layout\">\r\n                    <div class=\"login-box__message login-box__message--success\">На указанный адрес отправлено письмо с\r\n                        инструкцией</div>\r\n                </div>\r\n\r\n                <div class=\"login-box__layout\">\r\n                    <div class=\"panel\">\r\n                        <div class=\"panel__layout shrink\">\r\n                            <button class=\"login-box__button button\" type=\"submit\">\r\n                                Ок\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/auth/auth.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/auth/auth.component.ts ***!
  \************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/modules/auth/auth.service.ts");
/* harmony import */ var _core_storage_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/storage-provider */ "./src/app/core/storage-provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthComponent = /** @class */ (function () {
    function AuthComponent(router, fb, authService, storageProvider) {
        this.router = router;
        this.fb = fb;
        this.authService = authService;
        this.storageProvider = storageProvider;
        this.loginForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    AuthComponent.prototype.submit = function () {
        if (this.loginForm.valid) {
            this.error = false;
            if (this.loginForm.value.email === 'denge989@yandex.ru' && this.loginForm.value.password === '123456') {
                this.router.navigate(['/']);
                this.storageProvider.set('user', { name: this.loginForm.value.email });
            }
            else {
                this.error = true;
            }
        }
        else {
            this.error = true;
        }
    };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'auth-page',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/modules/auth/auth.component.html"),
            host: { class: 'layout__block' }
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _core_storage_provider__WEBPACK_IMPORTED_MODULE_4__["StorageProvider"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/modules/auth/auth.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.component */ "./src/app/modules/auth/auth.component.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/modules/auth/auth-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/modules/auth/auth.service.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/modules/auth/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"]
            ],
            providers: [
                _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
                _auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]
            ],
            declarations: [
                _auth_component__WEBPACK_IMPORTED_MODULE_1__["AuthComponent"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/modules/auth/auth.service.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/auth/auth.service.ts ***!
  \**********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
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


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.login = function (_a) {
        var email = _a.email, password = _a.password;
        return this.http.post('login', { email: email, password: password, audience: 'WEB', product: 'SCRL' });
    };
    AuthService.prototype.logout = function () {
        return this.http.get('logout');
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ })

}]);
//# sourceMappingURL=modules-auth-auth-module.js.map