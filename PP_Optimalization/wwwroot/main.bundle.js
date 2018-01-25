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

module.exports = "<div class=\"container\">\r\n  <div class=\"jumbotron\">\r\n    <h1 class=\"display-4\">Paradygmaty programowania</h1>\r\n    <hr class=\"my-4\" />\r\n    <p>Optymalizacja kodu źródłowego – porównanie czasów działania</p>\r\n  </div>\r\n\r\n  <app-values-form [model]='model'></app-values-form>\r\n\r\n  <div class=\"row\" (onModelChanged)=\"reloadModel($event)\">\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table table-hover\">\r\n        <thead>\r\n          <tr>\r\n            <th colspan=\"2\" scope=\"col\">Równanie</th>\r\n            <th colspan=\"2\" scope=\"col\">.NET</th>\r\n            <th colspan=\"2\" scope=\"col\">JavaScript</th>\r\n          </tr>\r\n        </thead>\r\n        <ng-container *ngIf=\"equationsLoaded\">\r\n          <tbody *ngFor=\"let equationGroup of data.equationsDictionary | keys\">\r\n            <tr>\r\n              <td colspan=\"6\">\r\n                <h3>\r\n                    {{equationGroup.key}}\r\n                </h3>\r\n              </td>\r\n            </tr>\r\n            <tr *ngFor=\"let equation of equationGroup.value\">\r\n              <td>{{equation.before.formula}}</td>\r\n              <td>{{equation.after.formula}}</td>\r\n              <td>{{equation.before.netTimeTaken}}</td>\r\n              <td>{{equation.after.netTimeTaken}}</td>\r\n              <td>{{equation.before.jsTimeTaken}}</td>\r\n              <td>{{equation.after.jsTimeTaken}}</td>\r\n            </tr>\r\n            <!--<tr *ngFor=\"let equation of equationGroup | values\">\r\n              <td>\r\n                <!--<p>\r\n                  {{equation}}\r\n                </p>-->\r\n            <!--<p>{{key.before.formula}}</p>\r\n                <p>{{key.after.formula}}</p>\r\n              </td>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n            </tr>-->\r\n          </tbody>\r\n        </ng-container>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
    function AppComponent(_httpService) {
        var _this = this;
        this._httpService = _httpService;
        this.equationsLoaded = false;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__values_data__["a" /* ValuesData */](7, 2, 3, 4, 5, 10, 100, 10);
        this._aTab = Array.apply(null, Array(100)).map(function () { });
        this._bTab = Array.apply(null, Array(100)).map(function () { });
        this._xTab = Array.apply(null, Array(100)).map(function () { });
        this.__aTab = Array.apply(null, Array(100)).map(function () { });
        this.__bTab = Array.apply(null, Array(100)).map(function () { });
        this.__cTab = Array.apply(null, Array(100)).map(function () { });
        this.__t1Tab = Array.apply(null, Array(100)).map(function () { });
        this.__t2Tab = Array.apply(null, Array(100)).map(function () { });
        for (var i = 0; i < 100; i++) {
            this.__aTab[i] = Array.apply(null, Array(100)).map(function () { });
            ;
            this.__bTab[i] = Array.apply(null, Array(100)).map(function () { });
            ;
            this.__cTab[i] = Array.apply(null, Array(100)).map(function () { });
            ;
            this.__t1Tab[i] = Array.apply(null, Array(100)).map(function () { });
            ;
            this.__t2Tab[i] = Array.apply(null, Array(100)).map(function () { });
            ;
        }
        //console.log("tabs:");
        //console.log(this._aTab);
        //console.log(this._bTab);
        //console.log(this._xTab);
        //console.log(this.__aTab);
        //console.log(this.__bTab);
        //console.log(this.__cTab);
        //console.log(this.__t1Tab);
        //console.log(this.__t2Tab);
        //console.log("Model:");
        //console.log(this.model);
        this.jsEquations = this.getEquations(this.model);
        //console.log("JS eqations:");
        //console.log(this.jsEquations);
        this._httpService.get('/home').subscribe(function (result) {
            _this.data = result;
            _this.equationsLoaded = true;
            //console.log(this.data);
            _this.remapPositions();
            //console.log("AFTER");
            //console.log(this.data);
        });
        //console.log("constructor");
    }
    AppComponent.prototype.reloadModel = function (event, data) {
        this.data = data;
        console.log(data);
    };
    AppComponent.prototype.ngOnInit = function () {
        //console.log("ngOnInit");
    };
    ;
    AppComponent.prototype.getExamples = function (event) {
    };
    ;
    AppComponent.prototype.remapPositions = function () {
        for (var i = 0; i < this.jsEquations.length; i++) {
            for (var key in this.data.equationsDictionary) {
                if (this.data.equationsDictionary.hasOwnProperty(key)) {
                    for (var j = 0; j < this.data.equationsDictionary[key].length; j++) {
                        if (this.jsEquations[i].index == this.data.equationsDictionary[key][j].id) {
                            this.data.equationsDictionary[key][j].before.jsTimeTaken = this.jsEquations[i].before.timetaken;
                            this.data.equationsDictionary[key][j].after.jsTimeTaken = this.jsEquations[i].after.timetaken;
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
                result = model.X * model.X - model.X * model.A;
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
                    result += array[i] * model.X * model.N;
                }
            }
            var t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            var t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                for (var j = 1; j < array.length; j++) {
                    result += array[i] * model.X;
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
                for (var nr_2 = 0; nr_2 < 50; nr_2++) {
                    x = tab[nr_2];
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
        var rand = Math.random();
        var num = rand * 100;
        var W = num > 30 ? true : false;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__keys_pipe__ = __webpack_require__("../../../../../src/app/keys.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__values_pipe__ = __webpack_require__("../../../../../src/app/values.pipe.ts");
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
                __WEBPACK_IMPORTED_MODULE_6__values_form_values_form_component__["a" /* ValuesFormComponent */],
                __WEBPACK_IMPORTED_MODULE_7__keys_pipe__["a" /* KeysPipe */],
                __WEBPACK_IMPORTED_MODULE_8__values_pipe__["a" /* ValuesPipe */]
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Pipe */])({
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
        this.onModelChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
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
        })
            .subscribe(function (result) {
            _this.onModelChanged.emit(result);
            _this.data = result;
            console.log(result);
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], ValuesFormComponent.prototype, "onModelChanged", void 0);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Pipe */])({
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