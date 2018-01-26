import { Component, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ValuesData } from './values-data';
import { Equation } from './Equation';
import { jsEquations } from '../assets/js/external';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    data: any;
    equationsLoaded = false;
    jsEquations;
    model = new ValuesData(7, 2, 3, 4, 5, 10, 1, 100, 10);
    isLoading: Boolean = true;
    jsLoading: Boolean = true;
    loading: Boolean = true;

    reloadModel(event, data: any): void {
        this.data = data;
    }

    _aTab = [];
    _bTab = [];
    _xTab = [];

    tab = [];
    //let tab = Array.apply(null, Array(50)).map(function () { });;

    //_xTab = Array.apply(null, Array(100)).map(function () { });

    __aTab = [];
    __bTab = [];
    __cTab = [];

    __t1Tab = [];
    __t2Tab = [];

    constructor(private _httpService: HttpClient, private zone: NgZone) {

        this.isLoading = true;
        this.jsLoading = true;
        this.loading = true;

        for (var i = 0 ; i < 50; i++){
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

            for (var j = 0; j < 100; j++){
                this.__aTab[i][j] = j;
                this.__bTab[i][j] = j;
                this.__cTab[i][j] = j;

                this.__t1Tab[i][j] = j;
                this.__t2Tab[i][j] = j;
            }
        }
      
        this._httpService.get('/home').subscribe(result => {
            this.zone.run(() => {
                this.data = result;
                this.equationsLoaded = true;
                this.isLoading = false;

                let t0 = performance.now();
                this.jsEquations = this.getEquations(this.model);
                let t1 = performance.now();

                this.data.jsSummaryTime = t1 - t0;
                this.remapPositions("");
                console.log(this.data);
                this.jsLoading = false;

                setTimeout(() => {
                  this.loading = false;
                }, 200);
            })
        },
        error => {
            console.log(error);
            this.isLoading = false;
            this.jsLoading = false;

            setTimeout(() => {
                  this.loading = false;
                }, 300);
        });

    }

    ngOnInit() {
    };

    public getExamples(event) {
        this.jsLoading = true;
        this.isLoading = true;
        this.loading = true;

        let headers = new HttpHeaders().set(
            'Content-Type',
            'application/json; charset=utf-8'
        );
        let body = JSON.stringify(this.model);

        this._httpService.post("/home", body, {
            headers: headers
        })
            .subscribe(result => {
                this.zone.run(() => {
                    this.data = result;
                    this.isLoading = false;

                    let t0 = performance.now();

                    this.jsEquations = this.getEquations(this.model);
                    let t1 = performance.now();

                    this.data.jsSummaryTime = t1 - t0;

                    this.remapPositions("");
                    this.jsLoading = false;

                    setTimeout(() => {
                        this.loading = false;
                    }, 300);
                })
            },
            error => {
                this.isLoading = false;
                this.jsLoading = false;
                console.log(error);
                setTimeout(() => {
                  this.loading = false;
                }, 300);
            });
    }

    remapPositions(msg) {
        for (var i = 0; i < this.jsEquations.length; i++) {

            for (var key in this.data.equationsDictionary) {

                if (this.data.equationsDictionary.hasOwnProperty(key)) {

                    for (var j = 0; j < this.data.equationsDictionary[key].length; j++) {

                        if (this.jsEquations[i].index == this.data.equationsDictionary[key][j].id) {

                            this.data.equationsDictionary[key][j].before.jsTimeTaken = this.jsEquations[i].before.timetaken;//.toFixed(5);
                            this.data.equationsDictionary[key][j].after.jsTimeTaken = this.jsEquations[i].after.timetaken;//.toFixed(5);

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
                result = (model.X * model.X - model.X * model.A) / model.B;
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
                    result += array[j] * model.X * model.N;
                }
            }
            let t1 = performance.now();
            timetaken = t1 - t0;
        }
        else {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                for (var j = 1; j < array.length; j++) {
                    result += array[j] * model.X;
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
        let result, timetaken;

        if (type == "before") {
            let t0 = performance.now();
            for (var i = 0; i < model.Count; i++) {
                a = 0;
                for (var nr = 0; nr < 50; nr++) {
                    if (this.tab[nr] < a)
                        a = this.tab[nr];
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
                    x = this.tab[nr];
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

        let W = model.W == 1 ? true : false;

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
