using System;
using Microsoft.AspNetCore.Mvc;
using PP_Optimalization.Service;

namespace PP_Optimalization.Controllers
{
    [Route("[controller]")]
    public class HomeController : Controller
    {
        private readonly IMathService _mathService;

        public HomeController(IMathService mathService)
        {
            _mathService = mathService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            
            var random = new Random();
            double a = random.NextDouble() * 10;

            random = new Random();
            double b = random.NextDouble() * 10;

            random = new Random();
            double c = random.NextDouble() * 10;

            random = new Random();
            double d = random.NextDouble() * 10;

            random = new Random();
            double e = random.NextDouble() * 10;

            random = new Random();
            int n = random.Next() * 10;

            random = new Random();
            double x = random.NextDouble() * 10;

            random = new Random();
            int count = random.Next() * 10000000;

            ValuesData valuesData = new ValuesData
            {
                A = a,
                B = b,
                C = c,
                D = d,
                E = e,
                N = n,
                Count = count,
                X = x
            };

            var data = _mathService.GetExamples(valuesData);

            return Ok(data);
        }

        [HttpPost]
        public IActionResult Post(ValuesData valuesData)
        {
            var data = _mathService.GetExamples(valuesData);

            return Ok(data);
        }
    }
}
