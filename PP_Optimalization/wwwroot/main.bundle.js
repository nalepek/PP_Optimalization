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
exports.push([module.i, ".container {\r\n    max-width: 90% !important;\r\n}\r\n\r\n.overlay {\r\n    height: 100%;\r\n    width: 100%;\r\n    position: fixed;\r\n    z-index: 11111;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: rgb(0,0,0);\r\n    background-color: rgba(0,0,0, 0.6);\r\n    overflow-x: hidden;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n    color: #fff;\r\n}\r\n\r\n.overlay-content {\r\n    position: relative;\r\n    top: 25%;\r\n    width: 100%;\r\n    text-align: center;\r\n    margin-top: 30px\r\n}\r\n\r\n.overlay-text {\r\n    width: 25%;\r\n    height: auto;\r\n    margin: 0 auto;\r    position: relative;\r\n}\r\n\r\n.overlay a {\r\n    padding: 8px;\r\n    text-decoration: none;\r\n    font-size: 36px;\r\n    color: #fff;\r\n    display: block;\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s\r\n}\r\n\r\n.overlay span.sr-only {\r\n    color: #fff;\r\n}\r\n\r\n.overlay i {\r\n    color: #fff;\r\n}\r\n\r\n.overlay a:hover, .overlay a:focus {\r\n        color: #f1f1f1\r\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"myNav\" class=\"overlay\" *ngIf=\"loading\">\r\n    <div class=\"overlay-content\">\r\n        <div class=\"overlay-text\">\r\n            <a>\r\n                Liczę ...\r\n                <i class=\"fa fa-spinner fa-spin fa-fw\"></i>\r\n            </a>\r\n            <a>\r\n                .NET ...\r\n                <i class=\"fa fa-check\" aria-hidden=\"true\" *ngIf=\"!isLoading\"></i>\r\n            </a>\r\n            <a>\r\n                JavaScript ...\r\n                <i class=\"fa fa-check\" aria-hidden=\"true\" *ngIf=\"!jsLoading\"></i>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"container\">\r\n    <div class=\"jumbotron\">\r\n        <h1 class=\"display-4\">Paradygmaty programowania</h1>\r\n        <hr class=\"my-4\" />\r\n        <p>Optymalizacja kodu źródłowego – porównanie czasów działania</p>\r\n        <p style=\"float: right\">Kamil Nalepa, Sławomir Czaja</p>\r\n    </div>\r\n    <form #valuesForm=\"ngForm\">\r\n        <div class=\"form-row\">\r\n            <div class=\"form-group col-md-1 col-sm-4\">\r\n                <label for=\"valueA\">A <code>[double]</code></label>\r\n                <input type=\"text\" class=\"form-control\" id=\"valueA\" name=\"valueA\" [(ngModel)]=\"model.A\" required>\r\n            </div>\r\n            <div class=\"form-group col-md-1 col-sm-4\">\r\n                <label for=\"valueB\">B <code>[double]</code></label>\r\n                <input type=\"text\" class=\"form-control\" id=\"valueB\" name=\"valueB\" [(ngModel)]=\"model.B\" required>\r\n            </div>\r\n            <div class=\"form-group col-md-1 col-sm-4\">\r\n                <label for=\"valueC\">C <code>[double]</code></label>\r\n                <input type=\"text\" class=\"form-control\" id=\"valueC\" name=\"valueC\" [(ngModel)]=\"model.C\" required>\r\n            </div>\r\n            <div class=\"form-group col-md-1 col-sm-4\">\r\n                <label for=\"valueD\">D <code>[double]</code></label>\r\n                <input type=\"text\" class=\"form-control\" id=\"valueD\" name=\"valueD\" [(ngModel)]=\"model.D\" required>\r\n            </div>\r\n            <div class=\"form-group col-md-1 col-sm-4\">\r\n                <label for=\"valueE\">E <code>[double]</code></label>\r\n                <input type=\"text\" class=\"form-control\" id=\"valueE\" name=\"valueE\" [(ngModel)]=\"model.E\" required>\r\n            </div>\r\n            <div class=\"form-group col-md-1 col-sm-4\">\r\n                <label for=\"valueX\">X <code>[double]</code></label>\r\n                <input type=\"text\" class=\"form-control\" id=\"valueX\" name=\"valueX\" [(ngModel)]=\"model.X\" required>\r\n            </div>\r\n            <div class=\"form-group col-md-1 col-sm-4\">\r\n                <label for=\"valueW\">W <code>[1:0]</code></label>\r\n                <input type=\"text\" class=\"form-control\" id=\"valueW\" name=\"valueW\" [(ngModel)]=\"model.W\" required>\r\n            </div>\r\n            <div class=\"form-group col-md-1 col-sm-4\">\r\n                <label for=\"valueN\">N <code>[int]</code></label>\r\n                <input type=\"text\" class=\"form-control\" id=\"valueN\" name=\"valueN\" [(ngModel)]=\"model.N\" required>\r\n            </div>\r\n            <div class=\"form-group col-md-2 col-sm-4\">\r\n                <label for=\"valueCount\">Count <code>[int]</code></label>\r\n                <input type=\"text\" class=\"form-control\" id=\"valueCount\" name=\"valueCount\" [(ngModel)]=\"model.Count\" required>\r\n            </div>\r\n            <div class=\"form-group col-md-2 col-sm-4\">\r\n                <label>&nbsp;</label>\r\n                <button type=\"submit\" class=\"btn btn-primary form-control\" style=\"padding: .375rem .75rem\" (click)='getExamples($event)'>Przelicz</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n\r\n\r\n    <div class=\"row\" (onModelChanged)=\"reloadModel($event)\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-hover\">\r\n                <thead>\r\n                    <tr>\r\n                        <th colspan=\"2\" scope=\"col\">Równanie</th>\r\n                        <th colspan=\"2\" scope=\"col\">.NET</th>\r\n                        <th colspan=\"2\" scope=\"col\">JavaScript</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th>Przed</th>\r\n                        <th>Po</th>\r\n                        <th>Przed <code>[ms]</code></th>\r\n                        <th>Po <code>[ms]</code></th>\r\n                        <th>Przed <code>[ms]</code></th>\r\n                        <th>Po <code>[ms]</code></th>\r\n                    </tr>\r\n                </thead>\r\n                <ng-container *ngIf=\"equationsLoaded\">\r\n                    <tbody *ngFor=\"let equationGroup of data.equationsDictionary | keys\">\r\n                        <tr>\r\n                            <td colspan=\"6\">\r\n                                <h3>\r\n                                    {{equationGroup.key}}\r\n                                </h3>\r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngFor=\"let equation of equationGroup.value\">\r\n                            <td style=\"white-space: pre-wrap;\" placement=\"top\" ngbTooltip=\"{{equation.before.valuesFormula}}\" container=\"body\">{{equation.before.formula}}</td>\r\n                            <td style=\"white-space: pre-wrap;\" placement=\"top\" ngbTooltip=\"{{equation.after.valuesFormula}}\" container=\"body\">{{equation.after.formula}}</td>\r\n                            <td placement=\"top\" ngbTooltip=\"{{equation.before.netTimeTaken}}\" container=\"body\">{{equation.before.netTimeTakenFixed}}</td>\r\n                            <td placement=\"top\" ngbTooltip=\"{{equation.after.netTimeTaken}}\" container=\"body\">{{equation.after.netTimeTakenFixed}}</td>\r\n                            <td placement=\"top\" ngbTooltip=\"{{equation.before.jsTimeTaken}}\" container=\"body\">{{equation.before.jsTimeTakenFixed}}</td>\r\n                            <td placement=\"top\" ngbTooltip=\"{{equation.after.jsTimeTaken}}\" container=\"body\">{{equation.after.jsTimeTakenFixed}}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </ng-container>\r\n            </table>\r\n        </div>\r\n        <br />\r\n        <div class=\"table responsive\" *ngIf=\"equationsLoaded\">\r\n            <table class=\"table table-hover\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>\r\n                            Łączny czas\r\n                        </th>\r\n                        <th>\r\n                            .NET\r\n                        </th>\r\n                        <th>\r\n                            JavaScript\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr>\r\n                        <td></td>\r\n                        <td>\r\n                            {{data.netSummaryTime}}\r\n                        </td>\r\n                        <td>\r\n                            {{data.jsSummaryTime}}\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__values_data__ = __webpack_require__("../../../../../src/app/values-data.ts");
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
    function AppComponent(_httpService, zone) {
        var _this = this;
        this._httpService = _httpService;
        this.zone = zone;
        this.equationsLoaded = false;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__values_data__["a" /* ValuesData */](7, 2, 3, 4, 5, 10, 1, 100, 10);
        this.isLoading = true;
        this.jsLoading = true;
        this.loading = true;
        this._aTab = [];
        this._bTab = [];
        this._xTab = [];
        this.tab = [];
        //let tab = Array.apply(null, Array(50)).map(function () { });;
        //_xTab = Array.apply(null, Array(100)).map(function () { });
        this.__aTab = [];
        this.__bTab = [];
        this.__cTab = [];
        this.__t1Tab = [];
        this.__t2Tab = [];
        this.isLoading = true;
        this.jsLoading = true;
        this.loading = true;
        for (var i = 0; i < 50; i++) {
            this.tab[i] = i;
        }
        for (var i = 0; i < 100; i++) {
            this._aTab[i] = i;
            this._bTab[i] = i;
            this._xTab[i] = i;
            this.__aTab[i] = [];
            this.__bTab[i] = [];
            this.__cTab[i] = [];
            this.__t1Tab[i] = [];
            this.__t2Tab[i] = [];
            for (var j = 0; j < 100; j++) {
                this.__aTab[i][j] = j;
                this.__bTab[i][j] = j;
                this.__cTab[i][j] = j;
                this.__t1Tab[i][j] = j;
                this.__t2Tab[i][j] = j;
            }
        }
        this._httpService.get('/home').subscribe(function (result) {
            _this.zone.run(function () {
                _this.data = result;
                _this.equationsLoaded = true;
                _this.isLoading = false;
                _this.getModel();
                var t0 = performance.now();
                _this.jsEquations = _this.getEquations(_this.model);
                var t1 = performance.now();
                _this.data.jsSummaryTime = t1 - t0;
                _this.remapPositions("");
                console.log(_this.data);
                _this.jsLoading = false;
                setTimeout(function () {
                    _this.loading = false;
                }, 200);
            });
        }, function (error) {
            console.log(error);
            _this.isLoading = false;
            _this.jsLoading = false;
            setTimeout(function () {
                _this.loading = false;
            }, 300);
        });
    }
    AppComponent.prototype.reloadModel = function (event, data) {
        this.data = data;
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    ;
    AppComponent.prototype.getModel = function () {
        console.log(this.data);
        this.model.A = this.data.values.a;
        this.model.B = this.data.values.b;
        this.model.C = this.data.values.c;
        this.model.D = this.data.values.d;
        this.model.E = this.data.values.e;
        this.model.N = this.data.values.n;
        this.model.X = this.data.values.x;
        this.model.Count = this.data.values.count;
        this.model.W = this.data.values.w;
    };
    AppComponent.prototype.getExamples = function (event) {
        var _this = this;
        this.jsLoading = true;
        this.isLoading = true;
        this.loading = true;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        var body = JSON.stringify(this.model);
        this._httpService.post("/home", body, {
            headers: headers
        })
            .subscribe(function (result) {
            _this.zone.run(function () {
                _this.data = result;
                _this.isLoading = false;
                var t0 = performance.now();
                _this.jsEquations = _this.getEquations(_this.model);
                var t1 = performance.now();
                _this.data.jsSummaryTime = t1 - t0;
                _this.remapPositions("");
                _this.jsLoading = false;
                setTimeout(function () {
                    _this.loading = false;
                }, 300);
            });
        }, function (error) {
            _this.isLoading = false;
            _this.jsLoading = false;
            console.log(error);
            setTimeout(function () {
                _this.loading = false;
            }, 300);
        });
    };
    AppComponent.prototype.remapPositions = function (msg) {
        for (var i = 0; i < this.jsEquations.length; i++) {
            for (var key in this.data.equationsDictionary) {
                if (this.data.equationsDictionary.hasOwnProperty(key)) {
                    for (var j = 0; j < this.data.equationsDictionary[key].length; j++) {
                        if (this.jsEquations[i].index == this.data.equationsDictionary[key][j].id) {
                            this.data.equationsDictionary[key][j].before.jsTimeTaken = this.jsEquations[i].before.timetaken; //.toFixed(5);
                            this.data.equationsDictionary[key][j].after.jsTimeTaken = this.jsEquations[i].after.timetaken; //.toFixed(5);
                            var a = this.data.equationsDictionary[key][j].before.netTimeTaken.toFixed(4);
                            var b = this.data.equationsDictionary[key][j].after.netTimeTaken.toFixed(4);
                            var c = this.data.equationsDictionary[key][j].before.jsTimeTaken.toFixed(4);
                            var d = this.data.equationsDictionary[key][j].after.jsTimeTaken.toFixed(4);
                            this.data.equationsDictionary[key][j].before.netTimeTakenFixed = a;
                            this.data.equationsDictionary[key][j].after.netTimeTakenFixed = b;
                            this.data.equationsDictionary[key][j].before.jsTimeTakenFixed = c;
                            this.data.equationsDictionary[key][j].after.jsTimeTakenFixed = d;
                            this.data.equationsDictionary[key][j].before.formula.replace(new RegExp('\n', 'g'), "<br />");
                            this.data.equationsDictionary[key][j].after.formula.replace(new RegExp('\n', 'g'), "<br />");
                        }
                    }
                }
            }
        }
    };
    AppComponent.prototype.getEquations = function (model) {
        var list = [];
        var i = 0;
        list.push.apply(list, [{
                index: i++,
                before: this.localOptimalization(model, "before"),
                after: this.localOptimalization(model, "after")
            },
            {
                index: i++,
                before: this.localOptimalization(model, "before"),
                after: this.localOptimalization(model, "after2")
            },
            {
                index: i++,
                before: this.localOptimalization2(model, "before"),
                after: this.localOptimalization2(model, "after")
            },
            {
                index: i++,
                before: this.localOptimalization3(model, "before"),
                after: this.localOptimalization3(model, "after")
            },
            {
                index: i++,
                before: this.localOptimalization4(model, "before"),
                after: this.localOptimalization4(model, "after")
            },
            {
                index: i++,
                before: this.reductionOfVarWithSingleRef(model, "before"),
                after: this.reductionOfVarWithSingleRef(model, "after")
            },
            {
                index: i++,
                before: this.moreEconomicOperations(model, "before"),
                after: this.moreEconomicOperations(model, "after")
            },
            {
                index: i++,
                before: this.moreEconomicOperations2(model, "before"),
                after: this.moreEconomicOperations2(model, "after")
            },
            {
                index: i++,
                before: this.moreEconomicOperations3(model, "before"),
                after: this.moreEconomicOperations3(model, "after")
            },
            {
                index: i++,
                before: this.moreEconomicOperations4(model, "before"),
                after: this.moreEconomicOperations4(model, "after")
            },
            {
                index: i++,
                before: this.moreEconomicOperations5(model, "before"),
                after: this.moreEconomicOperations5(model, "after")
            },
            {
                index: i++,
                before: this.calcConstansValues(model, "before"),
                after: this.calcConstansValues(model, "after")
            },
            {
                index: i++,
                before: this.efficientInstructions(model, "before"),
                after: this.efficientInstructions(model, "after")
            },
            {
                index: i++,
                before: this.efficientInstructions2(model, "before"),
                after: this.efficientInstructions2(model, "after")
            },
            {
                index: i++,
                before: this.eliminationRedundantCalculations(model, "before"),
                after: this.eliminationRedundantCalculations(model, "after")
            },
            {
                index: i++,
                before: this.typeConversion(model, "before"),
                after: this.typeConversion(model, "after")
            },
            {
                index: i++,
                before: this.expandLoop(model, "before"),
                after: this.expandLoop(model, "after")
            },
            {
                index: i++,
                before: this.joinLoop(model, "before"),
                after: this.joinLoop(model, "after")
            },
            {
                index: i++,
                before: this.moveUnusedOutOfLoop(model, "before"),
                after: this.moveUnusedOutOfLoop(model, "after")
            },
            {
                index: i++,
                before: this.moveTestingOutOfLoop(model, "before"),
                after: this.moveTestingOutOfLoop(model, "after")
            },
            {
                index: i++,
                before: this.minimizingNumberOfIndexes(model, "before"),
                after: this.minimizingNumberOfIndexes(model, "after")
            }
        ]);
        return list;
    };
    AppComponent.prototype.localOptimalization = function (model, type) {
        var result, timetaken;
        if (type == "before") {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                result = Math.pow(model.X, 2) / model.B - model.A * model.X / model.B;
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        else if (type == "after") {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                result = (model.X * model.X - model.X * model.A) / model.B;
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                result = model.X * (model.X - model.A) / model.B;
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        return {
            timetaken: timetaken,
            result: result
        };
    };
    AppComponent.prototype.localOptimalization2 = function (model, type) {
        var result, timetaken;
        if (type == "before") {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                result = model.A * model.B * model.C + model.A * model.B * model.D + model.A * model.E;
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                result = model.A * (model.B * (model.C + model.D) + model.E);
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        return {
            timetaken: timetaken,
            result: result
        };
    };
    AppComponent.prototype.localOptimalization3 = function (model, type) {
        var result, timetaken;
        var array = [model.N];
        if (type == "before") {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                for (var j = 1; j < array.length; j++) {
                    result += array[j] * model.X * model.N;
                }
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                for (var j = 1; j < array.length; j++) {
                    result += array[j] * model.X;
                }
                result *= model.N;
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        return {
            timetaken: timetaken,
            result: array[0]
        };
    };
    AppComponent.prototype.localOptimalization4 = function (model, type) {
        var result, timetaken;
        if (type == "before") {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                result = -model.A + model.B;
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                result = model.B - model.A;
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        return {
            timetaken: timetaken,
            result: result
        };
    };
    AppComponent.prototype.reductionOfVarWithSingleRef = function (model, type) {
        var result, timetaken;
        if (type == "before") {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                var d = model.A + model.B * model.C;
                result = d + model.E;
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                result = model.A + model.B * model.C + model.E;
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        return {
            timetaken: timetaken,
            result: result
        };
    };
    AppComponent.prototype.moreEconomicOperations = function (model, type) {
        var result, timetaken;
        if (type == "before") {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                result = 2 * model.A;
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                result = model.A + model.A;
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        return {
            timetaken: timetaken,
            result: result
        };
    };
    AppComponent.prototype.moreEconomicOperations2 = function (model, type) {
        var result, timetaken;
        if (type == "before") {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                result = 3 * model.A;
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                result = model.A + model.A + model.A;
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        return {
            timetaken: timetaken,
            result: result
        };
    };
    AppComponent.prototype.moreEconomicOperations3 = function (model, type) {
        var result, timetaken;
        if (type == "before") {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                result = 4 * model.A;
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                var a = model.A + model.A;
                a += model.A + model.A;
                result = a;
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        return {
            timetaken: timetaken,
            result: result
        };
    };
    AppComponent.prototype.moreEconomicOperations4 = function (model, type) {
        var result, timetaken;
        if (type == "before") {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                result = model.A / 2;
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                result = model.A * 0.5;
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        return {
            timetaken: timetaken,
            result: result
        };
    };
    AppComponent.prototype.moreEconomicOperations5 = function (model, type) {
        var result, timetaken;
        if (type == "before") {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                var y = model.C / model.X;
                var z = model.A + model.B / model.X;
                result = z;
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                var xOdwr = 1.0 / model.X;
                var y = model.C * xOdwr;
                var z = model.A + model.B * xOdwr;
                result = z;
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        return {
            timetaken: timetaken,
            result: result
        };
    };
    AppComponent.prototype.calcConstansValues = function (model, type) {
        var result, timetaken;
        if (type == "before") {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                result = 4 * model.A * Math.atan(1) / 180 + model.C;
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                result = model.A * 0.017453292519943295 + model.C;
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        return {
            timetaken: timetaken,
            result: result
        };
    };
    AppComponent.prototype.efficientInstructions = function (model, type) {
        var a;
        var x;
        var tab = Array.apply(null, Array(50)).map(function () { });
        ;
        var result, timetaken;
        if (type == "before") {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                a = 0;
                for (var nr = 0; nr < 50; nr++) {
                    if (tab[nr] < a)
                        a = tab[nr];
                }
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                a = 0;
                for (var nr_1 = 0; nr_1 < 50; nr_1++) {
                    x = tab[nr_1];
                    if (x < a)
                        a = x;
                }
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        return {
            timetaken: timetaken,
            result: result
        };
    };
    AppComponent.prototype.efficientInstructions2 = function (model, type) {
        var a;
        var x;
        var result, timetaken;
        if (type == "before") {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                a = 0;
                for (var nr = 0; nr < 50; nr++) {
                    if (this.tab[nr] < a)
                        a = this.tab[nr];
                }
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                a = 0;
                for (var nr_2 = 0; nr_2 < 50; nr_2++) {
                    x = this.tab[nr_2];
                    a = x < a ? x : a;
                }
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        result = a;
        return {
            timetaken: timetaken,
            result: result
        };
    };
    AppComponent.prototype.eliminationRedundantCalculations = function (model, type) {
        var result, timetaken;
        if (type == "before") {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                var y = model.X + model.A / model.B * model.C;
                var z = model.E + model.A / model.B * model.C;
                result = z;
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                var abc = model.A / model.B * model.C;
                var y = model.A + abc;
                var z = model.E + abc;
                result = z;
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        return {
            timetaken: timetaken,
            result: result
        };
    };
    AppComponent.prototype.typeConversion = function (model, type) {
        var i1 = 1, i2 = 2, i3 = 3, i4 = 4;
        var f1 = 1.0, f2 = 2.0, f3 = 3.0, f4 = 4.0;
        var result, timetaken;
        if (type == "before") {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                var y = i1 + f1 + i2 + f2 + i3 + f3 + i4 + f4;
                result = y;
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                var y = i1 + i2 + i3 + i4 + f1 + f2 + f3 + f4;
                result = y;
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        return {
            timetaken: timetaken,
            result: result
        };
    };
    AppComponent.prototype.expandLoop = function (model, type) {
        var tab = Array.apply(null, Array(10)).map(function () { });
        ;
        var result, timetaken;
        if (type == "before") {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                for (var nr = 0; nr < 10; nr++) {
                    tab[nr] = 0;
                }
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                tab[0] = 0;
                tab[1] = 0;
                tab[2] = 0;
                tab[3] = 0;
                tab[4] = 0;
                tab[5] = 0;
                tab[6] = 0;
                tab[7] = 0;
                tab[8] = 0;
                tab[9] = 0;
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        return {
            timetaken: timetaken,
            result: 0
        };
    };
    AppComponent.prototype.joinLoop = function (model, type) {
        var result, timetaken;
        if (type == "before") {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                for (var nr = 0; nr < 100; nr++)
                    this._aTab[nr] = 0;
                for (var nr = 0; nr < 100; nr++)
                    this._bTab[nr] = 1;
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                for (var nr = 0; nr < 100; nr++) {
                    this._aTab[nr] = 0;
                    this._bTab[nr] = 1;
                }
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        return {
            timetaken: timetaken,
            result: result
        };
    };
    AppComponent.prototype.moveUnusedOutOfLoop = function (model, type) {
        var cd, abcd;
        var result, timetaken;
        if (type == "before") {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                for (var nr1 = 1; nr1 < 100; nr1++)
                    for (var nr2 = 1; nr2 < 100; nr2++)
                        this.__t1Tab[nr1][nr2] = this.__t2Tab[nr1][nr2] + model.A / nr1 - model.C / model.D;
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                cd = model.C / model.D;
                for (var nr1 = 1; nr1 < 100; nr1++) {
                    abcd = model.A / nr1 - cd;
                    for (var nr2 = 1; nr2 < 100; nr2++)
                        this.__t1Tab[nr1][nr2] = this.__t2Tab[nr1][nr2] + abcd;
                }
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        return {
            timetaken: timetaken,
            result: result
        };
    };
    AppComponent.prototype.moveTestingOutOfLoop = function (model, type) {
        var result, timetaken;
        var W = model.W == 1 ? true : false;
        if (type == "before") {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                for (var nr = 0; nr < 100; nr++)
                    if (W)
                        this._xTab[nr] = this._aTab[nr] + this._bTab[nr];
                    else
                        this._xTab[nr] = this._aTab[nr] - this._bTab[nr];
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                if (W)
                    for (var nr = 0; nr < 100; nr++)
                        this._xTab[nr] = this._aTab[nr] + this._bTab[nr];
                else
                    for (var nr = 0; nr < 100; nr++)
                        this._xTab[nr] = this._aTab[nr] - this._bTab[nr];
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        return {
            timetaken: timetaken,
            result: result
        };
    };
    AppComponent.prototype.minimizingNumberOfIndexes = function (model, type) {
        var result, timetaken, pom;
        if (type == "before") {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                for (var nr1 = 0; nr1 < 100; nr1++)
                    for (var nr2 = 1; nr2 < 100; nr2++) {
                        this.__aTab[nr1][nr2] = 0;
                        for (var nr3 = 1; nr3 < 100; nr3++)
                            this.__aTab[nr1][nr2] = this.__aTab[nr1][nr2] + this.__bTab[nr2][nr3] + this.__cTab[nr3][nr2];
                    }
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                for (var nr1 = 0; nr1 < 100; nr1++)
                    for (var nr2 = 1; nr2 < 100; nr2++) {
                        pom = 0;
                        for (var nr3 = 1; nr3 < 100; nr3++)
                            pom = pom + this.__bTab[nr2][nr3] + this.__cTab[nr3][nr2];
                    }
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        return {
            timetaken: timetaken,
            result: result
        };
    };
    AppComponent.prototype.abccdeee = function (model, type) {
        var result, timetaken;
        if (type == "before") {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        return {
            timetaken: timetaken,
            result: result
        };
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgZone */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__keys_pipe__ = __webpack_require__("../../../../../src/app/keys.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__values_pipe__ = __webpack_require__("../../../../../src/app/values.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__keys_pipe__["a" /* KeysPipe */],
                __WEBPACK_IMPORTED_MODULE_7__values_pipe__["a" /* ValuesPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/keys.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    KeysPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Pipe */])({
            name: 'keys'
        })
    ], KeysPipe);
    return KeysPipe;
}());



/***/ }),

/***/ "../../../../../src/app/values-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValuesData; });
var ValuesData = /** @class */ (function () {
    function ValuesData(A, B, C, D, E, X, W, Count, N) {
        this.A = A;
        this.B = B;
        this.C = C;
        this.D = D;
        this.E = E;
        this.X = X;
        this.W = W;
        this.Count = Count;
        this.N = N;
    }
    return ValuesData;
}());



/***/ }),

/***/ "../../../../../src/app/values.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValuesPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ValuesPipe = /** @class */ (function () {
    function ValuesPipe() {
    }
    ValuesPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
        }
        console.log(keys);
        console.log(value);
        return keys;
    };
    ValuesPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Pipe */])({
            name: 'values'
        })
    ], ValuesPipe);
    return ValuesPipe;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* enableProdMode */])();
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