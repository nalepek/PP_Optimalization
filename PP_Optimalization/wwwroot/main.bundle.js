webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!--<div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{ title }}!\r\n  </h1>\r\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n</div>\r\n<h2>Here are some links to help you start: </h2>\r\n<ul>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" hreknalepa\\Source\\Reposf=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\r\n  </li>\r\n</ul>-->\r\n<div class=\"container\">\r\n  <div class=\"jumbotron\">\r\n    <h1>Paradygmaty programowania</h1>\r\n    <h2>Optymalizacja kodu źródłowego – porównanie czasów działania</h2>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <app-values-form></app-values-form>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-hover table-striped\">\r\n          ...\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<h1>Application says what?</h1>\r\n<ul>\r\n  <li *ngFor=\"let value of apiValues\">{{value}}\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        this.data = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._httpService.get('/home').subscribe(function (data) {
            _this.data = data.json();
        });
    };
    AppComponent.prototype.getExamples = function (event) {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__values_form_values_form_component__ = __webpack_require__("../../../../../src/app/values-form/values-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__values_form_values_form_component__["a" /* ValuesFormComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/values-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValuesData; });
var ValuesData = /** @class */ (function () {
    function ValuesData(A, B, C, D, E, X, Count, N) {
        this.A = A;
        this.B = B;
        this.C = C;
        this.D = D;
        this.E = E;
        this.X = X;
        this.Count = Count;
        this.N = N;
    }
    return ValuesData;
}());



/***/ }),

/***/ "../../../../../src/app/values-form/values-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/values-form/values-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div>{{diagnostic}}</div>\r\n<form #valuesForm=\"ngForm\" class=\"form-inline\">\r\n  <div class=\"form-group\">\r\n    <label for=\"valueA\">A</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"valueA\" name=\"valueA\" [(ngModel)]=\"model.A\" required>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"valueB\">B</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"valueB\" name=\"valueB\" [(ngModel)]=\"model.B\" required>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"valueC\">C</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"valueC\" name=\"valueC\" [(ngModel)]=\"model.C\" required>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"valueD\">D</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"valueD\" name=\"valueD\" [(ngModel)]=\"model.D\" required>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"valueE\">E</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"valueE\" name=\"valueE\" [(ngModel)]=\"model.E\" required>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"valueX\">X</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"valueX\" name=\"valueX\" [(ngModel)]=\"model.X\" required>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"valueN\">N</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"valueN\" name=\"valueN\" [(ngModel)]=\"model.N\" required>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"valueCount\">Count</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"valueCount\" name=\"valueCount\" [(ngModel)]=\"model.Count\" required>\r\n  </div>\r\n\r\n  <button type=\"submit\" class=\"btn btn-success\">Submit</button>\r\n\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/values-form/values-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValuesFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__values_data__ = __webpack_require__("../../../../../src/app/values-data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ValuesFormComponent = /** @class */ (function () {
    function ValuesFormComponent() {
        this.model = new __WEBPACK_IMPORTED_MODULE_1__values_data__["a" /* ValuesData */](10, 10, 10, 10, 10, 10, 10000000, 100);
    }
    ValuesFormComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ValuesFormComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    ValuesFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-values-form',
            template: __webpack_require__("../../../../../src/app/values-form/values-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/values-form/values-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ValuesFormComponent);
    return ValuesFormComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map