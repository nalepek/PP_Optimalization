export function jsEquations(model) {

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



