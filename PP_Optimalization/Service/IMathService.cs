using org.mariuszgromada.math.mxparser;
using System;
using System.Collections.Generic;
using System.Linq;

namespace PP_Optimalization.Service
{
    public interface IMathService
    {
        MathData GetExamples(ValuesData valuesData);
    }

    public class MathService : IMathService
    {
        private int[] _aTab = new int[100];
        private int[] _bTab = new int[100];
        private int[] _xTab = new int[100];

        private int[] tab = new int[50];

        private int[][] __aTab = new int[100][];
        private int[][] __bTab = new int[100][];
        private int[][] __cTab = new int[100][];

        private int[][] __t1Tab = new int[100][];
        private int[][] __t2Tab = new int[100][];

        private int _a;
        private int _c;
        private int _d;

        private ValuesData _valuesData;

        public MathService()
        {
            for (var i = 0; i < 50; i++)
            {
                tab[i] = i;
            }
            for (var i = 0; i < 100; i++)
            {
                _aTab[i] = i;
                _bTab[i] = i;
                _xTab[i] = i;

                __aTab[i] = new int[100];
                __bTab[i] = new int[100];
                __cTab[i] = new int[100];
                __t1Tab[i] = new int[100];
                __t2Tab[i] = new int[100];

                for (var j = 0; j < 100; j++)
                {
                    __aTab[i][j] = j;
                    __bTab[i][j] = j;
                    __cTab[i][j] = j;
                    __t1Tab[i][j] = j;
                    __t2Tab[i][j] = j;
                }
            }

            _valuesData = new ValuesData();
        }

        public MathData GetExamples(ValuesData valuesData)
        {
            _a = Convert.ToInt32(valuesData.A);
            _c = Convert.ToInt32(valuesData.C);
            _d = Convert.ToInt32(valuesData.D);

            return Factory(valuesData);
        }

        private MathData Factory(ValuesData valuesData)
        {
            var data = new MathData();

            _valuesData = valuesData;

            var equations = EquationsFactory(valuesData);
            var dictionary = equations.GroupBy(z => z.Name).ToDictionary(y => y.Key, y => y.ToList());

            var values = new List<string>
            {
                "a = " + valuesData.A,
                "b = " + valuesData.B,
                "c = " + valuesData.C,
                "d = " + valuesData.D,
                "e = " + valuesData.E,
                "x = " + valuesData.X,
                "n = " + valuesData.N,
                "count = " + valuesData.Count
            };

            data.Values = valuesData;
            data.EquationsDictionary = dictionary;
            return data;
        }

        private List<EquationData> EquationsFactory(ValuesData v)
        {
            int i = 0;
            var list = new List<EquationData>
            {
                new EquationData(i++, "Minimalizacja liczby operacji przy wartościowaniu wyrażeń arytmetycznych")
                {
                    Before = MinimizeOperationNumber(v, EquationType.Before),
                    After = MinimizeOperationNumber(v, EquationType.After)
                },

                new EquationData(i++, "Minimalizacja liczby operacji przy wartościowaniu wyrażeń arytmetycznych")
                {
                    Before = MinimizeOperationNumber(v, EquationType.Before),
                    After = MinimizeOperationNumber(v, EquationType.AfterAnother)
                },

                new EquationData(i++, "Minimalizacja liczby operacji przy wartościowaniu wyrażeń arytmetycznych")
                {
                    Before = MinimizeOperationNumber2(v, EquationType.Before),
                    After = MinimizeOperationNumber2(v, EquationType.After)
                },

                new EquationData(i++, "Minimalizacja liczby operacji przy wartościowaniu wyrażeń arytmetycznych")
                {
                    Before = MinimizeOperationNumber3(v, EquationType.Before),
                    After = MinimizeOperationNumber3(v, EquationType.After)
                },

                new EquationData(i++, "Minimalizacja liczby operacji przy wartościowaniu wyrażeń arytmetycznych")
                {
                    Before = MinimizeOperationNumber4(v, EquationType.Before),
                    After = MinimizeOperationNumber4(v, EquationType.After)
                },

                new EquationData(i++, "Likwidacja zmiennych z jednokrotnym odwołaniem")
                {
                    Before = ReductionOfSingleRef(v, EquationType.Before),
                    After = ReductionOfSingleRef(v, EquationType.After)
                },

                new EquationData(i++, "Stosowanie oszczędniejszych operacji")
                {
                    Before = MoreEconomicOperations(v, EquationType.Before),
                    After = MoreEconomicOperations(v, EquationType.After)
                },

                new EquationData(i++, "Stosowanie oszczędniejszych operacji")
                {
                    Before = MoreEconomicOperations2(v, EquationType.Before),
                    After = MoreEconomicOperations2(v, EquationType.After)
                },

                new EquationData(i++, "Stosowanie oszczędniejszych operacji")
                {
                    Before = MoreEconomicOperations3(v, EquationType.Before),
                    After = MoreEconomicOperations3(v, EquationType.After)
                },

                new EquationData(i++, "Stosowanie oszczędniejszych operacji")
                {
                    Before = MoreEconomicOperations4(v, EquationType.Before),
                    After = MoreEconomicOperations4(v, EquationType.After)
                },

                new EquationData(i++, "Stosowanie oszczędniejszych operacji")
                {
                    Before = MoreEconomicOperations5(v, EquationType.Before),
                    After = MoreEconomicOperations5(v, EquationType.After)
                },

                new EquationData(i++, "Wyliczanie wartości stałych")
                {
                    Before = Constants(v, EquationType.Before),
                    After = Constants(v, EquationType.After)
                },

                new EquationData(i++, "Stosowanie efektywniejszych instrukcji")
                {
                    Before = MoreEfficientOperations(v, EquationType.Before),
                    After = MoreEfficientOperations(v, EquationType.After)
                },

                new EquationData(i++, "Stosowanie efektywniejszych instrukcji")
                {
                    Before = new Equation("a = 0 \nfor(int nr = 0; nr < 50; nr++) { \nif(tab[nr] < a) a = tab[nr]; \n}" , v.Count, z => EfficientInstructions(EquationType.Before)),
                    After = new Equation("a = 0; \nfor (int nr = 0; nr < 50; nr++) { \nx = tab[nr]; \na = x < a ? x : a; \n}", v.Count, z => EfficientInstructions(EquationType.AfterAnother))
                },

                new EquationData(i++, "Eliminacja obliczeń redundantnych")
                {
                    Before = EliminationRedundantCalcs(v, EquationType.Before),
                    After = EliminationRedundantCalcs(v, EquationType.After)
                },

                new EquationData(i++, "Konwersja typów")
                {
                    Before = new Equation("y = i1 + f1 + i2 + f2 + i3 + f3 + i4 + f4" , v.Count, z => TypeConversion(EquationType.Before)),
                    After = new Equation("y = i1 + i2 + i3 + i4 + f1 + f2 + f3 + f4", v.Count, z => TypeConversion(EquationType.After))
                },

                new EquationData(i++, "Optymalizacja globalna: Rozwijanie pętli")
                {
                    Before = new Equation("for (int nr = 0; nr < 10; nr++) \ntab1[nr] = 0;" , v.Count, z => ExpandLoop(EquationType.Before)),
                    After = new Equation("tab[0] = 0 \n... tab[10] = 10", v.Count, z => ExpandLoop(EquationType.After))
                },

                new EquationData(i++, "Łączenie pętli")
                {
                    Before = new Equation(@"for(int nr=0; nr<100; nr++) \ntab1[nr]=0; 
                                                        \nfor (int nr = 0; nr < 100; nr++) 
                                                        \ntab2[nr]=0;", v.Count, z => JoinLoop(EquationType.Before)),
                    After = new Equation(@"for(int nr=0; nr<100; nr++){ \ntab1[nr]=0;
                                                       \ntab2[nr]=1; }",
                                            v.Count, z => JoinLoop(EquationType.After))
                },

                new EquationData(i++, "Przenoszenie operacji niezmienniczych w pętli poza pętle (w tym konwersji typów)")
                {
                    Before = MoveUnusedOutOfLoopEquation(v, EquationType.Before),
                    After = MoveUnusedOutOfLoopEquation(v, EquationType.After)
                },

                new EquationData(i++, "Przenoszenie testowania poza pętle")
                {
                    Before = new Equation(String.Concat("for (int nr = 0; nr < 100; nr++)", Environment.NewLine,
                                                            "if (W) x[nr] = a[nr] + b[nr];", Environment.NewLine,
                                                            "else x[nr] = a[nr] - b[nr];", Environment.NewLine)
                                                            , v.Count, z => MoveTestingOutOfLoop(v.W, EquationType.Before)),
                    After = new Equation(String.Concat("if (W)", Environment.NewLine,
                                                       "for (int nr = 0; nr < 100; nr++)", Environment.NewLine,
                                                       "x[nr] = a[nr] + b[nr];", Environment.NewLine,
                                                       "else", Environment.NewLine,
                                                       "for (int nr = 0; nr < 100; nr++)", Environment.NewLine,
                                                       "x[nr] = a[nr] - b[nr];")
                                         , v.Count, z => MoveTestingOutOfLoop(v.W, EquationType.After))
                },

                new EquationData(i++, "Minimalizacja liczby indeksów w odwołaniach do elementów tablic")
                {
                    Before = new Equation(String.Concat("for (int nr1 = 0; nr1 < 100; nr1++)", Environment.NewLine,
                                                        "for (int nr2 = 1; nr2 < 100; nr2++){", Environment.NewLine,
                                                        "a[nr1][nr2] = 0;", Environment.NewLine,
                                                        "for (int nr3 = 1; nr3 < 100; nr3++)", Environment.NewLine,
                                                        "a[nr1][nr2] = a[nr1][nr2] + b[nr2][nr3] + c[nr3][nr2]; }", Environment.NewLine)
                                          , v.Count, z => MinimizingNumberOfIndexes(EquationType.Before)),
                    After = new Equation(String.Concat("for (int nr1 = 0; nr1 < 100; nr1++) ", Environment.NewLine,
                                                       "for (int nr2 = 1; nr2 < 100; nr2++){", Environment.NewLine,
                                                       "pom = 0;", Environment.NewLine,
                                                       "for (int nr3 = 1; nr3 < 100; nr3++)", Environment.NewLine,
                                                       "pom = pom + __bTab[nr2][nr3] + __cTab[nr3][nr2];")
                                         , v.Count, z => MinimizingNumberOfIndexes(EquationType.After))
                },
            };

            return list;
        }

        private Equation MinimizeOperationNumber(ValuesData v, EquationType type)
        {

            if (type == EquationType.Before)
            {
                var formula = "Math.Pow(x, 2) / b - a * x / b";
                var numberFormula = string.Format("Math.Pow({0}, 2) / {1} - {2} * {0} / {1}", v.X, v.B, v.A);

                return new Equation(formula, numberFormula, v.Count, z => Math.Pow(v.X, 2) / v.B - v.A * v.X / v.B);
            }
            else if (type == EquationType.After)
            {

                var formula = "(x * x - x * a) / b";
                var numberFormula = string.Format("({0} * {0} - {0} * {2}) / {1}", v.X, v.B, v.A);

                return new Equation(formula, numberFormula, v.Count, z => (v.X * v.X - v.X * v.A) / v.B);
            }
            else
            {
                var formula = "x * (x - a) / b";
                var numberFormula = string.Format("{0} * ({0} - {1}) / {2}", v.X, v.A, v.B);

                return new Equation(formula, numberFormula, v.Count, z => v.X * (v.X - v.A) / v.B);
            }
        }

        private Equation MinimizeOperationNumber2(ValuesData v, EquationType type)
        {
            if (type == EquationType.Before)
            {
                var formula = "a * b * c + a * b * d + a * e";
                var numberFormula = string.Format("{0} * {1} * {2} + {0} * {1} * {3} + {0} * {4}", v.A, v.B, v.C, v.D, v.E);

                return new Equation(formula, numberFormula, v.Count, z => v.A * v.B * v.C + v.A * v.B * v.D + v.A * v.E);      
            }
            else
            {
                var formula = "a * (b * (c + d) + e)";
                var numberFormula = string.Format("{0} * ({1} * ({2} + {3}) + {4})", v.A, v.B, v.C, v.D, v.E);

                return new Equation(formula, numberFormula, v.Count, z => v.A * (v.B * (v.C + v.D) + v.E));
            }
        }

        private Equation MinimizeOperationNumber3(ValuesData v, EquationType type)
        {
            if (type == EquationType.Before)
            {
                var formula = "a[n] * x * n + a[n - 1] * x *(n - 1)+ ... + a[1] * x + a[0]";
                var numberFormula = string.Format("a[n] * {0} * {1} + a[n - 1] * {0} *(n - 1)+ ... + a[1] * {0} + a[0]", v.X, v.N);

                return new Equation(formula, numberFormula, v.Count, z => Series(v.N, v.X, EquationType.Before));
            }
            else
            {
                var formula = "...((a[n] * x + a[n - 1]) * x + a[n - 2] * x + ... + a[1]) * x + a[0]";
                var numberFormula = string.Format("...((a[n] * {0} + a[n - 1]) * {0} + a[n - 2] * {0} + ... + a[1]) * {0} + a[0]", v.X);

                return new Equation(formula, numberFormula, v.Count, z => Series(v.N, v.X, EquationType.After));
            }
        }

        private Equation MinimizeOperationNumber4(ValuesData v, EquationType type)
        {
            if (type == EquationType.Before)
            {
                var formula = "-a + b";
                var numberFormula = string.Format("-{0} + {1}", v.A, v.B);

                return new Equation(formula, numberFormula, v.Count, z => -v.A + v.B);
            }
            else
            {
                var formula = "b - a";
                var numberFormula = string.Format("{0} - {1}", v.A, v.B);

                return new Equation(formula, numberFormula, v.Count, z => v.B - v.A);
            }
        }

        private Equation ReductionOfSingleRef(ValuesData v, EquationType type)
        {
            if (type == EquationType.Before)
            {
                var formula = "d = a + b * c \ny = d + e";
                var numberFormula = string.Format("d = {0} + {1} * {2} \ny = {3} + {4}", v.A, v.B, v.C, v.D, v.E);

                return new Equation(formula, numberFormula, v.Count, z => ReductionOfVarWithSingleRef(v.A, v.B, v.C, v.E));
            }
            else
            {
                var formula = "y = a + b * c + e";
                var numberFormula = string.Format("y = {0} + {1} * {2} + {3}", v.A, v.B, v.C, v.E);

                return new Equation(formula, numberFormula, v.Count, z => v.A + v.B * v.C + v.E);
            }
        }

        private Equation MoreEconomicOperations(ValuesData v, EquationType type)
        {
            if (type == EquationType.Before)
            {
                var formula = "2 * a";
                var numberFormula = string.Format("2 * {0}", v.A);

                return new Equation(formula, numberFormula, v.Count, z => 2 * v.A);
            }
            else
            {
                var formula = "a + a";
                var numberFormula = string.Format("{0} + {0}", v.A);

                return new Equation(formula, numberFormula, v.Count, z => v.A + v.A);
            }
        }

        private Equation MoreEconomicOperations2(ValuesData v, EquationType type)
        {
            if (type == EquationType.Before)
            {
                var formula = "3 * a";
                var numberFormula = string.Format("3 * {0}", v.A);

                return new Equation(formula, numberFormula, v.Count, z => 3 * v.A);
            }
            else
            {
                var formula = "a + a + a";
                var numberFormula = string.Format("{0} + {0} + {0}", v.A);

                return new Equation(formula, numberFormula, v.Count, z => v.A + v.A + v.A);
            }
        }

        private Equation MoreEconomicOperations3(ValuesData v, EquationType type)
        {
            if (type == EquationType.Before)
            {
                var formula = "4 * a";
                var numberFormula = string.Format("4 * {0}", v.A);

                return new Equation(formula, numberFormula, v.Count, z => 4 * v.A);
            }
            else
            {
                var formula = "a = a + a \na = a + a";
                var numberFormula = string.Format("a = {0} + {0} \na = {0} + {0}", v.A);

                return new Equation(formula, numberFormula, v.Count, z => EconomicalOperation1(v.A));
            }
        }

        private Equation MoreEconomicOperations4(ValuesData v, EquationType type)
        {
            if (type == EquationType.Before)
            {
                var formula = "a / 2";
                var numberFormula = string.Format("{0} / 2", v.A);

                return new Equation(formula, numberFormula, v.Count, z => v.A / 2);
            }
            else
            {
                var formula = "a * 0.5";
                var numberFormula = string.Format("{0} * 0.5", v.A);

                return new Equation(formula, numberFormula, v.Count, z => v.A * 0.5);
            }
        }

        private Equation MoreEconomicOperations5(ValuesData v, EquationType type)
        {
            if (type == EquationType.Before)
            {
                var formula = "y = c / x \nz = a + b / x";
                var numberFormula = string.Format("y = {2} / {3} \nz = {0} + {1} / {3}", v.A, v.B, v.C, v.X);

                return new Equation(formula, numberFormula, v.Count, z => EconomicalOperation2(v.A, v.B, v.C, v.X, EquationType.Before));
            }
            else
            {
                var formula = "xOdwr = 1.0 / x \ny = c * xOdwr \nz = a + b * xOdwr";
                var numberFormula = string.Format("xOdwr = 1.0 / {3} \ny = {2} * xOdwr \nz = {0} + {1} * xOdwr", v.A, v.B, v.C, v.X);

                return new Equation(formula, numberFormula, v.Count, z => EconomicalOperation2(v.A, v.B, v.C, v.X, EquationType.After));
            }
        }

        private Equation Constants(ValuesData v, EquationType type)
        {
            if (type == EquationType.Before)
            {
                var formula = "b = 4 * a * atan(1) / 180 + c";
                var numberFormula = string.Format("b = 4 * {0} * atan(1) / 180 + {1}", v.A, v.C);

                return new Equation(formula, numberFormula, v.Count, z => 4 * v.A * Math.Atan(1) / 180 + v.C);
            }
            else
            {
                var formula = "b = a * 0.017453292519943295 + c";
                var numberFormula = string.Format("b = {0} * 0.017453292519943295 + {1}", v.A, v.C);

                return new Equation(formula, numberFormula, v.Count, z => v.A * 0.017453292519943295 + v.C);
            }
        }

        private Equation MoreEfficientOperations(ValuesData v, EquationType type)
        {
            if (type == EquationType.Before)
            {
                var formula = "a = 0 \nfor(int nr = 0; nr < 50; nr++) { \nif(tab[nr] < a) a = tab[nr]; \n}";
                var numberFormula = "a = 0 \nfor(int nr = 0; nr < 50; nr++) { \nif(tab[nr] < a) a = tab[nr]; \n}";

                return new Equation(formula, numberFormula, v.Count, z => EfficientInstructions(EquationType.Before));
            }
            else
            {
                var formula = "a = 0; \nfor (int nr = 0; nr < 50; nr++) { \nx = tab[nr]; \nif (x < a) a = x; \n}";
                var numberFormula = "a = 0; \nfor (int nr = 0; nr < 50; nr++) { \nx = tab[nr]; \nif (x < a) a = x; \n}";

                return new Equation(formula, numberFormula, v.Count, z => EfficientInstructions(EquationType.After));
            }
        }

        private Equation MoreEfficientOperations2(ValuesData v, EquationType type)
        {
            if (type == EquationType.Before)
            {
                var formula = "a = 0 \nfor(int nr = 0; nr < 50; nr++) { \nif(tab[nr] < a) a = tab[nr]; \n}";
                var numberFormula = "a = 0 \nfor(int nr = 0; nr < 50; nr++) { \nif(tab[nr] < a) a = tab[nr]; \n}";

                return new Equation(formula, numberFormula, v.Count, z => EfficientInstructions(EquationType.Before));
            }
            else
            {
                var formula = "a = 0; \nfor (int nr = 0; nr < 50; nr++) { \nx = tab[nr]; \nif (x < a) a = x; \n}";
                var numberFormula = "a = 0; \nfor (int nr = 0; nr < 50; nr++) { \nx = tab[nr]; \nif (x < a) a = x; \n}";

                return new Equation(formula, numberFormula, v.Count, z => EfficientInstructions(EquationType.After));
            }
        }

        private Equation EliminationRedundantCalcs(ValuesData v, EquationType type)
        {
            if (type == EquationType.Before)
            {
                var formula = "y = x + a / b * c \nz = e + a / b * c";
                var numberFormula = string.Format("y = {4} + {0} / {1} * {2} \nz = {3} + {0} / {1} * {2}", v.A, v.B, v.C, v.E, v.X);

                return new Equation(formula, numberFormula, v.Count, z => EliminationRedundantCalculations(v.A, v.B, v.C, v.E, v.X, EquationType.Before));
            }
            else
            {
                var formula = "abc = a / b * c \ny = a + abc \nz = e + abc";
                var numberFormula = string.Format("abc = {0} / {1} * {2} \ny = {0} + abc \nz = {3} + abc", v.A, v.B, v.C, v.E);

                return new Equation(formula, numberFormula, v.Count, z => EliminationRedundantCalculations(v.A, v.B, v.C, v.E, v.X, EquationType.After));
            }
        }

        //todo
        private Equation MoveUnusedOutOfLoopEquation(ValuesData v, EquationType type)
        {
            if (type == EquationType.Before)
            {
                var formula = String.Concat("for(int nr1=0; nr1<100; nr1++)", Environment.NewLine,
                                                                        "for (int nr2 = 1; nr2 < 100; nr2++)", Environment.NewLine,
                                                                          "t1[nr1][nr2] = t2[nr1][nr2] + a / nr1 - c / d;");
                
                var numberFormula = string.Format("for(int nr1=0; nr1<100; nr1++)", Environment.NewLine,
                                                                "for (int nr2 = 1; nr2 < 100; nr2++)", Environment.NewLine,
                                                                "t1[nr1][nr2] = t2[nr1][nr2] + {0} / nr1 - {1} / {2};", v.A, v.C, v.D);

                return new Equation(formula, numberFormula, v.Count, z => MoveUnusedOutOfLoop(v.A, v.C, v.D, EquationType.Before));
            }
            else
            {
                var formula = String.Concat("cd=c/d;", Environment.NewLine,
                                                             "for(int nr1 = 0; nr1 < 100; nr1++){", Environment.NewLine,
                                                           "abcd = a / nr1 - cd;", Environment.NewLine,
                                                         "for(int nr2 = 1; nr2<100; nr2++)", Environment.NewLine,
                                                       "t1[nr1][nr2] = t2[nr1][nr2] + abcd; }");
                var numberFormula = string.Format("cd = {1} / {2};", Environment.NewLine,
                                                       "for(int nr1 = 0; nr1<100; nr1++){", Environment.NewLine,
                                                                "abcd = {0} / nr1 - cd;", Environment.NewLine,
                                                   "for(int nr2=1; nr2<100; nr2++)", Environment.NewLine,
                                                 "t1[nr1][nr2] = t2[nr1][nr2] + abcd; }", v.A, v.B, v.C, v.E);

                return new Equation(formula, numberFormula, v.Count, z => MoveUnusedOutOfLoop(v.A, v.C, v.D, EquationType.After));
            }
        }











            
        private double MinimizingNumberOfIndexes(EquationType type)
        {
            int pom;

            if (type == EquationType.Before)
            {
                for (int nr1 = 0; nr1 < 100; nr1++)
                    for (int nr2 = 1; nr2 < 100; nr2++)
                    {
                        __aTab[nr1][nr2] = 0;
                        for (int nr3 = 1; nr3 < 100; nr3++)
                            __aTab[nr1][nr2] = __aTab[nr1][nr2] + __bTab[nr2][nr3] + __cTab[nr3][nr2];
                    }
            }
            else
            {
                for (int nr1 = 0; nr1 < 100; nr1++)
                    for (int nr2 = 1; nr2 < 100; nr2++)
                    {
                        pom = 0;
                        for (int nr3 = 1; nr3 < 100; nr3++)
                            pom = pom + __bTab[nr2][nr3] + __cTab[nr3][nr2];
                    }
            }

            return 0;
        }

        private double MoveTestingOutOfLoop(int w, EquationType type)
        {
            var W = w == 1 ? true : false;

            if (type == EquationType.Before)
            {
                for (int nr = 0; nr < 100; nr++)
                    if (W) _xTab[nr] = _aTab[nr] + _bTab[nr];
                    else _xTab[nr] = _aTab[nr] - _bTab[nr];
            }
            else
            {
                if (W)
                    for (int nr = 0; nr < 100; nr++)
                        _xTab[nr] = _aTab[nr] + _bTab[nr];
                else
                    for (int nr = 0; nr < 100; nr++)
                        _xTab[nr] = _aTab[nr] - _bTab[nr];
            }
            return 0;
        }

        private double MoveUnusedOutOfLoop(double a, double c, double d, EquationType type)
        {
            double cd;
            double abcd;

            if (type == EquationType.Before)
            {
                for (int nr1 = 1; nr1 < 100; nr1++)
                    for (int nr2 = 1; nr2 < 100; nr2++)
                        __t1Tab[nr1][nr2] = __t2Tab[nr1][nr2] + _a / nr1 - _c / _d;
            }
            else
            {
                cd = c / d;
                for (int nr1 = 1; nr1 < 100; nr1++)
                {
                    abcd = a / nr1 - cd;
                    for (int nr2 = 1; nr2 < 100; nr2++)
                        __t1Tab[nr1][nr2] = __t2Tab[nr1][nr2] + Convert.ToInt32(abcd);
                }
            }
            return 0;
        }

        private double JoinLoop(EquationType type)
        {
            if (type == EquationType.Before)
            {
                for (int nr = 0; nr < 100; nr++)
                    _aTab[nr] = 0;
                for (int nr = 0; nr < 100; nr++)
                    _bTab[nr] = 1;
            }
            else
            {
                for (int nr = 0; nr < 100; nr++)
                {
                    _aTab[nr] = 0;
                    _bTab[nr] = 1;
                }
            }
            return 0;
        }

        private double ExpandLoop(EquationType type)
        {
            int[] tab = new int[10];

            if (type == EquationType.Before)
            {
                for (int nr = 0; nr < 10; nr++)
                {
                    tab[nr] = 0;
                }
            }
            else
            {
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

            return 0;
        }

        private float TypeConversion(EquationType type)
        {
            int i1 = 1, i2 = 2, i3 = 3, i4 = 4;
            float f1 = 1.0f, f2 = 2.0f, f3 = 3.0f, f4 = 4.0f;

            if (type == EquationType.Before)
            {
                var y = i1 + f1 + i2 + f2 + i3 + f3 + i4 + f4;
                return y;
            }
            else
            {
                var y = i1 + i2 + i3 + i4 + f1 + f2 + f3 + f4;
                return y;
            }
        }

        private double EliminationRedundantCalculations(double a, double b, double c, double e, double x, EquationType type)
        {
            if (type == EquationType.Before)
            {
                double y = x + a / b * c;
                double z = e + a / b * c;
                return z;
            }
            else
            {
                double abc = a / b * c;
                double y = a + abc;
                double z = e + abc;
                return z;
            }
        }

        private double EfficientInstructions(EquationType type)
        {
            int a;
            int x;
            if (type == EquationType.Before)
            {
                a = 0;
                for (int nr = 0; nr < 50; nr++)
                {
                    if (tab[nr] < a)
                        a = tab[nr];
                }
            }
            else if (type == EquationType.After)
            {
                a = 0;
                for (int nr = 0; nr < 50; nr++)
                {
                    x = tab[nr];
                    if (x < a) a = x;
                }
            }
            else
            {
                a = 0;
                for (int nr = 0; nr < 50; nr++)
                {
                    x = tab[nr];
                    a = x < a ? x : a;
                }
            }
            return Convert.ToDouble(a);
        }

        private double EconomicalOperation1(double a)
        {
            a = a + a;
            a = a + a;
            return a;
        }

        private double EconomicalOperation2(double a, double b, double c, double x, EquationType type)
        {
            if (type == EquationType.Before)
            {
                double y = c / x;
                double z = a + b / x;
                return z;
            }
            else
            {
                double xOdwr = 1.0 / x;
                double y = c * xOdwr;
                double z = a + b * xOdwr;
                return z;
            }
        }

        private double ReductionOfVarWithSingleRef(double a, double b, double c, double e)
        {
            double d = a + b * c;
            return d + e;
        }

        private double Series(int n, double x, EquationType type)
        {
            double[] array = new double[n];
            double result = array[0];
            if (type == EquationType.Before)
            {
                for (int i = 1; i < array.Length; i++)
                {
                    result += array[i] * x * n;
                }
            }
            else
            {
                for (int i = 1; i < array.Length; i++)
                {
                    result += array[i] * x;
                }
                result *= n;
            }

            return result;
        }
    }

    public enum EquationType
    {
        Before = 1,
        After = 2,
        AfterAnother = 3
    }

    public class MathData
    {
        public Dictionary<string, List<EquationData>> EquationsDictionary { get; set; }
        public ValuesData Values { get; set; }
        public double NetSummaryTime { get; set; }
        public double JsSummaryTime { get; set; }
    }

    public class EquationData
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Equation Before { get; set; }
        public Equation After { get; set; }

        public EquationData(int id, string name)
        {
            Id = id;
            Name = name;
        }
    }

    public class Equation
    {
        public string Formula { get; set; }
        public string ValuesFormula { get; set; }
        public List<string> Values { get; set; }
        public double Result { get; set; }
        public double NetTimeTaken { get; set; }
        public double JSTimeTaken { get; set; }
        public Func<double, double> Func { get; set; }
        public ValuesData ValuesData { get; set; }

        public Equation(string formula, int count, Func<double, float> func)
        {
            ValuesFormula = formula;
            Formula = formula;
            Calculate(count, func);
        }

        public Equation(string formula, string valuesFormula, int count, Func<double, float> func)
        {
            ValuesFormula = valuesFormula;
            Formula = formula;
            Calculate(count, func);
        }

        public Equation(string formula, int count, Func<double, double> func)
        {
            ValuesFormula = formula;
            Formula = formula;
            Calculate(count, func);
        }

        public Equation(string formula, string valuesFormula, int count, Func<double, double> func)
        {
            ValuesFormula = valuesFormula;
            Formula = formula;
            Calculate(count, func);
        }

        private void Calculate(int count, Func<double, double> func)
        {
            var watch = System.Diagnostics.Stopwatch.StartNew();
            for (var i = 0; i < count; i++)
            {
                Result = func(count);
            }
            watch.Stop();
            NetTimeTaken = watch.Elapsed.TotalMilliseconds;
        }

        private void Calculate(int count, Func<double, float> func)
        {
            var watch = System.Diagnostics.Stopwatch.StartNew();
            for (var i = 0; i < count; i++)
            {
                Result = func(count);
            }
            watch.Stop();
            NetTimeTaken = watch.Elapsed.TotalMilliseconds;
        }
    }

    public class ValuesData
    {
        public double A { get; set; }
        public double B { get; set; }
        public double C { get; set; }
        public double D { get; set; }
        public double E { get; set; }
        public double X { get; set; }
        public int W { get; set; }
        public int N { get; set; }
        public int Count { get; set; }
    }
}
