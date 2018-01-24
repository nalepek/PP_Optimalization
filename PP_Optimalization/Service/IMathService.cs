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


        private int[][] __aTab = new int[100][];
        private int[][] __bTab = new int[100][];
        private int[][] __cTab = new int[100][];

        private int[][] __t1Tab = new int[100][];
        private int[][] __t2Tab = new int[100][];

        public MathService()
        {
            for (var i = 0; i < 100; i++)
            {
                __aTab[i] = new int[100];
                __bTab[i] = new int[100];
                __cTab[i] = new int[100];
                __t1Tab[i] = new int[100];
                __t2Tab[i] = new int[100];
            }
        }

        public MathData GetExamples(ValuesData valuesData)
        {
            return Factory(valuesData);
        }

        private MathData Factory(ValuesData valuesData)
        {
            var data = new MathData();

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

            data.Values = values;
            data.EquationsDictionary = dictionary;
            return data;
        }

        private List<EquationData> EquationsFactory(ValuesData v)
        {
            int i = 0;
            var list = new List<EquationData>
            {
                new EquationData(i++, "Optymalizacja lokalna")
                {
                    Before = new Equation("Math.Pow(x, 2) / b - a * x / b", v.Count, z => Math.Pow(v.X, 2) / v.B - v.A * v.X / v.B),
                    After = new Equation("(x * x - x * a) / b", v.Count, z => (v.X * v.X - v.X * v.A) / v.B)
                },

                new EquationData(i++, "Optymalizacja lokalna")
                {
                    Before = new Equation("Math.Pow(x, 2) / b - a * x / b", v.Count, z => Math.Pow(v.X, 2) / v.B - v.A * v.X / v.B),
                    After = new Equation("x * (x - a) / b", v.Count, z => v.X * (v.X - v.A) / v.B)
                },

                new EquationData(i++, "Optymalizacja lokalna")
                {
                    Before = new Equation("a * b * c + a * b * d + a * e", v.Count, z => v.A * v.B * v.C + v.A * v.B * v.D + v.A * v.E),
                    After = new Equation("a * (b * (c + d) + e)", v.Count, z => v.A * (v.B * (v.C + v.D) + v.E))
                },

                new EquationData(i++, "Optymalizacja lokalna")
                {
                    Before = new Equation("a[n] * x * n + a[n - 1] * x *(n - 1)+ ... + a[1] * x + a[0]", v.Count, z => Series(v.N, v.X, EquationType.Before)),
                    After = new Equation("...((a[n] * x + a[n - 1]) * x + a[n - 2] * x + ... + a[1]) * x + a[0]", v.Count, z => Series(v.N, v.X, EquationType.After))
                },

                new EquationData(i++, "Optymalizacja lokalna")
                {
                    Before = new Equation("- a + b", v.Count, z => - v.A + v.B),
                    After = new Equation("b - a", v.Count, z => v.B - v.A)
                },

                new EquationData(i++, "Likwidacja zmiennych z jednokrotnym odwołaniem")
                {
                    Before = new Equation(String.Concat("d = a + b * c ", Environment.NewLine, "y = d + e") , v.Count, z => ReductionOfVarWithSingleRef(v.A, v.B, v.C, v.E)),
                    After = new Equation("y = a + b * c + e", v.Count, z => v.A + v.B * v.C + v.E)
                },

                new EquationData(i++, "Stosowanie oszczedniejszych operacji")
                {
                    Before = new Equation("2 * a" , v.Count, z => 2 * v.A),
                    After = new Equation("a + a", v.Count, z => v.A + v.A)
                },

                new EquationData(i++, "Stosowanie oszczedniejszych operacji")
                {
                    Before = new Equation("3 * a" , v.Count, z => 3 * v.A),
                    After = new Equation("a + a + a", v.Count, z => v.A + v.A + v.A)
                },

                new EquationData(i++, "Stosowanie oszczedniejszych operacji")
                {
                    Before = new Equation("4 * a" , v.Count, z => 4 * v.A),
                    After = new Equation(String.Concat("a = a + a ", Environment.NewLine, "a = a + a"), v.Count, z => EconomicalOperation1(v.A))
                },

                new EquationData(i++, "Stosowanie oszczedniejszych operacji")
                {
                    Before = new Equation("a / 2" , v.Count, z => v.A / 2),
                    After = new Equation("a * 0.5", v.Count, z => v.A * 0.5)
                },

                new EquationData(i++, "Stosowanie oszczedniejszych operacji")
                {
                    Before = new Equation(String.Concat("y = c / x ", Environment.NewLine, "z = a + b / x") , v.Count, z => EconomicalOperation2(v.A, v.B, v.C, v.X, EquationType.Before)),
                    After = new Equation(String.Concat("xOdwr = 1.0 / x ", Environment.NewLine, "y = c * xOdwr", Environment.NewLine, "z = a + b * xOdwr"), v.Count, z => EconomicalOperation2(v.A, v.B, v.C, v.X, EquationType.After))
                },

                new EquationData(i++, "Wyliczanie wartosci stałych")
                {
                    Before = new Equation("b = 4 * a * atan(1) / 180 + c" , v.Count, z => v.B = 4 * v.A * Math.Atan(1) / 180 + v.C),
                    After = new Equation("b = a * 0.017453292519943295 + c", v.Count, z => v.B = v.A * 0.017453292519943295 + v.C)
                },

                new EquationData(i++, "Stosowanie efektywniejszych instrukcji")
                {
                    Before = new Equation(String.Concat("a = 0 ", Environment.NewLine, "for(int nr = 0; nr < 50; nr++) {", Environment.NewLine, "if(tab[nr] < a) a = tab[nr];", Environment.NewLine, "}") , v.Count, z => EfficientInstructions(EquationType.Before)),
                    After = new Equation(String.Concat("a = 0;", Environment.NewLine, "for (int nr = 0; nr < 50; nr++) { ", Environment.NewLine, "x = tab[nr];", Environment.NewLine, "if (x < a) a = x;", Environment.NewLine, "}"), v.Count, z => EfficientInstructions(EquationType.After))
                },

                new EquationData(i++, "Stosowanie efektywniejszych instrukcji")
                {
                    Before = new Equation(String.Concat("a = 0 ", Environment.NewLine, "for(int nr = 0; nr < 50; nr++) {", Environment.NewLine, "if(tab[nr] < a) a = tab[nr];", Environment.NewLine, "}") , v.Count, z => EfficientInstructions(EquationType.Before)),
                    After = new Equation(String.Concat("a = 0;", Environment.NewLine, "for (int nr = 0; nr < 50; nr++) { ", Environment.NewLine, "x = tab[nr];", Environment.NewLine, "a = x < a ? x : a;", Environment.NewLine, "}"), v.Count, z => EfficientInstructions(EquationType.AfterAnother))
                },

                new EquationData(i++, "Eliminacja obliczen redundantnych")
                {
                    Before = new Equation(String.Concat("y = x + a / b * c", Environment.NewLine, "z = e + a / b * c") , v.Count, z => EliminationRedundantCalculations(v.A, v.B, v.C, v.E, v.X, EquationType.Before)),
                    After = new Equation(String.Concat("abc = a / b * c", Environment.NewLine, "y = a + abc", Environment.NewLine, "z = e + abc"), v.Count, z => v.A * 0.5)
                },

                new EquationData(i++, "Konwersja typów")
                {
                    Before = new Equation("y = i1 + f1 + i2 + f2 + i3 + f3 + i4 + f4" , v.Count, z => TypeConversion(EquationType.Before)),
                    After = new Equation("y = i1 + i2 + i3 + i4 + f1 + f2 + f3 + f4", v.Count, z => TypeConversion(EquationType.After))
                },

                new EquationData(i++, "Optymalizacja globalna: Rozwijanie petli")
                {
                    Before = new Equation(String.Concat("for (int nr = 0; nr < 10; nr++) ", Environment.NewLine, "tab1[nr] = 0;") , v.Count, z => ExpandLoop(EquationType.Before)),
                    After = new Equation(String.Concat("tab[0] = 0", Environment.NewLine, "... tab[10] = 10"), v.Count, z => ExpandLoop(EquationType.After))
                },

                new EquationData(i++, "Łączenie pętli")
                {
                    Before = new Equation(String.Concat("for(int nr=0; nr<100; nr++)", Environment.NewLine, "tab1[nr]=0;",
                                                        Environment.NewLine, "for (int nr = 0; nr < 100; nr++)", Environment.NewLine,
                                                        "tab2[nr]=0;") , v.Count, z => JoinLoop(EquationType.Before)),
                    After = new Equation(String.Concat("for(int nr=0; nr<100; nr++){", Environment.NewLine, "tab1[nr]=0;",
                                                       Environment.NewLine, "tab2[nr]=1; }"),
                                            v.Count, z => JoinLoop(EquationType.After))
                },

                new EquationData(i++, "Przenoszenie operacji niezmienniczych w pętli poza pętle (w tym konwersji typów)")
                {
                    Before = new Equation(String.Concat("for(int nr1=0; nr1<100; nr1++)", Environment.NewLine,
                                                            "for (int nr2 = 1; nr2 < 100; nr2++)", Environment.NewLine,
                                                                "t1[nr1][nr2] = t2[nr1][nr2] + a / nr1 - c / d;"), v.Count, z => MoveUnusedOutOfLoop(v.A, v.C, v.D, EquationType.Before)),
                    After = new Equation(String.Concat("cd=c/d;", Environment.NewLine,
                                                       "for(int nr1=0; nr1<100; nr1++){", Environment.NewLine,
                                                       "abcd=a/nr1-cd;", Environment.NewLine,
                                                       "for(int nr2=1; nr2<100; nr2++)", Environment.NewLine,
                                                       "t1[nr1][nr2]=t2[nr1][nr2]+abcd; }"),
                                         v.Count, z => MoveUnusedOutOfLoop(v.A, v.C, v.D, EquationType.After))
                },

                new EquationData(i++, "Przenoszenie testowania poza pętle")
                {
                    Before = new Equation(String.Concat("for (int nr = 0; nr < 100; nr++)", Environment.NewLine,
                                                            "if (W) x[nr] = a[nr] + b[nr];", Environment.NewLine,
                                                            "else x[nr] = a[nr] - b[nr];", Environment.NewLine)
                                                            , v.Count, z => MoveTestingOutOfLoop(EquationType.Before)),
                    After = new Equation(String.Concat("if (W)", Environment.NewLine,
                                                       "for (int nr = 0; nr < 100; nr++)", Environment.NewLine,
                                                       "x[nr] = a[nr] + b[nr];", Environment.NewLine,
                                                       "else", Environment.NewLine,
                                                       "for (int nr = 0; nr < 100; nr++)", Environment.NewLine,
                                                       "x[nr] = a[nr] - b[nr];")
                                         , v.Count, z => MoveTestingOutOfLoop(EquationType.After))
                },

                new EquationData(i++, "Minimalizacja liczby indeksów w odwołaniach do elementów tablice")
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

        private double MoveTestingOutOfLoop(EquationType type)
        {
            var rand = new Random();
            var num = rand.Next() * 100;
            var W = num > 30 ? true : false;

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
            int _a = Convert.ToInt32(a);
            int _c = Convert.ToInt32(c);
            int _d = Convert.ToInt32(d);

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
            int[] tab = new int[50];
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
        public IList<string> Values { get; set; }
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
        public List<string> Values { get; set; }
        public double Result { get; set; }
        public long NetTimeTaken { get; set; }
        public long JSTimeTaken { get; set; }
        public Func<double, double> Func { get; set; }

        public Equation(string formula, int count, Func<double, float> func)
        {
            Formula = formula;
            Calculate(count, func);
        }

        public Equation(string formula, int count, Func<double, double> func)
        {
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
            NetTimeTaken = watch.ElapsedMilliseconds;
        }

        private void Calculate(int count, Func<double, float> func)
        {
            var watch = System.Diagnostics.Stopwatch.StartNew();
            for (var i = 0; i < count; i++)
            {
                Result = func(count);
            }
            watch.Stop();
            NetTimeTaken = watch.ElapsedMilliseconds;
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
        public int N { get; set; }
        public int Count { get; set; }
    }
}
