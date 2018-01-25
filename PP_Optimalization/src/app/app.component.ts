import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ValuesData } from './values-data';
import { Equation } from './Equation';
import { jsEquations } from '../assets/js/external';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    data: any;
    equationsLoaded = false;
    jsEquations;
    model = new ValuesData(7, 2, 3, 4, 5, 10, 100, 10);

    reloadModel(event, data: any): void {
        this.data = data;
        console.log(data);
    }

    _aTab = Array.apply(null, Array(100)).map(function () { });
    _bTab = Array.apply(null, Array(100)).map(function () { });
    _xTab = Array.apply(null, Array(100)).map(function () { });

    __aTab = Array.apply(null, Array(100)).map(function () { });
    __bTab = Array.apply(null, Array(100)).map(function () { });
    __cTab = Array.apply(null, Array(100)).map(function () { });

    __t1Tab = Array.apply(null, Array(100)).map(function () { });
    __t2Tab = Array.apply(null, Array(100)).map(function () { });

    constructor(private _httpService: HttpClient) {

        for (var i = 0; i < 100; i++) {
            this.__aTab[i] = Array.apply(null, Array(100)).map(function () { });;
            this.__bTab[i] = Array.apply(null, Array(100)).map(function () { });;
            this.__cTab[i] = Array.apply(null, Array(100)).map(function () { });;

            this.__t1Tab[i] = Array.apply(null, Array(100)).map(function () { });;
            this.__t2Tab[i] = Array.apply(null, Array(100)).map(function () { });;
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


        this._httpService.get('/home').subscribe(result => {
            this.data = result;
            this.equationsLoaded = true;
            //console.log(this.data);

            this.remapPositions();

            //console.log("AFTER");
            //console.log(this.data);
        });

        //console.log("constructor");
    }

    ngOnInit() {
        //console.log("ngOnInit");
    };

    public getExamples(event) {

    };

    remapPositions() {
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
    }

    getEquations(model) {

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
    }

    localOptimalization(model, type) {
        let result, timetaken;
        if (type == "before") {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                result = Math.pow(model.X, 2) / model.B - model.A * model.X / model.B;
            }
            let t1 = performance.now();
            timetaken = t1 - t0;
        }
        else if (type == "after") {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                result = model.X * model.X - model.X * model.A;
            }
            let t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                result = model.X * (model.X - model.A) / model.B;
            }
            let t1 = performance.now();
            timetaken = t1 - t0;
        }

        return {
            timetaken: timetaken,
            result: result
        }
    }

    localOptimalization2(model, type) {
        let result, timetaken;
        if (type == "before") {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                result = model.A * model.B * model.C + model.A * model.B * model.D + model.A * model.E;
            }
            let t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                result = model.A * (model.B * (model.C + model.D) + model.E)
            }
            let t1 = performance.now();
            timetaken = t1 - t0;
        }
        return {
            timetaken: timetaken,
            result: result
        }
    }

    localOptimalization3(model, type) {
        let result, timetaken;
        let array = [model.N];

        if (type == "before") {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                for (var j = 1; j < array.length; j++) {
                    result += array[i] * model.X * model.N;
                }
            }
            let t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                for (var j = 1; j < array.length; j++) {
                    result += array[i] * model.X;
                }
                result *= model.N;
            }
            let t1 = performance.now();
            timetaken = t1 - t0;
        }
        return {
            timetaken: timetaken,
            result: array[0]
        }
    }

    localOptimalization4(model, type) {
        let result, timetaken;
        if (type == "before") {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                result = - model.A + model.B;
            }
            let t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                result = model.B - model.A;
            }
            let t1 = performance.now();
            timetaken = t1 - t0;
        }
        return {
            timetaken: timetaken,
            result: result
        }
    }

    reductionOfVarWithSingleRef(model, type) {
        let result, timetaken;
        if (type == "before") {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                let d = model.A + model.B * model.C;
                result = d + model.E;
            }
            let t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                result = model.A + model.B * model.C + model.E;
            }
            let t1 = performance.now();
            timetaken = t1 - t0;
        }
        return {
            timetaken: timetaken,
            result: result
        }
    }

    moreEconomicOperations(model, type) {
        let result, timetaken;
        if (type == "before") {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                result = 2 * model.A;
            }
            let t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                result = model.A + model.A;
            }
            let t1 = performance.now();
            timetaken = t1 - t0;
        }
        return {
            timetaken: timetaken,
            result: result
        }
    }

    moreEconomicOperations2(model, type) {
        let result, timetaken;
        if (type == "before") {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                result = 3 * model.A;
            }
            let t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                result = model.A + model.A + model.A;
            }
            let t1 = performance.now();
            timetaken = t1 - t0;
        }
        return {
            timetaken: timetaken,
            result: result
        }
    }

    moreEconomicOperations3(model, type) {
        let result, timetaken;
        if (type == "before") {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                result = 4 * model.A;
            }
            let t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                let a = model.A + model.A;
                a += model.A + model.A;
                result = a;
            }
            let t1 = performance.now();
            timetaken = t1 - t0;
        }
        return {
            timetaken: timetaken,
            result: result
        }
    }

    moreEconomicOperations4(model, type) {
        let result, timetaken;
        if (type == "before") {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                result = model.A / 2;
            }
            let t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                result = model.A * 0.5;
            }
            let t1 = performance.now();
            timetaken = t1 - t0;
        }
        return {
            timetaken: timetaken,
            result: result
        }
    }

    moreEconomicOperations5(model, type) {
        let result, timetaken;
        if (type == "before") {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                let y = model.C / model.X;
                let z = model.A + model.B / model.X;
                result = z;
            }
            let t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                let xOdwr = 1.0 / model.X;
                let y = model.C * xOdwr;
                let z = model.A + model.B * xOdwr;
                result = z;
            }
            let t1 = performance.now();
            timetaken = t1 - t0;
        }
        return {
            timetaken: timetaken,
            result: result
        }
    }

    calcConstansValues(model, type) {
        let result, timetaken;
        if (type == "before") {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                result = 4 * model.A * Math.atan(1) / 180 + model.C;
            }
            let t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                result = model.A * 0.017453292519943295 + model.C;
            }
            let t1 = performance.now();
            timetaken = t1 - t0;
        }
        return {
            timetaken: timetaken,
            result: result
        }
    }

    efficientInstructions(model, type) {
        let a;
        let x;
        let tab = Array.apply(null, Array(50)).map(function () { });;
        let result, timetaken;

        if (type == "before") {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                a = 0;
                for (var nr = 0; nr < 50; nr++) {
                    if (tab[nr] < a)
                        a = tab[nr];
                }
            }
            let t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                a = 0;
                for (let nr = 0; nr < 50; nr++) {
                    x = tab[nr];
                    if (x < a) a = x;
                }
            }
            let t1 = performance.now();
            timetaken = t1 - t0;
        }
        return {
            timetaken: timetaken,
            result: result
        }
    }

    efficientInstructions2(model, type) {
        let a;
        let x;
        let tab = Array.apply(null, Array(50)).map(function () { });;
        let result, timetaken;

        if (type == "before") {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                a = 0;
                for (var nr = 0; nr < 50; nr++) {
                    if (tab[nr] < a)
                        a = tab[nr];
                }
            }
            let t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                a = 0;
                for (let nr = 0; nr < 50; nr++) {
                    x = tab[nr];
                    a = x < a ? x : a;
                }
            }
            let t1 = performance.now();
            timetaken = t1 - t0;
        }

        result = a;

        return {
            timetaken: timetaken,
            result: result
        }
    }

    eliminationRedundantCalculations(model, type) {
        let result, timetaken;
        if (type == "before") {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                let y = model.X + model.A / model.B * model.C;
                let z = model.E + model.A / model.B * model.C;
                result = z;
            }
            let t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                let abc = model.A / model.B * model.C;
                let y = model.A + abc;
                let z = model.E + abc;
                result = z;
            }
            let t1 = performance.now();
            timetaken = t1 - t0;
        }
        return {
            timetaken: timetaken,
            result: result
        }
    }

    typeConversion(model, type) {
        let i1 = 1, i2 = 2, i3 = 3, i4 = 4;
        let f1 = 1.0, f2 = 2.0, f3 = 3.0, f4 = 4.0;

        let result, timetaken;
        if (type == "before") {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                var y = i1 + f1 + i2 + f2 + i3 + f3 + i4 + f4;
                result = y;
            }
            let t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                var y = i1 + i2 + i3 + i4 + f1 + f2 + f3 + f4;
                result = y;
            }
            let t1 = performance.now();
            timetaken = t1 - t0;
        }
        return {
            timetaken: timetaken,
            result: result
        }
    }

    expandLoop(model, type) {
        let tab = Array.apply(null, Array(10)).map(function () { });;
        let result, timetaken;
        if (type == "before") {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                for (var nr = 0; nr < 10; nr++) {
                    tab[nr] = 0;
                }
            }
            let t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            let t0 = performance.now();
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
            let t1 = performance.now();
            timetaken = t1 - t0;
        }
        return {
            timetaken: timetaken,
            result: 0
        }
    }

    joinLoop(model, type) {
        let result, timetaken;
        if (type == "before") {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                for (var nr = 0; nr < 100; nr++)
                    this._aTab[nr] = 0;
                for (var nr = 0; nr < 100; nr++)
                    this._bTab[nr] = 1;
            }
            let t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                for (var nr = 0; nr < 100; nr++) {
                    this._aTab[nr] = 0;
                    this._bTab[nr] = 1;
                }
            }
            let t1 = performance.now();
            timetaken = t1 - t0;
        }
        return {
            timetaken: timetaken,
            result: result
        }
    }

    moveUnusedOutOfLoop(model, type) {

        let cd, abcd;

        let result, timetaken;
        if (type == "before") {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                for (var nr1 = 1; nr1 < 100; nr1++)
                    for (var nr2 = 1; nr2 < 100; nr2++)
                        this.__t1Tab[nr1][nr2] = this.__t2Tab[nr1][nr2] + model.A / nr1 - model.C / model.D;
            }
            let t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                cd = model.C / model.D;
                for (var nr1 = 1; nr1 < 100; nr1++) {
                    abcd = model.A / nr1 - cd;
                    for (var nr2 = 1; nr2 < 100; nr2++)
                        this.__t1Tab[nr1][nr2] = this.__t2Tab[nr1][nr2] + abcd;
                }
            }
            let t1 = performance.now();
            timetaken = t1 - t0;
        }
        return {
            timetaken: timetaken,
            result: result
        }
    }

    moveTestingOutOfLoop(model, type) {
        let result, timetaken;

        var rand = Math.random();
        var num = rand * 100;
        let W = num > 30 ? true : false;

        if (type == "before") {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                for (var nr = 0; nr < 100; nr++)
                    if (W) this._xTab[nr] = this._aTab[nr] + this._bTab[nr];
                    else this._xTab[nr] = this._aTab[nr] - this._bTab[nr];
            }
            let t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                if (W)
                    for (var nr = 0; nr < 100; nr++)
                        this._xTab[nr] = this._aTab[nr] + this._bTab[nr];
                else
                    for (var nr = 0; nr < 100; nr++)
                        this._xTab[nr] = this._aTab[nr] - this._bTab[nr];
            }
            let t1 = performance.now();
            timetaken = t1 - t0;
        }
        return {
            timetaken: timetaken,
            result: result
        }
    }

    minimizingNumberOfIndexes(model, type) {
        let result, timetaken, pom;
        if (type == "before") {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                for (var nr1 = 0; nr1 < 100; nr1++)
                    for (var nr2 = 1; nr2 < 100; nr2++) {
                        this.__aTab[nr1][nr2] = 0;
                        for (var nr3 = 1; nr3 < 100; nr3++)
                            this.__aTab[nr1][nr2] = this.__aTab[nr1][nr2] + this.__bTab[nr2][nr3] + this.__cTab[nr3][nr2];
                    }
            }
            let t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                for (var nr1 = 0; nr1 < 100; nr1++)
                    for (var nr2 = 1; nr2 < 100; nr2++) {
                        pom = 0;
                        for (var nr3 = 1; nr3 < 100; nr3++)
                            pom = pom + this.__bTab[nr2][nr3] + this.__cTab[nr3][nr2];
                    }
            }
            let t1 = performance.now();
            timetaken = t1 - t0;
        }
        return {
            timetaken: timetaken,
            result: result
        }
    }

    abccdeee(model, type) {
        let result, timetaken;
        if (type == "before") {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {

            }
            let t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {

            }
            let t1 = performance.now();
            timetaken = t1 - t0;
        }
        return {
            timetaken: timetaken,
            result: result
        }
    }
}
