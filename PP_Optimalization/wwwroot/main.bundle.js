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

module.exports = "<div class=\"container\">\r\n  <div class=\"jumbotron\">\r\n    <h1 class=\"display-4\">Paradygmaty programowania</h1>\r\n    <hr class=\"my-4\" />\r\n    <p>Optymalizacja kodu źródłowego – porównanie czasów działania</p>\r\n  </div>\r\n\r\n  <app-values-form [model]='model'></app-values-form>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table table-hover\">\r\n        <thead>\r\n          <tr>\r\n            <th colspan=\"2\" scope=\"col\">Równanie</th>\r\n            <th colspan=\"2\" scope=\"col\">.NET</th>\r\n            <th colspan=\"2\" scope=\"col\">JavaScript</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody *ngIf=\"equationsLoaded\">\r\n          <tr *ngFor=\"let equation of data.EquationsDictionary\">\r\n            <td>\r\n              <!--<p>{{equation.before.formula}}</p>\r\n              <p>{{equation.after.formula}}</p>-->\r\n            </td>\r\n            <td>\r\n\r\n            </td>\r\n            <td>\r\n\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__values_data__ = __webpack_require__("../../../../../src/app/values-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_js_external__ = __webpack_require__("../../../../../src/assets/js/external.js");
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
        this.equationsLoaded = false;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__values_data__["a" /* ValuesData */](10, 10, 10, 10, 10, 10, 1, 10);
        Object(__WEBPACK_IMPORTED_MODULE_3__assets_js_external__["a" /* jsEquations */])();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.a = performance.now();
        this._httpService.get('/home').subscribe(function (result) {
            _this.data = result;
            _this.equationsLoaded = true;
            console.log(_this.data);
            _this.b = performance.now();
            console.log("performance: ");
            console.log(_this.b - _this.a);
        });
    };
    ;
    AppComponent.prototype.getExamples = function (event) {
    };
    ;
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__values_form_values_form_component__ = __webpack_require__("../../../../../src/app/values-form/values-form.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__values_form_values_form_component__["a" /* ValuesFormComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
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

module.exports = "<form #valuesForm=\"ngForm\">\r\n  <div class=\"form-row\">\r\n    <div class=\"form-group col-md-1 col-sm-4\">\r\n      <label for=\"valueA\">A</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"valueA\" name=\"valueA\" [(ngModel)]=\"model.A\" required>\r\n    </div>\r\n\r\n    <div class=\"form-group col-md-1 col-sm-4\">\r\n      <label for=\"valueB\">B</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"valueB\" name=\"valueB\" [(ngModel)]=\"model.B\" required>\r\n    </div>\r\n\r\n    <div class=\"form-group col-md-1 col-sm-4\">\r\n      <label for=\"valueC\">C</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"valueC\" name=\"valueC\" [(ngModel)]=\"model.C\" required>\r\n    </div>\r\n\r\n    <div class=\"form-group col-md-1 col-sm-4\">\r\n      <label for=\"valueD\">D</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"valueD\" name=\"valueD\" [(ngModel)]=\"model.D\" required>\r\n    </div>\r\n\r\n    <div class=\"form-group col-md-1 col-sm-4\">\r\n      <label for=\"valueE\">E</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"valueE\" name=\"valueE\" [(ngModel)]=\"model.E\" required>\r\n    </div>\r\n\r\n    <div class=\"form-group col-md-2 col-sm-4\">\r\n      <label for=\"valueX\">X</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"valueX\" name=\"valueX\" [(ngModel)]=\"model.X\" required>\r\n    </div>\r\n\r\n    <div class=\"form-group col-md-2 col-sm-4\">\r\n      <label for=\"valueN\">N</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"valueN\" name=\"valueN\" [(ngModel)]=\"model.N\" required>\r\n    </div>\r\n\r\n    <div class=\"form-group col-md-3 col-sm-4\">\r\n      <label for=\"valueCount\">Count</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"valueCount\" name=\"valueCount\" [(ngModel)]=\"model.Count\" required>\r\n    </div>\r\n  </div>\r\n\r\n  <button type=\"submit\" class=\"btn btn-primary\" (click)='getExamples($event)'>Przelicz</button>\r\n</form>\r\n\r\n\r\n{{getDiagnostic}}\r\n"

/***/ }),

/***/ "../../../../../src/app/values-form/values-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValuesFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
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
    function ValuesFormComponent(_httpService) {
        this._httpService = _httpService;
    }
    ValuesFormComponent.prototype.ngOnInit = function () {
    };
    ;
    ValuesFormComponent.prototype.getExamples = function (event) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        var body = JSON.stringify(this.model);
        this._httpService.post("/home", body, {
            headers: headers
        }).subscribe(function (result) {
            _this.data = result;
            console.log(result);
        });
    };
    ;
    Object.defineProperty(ValuesFormComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.data); },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], ValuesFormComponent.prototype, "model", void 0);
    ValuesFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-values-form',
            template: __webpack_require__("../../../../../src/app/values-form/values-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/values-form/values-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ValuesFormComponent);
    return ValuesFormComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/js/external.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = jsEquations;
function jsEquations(model) {

    //var res = equationsFactory(model);

    //console.log(res);
}

//function equationsFactory(model) {
//    var list = [];
//    var i = 0;

//    list.push.apply(list, [
//        new equationData(i++, "Optymalizacja lokalna", {
//            before: new equation(model),
//            after: new equation(model)
//        })
//    ]);

//    var res = equation(model);

//    return list;
//}

//function equationData(id, name, equation) {
//    this.id = id;
//    this.name = name;
//    this.equation = equation;
//}

//function equation(m) {
    
//    var t0_before = performance.now();

//    var before = Math.pow(m.X, 2) / m.B - m.A * m.X / m.B;

//    var t1_before = performance.now();
//    var result_before = t1_before - t0_before;

//    var t0_after = performance.now();

//    var after = m.X * m.X - m.X * m.X;

//    var t1_after = performance.now();
//    var result_after = t1_after - t0_after;

//    return {
//        before: result_before,
//        after: result_after
//    }
//}





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