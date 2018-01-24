export class Equation {
    timetaken: number;
    result: number;

    constructor(){
    }

    calculate(count: number, callback: (n: number) => any){
        let t0 = performance.now();
        for (var i = 0; i < count; i++){
            this.result = callback(count)
        }
        let t1 = performance.now();

        this.timetaken = t1 - t0;
    }
}
